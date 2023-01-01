import MainPage from './components/MainPage.vue'
import LogIn from './components/LogIn.vue'

export default [
    { 
        name:"MainPage",
        component: MainPage ,
        path: "/home" , 
        beforeEnter: (to, from,next) => {
            // reject the navigation
            if (to.name !== 'Login' && localStorage.getItem("currentUser") == "logged out") next({ name: 'LogIn' })
  else next()
            return false
          },
        

    },
    { 
        name:"LogIn",
        component: LogIn ,
        path: "/" , 
       

    },
    
    

]
