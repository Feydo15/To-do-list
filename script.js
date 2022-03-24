var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementById("close");

let sub = document.getElementById("subjectEdit");
let des = document.getElementById("descriptionEdit");
let dat = document.getElementById("dateEdit");
let modalEdit = document.querySelector(".modalEdit");
let index;
var list = [];
var table = [];
// modal area
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
span1.onclick = function () {
  modalEdit.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// display area
let myForm = document.getElementById("myForm");
let subject = document.getElementById("subject");
let description = document.getElementById("description");
let date = document.getElementById("date");

const display = (list) => {
  console.log("list", list);
  const displayOutput = document.getElementById("output");
  displayOutput.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    displayOutput.innerHTML += `<tr>
    <td>${list[i].subject}</td>
    <td>${list[i].description}</td>
    <td>${list[i].date}</td>
    <td><button id="btn1" onclick="edit(${i})">Edit</button>
    <button id="btn2" onclick="deleteValue(${i})">Delete</button>
    <input type="checkbox" id="checkboxSelect" onclick="complete(${i})"></td>
    </tr>`;
  }
};

const mySubmit = (event) => {
  event.preventDefault();

  if (subject.value === "" || description.value === "" || date.value === "") {
    alert("Please fill in all the boxes");
  } else {
    list.push({
      subject: subject.value,
      description: description.value,
      date: date.value,
    });
    subject.value = "";
    description.value = "";
    date.value = "";
    modal.style.display = "none";
    display(list);
  }
};

const deleteValue = (value) => {
  list.splice(value, 1);
  display(list);
};

const edit = (value) => {
  modalEdit.style.display = "block";

  sub.value = list[value].subject;
  des.value = list[value].description;
  dat.value = list[value].date;

  index = value;
};

const saveEdit = (event) => {
  event.preventDefault();
  list[index].subject = sub.value;
  list[index].description = des.value;
  list[index].date = dat.value;
  modalEdit.style.display = "none";
  display(list);
};

const completed = (list) => {
  console.log("list", list);
  const displayOutput = document.getElementById("complete");
  displayOutput.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    displayOutput.innerHTML += `<tr>
    <td>${list[i].subject}</td>
    <td>${list[i].description}</td>
    <td>${list[i].date}</td>
    <td>
    <button id="btn2" onclick="deleteValues(${i})">Delete</button>
    </td>
    </tr>`;
  }
};

const complete = (value) => {
  table.push(list[value]);
  completed(table);
  list.splice(value, 1);
  display(list);
};

const deleteValues = (value) => {
  table.splice(value, 1);
  completed(table);
};
