const url = "http://localhost:5500/api"


function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))

}
getUsers()

// ################ Adcionando Usuarios com Post #############

function addNewUser(){
    axios.post(url,newUser )
    .then(response =>{
        console.log(response)
    })
        
    
    .catch(error => console.error(error))
}
const newUser = {
    name: "Hendriko",
    avatar: "https://avatars.githubusercontent.com/u/106247220?v=4", 
    city:"São Paulo"
}
//addNewUser(newUser)

//################ GET com Parametros #############

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response =>{
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userId.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}
getUser()

//################ Editando dados com PUT ############

function editUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch(error =>console.error(error))
}

const userUpdated = {
    name: "Gabriely Sayuri",
    avatar: "https://yt3.ggpht.com/ytc/AMLnZu-ZWZyWYcFTFf4HGImZwqoC44uEhP1amXiJHZ7itA=s88-c-k-c0x00ffffff-no-rj",
    city: "São Paulo"
}

//editUser(3, userUpdated)

//################# Delete com Axios #############

function deleteUser(id){
    axios.delete(`${url}/${id}}`)
    .then(response=> console.log(response))
    .catch(error =>console.error(error))
}

deleteUser(7)