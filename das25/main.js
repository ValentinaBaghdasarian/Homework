

const title = document.getElementsByTagName("title")[0];
console.log(title.textContent = "Dom task");
// const contactUs = document.getElementsByClassName("m-heading")[0];
// console.log(contactUs.textContent.toUpperCase());

const contactUs = document.querySelectorAll("h2");
contactUs.forEach((item, index) => console.log(`${index}: ${item.textContent.toUpperCase()}` ));

const inputs = document.querySelectorAll(".form-group");
console.log(inputs.forEach(item => console.log(item.textContent.toLowerCase())))

const p = document.querySelector("p");
const modP = p.textContent.trim().slice(0,p.textContent.search("below"));
console.log(modP);

p.style.color = `yellow`