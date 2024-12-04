"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? `${Classes.link} ${Classes.active}` : Classes.link}>
      {children}
    </Link>
  );
}
