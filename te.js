const infood = document.getElementById("infood");
const inbtn = document.getElementById("inbtn");
const res = document.getElementById("res");

inbtn.addEventListener(
  ("click",
  () => {
    res.innerText = infood.value;
  })
);
