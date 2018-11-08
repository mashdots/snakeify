# Snakeify

A super quick function to convert strings to snake_case.

## Use
Feel free to include this in your project and import with
```
import { snakeify } from '/path/to/snakeify.js'
```
Then call the function as any other.

## Examples

```javascript
snakeify("fooBar");
// output -> "foo_bar"
```

```javascript
snakeify("--FOO-BAR----");
// output -> "foo_bar"
```

```javascript
snakeify("foo");
// output -> "foo"
```

```javascript
snakeify("foo bar");
// output -> "foo_bar"
```

_A thing to note:_ Consecutive capital letters will be considered individual words, and will then be split. See this next example:

```javascript
snakeify("FooBAr");
// output -> "foo_ba_r"
```