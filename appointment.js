// PROPERTIES
const body = document.body;
const div = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");

// VALUES
div.innerText = "Appointment Form";
div2.innerText =
  "Kindly fill out the form for your preferred GYM appointment. We are so honored to be in service. Looking forward to meeting you soon!";
div3.innerText = "Appointment Date and Time:";
div4.innerHTML = "<input></input>";
div5.innerText = "Name:";
div6.innerHTML = "<input></input>";
div7.innerText = "Contant Number";

// STYLE
div.setAttribute(
  "style",
  "font-size: 3rem; display: flex; justify-content: center; margin-bottom: 1rem;"
);
div2.setAttribute(
  "style",
  "display: flex; justify-content: center; font-size: 1.25rem; margin-bottom: 5rem;"
);
div3.setAttribute(
  "style",
  "font-size: 2rem; display: flex; justify-content: center; margin-block: 1rem;"
);
div4.setAttribute("style", "display: flex; justify-content: center;");
div5.setAttribute(
  "style",
  "display: flex; justify-content: center; font-size: 2rem;"
);
div6.setAttribute("style", "display: flex; justify-content: center;");
div7.setAttribute(
  "style",
  "display: flex; justify-content: center; font-size: 2rem;"
);

body.append(div, div2, div3, div4, div5, div6, div7, div8, div9);
