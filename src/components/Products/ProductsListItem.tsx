import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import { useState } from 'react'

type Props = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (count: number, price: number) => void
}

const ProductsListItem = ({
    id,
    title,
    description,
    capacity,
    type,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-price">{price}$</div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={() => onDecrement()}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        variant="outlined"
                        onClick={() => onIncrement()}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
