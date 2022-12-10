/* eslint-disable react-hooks/exhaustive-deps */
import Headers from "../components/headers";
import Layout from "../components/layout";
import NftCard, { NftProps } from "../components/nft-card";
import { useNfts } from "../hooks/fetcher";
import { useAppSelector } from "../state/hooks";

export default function Home() {
  const searchText = useAppSelector((state) => state.search.text)
  const { data, isLoading, isValidating, setSize } = useNfts(searchText);

  const loadMore = () => {
    !isValidating && setSize((size) => size + 1);
  }
  // const observationTarget = useIntersectionObserver(() => {
  //   !isValidating && setSize((size) => size + 1);
  // });

  return (
    <Layout>
      <Headers />
      <div className="mt-10 grid gap-4 lg:grid-cols-4 grid-cols-1">
        {isLoading ? (
          <div />
        ) : (
          data.map((data: NftProps) => (
            <NftCard
              key={data._id}
              _id={data._id}
              profile={data.profile}
              name={data.name}
              twitter={data.twitter}
              discord={data.discord}
              homepage={data.homepage}
              contract={data.contract}
              market={data.market}
            />
          ))
        )}
      </div>
      <button onClick={loadMore}>LoadMore</button>
    </Layout>
  );
}
