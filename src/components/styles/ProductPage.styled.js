import styled from "styled-components";

export const ProductPageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 100px;
    margin-right: 219px
`

export const ProductImgsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    border: 2px solid;
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
    border: 2px solid;
    width: 610px;

    img {
        width: 600px;
    }
`

export const ProductDescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    width: 292px;
    text-align: left;
`
export const DescriptionTitle = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    align-items: left;
    color: #1D1F22;
`

export const DescriptionSubtitle = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    align-items: left;
    color: #1D1F22;
`

export const AttributesBlock = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
`

export const AttributeTitle = styled.p`
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    align-items: left;
    text-align: left;
    color: #1D1F22;
`

export const AttributesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;    
`

export const AttributeItem = styled.span`
    width: 63px;
    height: 45px;
    border: 2px solid;
    background: ${props => props.active ? '#292929' : '#FFFFFF'};
    color: ${props => props.active ? '#FFFFFF' : '#292929'};
    // padding-top: 12px;
    margin-right: 12px;
    text-align: center;
    line-height: 40px;
    vertical-align: middle
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.05em;
    :hover {
        cursor: pointer;
    }
`
export const ActiveAttributeItem = styled(AttributeItem)`
    background: black;
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
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    align-items: center;

    color: #1D1F22;
`