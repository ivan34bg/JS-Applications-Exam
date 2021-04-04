import {html} from '../node_modules/lit-html/lit-html.js';
import {fetchMostRecentArticles} from './api/data.js';

let articles = [];

async function homePage() {
    articles = await fetchMostRecentArticles();
    return html`
    <!-- Home -->
        <section id="home-page" class="content">
            <h1>Recent Articles</h1>
            <section class="recent js">
                <h2>JavaScript</h2>
                ${populateJs()}
            </section>
            <section class="recent csharp">
                <h2>C#</h2>
                ${populateCSharp()}
            </section>
            <section class="recent java">
                <h2>Java</h2>
                ${populateJava()}
            </section>
            <section class="recent python">
                <h2>Python</h2>
                ${populatePython()}
            </section>
        </section>
    `;
}

export async function homeView(ctx) {
    ctx.render(await homePage())
}

function populateJs() {
    let jsArticle = articles.filter(a => a['category'] === 'JavaScript');
    if(jsArticle.length === 0){
        return html`
        <h3 class="no-articles">No articles yet</h3>
        `;
    }
    return html`
        <article>
            <h3>${jsArticle[0]['title']}</h3>
            <p>${jsArticle[0]['content']}</p>
            <a href="/details/${jsArticle[0]['_id']}" class="btn details-btn">Details</a>
        </article>
    `;
}
function populateJava() {
    let javaArticle = articles.filter(a => a['category'] === 'Java');
    if(javaArticle.length === 0){
        return html`
        <h3 class="no-articles">No articles yet</h3>
        `;
    }
    return html`
        <article>
            <h3>${javaArticle[0]['title']}</h3>
            <p>${javaArticle[0]['content']}</p>
            <a href="/details/${javaArticle[0]['_id']}" class="btn details-btn">Details</a>
        </article>
    `;
}
function populateCSharp() {
    let cSharpArticle = articles.filter(a => a['category'] === 'C#');
    if(cSharpArticle.length === 0){
        return html`
        <h3 class="no-articles">No articles yet</h3>
        `;
    }
    return html`
        <article>
            <h3>${cSharpArticle[0]['title']}</h3>
            <p>${cSharpArticle[0]['content']}</p>
            <a href="/details/${cSharpArticle[0]['_id']}" class="btn details-btn">Details</a>
        </article>
    `;
}
function populatePython() {
    let pythonArticle = articles.filter(a => a['category'] === 'Python');
    if(pythonArticle.length === 0){
        return html`
        <h3 class="no-articles">No articles yet</h3>
        `;
    }
    return html`
        <article>
            <h3>${pythonArticle[0]['title']}</h3>
            <p>${pythonArticle[0]['content']}</p>
            <a href="/details/${pythonArticle[0]['_id']}" class="btn details-btn">Details</a>
        </article>
    `;
}