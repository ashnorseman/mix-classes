# Simple form fields validation tool

by: Ash

Generate class names via props.

## Usage

```
npm install mix-class
```

```javascript
import mixClass from 'mix-class';

const props = {
  'active': true,    // => `active`: appears in the result because value is true
  'tab-item': false, // => ``: does not generate class names when value is false
  'tab-$': 'bar'     // => `tab-bar`: `$` is replaced by value
};

expect(mixClass(props)).toEqual('active tab-bar');
```
