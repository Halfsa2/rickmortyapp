import {GetCharacters} from "../../API/getCharacters";
import {Character} from "rickmortyapi";
import {Link} from "react-router";
import {useState} from "react";
import {Pagination} from "@mui/material";

export default function Table(){
    const [searchBarValue,setSearchBarValue] = useState<string>("");
    const [pageCount,setPageCount] = useState<number>(1);
    const results = GetCharacters(searchBarValue,pageCount);
    const characters = results?results.results?results.results:[]:[];
    console.log(characters)
    return (
        <div>
            <input id="searchBar" type="text" onChange={event=>{setPageCount(1);setSearchBarValue(event.target.value);}}/>
            {fillTable(characters)}
            <Pagination hidden={characters.length === 0} page={pageCount} onChange={(e,value)=>{setPageCount(value)}} count={results?.info?.pages} />
        </div>
    )
}
function fillTable(characters:Character[]){
    if(characters.length === 0){
        return <p>No results</p>
    }
    const tableBody = characters.map(character=>
        <tr key={character.id.toString()} id={character.id.toString()}>
            <td key={character.id +"_img"}>
                <img src={character.image} alt="not found"/>
            </td>
            <td key={character.id+"_name"}>
                <Link to={"/profile/"+character.id}>{character.name}</Link>
            </td>
            <td key={character.id+"_spec"}>
                {character.species}
            </td>
            <td key={character.id+"_stat"}>
                {character.status}
            </td>
        </tr>
    )
 return(
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
            {tableBody}
         </tbody>
     </table>
 )
}