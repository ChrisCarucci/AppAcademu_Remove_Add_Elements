/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const breed = url.split("/").map((x, i, a) => {
            if (x === "breeds") return a[i+1];
        });

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const unorderedList = document.getElementsByClassName('gallery')[0];
    unorderedList.children[0].innerHTML += `<li><figure><img src=${url} /><figcaption>${breed}</figcaption></figure></li>`


    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/


    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    let FirstDogCard = document.getElementsByTagName("li")[0]
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here

    let removeFirst = document.getElementById("remove-first")
    removeFirst.addEventListener("click", async () => {
        FirstDogCard.remove();
    })

/************************** REMOVE LAST DOG BUTTON ***************************/

    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const removeLastDogCard = document.getElementsByTagName("li")[-1]
    
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    

    const removeLast = document.getElementById("remove-last");
    removeLast.addEventListener("click", () => {
        const removeLastDogCard = document.getElementsByTagName("li")
        removeLastDogCard[removeLastDogCard.length-1].remove();

});