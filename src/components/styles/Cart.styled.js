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
    padding-left: 10px;
    margin-right: 15px;
    // width: 1100px;
`

export const ItemContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    margin-bottom: 20px;

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
    width: ${props => props.isBig ? "45px" : "22px"};
    height: ${props => props.isBig ? "45px" : "22px"};
    border: 2px solid;
    font-size: ${props => props.isBig ? "24px" : "16px"};
    // padding-bottom: 12px;
    line-height: ${props => props.isBig ? "35px" : "14px"};
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
    font-size: ${props => props.isBig ? "24px" : "16px"};
    line-height: 160%;
    align-items: center;
    text-align: center;

    color: #1D1F22;
`

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    margin-left: 20px;  
`

export const CartImg = styled.img`
    position: relative;
    // top: 30px;
    width: ${props => props.isBig ? "241px" : "100px"};
    margin-bottom: 10px;
`

export const PrevSlide = styled.span`
    position: absolute;
    font-weight: 500;
    font-size: 24px;
    color: #5ECE7B;
    top: 42%;
    left: 0;
    z-index: 1;
    :hover {
        cursor: pointer;
    }

    display: ${props => props.isBig ? "block" : "none"};
`

export const NextSlide = styled.span`
    position: absolute;
    font-weight: 500;
    font-size: 24px;
    color: #5ECE7B;
    top: 42%;
    z-index: 1;
    right: 0;
    :hover {
        cursor: pointer;
    }

    display: ${props => props.isBig ? "block" : "none"};
`

export const Line = styled.span`
    margin: 20px 0 20px 0;
    // border-bottom: 2px solid;
    border-color: #E5E5E5;
    heigh: 10px;
    width: 100%;
    
`
// Cart Overlay

export const OverlayContainer = styled.div`
    display: ${props => props.active ? '' : 'none'};
    position: absolute;
    width: 325px;
    left: 975px;
    // border-bottom: 2px solid;
    border-color: #black;
    background-color: #FFFFFF;
    z-index: 1;
`

export const MyBagTitle = styled.p`
    margin-left: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    /* identical to box height, or 26px */

    text-align: left;

    color: #1D1F22;
`

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

export const TotalTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #1D1F22;

`

export const TotalAmount = styled.span`
    
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    display: flex;
    align-items: center;
    text-align: right;

    color: #1D1F22;
`
export const CartButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // margin-bottom: 20px;
    padding: 0 10px 20px 10px;
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