'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _com = require('./com.js');

var _com2 = _interopRequireDefault(_com);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Child = function (_wepy$component) {
  _inherits(Child, _wepy$component);

  function Child() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Child);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Child.__proto__ || Object.getPrototypeOf(Child)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Child, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.title); // p-title
      console.log(this.syncTitle); // p-title
      console.log(this.twoWayTitle); // 50

      this.title = 'c-title';
      console.log(this.$parent.parentTitle); // p-title.
      this.twoWayTitle = 60;
      console.log(this.syncTitle);
      console.log(this.$parent.parentTitle); // 60.  --- twoWay为true时，子组件props修改会改变父组件对应的值
      this.$parent.parentTitle = 'p-title-changed';
      console.log(this.title); // 'p-title';
      console.log(this.syncTitle); // 'p-title-changed' --- 有sync属性的props，当父组件改变时，会影响子组件的值。
    }
  }]);

  return Child;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {
    text: 'hello child'
  };
  this.props = {
    title: String,
    syncTitle: {
      type: String,
      default: 'null'
    },
    twoWayTitle: {
      type: Number,
      default: 50,
      twoWay: true
    }
  };
  this.components = {
    com: _com2.default
  };
  this.events = {
    'broadcast-event': function broadcastEvent() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.name + ' receive ' + $event.name + ' from ' + $event.source.name + ' json ' + Object.keys($event) + '\n      active: ' + $event.active + '\n      name: ' + $event.name + '\n      source: ' + $event.source + ' => ' + Object.keys($event.source) + '\n      type: ' + $event.type);
    }
  };
  this.methods = {
    bindTapInvoke: function bindTapInvoke() {
      this.$invoke('com', 'hello');
    }
  };
  this.config = {};
};

exports.default = Child;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmpzIl0sIm5hbWVzIjpbIkNoaWxkIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwic3luY1RpdGxlIiwidHdvV2F5VGl0bGUiLCIkcGFyZW50IiwicGFyZW50VGl0bGUiLCJjb21wb25lbnQiLCJkYXRhIiwidGV4dCIsInByb3BzIiwiU3RyaW5nIiwidHlwZSIsImRlZmF1bHQiLCJOdW1iZXIiLCJ0d29XYXkiLCJjb21wb25lbnRzIiwiY29tIiwiZXZlbnRzIiwiJGV2ZW50IiwibGVuZ3RoIiwibmFtZSIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJhY3RpdmUiLCJtZXRob2RzIiwiYmluZFRhcEludm9rZSIsIiRpbnZva2UiLCJjb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW1DVjtBQUNQQyxjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBakIsRUFETyxDQUNrQjtBQUN6QkYsY0FBUUMsR0FBUixDQUFZLEtBQUtFLFNBQWpCLEVBRk8sQ0FFc0I7QUFDN0JILGNBQVFDLEdBQVIsQ0FBWSxLQUFLRyxXQUFqQixFQUhPLENBR3dCOztBQUUvQixXQUFLRixLQUFMLEdBQWEsU0FBYjtBQUNBRixjQUFRQyxHQUFSLENBQVksS0FBS0ksT0FBTCxDQUFhQyxXQUF6QixFQU5PLENBTWdDO0FBQ3ZDLFdBQUtGLFdBQUwsR0FBbUIsRUFBbkI7QUFDQUosY0FBUUMsR0FBUixDQUFZLEtBQUtFLFNBQWpCO0FBQ0FILGNBQVFDLEdBQVIsQ0FBWSxLQUFLSSxPQUFMLENBQWFDLFdBQXpCLEVBVE8sQ0FTZ0M7QUFDdkMsV0FBS0QsT0FBTCxDQUFhQyxXQUFiLEdBQTJCLGlCQUEzQjtBQUNBTixjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBakIsRUFYTyxDQVdrQjtBQUN6QkYsY0FBUUMsR0FBUixDQUFZLEtBQUtFLFNBQWpCLEVBWk8sQ0FZc0I7QUFDOUI7Ozs7RUFoRGdDLGVBQUtJLFM7Ozs7O09BQ3RDQyxJLEdBQU87QUFDTEMsVUFBTTtBQURELEc7T0FHUEMsSyxHQUFRO0FBQ05SLFdBQU9TLE1BREQ7QUFFTlIsZUFBVztBQUNUUyxZQUFNRCxNQURHO0FBRVRFLGVBQVM7QUFGQSxLQUZMO0FBTU5ULGlCQUFhO0FBQ1hRLFlBQU1FLE1BREs7QUFFWEQsZUFBUyxFQUZFO0FBR1hFLGNBQVE7QUFIRztBQU5QLEc7T0FZUkMsVSxHQUFhO0FBQ1hDO0FBRFcsRztPQUdiQyxNLEdBQVM7QUFDUCx1QkFBbUIsMEJBQWE7QUFBQTs7QUFDOUIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFZLENBQTFCLDJEQUFKO0FBQ0FwQixjQUFRQyxHQUFSLENBQWUsT0FBS29CLElBQXBCLGlCQUFvQ0YsT0FBT0UsSUFBM0MsY0FBd0RGLE9BQU9HLE1BQVAsQ0FBY0QsSUFBdEUsY0FBbUZFLE9BQU9DLElBQVAsQ0FBWUwsTUFBWixDQUFuRix3QkFDVUEsT0FBT00sTUFEakIsc0JBRVFOLE9BQU9FLElBRmYsd0JBR1VGLE9BQU9HLE1BSGpCLFlBRzhCQyxPQUFPQyxJQUFQLENBQVlMLE9BQU9HLE1BQW5CLENBSDlCLHNCQUlRSCxPQUFPUCxJQUpmO0FBS0Q7QUFSTSxHO09BVVRjLE8sR0FBVTtBQUNOQyxpQkFETSwyQkFDVTtBQUNkLFdBQUtDLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLE9BQXBCO0FBQ0Q7QUFISyxHO09BS1ZDLE0sR0FBUyxFOzs7a0JBbENVOUIsSyIsImZpbGUiOiJjaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgQ29tIGZyb20gJy4vY29tJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBkYXRhID0ge1xyXG4gICAgdGV4dDogJ2hlbGxvIGNoaWxkJ1xyXG4gIH1cclxuICBwcm9wcyA9IHtcclxuICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICBzeW5jVGl0bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnbnVsbCdcclxuICAgIH0sXHJcbiAgICB0d29XYXlUaXRsZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDUwLFxyXG4gICAgICB0d29XYXk6IHRydWVcclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGNvbTogQ29tXHJcbiAgfVxyXG4gIGV2ZW50cyA9IHtcclxuICAgICdicm9hZGNhc3QtZXZlbnQnOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aC0xXTtcclxuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLm5hbWV9IGpzb24gJHtPYmplY3Qua2V5cygkZXZlbnQpfVxyXG4gICAgICBhY3RpdmU6ICR7JGV2ZW50LmFjdGl2ZX1cclxuICAgICAgbmFtZTogJHskZXZlbnQubmFtZX1cclxuICAgICAgc291cmNlOiAkeyRldmVudC5zb3VyY2V9ID0+ICR7T2JqZWN0LmtleXMoJGV2ZW50LnNvdXJjZSl9XHJcbiAgICAgIHR5cGU6ICR7JGV2ZW50LnR5cGV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAgIGJpbmRUYXBJbnZva2UoKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb20nLCAnaGVsbG8nKVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGNvbmZpZyA9IHt9XHJcbiAgb25Mb2FkKCkgeyBcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpOyAvLyBwLXRpdGxlXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN5bmNUaXRsZSk7IC8vIHAtdGl0bGVcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudHdvV2F5VGl0bGUpOyAvLyA1MFxyXG5cclxuICAgIHRoaXMudGl0bGUgPSAnYy10aXRsZSc7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQucGFyZW50VGl0bGUpOyAvLyBwLXRpdGxlLlxyXG4gICAgdGhpcy50d29XYXlUaXRsZSA9IDYwO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zeW5jVGl0bGUpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy4kcGFyZW50LnBhcmVudFRpdGxlKTsgLy8gNjAuICAtLS0gdHdvV2F55Li6dHJ1ZeaXtu+8jOWtkOe7hOS7tnByb3Bz5L+u5pS55Lya5pS55Y+Y54i257uE5Lu25a+55bqU55qE5YC8XHJcbiAgICB0aGlzLiRwYXJlbnQucGFyZW50VGl0bGUgPSAncC10aXRsZS1jaGFuZ2VkJztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpOyAvLyAncC10aXRsZSc7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN5bmNUaXRsZSk7IC8vICdwLXRpdGxlLWNoYW5nZWQnIC0tLSDmnIlzeW5j5bGe5oCn55qEcHJvcHPvvIzlvZPniLbnu4Tku7bmlLnlj5jml7bvvIzkvJrlvbHlk43lrZDnu4Tku7bnmoTlgLzjgIJcclxuICB9XHJcbn1cclxuIl19