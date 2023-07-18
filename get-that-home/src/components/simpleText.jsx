import styled from "@emotion/styled";

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