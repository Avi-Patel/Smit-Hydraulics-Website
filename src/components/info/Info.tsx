import { ReactElement } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { BaseButton } from "@sprinklrjs/spaceweb/base-button";
import { StatefulTooltip } from "@sprinklrjs/spaceweb/tooltip";

import { IoIosCall } from "react-icons/io";
import { ImMail4 } from "react-icons/im";

export const Info = (): ReactElement => (
  <Box className="flex items-center gap-3">
    <StatefulTooltip content="info.smithydraulics@gmail.com">
      <a
        href="mailto:info.smithydraulics@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BaseButton className="flex items-center gap-1">
          <ImMail4
            style={{ height: 18, width: 18, fill: "rgb(64, 163, 245)" }}
          />
        </BaseButton>
      </a>
    </StatefulTooltip>
    <Box className="flex items-center gap-1">
      <IoIosCall style={{ height: 18, width: 18, fill: "rgb(93, 201, 78)" }} />
      <Typography variant="bs2" weight="semibold" className="spr-text-01">
        +91 9909231361
      </Typography>
    </Box>
  </Box>
);
