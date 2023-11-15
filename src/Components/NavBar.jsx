import React from "react";

import {
    Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


function NavList() {
    const styleText = "flex items-center hover:text-cyan-400 transition-colors text-2xl "

    return (
        <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-gradient-to-r from-slate-900 to-slate-950 text-3xl text-zinc-200">
            <Typography>
                <img className="pl-10" src="src/assets/logoP.png" alt="" />
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium "
            >
                <NavLink className={styleText} to='/'>
                    Anime
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink className={styleText} to='production'>
                    Poduction
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink className={styleText} to='block'>
                    Blocks
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink className={styleText} to='biography'>
                    Biography
                </NavLink>
            </Typography>
        </ul>
    );
}
export default NavList
