import styled from "styled-components";

export const ProductPageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 125px
`

export const ProductImgsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    tex: center;

    img {
        margin-bottom: 40px;
        width: 70px;
        height: 70px;
        :hover {
            cursor: pointer;
        }
    }
`

export const ProductMainImg = styled.div`
    margin-left: 40px;
    width: 610px;
    img {
        width: 500px;
    }
`

export const ProductDescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    text-align: left;
`
export const DescriptionTitle = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: ${props => props.isBig ? '600' : '300'};
    font-size: ${props => props.isBig ? '30px' : '16px'};
    align-items: left;
    color: #1D1F22;
`

export const DescriptionSubtitle = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: ${props => props.isBig ? '400' : '300'};
    font-size: ${props => props.isBig ? '30px' : '16px'};
    align-items: left;
    color: #1D1F22;
`

export const AttributesBlock = styled.div`
    margin-top: 5px; //20
    display: flex;
    flex-direction: column;
`

export const AttributeTitle = styled.p`
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: ${props => props.isBig ? '700' : '500'};
    font-size: ${props => props.isBig ? "18px" : "16px"};
    align-items: left;
    text-align: left;
    color: #1D1F22;
    margin: ${props => props.isBig ? "20px 0 20px 0" : "0px"};
`

export const AttributesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;    
`

export const AttributeItem = styled.span`
    display: flex;
    justify-content: center;
    width: ${props => props.isBig ? '70px' : '50px'};
    height: ${props => props.isBig ? '45px' : '35px'};
    text-align: center;
    align-items: center;
    border: 0.15rem solid; 
    background: ${props => {
        if(props.color) {
            return props.color
        }
           return props.active ? '#292929' : '#FFFFFF';
    }};

    // background: ${props => props.active ? '#292929' : '#FFFFFF'};    
    color: ${props => props.active ? '#FFFFFF' : '#292929'};
    margin-right: 5px; 
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.isBig ? '16px' : '12px'};
    letter-spacing: 0.05em;
    :hover {
        cursor: pointer;
    }
`
export const ActiveAttributeItem = styled(AttributeItem)`
    background: black;
    // border: 1px solid; 
    color: #FFFFFF;
`

export const StyledButton = styled.button`
    margin-top: 40px;
    padding: 15px 32px;
    width: 292px;
    height: 52px;
    background: #5ECE7B; 

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
     :hover {
         cursor: pointer;
     }
`
export const Description = styled.p`
    margin-top: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #1D1F22;
`

export const PriceBlock = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
`
export const PriceTitle = styled.p`
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    text-align: center;
`
export const PriceAmount = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;  
    font-family: 'Raleway';
    font-style: normal;
    font-weight: ${props => props.isBig ? '700' : '700'};
    font-size: ${props => props.isBig ? '24px' : '16px'};
    line-height: 18px;
    align-items: center;
    color: #1D1F22;
`