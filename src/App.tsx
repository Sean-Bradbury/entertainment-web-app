//Dependencies
import {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { defaultTheme, secondaryTheme } from './theme';

//Components
import logo from './logo.svg';

//Styles
import './App.css';

const themeVariants = {
  default: defaultTheme,
  secondary: secondaryTheme
};

function App() {
  const [theme, setTheme] = useState({name: 'default', variant: themeVariants.default});

  const changeTheme = () => {
    setTheme((_prevTheme) => {
      if(_prevTheme.name === 'default') return {name: 'secondary', variant: themeVariants.secondary};
      
      return {name: 'default', variant: themeVariants.default};
  });
};

  return (
    <ThemeProvider theme={theme.variant}>
      <button onClick={changeTheme}>
        Change Theme
      </button>

    <div className="App">
      <div className="App-header" style={{backgroundColor: theme.variant.palette.primary.main}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
