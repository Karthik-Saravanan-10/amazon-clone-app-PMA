const CardSideBar = () => {
  return (
    <>
      <aside>
        <div className="border-2">
          <p>Subtotal</p>
          <p className="text-red-700">
            <sup className="text-sm">₹</sup>
            18,000
          </p>
          <p>
            <span className="text-green-700">
              Your order is eligible for FREE Delivery.
            </span>{" "}
            Select this option at checkout.
          </p>
          <a className="text-green-600">Details</a>
        </div>
        <button className="rounded-lg px-2 text-sm">Go to Cart</button>
      </aside>
    </>
  );
};

export default CardSideBar;
