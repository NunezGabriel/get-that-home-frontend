import styled from "@emotion/styled";

const GeneralLabel = styled.label`
    color: #373737;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`

const Label = ({children}) => {
    return ( 
        <GeneralLabel>
            {children}
        </GeneralLabel>
     );
}
 
export default Label;