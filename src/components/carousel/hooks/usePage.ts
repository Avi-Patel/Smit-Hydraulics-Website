import { useCallback, useState } from "react";

export const usePage = (): {
  page: number;
  handleBack: () => void;
  handleForward: () => void;
} => {
  const [page, setPage] = useState(0);

  const handleBack = useCallback(() => setPage((prev) => prev - 1), []);
  const handleForward = useCallback(() => setPage((prev) => prev + 1), []);

  return { page, handleBack, handleForward };
};
