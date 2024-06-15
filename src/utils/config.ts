// reserve site page
export const SITE_PAGES = {
  loginPageWithPrevious: (previousRoute: string) =>
    `/login/?previousRoute=${previousRoute}`,
  propertyListPage: (query?: string) => `/property/?${query}`,
  propertyPage: (propertyId: string) => `/property/${propertyId}`,
  interiorPage: '/services/interior',
  legalPage: '/services/legal',
  blogPage: '/blogs',
  blogDetailsPage: (blogId: string) => `/blogs/${blogId}`,
  guideline: '/guideline/real-estate-solutions',
  buyGuideline: '/guideline/real-estate-solutions/buy',
  sellGuideline: '/guideline/real-estate-solutions/sell',
}

// input
export const INPUT_FIELD_HEIGHT = '33.6px'
export const TEXTAREA_FIELD_HEIGHT = '132.6px'

// error
export const ERROR_CLASS = 'input_error'

// Local Storage
export const LOCAL_STORAGE_KEY = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  userId: 'userId',
}

// server urls
const API_URL = process.env.NEXT_PUBLIC_API_URL || ''
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || ''

export { API_URL, IMAGE_URL }
