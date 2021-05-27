fun(num: number) {
    let result = 0;
    if (num > 2147483647 || num < -2147483647) {
      result = 0;
    } else {
      const arr = num.toString().split('');
      if (arr[0] === '-') {
        result = -parseInt(arr.reverse().join(''));
      } else {
        result = parseInt(arr.reverse().join(''));
      }
    }

    return result > 2147483647 || result < -2147483647 ? 0 : result;
  }
