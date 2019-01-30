import * as classnames from "classnames";
import * as React from "react";

interface INumericInputProps {
  className?: string;
  decimalPrecision?: number | 0;
  disabled?: false;
  maxLength?: 20;
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
  percent?: boolean | false;
  money?: boolean | false;
  stringValueOnBlur?: boolean | false;
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

  public componentDidMount() {
    this.setState({
      formattedValue: this.formatWithZeroes(
        `${this.props.value || ""}`.replace(/\./g, ","),
        this.props.decimalPrecision
      ),
      value: this.props.value,
    });
  }

  public componentDidUpdate(prevProps: INumericInputProps) {
    const { value } = this.props;

    if (value !== prevProps.value && this.state.formattedValue !== value) {
      this.setState({
        formattedValue: this.formatWithZeroes(`${value || ""}`.replace(/\./g, ","), this.props.decimalPrecision),
        value,
      });
    }
  }

  public render() {
    const { props } = this;

    const numericPattern = "^[-]?[0-9]*";
    const decimalPattern = "^[-]?[0-9]*(,{1}[0-9]*)?";

    return (
      <div className="sv-input-group">
        <input
          className={classnames("sv-text-right", props.className)}
          disabled={props.disabled}
          name={props.name}
          style={this.props.style}
          maxLength={props.maxLength}
          pattern={props.decimalPrecision > 0 ? decimalPattern : numericPattern}
          type="text"
          id={props.id}
          ref={this.inputRef}
          value={this.state.formattedValue || ""}
          placeholder={props.placeholder}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.props.onFocus}
          onKeyPress={this.props.onKeyPress}
        />
        {this.renderButton()}
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
      const separator = ",";
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

      const parcialFormattedValue = `${val}${hasSeparator ? "" : separator}${paddingZeroes}`;

      formattedValue =
        parcialFormattedValue.split(separator)[0] +
        separator +
        parcialFormattedValue.split(separator)[1].substr(0, decimalPlaces);
    }

    return formattedValue;
  }

  private getReturnValue(baseValue: string) {
    let returnValue = null;
    if (this.props.stringValueOnBlur) {
      returnValue = `${baseValue}`;
    } else {
      returnValue = baseValue ? parseFloat(baseValue.replace(",", ".")) : null;
    }

    return returnValue;
  }

  private onBlur(e: React.ChangeEvent<HTMLInputElement>) {
    let valor = e.target.value;
    if (valor !== "") {
      const { decimalPrecision } = this.props;

      valor = this.formatWithZeroes(valor, decimalPrecision);

      if (valor.indexOf("-0,") >= 0) {
        // remove sinal se valor for 0
        valor = valor.substr(1, valor.length);
      }

      this.setState({ value: this.getReturnValue(valor), formattedValue: valor });
      e.target.value = valor;
    }

    this.props.onBlur && this.props.onBlur(e, valor ? parseFloat(valor.replace(",", ".")) : null);
  }

  private handleButtonClick(input: HTMLInputElement) {
    input.focus();
    input.setSelectionRange(0, input.size);
  }

  private renderButton() {
    let button = null;

    if (this.props.money || this.props.percent) {
      let icon = this.props.money ? "R$" : "";
      if (this.props.percent) {
        icon = "%";
      }
      button = (
        <button
          type="button"
          className="sv-button default sv-fw-normal"
          onClick={() => this.handleButtonClick(this.inputRef.current)}
        >
          {icon}
        </button>
      );
    }

    return button;
  }
}

export default NumericInput;
