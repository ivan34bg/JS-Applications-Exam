import {html} from '../node_modules/lit-html/lit-html.js';
import {editArticle, fetchDetailsOfArticle} from './api/data.js';

let articleId;

export async function editView(ctx) {
    articleId = ctx.params.id;
    ctx.render(await editPage());
}

async function editPage() {
    let article = await fetchDetailsOfArticle(articleId);
    return html`
    <!-- Edit -->
        <section id="edit-page" class="content">
            <h1>Edit Article</h1>

            <form @submit=${doEdit} id="edit" action="#" method="">
                <fieldset>
                    <p class="field title">
                        <label for="title">Title:</label>
                        <input type="text" name="title" id="title" value=${article['title']}>
                    </p>

                    <p class="field category">
                        <label for="category">Category:</label>
                        <input type="text" name="category" id="category" value=${article['category']}>
                    </p>
                    <p class="field">
                        <label for="content">Content:</label>
                        <textarea name="content" id="content">${article['content']}</textarea>
                    </p>

                    <p class="field submit">
                        <input class="btn submit" type="submit" value="Save Changes">
                    </p>

                </fieldset>
            </form>
        </section>
    `;
}

async function doEdit(event) {
    event.preventDefault();
    let form = event.target;
    let title = form.querySelector('#title').value.trim();
    let category = form.querySelector('#category').value.trim();
    let content = form.querySelector('#content').value.trim();
    if(title !== '' && category !== '' && content !== ''){
        if(category === 'JavaScript' ||  category === 'C#' || category === 'Java' || category === 'Python'){
            editArticle(articleId, {title, category, content});
        } else {
            alert('Category must be JavaScript/C#/Java/Python');
        }
    } else {
        alert('All fields are required!');
    }
    
}