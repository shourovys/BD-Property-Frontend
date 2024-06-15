'use client'

import Modal from '@/components/HOC/Modal'
import { useState } from 'react'
import ApplyForInteriorServiceModal from './ApplyForInteriorServiceModal'

interface IProps {
  title: string
}

const InteriorServiceApplyButton: React.FC<IProps> = ({ title }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className='custom_transition cursor-pointer rounded-6xs bg-white px-8 py-3 font-ubuntu text-sm font-medium text-salmon hover:bg-salmon hover:text-white md:px-12 md:text-base '
      >
        Book Now
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <ApplyForInteriorServiceModal
          title={title}
          setOpenModal={setOpenModal}
        />
      </Modal>
    </>
  )
}

export default InteriorServiceApplyButton
