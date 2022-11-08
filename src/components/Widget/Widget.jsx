import  './Widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonIcon from '@mui/icons-material/Person';


const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'> Users</span>
            <span className='counter'>112</span>
            <span className='link'> voir +</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                20%
            </div>
            <PersonIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget