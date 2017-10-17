'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _com = require('./../coms/com.js');

var _com2 = _interopRequireDefault(_com);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logs = function (_wepy$page) {
  _inherits(Logs, _wepy$page);

  function Logs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Logs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Logs.__proto__ || Object.getPrototypeOf(Logs)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      com: _com2.default
    }, _this.data = {
      foo: 'foo defined by logs'
    }, _this.config = {}, _this.mixins = [_test2.default], _this.methods = {
      tap: function tap() {
        var _this2 = this;

        console.log('tap form logs page');
        setTimeout(function () {
          _this2.foo = 'change foo';_this2.$apply();
        }, 200);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Logs, [{
    key: 'onShow',
    value: function onShow() {
      console.log(this.foo); // foo defined by index.
      console.log(this.bar); // foo defined by testMix.
    }
  }]);

  return Logs;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Logs , 'pages/logs'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MuanMiXSwibmFtZXMiOlsiTG9ncyIsImNvbXBvbmVudHMiLCJjb20iLCJkYXRhIiwiZm9vIiwiY29uZmlnIiwibWl4aW5zIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwiYmFyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxVLEdBQWE7QUFDVEM7QUFEUyxLLFFBR2JDLEksR0FBTztBQUNIQyxXQUFLO0FBREYsSyxRQUdQQyxNLEdBQVMsRSxRQUNUQyxNLEdBQVMsZ0IsUUFDVEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFBQTs7QUFDRkMsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBQyxtQkFBVyxZQUFNO0FBQUMsaUJBQUtQLEdBQUwsR0FBVyxZQUFYLENBQXlCLE9BQUtRLE1BQUw7QUFBZSxTQUExRCxFQUE0RCxHQUE1RDtBQUNIO0FBSk8sSzs7Ozs7NkJBTUQ7QUFDUEgsY0FBUUMsR0FBUixDQUFZLEtBQUtOLEdBQWpCLEVBRE8sQ0FDZ0I7QUFDdkJLLGNBQVFDLEdBQVIsQ0FBWSxLQUFLRyxHQUFqQixFQUZPLENBRWdCO0FBQ3hCOzs7O0VBbEIrQixlQUFLQyxJOztrQkFBbEJkLEkiLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgVGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xyXG5pbXBvcnQgQ29tIGZyb20gJy4uL2NvbXMvY29tJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgICBjb206IENvbVxyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgICBmb286ICdmb28gZGVmaW5lZCBieSBsb2dzJ1xyXG4gIH07XHJcbiAgY29uZmlnID0ge31cclxuICBtaXhpbnMgPSBbVGVzdE1peGluXTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgdGFwKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0YXAgZm9ybSBsb2dzIHBhZ2UnKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuZm9vID0gJ2NoYW5nZSBmb28nOyB0aGlzLiRhcHBseSgpO30sIDIwMClcclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5mb28pOyAvLyBmb28gZGVmaW5lZCBieSBpbmRleC5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFyKTsgLy8gZm9vIGRlZmluZWQgYnkgdGVzdE1peC5cclxuICB9XHJcbn1cclxuIl19