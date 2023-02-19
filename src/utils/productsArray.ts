type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        capacity: '256',
        type: 'phone',
        price: 1500,
        image: '/images/iphone-black.jpg',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        capacity: '128',
        type: 'phone',
        price: 1000,
        image: '/images/iphone-blue.jpg',
    },
    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X',
        capacity: '256',
        type: 'phone',
        price: 500,
        image: '/images/iphone-purple.jpg',
    },
    {
        id: 4,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        capacity: '256',
        type: 'phone',
        price: 1500,
        image: '/images/iphone-green.jpg',
    },
    {
        id: 5,
        title: 'iPhone 14 Pro Max',
        description:'This is iPhone 14 Pro Max',
        capacity: '512',
        type:'phone',
        price: 2000,
        image: '/images/iphone-silver.jpg',
    },
    {
        id: 6,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        capacity: '64',
        type: 'phone',
        price: 500,
        image: '/images/iphone-gold.jpg',
    },
]

export default productsArray