window.onload = function() {
    // var rand_colors = new Array(6);
    var numsq=6;
    var h1 = document.querySelector("h1");
    var guess;
    var easy = document.getElementById("easy");
    var hard = document.getElementById("hard");
    var resetbut = document.getElementById("reset");
    var message = document.querySelector("#message");
    var squares = document.querySelectorAll(".square");
    var rand_colors = generator(numsq);
    var rand = randomcol();
    // console.log(rand);
    for (var i = squares.length - 1; i >= 0; i--) {
        squares[i].style.backgroundColor = rand_colors[i];
    }
    resetbut.addEventListener("click", function() {
        resetbut.textContent="New Colors";
        rand_colors = generator(numsq);
        rand = randomcol();
        guess = rand_colors[rand];
        document.getElementById("display").textContent = guess;
        for (var i = squares.length - 1; i >= 0; i--) {
            squares[i].style.backgroundColor = rand_colors[i];
        }
        this.textContent = "New Colors";
        h1.style.backgroundColor = 'steelblue';
        message.textContent="";
    });
    easy.addEventListener("click", function() {
        message.textContent="";
        resetbut.textContent="New Colors";
        this.classList.add("selected");
        hard.classList.remove("selected");
        numsq =3;
        rand_colors = generator(numsq);
        guess = rand_colors[rand];
        document.getElementById("display").textContent = guess;
        for (var i = 0; i < squares.length; i++) {
            if (rand_colors[i]) {
                squares[i].style.backgroundColor = rand_colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
    });
    hard.addEventListener("click", function() {
        message.textContent="";
        resetbut.textContent="New Colors";
        this.classList.add("selected");
        easy.classList.remove("selected");
        numsq=6;
        rand_colors = generator(numsq);
        guess = rand_colors[rand];
        document.getElementById("display").textContent = guess;
        for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = rand_colors[i];
                squares[i].style.display = "block";
        }
    });
    guess = rand_colors[rand];
    document.getElementById("display").textContent = guess;
    for (var i = squares.length - 1; i >= 0; i--) {
        squares[i].addEventListener("click", function() {
            var clicked = this.style.backgroundColor;
            if (clicked === guess) {
                message.textContent = "Correct!!";
                for (var i = squares.length - 1; i >= 0; i--) {
                    squares[i].style.backgroundColor = guess;
                }
                h1.style.backgroundColor = clicked;
                resetbut.textContent = "Play Again?";
            } else {
                message.textContent = "Try Again!";
                this.style.backgroundColor = 'transparent';
            }
        });
    }

    function random() {
        return Math.floor(Math.random() * 256);
    }

    function color() {
        return "rgb(" + random() + ", " + random() + ", " + random() + ")";
    }

    function randomcol() {
        var rand = Math.floor(Math.random() * rand_colors.length);
        return rand;
    }

    function generator(num) {
        var arr = [];
        for (var i = num - 1; i >= 0; i--) {
            arr.push(color());
        }
        return arr;
    }
};