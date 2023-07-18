import styled from "@emotion/styled";

export const Text = styled.p`
    color: #616161;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
`
export const SubTitle = styled.h1`
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.15px;
`

const SimpleText = ({TextColor, children}) => {
    
    const SimpleText = styled.p`
        color: ${TextColor};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.25px;
    `
    
    return ( 
        <SimpleText>
            {children}
        </SimpleText>
    );
}
 
export default SimpleText;