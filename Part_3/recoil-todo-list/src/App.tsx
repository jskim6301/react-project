import React from 'react';
import {RecoilRoot} from 'recoil';
import Calendar from "./components/Calendar";
const App: React.FC = () => {
    return (
        <>
        <RecoilRoot>
            <Calendar/>
        </RecoilRoot>
        </>

    )
};

export default App;