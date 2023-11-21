import { Layout } from "../../components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Grid } from "@sprinklrjs/spaceweb/grid";
import { ProductCard } from "../../components/productCard";

import { PRODUCTS } from "../../constants/products";

const Products = () => {
  return (
    <Layout title="Products">
      <Box className="flex-1 flex flex-col p-10 gap-4">
        <Typography variant="h2" weight="bold">
          Products We Offer
        </Typography>
        <Typography
          variant="bs1"
          weight="semibold"
          className="spr-ui-02 rounded-8 px-4 py-2"
        >
          We “Smit Hydraulics” are engaged in manufacturing, supplying and
          exporting Crimping & Marking Machine. Over these years we have earned
          global recognition and are acclaimed for better understanding the
          requirements of our clients, we have a variety of schemes to choose
          from. Customer satisfaction is a key to success, therefore we aim at
          establishing cordial business relationship with all our clients.
        </Typography>
        <Grid
          gap={4}
          cols={4}
          xs={1}
          sm={2}
          md={2}
          lg={3}
          xl={4}
          // className="flex justify-between"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Products;
