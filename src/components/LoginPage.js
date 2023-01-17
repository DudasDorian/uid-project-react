import React, {useEffect, useState} from "react";
import {Button, FormGroup, TextField} from "@mui/material";

function LoginPage(props) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        console.log(username)
    }, [username])

    function parseLoginAttempt() {
        if(username === 'admin') {
            props.setLogin({username: username, role: 'admin'})
        }
        if(username === 'host') {
            props.setLogin({username: username, role: 'host'})
        }
        if(username === 'client') {
            props.setLogin({username: username, role: 'client'})
        }
    }

    function LoginPrompt() {
        return <FormGroup>
            <TextField label="Username" value={username}
                       onChange={(e) => setUsername(e.target.value)} />
            <TextField label="Password" type={'password'} />
            <Button onClick={() => parseLoginAttempt()}>Log in</Button>
        </FormGroup>
    }

    return <FormGroup>
        <LoginPrompt />
    </FormGroup>
}

export default LoginPage