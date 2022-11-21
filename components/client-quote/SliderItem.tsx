import { ClientInfo } from "content/client";
import Image from "next/image";

export const SliderItem = ({ quote, name, designation, img, company, website }: ClientInfo) => {
  return (
    <div className="mx-3 justify-between flex flex-col rounded-lg text-white bg-primary-500 p-4 space-y-5 flex-wrap">
      <h3 className="text-white">&quot;{quote}&quot;</h3>
      <div className="flex  space-x-3">
        <div>
          <Image
            className="rounded-full object-cover"
            width={48}
            height={48}
            src={img}
            alt={name}
          />
        </div>
        <div>
          <p>{name}</p>
          <p className="text-gray-300 text-sm">{designation}</p>
          <p className="text-gray-300 text-sm">
            <a target={"_blank"} href={website} rel="noreferrer">{company}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
