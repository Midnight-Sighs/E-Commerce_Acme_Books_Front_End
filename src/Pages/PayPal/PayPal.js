import React from "react";
import ReactDOM from "react-dom"

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

class PayPal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:props.props,
        }
    }
  createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: this.state.value,
          },
        },
      ],
    });
  }

  onApprove(data, actions) {
    return actions.order.capture();
  }

  render() {
    return (
      <PayPalButton
        createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
      />
    );
  }
}
export default PayPal;