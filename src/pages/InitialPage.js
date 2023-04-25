import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../context/context.js";
import Container from "../components/Container";
import { findCountry } from "../axios/axios";

export default function InitialPage(){
    const { countryName, setCountryName, countryInfo, setCountryInfo } = useContext(UserContext);
    const [isFoundCountry, setIsFoundCountry] = useState(false);

    async function searchForCountry(){
        try{
            const infoFound = await findCountry(countryName);  
            console.log(infoFound.data);
            setCountryInfo(infoFound.data);   
            setIsFoundCountry(true);
        }catch(err){
            alert("Não foi possível encontrar o país");
        }
    };

    function submitSearch(e){
        e.preventDefault();
    };

    return(
        <>
        <Top/>
        <Container>
            <Search>Seach for a Country</Search>
            <SeachForm onSubmit={submitSearch}>
                <Input type="text" placeholder="Country name" value={countryName} onChange={event => setCountryName(event.target.value)} required/>
                <ButtonSeach type="submit" onClick={searchForCountry}>
                    Search
                </ButtonSeach>
            </SeachForm>
        </Container>
        </>
    );
}

const Top = styled.div`
height:10vh;
width:100vw
`;

const Search = styled.h1`
font-size:21px;
`;

const SeachForm = styled.form`
`;
const Input = styled.input`
width:320px;
height:40px;
border-radius: 5px 5px 5px 5px;
padding:10px;
font-size:20px;
`;

const ButtonSeach = styled.button`
width:180px;
height:65px;
`