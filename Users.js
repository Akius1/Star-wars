class Users{
    constructor(users){
        this.users = users;
    }


    displayNames = () => {
        return this.users.map(user => user.name);
    }

    /*searchUser = (id) => {
        for(let i = 0; i < this.users.length; i++) {
            if(id == this.users[i].id){
                let {name,gender,height} = this.users[i];
                 return [name, gender, height];
            }
        }
    }*/
}