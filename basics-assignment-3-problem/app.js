const app = Vue.createApp({
    data() {
        return {
            number:0,
            low:"Not there yet",
            high:"Too much!"
        }
    },
    watch:{
        showOutput(){
            console.log("watcher executing...");
            const that = this;
                setTimeout(function () {
                    that.number = 0;
                },5000);
            }
        },
    computed:{
        showOutput(){
            if (this.number < 37) {
                return this.low;
            }
            if (this.number > 37) {
                return this.high
            }
            else {
                return this.number;
            }
        }
    },
    methods:{
        add(num){
           return this.number = this.number + num;
        },
    }
})

app.mount("#assignment");