import React from 'react'
import "../App.css"
import { Link } from "react-router-dom";
//import ReorderIcon from '@mui/icons-material/Reorder';
const Navbar = () => {
  const [visibile,setVisibile]=React.useState(true);
  function openMenu(){
    setVisibile(visible=>!visible);
  }
  return (
    <div className="navbar">
    <div className="left-side">

      <h2 className="Title">JOBPORTAL</h2>
      <div className="search">
      <input className="search-bar" type="text" placeholder="Search Jobs..."  />
      <img  className="mag-img" src="data:image/png;base64,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"  width="23" height="23"/>  

      </div>
    </div>
    <div className="right-side">
      
    <Link to ="/postJob"><img className="menu-button" onClick={openMenu} type="submit" src="https://icon-library.com/images/white-plus-icon/white-plus-icon-3.jpg"/></Link>
<div className={visibile?"right-side":"open-right-side"}>
  {visibile && <  ul className={visibile?"right-side-list":""}>
       
         <li><Link to ="/">Home</Link></li>
         <li><Link to ="/login">Login</Link></li>
         <li><Link to ="/signup">SignUp</Link></li>
     </ul>
     }
       {!visibile && <  ul className={!visibile?"open-right-side-list":""}>
       
       <li><Link to ="/">Post A Job</Link></li>
       <li><Link to ="/login">About Us</Link></li>
       <li><Link to ="/signup">Contact US</Link></li>
   </ul>
   }
     </div>
    </div>
    
    </div>
  )
}

export default Navbar