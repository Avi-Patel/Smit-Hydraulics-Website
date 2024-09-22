import { ReactNode, Children, useState, useMemo, useCallback } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { IconButton } from "@sprinklrjs/spaceweb/button";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { usePage } from "./hooks/usePage";
import { useHover } from "../../hooks/useHover";

import { ClassName } from "@sprinklrjs/spaceweb/types";

export const Carousel = ({
  upfrontCount,
  children,
  gap = 16,
  className,
  controlsPlacement,
}: {
  upfrontCount: number;
  children: ReactNode;
  gap?: number;
  className?: ClassName;
  controlsPlacement: "vertical" | "horizontal";
}) => {
  const [widths, setWidths] = useState<number[] | undefined>(undefined);

  const items = Children.toArray(children);
  const totalPages = Math.ceil(items.length / upfrontCount);

  const { page, handleBack, handleForward } = usePage();
  const [leftButtonHandler, isLeftHovered] = useHover();
  const [rightButtonHandler, isRightHovered] = useHover();

  const xTranslate = useMemo(
    () =>
      widths
        ?.slice(0, page * upfrontCount)
        .reduce((acc, width) => acc + (width + gap), 0),
    [widths, page, upfrontCount, gap]
  );

  const currentItemWidths = useMemo(
    () => widths?.slice(page * upfrontCount, (page + 1) * upfrontCount),
    [page, upfrontCount, widths]
  );

  const currentItemsTotalWidth = useMemo(
    () => currentItemWidths?.reduce((acc, width) => acc + width, 0),
    [currentItemWidths]
  );

  const refFn = useCallback((el: HTMLElement | null) => {
    if (el) {
      setWidths(
        Array.from(el.children).map((_el) => _el.getBoundingClientRect().width)
      );
    }
  }, []);

  return (
    <Box
      className={[
        "flex w-full spr-ui-01 justify-center",
        controlsPlacement === "vertical" ? "flex-col items-center gap-2" : "",
        { height: "50rem" },
        className,
      ]}
    >
      {controlsPlacement === "horizontal" ? (
        <Box
          className={[
            "flex-1 h-full flex items-center justify-center",
            page === 0 ? "opacity-0" : "cursor-pointer opacity-100",
          ]}
          onClick={page === 0 ? undefined : handleBack}
          {...leftButtonHandler}
        >
          <FaChevronLeft
            style={{
              height: 20,
              width: 20,
              fill: isLeftHovered ? "#F1F1F1" : "rgba(255, 255, 255, 0.6)",
            }}
          />
        </Box>
      ) : null}
      <Box
        className={[
          "flex overflow-hidden",
          controlsPlacement === "horizontal" ? "my-3" : "",
          {
            width: `${
              (currentItemsTotalWidth ?? 0) +
              gap * ((currentItemWidths?.length ?? upfrontCount) - 1)
            }px`,
            transition: "width 0.3s",
          },
        ]}
      >
        <Box
          ref={refFn}
          className={[
            "flex",
            {
              gap: `${gap}px`,
              transform: `translateX(-${xTranslate}px)`,
              transition: "transform 0.5s ease-in-out",
            },
          ]}
        >
          {children}
        </Box>
      </Box>
      {controlsPlacement === "vertical" ? (
        <Box className="flex gap-4">
          <IconButton
            onClick={handleBack}
            size="sm"
            tooltipContent="Back"
            disabled={page === 0}
          >
            <FaChevronLeft
              style={{
                height: 14,
                width: 14,
                fill: "#AEAEB2",
              }}
            />
          </IconButton>
          <IconButton
            onClick={handleForward}
            size="sm"
            tooltipContent="Forward"
            disabled={page === totalPages - 1}
          >
            <FaChevronRight
              style={{
                height: 14,
                width: 14,
                fill: "#AEAEB2",
              }}
            />
          </IconButton>
        </Box>
      ) : null}
      {controlsPlacement === "horizontal" ? (
        <Box
          className={[
            "flex-1 h-full flex items-center justify-center",
            page === totalPages - 1
              ? "opacity-0"
              : "cursor-pointer opacity-100",
          ]}
          onClick={page === totalPages - 1 ? undefined : handleForward}
          {...rightButtonHandler}
        >
          <FaChevronRight
            style={{
              height: 20,
              width: 20,
              fill: isRightHovered ? "#F1F1F1" : "rgba(255, 255, 255, 0.6)",
            }}
          />
        </Box>
      ) : null}
    </Box>
  );
};
