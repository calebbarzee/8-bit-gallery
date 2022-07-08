import {useState} from 'react';
import {storage} from '../firebase/index';
import {db} from '../firebase/index';

function Upload() {
  // const [image , setImage] = useState("");
  const [style , setStyle] = useState("");
  const [artist , setArtist] = useState("");
  const [title , setTitle] = useState("");

  const dataUpload = (e) => {
    // if(image == null) 
    //   console.log("No image")
    //   return;
    // storage.ref(`/images/${image.name}`).put(image)
    // .on("state_changed")
    // .child(image.name)
    // .getDownloadURL().then(url => {
      e.preventDefault();
      db.collection("artworks")
      .add({
        // imgURL: url,
        style: style,
        artist: artist,
        title: title})
      };
    // }
      return (
        <div className="App">
          <center>
            <form onSubmit={dataUpload}>
              {/* <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/> */}
              <input type="text" value={style} className="styleInput" onChange={(e) => {setStyle(e.target.value)} }/>
              <input type="text" value={artist} className="artistInput" onChange={(e) => {setArtist(e.target.value)} } />
              <input type="text" value={title} className="titleInput" onChange={(e) => {setTitle(e.target.value)} } />
              <button type="submit">Upload</button>
            </form> 
          </center>
        </div>
      );
   
}

export default Upload;