module.exports = function check(str, bracketsConfig) {
 // make a copy of "str"
 let copy = str.slice();  
 // loop through the bracketsConfig items
 for (let i of bracketsConfig) {
   
  // turn each item into a string and check if it can be found inside "str" (copy)
   let index = copy.indexOf(i.join(''));
    if (index >= 0) {
      // if the item found, cut it out from the copy  
      copy = copy.slice(0, index) + copy.slice(index + 2);
      // repeat these steps until copy is empty (true) or no match could be found (end of loop)
      return copy.length === 0 ? true : check(copy, bracketsConfig);
    }
  }
  // check and match failed 
  return false
}
