import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";

export const Table = ({
  title,
  data,
}: {
  title: string;
  data: { key: string; value: string }[];
}) => {
  return (
    <Box className="h-full w-full rounded-8 overflow-hidden flex flex-col">
      <Typography
        variant="h4"
        className="flex-none px-4 py-2 spr-ui-04 spr-text-05"
      >
        {title}
      </Typography>
      <Box className="flex-1 flex flex-col spr-border-03 border-solid border-1 border-t-0 rounded-b-8 overflow-hidden">
        {data.map((datum, index) => (
          <Box
            key={datum.key}
            className={[
              "flex-1 w-full flex items-center px-4 py-3",
              index % 2 === 0 ? "spr-ui-01" : "spr-ui-02",
            ]}
          >
            <Typography variant="bs1" weight="semibold" className="w-1/3">
              {datum.key}
            </Typography>
            <Typography variant="bs1" className="flex-1">
              {datum.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
