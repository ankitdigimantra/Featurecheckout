import { useEffect, useState } from "react";
import { fetchUrl } from "../fetch/api";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUrl(url);
        setData(data);
        setloading(false);
      } catch (error) {
        setError(error);
        setloading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
};