const api_url = 'https://swapi.dev/api/people/';
const get_name = document.querySelector('.display-names');
let user;
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#search");

const imageUrls = [
    "./star-wars-image/Luke_Skywalker.png",
    "./star-wars-image/C-3PO.jpg",
    "./star-wars-image/R2-D2.png",
    "./star-wars-image/darth_vader.jpg",
    "./star-wars-image/leia-organa.jpg",
    "./star-wars-image/Owen-lars.jpg",
    "./star-wars-image/BeruWhitesunLars.jpg",
    "./star-wars-image/r5-d4.jpg",
    "./star-wars-image/Biggs-dark.png",
    "./star-wars-image/obi-wan.jpg",
]

async function fetcher(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch((err) => {
        console.log(err);
    })
}



const addClickListener = () => {
    document.querySelectorAll(".image-border").forEach(name => {
         name.addEventListener("click", displayDetails);
    })
}

function displayDetails(evt){
    evt.preventDefault();
    document.querySelectorAll(".image-border").forEach(card => card.childNodes[5].classList.remove("fadeIn"));
    this.childNodes[5].classList.toggle("fadeIn");
};



const buildCards = (user) => {
    return (`
    <figure class="image-border" data-id=${user.id}>
        <img src=${user.imageUrl} alt=${user.name}/>
        <figcaption>${user.name}</figcaption>
        <div class="overlay">   
            <div>Name : ${user.name}</div>
            <div>Gender: ${user.gender}</div>
            <div>height: ${user.height}</div>
        </div>
    </figure>`)
}

const displayUsersCard = async (users, searchParameter="") => {
    let html = "";
    users.filter(user => {
        if(user.name.includes(searchParameter)){
            html+= buildCards(user)
        }
})
get_name.innerHTML = html;
addClickListener();
}

const  start = async () => {
    const userData = await fetcher(api_url);
    const newUserData = userData.results.map((user, index) => {
        user.id = index;
        user.imageUrl = imageUrls[index];
        return user;
    });
    users = new Users(newUserData);
    displayUsersCard(newUserData);
}

function searchUser() {
    displayUsersCard(users.users, searchInput.value.trim());
}

searchButton.addEventListener("click", searchUser);


start();




