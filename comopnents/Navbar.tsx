import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="z-30 flexBetween max-container padding-container relatve pb-1.5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="cursor-pointer regular-16 text-gray-50 flexCenter pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
