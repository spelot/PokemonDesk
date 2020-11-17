import { useEffect, useState } from 'react';
import querystring from 'querystring';
import req from '../utils/request';
import { EnumEndpoint } from '../config';

const useData = <T>(endpoint: EnumEndpoint, query: querystring.ParsedUrlQueryInput, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const result = await req<T>(endpoint, query);
        setData(result);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [endpoint, query, ...deps]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
