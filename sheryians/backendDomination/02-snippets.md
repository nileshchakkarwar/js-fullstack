# Frequently used code
- [Frequently used code](#frequently-used-code)
  - [Generating list of random numbers](#generating-list-of-random-numbers)
  - [Occurance, frequency of elements](#occurance-frequency-of-elements)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## Generating list of random numbers

<pre>
<a href="#frequently-used-code" style="float:right">Top</a>
<code class="language-js">
let randomNums = Array.from({length:25},()=>Math.floor(Math.random()*50));
console.log(randomNums);
</code>
</pre>

## Occurance, frequency of elements

<pre>
<a href="#frequently-used-code" style="float:right">Top</a>
<code class="language-js">
const arr1 = Array.from({length:15},()=> Math.floor(Math.random()*5));
console.log(arr1);

let dict = {};
for (let elm of arr1){
    if(elm in dict){
        dict[elm ] = dict[elm] + 1;
    }else{
        dict[elm] = 1;
    }
}
console.log(dict);
</code>
</pre>