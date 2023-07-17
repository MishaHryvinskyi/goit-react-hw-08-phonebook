import styled from "@emotion/styled";

export const HederContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const HederTitle = styled.h2`
    color: #e7eaf6;
    margin-right: 20px;
`;

export const BtnLog = styled.button`
    font-size: 16px;
    color: #113f67;
    background-color: #e7eaf6;
    padding: 8px 18px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    box-shadow:  0 0 5px #e7eaf6,
    0 0 10px #e7eaf6,
    0 0 20px #e7eaf6;

    &:hover {
        background-color: #a2a8d3;
        color: #e7eaf6;
        box-shadow:  0 0 5px #a2a8d3,
    0 0 10px #a2a8d3,
    0 0 20px #a2a8d3;
    }
`;