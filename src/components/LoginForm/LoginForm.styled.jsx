import styled from "@emotion/styled";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #a2a8d3;
    padding-bottom: 260px;
    padding-top: 100px;
`;

export const FormLogin = styled.form`
    padding-bottom: 20px;
    padding-top: 10px;
`;

export const LoginTitle = styled.h2`
    margin-bottom: 20px;
    color: #113f67;
`;

export const LoginBtn = styled.button`
    font-size: 20px;
    font-weight: 700;
    padding: 5px 16px;
    background-color: #38598b;
    border-radius: 10px;
    border: none;
    color: #a2a8d3;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
    box-shadow:  0 0 5px #38598b,
        0 0 10px #38598b,
        0 0 20px #38598b;

    &:hover {
        background-color: #e7eaf6;
        color: #38598b;
        box-shadow:  0 0 5px #e7eaf6,
        0 0 10px #e7eaf6,
        0 0 20px #e7eaf6;
    }
`;

export const InputFilter = styled.input`
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
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

export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 30px;
`;