import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import Image from "next/image";
import SwiperGoodOldDay from "./SwiperGoodoldday";

export default function GoodOldday() {
  return (
    <article className="flex justify-center items-center my-5">
      <figure className="max-w-7xl  w-full my-1">
        <div className="text-4xl flex justify-between mb-1 items-center">
          <Link
            href={""}
            className="bg-pink-500 text-sm text-white p-2 rounded-lg flex items-center max-sm:text-xs"
          >
            รังศิษย์-รังสิต
            <BsFillPlayFill size={19} />
          </Link>
          <span className="max-sm:text-xl">GOOD OLD DAY</span>
        </div>
        <div className="bg-pink-500 w-full h-1"></div>
        <div className="mt-5">
            <SwiperGoodOldDay/>
        </div>
      </figure>
    </article>
  );
}
