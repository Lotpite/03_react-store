import styled from "styled-components"
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    margin-right: 32px;
    text-decoration: none;
    text-transform: uppercase;

    align-items: center;
    text-align: center;
    :hover {
        cursor: pointer;
    }
`

export const CategoryName = styled.p`
    color: ${props => props.active === true ? '#5ECE7B' : '#1D1F22'};
    font-weight: ${props => props.active  === true  ? '600' : '400'};
    font-size: 16px;
    font-family: 'Raleway';
    font-style: normal;
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