import { renderChats } from './src/pages/chats/modules/chats/chats.js';

(() => {
    const root = document.getElementById('root')
    root.innerHTML = renderChats()
})();