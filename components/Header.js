//next image
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-6">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={300}
                height={38}
                alt=""
                priority={true}
              />
            </Link>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
