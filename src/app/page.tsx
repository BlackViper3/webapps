import {
  faBars,
  faBurger,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <header className="flex">
        <div className="mr-auto">
          <Image
            src={"/PeachIcon.png"}
            alt={"Home Icon"}
            width={50}
            height={50}
            className="rounded-sm p-2 m-2"
          />
          </div>
          <div className="flex self-center">
            <FontAwesomeIcon
              className="border-white border-solid border-2"
              height={20}
              width={80}
              icon={faMagnifyingGlass}
            />
            <FontAwesomeIcon
              className="border-white border-solid border-2"
              height={20}
              width={80}
              icon={faBars}
            />
          </div>
        </header>
      </main>
    </div>
  );
}
