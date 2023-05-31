import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
// import {ProgressBar} from "react-bootstrap";
import ImageIcon from '@mui/icons-material/Image';
import {
    useMutation,
    useQueryClient
  } from '@tanstack/react-query'

const Share = () => {

    const queryClient = useQueryClient();

    const { currentUser } = useContext(AuthContext)

    const [file,setFile] = useState(null);
    const [desc,setDesc] = useState("");
    // const [progress,setProgress] = useState(null);
    let flag = false;

    const uploadfile = async () => {
        try {
            let formdata = new FormData();
            formdata.append('file',file);
            let data= await makeRequest.post("/upload/",formdata);
            console.log(data.data.url);
            
            return data.data.url;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    const mutation  = useMutation(
        (newPost) =>{
            if(flag == false)
                return;
            return makeRequest.post("/posts/save",newPost);
        },

        {
            onSuccess : () => {
                queryClient.invalidateQueries(["/posts/all"]);
            }
        }
    )

    const handleShare = async function(e){
        e.preventDefault();

        flag = true;
         
        let fileUrl = "";
        if(file)
            fileUrl = await uploadfile();
        console.log(fileUrl);
        
        mutation.mutate({desc , url : fileUrl});
        
        setDesc("");
        setFile(null);
  }

    return (
        <div className="share">
            <div className="container" style={{ padding: "20px",display: "flex",
      flexDirection:  "column", height: "35vh"
      }}>
                <div className="top" style={{display: "flex", alignItems: "center",height: "fit-content",
        justifyContent: "space-between"}}>
                    <div className="left" style={{display: "flex",
          alignItems: "center",
          flex : "3",
          height: "fit-content",
          justifyContent: "space-around" , borderRadius:"20px"}} >
                        <img
                            src={currentUser.profilePic}
                            alt="Profile picture"
                            style={{width: "40px",height: "40px",borderRadius: "50%",
                                objectFit: "cover"}}
                        />
                        <input type="text" style={{border: "none",
              outline: "none",
              padding: "20px 10px",
              backgroundColor: "transparent",
              width: "60%",
              color:"black"}} placeholder={`What's on your mind ${currentUser.name}?`} onChange={(e) => setDesc(e.target.value)} value={desc} />
                    </div>
                    <div className="right" style={{flex : "1",
          display: "flex",
          height: "fit-content",
          justifyContent: "flex-end"}}>
                        {file && <img alt="" className="file" style={{width : "100px",
            height : "100px",
            objectFit: "cover",
            borderRadius: "0px"
        }} src={URL.createObjectURL(file)} />
                        
                        }
                    </div>
                </div>
                <hr />
                <div className="bottom" style={{display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "10vh"
}}>
                    <div className="left"  style={{display: "flex",
          alignItems: "center",
          height: "fit-content",
          justifyContent: "flex-start",
          gap: "20px",
          flex: "6",borderRadius:"20px"}}>
                        <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                        <label htmlFor="file" className="item">
                            {/* <div className="item"> */}
                                <ImageIcon/>
                                <span>Add Image</span>
                            {/* </div> */}
                        </label>
                        {/* <div className="item">
                            <img src={Map} alt="" />
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <img src={Friend} alt="" />
                            <span>Tag Friends</span>
                        </div> */}
                    </div>
                    <div className="right" style={{flex: "2",
          display: "flex",
          justifyContent: "flex-end"}}>
                        <button onClick={handleShare} style={{border: "none",
            padding: "2px 10px",
            color: "whitesmoke",
            cursor: "pointer",
            fontSize: "20px",

            marginRight: "10px",
            backgroundColor: "#151515",
            borderRadius: "3px"}}>Share</button>
                    </div>
                </div>
                {/* {progress && <ProgressBar now={progress} label={`${progress}%`} /> } */}
            </div>
        </div>
    );
};

export default Share;