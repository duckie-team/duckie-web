"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


<style jsx>{`
  .navbar {
    width: 100%;
    height: 5rem;
    background-color: #065f46; /* emerald-800 */
    position: sticky;
    top: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 100%;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .menu ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    margin-right: 3rem;
    color: white;
  }

  .menu li:last-child {
    margin-right: 0;
  }

  .menu li a {
    color: white;
    text-decoration: none;
  }
`}</style>

const DuckieNavBar = () => {
  const path = usePathname();

  if (path === '/' || path === '/auth/login' || path === '/onboarding') return
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="menu">
            <ul>
              <li>
                <Link href="/home">
                  <p>홈</p>
                </Link>
              </li>
              <li>
                <Link href="/search">
                  <p>검색</p>
                </Link>
              </li>
              <li>
                <Link href="/ranking">
                  <p>명예의 전당</p>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <p>마이 프로필</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};


export default DuckieNavBar;