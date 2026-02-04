
const form = document.getElementById("gymForm");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const amountInput = document.getElementById("amount");

const message = document.getElementById("message");

const resultBox = document.getElementById("resultBox");
const rName = document.getElementById("rName");
const rage = document.getElementById("rage");
const rPhone = document.getElementById("rPhone");
const rAmount = document.getElementById("rAmount");


function errorBorder(input) {
    input.style.border = "2px solid red";
}

function successBorder(input) {
    input.style.border = "2px solid lightgreen";
}

//  name validation
nameInput.addEventListener("input", function () {
    const value = nameInput.value.trim();
    const lettersOnly = /^[A-Za-z\s]+$/;

    if (!lettersOnly.test(value)) {
        errorBorder(nameInput);
        return;
    }

    if (value.length < 3 || value.length > 16) {
        errorBorder(nameInput);
    } else {
        successBorder(nameInput);
    }
});


ageInput.addEventListener("input", function () {
    const age = Number(ageInput.value);

    if (isNaN(age)) {
        errorBorder(ageInput);
        return;
    }

    if (age < 18 || age > 40) {
        errorBorder(ageInput);
    } else {
        successBorder(ageInput);
    }
});


phoneInput.addEventListener("input", function () {
    const phone = phoneInput.value;
    const numbersOnly = /^[0-9]+$/;

    if (!numbersOnly.test(phone)) {
        errorBorder(phoneInput);
        return;
    }

    if (phone < 61 || phone > 619999999) {
        errorBorder(phoneInput);
    } else {
        successBorder(phoneInput);
    }
});

amountInput.addEventListener("input", function () {
    const amount = Number(amountInput.value);

    if (isNaN(amount)) {
        errorBorder(amountInput);
        return;
    }

    if (amount < 20) {
        errorBorder(amountInput);
        message.textContent = "Lacagta ugu yar waa $20";
        message.className = "error";
    } else {
        successBorder(amountInput);
        message.textContent = "Waad bixisay $" + amount + " | Waxba kuguma harin";
        message.className = "success";
    }
});

// FORM SUBMIT
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (
        nameInput.value.trim() === "" ||
        ageInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
        amountInput.value.trim() === ""
    ) {
        message.textContent = "Fadlan buuxi dhammaan xogta";
        message.className = "error";
        return;
    }

    if (
        nameInput.style.border.includes("red") ||
        ageInput.style.border.includes("red") ||
        phoneInput.style.border.includes("red") ||
        amountInput.style.border.includes("red")
    ) {
        message.textContent = "Fadlan sax xogta casaanka leh adoo masan";
        message.className = "error";
        return;
    }

    // show result
    rName.textContent = nameInput.value;
    rage.textContent = ageInput.value;
    rPhone.textContent = phoneInput.value;
    rAmount.textContent = amountInput.value;

    resultBox.style.display = "block";
    message.textContent = "Isdiiwaangelin waa guulaysatay";
    message.className = "success";
});