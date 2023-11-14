import { Link } from "@sprinklrjs/spaceweb/link";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";

import { useHover } from "../hooks/useHover";

import { Product } from "../types";

import { TABS } from "./header/constants";

export const HomeProductImage = ({ item }: { item: Product }) => {
  const [hoverHandlers, isHovering] = useHover();

  return (
    <Box
      className={[
        "rounded-8 overflow-hidden relative",
        {
          width: "30rem",
          height: "47.6rem",
        },
      ]}
      {...hoverHandlers}
    >
      <Image
        src={item.images[0]}
        alt={item.label}
        className="object-fill"
        height={476}
        width={300}
      />
      <Box
        className={[
          isHovering ? "h-16" : "h-0 overflow-hidden",
          "w-full flex items-center justify-center absolute bottom-0 spr-ui-03 opacity-70",
          {
            transition: "height 0.5s",
          },
        ]}
      >
        <Link
          href={`/${TABS.PRODUCTS}`}
          className="font-600 spr-text-01 text-center break-normal"
        >
          {item.label}
        </Link>
      </Box>
    </Box>
  );
};
