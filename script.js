/*
  Name: Mack McCall
  Date: 03.03.2026
  CSC 372-01

  This is the script.js page for my rock paper scissors site. It includes the implementation
  of the game including choosing a throw, automatic computer random throw, results, and running stats.
*/

document.addEventListener("DOMContentLoaded", function () {
    const throwChoices = document.querySelectorAll(".player .rpc");
    var throwOptionImages = [
        "images/rock.PNG",
        "images/paper.PNG",
        "images/scissors.PNG",
    ];

    var numberOfWins = 0;
    var numberOfLosses = 0;
    var numberOfTies = 0;

    throwChoices.forEach((choice) => {
        choice.addEventListener("click", function () {
            throwChoices.forEach((choiceBox) => {
                choiceBox.style.border = "1px solid #ddd";
            });
            choice.style.border = "3px solid blue";

            var id = setInterval(changePicture, 500);
            var picIndex = 0;
            var cmpImg = document.getElementById("computer-image");

            function changePicture() {
                if (picIndex == 3) {
                    picIndex = 0;
                }
                cmpImg.src = throwOptionImages[picIndex];
                picIndex++;
            }

            setTimeout(() => {
                clearInterval(id);
                cmpImg.src = throwOptionImages[Math.floor(Math.random() * 3)];

                var playerSrc = choice.querySelector("img").src;
                var result = document.querySelector(".outcome h3");

                if (
                    (playerSrc.includes("rock") &&
                        cmpImg.src.includes("rock")) ||
                    (playerSrc.includes("paper") &&
                        cmpImg.src.includes("paper")) ||
                    (playerSrc.includes("scissors") &&
                        cmpImg.src.includes("scissors"))
                ) {
                    result.textContent = "RESULTS: IT'S A TIE!";
                    numberOfTies++;
                    document.getElementById("num-of-ties").textContent =
                        numberOfTies;
                } else if (
                    (playerSrc.includes("rock") &&
                        cmpImg.src.includes("paper")) ||
                    (playerSrc.includes("paper") &&
                        cmpImg.src.includes("scissors")) ||
                    (playerSrc.includes("scissors") &&
                        cmpImg.src.includes("rock"))
                ) {
                    result.textContent = "RESULTS: COMPUTER WINS!";
                    numberOfLosses++;
                    document.getElementById("num-of-losses").textContent =
                        numberOfLosses;
                } else {
                    result.textContent = "RESULTS: YOU WIN!";
                    numberOfWins++;
                    document.getElementById("num-of-wins").textContent =
                        numberOfWins;
                }
            }, 3000);
        });
    });

    var resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", function () {
        numberOfWins = 0;
        numberOfLosses = 0;
        numberOfTies = 0;

        document.getElementById("num-of-wins").textContent = numberOfWins;
        document.getElementById("num-of-losses").textContent = numberOfLosses;
        document.getElementById("num-of-ties").textContent = numberOfTies;
    });
});
