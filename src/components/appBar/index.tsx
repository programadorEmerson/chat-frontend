import React, { FC, Fragment } from 'react';

import { InfoEnum } from '@/enums/info.enum';

import { useUserContext } from '@/hooks/useUser';

import { Styled } from './styles';

/**
 * AppBar - A navigation bar that displays user-specific actions and information.
 *
 * This component checks if a user is authenticated and, if true,
 * it shows notification icons and user details like name and email.
 * Furthermore, it displays a horizontal line regardless of user authentication.
 *
 * @component
 * @example
 *   return <AppBar />
 */
const AppBar: FC = () => {
  const { user } = useUserContext();
  return (
    <Fragment>
      {user && (
        <Styled.AppBar>
          <Styled.Actions>
            <Styled.NotifyButton>
              <Styled.CommentsIcon />
            </Styled.NotifyButton>
            <Styled.NotifyButton>
              <Styled.NotifyIcon />
            </Styled.NotifyButton>
          </Styled.Actions>
          <Styled.UserInfo>
            <Styled.UserImage
              src={user.urlImage}
              alt={`${InfoEnum.IMAGE_OF_USER} ${user.name}`}
            />
            <Styled.UserDetails>
              <Styled.TextDetails>{user.name}</Styled.TextDetails>
              <Styled.TextDetails>{user.email}</Styled.TextDetails>
            </Styled.UserDetails>
          </Styled.UserInfo>
        </Styled.AppBar>
      )}
      <Styled.HorizontalLine />
    </Fragment>
  );
};

export default AppBar;
