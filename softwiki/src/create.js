import {html} from '../node_modules/lit-html/lit-html.js';
import { createArticle } from './api/data.js';

async function createPage() {
    return html`
    <!-- Create -->
    <section id="create-page" class="content">
        <h1>Create Article</h1>

        <form @submit=${doCreate} id="create" action="#" method="">
            <fieldset>
                <p class="field title">
                    <label for="create-title">Title:</label>
                    <input type="text" id="create-title" name="title" placeholder="Enter article title">
                </p>

                <p class="field category">
                    <label for="create-category">Category:</label>
                    <input type="text" id="create-category" name="category" placeholder="Enter article category">
                </p>
                <p class="field">
                    <label for="create-content">Content:</label>
                    <textarea name="content" id="create-content"></textarea>
                </p>

                <p class="field submit">
                    <input class="btn submit" type="submit" value="Create">
                </p>

            </fieldset>
        </form>
    </section>
    `;
}

export async function createView(ctx) {
    ctx.render(await createPage())
}

async function doCreate(event) {
    event.preventDefault();
    let form = event.target;
    let title = form.querySelector('#create-title').value.trim();
    let category = form.querySelector('#create-category').value.trim();
    let content = form.querySelector('#create-content').value.trim();
    if(title !== '' && category !== '' && content !== ''){
        if(category === 'JavaScript' ||  category === 'C#' || category === 'Java' || category === 'Python'){
            createArticle({title, category, content});
        } else {
            alert('Category must be JavaScript/C#/Java/Python');
        }
    } else {
        alert('All fields are required!');
    }
    
}