import styled from "@emotion/styled";

export const FormatListForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #a2a8d3;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

export const Label = styled.label`
    margin-bottom: 30px;
`;

export const InputFilter = styled.input`
    margin-bottom: 30px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 300px;
    height: 25px;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color: #38598b;
    padding: 10px 20px;
    box-shadow: -1px 12px 17px -6px rgba(56,89,139,1);
    box-shadow: -1px 12px 17px -6px rgba(56,89,139,1);
    box-shadow: -1px 12px 17px -6px rgba(56,89,139,1);

    &:hover {
        background-color: #fcffdb;
        color: #113f67;
        box-shadow: 0px 5px 36px 0px rgba(81,106,120,1);
    }
`;

export const SpanFormInput = styled.span`
    font-size: 23px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    color: #113f67;
`;

export const Container = styled.div`
    margin-bottom: 30px;
`; 

export const FormBtn = styled.button`
    font-size: 18px;
    font-weight: 600;
    padding: 10px 18px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    box-shadow:  0 0 5px #42b883,
    0 0 10px #42b883,
    0 0 20px #42b883;

    &:hover {
        background-color: #97cba9;
        color: #38598b;
        box-shadow:  0 0 5px #97cba9,
        0 0 10px #97cba9,
        0 0 20px #97cba9;
    }
`;