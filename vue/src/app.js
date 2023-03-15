const MyNameApp = {
    data() {
        return {
            nome : "Portugal",
            idade: 33,
            input_name: ""
        }
    },

    methods:{

        submitForm(e){
            e.preventDefault();
            this.nome = this.input_name;
            console.log(this.input_name);
        }



    }
}

Vue.createApp(MyNameApp).mount("#app");