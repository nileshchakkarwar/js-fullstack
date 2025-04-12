||||
|-|-|-|
|Demo HTML File|➯<br>➯<br>➯<br>|- [CSS Selector Demo](/codefiles/cssSelectorsDemo.html)|
|Universal Selector|\*|- Applies across all the elements|
|Class Selectors|.classname{color:yellow;}|- Selecting a group of different TAGs<br>- class is a mechanism to group different tags in CSS or HTML page.|
|Id Selector|#id{style:'display:none'}|- This targets individual element on HTML page|
|Child Selector|div > a{background-color:'orange'}|- This select only the immediate child of div is a then only work<br>- for accessing any depth we need descendants<br>- if div has main has a then it will not apply |
|Descendant Selector|div p{backgroun: 'yellow'}|- Applies to all children even if they are not direct child<br>- So only condition that is checked is if div has p then apply css on that p|
|Element Selectors|div{background-color: red;}|- Applies on TAG level<br>- Issue is that it applies across all divs & has no control<br>- Hence should be used judiciously and best way to use it is to use it as default if no styling is applied|
|Pseudo Selectors|p:visited<br>a:clicked<br>a:hover|- Changing the looks based on some events|
