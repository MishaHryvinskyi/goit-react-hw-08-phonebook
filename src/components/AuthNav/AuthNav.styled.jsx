import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const Link = styled(NavLink)`
    color: white;
    margin-right: 20px;
    text-decoration: none;
    background-color: #a2a8d3;
    padding: 8px 18px;
    border-radius: 10px;
    box-shadow:  0 0 5px #a2a8d3,
    0 0 10px #a2a8d3,
    0 0 20px #a2a8d3;

    &:hover {
        background-color: #e7eaf6;
        color: #38598b;
        box-shadow:  0 0 5px #e7eaf6,
    0 0 10px #e7eaf6,
    0 0 20px #e7eaf6;
    }
`;