import axios from 'axios';
import { Button } from '@material-tailwind/react';

export const AnimeDelete = ({id}) => {
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/Anime/delate/${id}`);
      console.log(res);
      console.log('Anime deleted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleDelete}>
      <img src="src/assets/delete.png" alt="" className="h-12 cursor-pointer" />
      
    </Button>
  );
};
