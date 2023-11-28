import React, { useState, useEffect } from "react";
import Modal from "react-modal";


const VideoModal = ({ isOpen, onClose, imageSrc, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    setIsPlaying(false);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className="w-[80%] sm:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#171716] outline-none p-4 sm:p-8 pb-12 rounded-lg z-50"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-40"
    >
      <div className="relative">
        <div className="flex justify-end border-2 border-black rounded-[25px] w-6 sm:w-9 ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-8 sm:w-8 text-black cursor-pointer mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {isPlaying ? (
          <video
            autoPlay
            controls
            src={videoSrc}
            onEnded={handleVideoEnd}
            className="max-w-full rounded-lg mt-3"
          />
        ) : (
          <>
            <img
              src={imageSrc}
              alt="Thumbnail"
              className="max-w-full cursor-pointer rounded-lg mt-3"
              onClick={() => setIsPlaying(true)}
            />
            <div className="absolute top-[60%] sm:top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#171716] rounded-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-[#171716] cursor-pointer mx-auto pl-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => setIsPlaying(true)}
              >
                <path d="M5 3l10 7-10 7z" />
              </svg>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default VideoModal;
