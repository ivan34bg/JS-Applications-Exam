import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { allView } from './all.js';
import { logout } from './api/data.js';
import { createView } from './create.js';
import { detailsView } from './details.js';
import { editView } from './edit.js';
import { homeView } from './home.js';
import { loginView } from './login.js';
import { navigationView, setupNav } from './navigation.js';
import { registerView } from './register.js';
import { searchView } from './search.js';

let main = document.querySelector('#main-content');
let nav = document.querySelector('#container nav');

setupNav(nav)

page('/', renderer, homeView);
page('/login', renderer, loginView);
page('/register', renderer, registerView);
page('/create', renderer, createView)
page('/catalogue', renderer, allView);
page('/details/:id', renderer, detailsView);
page('/edit/:id', renderer, editView);
page('/search', renderer, searchView);
page('/logout', logout);

page.start();

navigationView(nav);

function renderer(ctx, next){
    ctx.render = (content) => render(content, main);
    navigationView(nav);
    next();
};