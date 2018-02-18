<template>
  <div class="uzduotis">
      <h2>Pirmas puslapis</h2>
      <p>Produktų / paslaugų sąrašo puslapis su paieška.</p>
      <form>
          <div class="input-field">
              <input type="text" id="search" v-model="search">
              <label for="search">Paieška</label>
          </div>
      </form>
      <div>
      <table class="striped">
        <thead>
          <tr>
              <th>Markė</th>
              <th>Modelis</th>
              <th>Metai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in newItemList" >
            <td>{{item.carMake}}</td>
            <td>{{item.carModel}}</td>
            <td>{{item.carYear}}</td>
          </tr>
        </tbody>
      </table>
      <p style="font-weight: bold;" v-if="checkL()">Paieškos rezultatų: {{this.newItemList.length}} </p>
      <p style="font-weight: bold;" class="red-text" v-else>Ieškomų produktų nerasta!</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "uzduotis",
  data() {
    return {
      search: "",
      items: [
        {
          carMake: "",
          carModel: "",
          carYear: ""
        }
      ]
    };
  },
  computed: {
    newItemList: function() {
      return this.items.filter(item => {
        let word =
          item.carMake.toUpperCase() +
          " " +
          item.carModel.toUpperCase() +
          " " +
          item.carYear.toString().toUpperCase();
        if (word.indexOf(this.search.toUpperCase()) > -1) {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  methods: {
    checkL: function() {
      if (this.newItemList.length > 0) {
        return true
      } else {
        false
      }
    }
  },
  created: function() {
    this.$http.get("../static/pirmas.json").then(function(response) {
      this.items = response.data;
    });
  }
};
</script>

<style scoped></style>
