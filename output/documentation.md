
documentedClass
===============

This class has documented methods.


`publicStaticNoDocsNoParams()`
------------------------------

No documentation



```JavaScript
// Sample
publicStaticNoDocsNoParams();
```

`publicStaticWithDocsNoParams()`
--------------------------------

Fully documented static method.



```JavaScript
// Sample
publicStaticWithDocsNoParams();
```

`publicStaticNoDocsWithParams(name: string, age: number)`
---------------------------------------------------------

No documentation

|Parameter|Type    |Optional?|Multiple?|Description     |
|---------|--------|---------|---------|----------------|
|**name** |`string`|No       |No       |No documentation|
|**age**  |`number`|No       |No       |No documentation|

```JavaScript
// Sample
publicStaticNoDocsWithParams("my name", 0);
```

`publicStaticWithDocsWithParams(name: string, age: number)`
-----------------------------------------------------------

Fully documented static method with parameters.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**name** |`string`|No       |No       |A string parameter.|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
publicStaticWithDocsWithParams("my name", 0);
```

`publicStaticWithDocsWithParamsMultipleDecorators(name: string, age: number)`
-----------------------------------------------------------------------------

Fully documented static method with multiple method decorators and parameters.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**name** |`string`|No       |No       |A string parameter.|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
publicStaticWithDocsWithParamsMultipleDecorators("my name", 0);
```

`publicStaticWithDocsWithParamsWithReturn(name: string, age: number)`
---------------------------------------------------------------------

Fully documented static method with parameters and a return type.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**name** |`string`|No       |No       |A string parameter.|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
publicStaticWithDocsWithParamsWithReturn("my name", 0);
```

`publicStaticWithDocsWithIgnoredParams(age: number)`
----------------------------------------------------

Fully documented static method with ignored parameters.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
publicStaticWithDocsWithIgnoredParams(0);
```

`publicStaticWithDocsWithOptionalParams(name: string, age?: number)`
--------------------------------------------------------------------

Fully documented static method with optional parameters.

|Parameter|Type    |Optional?|Multiple?|Description                  |
|---------|--------|---------|---------|-----------------------------|
|**name** |`string`|No       |No       |A string parameter.          |
|**age**  |`number`|*Yes*    |No       |An optional number parameter.|

```JavaScript
// Sample
publicStaticWithDocsWithOptionalParams("my name", 0);
```

`publicStaticWithDocsWithRestParams(name: string, ...ages: number[])`
---------------------------------------------------------------------

Fully documented static method with rest parameters.

|Parameter|Type      |Optional?|Multiple?|Description        |
|---------|----------|---------|---------|-------------------|
|**name** |`string`  |No       |No       |A string parameter.|
|**ages** |`number[]`|No       |*Yes*    |A rest parameter.  |

```JavaScript
// Sample
publicStaticWithDocsWithRestParams("my name", 1, 2, 3);
```

`privateStaticWithDocsWithParams(name: string, age: number)`
------------------------------------------------------------

Fully documented private static method.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**name** |`string`|No       |No       |A string parameter.|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
privateStaticWithDocsWithParams("my name", 0);
```

`publicNoDocsNoParams()`
------------------------

No documentation



```JavaScript
// Sample
publicNoDocsNoParams();
```

`publicWithDocsNoParams()`
--------------------------

Fully documented method.



```JavaScript
// Sample
publicWithDocsNoParams();
```

`publicNoDocsWithParams(name: string, age: number)`
---------------------------------------------------

No documentation

|Parameter|Type    |Optional?|Multiple?|Description     |
|---------|--------|---------|---------|----------------|
|**name** |`string`|No       |No       |No documentation|
|**age**  |`number`|No       |No       |No documentation|

```JavaScript
// Sample
publicNoDocsWithParams("my name", 0);
```

`publicWithDocsWithParams(name: string, age: number)`
-----------------------------------------------------

Fully documented method with parameters.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**name** |`string`|No       |No       |A string parameter.|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
publicWithDocsWithParams("my name", 0);
```

`publicWithDocsWithParamsMultipleDecorators(name: string, age: number)`
-----------------------------------------------------------------------

Fully documented method with multiple method decorators and parameters.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**name** |`string`|No       |No       |A string parameter.|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
publicWithDocsWithParamsMultipleDecorators("my name", 0);
```

`publicWithDocsWithParamsWithReturn(name: string, age: number)`
---------------------------------------------------------------

Fully documented method with parameters and a return type.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**name** |`string`|No       |No       |A string parameter.|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
publicWithDocsWithParamsWithReturn("my name", 0);
```

`publicWithDocsWithIgnoredParams(age: number)`
----------------------------------------------

Fully documented method with ignored parameters.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
publicWithDocsWithIgnoredParams(0);
```

`publicWithDocsWithOptionalParams(name: string, age?: number)`
--------------------------------------------------------------

Fully documented method with optional parameters.

|Parameter|Type    |Optional?|Multiple?|Description                  |
|---------|--------|---------|---------|-----------------------------|
|**name** |`string`|No       |No       |A string parameter.          |
|**age**  |`number`|*Yes*    |No       |An optional number parameter.|

```JavaScript
// Sample
publicWithDocsWithOptionalParams("my name", 0);
```

`publicWithDocsWithRestParams(name: string, ...ages: number[])`
---------------------------------------------------------------

Fully documented method with rest parameters.

|Parameter|Type      |Optional?|Multiple?|Description        |
|---------|----------|---------|---------|-------------------|
|**name** |`string`  |No       |No       |A string parameter.|
|**ages** |`number[]`|No       |*Yes*    |A rest parameter.  |

```JavaScript
// Sample
publicWithDocsWithRestParams("my name", 1, 2, 3);
```

`privateWithDocsWithParams(name: string, age: number)`
------------------------------------------------------

Fully documented private method.

|Parameter|Type    |Optional?|Multiple?|Description        |
|---------|--------|---------|---------|-------------------|
|**name** |`string`|No       |No       |A string parameter.|
|**age**  |`number`|No       |No       |A number parameter.|

```JavaScript
// Sample
privateWithDocsWithParams("my name", 0);
```

`publicWithDocsWithInnerParams(sentence: string)`
-------------------------------------------------

Documented method with inner parameters.

|Parameter   |Type    |Optional?|Multiple?|Description        |
|------------|--------|---------|---------|-------------------|
|**sentence**|`string`|No       |No       |A string parameter.|

```JavaScript
// Sample
publicWithDocsWithInnerParams("my sentence");
```

