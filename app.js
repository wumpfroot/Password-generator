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
let passwordGenerated = false;

const password1 = document.getElementById("random-password");
const password2 = document.getElementById("random-password2");
const passbox1 = document.querySelector(".copy1");
const passbox2 = document.querySelector(".copy2");
const generatePasswordsBtn = document.getElementById("generate-passwords-btn");
const copyOne = document.querySelector(".copy-one");
const copyTwo = document.querySelector(".copy-two");
const passwordLengthInput = document.getElementById("password-length");
const passwordLengthValue = document.getElementById("password-length-value");
const includeSpecialCharactersCheckbox = document.getElementById("include-special-characters");

generatePasswordsBtn.addEventListener("click", generatePassword);
generatePasswordsBtn.addEventListener("click", generatePassword2);

passwordLengthInput.addEventListener("input", (e) => {
	passwordLengthValue.textContent = e.target.value;
});

function generatePassword() {
	const passwordLength = passwordLengthInput.value;
	randomPassword = "";
	const filteredCharacters = includeSpecialCharactersCheckbox.checked ? characters : characters.filter((char) => !isSpecialCharacter(char));
	for (let i = 0; i < passwordLength; i++) {
		let randomIndex = Math.floor(Math.random() * filteredCharacters.length);
		randomPassword += filteredCharacters[randomIndex];
	}
	copyOne.style.display = "block";
	passbox1.style.display = "flex";
	password1.textContent = randomPassword;
	passwordGenerated = true;
	randomPassword = "";
}

function generatePassword2() {
	const passwordLength = passwordLengthInput.value;
	randomPassword2 = "";
	const filteredCharacters = includeSpecialCharactersCheckbox.checked ? characters : characters.filter((char) => !isSpecialCharacter(char));
	for (let i = 0; i < passwordLength; i++) {
		let randomIndex2 = Math.floor(Math.random() * filteredCharacters.length);
		randomPassword2 += filteredCharacters[randomIndex2];
	}
	copyTwo.style.display = "block";
	passbox2.style.display = "flex";
	password2.textContent = randomPassword2;
	passwordGenerated = true;
	randomPassword2 = "";
}

function isSpecialCharacter(char) {
	const specialCharacters = "~`!@#$%^&*()_-+={}[]|:;<>,.?/";
	return specialCharacters.includes(char);
}

const copyPassword = (targetElement) => {
	const copyPass = targetElement;
	let pass = copyPass.textContent;
	navigator.clipboard.writeText(pass);

	Toastify({
		text: "Password copied to the clipboard",
		style: {
			background: "#4adf86",
			color: "black",
			borderRadius: "4px",
		},
		duration: 3000,
	}).showToast();
};

copyOne.addEventListener("click", () => copyPassword(password1));
copyTwo.addEventListener("click", () => copyPassword(password2));
