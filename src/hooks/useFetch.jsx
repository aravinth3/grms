import privateAPI from "@/api/privateAPI";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setLoading(true);

    async function fetch() {
      try {
        const res = await privateAPI.get(url);
        if (!signal.aborted) {
          setData(res.data);
        }
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetch();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error, setData };
}
export default useFetch;
