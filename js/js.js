(function () {
    let count = 0;
    window.addEventListener("scroll", () => {
        let topScroll = window.scrollY;
        document.getElementById("test").style.top = 40 + topScroll * count + "px";
    })

    document.querySelector(".arrows").addEventListener("click", () => {
        if (count < 2) {
            count += 0.1;
            document.getElementById("count").textContent = count.toFixed(1);
        }
    })


    document.querySelector("#count").addEventListener("click", () => {
            if (count > 0) {
                count -= 0.1;
                document.getElementById("count").textContent = count.toFixed(1);
            }  
    })


}())