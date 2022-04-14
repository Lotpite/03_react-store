import styled from "styled-components"
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    margin-right: 32px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.active ? '#5ECE7B' : '#1D1F22'};
    font-family: 'Raleway';
    font-style: normal;
    font-weight: ${props => props.active ? '600' : '400'};
    font-size: 16px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    :hover {
        cursor: pointer;
    }
`

export const StyledNavigation = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 234px;
    height: 56px;
    margin-left: 100px;
`;

export const NavItem = styled.div `
    margin-right: 32px;
    text-transform: uppercase;
    
    :hover {
        cursor: pointer;
    }
`

export const activeNavITem = styled(NavItem)`
    font-weight: 700;
    color: #1DCF65;
    text-decoration: underline;
`