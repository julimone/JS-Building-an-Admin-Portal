const { header } = require("express/lib/request");


// Your Code Here
async function main() {
    let response = await fetch("http://localhost:3001/listBooks")

    let books = await response.json();

    books.forEach(renderBook)
}
function renderBook(book) {
    let root = document.querySelector('#root')

    let li = document.querySelector("li")
    li.textContent = book.title

    let quantityInput = document.createElement("input")
    quantityInput.value = book.quantity

    let saveButton = document.createElement("button")
    saveButton.textContent = "save"

    saveButton.addEventListener("click", () => {
        fetch("http://localhost:3001/updateBook",
            method, "Patch",
            headers, {
            "Content-type": "application/jason"

        },
            body, JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        }),

        li.append(quantityInput, saveButton)

    root.append(li)

    main()// Your Code Here
