<img src="deepdash.svg?sanitize=true" width="64px"/>

## deepdash
tree traversal for lodash
### Installation
In a browser load script after lodash:
```html
<script src="lodash.js"></script>
<script src="deepdash.js"></script>
```
Using npm:
```
npm i --save deepdash
```
In Node.js:
```js
//inject new method into lodash object
const _ = require('./deepdash')(require('lodash'));
```
### Usage

```js
let obj = {
  a: {
    b: {
      c: {
        d: [
          { i: 0 },
          { i: 1 },
          { i: 2 },
          { i: 3 },
          { i: 4 },
          { i: 5 },
          {
            o: {
              d: new Date(),
              f: function() {},
              skip: {
                please: {
                  dont: {
                    go: {
                      here: 'skip it',
                    },
                  },
                },
              },
            },
          },
        ],
        s: 'hello',
      },
      b: true,
    },
    n: 12345,
    u: undefined,
  },
  nl: null,
};
_.eachDeep(obj, (value, key, path, depth, parent, parentKey, parentPath) => {
  console.log(
    _.repeat('  ', depth) +
      key +
      ':' +
      (value === null ? 'null' : typeof value),
    parentPath && ' @' + parentPath
  );
  if(key=="skip"){
    return false;//return false explicitly to skip iteration over current value's children
  }
});
```
Console:
```
a:object
  b:object  @a
    c:object  @a.b
      d:object  @a.b.c
        0:object  @a.b.c.d
          i:number  @a.b.c.d[0]
        1:object  @a.b.c.d
          i:number  @a.b.c.d[1]
        2:object  @a.b.c.d
          i:number  @a.b.c.d[2]
        3:object  @a.b.c.d
          i:number  @a.b.c.d[3]
        4:object  @a.b.c.d
          i:number  @a.b.c.d[4]
        5:object  @a.b.c.d
          i:number  @a.b.c.d[5]
        6:object  @a.b.c.d
          o:object  @a.b.c.d[6]
            d:object  @a.b.c.d[6].o
            f:function  @a.b.c.d[6].o
            skip:object  @a.b.c.d[6].o
      s:string  @a.b.c
    b:boolean  @a.b
  n:number  @a
  u:undefined  @a
nl:null
```
Chaining works too:
```js
  _(obj).eachDeep((value, key, path, depth, parent, parentKey, parentPath) => {/* do */}).value();
```

## Methods

### eachDeep (forEachDeep)
`_.eachDeep(object, [iteratee=_.identity])`
Invokes given callback for each field and element of given object or array, nested too.

**Arguments:**
- object (Object): The object to iterate over.
- [iteratee=_.identity] (Function): The function invoked per iteration.
  `iteratee` will be called with:
  - value, key, path, depth, parent, parentKey, parentPath, [parents]
- options (Object):
    - track - option (false by default) to track parents from current back to the root, useful for circular reference detecting.
              If true, `iteratee` will have additional `parents` object argument with `values`, `keys` and `paths` arrays inside.

**Example:**
```js
  let circular = { a: { b: { c: {} } } };
  circular.a.b.c = circular;
  _.eachDeep(
    circular,
    (value, key, path, depth, parent, parentKey, parentPath, parents) => {
      if (_.indexOf(parents.values, value) !== -1) {
        console.log(
          "Circular reference skipped for '" + key + "' at " + parentPath
        );
        return false;
      }
      //do you things
    }
  ,{track:true});
```
Console:
```
  Circular reference skipped for 'c' at a.b
```

### Other traversal methods
Feel free [to request](https://github.com/YuriGor/deepdash/issues/new) other methods implementation.
