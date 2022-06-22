import { AxiosError } from "axios";
import { useState } from "react";

const useSisyphe = <T>(
  key: string,
  fetcher: (...args: any[]) => Promise<T>
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<T | null>(null);

  setIsLoading(true);

  fetcher()
    .then((data) => setData(data))
    .catch((e) => setError(e))
    .finally(() => setIsLoading(false));

  return { data, isLoading, error };
};

export default useSisyphe;

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
