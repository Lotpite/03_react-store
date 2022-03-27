import styled from "styled-components"

export const StyledNavigation = styled.div `
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 234px;
height: 56px;
left: 101px;
bottom: 0px;
`;

export const NavItem = styled.div `
    margin-right: 32px;
    :hover {
        cursor: pointer;
    }
`

export const activeNavITem = styled(NavItem)`
    font-weight: 700;
    color: black;
`