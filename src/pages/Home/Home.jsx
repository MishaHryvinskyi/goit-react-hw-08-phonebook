import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Phonebook</h1>
      <NavLink to="/login" title="Try it now!">
        Try it now!
      </NavLink>
    </div>
  );
}