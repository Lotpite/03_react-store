import styled from "styled-components";

export const CartName = styled.h2`
width: 84px;
height: 40px;
left: 100px;
top: 160px;
margin-bottom: 20px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 40px;
text-transform: uppercase;
color: #1D1F22;
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 15px;
    height: ${props => props.isBig ? "550px" : "200px"};
    overflow-x: hidden;
`

export const ItemContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: stretch;
    margin-top: ${props => props.isBig ? "20px" : "20px"};
    margin-bottom: ${props => props.isBig ? "20px" : "20px"};
    border-top: ${props => props.isBig ? "1px solid #E5E5E5" : ""};
    padding-top: ${props => props.isBig ? "20px" : "0px"};
    padding-right: ${props => props.isBig ? "20px" : "0px"};
`

export const ProductDescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${props => props.isBig ? "0" : "10px"};
    text-align: left;
`

export const ProductImgsBlock = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: ${props => props.isBig ? "0" : "40px"};
`
export const Counter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`

export const Change = styled.span`
    display: flex;  
    width: ${props => props.isBig ? "45px" : "22px"};
    height: ${props => props.isBig ? "45px" : "22px"};
    border: 2px solid;
    font-size: ${props => props.isBig ? "24px" : "16px"};
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
    align-items: center;
    margin-left: 20px;  
`

export const CartImg = styled.img`
    position: relative;
    width: ${props => props.isBig ? "141px" : "100px"};
    height: ${props => props.isBig ? "185px" : ""};
`

export const PrevSlide = styled.span`
    position: absolute;
    font-weight: 500;
    font-size: 24px;
    color: #5ECE7B;
    top: 49%;
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
    top: 49%;
    z-index: 1;
    right: 0;
    :hover {
        cursor: pointer;
    }

    display: ${props => props.isBig ? "block" : "none"};
`

export const Line = styled.span`
    display: ${props => props.isBig ? "block" : "none"};
    margin: 20px 0 20px 0;
    border: 1px solid #E5E5E5;
    heigh: 10px;
    width: 100%;
    
`
export const OverlayContainer = styled.div`
    display: ${props => props.active ? '' : 'none'};
    position: absolute;
    top: 80px;
    left: 975px;
    border-color: #black;
    background-color: #FFFFFF;
    z-index: 3;
`

export const MyBagTitle = styled.p`
    margin-left: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
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
    font-weight: 700;
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
    padding: 0 10px 20px 10px;
`

export const ViewBagButton = styled.button`
    width: 140px;
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
export const Shade = styled.div`
    display: ${props => props.active ? 'block': 'none'};
    position: absolute;
    top: 80px;
    left: 100px;
    right: 100px;
    height: 220%;
    background-color: #393748;
    background: rgba(57, 55, 72, 0.22);
    z-index: 2;
`