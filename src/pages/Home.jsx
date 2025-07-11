import { useEffect, useState, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import instance from '../api/omdb'
import Navbar from '../Component/Navbar';
import axios from 'axios';
import Movies from '../Movies';
import { Link } from 'react-router';
const Home = ({ movies, setMovies, query, setQuery, pages, setPages , movietype, setMovietype }) => {
    let[ totalpages, setTotalpages] = useState(0)

    // const movie = instance;
    useEffect(() => {
 const delayDebounce = setTimeout(() => {        if (query.trim() !== '') {
            const fetchData = async () => {
                const url = `https://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_OMDB_API_KEY}&page=${pages}&type=${movietype}`;
                console.log("Fetching from:", url);

                try {
                    const response = await axios.get(url);
                    const data = response.data;

                    if (data.Response === "True") {
                        setMovies(data.Search);
                        setTotalpages(data.totalResults);

                    } else {
                        setMovies([]);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }

            }

            fetchData();
        }}, 300);
        return () => clearTimeout(delayDebounce);
    }, [query, pages , movietype]);



  





    useEffect(() => {
        console.log(movies)
    }, [])




    return (
        <div>
            <Navbar  setQuery={setQuery}  setMovietype={setMovietype} />

                       <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                loop="true"
            >
                <SwiperSlide><Link to={"/moviesdetails?id=tt16311594"}><img loading='lazy' className='' src="f1 movie.jpg" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt14205554"}><img loading='lazy' className='' src="Demon-hunter-Movie.webp" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt26743210"}><img loading='lazy' className='' src="How-train-your-dragon-movie.webp" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt7181546"}> <img loading='lazy' className='' src="Ballerina-movie.jpg" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt26342662"}><img loading='lazy' className='' src="Megan-movie.webp" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt10676052"}><img loading='lazy' className='' src="Fantastic-four-movie.jpg" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt5950044"}> <img loading='lazy' className='' src="Super-man-movie.jpg" alt="" /></Link></SwiperSlide>



            </Swiper>


            <Movies movies={movies} pages={pages} setPages={setPages} totalpages={totalpages} query={query} />
        </div >
    )
}

export default Home