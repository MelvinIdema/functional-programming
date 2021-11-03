/**
 *
 * If the number is below zero, thus negative,
 * multiply by -1 to make it positive. If the
 * number is already positive just return the number.
 *
 * @param num
 * @returns {number|*}
 */
export default num => num < 0 ? num * -1 : num;
