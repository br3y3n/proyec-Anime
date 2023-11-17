import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Button
} from "@material-tailwind/react";
import { useState } from "react";
import { fetchData } from "../../Hooks/fetchData";

const apiData = fetchData('https://api.jikan.moe/v4/anime')
export const SelectAnimes = () => {
    let animes = apiData.read();
    const name = apiData.read();
    const [search, setSearch] = useState();
    const handleChange = (event) => {
        setSearch(event.target.value);
        searchAnime(event.target.value)
    };
    console.log(search);
    const searchAnime = (nameAnimee) => {
        let animeselect = name.data.map((selectAnime) => {
            if (selectAnime.title == nameAnimee) {
                return selectAnime
            }
        })
        animes = animeselect
        console.log(animes)
    }
    console.log(animes);
    return (
        <>
            <form>

                <Input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search"
                    onChange={handleChange}
                    containerProps={{
                        className: "min-w-[288px]",
                    }}
                    className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300 w-96 float-right"
                    labelProps={{
                        for: "search",
                        className: "before:content-none after:content-none",
                    }}
                />
            </form>

            <aside className="flex flex-wrap justify-evenly pt-8 bg-gradient-to-r from-slate-950 to-slate-900 text-white ">

                {animes.data && animes.data.map((searchAnime) =>
                    <Card className="w-full max-w-[48rem] flex-row bg-gradient-to-r from-slate-950 to-slate-900 text-white " key={searchAnime.mal_id}>

                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none bg-gradient-to-r from-slate-950 to-slate-900 "
                        >
                            {
                                (
                                    <img

                                        src={searchAnime.images.jpg.image_url}
                                        alt="src/assets/logoP.png"
                                        className="h-4/5 w-96 object-cover rounded-md translate-y-20"
                                    />
                                )}

                        </CardHeader>
                        <CardBody className='pl-5 mt-20'>
                            <Typography variant="h6" color="gray" className="mb-4 uppercase text-3xl text-slate-50" children="name">
                                {searchAnime.title_japanese}
                            </Typography>
                            <Typography variant="h6" color="gray" className="mb-4 uppercase text-3xl  text-slate-50" children="name">
                                {searchAnime.episodes}
                            </Typography>
                            <Typography variant="h4" color="blue-gray" className="mb-2 text-3xl text-slate-50" children="roleHistory">
                                {searchAnime.duration}
                            </Typography>
                            <Typography color="gray" className="mb-8 font-serif text-lg text-justify text-slate-50" children="descriptio">
                                {searchAnime.synopsis}
                            </Typography>
                        </CardBody>
                    </Card>
                )}
            </aside>
        </>
    )
}
