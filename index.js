const api_url = 'https://swapi.dev/api/people/';
const get_name = document.querySelector('.display-names');
let user;

async function fetcher(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch((err) => {
        console.log(err);
    })
}

const displayNames = async (users) => {
    let html = "";
    users.forEach(user => {
     html+= `<div class="names" data-id=${user.id}> ${user.name}</div>`
})
get_name.innerHTML = html;
}

const addClickListener = () => {
    document.querySelectorAll(".names").forEach(name => {
         name.addEventListener("click", function() {
           let user = users.searchUser(this.dataset.id);
           let showdetails = document.querySelector(".show-details");
           showdetails.innerHTML = displayDetails(user);
        })
        
    })
    
}

const displayDetails = (detail) =>{
    const [name, gender, height] = detail;
    let display = `
    <div>Name: ${name},</div>
     <div> Gender: ${gender}, </div>
     <div> Height: ${height}ft.</div>`;
     console.log(display);
    return display;
};

const  start = async () => {
    const userData = await fetcher(api_url);
    const newUserData = userData.results.map((user, index) => {
        user.id = index;
        return user;
    });
    users = new Users(newUserData);
    displayNames(newUserData);
    addClickListener();
}

start();

// users = new Users(data.results);
// 
