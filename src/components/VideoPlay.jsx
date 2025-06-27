import React from 'react'
import { X } from 'lucide-react';
import UseFetchDetails from '../hooks/UseFetchDetails';
const VideoPlay = ({data, close,media_type}) => {
     const { data : videoData } = UseFetchDetails(`/${media_type}/${data?.id}/videos`)
  return (
<section className="fixed inset-0 z-50 bg-gray-700/70 flex  justify-center mt-100 lg:mt-30">
  <div className="relative items-center w-full max-w-screen-lg max-h-[90vh] aspect-video bg-black rounded">
    <button onClick={close} className="absolute top-2 right-2 z-50 text-3xl text-white">
      <X />
    </button>
    <iframe
      src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
      className="w-full h-full rounded"
      allowFullScreen
    />
  </div>
</section>
)
}

export default VideoPlay