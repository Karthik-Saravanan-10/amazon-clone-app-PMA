import { Imagedata } from "../lists/Interface";

const Services = () => {
  const imgData: Imagedata[] = [
    {
      img: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png",
      content: "7 days service centre replacement",
    },
    {
      img: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png",
      content: "Free Delivery",
    },
    {
      img: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
      content: "1 Year Warranty",
    },
    {
      img: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB562506657_.png",
      content: "Cash/Pay on Delivery",
    },
    {
      img: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB562506657_.png",
      content: "Top Brands",
    },
  ];
  return (
    <div className="flex text-xs font-medium mt-3 border-b-2 pb-2">
      {imgData?.map((elem: Imagedata) => {
        return (
          <div className="flex flex-col items-center" key={elem.content}>
            <img src={elem.img} alt="" width={32} height={32} />
            <p className="w-20 text-center text-cyan-700">{elem.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
