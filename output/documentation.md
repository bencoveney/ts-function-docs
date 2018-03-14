
myClass
=======

Class documentation


`noDocsNoParams()`
------------------

No documentation



`withDocsNoParams()`
--------------------

This one has documentation



`noDocsWithParams(sample: string)`
----------------------------------

No documentation

|Parameter |Type    |Optional?|Multiple?|Description     |
|----------|--------|---------|---------|----------------|
|**sample**|`string`|No       |No       |No documentation|

`someDocsWithParams(sample: string)`
------------------------------------

This one has documentation but not for the parameter.

|Parameter |Type    |Optional?|Multiple?|Description     |
|----------|--------|---------|---------|----------------|
|**sample**|`string`|No       |No       |No documentation|

`withDocsWithParams(sample: string)`
------------------------------------

This one has documentation.

|Parameter |Type    |Optional?|Multiple?|Description                     |
|----------|--------|---------|---------|--------------------------------|
|**sample**|`string`|No       |No       |The parameter is documented too.|

`noDocsWithParamsIgnored(other: number)`
----------------------------------------

No documentation

|Parameter|Type    |Optional?|Multiple?|Description     |
|---------|--------|---------|---------|----------------|
|**other**|`number`|No       |No       |No documentation|

`withDocsWithParamsIgnored(other: number)`
------------------------------------------

This one has documentation.

|Parameter|Type    |Optional?|Multiple?|Description                     |
|---------|--------|---------|---------|--------------------------------|
|**other**|`number`|No       |No       |The parameter is documented too.|

`noDocsWithParamsDecorated(other: number)`
------------------------------------------

No documentation

|Parameter|Type    |Optional?|Multiple?|Description     |
|---------|--------|---------|---------|----------------|
|**other**|`number`|No       |No       |No documentation|

`withDocsWithParamsDecorated(other: number)`
--------------------------------------------

This one has documentation.

|Parameter|Type    |Optional?|Multiple?|Description                            |
|---------|--------|---------|---------|---------------------------------------|
|**other**|`number`|No       |No       |A parameter with a different decorator.|

`withDocsWithOptionalParams(other: number, optional?: string)`
--------------------------------------------------------------

This one has documentation.

|Parameter   |Type    |Optional?|Multiple?|Description                     |
|------------|--------|---------|---------|--------------------------------|
|**other**   |`number`|No       |No       |The parameter is documented too.|
|**optional**|`string`|*Yes*    |No       |An optional parameter.          |

`withDocsWithRestParams(other: number, ...rest: string[])`
----------------------------------------------------------

This one has documentation.

|Parameter|Type      |Optional?|Multiple?|Description                     |
|---------|----------|---------|---------|--------------------------------|
|**other**|`number`  |No       |No       |The parameter is documented too.|
|**rest** |`string[]`|No       |*Yes*    |A rest parameter.               |

