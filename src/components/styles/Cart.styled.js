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
    padding-left: 20px;
    margin-right: 15px;
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
    justify-content: space-between;
    // width: 292px;
    text-align: left;
    margin-bottom: 10px;
    margin-right: 50px;
`

export const ProductImgsBlock = styled.div`
    display: flex;
    flex-direction: row;
    // width: 292px;
    // heigh: 185px;
    // text-align: left;
`
export const Counter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 10px;

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
        position: none; // absolute
        top: 30px;
        width: 100px; //100%
    margin-bottom: 10px;

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
    display: ${props => props.active ? '' : 'none'};
    position: absolute;
    // width: 350px;
    left: 850px;
    // border-bottom: 2px solid;
    border-color: #black;
    background-color: #FFFFFF;
    z-index: 1;
`

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`

export const TotalTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    /* or 112% */


    color: #1D1F22;

`

export const TotalAmount = styled.span`
    
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    /* identical to box height, or 26px */

    display: flex;
    align-items: center;
    text-align: right;

    color: #1D1F22;
`
export const CartButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
`

export const ViewBagButton = styled.button`
    width: 140px;
    // width: 45%;

    height: 43px;
    border: 1px solid;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #1D1F22;
    :hover {
        cursor: pointer;
    }
`

export const CheckoutButton = styled.button`
    height: 43px;
    width: 140px;
    // width: 45%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #5ECE7B;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    :hover {
        cursor: pointer;
    }
`