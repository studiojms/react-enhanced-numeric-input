[![Build Status](https://travis-ci.com/studiojms/react-enhanced-numeric-input.svg?branch=master)](https://travis-ci.com/studiojms/react-enhanced-numeric-input)

# react-enhanced-numeric-input

An enhanced Numeric Input made with React

Docs: [https://github.com/studiojms/react-enhanced-numeric-input](https://github.com/studiojms/react-enhanced-numeric-input)

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

| Property         | Default Value |
| :--------------- | :------------ |
| moneyMask        | \$            |
| percent          | %             |
| decimalSeparator | ,             |

### Example

```js
import { setDefaultMoneyMask, setDefaultPercent, setDefaultDecimalSeparator } from "react-enhanced-numeric-input";

setDefaultMoneyMask("US$");
setDefaultPercent("percent");
setDefaultDecimalSeparator(".");
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
| moneyMask         | string           | \$            |
