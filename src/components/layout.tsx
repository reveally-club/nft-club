const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 h-screen flex flex-row">
      <div className="sidebar hidden lg:flex transform translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white dark:bg-neutral-800 flex-col justify-center content-center">
        <div className="p-0 lg:p-16">
          <h1 className="text-6xl font-bold dark:text-neutral-50">NFT.club</h1>
          <h2 className="text-transparent text-sm bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            with Reveally
          </h2>
          <h3 className="mt-2 font-bold text-xl dark:text-neutral-50">
            All the NFT projects in one place
          </h3>
          <p className="mt-4 font-sm max-w-sm dark:text-neutral-50">
          NFT.club is a list of NFT projects.<br/>
           Add your NFT projects in a minute!<br/> 
           You can search various projects, be connected to all the projects you want to check with NFT.club
          </p>
          <div className="mt-8">
            <button className="text-white dark:text-neutral-100 p-4 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full hover:text-zinc-100 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none" onClick={() => {window.open("https://forms.gle/TGuYAoxFFC4vpFNo8")}}>
              Add Your NFT Project
            </button>
          </div>
        </div>
      </div>
      <main className="main-content flex flex-col flex-grow p-4 container mx-auto overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
