const Header = () => {
  return (
    <header className="w-full flex justify-around bg-gray-800 h-20 gap-4 px-10 items-center">
      <div className="">
        <h1>Movie App</h1>
      </div>
      <div className="grow flex items-center justify-center">
        <label className="hidden">search bar</label>
        <input className="rounded-2xl w-10/12 h-10 p-3 text-black" />
      </div>
      <div className="flex  gap-2">
        <p>Login</p>
        <p>signUP</p>
        <p className="rounded-full  bg-slate-400">Logo</p>
      </div>
    </header>
  );
};

export default Header;
