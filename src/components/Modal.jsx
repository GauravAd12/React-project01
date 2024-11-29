/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";

const Modal = ({ isOpen = false, setIsOpen, title, content, actions }) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div className="h-svh w-full bg-gray-100 fixed top-0 bottom-0 left-0 right-0 bg-opacity-50 flex items-center justify-center">
        <div className="mx-10 w-full md:w-1/2 xl:w-1/3 min-h-40 px-12 py-10 bg-white shadow-md rounded-3xl">
          {/* Modal Title  */}
          <div className="flex justify-between">
            <h1 className="font-semibold text-3xl">{title}</h1>
            <button onClick={() => setIsOpen(false)}>
              <RxCross1 />
            </button>
          </div>

          {/* Modal Body  */}

          <div className="py-5">{content}</div>

          <div className="flex justify-end">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
