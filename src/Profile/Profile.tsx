import {useNavigate, useParams} from "react-router";
import {GetCharacter} from "../API/getCharacter";

export default function Profile(){
    const {id} = useParams();
    const navigate = useNavigate();
    if(!id){
        return(<></>);
    }
    const character = GetCharacter(Number.parseInt(id))
    if(!character){
        return(<p>Loading...</p>);
    }
    return (
        <>
            <img src={character.image} alt={"something went wrong"}/>
            <p>{character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            {character.type === ""?null:<p>Type/Subspecies: {character.type}</p>}
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            <p>Episodes: TODO</p>
            <button onClick={()=>navigate("/")}>Back</button>
        </>
    )
}