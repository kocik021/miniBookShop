import React from "react";
import ReactDOM from "react-dom";
import OrderView from "./OrderView";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App tests", () => {
  it("Snapshot matches", () => {
    const item = {
      name: "item name"
    };
    const wrapper = shallow(<OrderView item={item} />);
    expect(wrapper.toMatchSnapshot());
  });
});
