type Props = {
    productsInCart: {
        [id: number]: number
    }
}

function CartHeader({ productsInCart }: Props) {
    console.log(Object.keys(productsInCart))
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId}: {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
