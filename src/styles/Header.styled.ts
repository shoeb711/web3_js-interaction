import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface iProps {
  width?: string;
  margin_top?: string;
}

export const StyledHeader = styled.div`
  background-color: #b09b71;
  height: 80px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrap = styled.div`
  margin: 0 30px;
  display: flex;
  align-items: center;

  button {
    border: 1px solid #fff;
    border-radius: 14px;

    cursor: pointer;
    font-size: 12pt;
    font-weight: 700;
    padding: 10px 20px;
  }

  button:hover {
    border: 1px solid #f1c9da;
    color: #bc005a;
  }

  .active {
    font-weight: bold;
    color: #fff;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const ConnectedHeaderWrap = styled.div`
  display: block;
`;

export const ConnectedAccountButtonWrap = styled.div`
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 14px;
  cursor: default;
  display: inline-block;
  font-weight: 700;
  width: auto;

  span {
    padding: 0 10px 0 12px;
  }
`;

export const NavTab = styled.div`
  margin-right: 1rem;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const Button = styled.button<iProps>`
  height: 40px;
  width: ${(props) => (props.width ? props.width : '100px')};
  border-radius: 16px;
  border: none;
  /* box-shadow: 1.4px 3px #886f6f; */
  transition: 0.3s;
  margin-top: ${(props) => (props.margin_top ? props.margin_top : '0px')};

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #886f6f;
    transform: translateY(-0.25em);
  }
`;
