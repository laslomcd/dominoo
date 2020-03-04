<template>
  <div>
    <app-header />
    <div>
      Content
    </div>
    <app-footer />
  </div>
</template>

<script>

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


export default {

  components: {
    'app-header': Header,
    'app-footer': Footer
  }
  
}
</script>
