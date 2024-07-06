document.addEventListener("DOMContentLoaded", function () {
    const durationSelect = document.getElementById("duration-select");
    const durationLabel = document.getElementById("duration-label");
    const groceryList = document.getElementById("grocery-list");
    const moreInfoBtn = document.getElementById("more-info-btn");
    const modal = document.getElementById("more-info-modal");
    const span = document.getElementsByClassName("close")[0];

    durationSelect.addEventListener("change", function () {
        durationLabel.textContent = this.options[this.selectedIndex].text;
    });

    moreInfoBtn.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});


document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("more-info-modal");
    var btn = document.getElementById("more-info-btn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

