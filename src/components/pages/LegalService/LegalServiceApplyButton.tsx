'use client'

import Modal from '@/components/HOC/Modal'
import { ILegalAllService } from '@/types/pages/service'
import { useState } from 'react'
import ApplyForLegalServiceModal from './ApplyForLegalServiceModal'

interface IProps {
  allServices: ILegalAllService[]
}

const LegalServiceApplyButton: React.FC<IProps> = ({ allServices }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className='rounded-md bg-salmon px-6 py-2 text-sm font-medium md:text-base'
      >
        Apply for legal services
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <ApplyForLegalServiceModal
          setOpenModal={setOpenModal}
          allServices={allServices}
        />
      </Modal>
    </>
  )
}

export default LegalServiceApplyButton
