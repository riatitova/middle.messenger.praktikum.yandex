import { renderChats } from './src/pages/chats/modules/chats/chats.js';
import { renderUserSettings } from './src/pages/user/modules/user-settings/userSettings.js';

(() => {
    const root = document.getElementById('root')
    root.innerHTML = renderUserSettings()
})();
