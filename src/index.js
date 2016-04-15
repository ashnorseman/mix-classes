/**
 * Created by AshZhang on 2016-4-15.
 */


/**
 * Generate class names via props
 * @param {Object} props
 * @returns {string}
 *
 * e.g.
 * {
 *   'active': true,    // => `active`: appears in the result because value is true
 *   'tab-item': false, // => ``: does not generate class names when value is false
 *   'tab-$': 'bar'     // => `tab-bar`: `$` is replaced by value
 * }    // => 'active tab-bar'
 */
module.exports = function mixClass(props = {}) {
	var classes = [];

	Object.keys(props).forEach((key) => {
		var val = props[key];

		if (key.indexOf('$') > -1 && val !== void 0) {
			classes.push(key.replace(/\$/g, val));
		} else if (val) {
			classes.push(key);
		}
	});

	return classes.join(' ');
};
