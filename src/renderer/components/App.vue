<template>
  <div v-if="state !== null" class="app">
    <div v-if="state == 'new'" class="app__open-dialog">
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
  // @import '../styles/base';

  .app {
    height: 100%;

    &__open-dialog {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
</style>
