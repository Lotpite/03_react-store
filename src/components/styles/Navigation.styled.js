import styled from "styled-components"

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