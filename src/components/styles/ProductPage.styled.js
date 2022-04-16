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
    // width: 100px;
    // border: 2px solid;
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
    // border: 2px solid;
    width: 610px;

    img {
        width: 600px;
    }
`

export const ProductDescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    // width: 292px;
    text-align: left;
`
export const DescriptionTitle = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300; // 600
    font-size: 16px; //30
    align-items: left;
    color: #1D1F22;
`

export const DescriptionSubtitle = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300; // 400
    font-size: 16px; //30
    align-items: left;
    color: #1D1F22;
`

export const AttributesBlock = styled.div`
    margin-top: 5px; //20
    display: flex;
    flex-direction: column;
    // justify-conent: space-between;
`

export const AttributeTitle = styled.p`
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 500; //700
    font-size: 16px; //18
    align-items: left;
    text-align: left;
    color: #1D1F22;
`

export const AttributesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    // justify-conent: space-between;
    justify-content: left;    
`

export const AttributeItem = styled.span`
    display: flex;
    justify-content: center;
    width: 50px; //70
    height: 35px; //45
    text-align: center;
    align-items: center;
    border: 1px solid; // 2
    background: ${props => props.active ? '#292929' : '#FFFFFF'};
    color: ${props => props.active ? '#FFFFFF' : '#292929'};
    // padding-left: 1px;
    margin-right: 5px; //10
    
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px; //16
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
    // margin-left: 0px;;
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500; //700
    font-size: 16px; //24
    line-height: 18px;
    align-items: center;

    color: #1D1F22;
`