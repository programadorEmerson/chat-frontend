import React, { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import { MdCrop } from 'react-icons/md';

import { FormikProps } from 'formik';

import ImagesConstants from '@/constants/images.constants';

import { handleCrop } from './functions.crop';
import {
  HiddenInput,
  StyledContainerImageWrapper,
  StyledLabel,
  Overlay,
  CropperContainer,
  CropButton,
  ZoomSlider,
  StyledContainetControllers
} from './styles.fileinput';

export interface InputFileProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  formik: FormikProps<T>;
  disabled: boolean;
  type: 'file';
}

const InputImage: <T, >(props: InputFileProps<T>) => JSX.Element = <T, >(props: InputFileProps<T>): JSX.Element => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [crop, setCrop] = useState<Point>({ x : 0, y : 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isCropping, setIsCropping] = useState<boolean>(false);

  useEffect(() => {
    console.log('fileImage', fileImage);
  }, [fileImage]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
        setIsCropping(true);
      };

      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = (_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  return (
    <StyledContainerImageWrapper>
      {isCropping ? (
        <Overlay>
          <CropperContainer>
            <Cropper
              image={imagePreviewUrl}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </CropperContainer>
          <StyledContainetControllers>
            <ZoomSlider
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />
            <CropButton onClick={() => {
              handleCrop({
                croppedAreaPixels,
                imagePreviewUrl,
                setFileImage,
                setImagePreviewUrl,
                setIsCropping
              });
            }}>
              <div style={{ display : 'flex', alignItems : 'center', justifyContent : 'center' }}>
                <MdCrop fontSize={20} />
                <span style={{ marginLeft : '0.5rem' }}> Cortar </span>
              </div>
            </CropButton>
          </StyledContainetControllers>
        </Overlay>
      ) : (
        <>
          <StyledLabel
            htmlFor={`file-input-${props.name}`}
            style={{ backgroundImage : `url(${imagePreviewUrl || ImagesConstants.user})` }}
          />
          <HiddenInput
            id={`file-input-${props.name}`}
            type="file"
            name={props.name}
            disabled={props.disabled}
            accept="image/*"
            onChange={handleImageChange}
          />
        </>
      )}
    </StyledContainerImageWrapper>
  );
};

export default InputImage;
