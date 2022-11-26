const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="bg-zinc-100 h-screen flex flex-row min-h-screen">
      <div className="sidebar transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white flex flex-col justify-center content-center">
        <div className="lg:p-16">
          <h1 className="text-6xl font-bold">NFT.club</h1>
          <h2 className="text-transparent text-sm bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            with Reveally
          </h2>
          <h3 className="mt-2 font-bold text-xl">
            All the NFT projects in one place
          </h3>
          <p className="mt-4 font-sm max-w-sm">
            NFT.club is a list of NFT projects. <br />
            Add your NFT projects in a minute! <br />
            You can connect to each project, can be connected to all the
            projects you want to check with NFT.club
          </p>
          <div className="mt-8">
            <button className="text-white p-4 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full hover:text-zinc-100 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              Add Your NFT Project
            </button>
          </div>
        </div>
      </div>
      <main className="main-content flex flex-col flex-grow p-4 ml-4 container mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
