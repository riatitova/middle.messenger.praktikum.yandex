import { renderChats } from './src/pages/chats/modules/chats/chats.js';
import { renderUserSettings } from './src/pages/user/modules/user-settings/userSettings.js';
import { renderLoginPage } from './src/pages/home/modules/login/login.js';
import { renderRegistrationPage } from './src/pages/home/modules/registration/registration.js';
import { render404Page } from './src/pages/home/modules/page404/page404.js';
import { render500Page } from './src/pages/home/modules/page500/page500.js';

(() => {
    const root = document.getElementById('root')
    root.innerHTML = render500Page()
})();
