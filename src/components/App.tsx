import { useState } from 'react';

import viteLogo from 'assets/vite.svg';
import reactLogo from 'assets/react.svg';

import './App.css';
import '/@vite/env';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" loading="lazy" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" loading="lazy" />
                </a>
            </div>
            <h1>Vite + React - ver: {VERSION}</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <b>src/App.tsx</b> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
