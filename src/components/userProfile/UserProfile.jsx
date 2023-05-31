import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { makeRequest } from '../../axios';
import { Link, useParams } from 'react-router-dom';
import {ImageGrid} from "react-fb-image-video-grid"
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1000,
      height: 1000,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));


const UserProfile = () => {

    const classes = useStyles();

    let [posts,setPosts] = useState([]);

    let {id} = useParams();
    console.log(id);

    const fetchPosts = async() => {
        try{
            let result  = await axios.get(`http://localhost:8080/api/v1/posts/getAllPosts/${id}`);
            console.log(result);
            
            return result.data;
        }catch(error){
            console.log(error);
            return [];
        }
        
    } 



    useEffect(async() => {
      let postArray  = await fetchPosts();
      console.log(postArray);
      setPosts(postArray?.posts);
    },[]);

    const openNewPage = (e) => {
        const name = e.target.name;
        window.location.href =  `${window.location.origin}/singlepost/${posts[Number(name)]}`;
    }


    return (
        <div style={{ maxWidth: "850px", margin: "0px auto" }}>
            <div style={{ display: "flex", justifyContent: "space-around", margin: "55px 0px", borderBottom: "0px solid grey" }}>
                <div>
                    <img style={{ width: "100px", height: "100px", borderRadius: "80px" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                </div>
                <div>
                    <h4>Ritik Kumar</h4>
                    {/* <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h6>40 posts</h6>
                        <h6>200 followers</h6>
                        <h6>140 following</h6>
                    </div> */}
                </div>
            </div>
            <div className={classes.root}>
      <GridList cellHeight={300}  spacing={30} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {posts?.map((tile,index) => (
          <GridListTile key={index}>
            <img src={tile.url} alt={tile.desc} />
         
            {/* <video src='https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761' alt="this is video" controls loop/> */}
            <GridListTileBar
              title={tile.desc}
            //   actionIcon={
            //     <IconButton aria-label={`info about ${tile.desc}`} className={classes.icon}>
            //       <InfoIcon />
            //     </IconButton>
            //   }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
            {/* <div className='gallery'>
                    {posts?.map((post,index) => (
                            <img   key={index} name={index} className='item' onClick={openNewPage}   src={post?.url} alt = ''/>
                     ))
                    }
            </div> */}
            


        </div>
    )
}
export default UserProfile;