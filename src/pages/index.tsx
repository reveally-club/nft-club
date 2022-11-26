import Headers from "../components/headers";
import Layout from "../components/layout";
import NftCard from "../components/nft-card";
import Search from "../components/search";

export default function Home() {
  return (
    <Layout>
      <Headers />
      <div className="mt-10">
        <NftCard name="alien frens" />
      </div>
    </Layout>
  );
}
