
/**
 * Module dependencies.
 */

var o = require("zepto-component"),
    inherit = require("inherit"),
    Emitter = require("emitter");

/**
 * Expose `overlay()`.
 */

exports = module.exports = overlay;

/**
 * Expose `Overlay`
 */

exports.Overlay = Overlay;

function overlay(options) {
  return new Overlay(options);
}

function Overlay(options) {
  Emitter.call(this);
  options = options || {};
  this.$el = o(require("./template"));
  this.$el.appendTo("body");
}

inherit(Overlay, Emitter);

Overlay.prototype.show = function() {
  this.emit("show");
  this.$el.removeClass("hide");
  return this;
};

Overlay.prototype.hide = function() {
  this.emit("hide");
  return this.remove();
};

Overlay.prototype.remove = function() {
  var self = this;
  this.emit('close');
  this.$el.addClass('hide');
  setTimeout(function(){
    self.$el.remove();
  }, 2000);
  return this;
};