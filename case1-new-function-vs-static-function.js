(function () {
  const times = 100000000;
  function flip(i) {
    return i % 2 === 0 ? i : -i;
  }

  let result = 0;
  let start = new Date().getTime();
  for (let i = 0; i < times; i++) {
    result += flip(i);
  }
  console.log(new Date().getTime() - start, result);


  result = 0;
  start = new Date().getTime();
  for (let i = 0; i < times; i++) {
    function flip(i) {
      return i % 2 === 0 ? i : -i;
    }
    result += flip(i);
  }
  console.log(new Date().getTime() - start, result);
})();

