/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Headers from "../components/headers";
import Layout from "../components/layout";
import NftCard, { NftProps } from "../components/nft-card";
import Search from "../components/search";
import { useNfts } from "../hooks/fetcher";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Home() {
  const [input, setInput] = useState("");
  const { data, isLoading, isValidating, setSize } = useNfts(input);
  const observationTarget = useIntersectionObserver(() => {
    !isValidating && setSize((size) => size + 1);
  });

  const inputRef = useRef<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    inputRef.current = e.target.value;
  };

  return (
    <Layout>
      {/* <Headers /> */}
      <header>
        <Head>
          <title>NFT.Club with Reveally</title>
          <meta
            property="og:description"
            content="All the NFT projects in one place"
          />
        </Head>
        <form className="mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-black focus:border-black"
              placeholder="Doodles, Azuki, Cool Cats, ..."
              required
              value={input}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </header>
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
