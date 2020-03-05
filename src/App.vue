<template>
  <div>
    <app-header />
    <div>
     <app-feature></app-feature>
    </div>
    <app-footer />
  </div>
</template>

<script>

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Feature from './components/Featured/Feature';

export default {

  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-feature': Feature
  }
  
}
</script>

<style>
  @import './assets/style.css';
</style>