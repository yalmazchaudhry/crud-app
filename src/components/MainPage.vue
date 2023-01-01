<template>
<div>
<div>
    <ul>
  <li><a class="active" href="#">Home</a></li>
  <li><a data-bs-toggle="modal" data-bs-target="#AddUser" href="#news">Add User</a></li>
  <li style="float:right"><a @click="logout()" href="">LogOut</a></li>
</ul>
<!-- Modal HTML Markup -->
<div id="AddUser" class="modal fade">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title text-xs-center">Add User</h4>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent>
                      <div class="form-group d-flex justify-content-start">
                        <label class="control-label">First Name</label>
                      </div>
                      <div>
                        <input
                          v-model="newUser.firstName"
                          type="text"
                          class="form-control input-lg"
                          
                        />
                      </div>
                      <div class="form-group d-flex justify-content-start">
                        <label class="control-label">Last Name</label>
                      </div>
                      <div>
                        <input
                          v-model="newUser.lastName"
                          type="text"
                          class="form-control input-lg"
                          
                        />
                      </div>
                      <div class="form-group d-flex justify-content-start">
                        <label class="control-label">E-Mail Address</label>
                      </div>
                      <div>
                        <input
                          v-model="newUser.email"
                          type="text"
                          class="form-control input-lg"
                          
                        />
                      </div>
                      

                      <div class="form-group">
                        <div>
                          <button
                            @click="addUser(newUser)"
                            class="btn btn-info mt-2"
                          >
                            Add User
                          </button>
                          <p
                            id="UpdateMessage"
                            class="mt-2 error text-danger"
                          ></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
            <!-- Modal HTML Markup -->
            <div id="ModalExample" class="modal fade">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title text-xs-center">Update Details</h4>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form  @submit.prevent>
                      <div class="form-group d-flex justify-content-start">
                        <label class="control-label">First Name</label>
                      </div>
                      <div>
                        <input
                          v-model="updateUser.firstName"
                          type="text"
                          class="form-control input-lg"
                          
                        />
                      </div>
                      <div class="form-group d-flex justify-content-start">
                        <label class="control-label">Last Name</label>
                      </div>
                      <div>
                        <input
                          v-model="updateUser.lastName"
                          type="text"
                          class="form-control input-lg"
                          
                        />
                      </div>
                      <div class="form-group d-flex justify-content-start">
                        <label class="control-label">E-Mail Address</label>
                      </div>
                      <div>
                        <input
                          v-model="updateUser.email"
                          type="text"
                          class="form-control input-lg"
                          
                        />
                      </div>
                      

                      <div class="form-group">
                        <div>
                          <button
                          @click="editUser(userData,updateUser)"
                            class="btn btn-info mt-2"
                          >
                            Update
                          </button>
                          
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
</div>
    <table id="usersTable"><tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
        <th>Edit</th>
    </tr>
    <tr v-for="user in dataList.users" :key="user.email">
        
    <td>{{user.firstName}} {{user.lastName}}</td>
    <td>{{user.email}}</td>
<td id="button"  @click="deleteUser(user.id)">Delete</td>
<td id="button" data-bs-toggle="modal" data-bs-target="#ModalExample" @click="(userData={...user})"  >Edit</td></tr>

    </table>
</div>
       
</template>

<script>
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { store } from '@/store'


// Vue.use(BootstrapVue)

// Vue.use(IconsPlugin)
export default{
    name: 'MainPage',
    data(){

return{
    
    newUser:{firstName: '',
    lastName: '',
    email:'',},
    userData:{},
    updateUser:{firstName:'',
    lastName:'',
    email:''
}
}
},
    created(){
        store.dispatch("getAllUsers")
    },
    computed:{
        dataList(){
            return store.getters.getAllUsers
        }
    },
methods: {
    logout(){
        localStorage.setItem("currentUser","logged out")
        this.$router.push('/')    },
        deleteUser(id){
            store.dispatch("deleteUser",id)
        },
        editUser(user , updateUser){
            console.log(user)

            store.dispatch("editUser", [user, updateUser])
        },
        addUser(newUser){
            store.dispatch("addUser",newUser)
        }
    }
}



// if (localStorage.getItem("currentUser") == "logged out") {
//     this.$router.push({ path: '/' })
//       }else{
//         this.$router.push({ path: '/home' })
//       }
    
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
.active {
  background-color: #04AA6D;
}
#button{
    cursor: pointer;
}
img{
    width: 50px;
    height: 50px;
}
#usersTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
}

#usersTable td, #usersTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

#usersTable tr:nth-child(even){background-color: #f2f2f2;}

#usersTable tr:hover {background-color: #ddd;}

#usersTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}


</style>