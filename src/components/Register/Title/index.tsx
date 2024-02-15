import React, { FC } from 'react';

import { StyledContainerTitle } from './styles.title';
import { TitleProps } from './types';

const Title: FC<TitleProps> = ({ title, align }) => (
  <StyledContainerTitle
    $align={align}>
    <h6>{title}</h6>
  </StyledContainerTitle>
);

export default Title;
