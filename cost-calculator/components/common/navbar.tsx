// components/common/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Copy Shop</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>    
          <li>
            <Link href="/coverpage">Cover Page</Link>
          </li>   
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
