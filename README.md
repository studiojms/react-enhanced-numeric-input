# react-enhanced-numeric-input

An enhanced Numeric Input made with React

To use it, you will need to import the component and use it like:

```js
<NumericInput />
```

## Example

```js
<NumericInput decimalPrecision={2} value={50} />
```

| Property          | Type             | Default Value |
| :---------------- | :--------------- | :------------ |
| className         | string           | -             |
| decimalPrecision  | number           | 0             |
| disabled          | boolean          | false         |
| maxLength         | number           | 20            |
| id                | string           | -             |
| name              | string           | -             |
| placeholder       | string           | -             |
| onChange          | function         | -             |
| onBlur            | function         | -             |
| onClick           | function         | -             |
| onFocus           | function         | -             |
| onKeyPress        | function         | -             |
| style             | string           | -             |
| value             | string or number | -             |
| percent           | boolean          | false         |
| money             | boolean          | false         |
| stringValueOnBlur | boolean          | false         |
| decimalSeparator  | string           | ,             |
| moneyMask         | string           | \$            |
