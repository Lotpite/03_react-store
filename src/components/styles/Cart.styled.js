import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1100px;
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
    text-align: left;
`
export const Slider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`

export const Change = styled.span`
    display: flex;  
    width: 25px;
    height: 25px;
    border: 2px solid;
    // padding-bottom: 12px;
    justify-content: space-around; 
    :hover {
        cursor: pointer;
    }  
`

export const ImgWrapper = styled.div`
    position: relative;
    margin-left: 20px;
    // background-color: #393748;
    
    img {
        width: 100%;
    }
`

export const PrevSlide = styled.span`
    position: absolute;
    top: 42%;
    left: 0;
    :hover {
        cursor: pointer;
    }
`

export const NextSlide = styled.span`
    position: absolute;
    top: 42%;
    right: 0;
    :hover {
        cursor: pointer;
    }

`