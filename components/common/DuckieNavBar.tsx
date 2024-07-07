"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import HomeSelectedIcon from "../../assets/ic_home_selected.svg";
import HomeUnselectedIcon from "../../assets/ic_home_unselected.svg";
import MusicSelectedIcon from "../../assets/ic_music_selected.svg";
import MusicUnselectedIcon from "../../assets/ic_music_unselected.svg";
import SearchSelectedIon from "../../assets/ic_search_selected.svg";
import SearchUnselectedIcon from "../../assets/ic_search_unselected.svg";
import RankingSelectedIcon from "../../assets/ic_ranking_selected.svg";
import RankingUnselectedIcon from "../../assets/ic_ranking_unselected.svg";
import DuckieTextLogo from "../../assets/ic_duckie_logo.svg"
import Image from "next/image";


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

  if (path === '/home' || path === '/music' || path === '/search' || path === '/ranking') {
    return (
      <>
        <div className="navbar">
          <div className="container">
            <div className="menu">
              <ul>
                <li className="logo">
                  <Link href="/home" >
                    <Image src={DuckieTextLogo} alt={""}/>

                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    <NavItem title="홈" isSelected={path ==='/home'} selectedIcon={HomeSelectedIcon} unSelectedIcon={HomeUnselectedIcon}/>
                  </Link>
                </li>
                <li>
                  <Link href="/music">
                    <NavItem title="듣기평가" isSelected={path ==='/music'} selectedIcon={MusicSelectedIcon} unSelectedIcon={MusicUnselectedIcon}/>
                  </Link>
                </li>
                <li>
                  <Link href="/search">
                    <NavItem title="검색" isSelected={path ==='/search'} selectedIcon={SearchSelectedIon} unSelectedIcon={SearchUnselectedIcon}/>
                  </Link>
                </li>
                <li>
                  <Link href="/ranking">
                    <NavItem title="명예의 전당" isSelected={path ==='/ranking'} selectedIcon={RankingSelectedIcon} unSelectedIcon={RankingUnselectedIcon}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <style jsx>{`
          .navbar {
            height: 100%;
          }
          .container {
            padding: 12px 16px; /* 추가적인 스타일을 적용할 수 있습니다 */
          }
          .logo {
            display: flex;
            width: 240px;
            padding: 32px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        `}</style>
      </>
    );
  }
};


export default DuckieNavBar;