const completeMenu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korean",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japanese",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korean",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "Chinese",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "Chinese",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japanese",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korean",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "Chinese",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japanese",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

let allButton = document.querySelector("#allButton");
allButton.addEventListener("click", handleAllMenuEvent);

let koreanButton = document.querySelector("#koreanButton");
koreanButton.addEventListener("click", handleKoreanMenuEvent);

let japaneseButton = document.querySelector("#japaneseButton");
japaneseButton.addEventListener("click", handleJapaneseMenuEvent);

let chineseButton = document.querySelector("#chineseButton");
chineseButton.addEventListener("click", handleChineseMenuEvent);

function handleAllMenuEvent() {
    let menu = completeMenu;
    console.log(menu);
    let itemsDOM = document.querySelector("#items");

    itemsDOM.innerHTML = "";

    for (i = 0; i < menu.length; i++) {
        let newLi = document.createElement("li");

        newLi.innerHTML = menu[i];

        itemsDOM.innerHTML += newLi;
    }
}

function handleKoreanMenuEvent() {
    let menu = getMenu("Korean");

    let itemsDOM = document.querySelector("#items");

    itemsDOM.innerHTML = "";

    for (i = 0; i < menu.length; i++) {
        let newLi = document.createElement("li");

        newLi.innerHTML = menu[i];

        itemsDOM.innerHTML += newLi;
    }
}

function handleJapaneseMenuEvent() {
    let menu = getMenu("Japanese");
    console.log(menu);
    let itemsDOM = document.querySelector("#items");

    itemsDOM.innerHTML = "";

    for (i = 0; i < menu.length; i++) {
        let newLi = document.createElement("li");

        newLi.innerHTML = menu[i];

        itemsDOM.innerHTML += newLi;
    }
}

function handleChineseMenuEvent() {
    let menu = getMenu("Chinese");
    console.log(menu);
    let itemsDOM = document.querySelector("#items");

    itemsDOM.innerHTML = "";

    for (i = 0; i < menu.length; i++) {
        let newLi = document.createElement("li");

        newLi.innerHTML = JSON.stringify(menu[i]);

        itemsDOM.innerHTML += newLi;
    }
}

function getMenu(cuisine) {
    let arrayToBeReturned = [];

    for (i = 0; i < completeMenu.length; i++) {
        if (completeMenu[i].category == cuisine) {
            arrayToBeReturned.push(completeMenu[i]);
        }
    }

    return arrayToBeReturned.map(
        (item) =>
            `title: ${item.title}
		category: ${item.category}
		price: ${item.price}
		description: ${item.desc}
	`
    );
}
