import { AiTwotoneHome } from "react-icons/ai";
import {BiSolidMoviePlay} from 'react-icons/bi';
import {PiTelevision} from 'react-icons/pi';
import { IoSearch } from "react-icons/io5";
export const navigation=[
       { label:"TV Shows",
         href:'tv',
         icon:<PiTelevision />

       },
       {
        label:"Movies",
        href:'movie',
        icon:<BiSolidMoviePlay />
       }
    ]

    export const mobileNavigation=[
        {
            label:"Home",
            href:'/',
           icon:<AiTwotoneHome />
        },
        ...navigation,{
            label:"Search",
            href:'/search',
            icon:<IoSearch />
        }
    ]


    


    