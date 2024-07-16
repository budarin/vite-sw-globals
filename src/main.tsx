import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('sw/index.mts', import.meta.url), {
        type: 'module',
    });
}
