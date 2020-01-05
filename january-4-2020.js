function isIntArray(arr) {
  bool = true
  if(arr === null || arr === undefined){
  return false
  }

  if(Array.isArray(arr)){
    if(arr.length === 0){
      return true
    }
    arr.forEach(x =>{
      if(!Number.isInteger(x)){
        bool = false
      }
    })
  } else{
    return false
  }
    return bool;
}

isIntArray([1, 2, 3, NaN])

function isIntArray2(arr){
  return Array.isArray(arr) && arr.every(x => Math.floor(x) === x)
}

isIntArray2([1, 2, 3, 4])

function findLongest(str) {
  
  var spl = str.split(" ")
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
      }
    }
    return longest
}

findLongest('this is a test')

function digital_root(num){
  let sum = num.toString().split('').map(x =>Number(x)).reduce((acc, curr) => acc + curr)
  if(sum > 9){
    sum = digital_root(sum)
  }
  return sum
}

digital_root(17886723)

function generateRange(min, max, step){
  arr = []
  for(let i = min; i <= max; i+=step){
    arr.push(i)
  }
  return arr
}

console.log(generateRange(4, 7, 3))

function absentVowel(str){
  if(!/[a]/i.test(str)){
    return 0
  }
    if(!/[e]/i.test(str)){
    return 1
  }
    if(!/[i]/i.test(str)){
    return 2
  }
    if(!/[o]/i.test(str)){
    return 3
  }
    if(!/[u]/i.test(str)){
    return 4
  }
}
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'))

function comp(arr1, arr2){
  if(arr1 === null || arr2 === null){return false}
  arr1Sort = arr1.map(element => Math.pow(element, 2)).sort()
  return arr2.sort().every((element, index) => element === arr1Sort[index])
}

console.log(comp([1, 2, 3, 4], [4, 16, 9, 1]))

