import styled from "styled-components";

export default function InfoCountries({common, official, capital, subregion, lenguages, area, flag, population, maps}){
    return(
        <>
        <BoxInfo>
            <Info><h1>• Flag:</h1>{flag}</Info>
            <Info><h1>• Official name:</h1>{official}</Info>
            <Info><h1>• Common name:</h1>{common}</Info>
            <Info><h1>• Continent:</h1>{subregion}</Info>
            <Info><h1>• Capital:</h1>{capital}</Info>
            <Info><h1>• Area:</h1>{area} Km²</Info>
            <Info><h1>• Population:</h1>{population}</Info>
            <LinkMap href={maps}><h1>• Link to map:</h1>{maps}</LinkMap>
        </BoxInfo>
        </>
    );
}

const BoxInfo = styled.div`
box-sizing:border-box;
min-width:60%;
background-color:white;
color:black;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-top:50px;
padding:20px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
border-radius:3px;
h1{
    font-size:25px;
    font-weight:bold;
    margin-right:10px;
}
`;

const Info = styled.h2`
color:black;
display:flex;
font-size:25px;
box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
`;

const LinkMap = styled.a`
color:black;
display:flex;
font-size:25px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
text-decoration: none;
`