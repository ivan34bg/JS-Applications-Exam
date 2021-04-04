import {html} from '../node_modules/lit-html/lit-html.js';
import { fetchAllArticles } from './api/data.js';

async function allPage() {
    return html`
    <!-- catalogue -->
        <section id="catalog-page" class="content catalogue">
            <h1>All Articles</h1>
            ${await populateAll()}
        </section>
    `;
}

export async function allView(ctx) {
    ctx.render(await allPage())
}

async function populateAll() {
    let articles = [];
    articles = await fetchAllArticles();
    if(articles.length === 0){
        return html`
        <h3 class="no-articles">No articles yet</h3>
        `;
    }
    else {
        let arr = [];
        articles.forEach(a => {
            arr.push(html`
            <a class="article-preview" href="/details/${a['_id']}">
                <article>
                    <h3>Topic: <span>${a['title']}</span></h3>
                    <p>Category: <span>${a['category']}</span></p>
                </article>
            </a>
            `);
        });
        return arr;
    }
}