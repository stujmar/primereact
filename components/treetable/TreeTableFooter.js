"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeTableFooter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TreeTableFooter = /*#__PURE__*/function (_Component) {
  _inherits(TreeTableFooter, _Component);

  var _super = _createSuper(TreeTableFooter);

  function TreeTableFooter() {
    _classCallCheck(this, TreeTableFooter);

    return _super.apply(this, arguments);
  }

  _createClass(TreeTableFooter, [{
    key: "renderFooterCell",
    value: function renderFooterCell(column, index) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: column.field || index,
        className: column.props.footerClassName || column.props.className,
        style: column.props.footerStyle || column.props.style,
        rowSpan: column.props.rowSpan,
        colSpan: column.props.colSpan
      }, column.props.footer);
    }
  }, {
    key: "renderFooterRow",
    value: function renderFooterRow(row, index) {
      var _this = this;

      var rowColumns = _react.default.Children.toArray(row.props.children);

      var rowFooterCells = rowColumns.map(function (col, index) {
        return _this.renderFooterCell(col, index);
      });
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, rowFooterCells);
    }
  }, {
    key: "renderColumnGroup",
    value: function renderColumnGroup() {
      var _this2 = this;

      var rows = _react.default.Children.toArray(this.props.columnGroup.props.children);

      return rows.map(function (row, i) {
        return _this2.renderFooterRow(row, i);
      });
    }
  }, {
    key: "renderColumns",
    value: function renderColumns(columns) {
      var _this3 = this;

      if (columns) {
        var headerCells = columns.map(function (col, index) {
          return _this3.renderFooterCell(col, index);
        });
        return /*#__PURE__*/_react.default.createElement("tr", null, headerCells);
      } else {
        return null;
      }
    }
  }, {
    key: "hasFooter",
    value: function hasFooter() {
      if (this.props.columnGroup) {
        return true;
      } else {
        for (var i = 0; i < this.props.columns.length; i++) {
          if (this.props.columns[i].props.footer) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.columnGroup ? this.renderColumnGroup() : this.renderColumns(this.props.columns);

      if (this.hasFooter()) {
        return /*#__PURE__*/_react.default.createElement("tfoot", {
          className: "p-treetable-tfoot"
        }, content);
      } else {
        return null;
      }
    }
  }]);

  return TreeTableFooter;
}(_react.Component);

exports.TreeTableFooter = TreeTableFooter;

_defineProperty(TreeTableFooter, "defaultProps", {
  columns: null,
  columnGroup: null
});

_defineProperty(TreeTableFooter, "propTypes", {
  columns: _propTypes.default.array,
  columnGroup: _propTypes.default.any
});