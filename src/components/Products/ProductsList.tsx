import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of Products
            </Typography>

            <Grid container direction="row" alignItems="stretch" spacing={4}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        capacity,
                        type,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                title={title}
                                description={description}
                                capacity={capacity}
                                type={type}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
