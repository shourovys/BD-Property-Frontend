'use client'

import Modal from '@/components/HOC/Modal'
import useAuth from '@/hooks/useAuth'
import { SITE_PAGES } from '@/utils/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import AddPropertyModal from './AddPropertyModal'

const AddPropertyButton = () => {
  const pathName = usePathname()
  const { isAuthenticated } = useAuth()

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {isAuthenticated ? (
        <button
          onClick={() => setOpenModal(true)}
          className='custom_transition rounded-md bg-salmon px-6 py-2 text-base font-medium hover:bg-white hover:text-salmon md:px-8 md:py-3 md:text-lg'
        >
          Get Started
        </button>
      ) : (
        <Link
          href={SITE_PAGES.loginPageWithPrevious(pathName)}
          className='custom_transition rounded-md bg-salmon px-6 py-2 text-base font-medium hover:bg-white hover:text-salmon md:px-8 md:py-3 md:text-lg'
        >
          Get Started
        </Link>
      )}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <AddPropertyModal setOpenModal={setOpenModal} />
      </Modal>
    </>
  )
}

export default AddPropertyButton
