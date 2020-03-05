<template>
  <div>
    <app-header />
    <div>
     <app-feature></app-feature>
     <app-menu></app-menu>
    </div>
    <app-footer />
  </div>
</template>

<script>

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Feature from './components/Featured/Feature';
import Menu from './components/Menu/Menu';

export default {

  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-feature': Feature,
    'app-menu': Menu
  }
  
}
</script>

<style>
  @import './assets/style.css';
</style>