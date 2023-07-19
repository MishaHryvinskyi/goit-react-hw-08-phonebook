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
    padding: 10px 18px;
    background-color: #42b883;
    border-radius: 30px;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
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

export const InputFilter = styled.input`
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
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

export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 30px;
`;