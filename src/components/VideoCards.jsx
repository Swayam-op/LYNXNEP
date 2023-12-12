import React from 'react'
import { Link } from 'react-router-dom'
const VideoCards = ({data}) => {
    return (
        <div className='w-full min-h-32 h-36 flex mb-1 items-stretch'>
                <div style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${data.episodeimg})`
                }} className=' self-stretch basis-1/5 border h-full border-black'>

                </div>
                <div style={{
                    // background: "rgb(255,255,255)",
                    background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(32,32,32,1) 0%, rgba(51,53,51,1) 79%)"
                }} className='basis-4/5 flex justify-between flex-col px-4 py-2'>
                    <h1 className='text-md font-bold '>{data.title}</h1>
                    <p className='text-xs text-[#d0d5da] tracking-wide font-light'>{data.description}</p>
                    <Link to={`/screen/${data.collectionName}/${data.series}/${data.video}`}><button className='w-fit text-xs bg-white md:px-10 px-8 rounded-md md:py-3 py-2 font-semibold text-black shadow-xl tracking-wider  transition-colors duration-200 hover:text-white hover:bg-black'>PLAY</button></Link>
                </div>
            </div>
    )
}

export default VideoCards