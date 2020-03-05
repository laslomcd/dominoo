<template>
    <header>
       <div class="container clear">
           <div class="logo">
               <img :src="logoIcon" alt="Logo">
           </div>
           <div class="nav">
               <img :src="menuIcon" @click="showSidePanel = !showSidePanel" alt="menu">
           </div>

           <md-drawer 
               :md-active.sync="showSidePanel" 
               :md-right="true"
               class="side-drawer"
           >
            <img :src="logoIcon" alt="" class="drawer-img">
            <md-list>
                <md-list-item>
                   <span class="md-list-item-text">Home</span> 
                </md-list-item>

                <md-list-item>
                   <span class="md-list-item-text">Order</span> 
                </md-list-item>
            </md-list>
           </md-drawer>
       </div>
    </header>
</template>

<script>

import Logo from '../../assets/images/logo.png';
import Menu from '../../assets/images/menu.png';


export default {
    data() {
        return {
            logoIcon: Logo,
            menuIcon: Menu,
            showSidePanel: false
        }
    }
}
</script>