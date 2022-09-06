(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if(document.querySelector(".theme-icon").classList[2].includes("fa-sun")){
            document.querySelector(".theme-icon").classList.remove("fa-sun");
            document.querySelector(".theme-icon").classList.add("fa-moon");
        }else{
            document.querySelector(".theme-icon").classList.remove("fa-moon");
            document.querySelector(".theme-icon").classList.add("fa-sun");
        }
        
    });
})();
