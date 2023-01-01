<template>
    
    
    <div class="login-form">
  <form @submit.prevent>
    <h1>Login</h1>
    <div class="content">
      <div class="input-field">
        <input type="text" placeholder="User Name" v-model="username" autocomplete="nope">
      </div>
      <div class="input-field">
        <input type="password" v-model="password" placeholder="Password" autocomplete="new-password">
      </div>
      <a href="#" class="link">Forgot Your Password?</a>
    </div>
    <div class="action">
      <button @click="login">Sign in</button>
    </div>
  </form>
</div>
</template>

<script>
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Vue.use(BootstrapVue)

// Vue.use(IconsPlugin)
export default{
    name: 'LogIn',
    data(){

return{
    username: '',
password: ''
}
},

methods: {
login(){
    console.log(this.username);
    console.log(this.password);
    
   let url ='https://dummyjson.com/auth/login';
  let  params = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: this.username,
          password: this.password,
          // expiresInMins: 60, // optional
        }), 
        
    }
    
     fetch(url, params).then(response=> response.json())
    .then((data) =>{ 
      console.log(data)
      
    let obj=data;
    
        if(obj.token){
    localStorage.setItem("currentUser","logged in")
    this.$router.push({ path: '/home' })
}else{
    alert("Wrong Information");
}
    
    // console.log(obj)
  
 console.log(obj.id);
  
  localStorage.setItem("token", obj.token);
  
   
  }
  )
    
  
  }
  

}
}




</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body {
    background-color: #777;
  font-family: 'Rubik', sans-serif;
} */

.login-form {
  background: #fff;
  width: 500px;
  margin: 65px auto;
  display: flex;
  
          flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
}
.login-form h1 {
  padding: 35px 35px 0 35px;
  font-weight: 300;
}
.login-form .content {
  padding: 35px;
  text-align: center;
}
.login-form .input-field {
  padding: 12px 5px;
}
.login-form .input-field input {
  font-size: 16px;
  display: block;
  font-family: 'Rubik', sans-serif;
  width: 100%;
  padding: 10px 1px;
  border: 0;
  border-bottom: 1px solid #747474;
  outline: none;
  transition: all .2s;
}

.login-form .input-field input::placeholder {
  text-transform: uppercase;
}
.login-form .input-field input:focus {
  border-color: #222;
}
.login-form a.link {
  text-decoration: none;
  color: #747474;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 20px;
}
.login-form .action {
  display: flex;
  
          flex-direction: row;
}
.login-form .action button {
  width: 100%;
  border: none;
  padding: 18px;
  font-family: 'Rubik', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  background: #2d3b55;
  color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0;
  letter-spacing: 0.2px;
  outline: 0;
  transition: all .3s;
}
.login-form .action button:hover {
  background: #d8d8d8;
  color: black;
}


</style>