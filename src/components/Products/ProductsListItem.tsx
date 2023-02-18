import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
    color: string
    show: boolean
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
        show: false,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = (num: number) => {
        this.setState((prevState) => ({
            count: prevState.count - num,
        }))
    }

    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }

    toggleShow = () => {
        this.setState((prevState) => ({
            show: !prevState.show,
        }))
    }

    render() {
        const { title, description, capacity, type, price, image } = this.props
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-description">{description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <p>
                        Color:{' '}
                        <span className={this.state.color}>
                            {this.state.color}
                        </span>
                    </p>
                    <button onClick={this.changeColor}>Change color</button>
                    <hr />
                    {this.state.show && (
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Doloribus architecto, animi perferendis quidem
                            aspernatur at, harum voluptatum blanditiis molestiae
                            labore tenetur sequi. Totam distinctio itaque
                            deserunt maxime. Voluptate, vel neque!
                        </p>
                    )}

                    <button onClick={this.toggleShow}>
                        Show full description
                    </button>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick(2)}
                            disabled={this.state.count <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                            disabled={this.state.count >= 10}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
