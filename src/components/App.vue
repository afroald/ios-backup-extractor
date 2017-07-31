<template>
  <div :class="$style.app">
    <div :class="$style['open-dialog']" v-if="!backup">
      <open-dialog name="backup"></open-dialog>
    </div>
  </div>
</template>

<script>
  import 'keen-ui/src/bootstrap';
  import OpenDialog from './OpenDialog';

  export default {
    name: 'App',
    components: { OpenDialog },
    data: function data() {
      return {
        backup: null,
      };
    },
  };
</script>

<style lang="scss">
  @import '../styles/base';
</style>

<style lang="scss" module>
  .app {
    height: 100%;
  }

  .open-dialog {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
