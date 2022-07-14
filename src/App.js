import './App.css';
import ToggleText from './components/toggle-text';
import Counter from './components/counter';
import SecondCounter from './components/second-counter';
import { useContext } from 'react';
import UserContext from './context/user-context';
import DisplayUserInfo from './components/display-user-info';
import ChangeNumber from './components/change-number';

function App() {
  const {username, email, city} = useContext(UserContext);
  const value = {username, email, city};

  return (
    <>
    <h1 className='h1'>React Hooks Demo</h1>
    <ToggleText/>
    <Counter/>
    <SecondCounter/>
    <ChangeNumber/>
    <UserContext.Provider value={value}>
      <DisplayUserInfo/>
    </UserContext.Provider>
    </>
  );
}

export default App;
