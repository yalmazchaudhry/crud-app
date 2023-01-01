import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export const store = new Vuex.Store({

state:{
userList:[]
},

actions:{
    getAllUsers(context){
        fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data=>{
    console.log(data)
    context.commit("getAllUsers",data)
});
    },
    deleteUser(context, id){
        fetch('https://dummyjson.com/users/1', {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data=>{
            console.log(data)
            context.commit("deleteUser", id)
          })
    },
    editUser(context, user){
        fetch('https://dummyjson.com/users/1', {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              lastName: 'Owais'
            })
          })
          .then(res => res.json())
          .then(data=>{
            console.log(data)
            context.commit("editUser", user)
          })
    },
    addUser(context,newUser){
        fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Muhammad',
    lastName: 'Ovi',
    age: 250,
    /* other user data */
  })
})
.then(res => res.json())
.then(
    context.commit("addUser", newUser)
)
    }
},
mutations:{
getAllUsers(state,data){
    this.state.userList=data;
},
editUser(state, user){
    const userIndex= state.userList.users.findIndex(user1=>{
        return user1.id==user[0].id

    });
    console.log(user)
    Vue.set(state.userList.users,userIndex,user[1])
    

},
addUser(state, newUser){
    state.userList.users.unshift(newUser)
    console.log(state.userList,newUser)

},

deleteUser(state, id){
    // const userIndex =this.state.userList.users.indexOf(id);
    // console.log(userIndex)
    // this.state.userList.users.splice(userIndex+1,1)
    const userIndex =this.state.userList.users.findIndex((user)=>{
        return user.id ==id;
    })
    this.state.userList.users.splice(userIndex,1)

}
},
getters:{
getAllUsers(){
    return store.state.userList;
}
}



});
