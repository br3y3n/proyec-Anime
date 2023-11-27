import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { SelectCharacter } from "../../../Utils/SelectCharacter";
  export const AnimeDetails = () => {
   const character=SelectCharacter()
  return (
  //card to show more information about the character
    <aside className="flex justify-center items-center bg-gradient-to-r from-slate-950 to-slate-900 text-justify text-white h-screen">

      <Card className="w-full max-w-[48rem] flex-row  bg-gradient-to-r from-slate-950 to-slate-900" key={character.id}>
        <CardHeader
        shadow={false}
        floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none  bg-gradient-to-r from-slate-950 to-slate-950"
        >
      <img
      src={character.photo}
      alt="card-image"
      className="h-full w-full object-cover"
      />
      </CardHeader>
      <CardBody className='pl-5 mt-20'>
      <Typography variant="h6" color="gray" className="mb-4 uppercase text-3xl text-slate-100" children="name">
      {character.name}
      </Typography>
      <Typography variant="h4" color="blue-gray" className="mb-2 text-3xl text-slate-100"  children="roleHistory">
      {character.role_history}
      </Typography>
        <Typography color="gray" className="mb-8 font-serif text-lg text-justify text-slate-100" children="descriptio">
         {character.description}
          </Typography>
          </CardBody>
          </Card>
          
          </aside>
  );
}
