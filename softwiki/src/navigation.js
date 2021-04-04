let guestNav;
let userNav;
let allNav;

export function setupNav(navTarget) {
    guestNav = navTarget.querySelector('#guest');
    userNav = navTarget.querySelector('#user');
    allNav = navTarget.querySelector('#all');
}

export function navigationView(nav) {
    loadNav(nav);
}

function loadNav(navTarget){
    navTarget.innerHTML = '';
    navTarget.appendChild(allNav);
    if(sessionStorage.getItem('authToken') !== null){
        navTarget.appendChild(userNav);    
    }
    else {
        navTarget.appendChild(guestNav);
    }
}