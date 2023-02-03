import { renderChats } from './pages/chats/modules/chats/chats';
import { renderUserSettings } from './pages/user/modules/user-settings/userSettings';
import { renderLoginPage } from './pages/home/modules/login/login';
import { renderRegistrationPage } from './pages/home/modules/registration/registration';
import { render404Page } from './pages/home/modules/page404/page404';
import { render500Page } from './pages/home/modules/page500/page500';

const root = document.getElementById('root');

(() => {
  if (root) root.innerHTML = renderLoginPage();
})();

function goLogin() {
  if (root) root.innerHTML = renderLoginPage();
}

function goRegister() {
  if (root) root.innerHTML = renderRegistrationPage();
}

function goUser() {
  if (root) root.innerHTML = renderUserSettings();
}

function goChats() {
  if (root) root.innerHTML = renderChats();
}

function go404() {
  if (root) root.innerHTML = render404Page();
}

function go500() {
  if (root) root.innerHTML = render500Page();
}

const buttonGoLogin = document.getElementById('go-login');
if (buttonGoLogin) buttonGoLogin.addEventListener('click', goLogin);

const buttonGoRegister = document.getElementById('go-register');
if (buttonGoRegister) buttonGoRegister.addEventListener('click', goRegister);

const buttonGoUser = document.getElementById('go-user');
if (buttonGoUser) buttonGoUser.addEventListener('click', goUser);

const buttonGoChats = document.getElementById('go-chats');
if (buttonGoChats) buttonGoChats.addEventListener('click', goChats);

const buttonGo404 = document.getElementById('go-404');
if (buttonGo404) buttonGo404.addEventListener('click', go404);

const buttonGo500 = document.getElementById('go-500');
if (buttonGo500) buttonGo500.addEventListener('click', go500);
