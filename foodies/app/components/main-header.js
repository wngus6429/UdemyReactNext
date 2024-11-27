import Link from "next/link";
import Classes from "./main-header.module.css";
import logoImg from "../../assets/logo.png";

export default function MainHeader() {
  return (
    <header className={Classes.header}>
      <Link className={Classes.logo} href="/">
        <img src={logoImg.src} alt="food" />
        NextLevel Food
      </Link>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Meals Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
