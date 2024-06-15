import { CloseIcon } from '@/utils/icon'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share'
import React from 'react'

interface IProps {
  url: string
  title: string
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ShareModal: React.FC<IProps> = ({ url, title, setOpenModal }) => {
  return (
    <div className='relative w-full max-w-xs space-y-2 rounded-lg bg-white p-4 text-center shadow-md md:space-y-4 md:p-6 md:pt-3 md:pt-4'>
      <CloseIcon
        className='absolute right-4 top-4 cursor-pointer text-xl text-gray-500 hover:text-gray-700'
        onClick={() => setOpenModal(false)}
      />
      <h1 className='text-center text-xl'>Share This Property</h1>
      <div className='flex items-center justify-center gap-2 md:gap-4'>
        <FacebookShareButton
          url={url}
          quote={title}
          className='cursor-pointer text-blue-500 hover:text-blue-700'
        >
          <FacebookIcon size={42} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={url}
          title={title}
          className='cursor-pointer text-blue-500 hover:text-blue-700'
        >
          <TwitterIcon size={42} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={url}
          title={title}
          className='cursor-pointer text-blue-500 hover:text-blue-700'
        >
          <LinkedinIcon size={42} round />
        </LinkedinShareButton>

        <EmailShareButton
          url={url}
          subject={title}
          body={`Check out this link: ${url}`}
          className='cursor-pointer text-blue-500 hover:text-blue-700'
        >
          <EmailIcon size={42} round />
        </EmailShareButton>
      </div>
    </div>
  )
}

export default ShareModal
