import { renderChats } from './src/pages/chats/modules/chats/chats.js';
import { renderUserSettings } from './src/pages/user/modules/user-settings/userSettings.js';
import { renderLoginPage } from './src/pages/home/modules/login/login.js';
import { renderRegistrationPage } from './src/pages/home/modules/registration/registration.js';

(() => {
    const root = document.getElementById('root')
    root.innerHTML = renderRegistrationPage()
})();
