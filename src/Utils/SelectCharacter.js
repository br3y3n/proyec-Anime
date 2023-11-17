import { fetchData } from "../Hooks/fetchData"
import { useParams } from "react-router-dom";
const apiData = fetchData('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Character/')
export const SelectCharacter = () => {
    const characters= apiData.read();
    const id= useParams();
    let character={};
    const idd=id.id
    for(let i=1;i<=characters.length;i++){
        if(i==idd){
            character=characters[i];
            console.log(i);
        }else{
           console.log("NO ENTRE");
        }
        console.log(i);
    }
    return character
}
