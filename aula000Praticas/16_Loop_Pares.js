function loopPares(num) {
    for (let i = num; i >= 0; i--) {
      if (i % 2 === 0) {
        console.log(i + " - Loop Par");
      } else {
        console.log(i + " - Loop Ímpar");
      }
    }
  }
  
  console.log(loopPares(8));
  console.log(loopPares(17));
  console.log(loopPares(24));
  