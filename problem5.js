function countNum(list) {
  return list.filter((el) => /\d/.test(el));
}

console.log(countNum(["abc", "ab10c", "a10bc", "bcd"]))
