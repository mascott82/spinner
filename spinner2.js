process.stdout.write('hello from spinner1.js... \rheyyy\n');

let timer = 100;
let symbols = ["\r|", "\r/", "\r-", "\r\\"];

symbols.forEach(symbol => {
  setTimeout(() => {
    process.stdout.write(symbol);
  }, timer);
  timer += 200;
});