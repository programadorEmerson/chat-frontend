import React, { FC } from 'react';

import Image, { ImageProps } from 'next/image';

import StyledImageWrapper from './styles.image-wrapper';

interface ILogoProps extends ImageProps {
  description?: string;
}

export const ImageWrapper: FC<ILogoProps> = (props) => {
  return (
    <StyledImageWrapper
      width={String(props.width)}
      height={String(props.height)}
    >
      <Image
        {...props}
        quality={100}
        priority
      />
      {props.description && (
        <span>
          {props.description}
        </span>
      )
      }
    </StyledImageWrapper>
  );
};
