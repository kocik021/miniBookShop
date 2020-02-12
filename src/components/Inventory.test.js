import React from "react";
import ReactDOM from "react-dom";
import Inventory from "./Inventory";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App tests", () => {
  it("App renders without a problem", () => {
    const div = document.createElement("div");
    const itemList = [];
    ReactDOM.render(<Inventory itemList={itemList} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Inventory renders", () => {
    const wrapper = shallow(<Inventory />);
    expect(wrapper).toMatchSnapshot();
  });
});
