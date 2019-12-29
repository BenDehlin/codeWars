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
