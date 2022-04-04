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
    }


`

export const DropdownMenu = styled.div`
    display: ${(props) => console.log(props)};
    flex-direction: column;
    justify-content: space-around;

    ul {
        list-style: none;

        li {
            margin-top:10px;
        }
    }

    :hover {
        cursor: pointer;
    }
`