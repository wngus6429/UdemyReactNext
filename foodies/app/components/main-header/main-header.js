import Link from "next/link";
import Classes from "./main-header.module.css";
import logoImg from "../../../assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={Classes.header}>
        <Link className={Classes.logo} href="/">
          <Image src={logoImg} alt="food" priority />
          NextLevel Food
        </Link>
        <nav className={Classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Meals Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
