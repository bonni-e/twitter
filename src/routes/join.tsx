import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";

export default function CreateAccount() {
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

            if(isLoading || name === "" || email === "" || password === "")
                return;

            const credential = await createUserWithEmailAndPassword(auth, email, password);
            const user = credential.user;

            // console.log(user);

            await updateProfile(user, {displayName : name, photoURL: ""});

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
        <Title>Join in to 𝑋</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="name" value={name} type="text" placeholder="name" required autoFocus />
            <Input onChange={onChange} name="email" value={email} type="email" placeholder="email" required />
            <Input onChange={onChange} name="password" value={password} type="password" placeholder="password" required />
            <Input type="submit" value={isLoading ? "Loading..." : "Create Account"} />
        </Form>
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
            Already have an account? <Link to={"/login"}>Log in &rarr;</Link>
        </Switcher>
    </Wrapper>
}