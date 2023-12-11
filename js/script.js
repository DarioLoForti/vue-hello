const {createApp} = Vue

createApp({
    data(){
        return{
            message: "Welcome to Vue.js",
            img: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/snN3rbgKF7McfuiQAKcoLWMn"
        }
    }
}).mount("#app");