import CheckoutModal from "./CheckoutModal";

const CheckoutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlaceOrder = () => {
    // Perform your checkout logic here (e.g., API call)
    // On successful checkout, show the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Place Order Button */}
      <button
        className="bg-custom-blue text-white px-4 py-2 rounded-2xl mt-8 w-[320px] sm:w-[376px]"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>

      {/* Checkout Successful Modal */}
      <CheckoutModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CheckoutPage;
