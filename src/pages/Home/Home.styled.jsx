import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
    padding-top: 60px;
    padding-bottom: 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#a2a8d3, #38598b);
`;

export const Title = styled.h1`
    color: #113f67;
    margin-bottom: 40px;
`;

export const Link = styled(NavLink)`
    font-size: 20px;
    font-weight: 600;
    color: #38598b;
    background-color: #e0ffcd;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    box-shadow:  0 0 5px #e0ffcd,
    0 0 10px #e0ffcd,
    0 0 20px #e0ffcd;

    &:hover {
        background-color: #e7eaf6;
        color: #38598b;
        box-shadow:  0 0 5px #e7eaf6,
    0 0 10px #e7eaf6,
    0 0 20px #e7eaf6;
`;

export const ContainerBook = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;