import { shallow } from "enzyme";
import * as React from "react";

import NumericInput from "../NumericInput";

describe("<NumericInput />", () => {
  it("should render the component correctly, with an <input />", () => {
    const wrapper = shallow(<NumericInput />);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(0);
  });

  it("should round to 2 decimal places", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} />);
    expect(wrapper.find("input").props().value).toBe("50,00");
  });

  it("should round to 0 decimal places", () => {
    const wrapper2 = shallow(<NumericInput decimalPrecision={0} value={50} />);
    expect(wrapper2.find("input").props().value).toBe("50");
  });

  it("should round to 3 decimal places", () => {
    const wrapper3 = shallow(<NumericInput decimalPrecision={3} value={50} />);
    expect(wrapper3.find("input").props().value).toBe("50,000");
  });

  it("should round to 3 decimal places with custom decimal separator", () => {
    const wrapper3 = shallow(<NumericInput decimalPrecision={3} value={50} decimalSeparator="." />);
    expect(wrapper3.find("input").props().value).toBe("50.000");
  });

  it("should show a button with money symbol", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} money={true} />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find("button").text()).toBe("$");
  });

  it("should show a button with custom money symbol", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} money={true} moneyMask="R$" />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find("button").text()).toBe("R$");
  });

  it("should show a button with percent symbol", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} percent={true} />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find("button").text()).toBe("%");
  });

  it("should show value when user inputs 0", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={0} />);
    expect(wrapper.find("input").props().value).toBe("0,00");
  });
});
