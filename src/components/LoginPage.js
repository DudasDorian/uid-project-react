import React, {useEffect, useState} from "react";
import {
    Button,
    Divider, FormControl,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";

function LoginPage(props) {
    const [login, setLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");

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

    return <FormGroup sx={{ alignContent: "center", marginTop: 10 }}>
        {login && <Stack component="form"
                         sx={{ width: '25ch', fontSize: 'large' }}
                         spacing={1}>
            <TextField label="Username" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
            <TextField label="Password" type={'password'}/>
            <Button variant={"contained"} onClick={() => parseLoginAttempt()}>Log in</Button>
            <Divider />
            <Typography sx={{ textAlign: "center" }} variant={"subtitle2"}>Or register a new account</Typography>
            <Button variant={"outlined"} onClick={() => setLogin(false)}>Register</Button>
        </Stack>}
        {!login && <Stack component="form"
                          sx={{ width: '25ch', fontSize: 'large' }}
                          spacing={1}>
            <TextField label="Username" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
            <TextField label="Password" type={'password'}/>
            <FormControl>
                <RadioGroup onChange={(e) => setRole(e.target.value)}>
                    <FormControlLabel value="admin" control={<Radio />} label="Moderator" />
                    <FormControlLabel value="host" control={<Radio />} label="Hotel Host" />
                    <FormControlLabel value="client" control={<Radio />} label="Regular User" />
                </RadioGroup>
            </FormControl>
            <Button variant={"contained"} onClick={() => props.setLogin({username: username, role: role})}>Register</Button>
        </Stack>}
    </FormGroup>
}

export default LoginPage