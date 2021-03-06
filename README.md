[![Build Status](https://travis-ci.com/studiojms/react-enhanced-numeric-input.svg?branch=master)](https://travis-ci.com/studiojms/react-enhanced-numeric-input)

[![Netlify Status](https://api.netlify.com/api/v1/badges/bdbe0b9d-146b-4f6a-bf5a-abdf3fa2c149/deploy-status)](https://app.netlify.com/sites/react-enhanced-numeric-input/deploys)

# react-enhanced-numeric-input

An enhanced Numeric Input made with React

Docs: [https://react-enhanced-numeric-input.netlify.app/](https://react-enhanced-numeric-input.netlify.app/)

## Install

To install the component, just type:

```sh
npm install react-enhanced-numeric-input
```

or

```sh
yarn add react-enhanced-numeric-input
```

## Using

To use it, you will need to import the component and use it like:

```js
import NumericInput from "react-enhanced-numeric-input";
```

```js
<NumericInput />
```

### Example

```js
<NumericInput decimalPrecision={2} value={50} />
```

# Styles

The new version includes some default styles to format the money and percent input.
To use it, it is necessary to import the styles in the project distribution pack.

## Example

```js
import "react-enhanced-numeric-input/dist/react-enhanced-numeric-input.css";
```

# Properties

It is possible to set some properties globally.

## Setting default properties

Some properties need to be set systemwide. To do so, it is necessary to import the function that defines it and set a new value.

### Default values

| Property          | Default Value |
| :---------------- | :------------ |
| moneyMask         | \$            |
| percent           | %             |
| decimalSeparator  | ,             |
| thousandSeparator |               |

### Example

```js
import {
  setDefaultMoneyMask,
  setDefaultPercent,
  setDefaultDecimalSeparator,
  setDefaultThousandSeparator,
} from "react-enhanced-numeric-input";

setDefaultMoneyMask("US$");
setDefaultPercent("percent");
setDefaultDecimalSeparator(".");
setDefaultThousandSeparator(",");
```

## Properties list

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
| thousandSeparator | string           |               |
| moneyMask         | string           | \$            |
