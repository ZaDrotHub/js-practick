let a = 0;
let b = 0;
let coffee = "";
let q = "";
let sugar = 0;
let smallBig = "";

while (a === 0) {
const kava = prompt(
"Яку каву ви бажаєте? (Американо, Американо з молоком, Капучіно, Лате)"
);
if (kava.toLowerCase() === "американо") {
console.log("Американо");
a++;
coffee = "американо";
} else if (kava.toLowerCase() === "американо з молоком") {
console.log("Американо з молоком");
a++;
coffee = "американо з молоком";
} else if (kava.toLowerCase() === "капучіно") {
console.log("Капучіно");
a++;
coffee = "капучіно";
} else if (kava.toLowerCase() === "лате") {
console.log("Лате");
a++;
coffee = "лате";
}
}

if (coffee === "американо з молоком") {
while (b === 0) {
const AmerikanoWithMilk = prompt("З вершками чи з молоком?");
if (AmerikanoWithMilk.toLowerCase() === "з вершками") {
console.log("З вершками");
b++;
q = "кубаш";
} else if (AmerikanoWithMilk.toLowerCase() === "з молоком") {
console.log("З молоком");
b++;
q = "арабіка";
}
}
}
if (coffee === "капучіно" || coffee === "лате") {
while (b === 0) {
const smallOrLarge = prompt("Маленький чи великий?");
if (smallOrLarge.toLowerCase() === "маленький") {
console.log("Маленький");
b++;
smallBig = "маленька";
} else if (smallOrLarge.toLowerCase() === "великий") {
console.log("Великий");
b++;
smallBig = "велика";
}
}
}

while (sugar === 0) {
const howMuchSugar = parseInt(prompt("Скільки цукру?"));
if (!isNaN(howMuchSugar) && howMuchSugar >= 0 && howMuchSugar <= 10) {
console.log(howMuchSugar);
sugar++;
sugarAmount = howMuchSugar;
}
}

if (coffee === "американо") {
console.log(
`Ось ваше замовлення: кава ${coffee} - ${q}, ${sugarAmount} ложок цукру`
);
} else if (coffee === "американо з молоком") {
console.log(
`Ось ваше замовлення: кава ${coffee} - ${q}, ${smallBig}, ${sugarAmount} ложок цукру`
);
} else if (coffee === "капучіно" || coffee === "лате") {
console.log(
  `Ось ваше замовлення: кава ${coffee} - ${smallBig}, ${q}, ${Sug} ложок цукру`)
}