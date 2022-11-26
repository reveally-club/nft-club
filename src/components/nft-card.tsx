interface NftProps {
  name: string;
  twitter: string;
  discord: string;
  homepage: string;
  scan: string;
  opensea: string;
}

const NftCard = (props: NftProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-sm bg-white">
      <div className="px-6 py-4">
        <div className="flex flex-row items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1589478543355891714/06M0Yq_-_400x400.jpg"
            alt={props.name}
          />
          <div className="font-bold text-xl pl-4">{props.name}</div>
        </div>
        <div className="pt-4 pb-2">
          <a className="inline-block cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            twitter
          </a>
          <a className="inline-block cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            discord
          </a>
          <a className="inline-block cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            homepage
          </a>
          <a className="inline-block cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            address
          </a>
          <a className="inline-block cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            opensea
          </a>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
