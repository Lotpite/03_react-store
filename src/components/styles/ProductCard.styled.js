import styled from "styled-components";

export const CardContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 1440px;
`

export const CardItem = styled.div `
    width: 300px;
    height: 444px;
    border: 2px solid;
    margin-top: 100px;
    margin-left: calc(50% - 299px/2 - 469.5px);
    padding: 16px;
    text-align: left;

    img {
        width: 280px;
        height: 320px;
         
    }

    h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        text-align: left;
        color: #1D1F22;
    }

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: left;
        color: #1D1F22;
    }
`