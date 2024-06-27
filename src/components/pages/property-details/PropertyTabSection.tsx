'use client'
import Modal from '@/components/HOC/Modal'
import CardActions from '@/components/common/ActionCard'
import PopularSearches from '@/components/common/PopularSearches'
import PropertyRecommendedList from '@/components/common/PropertyRecommendedList'
import PropertyDetailsBlog from '@/components/pages/property-details/PropertyDetailsBlog'
import PropertyDetailsInfo from '@/components/pages/property-details/PropertyDetailsInfo'
import PropertyDetailsMortgage from '@/components/pages/property-details/PropertyDetailsMortgage'
import PropertyDetailsPropertyFeatures from '@/components/pages/property-details/PropertyDetailsPropertyFeatures'
import PropertyDetailsTabs from '@/components/pages/property-details/PropertyDetailsTab'
import useIsComponentScrolledOut from '@/hooks/useIsComponentScrolledOut'
import { IListPropertyResponse, IPropertyDetails } from '@/types/pages/property'
import { useRef, useState } from 'react'
import PropertyCallCard from '../propertyList/PropertyCallCard'
import PropertyEmailCard from '../propertyList/PropertyEmailCard'
import PropertyDetailsFloorPlan from './PropertyDetailsFloorPlan'
import PropertyDetailsTrends from './PropertyDetailsTrends'

interface IProps {
  data: IPropertyDetails
  recommendedProperty: IListPropertyResponse[]
}

const PropertyTabSection: React.FC<IProps> = ({
  data,
  recommendedProperty,
}) => {
  const componentRef = useRef(null)
  const isComponentScrolledOut = useIsComponentScrolledOut(componentRef)

  const [openCallModal, setOpenCallModal] = useState(false)
  const [openEmailModal, setOpenEmailModal] = useState(false)

  const handleEmailModal = () => setOpenEmailModal((prev) => !prev)
  const handleCallModal = () => setOpenCallModal((prev) => !prev)
  return (
    <>
      <PropertyDetailsTabs
        data={data}
        recommendedPresent={!!recommendedProperty.length}
        isComponentScrolledOut={isComponentScrolledOut}
        handleOpenEmailModal={handleEmailModal}
        handleOpenCallModal={handleCallModal}
      />
      <div className='custom_screen_width py-6'>
        <div className='grid gap-6 lg:grid-cols-4'>
          <div className='lg:col-span-3'>
            <div ref={componentRef}>
              <PropertyDetailsInfo
                data={data}
                isComponentScrolledOut={isComponentScrolledOut}
                handleOpenEmailModal={handleEmailModal}
                handleOpenCallModal={handleCallModal}
              />
            </div>
            <div className=''>
              <PropertyDetailsBlog data={data} />
              {/* <PropertyDetailsPropertyInfo data={data} /> */}
              {data.features?.length && (
                <PropertyDetailsPropertyFeatures features={data.features} />
              )}
              <PropertyDetailsTrends />
              {data?.floorPlans && (
                <PropertyDetailsFloorPlan floorPlans={data?.floorPlans} />
              )}
              {data?.purpose.purpose.id === 'buy' && (
                <PropertyDetailsMortgage propertyPrice={data.price} />
              )}
            </div>
          </div>

          <div className='col-span-1 hidden space-y-8 lg:block'>
            <CardActions
              handleOpenEmailModal={handleEmailModal}
              handleOpenCallModal={handleCallModal}
            />
            <PopularSearches />
          </div>
        </div>
        {!!recommendedProperty.length && (
          <PropertyRecommendedList recommendedProperty={recommendedProperty} />
        )}
      </div>

      <Modal openModal={openCallModal} setOpenModal={setOpenCallModal}>
        <PropertyCallCard
          handleClose={handleCallModal}
          reference={data.referenceNo}
        />
      </Modal>
      <Modal openModal={openEmailModal} setOpenModal={setOpenEmailModal}>
        <PropertyEmailCard
          handleClose={handleEmailModal}
          reference={data.referenceNo}
        />
      </Modal>
    </>
  )
}

export default PropertyTabSection
