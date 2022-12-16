<template>
    <div class="container newsl_container">
        <h2>Join Our Newsletter</h2>
        <div class="form">
            <input type="text" v-model="email">
            <button @click="submitHandler">Subscribe</button>
        </div>
        <div class="error_label">
            <div>{{ error }}</div>
        </div>
        <div class="success_label">
            <div>{{ success }}</div>
        </div>
        <div class="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit cumque nam est magni labore suscipit voluptatibus, laudantium cupiditate natus ea inventore corrupti, expedita molestiae?
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            error: '',
            success: ''
        }
    },
    methods: {
        validate(email) {
            let valid = [true, '']
            if(!/\S+@\S+\.\S+/.test(email)) {
                valid = [false, 'Not a valid email address']
            }
            if(email === '') {
                valid = [false, 'You must supply an email address']
            }
            return valid;
        },
        submitHandler() {
            let valid = this.validate(this.email);
            if(valid[0]) {
                this.error = '';
                this.addEmail(this.email)
            } else {
                this.error = valid[1]
            }
        },
        addEmail(email) {
            this.$http.get(`users.json?orderBy="email"&equalTo="${email}"`)
            .then(response => {
                if(Object.getOwnPropertyNames(response.data).length === 0) {
                    this.$http.post('users.json', { email: this.email})
                    // eslint-disable-next-line no-unused-vars
                    .then(response => {
                        this.success = 'You are now subscribed!'
                    })
                } else {
                    this.success = 'Already on the list!'
                }
                this.clearSuccess(); 
            })
        },
        clearSuccess() {
            setTimeout(() => {
                this.email = ''
                this.success = ''
            }, 3000)
        }
    }
}
</script>