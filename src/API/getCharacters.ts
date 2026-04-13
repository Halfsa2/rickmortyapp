import {useEffect, useState} from "react";
import {Character, getCharacters, Info} from "rickmortyapi";
import axios from "axios";

export function GetCharacters(prompt:string, page:number){
    const [characters, setCharacters] = useState<Info<Character[]>>()
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character?name="+prompt+"&page="+page).then(res=>{
            console.log(res.data.info.pages)
            setCharacters((res.data));
        }).catch(err=>{console.log(err);setCharacters(undefined)});
    },[prompt,page]);
    console.log(characters)
    return characters?characters:undefined;
}