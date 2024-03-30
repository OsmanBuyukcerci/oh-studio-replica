import { useEffect } from "react";

interface LinkProps {
  text: string;
  href: string;
  isActive: boolean;
}

const LinkComp = ({ text, href, isActive }: LinkProps) => {
  useEffect(() => {
    const linkElement = document.getElementById("link");
    if (linkElement) {
      if (isActive) {
        linkElement.style.backgroundColor = "#e8e5e480";
      } else {
        linkElement.style.backgroundColor = "#ffffff";
      }
    }
  }, []);

  return (
    <a
      id="link"
      className="rounded-full w-auto text-xl p-2 text-center"
      href={href}
    >
      {text}
    </a>
  );
};

export default LinkComp;
