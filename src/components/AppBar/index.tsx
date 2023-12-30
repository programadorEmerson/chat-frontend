import React from 'react';

import { StyledContainerLimit } from '@/styles/shared';

import { StyledAppBarContainer, StyledContentAppAbar } from './styles';

const AppBarApplication = () => {
  return (
    <StyledAppBarContainer>
      <StyledContainerLimit>
        <StyledContentAppAbar>
          <div>usuário</div>
          <div>usuário</div>
        </StyledContentAppAbar>
      </StyledContainerLimit>
    </StyledAppBarContainer>
  );
};

export default AppBarApplication;
