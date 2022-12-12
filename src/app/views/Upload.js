import BaseView from './BaseView.js';

export default class extends BaseView {
    constructor() {
        super();
        this.setTitle('Upload');
    }

    async getHtml() {
        return `
            <h1> This is the upload view. </h1>
        `;
    }
}