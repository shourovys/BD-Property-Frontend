# BD Property - Property Management Platform

A comprehensive property management platform for the Bangladesh real estate market. Features property listings with advanced search filters, user authentication, and responsive design.

## Live Demo

**Live Website:** [https://bd-properly.vercel.app](https://bd-properly.vercel.app)

**GitHub Repository:** [https://github.com/shourovys/bd-properly](https://github.com/shourovys/bd-properly)

---

## Key Features

- **Property Listings** - Browse extensive property listings with detailed information
- **Advanced Search & Filtering** - Search by location, price, property type, bedrooms, bathrooms, and more
- **User Authentication** - Secure JWT-based authentication for users
- **Property CRUD Operations** - Create, read, update, and delete property listings
- **Responsive Design** - Fully responsive design for all devices (mobile, tablet, desktop)
- **Property Details** - View detailed property information including images, floor plans, and amenities
- **Interior Services** - Browse and apply for interior design services
- **Legal Services** - Access legal services for property transactions
- **Agent Profiles** - View and contact real estate agents
- **Blog Section** - Read property-related articles and guides
- **Newsletter Subscription** - Stay updated with property news
- **Share Properties** - Share property listings via social media

---

## Technologies Used

### Frontend

- **Next.js 14** - App Router for modern React server components
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Hook Form** - Form handling and validation
- **Redux Toolkit** - State management
- **SWR** - Data fetching and caching
- **React Icons** - Icon library
- **React Slick** - Carousel/slider component
- **Swiper** - Modern mobile touch slider
- **Day.js** - Lightweight date handling
- **React Hot Toast** - Toast notifications

---

## Prerequisites

- Node.js 14.x or higher
- Yarn or npm package manager
 (Express- Backend API running.js + MongoDB)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/shourovys/bd-properly.git
cd bd-property-frontend
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_IMAGE_URL=http://localhost:5000
```

### 4. Start Development Server

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Building for Production

```bash
# Build the application
yarn build

# Start production server
yarn start
```

---

## Project Structure

```
bd-property-frontend/
├── public/
│   ├── data/               # Static JSON data
│   └── images/             # Static images
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── api/           # API routes
│   │   ├── property/      # Property pages
│   │   ├── services/      # Services pages
│   │   └── page.tsx      # Home page
│   ├── components/        # React components
│   │   ├── atomic/       # Basic UI components
│   │   ├── common/       # Shared components
│   │   ├── pages/        # Page-specific components
│   │   └── search/       # Search-related components
│   ├── api/              # API configuration and URLs
│   ├── store/            # Redux store configuration
│   └── styles/           # Global styles
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Related Projects

- [BD Property Backend](https://github.com/shourovys/bd-properly-backend) - Express.js backend API

---

## License

MIT License

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
=======
# BD Property - Property Management Platform

A comprehensive property management platform for the Bangladesh real estate market. Features property listings with advanced search filters, user authentication, and responsive design.

## Live Demo

**Live Website:** [https://bd-properly.vercel.app](https://bd-properly.vercel.app)

**GitHub Repository:** [https://github.com/shourovys/bd-properly](https://github.com/shourovys/bd-properly)

---

## Key Features

- **Property Listings** - Browse extensive property listings with detailed information
- **Advanced Search & Filtering** - Search by location, price, property type, bedrooms, bathrooms, and more
- **User Authentication** - Secure JWT-based authentication for users
- **Property CRUD Operations** - Create, read, update, and delete property listings
- **Responsive Design** - Fully responsive design for all devices (mobile, tablet, desktop)
- **Property Details** - View detailed property information including images, floor plans, and amenities
- **Interior Services** - Browse and apply for interior design services
- **Legal Services** - Access legal services for property transactions
- **Agent Profiles** - View and contact real estate agents
- **Blog Section** - Read property-related articles and guides
- **Newsletter Subscription** - Stay updated with property news
- **Share Properties** - Share property listings via social media

---

## Technologies Used

### Frontend

- **Next.js 14** - App Router for modern React server components
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Hook Form** - Form handling and validation
- **Redux Toolkit** - State management
- **SWR** - Data fetching and caching
- **React Icons** - Icon library
- **React Slick** - Carousel/slider component
- **Swiper** - Modern mobile touch slider
- **Day.js** - Lightweight date handling
- **React Hot Toast** - Toast notifications

---

## Prerequisites

- Node.js 14.x or higher
- Yarn or npm package manager
 (Express- Backend API running.js + MongoDB)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/shourovys/bd-properly.git
cd bd-property-frontend
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_IMAGE_URL=http://localhost:5000
```

### 4. Start Development Server

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Building for Production

```bash
# Build the application
yarn build

# Start production server
yarn start
```

---

## Project Structure

```
bd-property-frontend/
├── public/
│   ├── data/               # Static JSON data
│   └── images/             # Static images
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── api/           # API routes
│   │   ├── property/      # Property pages
│   │   ├── services/      # Services pages
│   │   └── page.tsx      # Home page
│   ├── components/        # React components
│   │   ├── atomic/       # Basic UI components
│   │   ├── common/       # Shared components
│   │   ├── pages/        # Page-specific components
│   │   └── search/       # Search-related components
│   ├── api/              # API configuration and URLs
│   ├── store/            # Redux store configuration
│   └── styles/           # Global styles
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Related Projects

- [BD Property Backend](https://github.com/shourovys/bd-properly-backend) - Express.js backend API

---

## License

MIT License

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
>>>>>>> ee9f24095ef15a6b45d402fc226a20162bb2e02b

