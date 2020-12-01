import * as classnames from "classnames";
import * as React from "react";

import "./assets/styles.css";

interface INumericInputProps {
  className?: string;
  decimalPrecision?: number;
  decimalSeparator?: string;
  thousandSeparator?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  id?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
  onBlur?: (e: React.ChangeEvent, value: string | number) => void;
  onClick?: () => void;
  onFocus?: (e: React.FocusEvent) => void;
  onKeyPress?: () => void;
  style?: React.CSSProperties;
  value?: string | number;
  percent?: boolean;
  money?: boolean;
  moneyMask?: string;
  stringValueOnBlur?: boolean;
}

interface INumericInputState {
  formattedValue: string;
  value: string | number;
}

/**
 * Input que aceita apenas valores numéricos.
 *
 * Para recuperar o valor no tipo number, ao ser executado o método onBlur são passados dois parâmetros, event e value.
 * O parâmetro value é o valor numérico, podendo ser enviado texto de acordo com o valor do parâmetro stringValueOnBlur
 *
 * @param money {boolean} indica que o componente é do tipo monetário, exibindo um ícone com o símbolo monetário ao lado do input
 * @param percent {boolean} indica que o componente é do tipo percentual, exibindo um ícone com o símbolo porcento ao lado do input
 * @param stringValueOnBlur {boolean} indica que ao ser executado o método onBlur, o argumento value enviado seja do tipo string.
 */
class NumericInput extends React.Component<INumericInputProps, INumericInputState> {
  private inputRef = React.createRef<HTMLInputElement>();

  constructor(props: INumericInputProps) {
    super(props);
    this.state = {
      formattedValue: "",
      value: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  private get decimalSeparator(): string {
    return this.props.decimalSeparator || defaultOptions.decimalSeparator;
  }

  /**
   * Returns a escaped version of the decimal separator
   */
  private get escapedDecimalSeparator(): string {
    let separator = this.decimalSeparator;
    if (separator === ".") {
      separator = "\\.";
    }
    return separator;
  }

  private get thousandSeparator(): string {
    return this.props.thousandSeparator || defaultOptions.thousandSeparator;
  }

  private get escapedThousandSeparator(): string {
    let separator = this.thousandSeparator;
    if (separator === ".") {
      separator = "\\.";
    }
    return separator;
  }

  private get moneyMask(): string {
    return this.props.moneyMask || defaultOptions.moneyMask;
  }

  private get percent(): string {
    return defaultOptions.percent;
  }

  private get maxLength(): number {
    return this.props.maxLength || 15;
  }

  public componentDidMount(): void {
    this.setState({
      formattedValue: this.formatWithZeroes(
        `${this.props.value != null ? this.props.value : ""}`.replace(/\./g, this.decimalSeparator),
        this.props.decimalPrecision
      ),
      value: this.props.value,
    });
  }

  public componentDidUpdate(prevProps: INumericInputProps): void {
    const { value } = this.props;

    if (value != null && value !== prevProps.value && this.state.formattedValue !== value) {
      this.setState({
        formattedValue: this.formatWithZeroes(
          `${value != null ? value : ""}`.replace(/\./g, this.decimalSeparator),
          this.props.decimalPrecision
        ),
        value,
      });
    }
  }

  private get inputPattern() {
    const numericPattern = "^[-]?[0-9]*";
    const decimalPattern = `(${this.escapedDecimalSeparator}{1}[0-9]*)?`;
    const thousandSeparatorPattern = `^[-]?(\\d{1,3}(?:${this.escapedThousandSeparator}\\d{3})+|\\d+)`;

    let pattern = numericPattern;

    if (this.thousandSeparator != null) {
      pattern = thousandSeparatorPattern;
    }

    if (this.props.decimalPrecision > 0) {
      pattern += decimalPattern;
    }

    return pattern;
  }

  private get calculatedMaxLength() {
    let calculatedMaxLength = this.maxLength;

    if (this.maxLength) {
      const fullValue = "9".repeat(this.maxLength);
      calculatedMaxLength = this.calculateMaxLength(fullValue) + this.calculateThousandSeparatorLength(fullValue);
    }

    return calculatedMaxLength;
  }

  public render(): JSX.Element {
    const { props } = this;

    return (
      <div
        className={classnames("ni-numeric-input", { percent: props.percent, money: props.money })}
        data-percent={props.percent ? this.percent : ""}
        data-money={props.money ? this.moneyMask : ""}
      >
        <input
          className={classnames("ni-text-right", props.className)}
          disabled={props.disabled}
          autoFocus={props.autoFocus}
          name={props.name}
          style={this.props.style}
          maxLength={this.calculatedMaxLength}
          pattern={this.inputPattern}
          type="text"
          id={props.id}
          ref={this.inputRef}
          value={this.state.formattedValue != null ? this.state.formattedValue : ""}
          placeholder={props.placeholder}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeyPress={this.props.onKeyPress}
        />
      </div>
    );
  }

  private calculateThousandSeparatorLength(value: string): number {
    return this.thousandSeparator
      ? Math.trunc(value.split(this.decimalSeparator)[0].length / 3) -
          (value.split(this.decimalSeparator)[0].length % 3 > 0 ? 0 : 1)
      : 0;
  }

  private calculateMaxLength(value: string): number {
    const decimalNotationLength =
      this.props.decimalPrecision > 0 && this.props.decimalPrecision + this.decimalSeparator.length;
    const thousandSeparatorLength = this.calculateThousandSeparatorLength(value);
    return this.maxLength + decimalNotationLength - thousandSeparatorLength;
  }

  private onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.validity.valid) {
      const value = e.target.value;

      const integerPart = value.replace(new RegExp(this.escapedDecimalSeparator + ".+"), "");
      // const decimalPart = value.replace(new RegExp(".+" + this.escapedDecimalSeparator), "");

      if (integerPart.length <= this.maxLength || value.length <= (this.state.formattedValue as string).length) {
        this.setState({ formattedValue: value });
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      } else {
        e.target.value = this.state.formattedValue;
      }
    }
  }

  private onFocus(e: React.FocusEvent<HTMLInputElement>) {
    this.setState({
      formattedValue: e.target.value.replace(new RegExp(this.escapedThousandSeparator, "g"), ""),
    });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  private formatWithZeroes(val: string, decimalPlaces: number): string {
    let formattedValue = val;

    const thousandSeparatorRegex = /\B(?=(\d{3})+(?!\d))/g;
    const decimalSeparator = this.decimalSeparator;

    if (formattedValue?.length > this.maxLength) {
      formattedValue = formattedValue.substr(0, this.maxLength);
    }

    if (val !== "" && val !== null && decimalPlaces !== null && decimalPlaces > 0) {
      val = String(val);

      let paddingZeroes = "";
      const separatorPosition = val.indexOf(decimalSeparator);
      const hasSeparator = separatorPosition > 0;
      let missingPlaces;

      if (hasSeparator) {
        missingPlaces = decimalPlaces - val.substr(separatorPosition + 1).length;
      } else {
        missingPlaces = decimalPlaces - (separatorPosition + 1);
      }

      for (let i = 1; i <= missingPlaces; i++) {
        paddingZeroes += "0";
      }

      const partialFormattedValue = `${val}${hasSeparator ? "" : decimalSeparator}${paddingZeroes}`;

      formattedValue =
        partialFormattedValue.split(decimalSeparator)[0] +
        decimalSeparator +
        partialFormattedValue.split(decimalSeparator)[1].substr(0, decimalPlaces);
    }

    if (this.thousandSeparator) {
      formattedValue = formattedValue.replace(thousandSeparatorRegex, this.thousandSeparator);
    }

    return formattedValue;
  }

  private getReturnValue(baseValue: string) {
    let returnValue = null;
    if (this.props.stringValueOnBlur) {
      returnValue = baseValue;
    } else {
      returnValue = baseValue
        .replace(new RegExp(this.escapedThousandSeparator, "g"), "")
        .replace(this.escapedDecimalSeparator, ".");
    }

    return returnValue;
  }

  private onBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const { decimalPrecision } = this.props;
    let value = e?.target?.value;
    const formattedValue = this.formatWithZeroes(value, decimalPrecision);

    const unformattedValue = value
      ?.replace(new RegExp(this.escapedThousandSeparator, "g"), "")
      ?.replace(this.escapedDecimalSeparator, ".");

    if (value !== "" && unformattedValue && unformattedValue.length <= this.calculatedMaxLength) {
      value = unformattedValue;

      if (value.indexOf(`-0${this.decimalSeparator}`) >= 0) {
        // remove signal if values is greater than 0
        value = value.substr(1, value.length);
      }

      this.setState({ value: this.getReturnValue(value), formattedValue });
      e.target.value = value;
    }

    if (this.props.onBlur) {
      const isNumberAcceptable = value !== "" && value !== null && value.length <= 15;
      this.props.onBlur(
        e,
        isNumberAcceptable
          ? parseFloat(
              value
                .replace(new RegExp(this.escapedThousandSeparator, "g"), "")
                .replace(this.escapedDecimalSeparator, ".")
            )
          : value
      );
    }
  }
}

const defaultOptions = {
  decimalSeparator: ".",
  thousandSeparator: ",",
  moneyMask: "$",
  percent: "%",
};

export function setDefaultMoneyMask(moneyMask: string): void {
  defaultOptions.moneyMask = moneyMask;
}

export function setDefaultPercent(percent: string): void {
  defaultOptions.percent = percent;
}

export function setDefaultDecimalSeparator(decimalSeparator: string): void {
  defaultOptions.decimalSeparator = decimalSeparator;
}

export function setDefaultThousandSeparator(thousandSeparator: string): void {
  defaultOptions.thousandSeparator = thousandSeparator;
}

export default NumericInput;
