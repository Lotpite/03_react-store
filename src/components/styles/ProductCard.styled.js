import styled from "styled-components";

export const CardContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 1440px;
`

export const CardItem = styled.div `
    border: 2px solid;
    margin-top: 100px;
    padding: 16px;
    text-align: left;

    img {
        width: 354px;
        height: 330px;
    }

    h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 160%;
        text-align: left;
        color: #1D1F22;
    }

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        text-align: left;
        color: #1D1F22;
    }
`