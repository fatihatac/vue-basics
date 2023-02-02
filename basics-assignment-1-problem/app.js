var app = Vue.createApp({
  data() {
    return {
      name: "Fatih",
      age: 22,
      image:"https://media.licdn.com/dms/image/D4D03AQGeldLbZ2EHQw/profile-displayphoto-shrink_800_800/0/1664989955111?e=2147483647&v=beta&t=S3Kawiwn26cm-9mHRtbush9jpexFLPjOQTmS9Ll7NO8"
    };
  },
  methods:{
    calculateAge(){
        return this.age + 5;
    },
    randomNumber(){
        return Math.random();
    }
  }
});

app.mount("#assignment");
