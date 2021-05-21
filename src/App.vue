<template>
  <router-view />
</template>

<style></style>

<script>
import M from "materialize-css";

export default {
  mounted() {
    // Initialize everything
    M.AutoInit();
  },
};
</script>
