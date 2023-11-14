import { Layout } from "../components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Link } from "@sprinklrjs/spaceweb/link";
import { Carousel } from "../components/carousel";
import { HomeProductImage } from "../components/HomeProductImage";
import { ThemeProvider } from "@sprinklrjs/spaceweb/theme";

import hyperspaceDark from "@sprinklrjs/spaceweb-themes/hyperspace/dark";

import { PRODUCTS } from "../constants/products";
import { TABS } from "../components/header/constants";

export default function Home() {
  return (
    <Layout title="Smit Hydraulics">
      <Box className="flex flex-col">
        <ThemeProvider theme={hyperspaceDark}>
          <Carousel gap={16} upfrontCount={5} controlsPlacement="horizontal">
            {PRODUCTS.map((i) => (
              <HomeProductImage key={i.id} item={i} />
            ))}
          </Carousel>
        </ThemeProvider>

        <Box className={["flex flex-col gap-4 py-8 px-16 opacity-80"]}>
          <Typography variant="h1">Who we are?</Typography>
          <Typography variant="h4">
            Established in the year 2002, we, “Smit Hydraulics”, are among the
            leading manufacturers, suppliers and exporters of a wide range of
            Horizontal Crimping Machine, Hose Crimping Machine, Hydraulic Pipe
            Crimping Machine, Hose Marking Machine, Roll Marking Machine. We
            enjoy a remarkable reputation in the industry for being highly
            committed towards our customers. The products we produce are
            characterized by quality and effectiveness.{" "}
          </Typography>
          <Typography variant="h4">
            Our products have to go through a number of quality checks before
            qualifying for sale to the customers. They consume less power
            thereby increasing the efficiency and decreasing the operating cost.
            Available in an array of designs and finishes, all our machines are
            resistant to corrosion. With our manufacturing unit sprawling over a
            large area, we produce technically advanced hydraulic machines and
            control systems. We also export our products to different parts of
            the world, some of the countries where we export our products are
            Dubai, Australia, South Africa, Middle East. These are designed to
            make our work easier and faster. We have dedicated ourselves in
            delivering the best machines. We have gained technical excellence in
            manufacturing premium quality products which are in compliance to
            the international standards.
          </Typography>
          <Typography variant="h4">
            Our team of highly experienced and trained professionals works
            consistently and enthusiastically in order to enhance the quality of
            our products and services. Under the visionary guidance of &quot;Mr.
            Vasant Patel&quot; (CEO), we have achieved phenomenal success. We
            are well known for our ethical business practices and hope to expand
            our horizons in the coming years.
          </Typography>
          <Link href={`/${TABS.ABOUT_US}`}>More About Us</Link>
        </Box>
      </Box>
    </Layout>
  );
}
