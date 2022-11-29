import Image from "next/image";
import twtterLogo from "../../public/icons/twitter.svg";
import discordLogo from "../../public/icons/discord.svg";
import homepageLogo from "../../public/icons/homepage.png";
import etherscanLogo from "../../public/icons/etherscan.svg";
import openseaLogo from "../../public/icons/opensea.svg";

export interface NftProps {
  _id: string;
  profile: string;
  name: string;
  twitter?: string;
  discord?: string;
  homepage?: string;
  contract?: string;
  market?: string;
}

const NftCard = (props: NftProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-sm bg-white dark:bg-neutral-800 dark:text-neutral-50">
      <div className="px-6 py-4">
        <div className="flex flex-row items-center">
          <Image
            className="w-10 h-10 rounded-full"
            width={400}
            height={400}
            src={`https://s3.ap-northeast-2.amazonaws.com/reveally.club/nfts/${props.name}.png`}
            alt={props.name}
          />
          <div className="font-bold text-xl pl-4">{props.name}</div>
        </div>
        <div className="flex pt-4 pb-2">
          {props.twitter === undefined ? (
            <div />
          ) : (
            <a
              className="inline-flex cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              href={props.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-6 h-6"
                width={100}
                height={100}
                src={twtterLogo}
                alt="twitter"
              />
            </a>
          )}
          {props.discord === undefined ? (
            <div />
          ) : (
            <a
              className="inline-flex cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              href={props.discord}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-6 h-6"
                width={100}
                height={100}
                src={discordLogo}
                alt="discord"
              />
            </a>
          )}
          {props.homepage === undefined ? (
            <div />
          ) : (
            <a
              className="inline-flex cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              href={props.homepage}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-6 h-6"
                width={100}
                height={100}
                src={homepageLogo}
                alt="homepage"
              />
            </a>
          )}
          {props.contract === undefined ? (
            <div />
          ) : (
            <a
              className="inline-flex cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              href={`https://etherscan.io/address/${props.contract}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-6 h-6"
                width={100}
                height={100}
                src={etherscanLogo}
                alt="etherscan"
              />
            </a>
          )}
          {props.market === undefined ? (
            <div />
          ) : (
            <a
              className="inline-flex cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              href={props.market}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-6 h-6"
                width={100}
                height={100}
                src={openseaLogo}
                alt="opensea"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NftCard;
