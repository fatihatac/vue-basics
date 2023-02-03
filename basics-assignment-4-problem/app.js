const app = Vue.createApp({
    data() {
        return {
            className: "",
            colorName:"",
            user1: false,
            user2: false,
            visible: true
        };
    },
    computed: {
        pClasses() {
            return {
                user1: this.className === "user1",
                user2: this.className === "user2",
                visible: this.visible,
                hidden: !this.visible
            }
        }
    },
    methods: {
        setHidden() {
            this.visible = !this.visible;
        },
    }
});

app.mount("#assignment");