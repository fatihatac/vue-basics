const app = Vue.createApp({
    data() {
        return {
            task: "",
            taskList: [],
            isClicked: false,
        }

    },
    computed:{
        buttonCaption(){
            return this.isClicked ? "Show List" : "Hide List";
        }
    },
    methods: {
        hideList() {
            this.isClicked = !this.isClicked;
        },
        addTask() {
            this.taskList.push(this.task);
        }
    }
});

app.mount("#assignment");