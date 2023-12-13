import axios from 'axios'
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
export const AnimeUpdate = () => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [director, setDirector] = useState('')
  const [studio, setStudio] = useState('')
  const {id}= useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, genre, director, studio].includes('')) {
      console.log("there are empty fields");
      return;
    }

    try {
      const res = await axios.patch(`http://localhost:4000/api/Anime/modifyAnime/${id}`, { name, genre, director, studio });
      console.log(res.data);
      console.log("data changed successfully")
    } catch (error) {
      console.error(error);
      if (error.response.data.msg == 'anime already exists') {
        console.log('anime already exists')
      }
    }
  };


  return (
    <Card color="transparent" shadow={false}
    className='flex items-center'
    >
     
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96  p-5"  onSubmit={handleSubmit}>
      <Typography className='text-xl mb-5'>
        UPDATE ANIME
      </Typography>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            type='text'
            placeholder="name"
            className="  border-t-blue-200 focus:border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Genre
          </Typography>
          <Input
            type='text'
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={e => setGenre(e.target.value)}
            value={genre}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Director
          </Typography>
          <Input
            type="text"
            placeholder="Director"
            className=" border-t-blue-200 focus:border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={e => setDirector(e.target.value)}
            value={director}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Studio
          </Typography>
          <Input
            type="text"
            placeholder="Director"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={e => setStudio(e.target.value)}
            value={studio}
          />
        </div>
        <div className='mt-10'>  
          <button type="submit" className="mr-5 cursor-pointer">Enviar</button>
        <Typography className='cursor-pointer translate-x-20 -translate-y-5'>

        <Link to={'/crud'} >Cerrar</Link>
        </Typography>

      
        </div>
      </form>
    </Card>
  );
}
