import styled from "@emotion/styled";

const Input = styled.div`
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

export const MainInput = styled.input`
    color: #8E8E8E;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
    border: none;
    outline: none;
    width: 100%;
`

export const CheckboxInput = styled.input`
    width: 20px;
    height: 20px;
    padding: 2px;
    gap: 10px;
    border: 1px solid #F48FB1;
`
export const MainSelect = styled.select`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #F48FB1;
    outline: none;
    width: 100px;
`
export const OptionInput = styled.input`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #F48FB1;
    outline: none;
    width: 100px;
`


export const TextAreaInput = styled.textarea`
    height: 60px;
    width: 600px;
    display: flex;
    padding: 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #F48FB1;
    outline: none;
`



const InputBody = ({children}) => {
    return ( 
        <Input>
            {children}
        </Input>
    );
}
 
export default InputBody;