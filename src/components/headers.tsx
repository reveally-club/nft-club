import Head from "next/head";
import ConnectWallet from "./connect-wallet";
import Search from "./search";

const Headers = () => {
  return (
    <div className="sticky top-0 z-30 w-full">
      <Head>
        <title>NFT.Club with Reveally</title>
        <meta
          property="og:description"
          content="All the NFT projects in one place"
        />
      </Head>
      <Search />
      {/* <ConnectWallet /> */}
    </div>
  );
};

export default Headers;
