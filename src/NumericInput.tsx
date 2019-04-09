import * as classnames from "classnames";
import * as React from "react";

import "./assets/styles.css";

interface INumericInputProps {
  className?: string;
  decimalPrecision?: number;
  decimalSeparator?: string;
  disabled?: false;
  maxLength?: number;
  id?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
  onBlur?: (e: React.ChangeEvent, value: any) => void;
  onClick?: () => void;
  onFocus?: () => void;
  onKeyPress?: () => void;
  style?: Record<string, any>;
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
  }

  private get decimalSeparator(): string {
    return this.props.decimalSeparator || defaultOptions.decimalSeparator;
  }

  private get moneyMask(): string {
    return this.props.moneyMask || defaultOptions.moneyMask;
  }

  private get percent(): string {
    return defaultOptions.percent;
  }

  public componentDidMount() {
    this.setState({
      formattedValue: this.formatWithZeroes(
        `${this.props.value != null ? this.props.value : ""}`.replace(/\./g, this.decimalSeparator),
        this.props.decimalPrecision
      ),
      value: this.props.value,
    });
  }

  public componentDidUpdate(prevProps: INumericInputProps) {
    const { value } = this.props;

    if (value !== prevProps.value && this.state.formattedValue !== value) {
      this.setState({
        formattedValue: this.formatWithZeroes(
          `${value != null ? value : ""}`.replace(/\./g, this.decimalSeparator),
          this.props.decimalPrecision
        ),
        value,
      });
    }
  }

  public render() {
    const { props } = this;

    const numericPattern = "^[-]?[0-9]*";
    const decimalPattern = `^[-]?[0-9]*(${this.decimalSeparator}{1}[0-9]*)?`;

    return (
      <div className="ni-numeric-input">
        {props.money && <span className="ni-ma--5 ni-ml--0 ni-cursor--default">{this.moneyMask}</span>}
        <input
          className={classnames("ni-text-right", props.className, {
            "ni-input-percent": props.percent,
            "ni-input-money": props.money,
          })}
          disabled={props.disabled}
          name={props.name}
          style={this.props.style}
          maxLength={props.maxLength || 15}
          pattern={props.decimalPrecision > 0 ? decimalPattern : numericPattern}
          type="text"
          id={props.id}
          ref={this.inputRef}
          value={this.state.formattedValue != null ? this.state.formattedValue : ""}
          placeholder={props.placeholder}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.props.onFocus}
          onKeyPress={this.props.onKeyPress}
        />
        {props.percent && <span className="ni-ma--5 ni-cursor--default">{this.percent}</span>}
      </div>
    );
  }

  private onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.validity.valid) {
      const value = e.target.value;
      this.setState({ formattedValue: value });
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }

  private formatWithZeroes(val: string, decimalPlaces: number): string {
    let formattedValue = val;
    if (val !== "" && val !== null && decimalPlaces !== null && decimalPlaces > 0) {
      val = String(val);

      let paddingZeroes = "";
      const separator = this.decimalSeparator;
      const separatorPosition = val.indexOf(separator);
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

      const partialFormattedValue = `${val}${hasSeparator ? "" : separator}${paddingZeroes}`;

      formattedValue =
        partialFormattedValue.split(separator)[0] +
        separator +
        partialFormattedValue.split(separator)[1].substr(0, decimalPlaces);
    }

    return formattedValue;
  }

  private getReturnValue(baseValue: string) {
    let returnValue = null;
    if (this.props.stringValueOnBlur) {
      returnValue = `${baseValue}`;
    } else {
      returnValue = baseValue ? parseFloat(baseValue.replace(this.decimalSeparator, ".")) : null;
    }

    return returnValue;
  }

  private onBlur(e: React.ChangeEvent<HTMLInputElement>) {
    let valor = e.target.value;
    if (valor !== "") {
      const { decimalPrecision } = this.props;

      valor = this.formatWithZeroes(valor, decimalPrecision);

      if (valor.indexOf(`-0${this.decimalSeparator}`) >= 0) {
        // remove sinal se valor for 0
        valor = valor.substr(1, valor.length);
      }

      this.setState({ value: this.getReturnValue(valor), formattedValue: valor });
      e.target.value = valor;
    }

    if (this.props.onBlur) {
      this.props.onBlur(e, valor ? parseFloat(valor.replace(this.decimalSeparator, ".")) : null);
    }
  }
}

const defaultOptions = {
  decimalSeparator: ",",
  moneyMask: "$",
  percent: "%",
};

export function setDefaultMoneyMask(moneyMask: string) {
  defaultOptions.moneyMask = moneyMask;
}

export function setDefaultPercent(percent: string) {
  defaultOptions.percent = percent;
}

export function setDefaultDecimalSeparator(decimalSeparator: string) {
  defaultOptions.decimalSeparator = decimalSeparator;
}

export default NumericInput;
