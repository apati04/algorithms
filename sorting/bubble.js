/*
  Bubble Sort
  Worst case performane O(n^2)
*/
let data = [ 4,7,2,4,3,6,1,9,8,0 ];

function bubbleSort(items) {
  let len = items.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-i; j++) {
      if(items[j]>items[j+1]){
        //ES6 Destructuring
        [items[j+1], items[j]] = [items[j],items[j+1]];
      }
    }
  }
  return items;
}

bubbleSort(data); // -> [ 0,1,2,3,4,5,6,7,8,9 ]
