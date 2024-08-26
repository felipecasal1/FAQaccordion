let btn = document.querySelectorAll(".btn");
let text = document.querySelectorAll(".text-btn")



btn.forEach(element => {
    element.addEventListener("click", function (e) {
        let miTarget = e.target
        console.log(miTarget)
        if (element === miTarget) {
            let childrenElements = miTarget.children[0]
            childrenElements.classList.toggle("show")
            console.log(childrenElements)

        }else{
            let pElement = e.target
            pElement.classList.toggle("show")
            
        }
    })


});