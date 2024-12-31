import { priceDetails } from "../lists/Interface";
const ProductBill = ({
  rate,
  count,
}: {
  rate: any;
  count: number | string;
}) => {
  let total: number = 0;
  const priceDetails: priceDetails = {
    originalRate: rate * 10,
    discount: 17,
    CurrentRate: (rate * 10 - rate * 10 * 0.17)*(Number(count)),
    delivery: 40,
    fee: 7,
    freeDelivery: true,
  };

  if (!priceDetails.freeDelivery) {
    total = priceDetails.CurrentRate + priceDetails.delivery + priceDetails.fee;
  } else {
    total = priceDetails.CurrentRate + priceDetails.fee;
  }

  return (
    <>
      <div className="border-b-2 pb-4 text-center">
        <button className="bg-yellow-300 p-3 py-1 px-8 rounded-3xl text-sm">
          Use this payment method
        </button>
      </div>
      <div className="flex flex-col gap-1 p-3 text-sm">
        <div className="flex gap-5 justify-between">
          <p>Items:</p>
          <p>{"₹" + priceDetails.CurrentRate.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery:</p>
          <p>{"₹" + priceDetails.delivery.toFixed(2)}</p>
        </div>
        <div className="flex justify-between gap-16">
          <p className="text-cyan-700">Cash/Pay on Delivery fee</p>
          <p>{"₹" + priceDetails.fee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Total:</p>
          <p>{"₹" + total.toFixed(2)}</p>
        </div>
        {priceDetails.freeDelivery ? (
          <div className="flex justify-between text-green-600">
            <p>FREE Delivery</p>
            <p>{`-₹${priceDetails.delivery}`}</p>
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-between text-lg font-semibold">
          <p className="">Order Total:</p>
          <p>{"₹" + total.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default ProductBill;
