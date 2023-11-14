import { Layout } from "../../components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Table } from "@/components/table";
import VerifiedIcon from "@sprinklrjs/spaceweb-icons/solid/Verified";
import UsersIcon from "@sprinklrjs/spaceweb-icons/solid/Users";

import {
  basicInformation,
  infrastructure,
  statutoryProfile,
  paymentShipping,
} from "@/constants/basicInformation";

const Products = () => {
  return (
    <Layout title="Products">
      <Box className="flex-1 flex flex-col p-4 gap-10">
        <Box className="flex flex-col rounded-8 gap-4 p-10 spr-shadow-02">
          <Typography variant="h3" weight="bold">
            Profile
          </Typography>
          <Typography variant="bs1" weight="medium">
            Established in the year 2002, we, “Smit Hydraulics”, are among the
            leading manufacturers, suppliers and exporters of a wide range of
            Horizontal Crimping Machine, Hose Crimping Machine, Hydraulic Pipe
            Crimping Machine, Hose Marking Machine, Roll Marking Machine. We
            enjoy a remarkable reputation in the industry for being highly
            committed towards our customers. The products we produce are
            characterized by quality and effectiveness.
          </Typography>
          <Typography variant="bs1" weight="medium">
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
          <Typography variant="bs1" weight="medium">
            Our team of highly experienced and trained professionals works
            consistently and enthusiastically in order to enhance the quality of
            our products and services. Under the visionary guidance of &quot;Mr.
            Vasant Patel&quot; (CEO), we have achieved phenomenal success. We
            are well known for our ethical business practices and hope to expand
            our horizons in the coming years.
          </Typography>
        </Box>
        <Box className="flex items-stretch gap-4">
          <Box className="flex-1">
            <Table title="Basic Information" data={basicInformation} />
          </Box>
          <Box className="flex-1 flex flex-col gap-4">
            <Box className="flex items-start gap-4">
              <Table title="Infrastructure" data={infrastructure} />
              <Table title="Statutory Profile" data={statutoryProfile} />
            </Box>
            <Box className="flex-1">
              <Table
                title="Packaging/Payment and Shipment Details"
                data={paymentShipping}
              />
            </Box>
          </Box>
        </Box>

        <Box className="flex items-stretch gap-10 p-10">
          <Box className="w-16/24 rounded-8 px-6 py-8 spr-shadow-02">
            <Box className="flex items-center gap-3">
              <VerifiedIcon
                size={24}
                className={[({ theme }) => ({ fill: theme.spr.clrGreen })]}
              />
              <Typography variant="h3" weight="bold">
                Our Quality Assurance
              </Typography>
            </Box>
            <Typography variant="bs1" weight="medium" className="mt-6">
              We being one of the leading manufacturers and traders believe that
              quality is our priority and thus we never compromise upon it. Our
              organization is strongly committed and dedicated to offer quality
              from designing of products to various manufacturing process, which
              continues through the system commissioning. For the maintenance of
              superior quality, continuous quality auditing is carried out by a
              team of qualified quality analysts. Our professionals make use of
              latest measuring and testing devices, which are approved by
              relevant organizations.
            </Typography>
            <Typography variant="bs1" weight="medium" className="mt-3">
              Henceforth, it is ensured that our entire range of hydraulic
              equipments and machines are class apart in the following
              parameters:
            </Typography>

            <Box className="flex items-center mt-10 gap-4">
              {[
                "Resistance to corrosion",
                "Durability",
                "Abrasion resistance",
                "Finish",
                "Designs",
              ].map((feature) => (
                <Box key={feature} className="rounded-8 px-2 py-1 spr-ui-05">
                  <Typography variant="bs1" weight="medium">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="flex-1 rounded-8 px-6 py-8 spr-shadow-02">
            <Box className="flex items-center gap-3">
              <UsersIcon
                size={24}
                className={[({ theme }) => ({ fill: theme.spr.clrGreen })]}
              />
              <Typography variant="h3" weight="bold">
                Customer Satisfaction Guarantee
              </Typography>
            </Box>
            <Typography variant="bs1" weight="medium" className="mt-6">
              We being one of the leading manufacturers and traders believe that
              quality is our priority and thus we never compromise upon it. Our
              organization is strongly committed and dedicated to offer quality
              from designing of products to various manufacturing process, which
              continues through the system commissioning. For the maintenance of
              superior quality, continuous quality auditing is carried out by a
              team of qualified quality analysts. Our professionals make use of
              latest measuring and testing devices, which are approved by
              relevant organizations.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Products;
