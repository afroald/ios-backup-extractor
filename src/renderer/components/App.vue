<template>
  <div v-if="state !== null" :class="$style.app">
    <div v-if="state == 'new'" :class="$style['open-dialog']">
      <open-dialog @path="openBackup"></open-dialog>
    </div>

    <p v-if="state === 'opening'">Loading...</p>
  </div>
</template>

<script>
  import Backup from '../Backup';
  import OpenDialog from './OpenDialog.vue';

  export default {
    name: 'App',
    components: { OpenDialog },
    data() {
      return {
        state: 'new',
        backup: null,
      };
    },
    methods: {
      openBackup(path) {
        Backup.open(path);
      },
    },
    created() {
      Backup.setDelegate(this);
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
