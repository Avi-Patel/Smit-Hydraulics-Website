import Link from "next/link";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";

import { NAV_ITEMS } from "../../constants";

export const Navigation = () => (
  <Box className="flex items-center">
    {NAV_ITEMS.map((item) => (
      <Link
        href={`/${item.id}`}
        key={item.id}
        style={{ textDecorationLine: "none" }}
      >
        <Typography
          variant="bs1"
          weight="semibold"
          className="px-4 py-1 spr-text-02 hover:spr-text-01 hover:no-underline"
        >
          {item.label}
        </Typography>
      </Link>
    ))}
  </Box>
);
