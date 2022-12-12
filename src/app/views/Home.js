import BaseView from './BaseView.js';
import { ART } from '../js/Art.js';
import { db, storage } from '../firebase/firebase-config.js';

export default class extends BaseView {
    constructor() {
        super();
        this.setTitle('Home');
        display_art();
    }

    async getHtml() {
        return `
            <div class="display_area">
            <h2 id="page_title">8-Bit Art Gallery</h1>
            <img id="art_img" src=${art_img_src}" alt="${art_img_alt}">
            <h4 id="movement" class="art_movement">${movement}</h4>
            <h4 id="title" class="art_title">${title}</h4>
            <h4 id="artist" class="artist_name">${artist}</h4>
            <button id="generateNew">Refresh</button>
            </div>
        `;
    }
}
const art_img_src = '';
const art_img_alt = '';
const movement = '';
const title = '';
const artist = '';

async function display_art() {
    // console.log(ART);
    const index = generate_random_index();

    const colRef = db.collection('artworks').doc('SF');
    const doc = await cityRef.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log('Document data:', doc.data());
    }

    console.log(this.art_img_src);
}

async function get_art_list() {
    // let response = await fetch(
    //     'https://calebbarzee.github.io/8-bit-gallery/src/app/art.json'
    // );
}

function generate_random_index() {
    const random_index = Math.floor(Math.random() * (7 - 0) + 0);
    // max = 6, min = 0
    console.log(random_index);
    return random_index;
}
