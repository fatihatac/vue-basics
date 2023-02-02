const app = Vue.createApp({
   data(){
    return{
        input:"",
        confirmedInput:""
    }
   },
   methods:{
    confirmOutput(event){
       this.confirmedInput = event.target.value;
    },
    registerOutput(event){
        this.input = event.target.value;
    },
    showAlert(){
        alert("Learning Vue.js!");
    }

   }
})

app.mount("#assignment");