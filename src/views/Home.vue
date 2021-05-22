<template>
  <div class="banks_list">
    <!-- Page Title -->
    <div id="title">
      <h3 class="blue-text center-align">Bank Branches</h3>
    </div>

    <!-- Filters -->
    <div id="filters">
      <!-- <p>Selected City: {{ city }}</p> -->
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <!-- Dropdown -->
          <div class="input-field">
            <select v-model="selected_city" @change="fetch_banks">
              <option value="" disabled>Choose your option</option>
              <option value="BANGALORE" selected>Bangalore</option>
              <option value="CHENNAI">Chennai</option>
              <option value="DELHI">Delhi</option>
              <option value="MUMBAI">Mumbai</option>
              <option value="VIZAG">Vizag</option>
            </select>
            <label>Choose City</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Banks List -->
    <div id="banks_list_outer_div">
      <datatable
        :title="'Banks in ' + selected_city"
        :columns="tableColumns1"
        :rows="banks_list"
        v-on:row-click="onRowClick"
        :exportable="false"
        :printable="false"
      >
      </datatable>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import DataTable from "vue-materialize-datatable";

export default {
  props: ["city"],
  data() {
    return {
      selected_city: "BANGALORE",
      banks_list: [],
      search_term: "",
      isFetching: true,
      tableColumns1: [
        {
          label: "Bank ID",
          field: "bank_id",
          numeric: false,
          html: false,
        },
        {
          label: "IFSC Code",
          field: "ifsc",
          numeric: false,
          html: false,
        },
        {
          label: "Address",
          field: "address",
          numeric: false,
          html: false,
        },
        {
          label: "State",
          field: "state",
          numeric: false,
          html: false,
        },
        {
          label: "District",
          field: "district",
          numeric: false,
          html: false,
        },
        {
          label: "City",
          field: "city",
          numeric: false,
          html: false,
        },
      ],
    };
  },
  components: {
    datatable: DataTable,
  },
  methods: {
    fetch_banks() {
      this.banks_list = [];
      console.log("Fetching results for " + this.selected_city);
      fetch(
        "https://vast-shore-74260.herokuapp.com/banks?city=" +
          this.selected_city
        // + "&limit=5"k
      )
        .then((res) => res.json())
        .then((result) => {
          this.banks_list = result;
        })
        .catch((err) => console.log(err));
    },
    onRowClick(row) {
      console.log("Route to a new page with this bank details", row);
      this.$router.push({
        name: "About",
        params: { id: row.bank_id, bank: row },
      });
    },
  },
  created() {
    // Fetch All Banks in the selected city (Default => Bangalore)
    console.log("Querying DB!");
    this.fetch_banks();
  },
  mounted() {
    // Initialize everything
    M.AutoInit();
    console.log("App mounted");
  },
};
</script>

<style scoped>
.banks_table td {
  max-width: 250px;
}
</style>
