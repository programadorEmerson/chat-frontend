import React, { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import { FaTrash } from 'react-icons/fa';
import { MdCrop } from 'react-icons/md';

import { FormikProps } from 'formik';

import { UserRegister } from '@/interfaces/company.interface';

import ImagesConstants from '@/constants/images.constants';
const noPhotoImgPath = '/assets/no-photo.png';

import { handleCrop } from './functions.crop';
import {
  HiddenInput,
  StyledContainerImageWrapper,
  StyledLabel,
  Overlay,
  CropperContainer,
  CropButton,
  ZoomSlider,
  StyledContainetControllers,
  StyledButtonRemoveImage
} from './styles.fileinput';

export interface InputFileProps<T extends {user: UserRegister}> extends InputHTMLAttributes<HTMLInputElement> {
  formik: FormikProps<T>;
  disabled: boolean;
  type: 'file';
}

const InputImage = <T extends {user: UserRegister}>(props: InputFileProps<T>): JSX.Element => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [crop, setCrop] = useState<Point>({ x : 0, y : 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isCropping, setIsCropping] = useState<boolean>(false);

  useEffect(() => {
    if(fileImage) props.formik.setFieldValue('user.fileImg', fileImage);
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

  useEffect(() => {
    if (!props.formik.values.user.fileImg) {
      fetch(noPhotoImgPath)
        .then((response) => response.blob())
        .then((blob) => {
          const file = new File([blob], 'no-photo.png', { type : 'image/png' });
          props.formik.setFieldValue('user.fileImg', file);
        })
        .catch((error) => {
          console.error('Erro ao carregar a imagem de placeholder:', error);
        });
    }
  }, [props.formik.values.user.fileImg]);

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
            <CropButton
              type='button'
              onClick={() => {
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
            style={{
              backgroundImage : `url(${props.formik.values.user.fileImg
                ? URL.createObjectURL(props.formik.values.user.fileImg)
                : imagePreviewUrl || ImagesConstants.user})`
            }}
          />
          <HiddenInput
            id={`file-input-${props.name}`}
            type="file"
            name={props.name}
            disabled={props.disabled}
            accept="image/*"
            onChange={handleImageChange}
          />
          <StyledButtonRemoveImage
            $showButton={imagePreviewUrl.length > 0}
            type="button"
            onClick={() => {
              props.formik.setFieldValue('user.fileImg', null);
              setImagePreviewUrl('');
              setFileImage(null);
            }}
          >
            <FaTrash fontSize={13} />
          </StyledButtonRemoveImage>
        </>
      )}
    </StyledContainerImageWrapper>
  );
};

export default InputImage;
