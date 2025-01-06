import { ArrivingDate } from "../lists/Date";
import { ResponseData } from "../lists/Interface";

const ProductRevise = ({ value }: { value: ResponseData|undefined }) => {
  return (
    <div className="flex justify-between text-base">
      <div className="w-3/4 flex flex-col gap-3">
        <div>
          <h1 className="text-lg font-semibold">
            Arriving date{" " + ArrivingDate}
          </h1>
          <p>
            We're sorry. Today's deadline for guaranteed accelerated delivery
            has expired. Please reselect your shipping speed to see updated
            shipping information.<span className="text-cyan-700">Details</span>
          </p>
        </div>
        <div className="flex gap-5 h-[70px] overflow-hidden">
          <img src={value?.image} alt="" width={50} />
          <p>
            {value?.category}||{value?.description}
          </p>
        </div>
      </div>

      <div>
        <p className="text-cyan-700">Review Order</p>
      </div>
    </div>
  );
};

export default ProductRevise;
