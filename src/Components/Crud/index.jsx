import axios from 'axios'
import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { AnimeCreate } from './Create';
const TABLE_HEAD = ["Name", "Director", "Update", "Delate"];

export const Crud = () => {
  const [animes, setanimes] = useState(null)
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => setShowForm(true);
  const consumo = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/Anime/readAnime')
      const data = response.data;
      setanimes(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    consumo();
  }, []);
  return (
    <>
        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
          <h1>ADD ANIME</h1>
          <img src="src/assets/create.png" alt="" onClick={handleClick} />
        </Typography>
        {showForm && <AnimeCreate onClose={() => setShowForm(false)} />}
      <Card className="h-full w-full overflow-scroll bg-gradient-to-r from-stone-100 to-stone-200 ">
        <table className="w-full min-w-max table-auto text-left " >
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-gray-100 p-4">
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal leading-none text-2xl"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {animes && animes.Anime.map(({ _id, name, director }) => (
            <tbody key={_id} >
              <td className="p-4">
                  <Typography variant="small" color="blue" className="font-normal">
                    {_id}
                  </Typography>
                </td>
              <tr className="hover:bg-gray-400 text-xl ">
                <td className="p-4">
                  <Typography variant="small" color="blue" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {director}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                    Edit
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                    <img src="src/assets/delete.png" alt="" className='w-12' />
                  </Typography>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Card>
    </>
  );
}