const { createApp } = Vue

createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        generatorEmails() {
            for (let i = 0; i < 10; i++) {
                
                this.emails = [],

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                    if (this.emails.length < 10) {
                        this.emails.push(resp.data.response);
                    }
                });
            }
        },
    },
    mounted() {
    }
}).mount('#app')