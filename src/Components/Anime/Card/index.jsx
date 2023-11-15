
import React, { Suspense } from "react";
import { Link } from 'react-router-dom';
import { fetchData } from "../../../Hooks/fetchData";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  const apiData= fetchData('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Anime/')
  export function CardAnime() {
    const animes = apiData.read();
    return (
    <aside  className="flex flex-wrap justify-evenly mt-8">
    {animes.map((anime) =>
    <Card className="w-72" key={anime.id}>
        <CardHeader shadow={false} floated={false} className="h-72 mb-3">
          <img
            src={anime.photo}
            alt="card-image"
            className="h-full w-full object-cover rounded-md hover:scale-90 transition duration-200"
            />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium text-2xl">
              {anime.name}
            </Typography>
            
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-lg"
            >
            {anime.director}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-lg"
            >
            {anime.id_studio}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-lg"
            >
            {anime.genre}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-slate-900/10 text-slate-950 font-semibold text-lg shadow-none hover:scale-105 hover:shadow focus:scale-110 focus:shadow-none active:scale-100 mb-5"
            >
               <Link to={`characters/${anime.id}`}>
            Look More
               </Link>
          </Button>
        </CardFooter>
      </Card>
    )}
              </aside>
              );
  }