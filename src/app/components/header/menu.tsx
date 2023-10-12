import { Link } from "react-scroll";
import NextLink from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

type MenuItem = {
  id: number;
  text: string;
  url: string;
};

type MenuProps = {
  items: MenuItem[];
};

function Menu({ items }: MenuProps) {
  const { t } = useTranslation();
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-3">
        {items.map(({ id, text, url }) => (
          <li className="text-[16px]" key={id}>
            {url.indexOf("http") !== -1 ? (
              <NextLink
                href={url}
                target="_blank"
                className="text-gray-500 cursor-pointer hover:text-red-600 duration-300 ease-in hover:no-underline"
              >
                {t(text)}
              </NextLink>
            ) : (
              <Link
                className="text-gray-500 cursor-pointer hover:text-red-600 duration-300 ease-in hover:no-underline"
                smooth={true}
                duration={1400}
                to={url}
                activeClass="active"
                spy={true}
              >
                {t(text)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
