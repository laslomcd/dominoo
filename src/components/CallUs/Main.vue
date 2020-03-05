<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first" v-scroll-reveal.reset="{delay:200, scale: 2}">
                <h1>Hungry ?</h1>
            </div>
            <div class="second">
                <app-animation></app-animation>
            </div>
            <div class="third" v-scroll-reveal.reset="{delay:600, scale: 2}">
                <span>Give Us A Call</span> <span>419.478.1111</span>
            </div>
        </div>
    </div>
</template>

<script>
import Animation from './Animation';

export default {
    data() {
        return {

        }
    },
    components: {
        'app-animation': Animation
    }
}
</script>