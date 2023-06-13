import { useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
export default function UploadUserImage({
  Uploadimagemodel,
  setUploadimagemodel,
}) {
  const inputref = useRef(null);

  const [image, setimage] = useState("");

  const setUserImage = () => {
    console.log(image);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 h-full bg-black bg-opacity-30 backdrop-blur-sm animate__animated animate__fadeIn">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-lg p-5 lg:w-[30vw]">
            <div className="flex justify-end">
              <RxCross2
                onClick={() => {
                  setUploadimagemodel(!Uploadimagemodel);
                }}
                size={30}
                color="grey"
                cursor={"pointer"}
              />
            </div>
            <input
              defaultValue={image}
              onChange={(e) => {
                setimage(URL.createObjectURL(e.target.files[0]));
              }}
              type="file"
              ref={inputref}
              hidden
              id="uploadimage"
            />
            <div className="flex flex-col justify-center items-center space-y-7">
              {image ? (
                <img
                  src={image}
                  alt=""
                  className="object-cover rounded-full w-32 h-32"
                />
              ) : (
                <div
                  className="cursor-pointer border-[2px] rounded-full p-6"
                  onClick={() => {
                    inputref.current.click();
                  }}
                >
                  <AiOutlineCloudUpload size={60} color="grey" />
                </div>
              )}

              <button
                onClick={setUserImage}
                className={`${
                  image
                    ? "bg-violet-800 text-white"
                    : "bg-gray-300 text-gray-400"
                } text-sm text-white font-semibold px-20 py-2.5 rounded-md`}
              >
                Set Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
