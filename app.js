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

let password1 = document.getElementById("random-password");
let password2 = document.getElementById("random-password2");
let generatePasswordsBtn = document.getElementById("generate-passwords-btn");
generatePasswordsBtn.addEventListener("click", generatePassword);
generatePasswordsBtn.addEventListener("click", generatePassword2);

function generatePassword() {
	for (let i = 0; i < passwordLength; i++) {
		let randomIndex = Math.floor(Math.random() * characters.length);
		randomPassword += characters[randomIndex];
	}
	console.log("random password is " + randomPassword);
	password1.textContent = randomPassword;
	passwordGenerated = true;
	console.log(passwordGenerated);
	randomPassword = "";
	console.log(randomPassword);
}

function generatePassword2() {
	for (let i = 0; i < passwordLength; i++) {
		let randomIndex2 = Math.floor(Math.random() * characters.length);
		randomPassword2 += characters[randomIndex2];
	}
	console.log(randomPassword2);
	password2.textContent = randomPassword2;
	passwordGenerated = true;
	console.log(passwordGenerated);
	randomPassword2 = "";
	console.log(randomPassword2);
}

const copyOne = document.querySelector(".copy-one");

copyOne.addEventListener("click", () => {
	const copyPass = document.querySelector("#random-password");
	let pass = copyPass.textContent;
	navigator.clipboard.writeText(pass);
	alert("Password 1 copied to clipboard");
});

const copyTwo = document.querySelector(".copy-two");

copyTwo.addEventListener("click", () => {
	const copyPass2 = document.querySelector("#random-password2");
	let pass2 = copyPass2.textContent;
	navigator.clipboard.writeText(pass2);
	alert("Password 2 copied to clipboard");
});
