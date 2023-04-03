import React from "react";

// header components
const Header = () => {
  return (
    <header style={{ fontFamily: "Exo 2" }} className="max-w-[1270px] mx-auto">
      <nav className="navbar bg-base-100 py-3 px-2">
        <div className="flex-1">
          <a className="text-2xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/ELLE_TAIWAN_Seo_yea_ji_2020_%283%29.png"
                  alt=""
                />
              </div>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;