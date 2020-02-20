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

---

`.addScalar(vector, scalar)`

Adds the scalar to the vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `otherVector` | A number as the scalar. |

Returns a new array as the calculated result.

---

`.sub(vector, otherVector)`

Subtracts the second vector from the first vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a new array as the calculated result.

---

`.subScalar(vector, scalar)`

Subtracts the scalar from the vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `otherVector` | A number as the scalar. |

Returns a new array as the calculated result.

---

`.mul(vector, otherVector)`

Multiplies the first vector by the second vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a new array as the calculated result.

---

`.mulScalar(vector, scalar)`

Multiplies the vector by the scalar.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `scalar` | A number as the scalar. |

Returns a new array as the calculated result.

---

`.div(vector, otherVector)`

Divides the first vector by the second vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a new array as the calculated result.

---

`.divScalar(vector, scalar)`

Divides the vector by the scalar.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `otherVector` | A number as the scalar. |

Returns a new array as the calculated result.

---

`.abs(vector)`

Makes the components of the vector absolute.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |

Returns a new array as the calculated result.

---

`.dot(vector, otherVector)`

Calculates the dot product of the two vectors.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a number as the calculated result.

---

`.mean(vectors)`

Calculates the mean of the multiple vectors.

| argument | description |
| ---: | :--- |
| `vectors` | An iterable of arrays as vectors. |

Returns a new array as the calculated result.

---

`.length(vector)`

Calculates the length of a vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |

Returns a number as the calculated result.

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

---

`.distance(vector, otherVector)`

Calculates the euclidean distance between the two vectors.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a number as the calculated result.

---

`.angle(vector, otherVector)`

Calculates the angle between the two vectors in radians.

| argument | description |
| ---: | :--- |
| `vector` | An array as the first vector. |
| `otherVector` | An array as the second vector. |

Returns a number as the calculated result.

---

`.clone(vector)`

Clones a vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |

Returns a new array.
