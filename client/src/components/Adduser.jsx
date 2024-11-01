import { useState } from 'react';


import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }

`;

const defaultvalue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}



const Adduser = () => {

    const [user, setuser] = useState(defaultvalue);

    const navigate = useNavigate()

    const onValueChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }


    const adduserDetails = async () => {
        await addUser(user);
        navigate('/allusers')
    }

    return (

        <Container>

            <Typography variant="h4"> Add User </Typography>

            <FormControl>
                <InputLabel> Name </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>

            <FormControl>
                <InputLabel> Username </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>

            <FormControl>
                <InputLabel> Email </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>

            <FormControl>
                <InputLabel> Phone No </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={() => adduserDetails()} >Add User</Button>
            </FormControl>

        </Container>

    )
}
export default Adduser;