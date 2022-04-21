import styled from "styled-components";

export const StyledActions = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 204px;
    height: 40px;
    margin-right: 100px;

    // span {
    //     margin-left: 20px;
    // }

`

export const CartSymbol = styled.span`
    position: relative; 
    margin-left: 20px;

    img {
        margin-top: 2px;
        width: 20px;
        height: 20px;
    }
    :hover {
        cursor: pointer;
    }
`

export const ItemsQty = styled.span`
    position: absolute; 
    left: 10px;
    top: -60%;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #212121;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
`