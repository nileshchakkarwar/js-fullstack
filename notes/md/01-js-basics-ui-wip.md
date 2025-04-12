JS Notes for easy revision
===============

Reference Link:
---
* [Chai & Code Hitesh Choudhary YouTube](https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)

Git repo Code & Notes:
---
* https://gitlab.com/nileshchakkarwar
* doesn't login with gmail creds but use nileshchakkarwar@gmail.com for login

|||EG|Desc|
|-|-|-|-|
|**31: DOM Intro**||||>--------------EOL--------------<
||JS Founder||- Brendan Eich|>--------------EOL--------------<
||2 Imp areas||- Object and elements in a page ➯ How a webpage is organised<br>- Events ➯ what happens if we click somewhere on the page|>--------------EOL--------------<
||What is \<!DOCTYPE html\>||- This is just to notify the browser/consumer that this is a html:5 type doc|>--------------EOL--------------<
||Object Hierarchy||- EG Traversing path: windows object ➯ document ➯ html ➯ body ➯ [any node or attribute]<br>- [DOM Visualizer](https://bioub.github.io/dom-visualizer/)<br>- [How HTML page objects are organised](/images/domStructure.png)<br>- Important jargons NODE & ATTRIBUTERS<br>- NODES: head body paragraph<br>- ATTRIBUTES: class, ids etc are attributes<br>- window.document ➯ referes to the webpage that going to be rendered!|>--------------EOL--------------<
||console.log(document)<br>vs<br>console.dir(document)||- log only prints out a toString representation, whereas dir prints out a navigable tree.|>--------------EOL--------------<
||Node Locators/selectors||- [Webpage: CSS vs Xpath](https://www.zenrows.com/blog/xpath-vs-css-selector#conclusion)<br>- [Syntax comparasion CSS Selectors vs Xpath](/notes/md/05-css_selectors-vs-xpath.md) |>--------------EOL--------------<
||XPath|- [LambdaTest Website](https://www.lambdatest.com/blog/complete-guide-for-using-xpath-in-selenium-with-examples/)|- [XPATH doc](/notes/md/04-xpath-details.md)|>--------------EOL--------------<
||CSS Selector||- [CSS Selector MD file for details](/notes/md/03-css-selectors.md)|>--------------EOL--------------<
||Main Difference Xpath vs CSS||- XPath is primarily designed for navigating and querying XML documents, and XPath expressions are great for precise data extraction. Instead, CSS selectors are specifically intended for selecting elements in HTML documents, and they excel at selecting elements via CSS but don't work on non-HTML documents like XML.|>--------------EOL--------------<
||Why XPath preferred over CSS||- XPath is preferred over CSS selectors for its precision and advanced capabilities. It excels in granular element selection from highly nested web pages. As opposed to CSS selectors, it also allows for the retrieval of attributes and text nodes. Plus, its bidirectional tree traversal capabilities are crucial for navigating hierarchical layouts. While CSS selectors are ideal for basic tasks, XPath shines in complex scenarios.|>--------------EOL--------------<
||Xpath or css-selectors||- querySelector supports jQuery syntax and supports all CSS Selector selection and hence that is used more in coding in JS.<br>- It is also quite optimized as XPath is method to traverse XML document.<br>- HTML is also a subset of XML doc but css-selectors specialize in HTML hence they are more fast!<br>- For granularity use XPath|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**32: DOM Selector, NodeList & HTMLCollection**||||>--------------EOL--------------<
||Tag:Attribute:Property:Content||- TAG ➯ a or p or div <br>- Attributes ➯ id or class or href or Style or any custom attributes<br>- Properties ➯ display or visibility or background color or borderradius etc<br>- Content ➯ \<p\> Content is here\</p\>|>--------------EOL--------------<
||How to define and use a style|- [Def & Use styles](/images/def-n-use-style.png)|- Notice how we define a style of background color in head tag and used it in body tag!|>--------------EOL--------------<
||How to select/access an element/node|- [Getting a node by ID](/images/getElementById.png)|- document.getElementById('id-001') ➯ This will return the entire HTML Tag<br>- Similarly there are getElementByClassName and so on<br>- But mostly we use querySelector or querySelectorAll|>--------------EOL--------------<
||NodeList<br>vs<br>HTMLCollection||- Node list is like a array but not an array<br>- NodeList use forEach ➯ that is anyways part of its prototype<br>- NodeList to Array conversion ➯ Array.from(document.querySelectorAll('h1');)<br>- HTMLCollection ➯ Although it hold elements like array but it neither has forEach or filter or anything so this one needs to be convreted to Array and then only iteration is possible<br>- HTMLColleciton to Array ➯ Same Array.for(some Nodelist)|>--------------EOL--------------<
||evaluate<br>vs<br>querySelector||- document.evaluate(XPath)<br>- document.querySelector('jQuery or css-selectors') ➯ will give the first occurance of the tag<br>- document.querySelectorAll('jQuery or css-selectors') ➯ will give HTMLCollection, that is similar to JS array but not the same, of all the nodes |>--------------EOL--------------<
||Getting Attributes||- document.getElementById('id').getAttribute('class') returns class value!|>--------------EOL--------------<
||Setting Attributes||- document.getElementById('id').setAttribute('attributeName', 'value')<br>- If the attribute, while setting the attribute, is already present then it gets overridden.<br>- Meaning it is important that we retain the old values and add new values|>--------------EOL--------------<
||Sytle Attribute||- Special attribute that defines how the element should look like<br>- General syntax style="color:blue"<br>- let title = document.getElementById('id-001')<br>- title.style.color = 'white' ➯ This will set the font color to white<br>- title.style.backgroundColor = 'yellow' ➯ This will set the background color to yellow<br>- title.style.display = 'none'; ➯ this will hide the text or the tag meaning it will not be visible on screen |>--------------EOL--------------<
||Ways to extract Content||- let title = document.getElementById('id-001')<br>- title.textContent<br>- title.innerHTML<br>- title.innerText|>--------------EOL--------------<
||innerText<br>vs<br>textContent<br>vs<br>innerHTML||- innerText ➯ shows only visible text, text that is not hidden by any css property<br>- textContent ➯ will display all the text irrespective it is visible or not but will remove any tags<br>- innerHTML ➯ will display content with HTML tags included usually span tag|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**33. Add Element to Existing DOM**||||>--------------EOL--------------<
||Setup||- HTML file will have a script tag that will have code<br>- We will be checking the console for the output|
||Traversing Nodes||- List all childern of parent<br>- Getting First Child <br>- Getting Last Child<br>- Traversing to Siblings|>--------------EOL--------------<
||Adding Elements in Dom||- Step 1 ➯ Defining the properties of the Tag<br>- Adding/Attaching/Appending that tag to the document|>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<



- https://youtu.be/xAvTgCsCHLs?si=3Ux1QJNTHoSUOeQP&t=1036