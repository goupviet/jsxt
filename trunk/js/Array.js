//
// JavaScript unit
// Add-on for the array manipulation
//
// Copyright (c) 1998-2008 by mozilla.org http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:every
// Copyright (c) 2005, 2006, 2007 by Ildar Shaimordanov aka Rumata
//


if ( ! Array.prototype.every ) {

/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 *
 * @Description
 * every executes the provided callback function once for each element 
 * present in the array until it finds one where callback returns a false 
 * value. If such an element is found, the every method immediately returns 
 * false. Otherwise, if callback returned a true value for all elements, 
 * every will return true. callback is invoked only for indexes of the array 
 * which have assigned values; it is not invoked for indexes which have been 
 * deleted or which have never been assigned values.  
 *
 * callback is invoked with three arguments: 
 * - the value of the element, 
 * - the index of the element, 
 * - and the Array object being traversed. 
 *
 * If a thisObject parameter is provided to every, it will be used as the 
 * this for each invocation of the callback. If it is not provided, or is 
 * null, the global object associated with callback is used instead. 
 *
 * every does not mutate the array on which it is called. 
 *
 * The range of elements processed by every is set before the first 
 * invocation of callback. Elements which are appended to the array after the 
 * call to every begins will not be visited by callback. If existing elements 
 * of the array are changed, their value as passed to callback will be the 
 * value at the time every visits them; elements that are deleted are not 
 * visited. 
 *
 * every acts like the "for all" quantifier in mathematics. In particular, 
 * for an empty array, it returns true. (It is vacuously true that all 
 * elements of the empty set satisfy any given condition.) 
 *
 * @Example
 * <code>
 * function isBigEnough(element, index, array) 
 * {
 *   return (element >= 10);
 * }
 * var passed = [12, 5, 8, 130, 44].every(isBigEnough);
 * // passed is false
 * passed = [12, 54, 18, 130, 44].every(isBigEnough);
 * // passed is true
 * </code>
 *
 * @param	Callback
 * @param	Object
 * @return	Boolean
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/every
 */
Array.prototype.every = function(fun, thisp)
{
	if ( typeof fun != "function" ) {
		throw new TypeError();
	}

	var len = this.length;
	for (var i = 0; i < len; i++) {
		if ( i in this && ! fun.call(thisp, this[i], i, this) ) {
			return false;
		}
	}

	return true;
};

}

if ( ! Array.prototype.filter ) {

/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 *
 * @Description
 * filter calls a provided callback function once for each element in an 
 * array, and constructs a new array of all the values for which callback 
 * returns a true value. callback is invoked only for indexes of the array 
 * which have assigned values; it is not invoked for indexes which have been 
 * deleted or which have never been assigned values. Array elements which do 
 * not pass the callback test are simply skipped, and are not included in the 
 * new array. 
 * 
 * callback is invoked with three arguments: 
 * - the value of the element, 
 * - the index of the element, 
 * - and the Array object being traversed. 
 * 
 * If a thisObject parameter is provided to filter, it will be used as the 
 * this for each invocation of the callback. If it is not provided, or is 
 * null, the global object associated with callback is used instead. 
 * 
 * filter does not mutate the array on which it is called. 
 * 
 * The range of elements processed by filter is set before the first 
 * invocation of callback. Elements which are appended to the array after the 
 * call to filter begins will not be visited by callback. If existing 
 * elements of the array are changed, or deleted, their value as passed to 
 * callback will be the value at the time filter visits them; elements that 
 * are deleted are not visited.  
 * 
 * @Example
 * <code>
 * function isBigEnough(element, index, array) 
 * {
 *   return (element >= 10);
 * }
 * var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
 * </code>
 *
 * @param	Callback
 * @param	Object
 * @return	Array
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/filter
 */
Array.prototype.filter = function(fun, thisp)
{
	if ( typeof fun != "function" ) {
		throw new TypeError();
	}

	var len = this.length;
	var res = new Array();
	for (var i = 0; i < len; i++) {
		if ( i in this ) {
			var val = this[i]; // in case fun mutates this
			if ( fun.call(thisp, val, i, this) ) {
				res.push(val);
			}
		}
	}

	return res;
};

}

if ( ! Array.prototype.flatten ) {

/**
 * Returns a "flat" (one-dimensional) version of the array. Nested arrays are recursively processed.
 *
 * @param	void
 * @return	Array
 * @access	public
 * @see		http://prototypejs.org/api/array/flatten
 */
Array.prototype.flatten = function()
{
	var result = [];

	var len = this.length;
	for (var i = 0; i < len; i++) {
		var value = this[i];
		if ( ! value || this[i].constructor != Array ) {
			value = [value];
		}
		result = result.concat(value);
	}

	return result;
};

}

if ( ! Array.prototype.forEach ) {

/**
 * Executes a provided function once per array element.
 *
 * @Description
 * forEach executes the provided function (callback) once for each element 
 * present in the array. callback is invoked only for indexes of the array 
 * which have assigned values; it is not invoked for indexes which have been 
 * deleted or which have never been assigned values. 
 * 
 * callback is invoked with three arguments: 
 * - the value of the element, 
 * - the index of the element, 
 * - and the Array object being traversed.
 * 
 * If a thisObject parameter is provided to forEach, it will be used as the 
 * this for each invocation of the callback. If it is not provided, or is 
 * null, the global object associated with callback is used instead. 
 * 
 * forEach does not mutate the array on which it is called. 
 * 
 * The range of elements processed by forEach is set before the first 
 * invocation of callback. Elements which are appended to the array after the 
 * call to forEach begins will not be visited by callback. If existing 
 * elements of the array are changed, or deleted, their value as passed to 
 * callback will be the value at the time forEach visits them; elements that 
 * are deleted are not visited.  
 * 
 * @Example
 * <code>
 * function printElt(element, index, array) 
 * {
 *     print("[" + index + "] is " + element); // assumes print is already defined
 * }
 * [2, 5, 9].forEach(printElt);
 * // Prints:
 * // [0] is 2
 * // [1] is 5
 * // [2] is 9
 * </code>
 *
 * @param	Callback
 * @param	Object
 * @return	void
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/forEach
 */
Array.prototype.forEach = function(fun, thisp)
{
	if ( typeof fun != "function" ) {
		throw new TypeError();
	}

	var len = this.length;
	for (var i = 0; i < len; i++) {
		if ( i in this ) {
			fun.call(thisp, this[i], i, this);
		}
	}
};

}

if (!Array.prototype.indexOf) {

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @Description
 * indexOf compares searchElement to elements of the Array using strict equality 
 * (the same method used by the ===, or triple-equals, operator).
 *
 * @Example: Using indexOf
 * var array = [2, 5, 9];
 * var index = array.indexOf(2);
 * // index is 0
 * index = array.indexOf(7);
 * // index is -1
 *
 * @Example: Finding all the occurrences of an element
 * var indices = [];
 * var idx = array.indexOf(element)
 * while (idx != -1)
 * {
 *   indices.push(idx);
 *   idx = array.indexOf(element, idx + 1);
 * }
 *
 * @param	Mixed
 * @param	Integer
 * @return	Mixed
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/indexOf
 */
Array.prototype.indexOf = function(elt /*, from*/)
{
	var len = this.length;

	var from = Number(arguments[1]) || 0;
	from = (from < 0)
		? Math.ceil(from)
		: Math.floor(from);
	if (from < 0) {
		from += len;
	}

	for (; from < len; from++) {
		if (from in this && this[from] === elt) {
			return from;
		}
	}
	return -1;
};

}

if (!Array.prototype.lastIndexOf) {

/**
 * Returns the last index at which a given element can be found in the array, 
 * or -1 if it is not present. The array is searched backwards, starting at fromIndex.
 *
 * @Description
 * lastIndexOf compares searchElement to elements of the Array using strict equality 
 * (the same method used by the ===, or triple-equals, operator).
 *
 * @Example: Using lastIndexOf
 * var array = [2, 5, 9, 2];
 * var index = array.lastIndexOf(2); // index is 3
 * index = array.lastIndexOf(7);     // index is -1
 * index = array.lastIndexOf(2, 3);  // index is 3
 * index = array.lastIndexOf(2, 2);  // index is 0
 * index = array.lastIndexOf(2, -2); // index is 0
 * index = array.lastIndexOf(2, -1); // index is 3
 *
 * @Example: Finding all the occurrences of an element
 * var indices = [];
 * var idx = array.lastIndexOf(element);
 * while (idx != -1)
 * {
 *   indices.push(idx);
 *   idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
 * }
 *
 * @param	Mixed
 * @param	Integer
 * @return	Mixed
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/lastIndexOf
 */
Array.prototype.lastIndexOf = function(elt /*, from*/)
{
	var len = this.length;

	var from = Number(arguments[1]);
	if (isNaN(from)) {
		from = len - 1;
	} else {
		from = (from < 0)
			? Math.ceil(from)
			: Math.floor(from);
		if (from < 0) {
			from += len;
		} else if (from >= len) {
			from = len - 1;
		}
	}

	for (; from > -1; from--) {
		if (from in this && this[from] === elt) {
			return from;
		}
	}
	return -1;
};

}

if ( ! Array.prototype.map ) {

/**
 * Creates a new array with the results of calling a provided function on every element in this array.
 *
 * @Description
 * map calls a provided callback function once for each element in an array, 
 * in order, and constructs a new array from the results. callback is invoked 
 * only for indexes of the array which have assigned values; it is not 
 * invoked for indexes which have been deleted or which have never been 
 * assigned values. 
 * 
 * callback is invoked with three arguments: 
 * - the value of the element, 
 * - the index of the element, 
 * - and the Array object being traversed.
 * 
 * If a thisObject parameter is provided to map, it will be used as the this 
 * for each invocation of the callback. If it is not provided, or is null, 
 * the global object associated with callback is used instead. 
 * 
 * map does not mutate the array on which it is called. 
 * 
 * The range of elements processed by map is set before the first invocation 
 * of callback. Elements which are appended to the array after the call to 
 * map begins will not be visited by callback. If existing elements of the 
 * array are changed, or deleted, their value as passed to callback will be 
 * the value at the time map visits them; elements that are deleted are not 
 * visited.  
 * 
 * @Example
 * <code>
 * var numbers = [1, 4, 9];
 * var roots = numbers.map(Math.sqrt);
 * // roots is now [1, 2, 3]
 * // numbers is still [1, 4, 9]
 * </code>
 *
 * @param	Callback
 * @param	Object
 * @return	Array
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/map
 */
Array.prototype.map = function(fun, thisp)
{
	if ( typeof fun != "function" ) {
		throw new TypeError();
	}

	var len = this.length;
	var res = new Array(len);

	for (var i = 0; i < len; i++) {
		if ( i in this ) {
			res[i] = fun.call(thisp, this[i], i, this);
		}
	}

	return res;
};

}

if ( ! Array.prototype.reduce ) {

/**
 * Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
 * reduce executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments: 
 * - the initial value (or value from the previous callback call), 
 * - the value of the current element, 
 * - the current index, 
 * - and the array over which iteration is occurring.
 *
 * The call to the reduce callback would look something like this:
 * <code>
 * object.reduce(function(previousValue, currentValue, index, array)
 * {
 * // ...
 * })
 * </code>
 *
 * @Example
 * <code>
 * // Sum up all values within an array
 * var total = [0, 1, 2, 3].reduce(function(a, b)
 * {
 *   return a + b; 
 * });
 * // total == 6
 *
 * // Flatten an array of arrays
 * var flattened = [[0,1], [2,3], [4,5]].reduce(function(a,b) 
 * {
 *   return a.concat(b);
 * }, []);
 * // flattened is [0, 1, 2, 3, 4, 5]
 * </code>
 *
 * @param	Callback
 * @param	mixed
 * @return	mixed
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
 */
Array.prototype.reduce = function(fun)
{
	if ( typeof fun != "function" ) {
		throw new TypeError();
	}

	var len = this.length;

	// no value to return if no initial value and an empty array
	if ( len == 0 && arguments.length == 1 ) {
		throw new TypeError();
	}

	var i = 0;
	if ( arguments.length >= 2 ) {
		var rv = arguments[1];
	} else {
		do {
			if ( i in this ) {
				rv = this[i++];
				break;
			}

			// if array contains no values, no initial value to return
			if ( ++i < 0 ) {
				throw new TypeError();
			}
		} while ( true );
	}

	for (; i < len; i++) {
		if ( i in this ) {
			rv = fun.call(null, rv, this[i], i, this);
		}
	}

	return rv;
};

}

if ( ! Array.prototype.reduceRight ) {

/**
 * Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
 * reduceRight executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments: 
 * - the initial value (or value from the previous callback call), 
 * - the value of the current element, 
 * - the current index, 
 * - and the array over which iteration is occurring.
 *
 * The call to the reduce callback would look something like this:
 * <code>
 * object.reduceRight(function(previousValue, currentValue, index, array)
 * {
 * // ...
 * })
 * </code>
 *
 * @Example
 * <code>
 * // Flatten an array of arrays
 * var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) 
 * {
 *   return a.concat(b);
 * }, []);
 * // flattened is [4, 5, 2, 3, 0, 1]
 * </code>
 *
 * @param	Callback
 * @param	mixed
 * @return	mixed
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
 */
Array.prototype.reduceRight = function(fun)
{
	if ( typeof fun != "function" ) {
		throw new TypeError();
	}

	var len = this.length;

	// no value to return if no initial value, empty array
	if ( len == 0 && arguments.length == 1 ) {
		throw new TypeError();
	}

	var i = len - 1;
	if ( arguments.length >= 2 ) {
		var rv = arguments[1];
	} else {
		do {
			if ( i in this ) {
				rv = this[i--];
				break;
			}

			// if array contains no values, no initial value to return
			if ( --i < 0 ) {
				throw new TypeError();
			}
		} while ( true );
	}

	for (; i >= 0; i--) {
		if ( i in this ) {
			rv = fun.call(null, rv, this[i], i, this);
		}
	}

	return rv;
};

}

if ( ! Array.prototype.shuffle ) {

/**
 * Shuffles all items in an array.
 *
 * @Example:
 * <code>
 * var ar1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 * var ar2 = ar1.sortRandom();
 * </code>
 *
 * @param	void
 * @return	Array
 * @access	public
 * @see		http://forum.dklab.ru/viewtopic.php?t=21753
 */
Array.prototype.shuffle = function()
{
	return this.sort(function()
	{
		return Math.random() - 0.5;
	});
};

}

if ( ! Array.prototype.some ) {

/**
 * Tests whether some element in the array passes the test implemented by the provided function.
 *
 * @Description
 * some executes the callback function once for each element present in the 
 * array until it finds one where callback returns a true value. If such an 
 * element is found, some immediately returns true. Otherwise, some returns 
 * false. callback is invoked only for indexes of the array which have 
 * assigned values; it is not invoked for indexes which have been deleted or 
 * which have never been assigned values. 
 * 
 * callback is invoked with three arguments: 
 * - the value of the element, 
 * - the index of the element, 
 * - and the Array object being traversed.
 * 
 * If a thisObject parameter is provided to some, it will be used as the this 
 * for each invocation of the callback. If it is not provided, or is null, 
 * the global object associated with callback is used instead. 
 * 
 * some does not mutate the array on which it is called. 
 * 
 * The range of elements processed by some is set before the first invocation 
 * of callback. Elements that are appended to the array after the call to 
 * some begins will not be visited by callback. If an existing, unvisited 
 * element of the array is changed by callback, its value passed to the 
 * visiting callback will be the value at the time that some visits that 
 * element's index; elements that are deleted are not visited.  
 * 
 * @Example
 * <code>
 * function isBigEnough(element, index, array) 
 * {
 *   return (element >= 10);
 * }
 * var passed = [2, 5, 8, 1, 4].some(isBigEnough);
 * // passed is false
 * passed = [12, 5, 8, 1, 4].some(isBigEnough);
 * // passed is true
 * </code>
 *
 * @param	Callback
 * @param	Object
 * @return	Boolean
 * @access	public
 * @see		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/some
 */
Array.prototype.some = function(fun, thisp)
{
	if ( typeof fun != "function" ) {
		throw new TypeError();
	}

	var len = this.length;
	for (var i = 0; i < len; i++) {
		if ( i in this && fun.call(thisp, this[i], i, this) ) {
			return true;
		}
	}

	return false;
};

}

if ( ! Array.prototype.union ) {

/**
 * Array.prototype.union
 *
 * @syntax
 * object.union(array)
 *
 * @description
 * Appends the right handed array to the left handed, 
 * whereas duplicated keys are NOT overwritten.
 * The callback defines unique criteria of array items.
 * By default, unique criteria is value1 != value2
 *
 * @example
 * <code>
 * var arr1 = [1, 2, 3, 4];
 * var arr2 = [1, 4, 5, 6];
 * var arr3 = arr1.union(arr2); // arr3 == [1, 2, 3, 4, 5, 6]
 *
 * // removes duplicates from an array
 * var arr4 = [].union([1, 1, 3, 1, 4, 3, 5]); // arr4 == [1, 3, 4, 5]
 * </code>
 *
 * @param	Array		list
 * @param	Function	callback
 * @return	Array
 * @access	public
 * @see		http://forum.dklab.ru/viewtopic.php?p=141140
 */
Array.prototype.union = function(list, callback)
{
	if ( ! callback ) {
		callback = function(value1, value2)
		{
			return value1 != value2;
		};
	}

	var result = this;
	var L = result.length;
	var j;
SEARCH_UNIQUE:
	for (var i = 0; i < list.length; i++) {
		j = 0;
		while ( j < L ) {
			if ( ! callback(result[j], list[i]) ) {
				continue SEARCH_UNIQUE;
			}
			j++;
		}
		result[L] = list[i];
		L++;
	}
	return result;
};

}


if ( ! Array.prototype.invoke ) {

/**
 * Invokes the method with the arguments for all elements of 
 * the array and returns the new array. The rest of arguments 
 * will be passed to the method.
 *
 * @example
 * <code>
 * // Converts each numeric element to hexadecimal string
 * var arr1 = [2, 14, 7];
 * var arr2 = arr1.invoke('toString', 16);
 * // arr2 == [2, E, 7]
 * </code>
 *
 * @param	String
 * @return	Array
 * @access	public
 */
Array.prototype.invoke = function(method)
{
	var args = Array.linearize(arguments).slice(1);
	var result = this.map(function(v)
	{
		return v[method].apply(v, args);
	});
	return result;
};

}

if ( ! Array.prototype.fetch ) {

/**
 * Returns the value of the appropriate property of each element. 
 * This is clone of the pluck method from the Prototype framework.
 *
 * @example
 * <code>
 * var arr1 = ['what', 'the', 'wonderful', 'world'];
 * var arr2 = arr1.pluck('length');
 * // arr2 == [4, 3, 9, 5]
 * </code>
 *
 * @param	String
 * @return	Array
 * @access	public
 * @see		http://www.prototypejs.org/api/enumerable/pluck
 */
Array.prototype.fetch = function(property)
{
	var result = this.map(function(v)
	{
		return v[property];
	});
	return result;
};

}

if ( ! Array.linearize ) {

/**
 * Array.linearize()
 *
 * @description
 * Converts some array-like objects in JavaScript to native arrays
 * It can be useful for: 
 * -- function arguments 
 * -- or results of String.prototype.match()
 *
 * @param	Object
 * @return	Array
 * @access	static
 */
Array.linearize = function(object)
{
	if ( ! object || ! object.length ) {
		return [];
	}

	var result = new Array(object.length);
	for (var i = 0; i < object.length; i++) {
		result[i] = object[i];
	}

	return result;
};

}

if ( ! Array.range ) {

/**
 * Array.range
 *
 * @description
 * Returns the list of numeric values as an array.
 * This is static method (cannot be call dynamically).
 *
 * @syntax
 * Array.range(size)
 * Array.range(start, stop [, step])
 *
 * @param    Integer  size	Expression defines the size of the new array. 
 *				Resulting array will contain numeric values 
 *				through 1 from 0 to size - 1, inclusively.
 * @param    Integer  start	Expression defines the value of the first item 
 *				of the array.
 * @param    Integer  stop	Expression defines the value of the last item 
 *				of the array.
 * @param    Integer  step	Optional expression defines the step between 
 *				the i and i+1 items of array. If this 
 *				parameter is not defined it is assumed as 1.
 *				All items are ranged within start <= A[i] <= stop
 *
 * @result   Array
 * @access   static
 * @see      http://forum.dklab.ru/viewtopic.php?t=21040
 */
Array.range = function()
{
	var step = Number(arguments[2]) || 1;

	if (undefined !== arguments[0] && undefined !== arguments[1]) {
		var start = arguments[0];
		var stop = arguments[1];
	} else {
		var start = 0;
		var stop = arguments[0] - step;
	}

	var result = [];
	if (undefined === start || undefined === stop || undefined === step || (start > stop && step > 0) || (start < stop && step < 0)) {
		return result;
	}
	if (start > stop) {
		var i = start;
		while (i >= stop) {
			result[result.length] = i;
			i += step;
		}
	} else {
		var i = start;
		while (i <= stop) {
			result[result.length] = i;
			i += step;
		}
	}
	return result;
};

}

if ( ! Number.prototype.fill ) {

/**
 * Number.prototype.fill
 *
 * @description
 * Fills an array with size values of itself.
 *
 * @param	Integer
 * @result	Array
 * @access	public
 * @see		http://forum.dklab.ru/viewtopic.php?t=21702
 * @see		http://tokyoenvious.xrea.jp/javascript/functional/array.js
 */
Number.prototype.fill = function(size)
{
	var result = [];

	for (var i = 0; i < size; i++) {
		result.push(this);
	}

	return result;
};

}

if ( ! Number.prototype.step ) {

/**
 * Number.prototype.step
 *
 * @description
 * Creates an array containing values between two numeric 
 * values passed to the method through the step interval.
 *
 * @param	Integer
 * @param	Integer
 * @result	Array
 * @access	public
 * @see		http://forum.dklab.ru/viewtopic.php?t=21702
 * @see		http://tokyoenvious.xrea.jp/javascript/functional/array.js
 */
Number.prototype.step = function()
{
	var from = arguments[0];
	var to   = arguments[1];

	var less = Math.min(from, to);
	var more = Math.max(from, to);

	var result = [];

	if ( this < 0 ) {
		for (var i = more; i >= less; i += this) {
			result.push(i);
		}
	} else if ( this > 0 ) {
		for (var i = less; i <= more; i += this) {
			result.push(i);
		}
	}

	return result;
};

}

if ( ! Number.prototype.to ) {

/**
 * Number.prototype.to
 *
 * @description
 * Creates an array containing values starting from 
 * the actual value until to value, inclusively.
 *
 * @param	Integer
 * @result	Array
 * @access	public
 * @see		http://forum.dklab.ru/viewtopic.php?t=21702
 * @see		http://tokyoenvious.xrea.jp/javascript/functional/array.js
 */
Number.prototype.to = function(to)
{
	var result = [];

	if ( this <= to ) {
		for (var i = this; i <= to; i++) {
			result.push(i);
		}
	} else {
		for (var i = this; i >= to; i--) {
			result.push(i);
		}
	}

	return result;
};

}
