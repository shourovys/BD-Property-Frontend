import { Document, model, models, Schema } from 'mongoose'

// TypeScript interface
export interface IPropertyItem extends Document {
  id: string
  referenceNo: string
  title: string
  size: number
  price: number
  video: string
  bed: number
  bath: number
  floorPlans?: string
  description: string
  status: string
  keywords: string[]
  user: {
    id: string
    name: string
    email: string
  }
  features?: {
    id: number
    name: string
  }[]
  purpose: {
    purpose: {
      id: string
      name: string
    }
    subPurpose: {
      id: string
      name: string
    } | null
  }
  type: {
    id: string
    name: string
  }
  subType: {
    id: string
    name: string
  }
  address: {
    id: number
    city: string
    location: string
    coordinates: string | null
  }
  images?: { id: number; image: string }[]
}

// Mongoose schema
const PropertyItemSchema = new Schema<IPropertyItem>(
  {
    id: { type: String, required: true },
    referenceNo: { type: String, required: true },
    title: { type: String, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
    video: { type: String, required: true },
    bed: { type: Number, required: true },
    bath: { type: Number, required: true },
    floorPlans: { type: String },
    description: { type: String, required: true },
    status: { type: String, required: true },
    keywords: [{ type: String, required: true }],
    user: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    features:
      [
        {
          id: { type: Number, required: true },
          name: { type: String, required: true },
        },
      ] || null,
    purpose: {
      purpose: {
        id: { type: String, required: true },
        name: { type: String, required: true },
      },
      subPurpose: {
        id: { type: String },
        name: { type: String },
      },
    },
    type: {
      id: { type: String, required: true },
      name: { type: String, required: true },
    },
    subType: {
      id: { type: String, required: true },
      name: { type: String, required: true },
    },
    address: {
      id: { type: Number, required: true },
      city: { type: String, required: true },
      location: { type: String, required: true },
      coordinates: { type: String },
    },
    images: [
      {
        id: { type: Number, required: true },
        image: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
)

// Define and export the model
const PropertyItem =
  models.PropertyItem ||
  model<IPropertyItem>('PropertyItem', PropertyItemSchema)

export default PropertyItem
