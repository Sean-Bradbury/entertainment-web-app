// Dependencies
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Icons
import MovieIcon from './Movie.svg';

// Images
import user from './user.png';

// Components
import Icon from '../Icon/Icon';

export interface IMenuProps {
  themeName: string;
}

const Menu = ({ themeName }: IMenuProps) => {
  const returnActiveNavColor = useMemo(() => {
    return themeName === 'default' ? '#fff' : '#000';
  }, [themeName]);

  return (
    <Nav className="menu" aria-label="main menu">
      <div className="menu__area-one">
        <img
          className="menu__movie-icon"
          src={MovieIcon}
          alt="Movie Icon"
          aria-label="Movie Icon"
        />
      </div>
      <nav className="menu__area-two">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navlink active' : 'navlink'
          }
        >
          <Icon type="home" />
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? 'navlink active' : 'navlink'
          }
        >
          <Icon type="movies" />
        </NavLink>
        <NavLink
          to="/tv"
          className={({ isActive }) =>
            isActive ? 'navlink active' : 'navlink'
          }
        >
          <Icon type="tv" />
        </NavLink>
        <NavLink
          to="/bookmark"
          className={({ isActive }) =>
            isActive ? 'navlink active' : 'navlink'
          }
        >
          <Icon type="bookmark" />
        </NavLink>
      </nav>
      <div className="menu__area-three">
        <img src={user} alt="User" aria-label="User" />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.theme.palette.background.light};
  border-radius: 10px;
  padding: 1.5rem;
  justify-content: space-between;
  margin: 1rem;
  .menu__area-one,
  .menu__area-two,
  .menu__area-three {
    display: flex;
    align-items: center;
  }
  .menu__area-two {
    gap: 2rem;
    a.navlink {
      transition: ${(props) => props.theme.transitions.default};
    }
    a.navlink.active {
      svg path {
        fill: #fff;
      }
    }
    a.navlink:hover {
      svg path {
        fill: ${(props) => props.theme.palette.primary.main};
      }
    }
    a.navlink:active {
      transform: scale(1.1);
    }
  }
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    width: 70px;
    height: calc(100vh - 2rem);
    .menu__area-two {
      flex-direction: inherit;
      justify-self: flex-start;
    }
    .menu__area-three {
      justify-self: flex-end;
      margin-top: auto;
    }
  }
`;

export default Menu;
