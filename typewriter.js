const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  console.log(char);
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, 50); // <= 1s delay to make it noticeable. Can dial it down later.
}