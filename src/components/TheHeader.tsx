import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menus } from '../types';
import styled from 'styled-components';

export const TheHeader: React.FC = () => {
  const loaction = useLocation();
  return (
    <Header>
      <Link to="/" className="logo">
        <span>OMDbAPI</span>.COM
      </Link>
      <nav>
        <ul>
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                to={menu.href}
                className={
                  loaction.pathname === menu.href.split('?')[0] ? 'active' : ''
                }
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link to="/about" className="user">
        <img
          src="https://velog.velcdn.com/images/heelieben/post/63766f3f-ffd7-445e-a7bc-41ba722c7cf0/image.png"
          alt="User"
        />
      </Link>
    </Header>
  );
};

const Header = styled.header`
  padding: 20px 40px;
  background-color: rgba(14, 17, 27, 9);
  position: sticky;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: flex-end;
  gap: 40px;
  .logo {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: var(--color-white-50);
    text-decoration: none;
  }

  .logo span {
    color: var(--color-primary);
  }

  nav ul {
    display: flex;
    gap: 14px;
  }

  nav ul li a {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-white-50);
    text-decoration: none;
  }

  nav ul li a.active {
    color: var(--color-primary);
  }

  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-area);
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: 0.3s;
  }

  .user:hover {
    transform: scale(1.2);
  }

  .user img {
    width: 100%;
    border-radius: 50%;
  }
`;
