import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { Alert } from '../../Alerts';
import { useState } from 'react';
export const AnimeDelete = ({id}) => {
  const [alert, setAlert] = useState({})
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/Anime/delate/${id}`);
      console.log(res);
      setTimeout(() => {
        
        setAlert({msg:'Anime deleted successfully', error:false, isVisible:true});
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleDelete}>
      <Alert alert={alert}/>
      <img src="src/assets/delete.png" alt="" className="h-12 cursor-pointer" />
    </Button>
  );
};
