import styled from "@emotion/styled";

export const FormFilter = styled.form`
    background-color: #a2a8d3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const InputFilter = styled.input`
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 30px;
    width: 300px;
    height: 25px;
    border-radius: 30px;
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
        color: black;
        box-shadow: 0px 5px 36px 0px rgba(81,106,120,1);
    }
`;

export const Message = styled.p`
    color: red;
`;