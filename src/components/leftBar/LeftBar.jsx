
import React from 'react'
import "./leftBar.scss"

import  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import {Message,AccountCircle} from "@mui/icons-material";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom";

function LeftBar() {

    const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='left'>
            <Link className='link' to={"/"}>
                <div className='icons' >
                <HomeIcon sx={{fontSize:"29px"}}/>
                <h5 style={{marginLeft:"2px",paddingTop:"3px"}}>Home</h5>
                </div>
            </Link>
            
            <Link  className='link' to={"/message"} >
                <div className='icons'>
                <Message sx={{fontSize:"29px"}}/>
                <h5  style={{marginLeft:"2px",paddingTop:"3px"}} >Messages</h5>
                </div>
            </Link>

            <Link  className='link' to={"/videohome"}>
                <div className='icons'>
                <SmartDisplayIcon sx={{fontSize:"29px"}}/>
                <h5  style={{marginLeft:"2px",paddingTop:"3px"}}>Videos</h5>
                </div>
            </Link>

            <Link  className='link' to={"/reels"}>
                <div className='icons'>
                <SmartDisplayIcon sx={{fontSize:"29px"}}/>
                <h5  style={{marginLeft:"2px",paddingTop:"3px"}}>Reels</h5>
                </div>
            </Link>

            <Link  className='link' to={"/explore"}>
                <div className='icons'>
                <ExploreIcon sx={{fontSize:"29px"}}/>
                <h5  style={{marginLeft:"2px",paddingTop:"3px"}}>Explore</h5>
                </div>
            </Link>
            

            <Link  className='link' to={`/profile/${user?.id}`}>
                <div className='icons'>
                <PersonIcon sx={{fontSize:"29px"}}/>
                <h5  style={{marginLeft:"2px",paddingTop:"3px"}}>Profile</h5>
                </div>
            </Link>
            

        </div>
  )
}


export default LeftBar