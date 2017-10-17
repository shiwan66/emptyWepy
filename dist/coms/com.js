'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Com = function (_wepy$component) {
  _inherits(Com, _wepy$component);

  function Com() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Com);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Com.__proto__ || Object.getPrototypeOf(Com)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.methods = {
      bindTap: function bindTap() {
        console.log('into click');
        this.$emit('some-event', 1, 2, 3, 4);
        this.$emit('event-emit');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Com, [{
    key: 'hello',
    value: function hello() {
      console.log('com hello');
    }
  }]);

  return Com;
}(_wepy2.default.component);

exports.default = Com;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbS5qcyJdLCJuYW1lcyI6WyJDb20iLCJkYXRhIiwibWV0aG9kcyIsImJpbmRUYXAiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDQSxhQUFLQyxLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQztBQUNBLGFBQUtBLEtBQUwsQ0FBVyxZQUFYO0FBQ0Q7QUFMTyxLLFFBT1ZDLE0sR0FBUyxFOzs7Ozs0QkFFRDtBQUNOSCxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNEOzs7O0VBYjhCLGVBQUtHLFM7O2tCQUFqQlIsRyIsImZpbGUiOiJjb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7fTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgYmluZFRhcCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2ludG8gY2xpY2snKVxyXG4gICAgICB0aGlzLiRlbWl0KCdzb21lLWV2ZW50JywgMSwgMiwgMywgNCk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2V2ZW50LWVtaXQnKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgZXZlbnRzID0ge1xyXG4gIH07XHJcbiAgaGVsbG8oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY29tIGhlbGxvJylcclxuICB9XHJcbn1cclxuIl19