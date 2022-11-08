import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Sidebar = () => {
  let {logoutUser} = useContext(AuthContext)
  return (
    <div className='sidebar'>
      <div className="top"> 
        <span className="logo">
          souley
        </span>
      </div>
      <hr />
      <div className="center"> 
        <ul>
          <p className="title">MAIN</p>
          <li> 
          <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li> 
          <FormatListBulletedIcon className='icon'/>
            <span>Projet</span>
          </li>
          <li>
            <PersonIcon className='icon'/> 
            <span>User</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li> 
            <LogoutIcon className='icon'/>
            <span onClick={logoutUser}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom"> 
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar