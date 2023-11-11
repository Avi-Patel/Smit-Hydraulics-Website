import { ReactNode, Children, useState, useMemo, useCallback } from "react";

import { ThemeProvider } from "@sprinklrjs/spaceweb/theme";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import ChevronLeftIcon from "@sprinklrjs/spaceweb-icons/solid/ChevronLeft";
import ChevronRightIcon from "@sprinklrjs/spaceweb-icons/solid/ChevronRight";

import hyperspaceDark from "@sprinklrjs/spaceweb-themes/hyperspace/dark";

import { usePage } from "./hooks/usePage";
import { useHover } from "@/hooks/useHover";

export const Carousel = ({
  upfrontCount,
  children,
  gap = 16,
}: {
  upfrontCount: number;
  children: ReactNode;
  gap?: number;
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
    <ThemeProvider theme={hyperspaceDark}>
      <Box
        className={[
          "flex w-full spr-ui-01 justify-center",
          { height: "50rem" },
        ]}
      >
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
        <Box
          className={[
            "flex my-3 overflow-hidden",
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
      </Box>
    </ThemeProvider>
  );
};
