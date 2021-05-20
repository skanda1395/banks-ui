<template>
  <router-view />
</template>

<style></style>

<script>
import M from "materialize-css";

export default {
  mounted() {
    // Initialize dropdown
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  },
};
</script>
