import { createContext } from 'react';

const UserContext = createContext({
    username: 'george.smith',
    email: 'george.smith@gmail.com',
    city: 'New York'
});

export default UserContext;