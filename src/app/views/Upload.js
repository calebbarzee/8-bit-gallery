import BaseView from './BaseView.js';
import { storage, db } from '../firebase/firebase-config.js';

export default class extends BaseView {
    constructor() {
        super();
        this.setTitle('Upload');
        this.image = null;
        this.style = '';
        this.artist = '';
        this.title = '';
        this.url = '';
        this.progress = 0;
    }

    async getHtml() {
        return `
        <form className="form" onSubmit=${this.imgUpload(event)}>
                <h1>Please upload your desired image and data.</h1>
                <input type="file" onChange=${this.handleChange(event)}/>
                <label>Style</label>
                <input type="text" value="" className="styleInput" onChange=${(this.style =
                    e.target.value)}/>
                <label>Artist</label>
                <input type="text" value="" className="artistInput" onChange=${(this.artist =
                    e.target.value)} />
                <label>Title</label>
                <input type="text" value="" className="titleInput" onChange=${(this.title =
                    e.target.value)} />
                <button type="submit">Upload</button>
        </form> 
        );`;
    }

    handleChange(e) {
        if (e.target.files[0]) {
            this.image = e.target.files[0];
        }
    }

    imgUpload(e) {
        e.preventDefault();
        const uploadTask = storage
            .ref(`images/${this.image.name}`)
            .put(this.image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(this.image.name)
                    .getDownloadURL()
                    .then((url) => {
                        this.url = url;
                        dataUpload();
                    });
            }
        );
    }

    dataUpload() {
        db.collection('artworks').add({
            imgURL: this.url,
            style: this.style,
            artist: this.artist,
            title: this.title,
        });
    }
}
