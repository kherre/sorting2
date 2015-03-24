function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;
   this.numElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setData = setData;
   this.swap = swap;
   this.bubbleSort = bubbleSort;//added all Sort files to main file
   this.selectionSort = selectionSort;
   this.insertionSort = insertionSort;
   this.mergeSort = mergeSort;

   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
   }
}

function setData() {
   for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * 
                          (this.numElements+1));
   }
}

function clear() {
   for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
   }
}

function insert(element) {
   this.dataStore[this.pos++] = element;
}

function setGaps(arr) {
	this.gaps = arr;
}

function toString() {
   var retstr = "";
   for (var i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
         retstr += "\n";
      }
   }
   return retstr;
}

function swap(arr, index1, index2) {
   var temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}


function bubbleSort() {
   var numElements = this.dataStore.length;
   var temp;
   for (var outer = numElements; outer >= 2; --outer) {
      for (var inner = 0; inner <= outer-1; ++inner) {
         if (this.dataStore[inner] > this.dataStore[inner+1]) {
            swap(this.dataStore, inner, inner+1);
         }
      }
      print(this.toString());
   }
} 

function insertionSort() {
   var temp, inner;
   for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
         this.dataStore[inner] = this.dataStore[inner-1];
         --inner;
      }
      this.dataStore[inner] = temp;
   }
}


function selectionSort() {
   var min, temp;
   for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
      min = outer;
      for (var inner = outer + 1; 
           inner <= this.dataStore.length-1; ++inner) {         
         if (this.dataStore[inner] < this.dataStore[min]) {
            min = inner;  
         }
      }
      swap(this.dataStore, outer, min);
   }
}  


function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }
  var step = 1;
  var left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left+step, right, right+step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left+step, right, arr.length);
    }
    step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (var i = 0; i < (rightArr.length-1); ++i) {
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  for (var i = 0; i < (leftArr.length-1); ++i) {
    leftArr[i] = arr[k];
    ++k;
  }
  rightArr[rightArr.length-1] = Infinity; //Infinity is a Sentinal value, it signifies the end of the branch
  leftArr[leftArr.length-1] = Infinity; 
  var m = 0;
  var n = 0;
  for (var k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    }
    else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  print("left array - ", leftArr);
  print("right array - ", rightArr);
}

