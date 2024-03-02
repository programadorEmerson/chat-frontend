import React, { FC } from 'react';

import { StyledSimpleButton } from './styles.simpleButton';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const SimpleButton: FC<ButtonProps> = (props) => {
  return (
    <StyledSimpleButton {...props} />
  );
};

export default SimpleButton;
