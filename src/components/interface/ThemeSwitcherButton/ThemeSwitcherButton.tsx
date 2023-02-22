// Dependencies
import React, {useMemo} from 'react';
import styled from 'styled-components';

// Icons
import { MoonIcon, SunIcon } from './icons';

export interface IThemeSwitcherBtnProps {
    theme: 'light' | 'dark';
    changeTheme: () => void;
}

export default function ThemeSwitcherBtn ({theme, changeTheme}: IThemeSwitcherBtnProps) {
  // Return the correct icon based on the theme
  const returnIcon = useMemo(() => {
    if(theme === 'light') return <SunIcon />;

    return <MoonIcon />;
  }, [theme]);

  return (
    <SwitcherBtn onClick={changeTheme}>
        {returnIcon}
    </SwitcherBtn>
  );
}

const SwitcherBtn = styled.button`
  position: relative;
  background-color: transparent;
  overflow: hidden;
  border: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  outline: none;
  padding: 1rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  transition: all 0.3s ease-in-out;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: 0 ;
    background-color: ${(props) => props.theme.palette.primary.main};
  }
  &:hover {
    &::before {
      filter: brightness(0.9);
    }
  }
  svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: ${(props) => props.theme.palette.primary.contrastText};
    z-index: 1;
  }
`;

