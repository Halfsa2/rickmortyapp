import {useEffect, useState} from "react";
import {Character} from "rickmortyapi";
import axios from "axios";

export function GetCharacters(prompt:string, page:number){
    const [characters, setCharacters] = useState<Character[]>()
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character?name="+prompt+"&page="+page).then(res=>{
            console.log(res.data)
            setCharacters((res.data.results));
        }).catch(err=>{console.log(err);setCharacters([])});
    },[prompt,page]);
    console.log(characters)
    return characters?characters:[];
}