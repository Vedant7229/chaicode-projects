// Array Methods 
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];

// 1. at() - takes an integer value and returns the item at that index
function getItemAtIndex(arr1, index) {
    console.log ( ` Item at index ${index} is: ${arr1.at(index)}` );
    }
    getItemAtIndex(arr1, 2);

// 2. concat() - merges two or more arrays
    function mergeArrays(arr1,arr2) {
        const mergedArray = arr1.concat(arr2);
        console.log(`merged array ${mergedArray}`);
    }
    mergeArrays(arr1, arr2);

// 3. copyWithin() - shallow copies part of an array to another location in the same array

function copyWithinArray() {
    const copiedArray = arr1.copyWithin(0,3,4);
    console.log(copiedArray);
}
copyWithinArray(arr1, 0, 3, 4);

// 4. push() - adds one or more elements to the end of an array and returns the new length of the array 
    const newLength = arr1.push(6, 7);
    console.log(`New length of the array after push: ${newLength}`);

// 5. pop() - removes the last element from an array and returns that element
    
      const poppedElement = arr1.pop();
        console.log(`Popped element: ${poppedElement}`);

// 6. shift() - removes the first element from an array and returns that element

    const shiftedElement = arr1.shift();
    console.log(`Shifted element: ${shiftedElement}`);

// 7. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
    
    const unshiftedElement = arr1.unshift();
    console.log(`Unshifted element: ${unshiftedElement}`);

// 8. flat() - Flatten nested arrays.

    const arr3 = [1, 2, [[3, 4], [5, 6], 7]];
    const flattenedArray = arr3.flat();
    console.log(`Flattened array: ${flattenedArray}`);

// 9. map() – Transform each element, return a new array.

    const arr4 = [1, 2, 3, 4, 5];
    const mappedArray = arr4.map(x => x * 2);
    console.log(`Mapped array: ${mappedArray}`);

// 10. filter() – Filter elements based on a condition, return a new array.

    const filteredArray = arr4.filter(x => x > 2);
    console.log(`Filtered array: ${filteredArray}`);

// 11. reduce() – Reduce the array to a single value.

    const sum = arr4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`Sum of array elements: ${sum}`);

// 12. find() – Find the first element that satisfies a condition.
    const foundElement = arr4.find(x => x > 3);
    console.log(`First element greater than 3: ${foundElement}`);

// 13. findIndex() – Find the index of the first element that satisfies a condition.
    const foundIndex = arr4.findIndex(x => x > 3);
    console.log(`Index of first element greater than 3: ${foundIndex}`);

// 14. some() – Check if at least one element satisfies a condition.
    const check = arr4.some(x => x > 4);
    console.log(`Is there any element greater than 4? ${check}`);
    // boolean value ans only\

// 15. every() – Check if all elements satisfy a condition.

    const allCheck = arr4.every(x => x > 0);
    console.log(`Do all elements satisfy the condition (greater than 0)? ${allCheck}`);

// 16. sort() – Sort the elements of an array in place and return the sorted array.

    const unsortedArray = [5, 3, 8, 1, 2];
    const sortedArray = unsortedArray.sort((a, b) => a - b);
    console.log(`Sorted array: ${sortedArray}`);

// 17. reverse() – Reverse the elements of an array in place and return the reversed array.

    const reversedArray = sortedArray.reverse();
    console.log(`Reversed array: ${reversedArray}`);

// 18. slice() – Extract a section of an array and return a new array.

    const slicedArray = arr4.slice(1, 4);
    console.log(`Sliced array (from index 1 to 4): ${slicedArray}`);

// 19. splice() – Add/remove elements at any position

    const splicedArray = arr4.splice(2, 1, 10, 11);
    console.log(`Array after splice (removing 1 element at index 2 and adding 10, 11): ${arr4}`);
    