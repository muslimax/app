<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card text-white bg-info mb-4" style="max-width: 18rem">
            <h3 class="card-header">Количество сотрудников</h3>
            <div class="card-body">
              <h4 class="card-title">{{ employees.length }}</h4>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card text-white bg-info mb-4" style="max-width: 18rem">
            <h3 class="card-header">Количество мужчин</h3>
            <div class="card-body">
              <h4 class="card-title">{{ getMen() }}</h4>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card text-white bg-info mb-4" style="max-width: 18rem">
            <h3 class="card-header">Количество женщин</h3>
            <div class="card-body">
              <h4 class="card-title">{{ getWomen() }}</h4>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card text-white bg-info mb-4" style="max-width: 18rem">
            <h3 class="card-header">Бухгалтерия</h3>
            <div class="card-body">
              <h4 class="card-title">{{ getDepartmentAcoount() }}</h4>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card text-white bg-info mb-4" style="max-width: 18rem">
            <h3 class="card-header">IT</h3>
            <div class="card-body">
              <h4 class="card-title">{{ getDepartmenIt() }}</h4>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card text-white bg-info mb-4" style="max-width: 18rem">
            <h3 class="card-header">Маркетинг</h3>
            <div class="card-body">
              <h4 class="card-title">{{ getDepartmentMarketing() }}</h4>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card text-white bg-info mb-4" style="max-width: 18rem">
            <h3 class="card-header">Средний возраст сотрудников</h3>
            <div class="card-body">
              <h4 class="card-title">{{ getAverageAge }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["employees"]),

    getAverageAge() {
      let currentYear = new Date().getFullYear();
      return Math.ceil(
        this.employees.reduce(
          (prev, employee) => prev + (currentYear - employee.date.slice(0, 4)),
          0
        ) / this.employees.length
      );
    },
  },
  methods: {
    ...mapActions(["getEmployees"]),
    getMen() {
      const men = this.employees.filter((employee) => {
        return employee.gender === "Мужчина";
      });
      return men.length;
    },
    getWomen() {
      const women = this.employees.filter((employee) => {
        return employee.gender === "Женщина";
      });
      return women.length;
    },
    getDepartmentAcoount() {
      const accountDepartment = this.employees.filter((employee) => {
        return employee.department === "Бухгалтерия";
      });
      return accountDepartment.length;
    },
    getDepartmenIt() {
      const itDepartment = this.employees.filter((employee) => {
        return employee.department === "IT";
      });
      return itDepartment.length;
    },
    getDepartmentMarketing() {
      const marketingDepartment = this.employees.filter((employee) => {
        return employee.department === "Маркетинг";
      });
      return marketingDepartment.length;
    },
  },
  mounted() {
    this.getEmployees();
  },
};
</script>


