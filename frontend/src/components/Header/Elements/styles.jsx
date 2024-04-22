import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoLink = styled(NavLink)`
    color: black;
    text-decoration: none;

    &:hover{
        opacity: 0.6;
    }
`