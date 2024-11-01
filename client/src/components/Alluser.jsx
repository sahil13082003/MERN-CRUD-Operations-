import { useEffect, useState } from 'react';
import { Table, TableRow, TableBody, TableCell, TableHead, styled, Button } from '@mui/material'
import { Link } from 'react-router-dom';

import { getUsers, deleteUser } from '../service/api';

const StyledTable = styled(Table)`
    width: 90%;
    margin:50px auto 0 auto;

`;

const THead = styled(TableHead)({
    background: '#000000',
    '& th': {
        color: '#fff',
        fontSize: '20px',
    },
});

const TBody = styled(TableBody)({
    '& td': {
        fontSize: '17px',
    },
});



const Alluser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        try {
            let res = await getUsers();
            console.log(res.data);  // Log the response to the console
            setUsers(res.data);
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    };

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }



    return (
        <StyledTable>
            <THead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone No.</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </THead>
            <TBody>
                {
                    users.map(user => (
                        <TableRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{ margin: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant='contained' color='secondary' onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TBody>
        </StyledTable>
    )
}
export default Alluser;