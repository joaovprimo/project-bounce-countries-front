import styled from "styled-components";

export default function InfoCountries({common, official, capital, subregion, area, flag, population}){
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
        </BoxInfo>
        </>
    );
}

const BoxInfo = styled.div`
    box-sizing:border-box;
    min-width:60%;
    min-height:50%;
    background-color:white;
    color:black;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin-top:50px;
    padding-left:20px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    border-radius:3px;
    h1{
        font-size:25px;
        font-weight:bold;
        margin-right:10px;
    }
    @media (max-width: 600px){
        width:90%;
        padding-left:15px;
        margin-top:100px;
        min-height:40%;
        h1{
            font-size:15px;
            white-space: pre;
        }   
    }
`;

const Info = styled.div`
    color:black;
    display:flex;
    font-size:25px;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
    @media (max-width: 600px){
        font-size:15px;
    }
`;
