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
    display: ${(props) => props.active ? "active" : "none"};
    z-index: ${(props) => props.active ? "1" : "0"};
    flex-direction: column;
    justify-content: space-around;

    ul {
        list-style: none;

        li {
            margin-top:10px;
            width: 100%;
            text-align: left;

            :hover {
                cursor: pointer;
                color: #1DCF65;
            }
        }
    }
`