import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const ListItem = styled.li`
    font-size: 18px;
    &:not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const BtnDelite = styled.button`
    cursor: pointer;
    margin-left: 15px;
    padding: 5px 8px;
    background-color: #fc6063;
    color: white;
    border-radius: 5px;
    border: solid 2px #647065;
    &:hover {
        background-color: #d68bb3;
        color: black;
    }
`;

export const Contact = styled.p`
    display: inline-block;
    min-width: 230px;
    text-align: center;
`;