import BaseView from './BaseView.js';

export default class extends BaseView {
    constructor() {
        super();
        this.setTitle('Login');
    }

    async getHtml() {
        return `
            <h1> This is the login view. </h1>
        `;
    }
}
