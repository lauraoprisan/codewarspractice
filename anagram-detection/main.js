const isAnagram = function(test, original) {
    const testArray = test.toLowerCase().split('').sort().join('')
    const originalArray = original.toLowerCase().split('').sort().join('')
    return testArray==originalArray
  };
  