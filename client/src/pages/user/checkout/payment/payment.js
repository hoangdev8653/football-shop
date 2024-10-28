import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createCheckout } from "../../../../apis/cart";
import { getLocalStorage } from "../../../../utils/LocalStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Payment({ address, totalPrice }) {
  const navigate = useNavigate();

  const token = getLocalStorage("accessToken");

  async function createOrder(data, actions) {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Cool looking table",
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  }

  async function onApprove(data, actions) {
    const order = await actions.order.capture();
    if (order.status === "COMPLETED") {
      try {
        const response = await createCheckout({ address }, token);
        console.log(response);
        if (response.status === 201) {
          toast.success("Đã Thanh toán thành công");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (error) {
        console.log("Thất bại: ", error);
        toast.error("Thanh toán Thất bại");
      }
    } else {
      toast.error("Thanh toán Thất bại");
    }
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
}

export default Payment;
