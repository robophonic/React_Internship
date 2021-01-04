window.onload = function () {
    document.querySelector('.has_dropdown').onclick = function () {
        this.classList.toggle("open");
    };


    document.querySelector('.menu_btn').onclick = function () {
        document.querySelector('header').classList.toggle("active");
        document.querySelector('body').classList.toggle("active");
    };

};
