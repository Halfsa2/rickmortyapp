import {GetCharacters} from "../../API/getCharacters";
import {Character} from "rickmortyapi";
import {Link} from "react-router";
import {useState} from "react";
import {Box, Input, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function HomeTable(){
    const [searchBarValue,setSearchBarValue] = useState<string>("");
    const [pageCount,setPageCount] = useState<number>(1);
    const results = GetCharacters(searchBarValue,pageCount);
    const characters = results?results.results?results.results:[]:[];
    console.log(characters)
    return (
        <TableContainer>
            <Input value={searchBarValue} id="searchBar" type="text" onChange={event=>{setPageCount(1);setSearchBarValue(event.target.value);}}/>
            <Pagination  hidden={characters.length === 0} page={pageCount} onChange={(e,value)=>{setPageCount(value)}} count={results?.info?.pages} />
            {fillTable(characters)}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: 2
            }}>
                <Pagination  hidden={characters.length === 0} page={pageCount} onChange={(e,value)=>{setPageCount(value)}} count={results?.info?.pages} />
            </Box>
        </TableContainer>
    )
}
function fillTable(characters:Character[]){
    if(characters.length === 0){
        return <p>No results</p>
    }
    const tableBody = characters.map(character=>
        <TableRow key={character.id.toString()} id={character.id.toString()}>
            <TableCell >
                <img src={character.image} alt="not found"/>
            </TableCell>
            <TableCell>
                <Link to={"/profile/"+character.id}>{character.name}</Link>
            </TableCell>
            <TableCell>
                {character.species}
            </TableCell>
            <TableCell>
                {character.status}
            </TableCell>
        </TableRow>
    )
 return(
     <Table>
         <TableHead>
         <TableRow>
             <TableCell>Avatar</TableCell>
             <TableCell>Name</TableCell>
             <TableCell>Species</TableCell>
             <TableCell>Status</TableCell>
         </TableRow>
         </TableHead>
         <TableBody>
            {tableBody}
         </TableBody>
     </Table>
 )
}