'use client'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

const extractYouTubeVideoId = (url: string): string | null => {
  // Extract video ID from the URL
  const videoIdMatch = url.match(
    // eslint-disable-next-line no-useless-escape
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )

  if (videoIdMatch && videoIdMatch[1]) {
    return videoIdMatch[1]
  } else {
    console.error('Invalid YouTube URL')
    return null
  }
}

interface IYtVideoPlayerProps {
  videosUrl: string
  controllers?: boolean
  onLoad?: () => void // Callback for video load event
}

const YtVideoPlayer: React.FC<IYtVideoPlayerProps> = ({
  videosUrl,
  controllers,
  onLoad,
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    // You can set iframeLoaded to true immediately upon component mounting
    setIframeLoaded(true)
  }, [])

  const handleIframeLoad = () => {
    // This callback is still useful in case you need to perform actions on iframe load
    if (onLoad) {
      onLoad()
    }
  }

  // const videoId = extractYouTubeVideoId(videosUrl)

  return (
    <div className='relative aspect-video'>
      <div
        className={classNames(
          'custom_transition transition-opacity',
          iframeLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videosUrl}?controls=${
            controllers ? 1 : 0
          }`}
          title='YouTube video player'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          className='absolute left-0 top-0 h-full w-full rounded-lg'
          onLoad={handleIframeLoad}
          allowFullScreen
        ></iframe>
      </div>
      {!iframeLoaded && <YtVideoPlayerLoader />}
    </div>
  )
}

export default YtVideoPlayer

interface IYtVideoPlayerLoaderProps {
  className?: string
}

export const YtVideoPlayerLoader: React.FC<IYtVideoPlayerLoaderProps> = ({
  className,
}) => (
  <div
    className={classNames(
      'custom_transition relative animate-pulse overflow-hidden rounded-md opacity-100 transition-opacity',
      className
    )}
  >
    <div className='aspect-video h-full w-full bg-lightgray-200'></div>
  </div>
)
