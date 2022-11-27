import { useEffect } from "react";
import Headers from "../components/headers";
import Layout from "../components/layout";
import NftCard, { NftProps } from "../components/nft-card";
import Search from "../components/search";
import { useNfts } from "../hooks/fetcher";

export default function Home() {
  const { data, isLoading, setSize } = useNfts();
  function handleScroll() {
    if (
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.scrollHeight
    ) {
      setSize((size) => size + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Headers />
      <div className="mt-10">
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
    </Layout>
  );
}
