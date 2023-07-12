import styled from "@emotion/styled";

export const PhoneForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PhoneLabel = styled.label`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 16px;
    font-size: 18px;
`;

export const Input = styled.input`
    cursor: pointer;
    margin-top: 10px;
    width: 300px;
    height: 25px;
    border-radius: 10px;
    border: solid 2px #d0c5e3;
    &:hover {
        background-color: #fcffdb;
        color: black;
        box-shadow: 0px 5px 36px 0px rgba(81,106,120,1);
    }
`;

export const Btn = styled.button`
    background-color: #56cc62;
    color: white;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 10px;
    border: solid 2px #647065;
    cursor: pointer;
    &:hover {
        background-color: #f4fca2;
        color: black;
        box-shadow: 0px 5px 36px 0px rgba(81,106,120,1);
    }
`;