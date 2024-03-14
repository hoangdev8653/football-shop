import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createCheckout } from "../../../apis/cart";
import { getLocalStorage } from "../../../utils/LocalStorage";

function Payment({ address, totalPrice }) {
  const token = getLocalStorage("accessToken");
  console.log(token);

  async function onApprove() {
    const response = await createCheckout(address, token);
    console.log(response);
    // alert("Thanh toán thành công");
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons onApprove={onApprove} />
    </PayPalScriptProvider>
  );
}

export default Payment;
