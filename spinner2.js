const spinners = ["|   ", "/   ", "-   ", "\\   ", "|   ", "\n"];

spinners.forEach((spinner, i) => {
  setTimeout(() => process.stdout.write("\r" + spinner),
    100 + 200 * i);
});