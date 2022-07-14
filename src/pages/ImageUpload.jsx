import {useState} from 'react';
import {storage} from '../firebase/firebase-config';
import {db} from '../firebase/firebase-config';
import "./ImageUpload.css";

function Upload() {
  const [image , setImage] = useState(null);
  const [style , setStyle] = useState("");
  const [artist , setArtist] = useState("");
  const [title , setTitle] = useState("");
  const [url , setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const imgUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            dataUpload(url)
          });
      }
    )
  };
  
    const dataUpload = (url) => {
      db.collection("artworks").add({
      imgURL: url,
      style: style,
      artist: artist,
      title: title
      })
      setStyle("");
      setArtist("");
      setTitle("");
    };

      return (
        <div className="App">
          <center>
            <form className="form" onSubmit={imgUpload}>
              <h1>Please upload your desired image and data.</h1>
              <input type="file" onChange={handleChange}/>
              <label>Style</label>
              <input type="text" value={style} className="styleInput" onChange={(e) => {setStyle(e.target.value)} }/>
              <label>Artist</label>
              <input type="text" value={artist} className="artistInput" onChange={(e) => {setArtist(e.target.value)} } />
              <label>Title</label>
              <input type="text" value={title} className="titleInput" onChange={(e) => {setTitle(e.target.value)} } />
              <button type="submit">Upload</button>
            </form> 
          </center>
        </div>
      );
   
}

export default Upload;


// const ReactFirebaseFileUpload = () => {
//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState("");
//   const [progress, setProgress] = useState(0);

//   const handleChange = e => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(progress);
//       },
//       error => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then(url => {
//             setUrl(url);
//           });
//       }
//     );
//   };

//   console.log("image: ", image);

//   return (
//     <div>
//       <progress value={progress} max="100" />
//       <br />
//       <br />
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <br />
//       {url}
//       <br />
//       <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
//     </div>
//   );
// };