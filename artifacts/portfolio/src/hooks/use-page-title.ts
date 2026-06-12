import { useEffect } from "react";

const BASE = "Channels Oladapo";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — Technical Product Manager`;
    return () => {
      document.title = `${BASE} — Technical Product Manager`;
    };
  }, [title]);
}
