/*
  Insertion Sort
  Pseudocode: for i ← 1 to length(A)-1
                j ← i
                while j > 0 and A[j-1] > A[j]
                    swap A[j] and A[j-1]
                    j ← j - 1
                end while
              end for
  Worst Case Performance: O(n^2)
*/
let data = [2,7,1,3,9,8,6,10,4,5];

const insertionSort = items => {
  let len = items.length;
  for(let i = 1; i < len; i++){
    let j = i;
    while(j > 0 && items[j-1] > items[j]) {
      //ES6 destructuring to swap items in an array
      [ items[j-1],items[j] ] = [ items[j],items[j-1] ];
      j--;
    }
  }
  return items;
}

insertionSort(data); // -> [1,2,3,4,5,6,7,8,9,10]
