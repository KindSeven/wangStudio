import holo from "@/assets/images/holo.PNG";
const LatestAriticle: React.FC = () => {
  const content = [
    {
      img: holo,
      title: "333333",
      time: "2024-01-22",
    },
    { img: holo, title: "333333444", time: "2024-01-22" },
  ];
  return (
    <>
      <div className=" bg-white w-full rounded-lg p-5 shadow-md hover:shadow-[0_5px_5px_7px_rgba(229,229,229)] transition-all mb-4">
        <div className="flex items-center mb-4">
          <div className=" mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M10.975 3.002a1 1 0 0 1-.754 1.196a8 8 0 0 0-.583.156a1 1 0 0 1-.59-1.911q.36-.112.73-.195a1 1 0 0 1 1.197.754m2.05 0a1 1 0 0 1 1.196-.754c4.454 1.01 7.78 4.992 7.78 9.752c0 5.523-4.478 10-10 10c-4.761 0-8.743-3.325-9.753-7.779a1 1 0 0 1 1.95-.442a8 8 0 1 0 9.58-9.58a1 1 0 0 1-.753-1.197M6.614 4.72a1 1 0 0 1-.053 1.414q-.222.205-.427.426A1 1 0 0 1 4.668 5.2q.255-.276.532-.533a1 1 0 0 1 1.414.053M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1M3.693 8.388a1 1 0 0 1 .661 1.25a8 8 0 0 0-.156.583a1 1 0 0 1-1.95-.442q.084-.37.195-.73a1 1 0 0 1 1.25-.661"
                />
              </g>
            </svg>
          </div>
          最新文章
        </div>
        <div>
          {content.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className=" w-16 h-16 overflow-hidden">
                <a href="">
                  <img src={item.img} alt="" className="w-full h-full object-cover transition-all hover:scale-110 duration-500" />
                </a>
              </div>

              <div className=" ml-3">
                <a href="">
                  <p className="transition-all duration-300 hover:text-yellow-500 leading-loose">{item.title}</p>
                </a>
                <p className="text-xs text-slate-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestAriticle;