import {Character} from "rickmortyapi";
import {useEffect, useState} from "react";
import axios from "axios";

export function GetCharacter(id:number)
{
   const [char, setChar] = useState<Character|undefined>();

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/"+id).then(res=>{
            setChar(res.data)
        })
    }, [id]);
    return char;
}