import connectDB from '@/lib/connectDB'
import PropertyItem from '@/models/PropertyItem'
import { NextRequest, NextResponse } from 'next/server'
import QueryString from 'qs'


export async function GET(req: NextRequest) {
  await connectDB()
  try {
    // Parse query parameters using qs library
    const searchQuery = req.url?.split('?')[1] as string
    const queryParams = QueryString.parse(searchQuery, {
      ignoreQueryPrefix: true,
    }) as {
      [key: string]: string | string[] | undefined
    }

    // Convert numeric parameters to numbers
    let parsedPage = 1
    let parsedLimit = 20

    if (queryParams.page && !Array.isArray(queryParams.page)) {
      parsedPage = parseInt(queryParams.page, 10)
    }

    if (queryParams.limit && !Array.isArray(queryParams.limit)) {
      parsedLimit = parseInt(queryParams.limit, 10)
    }

    // Build the filter object based on query parameters
    const filters: any = {}

    if (queryParams.purpose) {
      filters['purpose.purpose.id'] = queryParams.purpose
    }

    if (queryParams.status) {
      filters.status = queryParams.status
    }

    if (queryParams.location) {
      filters['address.location'] = Array.isArray(queryParams.location)
        ? { $in: queryParams.location }
        : queryParams.location
    }

    if (queryParams.type) {
      filters['type.id'] = queryParams.type
    }

    if (queryParams.subType) {
      filters['subType.id'] = queryParams.subType
    }

    if (queryParams.bed) {
      filters.bed = Array.isArray(queryParams.bed)
        ? { $in: queryParams.bed.map(Number) }
        : Number(queryParams.bed)
    }

    if (queryParams.bath) {
      filters.bath = Array.isArray(queryParams.bath)
        ? { $in: queryParams.bath.map(Number) }
        : Number(queryParams.bath)
    }

    if (queryParams.priceMin && queryParams.priceMax) {
      filters.price = {
        $gte: Number(queryParams.priceMin),
        $lte: Number(queryParams.priceMax),
      }
    }

    if (queryParams.areaMin && queryParams.areaMax) {
      filters.size = {
        $gte: Number(queryParams.areaMin),
        $lte: Number(queryParams.areaMax),
      }
    }

    if (queryParams.keyword) {
      filters.keywords = Array.isArray(queryParams.keyword)
        ? { $in: queryParams.keyword }
        : queryParams.keyword
    }

    if (queryParams.tour === 'video') {
      filters.video = { $ne: null }
    }

    // Remove undefined or null filters
    Object.keys(filters).forEach((key) => {
      if (filters[key] === undefined || filters[key] === null) {
        delete filters[key]
      }
    })

    console.log('Filters:', filters)

    // Execute the query using Mongoose
    const properties = await PropertyItem.find(filters)
      .skip((parsedPage - 1) * parsedLimit)
      .limit(parsedLimit)
      .exec()

    console.log('Properties:', properties)

    // Count total documents matching the query (for pagination)
    const totalProperties = await PropertyItem.countDocuments(filters)

    // Send the response
    return NextResponse.json({
      success: true,
      message: '',
      page: parsedPage,
      limit: parsedLimit,
      count: totalProperties,
      results: properties,
    })
  } catch (error) {
    console.log('Error fetching properties:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch properties',
    })
  }
}
