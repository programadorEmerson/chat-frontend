import ContextsProvider from '@/contexts/';

import Login from '@/app/login/page';
import { render, screen } from '@testing-library/react';

describe('Renders the "/login" route and...', () => {
  test('must contain a button with the text "enviar"', async () => {
    render(
      <ContextsProvider>
        <Login />
      </ContextsProvider>
    );

    const signinButton = screen.getByRole('button', { name : /enviar/i });
    expect(signinButton).not.toBeDisabled();
  });
});
