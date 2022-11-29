/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useEffect, useRef } from "react";
import Headers from "../components/headers";
import Layout from "../components/layout";
import NftCard, { NftProps } from "../components/nft-card";
import Search from "../components/search";
import { useNfts } from "../hooks/fetcher";
import useIntersect from "../hooks/useInterest";

export default function Home() {
  const { data, isLoading, setSize } = useNfts();
  const observationTarget = useIntersect(() => {
    setSize((size) => size + 1);
  });

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
      {!isLoading && <div ref={observationTarget} />}
    </Layout>
  );
}
