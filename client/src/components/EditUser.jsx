import { useState, useEffect } from 'react';


import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { editUser, getUser } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'


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



const EditUser = () => {

    const [user, setuser] = useState(defaultvalue);

    const navigate = useNavigate()
    const { _id } = useParams()

    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = async () => {
        const response = await getUser(_id);
        setuser({ ...response.data })

    }

    const onValueChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }


    const edituserDetails = async () => {
        await editUser(user, _id);
        navigate('/allusers')
    }

    return (

        <Container>

            <Typography variant="h4"> Edit User </Typography>

            <FormControl>
                <InputLabel> Name </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>

            <FormControl>
                <InputLabel> Username </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
            </FormControl>

            <FormControl>
                <InputLabel> Email </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
            </FormControl>

            <FormControl>
                <InputLabel> Phone No </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={() => edituserDetails()} >Edit User</Button>
            </FormControl>

        </Container>

    )
}
export default EditUser;