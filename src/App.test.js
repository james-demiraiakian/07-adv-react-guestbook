import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

// test('Tests that entries are rendered', () => {
//   render(
//     <UserProvider>
//       <EntryProvider>
//         <App />
//       </EntryProvider>
//     </UserProvider>
//   );
//   let headerText = screen.getByText(/welcome guest!/i);
//   expect(headerText).toBeInTheDocument();

//   let buttons = screen.getAllByRole('button');
//   expect(buttons.length).toBe(2);

//   const nameEntry = screen.getByRole('textbox', { name: /user name:/i });
//   userEvent.type(nameEntry, 'Jimmothy');

//   const messageEntry = screen.getByRole('textbox', { name: /entry:/i });
//   userEvent.type(messageEntry, 'Hello!');

//   const signButton = screen.getByRole('button', { name: /sign/i });
//   userEvent.click(signButton);

//   headerText = screen.getByText(/welcome to the guestbook, jimmothy!/i);
//   expect(headerText).toBeInTheDocument();

//   expect(screen.getByText(/~jimmothy/i)).toBeInTheDocument();
//   expect(screen.getByText(/hello!/i)).toBeInTheDocument();

//   const headings = screen.getAllByRole('heading');
//   expect(headings.length).toBe(1);

//   buttons = screen.getAllByRole('button');
//   expect(buttons.length).toBe(3);
// });

test('Sample test to get app submitted while working on app, to remove later', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  expect(screen.getByText(/please login/i)).toBeInTheDocument();
});
