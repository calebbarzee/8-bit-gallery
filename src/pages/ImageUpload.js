import {useState} from 'react';
import storage from '../firebase/index';
import db from '../firebase/index';

function ImageUpload() {
  const [image , setImage] = useState('');
  const upload = ()=>{
    if(image == null)
      return;
    storage.ref(`/images/${image.name}`).put(image)
    .on("state_changed" , alert("success") , alert("image failed to upload, please try again"))
    .child(image.name)
    .getDownloadURL().then(url => {DataUpload(url)});
  }
   
function DataUpload(url) {
  const [style , setStyle] = useState('');
  const [artist , setArtist] = useState('');
  const [title , setTitle] = useState('');

}
      
      return (
        <div className="App">
          <center>
          <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
          <input type="text" className="styleInput" onChange={(e) => {setStyle(e.target.value)} }/>
          <input type="text" className="artistInput" onChange={(e) => {setArtist(e.target.value)} } />
          <input type="text" className="titleInput" onChange={(e) => {setTitle(e.target.value)} } />
          <button onClick={upload}>Upload</button>
          </center>
        </div>
      );
   
}

export default ImageUpload;