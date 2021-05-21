<template>
  <div class="container">
    <!-- Page Title -->
    <div id="title">
      <h3 class="blue-text center-align">Bank Details {{ bank.bank_id }}</h3>
    </div>
    <!-- Bank Detail -->
    <div id="details">
      <div class="row">
        <div class="col s12 m6 offset-m3">
          <div class="card-panel">
            <ul>
              <li v-for="(detail, key) in bank" :key="detail">
                <strong>{{ key }}: </strong>
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bank: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
