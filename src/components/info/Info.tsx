import { ReactElement } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { BaseButton } from "@sprinklrjs/spaceweb/base-button";
import { StatefulTooltip } from "@sprinklrjs/spaceweb/tooltip";
import SprinklrVoiceClrIcon from "@sprinklrjs/spaceweb-icons/brand/SprinklrVoiceClr";
import EmailCircleClrIcon from "@sprinklrjs/spaceweb-icons/brand/EmailCircleClr";

export const Info = (): ReactElement => (
  <Box className="flex items-center gap-3">
    <StatefulTooltip content="info.smithydraulics@gmail.com">
      <a
        href="mailto:info.smithydraulics@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BaseButton className="flex items-center gap-1">
          <EmailCircleClrIcon size={18} />
        </BaseButton>
      </a>
    </StatefulTooltip>
    <Box className="flex items-center gap-1">
      <SprinklrVoiceClrIcon size={14} />
      <Typography variant="bs2" weight="semibold" className="spr-text-01">
        +91 9909231361
      </Typography>
    </Box>
  </Box>
);
