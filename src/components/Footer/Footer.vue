<template>
    <footer>
        <div class="container">
            <div>
                <img :src="logoIcon" alt="">
                <div class="contact">
                    <div>Call Us</div>
                    <div>419.478.1111</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

import Logo from '../../assets/images/logo.png';

export default {
    data() {
        return {
            logoIcon: Logo
        }
    }
}
</script>