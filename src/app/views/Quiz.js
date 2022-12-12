import BaseView from './BaseView.js';

export default class extends BaseView {
    constructor() {
        super();
        this.setTitle('Quiz');
    }

    async getHtml() {
        return `
            <h1> This is the quiz view. </h1>
        `;
    }
}
