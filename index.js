const mousemove = document.querySelector(".mousemove");

const cardanime = document.querySelector
(".card");

const buttonli3 = document.querySelector(".li3");
const buttonli2 = document.querySelector(".li2");
const buttonli1 = document.querySelector(".li1");
const buttonli4 = document.querySelector(".li4");
const buttonli5 = document.querySelector(".li5");
const buttonli6 = document.querySelector(".li6");
const namecolore = document.querySelector(".namecolor")
const namecolore1 = document.querySelector(".namecolor1")
const namecolore3 = document.querySelector(".namecolor3")










cardanime.addEventListener("mouseenter", () => {
    cardanime.style.background = "rgba(86, 86, 100, 0.712)" ;

});

cardanime.addEventListener("mouseout", () => {
    cardanime.style.background = "rgba(86, 86, 136, 0.712)"
} );

buttonli3.addEventListener("mouseenter", () => {

    
    buttonli3.style.transform = "scale(1.2)"
}

);
buttonli2.addEventListener("mouseenter", () => {

   
    buttonli2.style.transform = "scale(1.2)"
}

);
buttonli1.addEventListener("mouseenter", () => {

    
    buttonli1.style.transform = "scale(1.2)"
}

);


buttonli3.addEventListener("mouseout", () => {

    buttonli3.style.background = "none";
    buttonli3.style.transform = "scale(1)"
}

);
buttonli2.addEventListener("mouseout", () => {

    buttonli2.style.background = "none";
    buttonli2.style.transform = "scale(1)"
}

);
buttonli1.addEventListener("mouseout", () => {

    buttonli1.style.background = "none";
    buttonli1.style.transform = "scale(1)"
}

);








    buttonli4.addEventListener("mouseenter", () => {

        buttonli4.style.background = "#7a2dc2";
        buttonli4.style.transform = "scale(1.1)";
    }
    
    );
    buttonli5.addEventListener("mouseenter", () => {
    
        buttonli5.style.background = "#464444";
        buttonli5.style.transform = "scale(1.1)"
    }
    
    );
    buttonli6.addEventListener("mouseenter", () => {
    
        buttonli6.style.background = "#f79999";
        buttonli6.style.transform = "scale(1.1)"

    }
    
    );
    
    
    buttonli4.addEventListener("mouseout", () => {
    
        buttonli4.style.background = "#6614b3";
        buttonli4.style.transform = "scale(1)"
    }
    
    );
    buttonli5.addEventListener("mouseout", () => {
    
        buttonli5.style.background = "#000000";
        buttonli5.style.transform = "scale(1)"
    }
    
    );
    buttonli6.addEventListener("mouseout", () => {
    
        buttonli6.style.background = "#f5f5f5";
        buttonli6.style.transform = "scale(1)"
    }
    
    );




    setInterval (() => {
        cardanime.style.transform = "scale(1.05)";
        cardanime.style.background ="black"
        namecolore.style.color = "#e6cf09"
        namecolore1.style.color = "#e6cf09"
        namecolore3.style.color = "#e6cf09"


        },100);

        setInterval (() => {
            cardanime.style.transform = "scale(1)";
            cardanime.style.background="#9b870c"
            namecolore.style.color = "black"
            namecolore1.style.color = "black"
            namecolore3.style.color = "black"


            },500);


        