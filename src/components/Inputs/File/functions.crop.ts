import React from 'react';
import { Area } from 'react-easy-crop';

type HandleCropType = {
    croppedAreaPixels: Area | null
    imagePreviewUrl: string
    setFileImage: React.Dispatch<React.SetStateAction<File | null>>
    setImagePreviewUrl: React.Dispatch<React.SetStateAction<string>>
    setIsCropping: React.Dispatch<React.SetStateAction<boolean>>
}

export const getCroppedImg = async (imageSrc: string, pixelCrop: Area): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;
      const ctx = canvas.getContext('2d')!;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        resolve(blob);
      }, 'image/jpeg');
    };
    image.onerror = reject;
  });
};

export const handleCrop = async (props: HandleCropType) => {
  const { imagePreviewUrl, croppedAreaPixels, setFileImage, setImagePreviewUrl, setIsCropping } = props;
  if (!croppedAreaPixels || !imagePreviewUrl) return;
  try {
    const croppedBlob = await getCroppedImg(imagePreviewUrl, croppedAreaPixels);
    const croppedFile = new File([croppedBlob], 'croppedImage.jpeg', { type : 'image/jpeg' });
    setFileImage(croppedFile);

    const croppedImageUrl = URL.createObjectURL(croppedBlob);
    setImagePreviewUrl(croppedImageUrl);
    setIsCropping(false);
  } catch (e) {
    console.error(e);
  }
};
