# VectorMath

A collection of mathematical functions for working with vectors.

## setup

### npm

```shell
npm i @seregpie/vector-math
```

### ES module

```javascript
import VectorMath from '@seregpie/vector-math';
```

### Node

```javascript
let VectorMath = require('@seregpie/vector-math');
```

### browser

```html
<script src="https://unpkg.com/@seregpie/vector-math"></script>
```

The module is globally available as `VectorMath`.

## members

`.add(vector, otherVector)`

Adds the second vector to the first vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a new array as the calculated result.

```javascript
let vector = VectorMath.add([1, 3, -1], [-2, 1, 6]);
// => [-1, 4, 5]
```

---

`.mulScalar(vector, scalar)`

Multiplies the vector by the scalar.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `scalar` | A number as the scalar. |

Returns a new array as the calculated result.

```javascript
let vector = VectorMath.mulScalar([3, -1], 2);
// => [6, -2]
```

---

`.divScalar(vector, scalar)`

Divides the vector by the scalar.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `otherVector` | A number as the scalar. |

Returns a new array as the calculated result.

```javascript
let vector = VectorMath.divScalar([8, -2], 2);
// => [4, -1]
```

---

`.dot(vector, otherVector)`

Calculates the dot product of the two vectors.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a number as the calculated result.

```javascript
let n = VectorMath.dot([1, 3, -5], [4, -2, -1]);
// => 3
```

---

`.mean(vectors)`

Calculates the mean of the multiple vectors.

| argument | description |
| ---: | :--- |
| `vectors` | An iterable of arrays as vectors. |

Returns a new array as the calculated result.

```javascript
let vector = VectorMath.mean([[5, 3], [6, 1], [7, 8]]);
// => [6, 4]
```

---

`.length(vector)`

Calculates the length of a vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |

Returns a number as the calculated result.

```javascript
let vector = VectorMath.length([12, 3, 4]);
// => 13
```

---

`.relength(vector, length)`

Changes the length of the vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `length` | A number as the new length. |

Returns a new array as the calculated result.

---

`.normalize(vector)`

Normalizes the vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |

Returns a new array as the calculated result.

```javascript
let vector = VectorMath.normalize([3, 4]);
// => [0.6, 0.8]
```

---

`.distance(vector, otherVector)`

Calculates the distance between the two vectors.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a number as the calculated result.

```javascript
let n = VectorMath.distance([2, 3, 4, 2], [1, -2, 1, 3]);
// => 6
```

---

`.angle(vector, otherVector)`

Calculates the angle between the two vectors in radians.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a number as the calculated result.

```javascript
let n = VectorMath.angle([7, 1], [5, 5]);
// => ~0.6435
```

---

`.clone(vector)`

Clones a vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |

Returns a new array.

```javascript
let originalVector = [1, 2, 3];
let vector = VectorMath.clone(originalVector);
// => [1, 2, 3]
console.log(vector === originalVector); // => false
```
