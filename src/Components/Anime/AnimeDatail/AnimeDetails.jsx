
import React, { Suspense } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
import { fetchData } from "../../../Hooks/fetchData";
import { SelectCharacter } from "../../../Utils/SelectCharacter";
  const apiData = fetchData('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Character/')
  export const AnimeDetails = () => {
   const characters= apiData.read();
   const character=SelectCharacter()
  return (
    <aside className="flex justify-center items-center">
   
        <Card className="w-full max-w-[48rem] flex-row" key={character.id}>
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
      <img
      src={character.photo}
      alt="card-image"
      className="h-full w-full object-cover"
      />
      </CardHeader>
      <CardBody className='pl-5 mt-20'>
      <Typography variant="h6" color="gray" className="mb-4 uppercase text-3xl" children="name">
      {character.name}
      </Typography>
      <Typography variant="h4" color="blue-gray" className="mb-2 text-3xl"  children="roleHistory">
      {character.role_history}
      </Typography>
        <Typography color="gray" className="mb-8 font-serif text-lg text-justify" children="descriptio">
         {character.description}
          </Typography>
          </CardBody>
          </Card>
          
          </aside>
  );
}
