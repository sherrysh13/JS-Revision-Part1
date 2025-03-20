let submitBtn = document.querySelector('.submitBtn');
let tbody = document.querySelector('tbody');
let table = document.querySelector('table');
let inputsBox = document.querySelector('.inputs');
let date = document.querySelector('.date');
let category = document.querySelector('.category');
let title = document.querySelector('.title');
let amount = document.querySelector('.amount');

window.addEventListener('load', () => {
    let storedData = JSON.parse(localStorage.getItem("eachRow")) || [];
    if (storedData.length > 0) {
        table.style.display = "block";
        storedData.forEach((row) => appendRow(row));
    }
});

const appendRow = (row) => {
    let randomClr = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

    let tr = document.createElement("tr");
    tr.className = "row text-center";
    tr.style.backgroundColor = randomClr;

    tr.innerHTML = `
        <td class="dateVal py-2 px-5 font-bold"><label>${row.date}</label></td>
        <td class="categoryVal py-2 px-5 font-bold"><label>${row.category}</label></td>
        <td class="titleVal py-2 px-5 font-bold"><label>${row.title}</label></td>
        <td class="amountVal py-2 px-5 font-bold"><label>${row.amount}</label></td>
        <td class="py-2 px-5 font-bold flex gap-5 items-center justify-center">
            <button class="editBtn px-3 bg-black text-white rounded-md hover:bg-[#222]">Edit</button>
            <button class="delBtn px-3 bg-black text-white rounded-md hover:bg-[#222]">Delete</button>
        </td>
    `;
    tbody.appendChild(tr);
};

submitBtn.addEventListener('click', () => {
    if (date.value !== "" && category.value !== "" && title.value !== "" && amount.value !== "") {
        let storedData = JSON.parse(localStorage.getItem("eachRow")) || [];

        let newRow = {
            date: date.value,
            category: category.value,
            title: title.value,
            amount: amount.value
        };

        storedData.push(newRow);
        localStorage.setItem("eachRow", JSON.stringify(storedData));

        appendRow(newRow);

        submitBtn.textContent = "Submit";
        inputsBox.style.border = "none";
        table.style.display = "block";
    } else {
        alert("Please Fill all the Blanks");
    }

    date.value = "";
    category.value = "";
    title.value = "";
    amount.value = "";
});

tbody.addEventListener('click', (dets) => {
    let storedData = JSON.parse(localStorage.getItem("eachRow")) || [];

    if (dets.target.classList.contains("delBtn")) {
        let closestRow = dets.target.closest("tr");
        let dateVal = closestRow.querySelector(".dateVal label").textContent;

        storedData = storedData.filter((row) => row.date !== dateVal);
        localStorage.setItem("eachRow", JSON.stringify(storedData));

        closestRow.remove();

        if (tbody.children.length === 0) {
            table.style.display = "none";
            localStorage.removeItem("eachRow");
        }
    }

    if (dets.target.classList.contains("editBtn")) {
        let closestRow = dets.target.closest("tr");

        date.value = closestRow.querySelector(".dateVal label").textContent;
        category.value = closestRow.querySelector(".categoryVal label").textContent;
        title.value = closestRow.querySelector(".titleVal label").textContent;
        amount.value = closestRow.querySelector(".amountVal label").textContent;

        storedData = storedData.filter((row) => row.date !== date.value);
        localStorage.setItem("eachRow", JSON.stringify(storedData));

        closestRow.remove();
        inputsBox.style.border = "2px solid grey";
        submitBtn.textContent = "Update";

        if (tbody.children.length === 0) {
            table.style.display = "none";
            localStorage.removeItem("eachRow");
        }
    }
});
