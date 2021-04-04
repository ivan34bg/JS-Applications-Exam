import {get, post, put, remove} from './api.js';
import page from '../../node_modules/page/page.mjs';

export async function login(credentials) {
    let data;
    data = await post('/users/login', {body: JSON.stringify(credentials)});
    sessionStorage.setItem('authToken', data['accessToken']);
    sessionStorage.setItem('userId', data['_id']);
    page.redirect('/');
};
export async function register(credentials) {
    let data = await post('/users/register', {body: JSON.stringify(credentials)});
    sessionStorage.setItem('authToken', data['accessToken']);
    sessionStorage.setItem('userId', data['_id']);
    page.redirect('/');
};
export async function logout() {
    get('/users/logout', {headers:{'X-Authorization': sessionStorage.getItem('authToken')}});
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    page.redirect('/');
};

export async function fetchMostRecentArticles() {  
    return await get('/data/wiki?sortBy=_createdOn%20desc&distinct=category', {});  
}

export async function fetchAllArticles() {
    return await get('/data/wiki?sortBy=_createdOn%20desc', {});
}

export async function createArticle(articleInfo) {
    post('/data/wiki', {headers:{'X-Authorization': sessionStorage.getItem('authToken')}, body: JSON.stringify(articleInfo)});
    page.redirect('/');
}

export async function fetchDetailsOfArticle(id) {
    return await get(`/data/wiki/${id}`, {});
}

export async function editArticle(articleId, newInfo) {
    put(`/data/wiki/${articleId}`, {headers:{'X-Authorization': sessionStorage.getItem('authToken')}, body: JSON.stringify(newInfo)});
    page.redirect(`/details/${articleId}`)
}

export async function deleteArticle(articleId) {
    remove(`/data/wiki/${articleId}`, {headers:{'X-Authorization': sessionStorage.getItem('authToken')}});
    page.redirect('/');
}

export async function search(title) {
    return await get(`/data/wiki?where=title%20LIKE%20%22${title}%22`, {});
}