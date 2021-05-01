const _extends =
  Object.assign ||
  function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
const _createClass = (function () {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
const _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function (obj) {
        return typeof obj;
      }
    : function (obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };
const _react = require('react');

const _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties(obj, keys) {
  const target = {};
  for (const i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      `Super expression must either be null or a function, not ${typeof superClass}`
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
const SPACEBAR = 32;
const isStyleObject = function isStyleObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};
const SingleOtpInput = (function (_PureComponent) {
  _inherits(SingleOtpInput, _PureComponent);
  function SingleOtpInput() {
    let _ref;
    let _temp;
    let _this;
    let _ret;
    _classCallCheck(this, SingleOtpInput);
    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    return (
      (_ret =
        ((_temp =
          ((_this = _possibleConstructorReturn(
            this,
            (_ref =
              SingleOtpInput.__proto__ ||
              Object.getPrototypeOf(SingleOtpInput)).call.apply(
              _ref,
              [this].concat(args)
            )
          )),
          _this)),
        (_this.getClasses = function () {
          for (
            var _len2 = arguments.length, classes = Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            classes[_key2] = arguments[_key2];
          }
          return classes
            .filter(function (c) {
              return !isStyleObject(c) && c !== false;
            })
            .join(' ');
        }),
        _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }
  _createClass(SingleOtpInput, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const { input } = this;
        const _props = this.props;
        const { focus } = _props;
        const { shouldAutoFocus } = _props;
        if (input && focus && shouldAutoFocus) {
          input.focus();
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        const { input } = this;
        const { focus } = this.props;
        if (prevProps.focus !== focus && input && focus) {
          input.focus();
          input.select();
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        const _this2 = this;
        const _props2 = this.props;
        const { separator } = _props2;
        const { isLastChild } = _props2;
        const { inputStyle } = _props2;
        const { focus } = _props2;
        const { isDisabled } = _props2;
        const { hasErrored } = _props2;
        const { errorStyle } = _props2;
        const { focusStyle } = _props2;
        const { disabledStyle } = _props2;
        const { shouldAutoFocus } = _props2;
        const { isInputNum } = _props2;
        const { value } = _props2;
        const rest = _objectWithoutProperties(_props2, [
          'separator',
          'isLastChild',
          'inputStyle',
          'focus',
          'isDisabled',
          'hasErrored',
          'errorStyle',
          'focusStyle',
          'disabledStyle',
          'shouldAutoFocus',
          'isInputNum',
          'value',
        ]);
        return _react2.default.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center' } },
          _react2.default.createElement('input', {
            autoComplete: 'off',
            style: {
              textAlign: 'center',
              ...(isStyleObject(inputStyle) && inputStyle),
              ...(focus && isStyleObject(focusStyle) && focusStyle),
              ...(isDisabled && isStyleObject(disabledStyle) && disabledStyle),
              ...(hasErrored && isStyleObject(errorStyle) && errorStyle),
            },
            className: this.getClasses(
              inputStyle,
              focus && focusStyle,
              isDisabled && disabledStyle,
              hasErrored && errorStyle
            ),
            type: isInputNum ? 'tel' : 'text',
            maxLength: '1',
            ref: function ref(input) {
              _this2.input = input;
            },
            disabled: isDisabled,
            value: value || '',
            ...rest,
          }),
          !isLastChild && separator
        );
      },
    },
  ]);
  return SingleOtpInput;
})(_react.PureComponent);
const OtpInput = (function (_Component) {
  _inherits(OtpInput, _Component);
  function OtpInput() {
    let _ref2;
    let _temp2;
    let _this3;
    let _ret2;
    _classCallCheck(this, OtpInput);
    for (
      var _len3 = arguments.length, args = Array(_len3), _key3 = 0;
      _key3 < _len3;
      _key3++
    ) {
      args[_key3] = arguments[_key3];
    }
    return (
      (_ret2 =
        ((_temp2 =
          ((_this3 = _possibleConstructorReturn(
            this,
            (_ref2 =
              OtpInput.__proto__ || Object.getPrototypeOf(OtpInput)).call.apply(
              _ref2,
              [this].concat(args)
            )
          )),
          _this3)),
        (_this3.state = { activeInput: 0 }),
        (_this3.getOtpValue = function () {
          return _this3.props.value
            ? _this3.props.value.toString().split('')
            : [];
        }),
        (_this3.handleOtpChange = function (otp) {
          const { onChange } = _this3.props;
          const otpValue = otp.join('');
          onChange(otpValue);
        }),
        (_this3.isInputValueValid = function (value) {
          const isTypeValid = _this3.props.isInputNum
            ? !isNaN(parseInt(value, 10))
            : typeof value === 'string';
          return isTypeValid && value.trim().length === 1;
        }),
        (_this3.focusInput = function (input) {
          const { numInputs } = _this3.props;
          const activeInput = Math.max(Math.min(numInputs - 1, input), 0);
          _this3.setState({ activeInput });
        }),
        (_this3.focusNextInput = function () {
          const { activeInput } = _this3.state;
          _this3.focusInput(activeInput + 1);
        }),
        (_this3.focusPrevInput = function () {
          const { activeInput } = _this3.state;
          _this3.focusInput(activeInput - 1);
        }),
        (_this3.changeCodeAtFocus = function (value) {
          const { activeInput } = _this3.state;
          const otp = _this3.getOtpValue();
          otp[activeInput] = value[0];
          _this3.handleOtpChange(otp);
        }),
        (_this3.handleOnPaste = function (e) {
          e.preventDefault();
          const { numInputs } = _this3.props;
          const { activeInput } = _this3.state;
          const otp = _this3.getOtpValue();
          const pastedData = e.clipboardData
            .getData('text/plain')
            .slice(0, numInputs - activeInput)
            .split('');
          for (let pos = 0; pos < numInputs; ++pos) {
            if (pos >= activeInput && pastedData.length > 0) {
              otp[pos] = pastedData.shift();
            }
          }
          _this3.handleOtpChange(otp);
        }),
        (_this3.handleOnChange = function (e) {
          const { value } = e.target;
          if (_this3.isInputValueValid(value)) {
            _this3.changeCodeAtFocus(value);
          }
        }),
        (_this3.handleOnKeyDown = function (e) {
          if (e.keyCode === BACKSPACE || e.key === 'Backspace') {
            e.preventDefault();
            _this3.changeCodeAtFocus('');
            _this3.focusPrevInput();
          } else if (e.keyCode === DELETE || e.key === 'Delete') {
            e.preventDefault();
            _this3.changeCodeAtFocus('');
          } else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
            e.preventDefault();
            _this3.focusPrevInput();
          } else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
            e.preventDefault();
            _this3.focusNextInput();
          } else if (
            e.keyCode === SPACEBAR ||
            e.key === ' ' ||
            e.key === 'Spacebar' ||
            e.key === 'Space'
          ) {
            e.preventDefault();
          }
        }),
        (_this3.handleOnInput = function (e) {
          if (_this3.isInputValueValid(e.target.value)) {
            _this3.focusNextInput();
          } else if (!_this3.props.isInputNum) {
            const { nativeEvent } = e;
            if (
              nativeEvent.data === null &&
              nativeEvent.inputType === 'deleteContentBackward'
            ) {
              e.preventDefault();
              _this3.changeCodeAtFocus('');
              _this3.focusPrevInput();
            }
          }
        }),
        (_this3.renderInputs = function () {
          const { activeInput } = _this3.state;
          const _this3$props = _this3.props;
          const { numInputs } = _this3$props;
          const { inputStyle } = _this3$props;
          const { focusStyle } = _this3$props;
          const { separator } = _this3$props;
          const { isDisabled } = _this3$props;
          const { disabledStyle } = _this3$props;
          const { hasErrored } = _this3$props;
          const { errorStyle } = _this3$props;
          const { shouldAutoFocus } = _this3$props;
          const { isInputNum } = _this3$props;
          const otp = _this3.getOtpValue();
          const inputs = [];
          const _loop = function _loop(i) {
            inputs.push(
              _react2.default.createElement(SingleOtpInput, {
                key: i,
                focus: activeInput === i,
                value: otp && otp[i],
                onChange: _this3.handleOnChange,
                onKeyDown: _this3.handleOnKeyDown,
                onInput: _this3.handleOnInput,
                onPaste: _this3.handleOnPaste,
                onFocus: function onFocus(e) {
                  _this3.setState({ activeInput: i });
                  e.target.select();
                },
                onBlur: function onBlur() {
                  return _this3.setState({ activeInput: -1 });
                },
                separator,
                inputStyle,
                focusStyle,
                isLastChild: i === numInputs - 1,
                isDisabled,
                disabledStyle,
                hasErrored,
                errorStyle,
                shouldAutoFocus,
                isInputNum,
              })
            );
          };
          for (let i = 0; i < numInputs; i++) {
            _loop(i);
          }
          return inputs;
        }),
        _temp2)),
      _possibleConstructorReturn(_this3, _ret2)
    );
  }
  _createClass(OtpInput, [
    {
      key: 'render',
      value: function render() {
        const { containerStyle } = this.props;
        return _react2.default.createElement(
          'div',
          {
            style: {
              display: 'flex',
              ...(isStyleObject(containerStyle) && containerStyle),
            },
            className: !isStyleObject(containerStyle) ? containerStyle : '',
          },
          this.renderInputs()
        );
      },
    },
  ]);
  return OtpInput;
})(_react.Component);
OtpInput.defaultProps = {
  numInputs: 4,
  onChange: function onChange(otp) {
    return console.log(otp);
  },
  isDisabled: false,
  shouldAutoFocus: false,
  value: '',
};
export default OtpInput;
