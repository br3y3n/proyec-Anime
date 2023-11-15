
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
      <aside className="flex flex-wrap justify-evenly pt-8 bg-gradient-to-r from-slate-950 to-slate-900">
    {animes.map((anime) =>
      <Card className="w-72  text-white mb-5 bg-slate-800 rounded-lg hover:scale-90 transition duration-200" key={anime.id}>
        <CardHeader shadow={false} floated={false} className="h-72 mb-3">
          <img
            src={anime.photo}
            alt="card-image"
            className="h-full w-full object-cover rounded-md "
            />
        </CardHeader>
        <CardBody className="p-4">
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
            {anime.id_studio.name}
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
            className="bg-cyan-600 text-slate-950 rounded-none font-semibold text-lg shadow hover:scale-105 hover:shadow focus:scale-110 focus:shadow active:scale-100 mb-5"
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