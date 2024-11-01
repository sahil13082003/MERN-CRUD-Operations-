import { AppBar, Toolbar, styled} from '@mui/material'
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
    margin-top:10px;
`;

const Tab = styled(NavLink)`
    font-size: 20px;
    margin-right:25px;
    color: inherit;
    text-decoration:none;
`

const Navbar = () => {
    return (
        <Header position="static">
            <Toolbar >
                <Tab to='/'>Sahil Developer</Tab>
                <Tab to='/allusers'>All Users</Tab>
                <Tab to='/adduser'>Add User</Tab>
            </Toolbar>
        </Header>
    )
}
export default Navbar;