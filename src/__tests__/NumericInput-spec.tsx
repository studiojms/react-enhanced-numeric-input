import { shallow } from "enzyme";
import * as React from "react";

import NumericInput, { setDefaultMoneyMask, setDefaultPercent, setDefaultDecimalSeparator } from "../NumericInput";

describe("<NumericInput />", () => {
  beforeEach(() => {
    //resets global definitions
    setDefaultMoneyMask("$");
    setDefaultPercent("%");
    setDefaultDecimalSeparator(",");
  });

  it("should render the component correctly, with an <input />", () => {
    const wrapper = shallow(<NumericInput />);
    expect(wrapper.find(".ni-numeric-input").find("input")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").find("span")).toHaveLength(0);
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
    expect(wrapper.find(".ni-numeric-input[data-money='$']")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").props().className).toContain("money");
  });

  it("should show a button with custom money symbol", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} money={true} moneyMask="R$" />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find(".ni-numeric-input[data-money='$']")).toHaveLength(0);
    expect(wrapper.find(".ni-numeric-input[data-money='R$']")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").props().className).toContain("money");
  });

  it("should show a button with percent symbol", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} percent={true} />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find(".ni-numeric-input[data-percent='%']")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").props().className).toContain("percent");
  });

  it("should show value when user inputs 0", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={0} />);
    expect(wrapper.find("input").props().value).toBe("0,00");
  });

  it("should work with global value defined for money mask", () => {
    setDefaultMoneyMask("R$");

    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} money={true} />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find(".ni-numeric-input[data-money='$']")).toHaveLength(0);
    expect(wrapper.find(".ni-numeric-input[data-money='R$']")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").props().className).toContain("money");
  });

  it("should allow user to override global value defined for money mask", () => {
    setDefaultMoneyMask("R$");

    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} money={true} moneyMask="$$" />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find(".ni-numeric-input[data-money='$']")).toHaveLength(0);
    expect(wrapper.find(".ni-numeric-input[data-money='R$']")).toHaveLength(0);
    expect(wrapper.find(".ni-numeric-input[data-money='$$']")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").props().className).toContain("money");
  });

  it("should work with global value defined for percent", () => {
    setDefaultPercent("%%%");

    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} percent={true} />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find(".ni-numeric-input[data-percent='%']")).toHaveLength(0);
    expect(wrapper.find(".ni-numeric-input[data-percent='%%%']")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").props().className).toContain("percent");
  });

  it("should work with global value defined for decimal separator", () => {
    setDefaultDecimalSeparator("!");

    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} />);
    expect(wrapper.find("input").props().value).toBe("50!00");
  });

  it("should allow user to override global value defined for decimal separator", () => {
    setDefaultMoneyMask("...");

    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} money={true} decimalSeparator=";" />);
    expect(wrapper.find("input").props().value).toBe("50;00");
  });

  it("should allow user to use money and percent masks at the same time", () => {
    const wrapper = shallow(<NumericInput decimalPrecision={2} value={50} money={true} percent={true} />);
    expect(wrapper.find("input").props().value).toBe("50,00");
    expect(wrapper.find(".ni-numeric-input[data-money='$']")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").props().className).toContain("money");
    expect(wrapper.find(".ni-numeric-input[data-percent='%']")).toHaveLength(1);
    expect(wrapper.find(".ni-numeric-input").props().className).toContain("percent");
  });
});
