import {useNavigate, useParams} from "react-router";
import {GetCharacter} from "../API/getCharacter";
import {Episode} from "rickmortyapi";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Profile(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [episodes,setEpisodes] = useState<Episode[]>([]);
    const character = GetCharacter(Number.parseInt(id?id:"-1"))
    //Apparently useEffect cannot compare arrays properly, so I'm using this as a dependency
    const episodeLinks = character?.episode?.join(',');
    useEffect(() => {
        if (!character?.episode || character.episode.length === 0) {
            return;
        }
        const promises = character?.episode.map( async ep=>{
            return axios.get(ep).then(res=>{
                return res.data;
            });
        });
        if(promises !== undefined) {
            Promise.all(promises).then(res => {
                    setEpisodes(res)
            });
        }
    }, [episodeLinks]);
    console.log(episodes);
    if(!character){
        return (<></>)
    }
    return (
        <>
            <img src={character.image} alt={"something went wrong while loading"}/>
            <p>{character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            {character.type === ""?null:<p>Type/Subspecies: {character.type}</p>}
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            <p>Episode(s):</p>
            <p>{episodes.map(ep=>{return ep.name?ep.name+", ":""})}</p>
            <button onClick={()=>navigate("/")}>Back</button>
        </>
    )
}