export interface InteriorService {
  id: number
  title: string
  background_img: string
  description: string
  contact_title: string
  contact_img: string
  contect_number: string
  contact_description: string
  interior_allservices: InteriorAllService[]
}

export interface InteriorAllService {
  id: number
  name: string
  image: string
  description: string
}

export interface PreviousWork {
  id: number
  created_at: string
  updated_at: string
  title: string
  image: string
  description: string
}

export interface InteriorData {
  interior_data: InteriorService
  previous_work_data: PreviousWork[]
}
