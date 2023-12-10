import Image from "next/image";

import { Layout } from "../../components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";

import { CUSTOMER_NAMES } from "@/constants/customerNames";

const Products = () => {
  return (
    <Layout title="Products">
      <Box className="flex-1 flex flex-col items-center p-10 gap-24">
        <Typography variant="h2" weight="bold">
          Our Valuable Customers
        </Typography>

        <Box className="flex flex-wrap items-center justify-center gap-24 px-24">
          {CUSTOMER_NAMES.map((customerName) => (
            <Image
              key={customerName}
              src={`/companySymbols/${customerName}.png`}
              alt="company-logo"
              height={150}
              width={200}
            />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Products;
