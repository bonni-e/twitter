import { useState } from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 32px;
    margin: 30px auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 420px;
    width: 60vw;
`;

const Input = styled.input`
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

const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;

export default function CreateAccount() {
    // tiny states 
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // event listener
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = e;

        if (name === "name")
            setName(value);
        else if (name === "email")
            setEmail(value);
        else if (name === "password")
            setPassword(value);
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // 새로고침 하지 않도록 
        e.preventDefault();

        // Todo (Firebase)
        // . create an account
        // . set the name of the user
        // . redirect to the home page 

        try { }
        catch (e) {
            // setError();
        }
        finally {
            setLoading(true);
        }
    }

    return <Wrapper>
        <Title>Log in to 𝑋</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="name" value={name} type="text" placeholder="name" required autoFocus />
            <Input onChange={onChange} name="email" value={email} type="email" placeholder="email" required />
            <Input onChange={onChange} name="password" value={password} type="password" placeholder="password" required />
            <Input type="submit" value={isLoading ? "Loading..." : "Create Account"} />
        </Form>
        {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
}