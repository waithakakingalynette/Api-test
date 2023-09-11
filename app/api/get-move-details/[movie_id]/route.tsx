import {MOVIE_ACCESS_TOKEN, MOVIE_BASE_URL } from "@/app/config";

export async function GET (
    _request:Request,
    {paramas}:{paramas:{movie_id:number}}){   const movie_id= paramas.movie_id;
   if(! MOVIE_ACCESS_TOKEN){
    return new Response ("No Movie access token found",{
        status: 404,
        statusText:'failed'
    })
   }
   if (!MOVIE_BASE_URL){
    return new Response ("No movie base URL found",{
        status: 404,
        statusText: 'failed'
    })
   }
   try{
     const response = await fetch (`${MOVIE_BASE_URL}/3/Movie/${movie_id}`,{
        method:"GET",
        headers:{
            "content-Type": "application/json",
            Authorization:`Bearer ${MOVIE_ACCESS_TOKEN}`
        },
     });
     const result =await response.json();
     return new Response(JSON.stringify(result), {
        status: 200,
            statusText: 'Success',
            headers: {
                'Content-Type': 'application/json',
            },     })
   }
   catch(error:any){
    return new Response (error,{
        status: 500,
        statusText: error
    });
   }
}