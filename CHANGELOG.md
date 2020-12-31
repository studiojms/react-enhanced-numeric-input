# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.4] - 2020-12-31

### Changed

- Fixed formatting issues related to thousand separator applied on decimal places.

## [1.2.3] - 2020-12-09

### Changed

- Fixed `onBlur` formatting issues - the value was twice unformatted, causing awkward behavior.

## [1.2.2] - 2020-12-01

### Changed

- Fixed `onChange` limits when working with maxLength.

## [1.2.1] - 2020-12-01

### Changed

- Fixed NumericInput behavior when limiting values with `maxLength`.

## [1.2.0] - 2020-12-01

### Changed

- Updated the way `maxLength` attribute works, being valid only for the digits, not the thousand separator. This way, if the maxLength is set to `8` (with `decimalPrecision=2`), the max allowed value will be `99999,99`.

## [1.1.1] - 2020-11-09

### Changed

- Fixed regex error with firefox 68.7.0esr

## [1.1.0] - 2020-05-12

### Added

- Support for thousand separators.

### Changed

- Implemented default behavior of onFocus method, always cleaning thousand separators for edit
- Updated dependencies

## [1.0.14] - 2019-11-05

### Added

- Docs with docz

### Changed

- Set default maxLength to be 15 instead of 20 characters
- Fix problems with decimal places #15
