// Dependencies
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, secondaryTheme } from './theme';
import styled from 'styled-components';
import { Routes, Route, Outlet } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import TV from './pages/TV';
import Bookmark from './pages/Bookmark';

// Components
import ThemeSwitcherButton from './components/interface/ThemeSwitcherButton/';
import Menu from './components/Menu';

//Styles
import './App.css';

const themeVariants = {
  default: defaultTheme,
  secondary: secondaryTheme,
};

function App() {
  const [theme, setTheme] = useState({
    name: 'default',
    variant: themeVariants.default,
  });

  const changeTheme = () => {
    setTheme((_prevTheme) => {
      if (_prevTheme.name === 'default')
        return {
          name: 'secondary',
          variant: themeVariants.secondary,
        };

      return { name: 'default', variant: themeVariants.default };
    });
  };

  const Layout = () => {
    return (
      <AppContainer className="App">
        <header className="App__menu">
          <Menu themeName={theme.name} />
        </header>
        <main className="App__main">
          <Outlet />
        </main>
      </AppContainer>
    );
  };

  return (
    <ThemeProvider theme={theme.variant}>
      <ThemeSwitcherButton
        theme={theme.name === 'default' ? 'dark' : 'light'}
        changeTheme={changeTheme}
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv" element={<TV />} />
          <Route path="bookmark" element={<Bookmark />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.palette.background.dark};
  color: ${(props) => props.theme.palette.background.contrastText};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .App__main {
    padding: 1.5rem;
  }
`;

export default App;
