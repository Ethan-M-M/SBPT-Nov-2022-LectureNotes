//! Global Variables
const url = 'https://api.spoonacular.com/recipes/';
const random = 'random?apiKey=';
const apiKey = 'fd5a9db195ec4eb79f6d54bf88b801f0';
let storedItems = [];

//* Global Elements
const searchForm = document.getElementById("search-form");
const randomCardDisplay = document.querySelector('.random-card');
const keptCards = document.getElementById('kept-cards');

//! Functions
//TODO 
/* 
    - Fetch data
    - Display a random card
        - Adding to list
    - Displaying to current list
*/

// FETCHING DATA FROM SPOONTACULAR API
const spoonFetch = async() => {
    //console.log('Inside spoonFetch()');
    //Get the data
    let buildURL = url+random+apiKey;
    //console.log(buildURL);

    let response = await fetch(buildURL);
    let data = await response.json();
    let obj = data.recipes[0];
    console.log(obj);

    let obtainedCard = {
        title: obj.title,
        img: obj.image,
        src: obj.sourceUrl
    }

    console.log(obtainedCard);

    displayRandomCard(obtainedCard)
}

//* DISPLAY OUR CARD
const displayRandomCard = recipe => {
    console.log('In displayRandomCard() ', recipe);

    while(randomCardDisplay.firstChild) {
        randomCardDisplay.removeChild(randomCardDisplay.firstChild);
    }

    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let cardBody = document.createElement('div');
    let title = document.createElement('h5');
    let btn = document.createElement('button');

    //* Set Attributes
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img;
    img.className = 'card-img-top';
    img.alt = recipe.title;
    cardBody.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-success';
    btn.textContent = 'Add';
    //console.log(btn);
    btn.onclick = async () => {
        console.log('Button is Clicked!');
        await storedItems.push(recipe);
        //console.log(storedItems);
        setTable();
    }

    //* Attach to DOM / Append
    /*
        - Fill Card Body
        - Fill Card
        - Fill Random-Card Container
    */
   cardBody.appendChild(title);
   cardBody.appendChild(btn);

   card.appendChild(img);
   card.appendChild(cardBody);

   randomCardDisplay.appendChild(card);

}

//* SET TABLE
const setTable = () => {
    console.log('List of Recipes: ', storedItems);

    while(keptCards.firstChild) {
        keptCards.removeChild(keptCards.firstChild);
    }

    storedItems.map(e => {
        //console.log(e);
        //* CREATE
        let div = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        let cardBody = document.createElement('div');
        let title = document.createElement('h5');
        let p = document.createElement('p');
        let a = document.createElement('a');

        //* ADD ATTRIBUTES
        div.className = 'col';
        card.className = 'card';
        img.src = e.img;
        img.className = 'card-img-top';
        img.alt = `${e.title} image`;
        cardBody.className = 'card-body';
        title.className = 'card-title';
        title.textContent = e.title;
        p.className = 'card-text';
        a.href = e.src;
        a.target = '_blank';
        a.textContent = 'Link to Recipe';


        //* ATTACH
        p.appendChild(a);

        cardBody.appendChild(title);
        cardBody.appendChild(p);

        card.appendChild(img);
        card.appendChild(cardBody);

        div.appendChild(card);

        keptCards.appendChild(div);

    })
}

//! Event Listeners
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

   spoonFetch();
});