const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const i in sentence) {
  if(Number(i) === (sentence.length - 1)){
    setTimeout(() => {
      process.stdout.write(`${sentence[i]}\n`);
    }, delay);
  }else{
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, delay);
  }
  delay += 50;
}
