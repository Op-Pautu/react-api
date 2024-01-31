import { Info } from "lucide-react";
import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ show }) => {
  const [openModal, setOpenModal] = useState(false);

  const premieredYear = show.premiered?.substring(0, 4);
  return (
    <div className="w-[1000px] rounded-md  p-3 border-b relative">
      <div className="flex">
        <img
          src={show.image ? show.image?.medium : "/browser.png"}
          alt="show picture"
          width={85}
          height={115}
        />
        <div className="ml-4">
          <div>
            <p className="text-3xl hover:opacity-70 cursor-pointer">
              {show.name}
            </p>
          </div>
          <div className="flex  gap-14 text-lg text-neutral-700">
            <p>{premieredYear ? premieredYear : "2XXX"}</p>
            <p>{show.averageRuntime ? show.averageRuntime + "m" : "---"}</p>
            <p>
              {show.genres.length === 1
                ? show.genres[0]
                : show.genres[0] + ", " + show.genres[1]}
            </p>
          </div>

          <div className="flex">
            <p className="text-2xl opacity-80">
              {show.network?.name ? show.network?.name : "X Network"}
            </p>
            {/* <p className="ml-auto text-xs font-[100]">{show.status}</p> */}
          </div>
        </div>
        <div className="flex items-center justify-center ml-auto cursor-pointer ">
          <div className="rounded-full p-3 hover:bg-sky-100 transition duration-300">
            <Info className="text-sky-500" onClick={() => setOpenModal(true)} />
          </div>
        </div>

        {openModal && <Modal onClose={() => setOpenModal(false)} show={show} />}
      </div>
    </div>
  );
};

export default Card;
