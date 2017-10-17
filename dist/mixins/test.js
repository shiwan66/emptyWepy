'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestMixin = function (_wepy$mixin) {
    _inherits(TestMixin, _wepy$mixin);

    function TestMixin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TestMixin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestMixin.__proto__ || Object.getPrototypeOf(TestMixin)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    return TestMixin;
}(_wepy2.default.mixin);

var _initialiseProps = function _initialiseProps() {
    this.data = {
        foo: 'foo defined by page',
        bar: 'bar defined by testMixin'
    };
    this.events = {
        'event-emit': function eventEmit() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log('event-emit.name: ' + $event.name);
        }
    };
    this.methods = {
        tap: function tap() {
            console.log('mix tap');
        }
    };
};

exports.default = TestMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiVGVzdE1peGluIiwibWl4aW4iLCJkYXRhIiwiZm9vIiwiYmFyIiwiZXZlbnRzIiwiJGV2ZW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJtZXRob2RzIiwidGFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBa0IsZUFBS0MsSzs7O1NBQ3hDQyxJLEdBQU87QUFDSEMsYUFBSyxxQkFERjtBQUVIQyxhQUFLO0FBRkYsSztTQUlQQyxNLEdBQVM7QUFDTCxzQkFBYyxxQkFBYTtBQUFBOztBQUN2QixnQkFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFhLENBQTNCLDJEQUFKO0FBQ0FDLG9CQUFRQyxHQUFSLHVCQUFnQ0gsT0FBT0ksSUFBdkM7QUFDSDtBQUpJLEs7U0FNVEMsTyxHQUFVO0FBQ05DLFdBRE0saUJBQ0E7QUFDRkosb0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0g7QUFISyxLOzs7a0JBWE9ULFMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBmb286ICdmb28gZGVmaW5lZCBieSBwYWdlJyxcclxuICAgICAgICBiYXI6ICdiYXIgZGVmaW5lZCBieSB0ZXN0TWl4aW4nXHJcbiAgICB9O1xyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAgICdldmVudC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLTFdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZXZlbnQtZW1pdC5uYW1lOiAkeyRldmVudC5uYW1lfWApXHJcbiAgICAgICAgfSBcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHRhcCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21peCB0YXAnKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iXX0=