import {html} from '../node_modules/lit-html/lit-html.js';
import { login } from './api/data.js';

async function loginPage() {
    return html`
    <section id="login-page" class="content auth">
        <h1>Login</h1>

        <form @submit=${doLogin} id="login" action="#" method="">
            <fieldset>
                <blockquote>Knowledge is like money: to be of value it must circulate, and in circulating it can
                    increase in quantity and, hopefully, in value</blockquote>
                <p class="field email">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">
                </p>
                <p class="field password">
                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-pass" name="password">
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Log in">
                </p>
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
    `;
}

export async function loginView(ctx) {
    ctx.render(await loginPage());
};

async function doLogin(event) {
    event.preventDefault();
    let form = event.target;
    let email = form.querySelector('#email').value.trim();
    let password = form.querySelector('#login-pass').value.trim();
    if(email !== '' && password !== ''){
        login({email, password});
    }
    else{
        alert('All fields are required!')
    }
}