function inAscOrder1(arr) {
  let arrSorted = arr.map(x => x).sort((a, b)=> a-b)
  let bool = true
  arr.forEach((y, z) =>{
    if(y !== arrSorted[z]){
      bool = false
    }
  })
  return bool
}
console.log(inAscOrder1([1, 3, 2, 4, 7, 19]))

function inAscOrder2(arr){
  let bool = true
  arr.forEach((x, y, z) => {if(x > z[y+1]){bool = false}})
  return bool
}
console.log(inAscOrder2([1, 3, 2, 4, 7, 19]))

function findSmallestInt(args) {
    return args.sort(function(a, b){return a-b})   
}
console.log(findSmallestInt([78,56,232,12,8]))

function bears(x, s){
  mate = s.split('').filter((val, ind, arr) => {
    if((val === 'B' && arr[ind+1] === '8') || (val === '8' && arr[ind+1] === 'B')){
      arr[ind] = 0
      arr[ind+1] = 0
      return val
    }
  }).map(a => {return a === "B" ? "B8" : "8B"}).join('')
  return mate.length/2 >= x ? [mate, true] : [mate, false]
}
console.log(bears(8, 'hBidjBB8BB8B888i8BBB8'))

function duplicateCount(str){
  let word = str.toUpperCase().split('')
  let totalCount = 0
  var uniqueCharacters = word.map(char => {
    return {
      character: char,
      count: 1
    }
  })
  .reduce((total, current) => {
    total[current.character] = (total[current.character] || 0) + current.count
    return total
  }, {})
  for(let k in uniqueCharacters){
    if(uniqueCharacters[k] > 1){
      totalCount++
    }
  }
  return totalCount
}
console.log(duplicateCount('1122ffffeffw123'))

function pigIt(str){
  //works for alternative pig latin where you do something different for vowels vs consonants
  words = str.split(/(\W+)/)
  console.log(words)
  newWords = words.map(x => {
    if(!/\w/.test(x)) return x
    else if (/[aeiou]/.test(x.charAt(0))){
      console.log(true)
      return x.substring(1) + x.charAt(0) + "way"
    }
    return x.substring(1) + x.charAt(0) + "ay"
    })
    return newWords.join('')
}

console.log(pigIt('This is A, test!'))


function mergeArrays(a, b){
  arr = []
  for(let i = 0; i < Math.max(a.length, b.length); i++){
    a[i] ? arr.push(a[i]) : null
    b[i] ? arr.push(b[i]) : null
  }
  return arr
}

console.log(mergeArrays([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e', 'f', 'g']))
