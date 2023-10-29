import React, { FC, memo } from 'react';

import { ImagesEnum } from '@/enums/images.enum';
import { InfoEnum } from '@/enums/info.enum';

import { Styled } from './styles';

/**
 * Loading - Displays a loading image.
 *
 * - The image source is set via the `ImagesEnum` enumeration.
 * - Alt text is derived from the `InfoEnum` enumeration.
 * - Image dimensions are set to 500x500.
 * - The image is given priority in the rendering pipeline.
 *
 * This component can be used throughout the application to indicate loading states or asynchronous operations.
 *
 * @component
 * @example
 *   return <Loading />;
 */
const Loading: FC = () => {
  return (
    <Styled.Loading
      src={ImagesEnum.LOADING}
      alt={InfoEnum.IMAGE_LOADING}
      width={500}
      height={500}
      priority
    />
  );
};

export default memo(Loading);
