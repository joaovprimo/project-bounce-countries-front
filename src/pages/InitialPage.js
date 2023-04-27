import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../context/context.js";
import Container from "../components/Container";
import { findCountry } from "../axios/axios";
import { RotatingLines } from 'react-loader-spinner';
import InfoCountries from "../components/InfoCountries.js";
import Swal from "sweetalert2";
  
export default function InitialPage(){
    const { countryName, setCountryName, countryInfo, setCountryInfo } = useContext(UserContext);
    const [isFoundCountry, setIsFoundCountry] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function searchForCountry(){
        setIsLoading(true);

        try{
            const infoFound = await findCountry(countryName);  
            setCountryInfo(infoFound.data);  
            console.log(infoFound.data)
            setIsLoading(false); 
            setIsFoundCountry(true);
            setCountryName("");
            setIsModalOpen(true);
        }catch(err){
            setIsLoading(false);
            setCountryName("");
            Swal.fire({
                title: 'Error!',
                text: 'Could not find the country, please try again!',
                icon: 'error',
                confirmButtonText: 'OK'
              });
        }
    };

    function submitSearch(e){
        e.preventDefault();
    };

    return(
        <>
            <Container>
                {
                    isModalOpen?
                    <>
                        {(countryInfo.map((countries)=>
                            (<InfoCountries 
                                common={countries.name.common}
                                official={countries.name.official}
                                capital={countries.capital}
                                subregion={countries.subregion}
                                area={countries.area}
                                flag={countries.flag}
                                population={countries.population}
                            />)
                        ))}
                        <ButtonBack onClick={()=>{setIsModalOpen(false)}}>
                            Back
                        </ButtonBack>
                    </>
                    :
                    <>
                    
                        <Top>
                            <TopText>
                                Seach for a Country
                            </TopText>
                        </Top>
                        <SeachForm onSubmit={submitSearch}>
                            <Input type="text" placeholder="Country name" value={countryName} onChange={event => setCountryName(event.target.value)} required/>
                            <ButtonSeach type="submit" onClick={searchForCountry}>
                                {isLoading ? 
                                    <>
                                    <RotatingLines
                                        strokeColor="#122E40"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="40"
                                        visible={true}
                                    />
                                    </>
                                :
                                    <>
                                        Search
                                    </>
                                }
                            </ButtonSeach>
                        </SeachForm>
                    </>
                }
                
            </Container>
        </>
    );
}

const Top = styled.div`
    margin-top:150px;
    margin-bottom:50px;
    @media (max-width: 600px){
        margin-top:200px;
    }
`;

const TopText = styled.h1`
    font-size:50px;
    color:white;
    font-weight:800;
    text-shadow: 1px 1px 2px black;
    @media (max-width: 600px){
        font-size:35px;
    }
`;

const SeachForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Input = styled.input`
    box-sizing:border-box;
    width:320px;
    height:40px;
    border-radius: 5px 5px 5px 5px;
    text-align:center;
    font-size:20px;
    border-style:none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    @media (max-width: 600px){
        width:200px;
        height:40px;
    }
`;

const ButtonSeach = styled.button`
    width:180px;
    height: 48px;
    align-items: center;
    appearance: none;
    background-color: #FCFCFD;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395A;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
    margin-top:50px;
:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}
:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
}
:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
}
@media (max-width: 600px){
    width:150px;
    }
`;

const ButtonBack = styled.button`
    margin-top:50px;
    margin-bottom:80px;
    width:180px;
    height:65px;
    appearance: none;
    background-color: #FCFCFD;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-flex;
    height: 55px;
    justify-content: center;
    align-items:center;
    line-height: 1;
    list-style: none;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}
:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
}
:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
}
@media (max-width: 600px){
    width:150px;
    }
`
