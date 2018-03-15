
myClass
=======

Class documentation


`noDocsNoParams()`
------------------

No documentation



```JavaScript
// Sample
noDocsNoParams();
```

`withDocsNoParams()`
--------------------

This one has documentation



```JavaScript
// Sample
withDocsNoParams();
```

`noDocsWithParams(sample: string)`
----------------------------------

No documentation

|Parameter |Type    |Optional?|Multiple?|Description     |
|----------|--------|---------|---------|----------------|
|**sample**|`string`|No       |No       |No documentation|

```JavaScript
// Sample
noDocsWithParams("my sample");
```

`someDocsWithParams(sample: string)`
------------------------------------

This one has documentation but not for the parameter.

|Parameter |Type    |Optional?|Multiple?|Description     |
|----------|--------|---------|---------|----------------|
|**sample**|`string`|No       |No       |No documentation|

```JavaScript
// Sample
someDocsWithParams("my sample");
```

`withDocsWithParams(sample: string)`
------------------------------------

This one has documentation.

|Parameter |Type    |Optional?|Multiple?|Description                     |
|----------|--------|---------|---------|--------------------------------|
|**sample**|`string`|No       |No       |The parameter is documented too.|

```JavaScript
// Sample
withDocsWithParams("my sample");
```

`noDocsWithParamsIgnored(other: number)`
----------------------------------------

No documentation

|Parameter|Type    |Optional?|Multiple?|Description     |
|---------|--------|---------|---------|----------------|
|**other**|`number`|No       |No       |No documentation|

```JavaScript
// Sample
noDocsWithParamsIgnored(0);
```

`withDocsWithParamsIgnored(other: number)`
------------------------------------------

This one has documentation.

|Parameter|Type    |Optional?|Multiple?|Description                     |
|---------|--------|---------|---------|--------------------------------|
|**other**|`number`|No       |No       |The parameter is documented too.|

```JavaScript
// Sample
withDocsWithParamsIgnored(0);
```

`noDocsWithParamsDecorated(other: number)`
------------------------------------------

No documentation

|Parameter|Type    |Optional?|Multiple?|Description     |
|---------|--------|---------|---------|----------------|
|**other**|`number`|No       |No       |No documentation|

```JavaScript
// Sample
noDocsWithParamsDecorated(0);
```

`withDocsWithParamsDecorated(other: number)`
--------------------------------------------

This one has documentation.

|Parameter|Type    |Optional?|Multiple?|Description                            |
|---------|--------|---------|---------|---------------------------------------|
|**other**|`number`|No       |No       |A parameter with a different decorator.|

```JavaScript
// Sample
withDocsWithParamsDecorated(0);
```

`withDocsWithOptionalParams(other: number, optional?: string)`
--------------------------------------------------------------

This one has documentation.

|Parameter   |Type    |Optional?|Multiple?|Description                     |
|------------|--------|---------|---------|--------------------------------|
|**other**   |`number`|No       |No       |The parameter is documented too.|
|**optional**|`string`|*Yes*    |No       |An optional parameter.          |

```JavaScript
// Sample
withDocsWithOptionalParams(0, "my optional");
```

`withDocsWithRestParams(other: number, ...rest: string[])`
----------------------------------------------------------

This one has documentation.

|Parameter|Type      |Optional?|Multiple?|Description                     |
|---------|----------|---------|---------|--------------------------------|
|**other**|`number`  |No       |No       |The parameter is documented too.|
|**rest** |`string[]`|No       |*Yes*    |A rest parameter.               |

```JavaScript
// Sample
withDocsWithRestParams(0, "rest 1", "rest 2", "rest 3");
```

