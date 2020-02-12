import React from "react";
import ReactDOM from "react-dom";
import Order from "./Order";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App tests", () => {
  it("App renders without a problem", () => {
    const div = document.createElement("div");
    const order = [];
    ReactDOM.render(<Order order={order} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Order renders", () => {
    const order = [];
    ReactDOM.render(<Order order={order} />, div);
    const wrapper = shallow(<Order />);
    expect(wrapper.toMatchSnapshot());
  });
});
