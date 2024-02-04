import React, { FC } from 'react';

import { StyledContainerTitle } from './styles.title';
import { TitleProps } from './types';

const Title: FC<TitleProps> = ({ title, align }) => {
  return (
    <StyledContainerTitle $align={align}>
      {title}
    </StyledContainerTitle>
  );
};

export default Title;
