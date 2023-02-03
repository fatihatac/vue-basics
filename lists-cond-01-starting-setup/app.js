const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: '',
    };
  },
  methods: {
    removeGoal(index){
      this.goals.splice(index,1);
    },
    addGoal() {
      this.goals.push(this.enteredGoal);
    }
  }
});

app.mount('#user-goals');


