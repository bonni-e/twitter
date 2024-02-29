import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";

export default function Login() {
    // hook 
    const navigate = useNavigate();

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
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // 새로고침 하지 않도록 
        e.preventDefault();

        // Todo (Firebase)
        // . create an account
        // . set the name of the user
        // . redirect to the home page 

        try {
            setError("");
            setLoading(true);

            if (isLoading || email === "" || password === "")
                return;

            const credential = await signInWithEmailAndPassword(auth, email, password);
            const user = credential.user;

            // redirect
            navigate("/");

            setLoading(true);
        }
        catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.code);
                setLoading(false);
            }
        }
        finally {

        }
    }

    return <Wrapper>
        <Title>Login in to 𝑋</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="email" value={email} type="email" placeholder="email" required />
            <Input onChange={onChange} name="password" value={password} type="password" placeholder="password" required />
            <Input type="submit" value={isLoading ? "Loading..." : "Log in"} />
        </Form>
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
            Don't have an account? <Link to={"/join"}>Create one &rarr;</Link>
        </Switcher>
    </Wrapper>
}