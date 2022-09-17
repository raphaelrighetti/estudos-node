const userArgs = process.argv.slice(2);

const userObj = userArgs.map((element) => {
  const oneArgArr = element.split("=");
  const key = oneArgArr[0];
  const value = oneArgArr[1];
  const myObj = { [key]: value };

  return myObj;
});

console.log(userObj);
