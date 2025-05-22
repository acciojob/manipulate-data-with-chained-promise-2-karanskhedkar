//your JS code here. If required.
const initialArray = [1, 2, 3, 4];

const filterOdds = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data = data.filter((ele) => ele % 2 === 0);
      resolve(data);
    }, 1000);
  });
};

const applyMultiply = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data = data.map((ele) => ele * 2);
      resolve(data);
    }, 2000);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const outputDiv = document.getElementById("output");

  filterOdds(initialArray)
    .then((res) => {
      outputDiv.innerText = res.join(",");
      return applyMultiply(res);
    })
    .then((res) => {
      outputDiv.innerText = res.join(",");
    });
});
