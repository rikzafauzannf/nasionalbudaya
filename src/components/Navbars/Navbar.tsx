import React from "react";
import { ListLink } from "./ListLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {ListLink.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.chilling.length === 0 ? (
                    <li key={index}>
                      <Link href={item.route}>{item.title}</Link>
                    </li>
                  ) : (
                    <li key={index}>
                      <Link href={item.route}>{item.title}</Link>
                      <ul className="p-2">
                        {item.chilling.map((sublink, subindex) => {
                          return (
                            <li key={subindex}>
                              <Link href={sublink.linkchil}>
                                {sublink.titlechil}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">NasionalBudaya</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {ListLink.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.chilling.length === 0 ? (
                  <li key={index}>
                    <Link href={item.route}>{item.title}</Link>
                  </li>
                ) : (
                  <li>
                    <details>
                      <summary>{item.title}</summary>
                      <ul className="p-2">
                        {item.chilling.map((sublink, subindex) => {
                          return (
                            <li key={subindex}>
                              <Link href={sublink.linkchil}>
                                {sublink.titlechil}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"#"} className="btn btn-sm btn-ghost">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
