import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { BaseButton } from "@sprinklrjs/spaceweb/base-button";
import { ThemeProvider } from "@sprinklrjs/spaceweb/theme";
import { StatefulTooltip } from "@sprinklrjs/spaceweb/tooltip";
import { Info } from "../info";
import TickCircleClrIcon from "@sprinklrjs/spaceweb-icons/solid/TickCircleClr";
import LocationIcon from "@sprinklrjs/spaceweb-icons/solid/Location";

import hyperspaceDark from "@sprinklrjs/spaceweb-themes/hyperspace/dark";

// import companyNameImage from ".";

export const Footer = (): ReactElement => (
  <ThemeProvider theme={hyperspaceDark}>
    <Box className="flex w-full px-3 py-4 spr-ui-01 gap-3">
      <Box className="flex items-center gap-2">
        <Image
          src="/companyName.png"
          alt="Smit Hydraulics"
          height={50}
          width={100}
          style={{ borderRadius: "6px" }}
        />
        <Box className="flex flex-col gap-1">
          <Typography variant="h5" weight="semibold" className="spr-text-01">
            &#169; Smit Hydraulics. All Rights Reserved
          </Typography>
          <Box className="flex items-center gap-1">
            <TickCircleClrIcon size={14} />
            <Typography variant="bs2" weight="semibold" className="spr-text-01">
              GST No.
            </Typography>
            <Typography variant="bs2" weight="semibold" className="spr-text-01">
              24BLIPP0955R1ZF
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="h-full w-px spr-ui-03" />
      <Box className="flex-1 flex items-center justify-end gap-3">
        <StatefulTooltip
          content={
            <Box className="flex flex-col">
              <Typography>Smit Hydraulics</Typography>
              <Typography>No. 53, Mahadev Estate, Part 3,</Typography>
              <Typography>
                Ramol Cross Road, CTM, Ahmedabad - 380026, Gujarat, India
              </Typography>
            </Box>
          }
        >
          <Link
            href="https://www.google.com/maps?q=22.99160500,72.64303800"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Box className="flex items-center">
              <LocationIcon size={18} className="mr-1" />
              <Typography
                variant="bs2"
                weight="semibold"
                className="spr-text-01"
              >
                Location
              </Typography>
            </Box>
          </Link>
        </StatefulTooltip>
        <Info />
      </Box>
    </Box>
  </ThemeProvider>
);
