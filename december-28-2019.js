function addLetters(...letters) {
  if(letters[0] === null){
    return 'z'
  }
  const code = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }
  let count = letters.map(val => code[val]).reduce((total, curr) => total + curr)
  while(count > 26){count -= 26}
  return Object.keys(code).find(key => code[key] === count)
}

console.log(addLetters('a', 'b'))