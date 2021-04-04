import {html} from '../node_modules/lit-html/lit-html.js';
import { register } from './api/data.js';

async function registerPage() {
    return html`
    <section id="register-page" class="content auth">
        <h1>Register</h1>

        <form @submit=${doRegister} id="register" action="#" method="">
            <fieldset>
                <blockquote>Knowledge is not simply another commodity. On the contrary. Knowledge is never used up.
                    It
                    increases by diffusion and grows by dispersion.</blockquote>
                <p class="field email">
                    <label for="register-email">Email:</label>
                    <input type="email" id="register-email" name="email" placeholder="maria@email.com">
                </p>
                <p class="field password">
                    <label for="register-pass">Password:</label>
                    <input type="password" name="password" id="register-pass">
                </p>
                <p class="field password">
                    <label for="register-rep-pass">Repeat password:</label>
                    <input type="password" name="rep-pass" id="register-rep-pass">
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Register">
                </p>
                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
    `;
}

export async function registerView(ctx) {
    ctx.render(await registerPage());
}

async function doRegister(event) {
    event.preventDefault();
    let form = event.target;
    let email = form.querySelector('#register-email').value.trim();
    let password = form.querySelector('#register-pass').value.trim();
    let repPass = form.querySelector('#register-rep-pass').value.trim();

    if(email !== '' && password !== '' && repPass === password){
        register({email, password});
    }
    else{
        if(email === '' || password === '' || repPass === ''){
            alert('All fields are required!');
        }
        else {
            alert('Passwords don\'t match!');
        }
    }
}