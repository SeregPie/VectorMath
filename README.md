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
| `scalar` | A number as the scalar. |

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
| `scalar` | A number as the scalar. |

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
| `scalar` | A number as the scalar. |

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

`.sum(...vectors)`

Calculates the sum of the multiple vectors.

| argument | description |
| ---: | :--- |
| `...vectors` | Multiple arguments where each argument is an array as the vector. |

Returns a new array as the calculated result.

---

`.mean(...vectors)`

Calculates the mean of the multiple vectors.

| argument | description |
| ---: | :--- |
| `...vectors` | Multiple arguments where each argument is an array as the vector. |

Returns a new array as the calculated result.

---

`.length(vector)`

Calculates the length of a vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |

Returns a number as the calculated result.

---

`.setLength(vector, length)`

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

*alias* `EuclideanDistance`

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

`.clamp(vector, minVector, maxVector)`

Clamps the vector between the two vectors.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `minVector` | An array as the minimum vector. |
| `maxVector` | An array as the maximum vector. |

Returns a new array as the calculated result.

---

`.clampScalar(vector, minScalar, maxScalar)`

Clamps the vector between the two scalars.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `minScalar` | A number as the minimum scalar. |
| `maxScalar` | A number as the maximum scalar. |

Returns a new array as the calculated result.

---

`.clampLength(vector, minLength, maxLength)`

Clamps the vector between the two lengths.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `minLength` | A number as the minimum length. |
| `maxLength` | A number as the maximum length. |

Returns a new array as the calculated result.

---

`.scale(vector, oldMinVector, oldMaxVector, newMinVector, newMaxVector)`

Scales the vector from a vector range to another.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `oldMinVector` | An array as the old minimum vector. |
| `oldMaxVector` | An array as the old maximum vector. |
| `newMinVector` | An array as the new minimum vector. |
| `newMaxVector` | An array as the new maximum vector. |

Returns a new array as the calculated result.

---

`.scaleScalar(vector, oldMinScalar, oldMaxScalar, newMinScalar, newMaxScalar)`

Scales the vector from a scalar range to another.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `oldMinScalar` | A number as the old minimum scalar. |
| `oldMaxScalar` | A number as the old maximum scalar. |
| `newMinScalar` | A number as the new minimum scalar. |
| `newMaxScalar` | A number as the new maximum scalar. |

Returns a new array as the calculated result.

---

`.scaleLength(vector, oldMinLength, oldMaxLength, newMinLength, newMaxLength)`

Scales the vector from a length range to another.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |
| `oldMinLength` | A number as the old minimum length. |
| `oldMaxLength` | A number as the old maximum length. |
| `newMinLength` | A number as the new minimum length. |
| `newMaxLength` | A number as the new maximum length. |

Returns a new array as the calculated result.

---

`.clone(vector)`

Clones a vector.

| argument | description |
| ---: | :--- |
| `vector` | An array as the vector. |

Returns a new array.

---

`.Covariance(vector, otherVector)`

`.ManhattanDistance(vector, otherVector)`

`.CosineSimilarity(vector, otherVector)`

`.CosineDistance(vector, otherVector)`

`.AngularSimilarity(vector, otherVector)`

`.AngularDistance(vector, otherVector)`

`.PearsonCorrelationCoefficient(vector, otherVector)`
