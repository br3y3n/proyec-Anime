import axios from 'axios'
import {
    Card,
    Input,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
export const AnimeUpdate = ({ onClose }) => {
   const [name, setName]= useState('')
   const [genre, setGenre]= useState('')
   const [director, setDirector]= useState('')
   const [studio, setStudio]= useState('')
   
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if ([name,genre,director, studio].includes('')) {
        console.log("there are empty fields");
        return;
      }
    
      try {
        const res = await axios.post("http://localhost:4000/api/Anime",{name, genre, director, studio});
        console.log(res.data);
      } catch (error) {
        console.error(error);
        if(error.response.data.msg=='anime already exists'){
          console.log('anime already exists')
        }
      }
      
      onClose();
    };
    

    return (
           <Card color="transparent" shadow={false}
           style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1000,
            background: '#fff',
            border: '1px solid #ccc',
            boxShadow: '0 0 10px 2px #ccc',
            padding:'0% 40%'
          }}
          
           >
            <Typography
            className="text-2xl p-5"
            >
                CREATE ANIME
            </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96  p-5" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6 ">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
             Name
          </Typography>
          <Input
            type='text'
            placeholder="name@mail.com"
            className="  border-t-blue-200 focus:border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={e=> setName(e.target.value)}
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
            onChange={e=> setGenre(e.target.value)}
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
            onChange={e=>setDirector(e.target.value)}
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
            onChange={e=>setStudio(e.target.value)}
            value={studio}
          />
        </div>
        
        <button type="submit" className="m-5 cursor-pointer">Enviar</button>
      <button onClick={onClose}>Cerrar</button>
        
      </form>
    </Card>
    );
}

