const SideBar = () => {
  return (
    <div className="left-0 bg-gray-800  w-1/12   ">
      <nav className="h-[90vh] ">
        <ul className="flex flex-col h-full items-center gap-5">
          <li className="text-white ">Home</li>
          <li className="text-white">Movies</li>
          <li className="text-white">Series</li>
          <li className="text-white">About</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
