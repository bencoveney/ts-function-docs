
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
publicStaticNoDocsWithParams("My name", 0);
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
publicStaticWithDocsWithParams("My name", 0);
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
publicStaticWithDocsWithParamsMultipleDecorators("My name", 0);
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
publicStaticWithDocsWithParamsWithReturn("My name", 0);
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
publicStaticWithDocsWithOptionalParams("My name", 0);
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
publicStaticWithDocsWithRestParams("My name", 1, 2, 3);
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
privateStaticWithDocsWithParams("My name", 0);
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
publicNoDocsWithParams("My name", 0);
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
publicWithDocsWithParams("My name", 0);
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
publicWithDocsWithParamsMultipleDecorators("My name", 0);
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
publicWithDocsWithParamsWithReturn("My name", 0);
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
publicWithDocsWithOptionalParams("My name", 0);
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
publicWithDocsWithRestParams("My name", 1, 2, 3);
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
privateWithDocsWithParams("My name", 0);
```

`publicWithDocsWithInnerParams(sentence: string)`
-------------------------------------------------

Documented method with inner parameters.

|Parameter   |Type    |Optional?|Multiple?|Description        |
|------------|--------|---------|---------|-------------------|
|**sentence**|`string`|No       |No       |A string parameter.|

```JavaScript
// Sample
publicWithDocsWithInnerParams("My sentence");
```

`publicWithMultipleParamTypes(ambiguous: string | number)`
----------------------------------------------------------

Documented method with multiple parameter types.

|Parameter    |Type                |Optional?|Multiple?|Description                 |
|-------------|--------------------|---------|---------|----------------------------|
|**ambiguous**|`string` or `number`|No       |No       |It could be almost ANYTHING!|

```JavaScript
// Sample
publicWithMultipleParamTypes("My ambiguous" or 0);
```

`publicWithCamelCaseParameter(nameOfPerson: string)`
----------------------------------------------------

Method with a camel case string parameter

|Parameter       |Type    |Optional?|Multiple?|Description        |
|----------------|--------|---------|---------|-------------------|
|**nameOfPerson**|`string`|No       |No       |A string parameter.|

```JavaScript
// Sample
publicWithCamelCaseParameter("My name of person");
```

