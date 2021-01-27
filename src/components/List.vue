<template>
  <div class="app-list">
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ФИО</th>
            <th scope="col">
              Отдел
              <select>
                <option>Все</option>
                <option>Бухгалтерия</option>
                <option>IT</option>
                <option>Маркетинг</option>
              </select>
            </th>
            <th scope="col">
              Пол
              <select @change="filterGender">
                <option value="Все">Все</option>
                <option value="Мужчина">Мужчина</option>
                <option value="Женщина">Женщина</option>
              </select>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="employee in pagination"
            :key="employee.id"
            @deleteFromEmployees="deleteFromEmployees(employee.id)"
          >
            <router-link :to="`/employee/${employee.id}`"
              ><td class="table table-striped">
                {{ employee.firstname + " " + employee.lastname }}
              </td></router-link
            >
            <td>{{ employee.department }}</td>
            <td>{{ employee.gender }}</td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li
            class="page-item"
            v-for="(page, index) in pages"
            :key="index"
            @click="clickPage(page)"
          >
            <a class="page-link" href="#">{{ page }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      employeesPage: 4,
      pageNumber: 1,
      worker: this.$store.state.employees
    };
  },
  computed: {
    ...mapGetters(["employees"]),
    pages() {
      return Math.ceil(this.worker.length / 4);
    },

    pagination() {
      let from = (this.pageNumber - 1) * this.employeesPage;
      let to = from + this.employeesPage;
      return this.worker.slice(from, to);
    },
  },

  methods: {
    clickPage(page) {
      this.pageNumber = page;
    },
    filterGender(e) {
      // this.worker = this.employees
      if(e.target.value == "Все") {
        this.worker = this.employees
      }else{
        this.worker = this.employees.filter((element) => {
          return element.gender == e.target.value;
        });
      }
    },
    ...mapActions(["getEmployees"]),
  },
  mounted() {
    this.getEmployees();
  },
};
</script>
