import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Datatable from '../Datatable/Datatable'

import './User.scss'


const User = () => {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listcontainer">
            <Navbar/>
           <Datatable />
        </div>
    </div>
  )
}

export default User