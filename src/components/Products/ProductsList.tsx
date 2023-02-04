import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="h2" align="center">
                List of Products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        description="This is iPhone 14 Pro"
                        capacity="256"
                        type="phone"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 13 Pro"
                        description="This is iPhone 13 Pro"
                        capacity="128"
                        type="phone"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 12 Pro"
                        description="This is iPhone 12 Pro"
                        capacity="512"
                        type="phone"
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
