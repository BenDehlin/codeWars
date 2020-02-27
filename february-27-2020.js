const superSize = (num) => {
  return num.toString().split('').map(e => Number(e)).sort((a, b) => b - a).join('')
}

console.log(superSize(51))

const countDevelopers = (list) => {
  return list.reduce((acc, curr) => {
    if(curr.continent === 'Europe' && curr.language === 'JavaScript'){
      acc++
    }
    return acc
  }, 0)
}

const fizzBuzz = (n) => {
  let arr = []
  for(let i = 1; i <= n; i++){
    if(i % 15 === 0){
      arr.push('FizzBuzz') 
    }else if(i % 5 === 0){
      arr.push('Buzz') 
    }else if(i % 3 === 0){
      arr.push('Fizz') 
    }else{
      arr.push(i)
    }
  }
  return arr
}

const fizzBuzz2 = (n) => {
  let arr = []
  for(let i = 1; i <= n; i++){
    let str = ''
    if(i % 3 === 0){
      str += 'Fizz'
    }if(i % 5 === 0){
      str += 'Buzz'
    }
    arr.push(str ? str : i)
  }
  return arr
}

console.log(fizzBuzz(21))
console.log(fizzBuzz2(41))
