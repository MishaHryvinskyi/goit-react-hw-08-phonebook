import styled from "@emotion/styled";

export const FormatListForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #a2a8d3;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
`;

export const InputFilter = styled.input`
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 30px;
    width: 300px;
    height: 25px;
    border-radius: 20px;
    border: solid 2px #d0c5e3;
    padding: 5px 15px;

    &:hover {
        background-color: #fcffdb;
        color: black;
        box-shadow: 0px 5px 36px 0px rgba(81,106,120,1);
    }
`;

export const SpanFormInput = styled.span`
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    color: #38598b;
`;

export const Container = styled.div`
    margin-bottom: 30px;
`; 

export const FormBtn = styled.button`
    font-size: 18px;
    padding: 15px 25px;
    background-color: #113f67;
    color: #e7eaf6;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow:  0 0 5px #113f67,
    0 0 10px #113f67,
    0 0 20px #113f67;

    &:hover {
        background-color: #e7eaf6;
        color: #38598b;
        box-shadow:  0 0 5px #e7eaf6,
        0 0 10px #e7eaf6,
        0 0 20px #e7eaf6;
    }
`;