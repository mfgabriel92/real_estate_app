import { useState, useCallback, useEffect } from "react";
import { Alert } from "react-native";

interface UseAuthOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
}

interface UseAuthReturn<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (params: P) => Promise<void>;
}

export function useAuth<T, P extends Record<string, string | number>>({
  fn,
  params = {} as P,
  skip = false,
}: UseAuthOptions<T, P>): UseAuthReturn<T, P> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true);
      setError(null);

      try {
        const result = await fn(fetchParams);
        setData(result);
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "An error occurred";
        setError(message);
        Alert.alert("Error", message);
      } finally {
        setLoading(false);
      }
    },
    [fn],
  );

  useEffect(() => {
    if (!skip) {
      fetchData(params);
    }
  }, []);

  const refetch = async (params: P) => await fetchData(params);

  return {
    data,
    loading,
    error,
    refetch,
  };
}
