<template>
    <div class="anim_container" v-scroll-reveal.reset="{delay:900, distance: '550px', origin: 'left'}">
       <transition>
           <div class="icon icon_phone" delay="0" left="100"></div>
       </transition>

       <transition>
           <div class="plus one" delay="100" left="310">+</div>
       </transition>

       <transition>
           <div class="icon icon_delivery" delay="100" left="310"></div>
       </transition>

       <transition>
           <div class="equal one" delay="100" left="310">=</div>
       </transition>

       <transition>
           <div class="icon icon_pizza" delay="100" left="310"></div>
       </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    // methods: {
    //     beforeEnter(el) {
    //         el.style.left = '-200px';
    //         el.style.opacity = 0;
    //     },
    //     enter(el, done) {
    //         let delay = parseInt(el.getAttribute('delay'));
    //         let left = parseInt(el.getAttribute('left'));

    //         Velocity(el, { opacity: 1, left:left}, { delay:delay, duration: 2000, complete: done});
    //     }
    // }
}
</script>

<style>
    .anim_container {
        position: relative;
        height: 200px;
    }

    .icon {
        position: absolute;
        background-size: cover !important;
    }

    .plus {
        position: absolute;
        font-size: 160px;
        color: #fff;
        top: 90px;
        left: 280px;
    }

    .equal {
        position: absolute;
        font-size: 160px;
        color: #fff;
        top: 90px;
        left: 820px;
    }

    .icon_phone {
        background: url('../../assets/images/icons/icon-phone.png');
        width: 130px;
        height: 130px;
        top: 30px;
    }

    .icon_delivery {
        background: url('../../assets/images/icons/icon-delivery.png');
        width: 170px;
        height: 170px;
        top: 30px;
        left: 530px;
    }

    .icon_pizza {
        background: url('../../assets/images/icons/icon-pizza.png');
        width: 130px;
        height: 130px;
        top: 30px;
        left: 1030px;
    }
</style>