/**
 * @license Rectangles.js v0.0.2 08/04/2016
 *
 * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/

(function(root) {

  'use strict';

  const Rectangles = {
    /**
     * Determines if two rectangles intersect
     *
     * @param {Object} a
     * @param {Object} b
     * @returns {boolean}
     */
    'intersect': function(a, b) {

      return a['x1'] < b['x2'] && a['x2'] > b['x1'] && a['y1'] < b['y2'] && a['y2'] > b['y1'];
    },
    /**
     * Calculates the intersection rectangle of two rectangles.
     * Rectangles have to intersect to work!
     *
     * @param {Object} a
     * @param {Object} b
     * @returns {Object}
     */
    'intersection': function(a, b) {

      return {
        'x1': Math.max(a['x1'], b['x1']),
        'y1': Math.max(a['y1'], b['y1']),
        'x2': Math.min(a['x2'], b['x2']),
        'y2': Math.min(a['y2'], b['y2'])
      };
    },
    /**
     * Normalizes a rectangle to ensure x1 < x2 and y1 < y2
     *
     * @param {Object} a
     * @returns {Object}
     */
    'normalize': function(a) {

      return {
        'x1': Math.min(a['x1'], a['x2']),
        'y1': Math.min(a['y1'], a['y2']),
        'x2': Math.max(a['x1'], a['x2']),
        'y2': Math.max(a['y1'], a['y2'])
      };
    },
    /**
     * Calculates the area of a rectangle
     *
     * @param {Object} a
     * @returns {number}
     */
    'area': function(a) {

      return Math.abs(a['x2'] - a['x1']) * Math.abs(a['y2'] - a['y1']);
    },
    /**
     * Calculates the height of a rectangle
     *
     * @param {Object} a
     * @returns {number}
     */
    'height': function(a) {

      return Math.abs(a['y2'] - a['y1']);
    },
    /**
     * Calculates the width of a rectangle
     *
     * @param {Object} a
     * @returns {number}
     */
    'width': function(a) {

      return Math.abs(a['x2'] - a['x1']);
    },
    /**
     * Calculates the perimeter of a rectangle
     *
     * @param {Object} a
     * @returns {number}
     */
    'perimeter': function(a) {

      return 2 * (Math.abs(a['x2'] - a['x1']) + Math.abs(a['y2'] - a['y1']));
    },
    /**
     * Calculates the center point of a rectangle
     *
     * @param {Object} a
     * @returns {Object}
     */
    'center': function(a) {

      return {
        'x': a['x1'] + (a['x2'] - a['x1']) / 2,
        'y': a['y1'] + (a['y2'] - a['y1']) / 2
      };
    },
    /**
     * Resizes the rectangle by a given value on the center
     *
     * @param {Object} a
     * @param {number} w
     * @returns {Object}
     */
    'insetBy': function(a, w) {

      return {
        'x1': a['x1'] + w,
        'y1': a['y1'] + w,
        'x2': a['x2'] - w - w,
        'y2': a['y2'] - w - w
      };
    }
  };

  if (typeof define === "function" && define["amd"]) {
    define([], function() {
      return Rectangles;
    });
  } else if (typeof exports === "object") {
    Object.defineProperty(exports, "__esModule", {'value': true});
    module['exports'] = Rectangles;
    exports['Angles'] = Rectangles;
    exports['default'] = Rectangles;
  } else {
    root['Rectangles'] = Rectangles;
  }

})(this);
