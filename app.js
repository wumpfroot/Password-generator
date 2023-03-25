const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];
let randomPassword = "";
let randomPassword2 = "";
let passwordLength = 15;
let passwordGenerated = false;

const password1 = document.getElementById("random-password");
const password2 = document.getElementById("random-password2");
const generatePasswordsBtn = document.getElementById("generate-passwords-btn");
const copyOne = document.querySelector(".copy-one");
const copyTwo = document.querySelector(".copy-two");

generatePasswordsBtn.addEventListener("click", generatePassword);
generatePasswordsBtn.addEventListener("click", generatePassword2);

function generatePassword() {
	for (let i = 0; i < passwordLength; i++) {
		let randomIndex = Math.floor(Math.random() * characters.length);
		randomPassword += characters[randomIndex];
	}
	copyOne.style.display = "block";
	password1.textContent = randomPassword;
	passwordGenerated = true;
	randomPassword = "";
}

function generatePassword2() {
	for (let i = 0; i < passwordLength; i++) {
		let randomIndex2 = Math.floor(Math.random() * characters.length);
		randomPassword2 += characters[randomIndex2];
	}
	copyTwo.style.display = "block";
	password2.textContent = randomPassword2;
	passwordGenerated = true;
	randomPassword2 = "";
}

copyOne.addEventListener("click", () => {
	const copyPass = document.querySelector("#random-password");
	let pass = copyPass.textContent;
	navigator.clipboard.writeText(pass);
	alert("Password 1 copied to clipboard");
});

copyTwo.addEventListener("click", () => {
	const copyPass2 = document.querySelector("#random-password2");
	let pass2 = copyPass2.textContent;
	navigator.clipboard.writeText(pass2);
	alert("Password 2 copied to clipboard");
});
