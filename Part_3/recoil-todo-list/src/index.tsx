// import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
import React, {Suspense} from 'react';
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// ReactDOM.render(<App />, document.getElementById("root"));