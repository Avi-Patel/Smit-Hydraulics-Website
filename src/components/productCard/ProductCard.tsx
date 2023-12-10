import { useState, useCallback } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Button } from "@sprinklrjs/spaceweb/button";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Carousel } from "../carousel";
import { ProductImage } from "./components/ProductImage";
import { ImageModal } from "./components/imageModal";
import { FaBagShopping } from "react-icons/fa6";

import { Product } from "../../types";
import { StyleFn } from "@sprinklrjs/spaceweb/types";

export const IMAGE_OVERRIDES = {
  Image: {
    style: [
      (({ getStyle }) =>
        getStyle([
          "h-full object-contain w-auto max-w-full",
          { borderRadius: "inherit" },
        ])) as StyleFn,
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

export const ProductCard = ({ product }: { product: Product }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const toggleViewDetails = useCallback(
    () => setIsDetailModalOpen((prev) => !prev),
    []
  );

  return (
    <>
      <Box
        className={[
          "w-full spr-ui-02 spr-border-03 border-1 border-solid rounded-8 overflow-hidden mx-auto hover:spr-focus-01",
        ]}
      >
        <Carousel
          gap={0}
          upfrontCount={1}
          className={["px-1 w-full", { height: "52rem" }]}
          controlsPlacement="vertical"
        >
          {product.images.map((imageUrl, index) => (
            <ProductImage key={index} imageUrl={imageUrl} />
          ))}
        </Carousel>

        <Box className="rounded-8 mx-2 spr-ui-02 px-3 py-2 mt-2 gap-2 flex flex-col items-start">
          <Box className="w-full flex items-center gap-2 justify-between">
            <Box className="rounded-4 px-1 py-0.5 spr-ui-01 spr-border-03 border-1 border-solid">
              <Typography variant="bs3" weight="bold">
                {product.code}
              </Typography>
            </Box>
            <Box className="rounded-4 px-1 py-0.5 spr-clr-green">
              <Typography variant="bs3" weight="bold" className="spr-text-05">
                &#8377;{product.price}
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-start gap-2">
            <FaBagShopping
              style={{
                height: 16,
                width: 16,
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: "auto",
                marginTop: "2px",
              }}
            />
            <Typography
              variant="h4"
              weight="semibold"
              className="leading-tight"
            >
              {product.label}
            </Typography>
          </Box>
        </Box>

        <Button
          size="xs"
          className="mt-2 rounded-0 w-full"
          onClick={toggleViewDetails}
        >
          View Details
        </Button>
      </Box>
      <ImageModal
        isOpen={isDetailModalOpen}
        imageUrl={`/${product.id}.jpeg`}
        onClose={toggleViewDetails}
      />
    </>
  );
};
