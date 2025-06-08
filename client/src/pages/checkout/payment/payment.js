import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createCheckout } from "../../../apis/cart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Payment({ address, totalPrice }) {
  const [currentAddress, setCurrentAddress] = useState(address);
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentAddress(address); 
  }, [address]);
  const createOrder = (data, actions) => {
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
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    if (order.status === "COMPLETED") {
      try {
        console.log(order.status);
        console.log("Address in onApprove:", address);
        console.log(data);
        const response = await createCheckout({ address });
        if (response.status === 201) {
          toast.success("Đã Thanh toán thành công");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (error) {
        console.error("Thất bại:", error);
        toast.error("Thanh toán Thất bại");
      }
    } else {
      toast.error("Thanh toán Thất bại");
    }
  };

  return (
    <PayPalScriptProvider>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
}

export default Payment;
