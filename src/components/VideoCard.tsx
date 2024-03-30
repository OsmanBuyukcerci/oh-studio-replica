interface VideoCardProps {
  href: string;
  isReady: boolean;
  src: string;
  text: string;
}

const VideoCard = ({ href, isReady, src, text }: VideoCardProps) => {
  return (
    <a href={href} className="relative group">
      <div className="absolute invisible top-4 start-4 w-full z-10 text-white text-xl shadow-sm font-semibold lg:group-hover:visible">
        <p className="font-semibold">{text}</p>
        {isReady == false && <span className="text-gray">Coming Soon</span>}
        {isReady == true ? (
          <div className="absolute top-0 end-8 p-3 bg-white size-12 rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        ) : (
          <div className="absolute top-0 end-8 p-3 bg-black size-12 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
            </svg>
          </div>
        )}
      </div>
      <div>
        <video
          className="rounded-lg h-full w-full lg:group-hover:blur-sm"
          src={src}
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </div>
      <small className="lg:invisible flex gap-2 items-center">
        <span className="font-semibold">{text}</span>{" "}
        {isReady == false && <span className="text-gray">Coming Soon</span>}
      </small>
    </a>
  );
};

export default VideoCard;
