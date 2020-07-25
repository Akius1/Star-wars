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
     html+= `<h2 class="names" data-id=${user.id}> ${user.name}</h2> <div class="display-details"></div>`
})
get_name.innerHTML = html;
}

const addClickListener = () => {
    document.querySelectorAll(".names").forEach(name => {
        
         name.addEventListener("click", function() {
           let user = users.searchUser(this.dataset.id);
           displayDetails(user);
           let showDetails = document.querySelectorAll(".display-details");
           console.log(displayDetails(user));
           console.log(showDetails)
        })
        
    })
    
}

const displayDetails = (detail) =>{
    console.log(detail)
    const [name, gender, height] = detail;
    let display = `
    Name: ${name}
    Gender: ${gender} 
    Height: ${height}`;
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
