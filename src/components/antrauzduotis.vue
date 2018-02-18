<template>
  <div class="uzduotis">
      <h2>Antras puslapis</h2>
      <p>Užsakymų sąrašas su konkrečių užsakymų paieška.</p>
      <form v-on:submit="searchProducts">
          <div class="row valign-wrapper">
                <div class="input-field col s3">
                    <input required v-model="searchProducts.names" type="text" id="search">
                    <label for="search">Vardas</label>
                </div>
              <div class="input-field col s3">
                    <input required v-model="searchProducts.tel" type="text" id="search">
                    <label for="search">Tel. numeris</label>
                </div>
                <div class="input-field col s2">
                    <input required v-model="searchProducts.make" type="text" id="search">
                    <label for="search">Markė</label>
                </div>
                <div class="input-field col s2">
                    <input required v-model="searchProducts.model" type="text" id="search">
                    <label for="search">Modelis</label>
                </div>
                <div class="input-field col s2">
                    <input required v-model="searchProducts.date" type="date" id="search">
                </div>
            </div>
            <div class="row valign-wrapper">
                <div class="input-field col s2" style="margin-top: 0;">
                    <input class="waves-effect waves-light btn blue lighten-1" style="width: 100%; margin-top: 0;" type="submit" value="Ieškoti">
                </div>
            </div>
      </form>
      <div class="row valign-wrapper">
                <div class="input-field col s2" style="margin-top: 0;">
                    <input v-on:click="showAll" class="waves-effect waves-light btn red lighten-1" style="width: 100%; margin-top: 0;" type="submit" value="Rodyti visus">
                </div>
            </div>
      <div>
      <table class="striped">
        <thead>
          <tr>
              <th>Vardas</th>
              <th>Tel. numeris</th>
              <th>Markė</th>
              <th>Modelis</th>
              <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in newItemList">
            <td>{{item.first_name + " " + item.last_name}}</td>
            <td>{{item.number}}</td>
            <td>{{item.carMake}}</td>
            <td>{{item.carModel}}</td>
            <td>{{item.Date}}</td>
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
      custName: "",
      custTel: "",
      custModel: "",
      custMake: "",
      custdate: "",
      items: [
        {
          first_name: "",
          last_name: "",
          number: "",
          carMake: "",
          carModel: "",
          Date: ""
        }
      ]
    };
  },
  methods: {
    searchProducts: function(e) {
      e.preventDefault();
      this.custName = this.searchProducts.names;
      this.custTel = this.searchProducts.tel;
      this.custModel = this.searchProducts.model;
      this.custMake = this.searchProducts.make;
      this.custdate = this.searchProducts.date;
    },
    showAll: function() {
      this.custName = "";
      this.custTel = "";
      this.custModel = "";
      this.custMake = "";
      this.custdate = "";
    },
    checkL: function() {
      if (this.newItemList.length > 0) {
        return true
      } else {
        false
      }
    }
  },
  computed: {
    newItemList: function() {
      return this.items.filter(item => {
        let name =
          item.first_name.toUpperCase() + " " + item.last_name.toUpperCase();
        let carModel = item.carModel.toUpperCase();
        let tel = item.number.toUpperCase();
        let data = item.Date.toUpperCase();
        let carMake = item.carMake.toUpperCase();
        if (
          name.indexOf(this.custName.toUpperCase()) > -1 &&
          carModel.indexOf(this.custModel.toUpperCase()) > -1 &&
          data.indexOf(this.custdate.toString().toUpperCase()) > -1 &&
          tel.indexOf(this.custTel.toString().toUpperCase()) > -1 &&
          carMake.indexOf(this.custMake.toString().toUpperCase()) > -1
        ) {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  created: function() {
    this.$http.get("../static/antras.json").then(function(response) {
      this.items = response.data;
    });
  }
};
</script>

<style scoped>

</style>
