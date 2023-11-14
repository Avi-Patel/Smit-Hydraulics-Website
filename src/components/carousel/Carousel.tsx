import { ReactNode, Children, useState, useMemo, useCallback } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { IconButton } from "@sprinklrjs/spaceweb/button";
import ChevronLeftIcon from "@sprinklrjs/spaceweb-icons/solid/ChevronLeft";
import ChevronRightIcon from "@sprinklrjs/spaceweb-icons/solid/ChevronRight";

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
  const totalPages = items.length / upfrontCount;

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
            page === 0 ? "cursor-not-allowed" : "cursor-pointer",
          ]}
          onClick={handleBack}
          {...leftButtonHandler}
        >
          <ChevronLeftIcon
            size={20}
            className={isLeftHovered ? "spr-icon-01" : "spr-icon-06"}
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
            <ChevronLeftIcon className="spr-icon-02" />
          </IconButton>
          <IconButton
            onClick={handleForward}
            size="sm"
            tooltipContent="Forward"
            disabled={page === totalPages - 1}
          >
            <ChevronRightIcon className="spr-icon-02" />
          </IconButton>
        </Box>
      ) : null}
      {controlsPlacement === "horizontal" ? (
        <Box
          className={[
            "flex-1 h-full flex items-center justify-center",
            page === totalPages - 1 ? "cursor-not-allowed" : "cursor-pointer",
          ]}
          onClick={handleForward}
          {...rightButtonHandler}
        >
          <ChevronRightIcon
            size={20}
            className={isRightHovered ? "spr-icon-01" : "spr-icon-06"}
          />
        </Box>
      ) : null}
    </Box>
  );
};
