import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../style/style';
import InitialPage from '../pages/InitialPage';
import UserContext from '../context/context.js';

export default function App() {
    const [countryName, setCountryName] = useState("");
    const [countryInfo, setCountryInfo] = useState({});
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <UserContext.Provider
            value={{
                countryName, setCountryName, countryInfo, setCountryInfo
            }}>
            <Routes>
                <Route path="/" element={<InitialPage/>}/>
            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
        </>
    );
}