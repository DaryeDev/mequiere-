function startAnim() {
    document.getElementById("person").style.animation = "anim1 2s";
    setTimeout(() => {
        document.getElementById("person").style.transform = "scaleX(1)";
        document.getElementById("person").querySelector("img").src = "./assets/istockphoto-926510698-2048x2048.webp"

        setTimeout(() => {
            document.getElementById("person").style.transform = "scaleX(-1)";
            document.getElementById("person").querySelector("img").src = "./assets/istockphoto-926510664-2048x2048.jpg"

            setTimeout(() => {
                document.getElementById("speechBubble").style.display = "block";
                document.getElementById("speechBubble").innerText = "Buen PC que me llevas, manin.";
                document.getElementById("speechBubble").style.bottom = parseInt(window.getComputedStyle(document.getElementById("person")).height.replace("px", "")) - 100 + "px"
                document.getElementById("speechBubble").style.right = parseInt(window.getComputedStyle(document.getElementById("person")).width.replace("px", "")) - 100 + "px"

                setTimeout(() => {
                    document.getElementById("speechBubble").innerText = "Pero vengo a hablar de negocios...";
                    document.getElementById("person").querySelector("img").src = "./assets/istockphoto-926510318-2048x2048.webp"


                    setTimeout(() => {
                        document.getElementById("speechBubble").innerText = "Me comenta mi cliente que te quiere... ";
                        document.getElementById("person").querySelector("img").src = "./assets/istockphoto-931207804-2048x2048.webp"

                        setTimeout(() => {
                            document.getElementById("speechBubble").innerText = "... \"muito muito muito uwu\"";
                            document.getElementById("person").querySelector("img").src = "./assets/istockphoto-931207804-2048x2048.png"

                            setTimeout(() => {
                                document.getElementById("speechBubble").innerText = "¿Pero tú cuánto le quieres?";
                                document.getElementById("person").querySelector("img").src = "./assets/istockphoto-931184316-1024x1024.jpg"

                                setTimeout(() => {
                                    document.getElementById("speechBubble").style.display = "none";
                                    document.getElementById("qqsm").style.pointerEvents = "auto";
                                    document.getElementById("qqsm").style.opacity = "100%";

                                    document.querySelector(".qqsmQuestion").innerText = "¿Cuánto quieres a Darío?"
                                    document.querySelector(".qqsmOptionA").innerText = "Poquillo"
                                    document.querySelector(".qqsmOptionB").innerText = "Absolutamente nada."
                                    document.querySelector(".qqsmOptionC").innerText = "Hasta el infinito, y más pallá"
                                    document.querySelector(".qqsmOptionD").innerText = "6... metros bajo tierra"
                                }, 2000);
                            }, 1000);
                        }, 2000);
                    }, 2000);
                }, 1000);
            }, 500);

        }, 1000);
    }, 2000);
}
startAnim();