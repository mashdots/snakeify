/**
 * Convert strings to alphanumeric-only snake case strings
 * v1.0
 * @private
 * @param {String} string
 * @return {String}
 */

export function snakeify(string) {
    return string.split(/([a-z]+|[A-Z]{1}[a-z]+|[A-Z]+|[0-9]*)/).filter(j => /\w/g.test(j)).join('_').toLowerCase();
}