||||
|-|-|-|
|Selection Goal|CSS Selector|XPath|
|All elements	|*|	//*|
|All \<a\> elements	|a	| //a|
|All \<a\> child elements also called decendants|a * - note the space in between|	//a//*|
|All \<a\> immediate child elements	|a > *|	//a/*|
|Element by ID	|#elementID|	//*[@id='elementID']|
|Element by class	|.className|	//*[contains(@class,'className')]|
|Element by attribute value	|[attribute='value']|	//*[@attribute='value']|
|All \<a\> elements with a \<span\> child	|Not possible|	//a[span]|
|First child of all \<a\> elements	|a > *:first-child|	//a/*[1]|
|Getting text nodes	|Not possible|	//a/text()|
|Getting href attribute values from \<a\> elements	|Not possible|	//a/@href|
|All \<a\> elements containing "Click"	|a:contains('Click')|	//a[contains(text(),'Click')]|
|Previous element of \<a\> elements	|a:has(+ *), but not supported by all browsers|	//a/preceding-sibling:: *|
|Next element of \<a\> elements	|a + sibling|	//a/following-sibling:: *|