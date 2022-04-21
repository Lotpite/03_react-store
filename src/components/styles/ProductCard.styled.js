import styled from "styled-components";

export const CardContainer = styled.div `

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 20px;
`

export const CartSpan = styled.span`
    visibility: hidden;
    position: absolute;
    left: 78%;
    top: 70%;
    img {
        width: 52px;
        height: 52px;
    }
`
export const OutStockLabel = styled.span`
    position: absolute;
    top: 40%;
    left: 35%;
    display: ${props => props.inStock ? 'none' : ""};
    opacity: 0.5;
`


export const CardItem = styled.div `
    position: relative;
    // display: disabled;
    flex: 0 33%
    width: 300px;
    height: 444px;
    // border: 2px solid;
    margin-top: 100px;
    margin-right: 40px;
    padding: 16px;
    text-align: left;
    opacity: ${props => props.inStock ? 1 : 0.5};
    h3 {
        margin-top: 15px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        text-align: left;
        color: #1D1F22;
        opacity: 0.8;
    }

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        text-align: left;
        color: #1D1F22;
    }
    :hover {
	transform: translateY(-0.5rem) scale(1.0125);
	box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5);
        ${CartSpan} {
            visibility: visible;
        }
    }
`

export const MainImg = styled.img`
    width: 280px;
    height: 320px;
`




