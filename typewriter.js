const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const val of sentence) {
  setTimeout(() => process.stdout.write(val), delay);
  delay += 50;
}
setTimeout(() => process.stdout.write(`\n`), delay);