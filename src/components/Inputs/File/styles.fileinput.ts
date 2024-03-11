import { InputHTMLAttributes } from 'react';

import { debugMode, fadeIn } from '@/styles/shared.style';

import styled from 'styled-components';

export interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
    $debug?: boolean
}

export const StyledContainerImageWrapper = styled.div<{ $debug?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  align-items: center;
  margin-bottom: 20px;

  ${debugMode}
`;

export const StyledInputFile = styled.input<InputFileProps>`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #eee;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  line-height: 100px;

  ${debugMode}
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 130px;
  height: 130px;
  background-color: transparent;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.75);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CropperContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

export const CropButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1002;
`;

export const ZoomSlider = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 35%;
  height: 8px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin-top: 20px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const StyledContainetControllers = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  z-index: 1002;
  gap: 20px;
`;

export const StyledButtonRemoveImage = styled.button<{$showButton: boolean}>`
  display: ${({ $showButton }) => ($showButton ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 5px;
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1002;
  transition: filter 0.2s;
  width: 25px;
  height: 25px;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
