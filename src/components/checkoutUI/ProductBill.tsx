const ProductBill = () => {
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
          <p>₹999.00</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery:</p>
          <p>₹40.00</p>
        </div>
        <div className="flex justify-between gap-16">
          <p className="text-cyan-700">Cash/Pay on Delivery fee</p>
          <p>₹7.00</p>
        </div>
        <div className="flex justify-between">
          <p>Total:</p>
          <p>₹1046.00</p>
        </div>
        <div className="flex justify-between text-green-600">
          <p>FREE Delivery</p>
          <p>-₹40.00</p>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <p className="">Order Total:</p>
          <p>₹1006.00</p>
        </div>
      </div>
    </>
  );
};

export default ProductBill;
