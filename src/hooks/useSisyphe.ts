import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const queryCache: Record<string, unknown> = {};

const useSisyphe = <T>(
  key: string,
  fetcher: (...args: any[]) => Promise<T>
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (queryCache[key]) {
        console.log("cache");
        setData(queryCache[key] as T);

        return;
      }

      try {
        const data = await fetcher();
        // 결과값이 프로미스니까

        setData(data);
        console.log("fetch");
        queryCache[key] = data;
      } catch (e) {
        if (e instanceof AxiosError) {
          setError(e);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [key, fetcher]);

  return { data, isLoading, error };
};

export default useSisyphe;

/* ! 캐싱
 * 1. useEffect 없이 사용한다. 즉, dom 이 mount되기를 기다리지 않아도 된다. 정확히 어떤 차이가 있을까?
 * 2.
 * 3.
 * 4.
 * 5.
 */

/* ! 구현 순서
 * 1. 무조건 cache 되도록 구현한다.
 * 2. refetch를 원할 때 가능하도록 구현한다.
 * 3. staleTime, cacheTime 을 지정한다.
 * 4. 기본적으로 항상 stale하게 구현하고, 커스텀할 수 있도록 한다.
 * 5. 후처리 함수를 구현한다. (onSuccess, onFailure)
 */

/* ! 느낀점
 * 1. useEffect 없이 사용한다. 즉, dom 이 mount되기를 기다리지 않아도 된다. 정확히 어떤 차이가 있을까?
 * 2.
 * 3.
 * 4.
 * 5.
 */

// 1. fetcher에서 인자를 받아오게 만들기 - getTodos
