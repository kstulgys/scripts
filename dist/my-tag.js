// ((window) => {
console.log("hello world from git repo")
const header = document.getElementById("shopify-section-header")
header.style.backgroundColor = "green"
console.log({ header })

const cartLinks = [...document.querySelectorAll("a[href='/cart']")]

console.log({ cartLinks })

cartLinks.forEach((link) => {
    link.addEventListener("click", () => {
        window.alert("Cart clicked")
    })
})
// })(window)