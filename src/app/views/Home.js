import BaseView from './BaseView.js';

export default class extends BaseView {
    constructor() {
        super();
        this.setTitle('Home');
    }

    async getHtml() {
        return `
            <h1> This is the homepage. </h1>
        `;
    }
}
