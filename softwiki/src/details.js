import {html} from '../node_modules/lit-html/lit-html.js';
import { deleteArticle, fetchDetailsOfArticle } from './api/data.js';

let articleId;

export async function detailsView(ctx) {
    articleId = ctx.params.id;
    ctx.render(await detailsPage())
}

async function detailsPage() {
    let details = await fetchDetailsOfArticle(articleId);
    let page = html`
        <!-- Details -->
        <section id="details-page" class="content details">
            <h1>${details['title']}</h1>

            <div class="details-content">
                <strong>Published in category ${details['category']}</strong>
                <p>${details['content']}</p>

                <div class="buttons">
                    ${buttons(details['_ownerId'], details['_id'])}
                    <a href="/" class="btn edit">Back</a>
                </div>
            </div>
        </section>
    `;
    return page;
}

function buttons(ownerId, articleId) {
    if(sessionStorage.getItem('userId') === ownerId){
        return html`
        <a @click=${() => deleteArticle(articleId)} class="btn delete">Delete</a>
        <a href="/edit/${articleId}" class="btn edit">Edit</a>
        `;
    }
}