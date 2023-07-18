import styled from "@emotion/styled";

const InputBody = styled.div`
    display: flex;
    height: 20px;
    width: 356px;
    padding: 8px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #F48FB1;
    background: #FFF;
`

const Input = ({children}) => {
    return ( 
        <InputBody>
            {children}
        </InputBody>
    );
}
 
export default Input;