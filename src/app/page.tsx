import {
  faBars,
  faMagnifyingGlass,
  faBagShopping,
  faArrowRightArrowLeft,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex">
        <div className="flex-1">
          <div className="flex justify-end items-center">
            <div className="flex flex-wrap items-center mr-auto">
              <Image
                src={"/PeachIcon.png"}
                alt={"Home Icon"}
                width={50}
                height={50}
                className="rounded-sm p-2 m-2"
              />
              <span className="font-[--font-geist-mono] text-sm sm:text-xl">
                Peaches
              </span>
            </div>

            <span className="h-fit border-gray-200 border-solid border-2 rounded-full p-2 m-2">
              <FontAwesomeIcon
                height={20}
                width={20}
                icon={faMagnifyingGlass}
              />
            </span>
            <span className="h-fit border-gray-200 border-solid border-2 rounded-full p-2 m-2">
              <FontAwesomeIcon height={20} width={20} icon={faBars} />
            </span>
          </div>
          <div className="flex justify-center items-center font-[--font-geist-mono] text-sm sm:text-xl p-20">
            Natural Magic
          </div>
          <div className="flex justify-center text-center items-center font-[--font-geist-serif] text-3xl sm:text-7xl p-20">
            Unlock your inner beauty with our self care products
          </div>
          <div className="flex">
            <div className="flex flex-shrink-0 h-fit justify-around items-center self-end w-52 bg-black rounded-full m-2 mb-4">
              <span className=" text-white p-4 text-center">
                Start Shopping
              </span>
              <span className=" text-black bg-white p-2 rounded-full m-0.5">
                <FontAwesomeIcon height={20} width={20} icon={faArrowRight} />
              </span>
            </div>
            <div className="flex flex-col justify-start ml-auto m-2 p-5">
              <span className="text-right items-start font-[--font-geist-serif] text-sm sm:text-lg w-54">
                Say Goodbye to Dryness and dullness with the Lotion of choice
              </span>
              <div className="flex justify-end">
                <span className=" text-white bg-black p-2 h-fit bg-opacity-25 rounded-full m-0.5">
                  <FontAwesomeIcon height={20} width={20} icon={faArrowLeft} />
                </span>
                <span className=" text-white bg-black p-2 h-fit rounded-full m-0.5">
                  <FontAwesomeIcon height={20} width={20} icon={faArrowRight} />
                </span>
              </div>

            </div>
          </div>
        </div>

        <div className="flex justify-end flex-1 heroLeft max-h-fit">
          <Image
            src={"/LandingHeroLeft.png"}
            alt={"Product banner"}
            width="500"
            height="800"
            className="float-right p-2 m-2 -z-1 absolute"
          />
          <div className="flex justify-end z-1">
            <span className="h-fit border-gray-200 border-solid border-2 rounded-full p-2 m-2">
              <FontAwesomeIcon height={20} width={20} icon={faHeart} />
            </span>
            <span className="h-fit border-gray-200 border-solid border-2 rounded-full p-2 m-2">
              <FontAwesomeIcon height={20} width={20} icon={faBagShopping} />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
