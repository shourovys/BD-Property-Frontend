export interface ILegalService {
  id: number
  title: string
  moto: string
  background_img: string
  description: string
  services_details: { [key: string]: string }
  legal_allservices: ILegalAllService[]
}

export interface ILegalAllService {
  id: number
  service_type: string
  service: string
}
