import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UseFetchDetails from '../hooks/UseFetchDetails'
import moment from 'moment'
import Divider from '../components/Divider'
import UseFetch from '../hooks/UseFetch'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import { useState } from 'react'
import VideoPlay from '../components/VideoPlay'

const Details = () => {
  const params = useParams()
  const imageURL = useSelector((state) => state.movieData.imageURL)
  const { data = {} } = UseFetchDetails(`/${params?.explore}/${params?.id}`)

  const { data: castData = { crew: [] } } = UseFetchDetails(
    `/${params.explore}/${params.id}/credits`
  )
  const { data: similarData } = UseFetch(
    `/${params?.explore}/${params?.id}/similar`
  )
  const { data: recommendationData } = UseFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  )

  const director = castData?.crew?.find((el) => el.job === 'Director')?.name
  const duration = (data?.runtime / 60)?.toFixed(1)?.split('.')

  const writer = castData?.crew?.find((el) => el.job === 'Writer')?.name
  //castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")

  const [playVideo,setPlayVideo]=useState(false);
   const [playVideoId,setPlayVideoId]=useState("");
  console.log('imageURL (from Redux):', imageURL)
  console.log('data:', data)
  console.log('castData:', castData)
    const handlePlayVideo=(data)=>{
      setPlayVideoId(data)
          setPlayVideo(true)
    }
  return (
    <div >
      <div className="w-full h-[280px] relative hidden lg:block ">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-0  flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60 ">
          <img
            src={imageURL + data?.poster_path}
            className="h-80 w-60 object-cover rounded"
          />
          <button onClick={()=>handlePlayVideo(data)} className='mt-3  py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-gray-300 hover:scale-105 transition-all '>Play Now </button>
        </div>

        <div>
          <h2 className="text-xl  font-bold lg:text-4xl text-white">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>
          <Divider />
          <div className="flex items-center gap-3">
            <p>Rating {Number(data?.vote_average)}</p>
            <span>|</span>
            <p>View :{Number(data?.vote_count)}</p>
            <span>|</span>
            <p className="">
              Duration: {duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />
          <div>
            <h3 className="text-xl font-bold text-white">Overview</h3>
            <p>{data?.overview}</p>
            <Divider />
            <div className="flex items-center gap-3 my-3 text-center">
              <p>Status {data?.status}</p>
              <span>|</span>
              <p>
                Release Date: {moment(data?.release_date).format('MMM Do YYYY')}
              </p>
              <span>|</span>
              <p>Revenue : {Number(data?.revenue)}</p>
            </div>
            <Divider />
          </div>
          <div>
            <p>
              <span className="text-white">Director:</span>{' '}
              {director || 'Unknown'}
            </p>
            <Divider />
            <p>
              <span>Writer: {writer}</span>
            </p>
          </div>

          <div>
            <Divider />
            <h1 className="font-bold text-lg">Cast :</h1>
            <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-3">
              {castData?.cast
                ?.filter((el) => el?.profile_path)
                .map((StarCast, index) => {
                  return (
                    <div className="">
                      <div>
                        <img
                          src={imageURL + StarCast?.profile_path}
                          className="w-24 h-24  object-cover rounded-full"
                        />
                      </div>
                      <p className="font-bold text-center text-sm">
                        {StarCast?.name}
                      </p>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCard
          data={similarData}
          heading={'Similar ' + params?.explore}
          media_type={params?.explore}
        />
        <HorizontalScrollCard
          data={recommendationData}
          heading={'Recommendation ' + params?.explore}
          media_type={params?.explore}
        />
      </div>
        <div className='justify-center container items-center'>
           {
        playVideo&&(
             <VideoPlay data={playVideoId}  close={()=>setPlayVideo(false)} media_type={params?.explore}/> 
          )
        }
        </div>
       
        
       
    </div>
  )
}

export default Details
