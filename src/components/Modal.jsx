import { X } from "lucide-react";
import React, { useState } from "react";
import BookingForm from "./BookingForm";

const Modal = ({ onClose, show }) => {
  const premieredYear = show.premiered?.substring(0, 4);
  const [isFormVisible, setFormVisibility] = useState(false);

  const handleOpenForm = () => {
    setFormVisibility(true);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-50" />
      <div className="bg-[#1F1F1F] w-[600px] h-[500px] p-4 relative z-10">
        <div className="absolute -top-10 right-0 p-2 cursor-pointer hover:bg-[#2c2c2c] rounded-full transition">
          <X onClick={onClose} className="text-white" />
        </div>
        <div className="p-4 flex">
          <img
            src={show.image ? show.image?.medium : "/browser.png"}
            alt="show picture"
            width={85}
            height={115}
          />
          <div className="ml-4">
            <div>
              <p className="text-3xl text-white hover:opacity-70 cursor-pointer">
                {show.name}
              </p>
            </div>
            <div className="flex  gap-14 text-lg text-white opacity-60">
              <p>{premieredYear ? premieredYear : "2XXX"}</p>
              <p>{show.averageRuntime ? show.averageRuntime + "m" : "---"}</p>
              <p>
                {show.genres.length === 1
                  ? show.genres[0]
                  : show.genres[0] + ", " + show.genres[1]}
              </p>
            </div>

            <div className="flex">
              <p className="text-2xl text-white opacity-80">
                {show.network?.name ? show.network?.name : "X Network"}
              </p>
              {/* <p className="ml-auto text-xs font-[100]">{show.status}</p> */}
            </div>
          </div>
        </div>
        <div
          className="text-white p-4"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        ></div>
        <div className="p-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={handleOpenForm}
          >
            Book Ticket
          </button>
        </div>
        {isFormVisible && (
          <BookingForm
            show={show}
            onCloseForm={() => setFormVisibility(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
