<template>
  <div>
    <app-header />
    <div>
     <app-feature></app-feature>
     <app-menu></app-menu>
     <app-main></app-main>
    </div>
    <app-footer />
  </div>
</template>

<script>

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Feature from './components/Featured/Feature';
import Menu from './components/Menu/Menu';
import Main from './components/CallUs/Main';

export default {

  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-feature': Feature,
    'app-menu': Menu,
    'app-main': Main
  }
  
}
</script>

<style>
  @import './assets/style.css';
</style>