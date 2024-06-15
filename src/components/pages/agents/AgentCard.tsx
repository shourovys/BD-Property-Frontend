'use client'
import Modal from '@/components/HOC/Modal'
import useAuth from '@/hooks/useAuth'
import { IAgent } from '@/types/pages/agent'
import { IMAGE_URL, SITE_PAGES } from '@/utils/config'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import AgentContactModal from './AgentContactModal'

interface IProps {
  agent: IAgent
}

const AgentCard: React.FC<IProps> = ({ agent }) => {
  const pathName = usePathname()
  const { isAuthenticated } = useAuth()

  const [openContactModal, setOpenContactModal] = useState<boolean>(false)
  return (
    <>
      <div className='relative flex flex-col items-center space-y-2 rounded-6xs border border-lightgray-100 px-2 py-3 shadow-md'>
        <div className='relative h-32 w-32'>
          <Image
            className='aspect-square rounded-full border border-lightgray-100 object-cover'
            src={agent.user_img ? IMAGE_URL + agent.user_img : '/agent.png'}
            alt={agent.name}
            fill
          />
        </div>
        <h2 className='pt-2 text-xl font-medium'>{agent.name}</h2>

        {isAuthenticated ? (
          <button
            onClick={() => setOpenContactModal(true)}
            className='w-full rounded-6xs bg-darkslateblue-100 px-4 py-2 text-center text-white hover:bg-opacity-90'
          >
            Connect
          </button>
        ) : (
          <Link
            href={SITE_PAGES.loginPageWithPrevious(pathName)}
            className='w-full rounded-6xs bg-darkslateblue-100 px-4 py-2 text-center text-white hover:bg-opacity-90'
          >
            Connect
          </Link>
        )}
      </div>
      <Modal openModal={openContactModal} setOpenModal={setOpenContactModal}>
        <AgentContactModal
          setOpenModal={setOpenContactModal}
          agentId={agent.id}
        />
      </Modal>
    </>
  )
}

export default AgentCard
