import { renderChats } from './pages/chats/modules/chats/chats.js';
import { renderUserSettings } from './pages/user/modules/user-settings/userSettings.js';
import { renderLoginPage } from './pages/home/modules/login/login.js';
import { renderRegistrationPage } from './pages/home/modules/registration/registration.js';
import { render404Page } from './pages/home/modules/page404/page404.js';
import { render500Page } from './pages/home/modules/page500/page500.js';

(() => {
    const root = document.getElementById('root');
    root.innerHTML = renderLoginPage();
})();

function goLogin() {
    const root = document.getElementById('root');
    root.innerHTML = renderLoginPage();
}

function goRegister() {
    const root = document.getElementById('root');
    root.innerHTML = renderRegistrationPage();
}

function goUser() {
    const root = document.getElementById('root');
    root.innerHTML = renderUserSettings();
}

function goChats() {
    const root = document.getElementById('root');
    root.innerHTML = renderChats();
}

function go404() {
    const root = document.getElementById('root');
    root.innerHTML = render404Page();
}

function go500() {
    const root = document.getElementById('root');
    root.innerHTML = render500Page();
}

const buttonGoLogin = document.getElementById('go-login');
buttonGoLogin.addEventListener('click', goLogin);

const buttonGoRegister = document.getElementById('go-register');
buttonGoRegister.addEventListener('click', goRegister);

const buttonGoUser = document.getElementById('go-user');
buttonGoUser.addEventListener('click', goUser);

const buttonGoChats = document.getElementById('go-chats');
buttonGoChats.addEventListener('click', goChats);

const buttonGo404 = document.getElementById('go-404');
buttonGo404.addEventListener('click', go404);

const buttonGo500 = document.getElementById('go-500');
buttonGo500.addEventListener('click', go500);
