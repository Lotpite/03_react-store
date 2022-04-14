import styled from "styled-components";

export const CartName = styled.h2`
width: 84px;
height: 40px;
left: 100px;
top: 160px;

font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 40px;
/* identical to box height, or 125% */

text-transform: uppercase;

color: #1D1F22;
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 125px;
    // width: 1100px;
`

export const ItemContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 

`

export const ProductDescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 292px;
    text-align: left;
`

export const ProductImgsBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 292px;
    heigh: 185px;
    text-align: left;
`
export const Counter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`

export const Change = styled.span`
    display: flex;  
    width: 22px; //45
    height: 22px; //45
    border: 2px solid;
    // padding-bottom: 12px;
    line-height: 14px; //35
    justify-content: space-around; 
    text-align: center;
    :hover {
        cursor: pointer;
    }  
`

export const Quantity = styled.span`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500; 
    font-size: 16px; //24
    line-height: 160%;
    /* or 38px */

    align-items: center;
    text-align: center;

    color: #1D1F22;
`

export const ImgWrapper = styled.div`
    position: relative;
    margin-left: 20px;
    // background-color: #393748;

    
    img {
        position: absolute;
        top: 30px;
        width: 100px; //100%
    }
`

export const PrevSlide = styled.span`
    position: absolute;
    font-weight: 500;
    font-size: 24px;
    color: #5ECE7B;
    top: 42%;
    left: 0;
    :hover {
        cursor: pointer;
    }

    display: none;
`

export const NextSlide = styled.span`
    position: absolute;
    font-weight: 500;
    font-size: 24px;
    color: #5ECE7B;
    top: 42%;
    right: 0;
    :hover {
        cursor: pointer;
    }

    display: none;


`

export const Line = styled.span`
    margin: 20px 0 20px 0;
    border-bottom: 2px solid;
    border-color: #E5E5E5;
    heigh: 10px;
    width: 100%;
    
`
// Cart Overlay

export const OverlayContainer = styled.div`
    position: absolute;
    width: 300px;
    left: 1004px;
    // border-bottom: 2px solid;
    border-color: #black;
`