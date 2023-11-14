import { useState, useCallback } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Image } from "@sprinklrjs/spaceweb/image";
import { Carousel } from "../../carousel";
import { ImageModal } from "./imageModal";
import ProductCircleIcon from "@sprinklrjs/spaceweb-icons/solid/ProductCircle";

import { StyleFn } from "@sprinklrjs/spaceweb/types";

export const IMAGE_OVERRIDES = {
  Image: {
    style: [
      (({ getStyle }) =>
        getStyle(["h-full object-contain w-auto max-w-full"])) as StyleFn,
      { borderRadius: "8px", maxHeight: "47.6rem" },
    ],
  },
  Root: {
    props: {
      className: (({ getStyle }) =>
        getStyle(["h-full", { borderRadius: "inherit" }])) as StyleFn,
    },
  },
};

export const ProductImage = ({ imageUrl }: { imageUrl: string }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const toggleImageClick = useCallback(
    () => setIsImageModalOpen((prev) => !prev),
    []
  );

  return (
    <>
      <Box
        onClick={toggleImageClick}
        className={[
          "w-full flex justify-center items-center cursor-pointer",
          {
            height: "47.6rem",
            minWidth: "30rem",
          },
        ]}
      >
        <Image src={imageUrl} alt="image" overrides={IMAGE_OVERRIDES} />
      </Box>
      <ImageModal
        isOpen={isImageModalOpen}
        imageUrl={imageUrl}
        onClose={toggleImageClick}
      />
    </>
  );
};
