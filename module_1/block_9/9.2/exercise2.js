const promise = new Promise((resolve, reject) => {
  let array = [];
  let squaredArray = 0;

  for (let index = 0; index < 10; index += 1) {
    array.push(Math.floor(Math.random() * 50) + 1);
  }

  squaredArray = array.reduce(
    (acc, currentValue) => (acc += Math.pow(currentValue, 2)),
    0
  );

  if (squaredArray > 8000) {
    return reject(
      new Error("É mais de oito mil! Essa promise deve estar quebrada!")
    );
  }

  const dividers = [2, 3, 5, 10];
  let result = dividers.map((element) => Math.floor(squaredArray / element));
  resolve(result);
})
  .then((response) => console.log(response))
  .catch((response) => console.log(response));
