import React,{useState,useEffect} from 'react';
import {ImageGrid} from "react-fb-image-video-grid"
import db from "../../reels/firebase.js"
import { collection, getDocs } from 'firebase/firestore/lite';
import Gallery from 'react-grid-gallery';

const UserVideo = () => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const [reels,setReels]=useState(["https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761"]);
    let [condition,setCondition] = useState(false);


    const videos = [ {
        src : 'https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761',
    },
    {
        src : 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    }
        
        
            // Add more video URLs as needed
      ];
    
      const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      };

    console.log(reels);
  
  const fetchPost=async()=>{
    await getDocs(collection(db,"reels"))
    .then((querySnapshot)=>{
      const newData=querySnapshot.docs.map((doc)=>((doc.data())));
      setReels([...newData]);
      console.log(reels);
    }).catch((err) => {
      console.log(err);
    })
  }

  if(condition == false && reels.length != 0){
      setCondition(true);
  }


  const customOverlay = ({ index }) => {
    const videoUrl = videos[index].src;
    return (
      <video width="100%" height="100%" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };
  
//   if(reels.length == 0){
    // useEffect(async ()=>{
    //     await fetchPost();
    //     console.log(reels);
    //   }, [condition])
//   }

const images = videos.map((video) => ({
    ...video,
    customOverlay,
  }));
  

    return (
        <div style={{ maxWidth: "80vw", margin: "12vh auto" }} >
  
               
        {/* //  <div style={{ maxWidth: "550px", margin: "0px auto" }}> */}
             {/* <div style={{ display: "flex", justifyContent: "space-around", margin: "55px 0px", borderBottom: "0px solid grey" }}>
                 <div>
                     <img style={{ width: "100px", height: "100px", borderRadius: "80px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKi12A3tgAu62QdbNgTljOG2PoS49BLjHOtg&usqp=CAU" alt="" />
                 </div>
                 <div>
                     <h4>Tanu Kumari</h4>
                     <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                         <h6>40 posts</h6>
                         <h6>180 followers</h6>
                         <h6>140 following</h6>
                     </div>
                 </div>
             </div> */}
            <ImageGrid >

                
                 {/* <video width="180" height="100" controls autoplay muted>
                     <source src="https://youtube.com/shorts/CE0isGWb1pY?feature=share" alt="" />
                 </video> */}
                  <video width="180" height="100" controls autoplay muted>
                     <source src="https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" alt="" />
                 </video>
        
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" alt="" />
                 </video>  
                 {/* <video width="180" height="100" controls autoplay muted>
                     <source src="https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761" alt="" />
                 </video> */}
                 {/* <video width="180" height="100" controls autoplay muted>
                     <source src="https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761" alt="" />
                 </video>
                 <video width="180" height="100" controls autoplay muted>
                     <source src="https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761" alt="" />
                 </video> */}
                 {/* <video width="180" height="100" controls autoplay muted>
                     <source src="https://player.vimeo.com/external/377769527.sd.mp4?s=d2fbb91c4b725c7f3cbd506c0b5bbc8c5af30fee&profile_id=164&oauth2_token_id=57447761" alt="" />
                 </video>    */}
            </ImageGrid>
 </div>


    
    )
}
export default UserVideo;