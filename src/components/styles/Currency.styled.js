import styled from "styled-components";


export const CurrencyWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const CurrencyMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        height: 5px;
        margin-top: 10%;
        margin-left: 10px;
    }

    :hover {
        cursor: pointer;
        color: #1DCF65;
    }

`

export const DropdownMenu = styled.div`
    display: ${(props) => props.active ? "Flex" : "none"};
    flex-direction: column;
    position: absolute;
    top: 52px;
    left: 1180px;
    box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5);
`


export const DropdownItem = styled.span`
    margin: 20px 40px 0 20px;
    width: 100%;
        :hover {
            cursor: pointer;
            color: #1DCF65;
        }
`