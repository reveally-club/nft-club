import axios from "axios";
import useSWRInfinite from "swr/infinite";
import { NftProps } from "../components/nft-card";

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

const useNfts = (search: string) => {
  const getKey = (pageIndex: number, previousPageData: NftProps[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${process.env.NEXT_PUBLIC_BASE_URL}/nft/search?take=50&page=${
      pageIndex + 1
    }&search=${search}`;
  };

  const { data, error, isValidating, size, setSize } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateFirstPage: false,
    }
  );

  const post = data ? data.map((item: NftProps) => item).flat() : [];

  return {
    data: post,
    isLoading: !error && !data,
    isError: error,
    isValidating: isValidating,
    size: size,
    setSize: setSize,
  };
};

export { useNfts };
