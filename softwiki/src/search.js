import {html, render} from '../node_modules/lit-html/lit-html.js';
import { search } from './api/data.js';

async function searchPage() {
    return html`
    
    <!-- Search  -->
    <section id="search-page" class="content">
        <h1>Search</h1>
        <form @submit=${doSearch} id="search-form">
            <p class="field search">
                <input type="text" placeholder="Search by article title" name="search">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Search">
            </p>
        </form>
        <div class="search-container">  
        </div>
    </section>
    `;
}

export async function searchView(ctx) {
    ctx.render(await searchPage());
}

async function doSearch(event) {
    event.preventDefault();
    let location = event.target.parentNode.querySelector('div.search-container');
    let results = [];
    results = await search(event.target.querySelector('input[name=search]').value.trim());
    if(results.length === 0){
        render(html`<h3 class="no-articles">No matching articles</h3>`, location);
    }
    else {
        let arr = [];        
        results.forEach(a => {
            arr.push(html`
            <a class="article-preview" href="/details/${a['_id']}">
                <article>
                    <h3>Topic: <span>${a['title']}</span></h3>
                    <p>Category: <span>${a['category']}</span></p>
                </article>
            </a>
            `);
        });
        render(arr, location);
    }
}