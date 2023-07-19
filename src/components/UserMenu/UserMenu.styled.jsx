import styled from "@emotion/styled";

export const HederContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const HederTitle = styled.h2`
    color: #e7eaf6;
    margin-right: 20px;
`;

export const UserName = styled.span`
    color: #ff9a3c;
`;

export const BtnLog = styled.button`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: #113f67;
    background-color: #ff9a3c;
    padding: 10px 18px;
    border-radius: 30px;
    cursor: pointer;
    border: none;
    box-shadow:  0 0 5px #ff9a3c,
    0 0 10px #ff9a3c,
    0 0 20px #ff9a3c;

    &:hover {
        background-color: #ff6f3c;
        color: #e7eaf6;
        box-shadow:  0 0 5px #ff6f3c,
    0 0 10px #ff6f3c,
    0 0 20px #ff6f3c;
    }
`;