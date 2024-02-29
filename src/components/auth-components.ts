import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 32px;
    margin: 30px auto;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 420px;
    width: 60vw;
`;

export const Input = styled.input`
    margin: 7px 30px;
    padding: 10px;
    &[type="submit"] {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    &:focus {
        outline: none;
    }
`;

export const Error = styled.span`
    margin-top: 10px;
    font-weight: 600;
    color: tomato;
`;

export const Switcher = styled.span`
    margin-top: 10px;
    a {
        color: #7856ff;
        text-decoration: none;
        padding-left: 5px;
    }
`;