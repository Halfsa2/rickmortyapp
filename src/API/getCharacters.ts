import {useEffect, useState} from "react";
import {Character, getCharacters} from "rickmortyapi";
import axios from "axios";

export function GetCharacters(){
    const [characters, setCharacters] = useState<Character[]>()
    useEffect(()=>{
        const char = axios.get("https://rickandmortyapi.com/api/character").then(res=>{
            console.log(res.data)
            setCharacters((res.data.results));
        }).catch(err=>{console.log(err)});
    },[]);
    return characters?characters:[];
}