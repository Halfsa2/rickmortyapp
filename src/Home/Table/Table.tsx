import {GetCharacters} from "../../API/getCharacters";
import {Character} from "rickmortyapi";
import {Link} from "react-router";

export default function Table(){
    return (
        <table className="homeTable">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Species</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {fillTable(GetCharacters())}
            </tbody>
        </table>
    )
}
function fillTable(characters:Character[]){
    const tableBody = characters.map(character=>
        <tr id={character.id.toString()}>
            <td>
                <img src={character.image} alt="not found"/>
            </td>
            <td>
                <Link to={"/profile/"+character.id}>{character.name}</Link>
            </td>
            <td>
                {character.species}
            </td>
            <td>
                {character.status}
            </td>
        </tr>
    )
 return(
     <>
         {tableBody}
     </>
 )
}