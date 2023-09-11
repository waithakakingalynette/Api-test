'use client'
import {useState,useEffect} from 'react';
import { getMovieDetails } from '@/app/utils/utils';
import {usePathname} from  'next/navigation'

const MovieDetails=({params}:{params:{params:{movieId:number}}})=>{    
    const [movieDetails,setMoviesDetails]= useState();
    const path = usePathname
    console.log({path});
useEffect(()=>{
    (async ()=>{
        const movieDetails = await getMovieDetails(+path);
        console.log(movieDetails)
    })()},[])
    return(
        <div>        </div>
    )
}
export default MovieDetails;