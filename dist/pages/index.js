'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _child = require('./../coms/child.js');

var _child2 = _interopRequireDefault(_child);

var _com = require('./../coms/com.js');

var _com2 = _interopRequireDefault(_com);

var _panel = require('./../coms/panel.js');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.data = {
      parentTitle: 'p-title',
      list: [{ id: 1, title: 'title1' }, { id: 2, title: 'title2' }]
    }, _this.$props = { "child": { "xmlns:v-bind": "", "v-bind:title.once": "parentTitle", "v-bind:syncTitle.sync": "parentTitle", "v-bind:twoWayTitle.once": "parentTitle" } }, _this.$events = {}, _this.components = {
      child: _child2.default,
      com: _com2.default,
      panel: _panel2.default
    }, _this.methods = {
      bindTap: function bindTap() {
        this.$broadcast('broadcast-event', 1, 2, 3, 4);
      }
    }, _this.events = {
      'some-event': function someEvent(p1, p2, p3, p4, $event) {
        console.log(_this.name + ' receive ' + $event.name + ' from ' + $event.source.name + ' json ' + Object.keys($event) + '\n          active: ' + $event.active + '\n          name: ' + $event.name + '\n          source: ' + $event.source + ' => ' + Object.keys($event.source) + '\n          type: ' + $event.type);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwYXJlbnRUaXRsZSIsImxpc3QiLCJpZCIsInRpdGxlIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjaGlsZCIsImNvbSIsInBhbmVsIiwibWV0aG9kcyIsImJpbmRUYXAiLCIkYnJvYWRjYXN0IiwiZXZlbnRzIiwicDEiLCJwMiIsInAzIiwicDQiLCIkZXZlbnQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJhY3RpdmUiLCJ0eXBlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsU0FEUjtBQUVMQyxZQUFNLENBQUMsRUFBQ0MsSUFBSSxDQUFMLEVBQVFDLE9BQU8sUUFBZixFQUFELEVBQTJCLEVBQUNELElBQUksQ0FBTCxFQUFRQyxPQUFPLFFBQWYsRUFBM0I7QUFGRCxLLFFBSVJDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsYUFBdkMsRUFBcUQseUJBQXdCLGFBQTdFLEVBQTJGLDJCQUEwQixhQUFySCxFQUFULEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLDRCQURRO0FBRVJDLHdCQUZRO0FBR1JDO0FBSFEsSyxRQUtWQyxPLEdBQVM7QUFDUEMsYUFETyxxQkFDRztBQUNSLGFBQUtDLFVBQUwsQ0FBZ0IsaUJBQWhCLEVBQW1DLENBQW5DLEVBQXNDLENBQXRDLEVBQXlDLENBQXpDLEVBQTRDLENBQTVDO0FBQ0Q7QUFITSxLLFFBS1RDLE0sR0FBUztBQUNMLG9CQUFjLG1CQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQWlCQyxNQUFqQixFQUE0QjtBQUN4Q0MsZ0JBQVFDLEdBQVIsQ0FBZSxNQUFLQyxJQUFwQixpQkFBb0NILE9BQU9HLElBQTNDLGNBQXdESCxPQUFPSSxNQUFQLENBQWNELElBQXRFLGNBQW1GRSxPQUFPQyxJQUFQLENBQVlOLE1BQVosQ0FBbkYsNEJBQ1VBLE9BQU9PLE1BRGpCLDBCQUVRUCxPQUFPRyxJQUZmLDRCQUdVSCxPQUFPSSxNQUhqQixZQUc4QkMsT0FBT0MsSUFBUCxDQUFZTixPQUFPSSxNQUFuQixDQUg5QiwwQkFJUUosT0FBT1EsSUFKZjtBQUtEO0FBUEksSzs7Ozs7NkJBU0E7QUFDUFAsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQS9CZ0MsZUFBS08sSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IENoaWxkIGZyb20gJy4uL2NvbXMvY2hpbGQnXHJcbiAgaW1wb3J0IENvbSBmcm9tICcuLi9jb21zL2NvbSdcclxuICBpbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcy9wYW5lbCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBhcmVudFRpdGxlOiAncC10aXRsZScsXHJcbiAgICAgIGxpc3Q6IFt7aWQ6IDEsIHRpdGxlOiAndGl0bGUxJ30sIHtpZDogMiwgdGl0bGU6ICd0aXRsZTInfV1cclxuICAgIH07XHJcbiAgICRwcm9wcyA9IHtcImNoaWxkXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJwYXJlbnRUaXRsZVwiLFwidi1iaW5kOnN5bmNUaXRsZS5zeW5jXCI6XCJwYXJlbnRUaXRsZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcInBhcmVudFRpdGxlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgY2hpbGQ6IENoaWxkLFxyXG4gICAgICBjb206IENvbSxcclxuICAgICAgcGFuZWw6IFBhbmVsXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcz0ge1xyXG4gICAgICBiaW5kVGFwKCkge1xyXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnYnJvYWRjYXN0LWV2ZW50JywgMSwgMiwgMywgNClcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgICAnc29tZS1ldmVudCc6IChwMSwgcDIsIHAzLCBwNCwgJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UubmFtZX0ganNvbiAke09iamVjdC5rZXlzKCRldmVudCl9XHJcbiAgICAgICAgICBhY3RpdmU6ICR7JGV2ZW50LmFjdGl2ZX1cclxuICAgICAgICAgIG5hbWU6ICR7JGV2ZW50Lm5hbWV9XHJcbiAgICAgICAgICBzb3VyY2U6ICR7JGV2ZW50LnNvdXJjZX0gPT4gJHtPYmplY3Qua2V5cygkZXZlbnQuc291cmNlKX1cclxuICAgICAgICAgIHR5cGU6ICR7JGV2ZW50LnR5cGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcclxuICAgIH1cclxuICB9XHJcbiJdfQ==