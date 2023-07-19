import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: #a2a8d3;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    padding-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
`;

export const ListItem = styled.li`
    display: flex;
    color: white;
    align-items: center;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0px 10px 27px -4px rgba(56,89,139,1);
    box-shadow: 0px 10px 27px -4px rgba(56,89,139,1);
    box-shadow: 0px 10px 27px -4px rgba(56,89,139,1);
    
    &:hover { 
        box-shadow: -1px 12px 17px -6px rgba(231,234,246,1);
    box-shadow: -1px 12px 17px -6px rgba(231,234,246,1);
    box-shadow: -1px 12px 17px -6px rgba(231,234,246,1);
    }
    &:not(:last-child) {
        margin-bottom: 12px;
    }
    background-color: #38598b;
    padding: 10px 18px;
    border-radius: 40px;
`;

export const Name = styled.span`
    display: flex;
    width: 150px;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    color: #113f67;
    background-color: #e7eaf6;
    padding: 10px 18px;
    border-radius: 40px;
    margin-right: 10px;
`;

export const Number = styled.span`
    display: flex;
    width: 150px;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    background-color: #113f67;
    color: #e7eaf6;
    padding: 10px 18px;
    border-radius: 40px;
    margin-left: 10px;
`;

export const BtnDelite = styled.button`
    display: flex;
    width: 120px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    margin-left: 15px;
    padding: 10px 18px;
    background-color: #f95959;
    color: #e7eaf6;
    border-radius: 20px;
    border: none;
    box-shadow:  0 0 5px #f95959,
    0 0 10px #f95959,
    0 0 20px #f95959;

    &:hover {
        background-color: #d68bb3;
        color: white;
        box-shadow:  0 0 5px #d68bb3,
        0 0 10px #d68bb3,
        0 0 20px #d68bb3;
    }
`;

export const Contact = styled.p`
    display: inline-block;
    min-width: 230px;
    text-align: center;
`;