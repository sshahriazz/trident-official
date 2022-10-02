import { ClientInfo } from "content/client";
import Image from "next/image";

export const SliderItem = ({ quote, name, designation, img }: ClientInfo) => {
    return (
      <div className="mx-3 justify-between flex flex-col text-white bg-indigo-500 p-4 space-y-5">
        <h3 className="text-gray-400">&quot;{quote}&quot;</h3>
        <div className="flex  space-x-3">
          <div>
          <Image className="rounded-full object-cover" width={48} height={48} src={img} alt={name} />
          </div>
          <div>
          <p>{name}</p>
          <p className="text-gray-400">{designation}</p>
          </div>
        
        </div>
      </div>
    );
  };

  export default SliderItem