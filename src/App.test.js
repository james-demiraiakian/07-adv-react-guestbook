import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

test('Tests that entries are rendered', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByLabelText('password');
  expect(passwordInput).toBeInTheDocument();

  const logButton = screen.getByRole('button', { name: /sign in/i });
  expect(logButton).toBeInTheDocument();

  userEvent.type(emailInput, 'james.armen@gmail.com');
  userEvent.type(passwordInput, '12345678');
  userEvent.click(logButton);

  let headerText = screen.getByText(/welcome to the guestbook, james.armen@gmail.com!/i);
  expect(headerText).toBeInTheDocument();

  let buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(3);

  const messageEntry = screen.getByRole('textbox', { name: /entry:/i });
  userEvent.type(messageEntry, 'Hello!');

  const signButton = screen.getByRole('button', { name: /sign guestbook/i });
  userEvent.click(signButton);

  expect(screen.getByText(/~james.armen@gmail.com/i)).toBeInTheDocument();
  expect(screen.getByText(/hello!/i)).toBeInTheDocument();

  const headings = screen.getAllByRole('heading');
  expect(headings.length).toBe(1);

  buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(3);
});
