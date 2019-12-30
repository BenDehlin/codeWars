function evenForLoop(arr){
  let even =[]
  let odd = []
  for(let i = 0; i < arr.length; i++){
    arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i])
  }
  return [even, odd]
}

function evenForLoop2(arr){
  let even = []
  let odd = []
  for(let x of arr){
    x % 2 ? odd.push(x) : even.push(x)
  }
  return [even, odd]
}

function evenForEach(arr){
  let even = []
  let odd = []
  arr.forEach(x => x % 2 ? odd.push(x) : even.push(x))
  return [even, odd]
}
console.log(evenForLoop([1, 4, 3, 3, 2, 5, 2]))
console.log(evenForLoop2([1, 4, 3, 3, 2, 5, 2]))
console.log(evenForEach([1, 4, 3, 3, 2, 5, 2]))


function calcFuel(rods){
  let time = 11 * rods
  let obj = {
    lava: 0,
    blazeRod: 0,
    coal: 0,
    wood: 0,
    stick: 0
  }
  return recurseFuel(time, obj)
}

function recurseFuel(time, object){
  if(time >= 800){
    object.lava += 1
    time -= 800
  }else if(time >= 120){
    object.blazeRod +=1
    time -= 120
  }else if(time >= 80){
    object.coal +=1
    time -= 80
  }else if(time >= 15){
    object.wood +=1
    time -= 15
  }else if(time >= 1){
    object.stick +=1
    time -= 1
  }if (time > 0){
    recurseFuel(time, object)
  }
  return object
}
console.log(calcFuel(50))


function isValidWalk(directions){
  let location = [0, 0]
  if(directions.length !== 10){
  return false
  }
  for(i = 0; i < directions.length; i++){
    if(directions[i] === 'n'){
      location[1] += 1
    }
    if(directions[i] === 'w'){
      location[0] -= 1      
    }
    if(directions[i] === 's'){
      location[1] -= 1
    }
    if(directions[i] === 'e'){
      location[0] += 1
    }
  }
  return location[0] === 0 && location[1] === 0 ? true : false
}
console.log(isValidWalk(['n', 's', 'w', 'e']))


function strongestEven(n, m){
  let arr = []
  for(let i = n; i <= m; i++){arr.push(i)}
  arr = returnEvens(arr)
  arr = makeObjects(arr)
  arr = recurseArray(arr)
  arr = arr.sort(function(a, b){
    return b.count - a.count
  })
  return arr[0].num
}

let returnEvens = arr => arr.filter(x => x % 2 === 0)
let makeObjects = arr => arr.map(x => {
  return {num: x, count: 0}
  })
let recurseArray = arr => arr.map(x => {
  x.count = recurseEvens(x.num, x.count)
  return x
})

let recurseEvens = (num, count = 0) => {
  if(num % 2 === 0 && num !== 0){
    num /= 2
    count++
  }
  if(num % 2 === 0 && num !== 0){
    count = recurseEvens(num, count)
  }
  return count
}

console.log(strongestEven(2, 8))

function strongestEven2(n, m){
  let arr = []
  for(let i = n; i <= m; i++){arr.push(i)}
  arr = arr.filter(x => x % 2 === 0)
  .map(x => {return {num: x, count: 0}})
  arr = arr.sort(function(a, b){
    return b.count - a.count
  })
  .map(x => {
  x.count = recurseEvens2(x.num, x.count)
  return x
})
  .sort(function(a, b){
    return b.count - a.count
  })
  return arr[0].num
}

let recurseEvens = (num, count = 0) => {
  if(num % 2 === 0 && num !== 0){
    num /= 2
    count++
  }
  if(num % 2 === 0 && num !== 0){
    count = recurseEvens2(num, count)
  }
  return count
}

console.log(strongestEven2(2, 8))


var countDeafRats = function(town) {
  town = town.replace(/\s/g, '')
  let arr = town.split('P')
  let deaf = 0
  if(arr[0].length > 0){
    for(let i = 0; i < arr[0].length; i+=2){
      if(arr[0][i] === 'O' && arr[0][i+1] === '~'){
        deaf ++
      }
    }
  }
  if(arr[1].length > 0){
    for(let i = 0; i < arr[1].length; i+=2){
      if(arr[1][i] === '~' && arr[1][i+1] === 'O'){
        deaf ++
      }
    }
  }
  return deaf
}

console.log(countDeafRats('P~OO~~OO~O~'))


function stripComments(str, comment) {
  arr = str.split('\n')
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      for(let k = 0; k < comment.length; k++){
        if(arr[i][j] === comment[k]){
          arr[i] = arr[i].substring(0, j-1)
        }
      }
    }
  }
  return arr.join('\n')
};

console.log(stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ['#', '!']))


function getSum(a, b){
  sum = 0
  for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
    sum += i
  }
  return sum
}

console.log(getSum(3, 15))


function humanReadable(seconds) {
  let minutes = seconds / 60
  let hours = Math.floor(minutes / 60)
  minutes = Math.floor(minutes % 60)
  seconds = seconds % 60
  if(hours <= 9){
    hours = "0"+hours.toString()
  }
  if(minutes <= 9){
    minutes = "0"+minutes.toString()
  }
  if(seconds <= 9){
    seconds = "0"+seconds.toString()
  }
  return `${hours}:${minutes}:${seconds}`
}

console.log(humanReadable(359999))


function anagrams(word, words) {
  let test = words.filter(x => anagram(word, x))
  return test
}

function anagram(str1, str2){
  bool1 = true
  bool2 = true
  obj1 = str1.split('').map(x =>{
    return {char: x, bool: false}})
  obj2 = str2.split('').map(x =>{
    return {char: x, bool: false}})
  obj1.forEach(obj => {
    obj2.forEach( object =>{
      if(obj.char === object.char && obj.bool === false && object.bool === false){
        obj.bool = true
        object.bool = true
      }
    })
  })
  obj1.forEach(x =>{
    if(x.bool === false){
      bool1 = false
    }
  })
  obj2.forEach(x =>{
    if(x.bool === false){
      bool2 = false
    }
  })
  if(bool1 === true && bool2 === true){
    return true
  }
  return false
}


console.log(anagrams('abcd', ['dcba', 'awefwaef', 'fewfwea', 'awefawef']))


function anagrams2(word, words){
  return words.filter(x => x.split('').sort().join('') === word.split('').sort().join(''))
}

console.log(anagrams2('abcd', ['dcba', 'awefwaef', 'fewfwea', 'awefawef']))
