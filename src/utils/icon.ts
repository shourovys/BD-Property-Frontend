import { IconType } from 'react-icons'
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineMenu,
  AiOutlineRight,
} from 'react-icons/ai'
import {
  BiBuildingHouse,
  BiSearch,
  BiSolidFactory,
  BiSolidGridAlt,
} from 'react-icons/bi'
import { BsTwitterX } from 'react-icons/bs'
import {
  FaBath,
  FaBed,
  FaBuilding,
  FaCalculator,
  FaCalendarAlt,
  FaCamera,
  FaDoorOpen,
  FaHeart,
  FaHome,
  FaInstagram,
  FaList,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaMinus,
  FaMoneyBill,
  FaPlus,
  FaRegBuilding,
  FaYoutube,
} from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import { GrFormDown } from 'react-icons/gr'
import { ImOffice } from 'react-icons/im'
import {
  MdCall,
  MdEmail,
  MdFacebook,
  MdFavorite,
  MdFavoriteBorder,
  MdFilterList,
  MdLocationOn,
  MdOutlineApartment,
  MdOutlinePlayCircle,
  MdOutlineWarehouse,
  MdSms,
} from 'react-icons/md'
import { PiBuildingsFill, PiGridFour, PiShareFatFill } from 'react-icons/pi'
import { RiBuilding2Fill } from 'react-icons/ri'
import { SiEbox } from 'react-icons/si'

export const SearchIcon = BiSearch
export const DownArrowIcon = GrFormDown
export const RightArrowIcon = AiOutlineRight
export const FilterIcon = FiFilter
export const FilterListIcon = MdFilterList
export const ListIcon = FaList
export const GridIcon = BiSolidGridAlt
export const HomeIcon = AiOutlineHome
export const BedIcon = FaBed
export const BathIcon = FaBath
export const AreaIcon = PiGridFour
export const CallIcon = MdCall
export const EmailIcon = MdEmail
export const SmsIcon = MdSms
export const FavoriteIcon = MdFavoriteBorder
export const FavoriteFillIcon = MdFavorite
export const LocationIcon = MdLocationOn
export const PlayIcon = MdOutlinePlayCircle
export const CalendarIcon = FaCalendarAlt
export const ShareIcon = PiShareFatFill
export const HumbuggerIcon = AiOutlineMenu
export const CloseIcon = AiOutlineClose
export const LeftArrowIcon = AiOutlineLeft
export const BoldPlusIcon = FaPlus
export const BoldMinusIcon = FaMinus

//
export const newProjectIcon = FaBuilding

// Property Type Filter Options Icons
export const ApartmentIcon = MdOutlineApartment
export const PenthouseIcon = BiBuildingHouse
export const PlazaIcon = FaRegBuilding
export const PlotIcon = FaMapMarkedAlt
export const RoomIcon = FaDoorOpen
export const DuplexIcon = PiBuildingsFill
export const BuildingIcon = RiBuilding2Fill

export const OfficeIcon = ImOffice
export const FloorIcon = SiEbox
export const CameraIcon = FaCamera
export const WarehouseIcon = MdOutlineWarehouse
export const ShopIcon = RiBuilding2Fill
export const FactoryIcon = BiSolidFactory

// property details tab icons
export const Overview = FaHome
export const Feature = FaList
export const LoancalCulator = FaCalculator
export const LifeStyle = FaHeart
export const NearByLoc = FaMapMarkerAlt
export const Finance = FaMoneyBill

// Social icons
export const TwitterIcon = BsTwitterX
export const YoutubeIcon = FaYoutube
export const FacebookIcon = MdFacebook
export const InstagramIcon = FaInstagram

export type IIconType = IconType
