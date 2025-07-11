import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'

const MovieDetail = () => {
    const [params] = useSearchParams()
    console.log(params.get('id'))
    const [movied, setMovied] = useState({})

    useEffect(() => {
        const fetchMovie = async () => {
            const url = `https://www.omdbapi.com/?i=${params.get('id')}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

            try {
                const response = await axios.get(url);
                const data = response.data;
                setMovied(data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }

        }
        fetchMovie();
    }, [])
    console.log("data useeffect", movied)

    console.log(movied.Poster)


    return (

        <>
            <div className='bg-[#222831] h-screen  flex flex-col justify-center items-center'>
                
                <div className='p-10 bg-[#393E46] text-[#EEEEEE] rounded-3xl flex flex-col sm:flex-row '>
                    <img className='rounded-md h-60 sm:h-100' width="auto"height="240" src={movied.Poster} alt={movied.Title} />
                    <div className='px-5 w-80 sm:w-120 flex flex-col'>
                        <h1 className='text-5xl my-2 font-bold text-[#00ADB5]  '>{movied.Title}</h1>
                        <p className='text-2xl font-medium my-2 '>Released : {movied.Released}</p>
                        <p className='my-1 text-lg font-medium '>Genre : {movied.Genre}</p>
                        <p className='my-1 text-lg font-medium'>Director : {movied.Director}</p>
                        <p className='my-1 text-lg font-medium'>Cast : {movied.Actors}</p>
                        <p className='my-2 font-medium text-justify'>Plot : {movied.Plot}</p>
                        {movied.Ratings && movied.Ratings.length > 0 && (
                            <p className='my-2 font-medium'>
                                Ratings: {movied.Ratings[0].Value}
                            </p>
                        )}
                    </div>
                </div>
                <Link to={'/'}>
                <div className='my-3 py-1 px-2 rounded-md hover:text-black hover:scale-105 transition duration-300 font-medium drop-shadow-stone-50 bg-[#EEEEEE] text-[#222831] '>
                    Back To Home 
                </div>
                </Link>
            </div>
        </>
    )
}

export default MovieDetail