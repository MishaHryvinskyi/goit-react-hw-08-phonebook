import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

export const HomeLink = styled(NavLink)`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-right: 40px;
    text-decoration: none;
    background-color: #ffc93c;
    padding: 8px 18px;
    border-radius: 30px;
    box-shadow:  0 0 5px #ffc93c,
    0 0 10px #ffc93c,
    0 0 20px #ffc93c;

    &:hover {
        background-color: #ff9a3c;
        color: #38598b;
        box-shadow:  0 0 5px #ff9a3c,
    0 0 10px #ff9a3c,
    0 0 20px #ff9a3c;
    }
`;