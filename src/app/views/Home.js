import BaseView from './BaseView.js';

export default class extends BaseView {
    constructor() {
        super();
        this.setTitle('Home');
        this.art_list = this.get_art_list();
    }

    generate_art() {
        //gets the next artwork in the list and displays it
        this.display_art();
    }

    display_art() {
        const art_img_spot = document.getElementById('art_img');
        const movement_spot = document.getElementById('movement');
        const title_spot = document.getElementById('title');
        const artist_spot = document.getElementById('artist');

        // console.log(art_list);
        index = generate_random_index();
        art_img_spot.src = this.art_list[index].filepath;
        art_img_spot.alt = this.art_list[index].title;
        movement_spot.innerHTML = this.art_list[index].movement;
        title_spot.innerHTML = this.art_list[index].title;
        artist_spot.innerHTML = this.art_list[index].artist;
    }

    async get_art_list() {
        // let response = await fetch(
        //     'https://calebbarzee.github.io/8-bit-gallery/src/app/art.json'
        // );
        let response = await fetch('https://192.168.1.131:3000/app/art.json');
        let data = await response.json();
        art_list = data;
        // console.log(art_list);
        return art_list;
    }

    generate_random_index() {
        let random_index = Math.floor(Math.random() * (85 - 0) + 0);
        // max = 84, min = 0
        // console.log(random_index);
        return random_index;
    }

    async getHtml() {
        return `
            <div class="display_area">
            <h2 id="page_title">8-Bit Art Gallery</h1>
            <img id="art_img" src="" alt="">
            <h4 id="movement" class="art_movement"></h4>
            <h4 id="title" class="art_title"></h4>
            <h4 id="artist" class="artist_name"></h4>
            <button class="displayNew">New Display</button>
            </div>
        `;
    }
}
