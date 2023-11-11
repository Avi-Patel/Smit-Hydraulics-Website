import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Link } from "@sprinklrjs/spaceweb/link";

import { NAV_ITEMS } from "../../constants";

export const Navigation = () => (
  <Box className="flex items-center">
    {NAV_ITEMS.map((item) => (
      <Link
        href={`/${item.id}`}
        key={item.id}
        className="spr-text-02 hover:spr-text-01 hover:no-underline typography-bs1 font-600 px-4 py-1"
      >
        {item.label}
      </Link>
    ))}
  </Box>
);
