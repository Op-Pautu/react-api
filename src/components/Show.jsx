import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import BookingForm from "./BookingForm";

const Show = () => {
  const { state } = useLocation();
  const show = state && state.show;

  const premieredYear = show.premiered?.substring(0, 4);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleBookTicket = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="flex flex-col items-center">
      <TopNav />

      <div className="max-w-6xl p-4 relative z-10">
        <div className="p-8 flex">
          <img
            src={show.image ? show.image?.original : "/browser.png"}
            alt="show picture"
            width={400}
            height={460}
          />
          <div className="ml-8 space-y-4">
            <div>
              <p className="text-6xl hover:opacity-70 cursor-pointer">
                {show.name}
              </p>
            </div>
            <div className="flex  gap-14 text-2xl opacity-60">
              <p>{premieredYear ? premieredYear : "2XXX"}</p>
              <p>{show.averageRuntime ? show.averageRuntime + "m" : "---"}</p>
            </div>
            <div>
              <p>
                {show.genres.length === 1
                  ? show.genres[0]
                  : show.genres[0] + ", " + show.genres[1]}
              </p>
            </div>
            <div className="flex">
              <p className="text-4xl opacity-80">
                {show.network?.name ? show.network?.name : "X Network"}
              </p>
              {/* <p className="ml-auto text-xs font-[100]">{show.status}</p> */}
            </div>
            <div
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            ></div>
          </div>
        </div>
        <div className="px-8 py-4">
          <button
            onClick={handleBookTicket}
            className="bg-blue-500 text-white px-8 py-4 rounded cursor-pointer hover:scale-105"
          >
            Book Ticket
          </button>
        </div>
        {isFormVisible && (
          <BookingForm
            show={show}
            onCloseForm={() => setIsFormVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Show;
