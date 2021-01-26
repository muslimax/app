<template>
  <div class="app-data">
    <div class="container" v-if="!deleteEmp">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Имя и Фамилия</span>
        </div>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          :disabled="!inputDisabled"
          :value="user.firstname"
        />
        <input
          type="text"
          aria-label="Last name"
          class="form-control"
          :disabled="!inputDisabled"
          :value="user.lastname"
        />
      </div>
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            :disabled="!inputDisabled"
          >
            Отдел
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Бухгалтерия</a>
            <a class="dropdown-item" href="#">IT</a>
            <a class="dropdown-item" href="#">Маркетинг</a>
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Text input with dropdown button"
          
          :value="user.department"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Должность</span
          >
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          :disabled="!inputDisabled"
          :value="user.position"
        />
      </div>
      <div class="custom-control custom-radio custom-control-inline mb-3">
        <input
          type="radio"
          id="customRadioInline1"
          name="customRadioInline1"
          class="custom-control-input"
          :checked="maleChecked"
          :disabled="!inputDisabled"
        />
        <label class="custom-control-label" for="customRadioInline1"
          >Мужчина</label
        >
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="customRadioInline2"
          name="customRadioInline1"
          class="custom-control-input"
          :checked="femaleChecked"
          :disabled="!inputDisabled"
        />
        <label class="custom-control-label" for="customRadioInline2"
          >Женщина</label
        >
      </div>
      <div class="input-group mb-5">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Дата рождения</span
          >
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          :disabled="!inputDisabled"
          :value="user.date"
        />
      </div>
      
      
      <button class="btn btn-info mr-3" @click="changeData">Изменить</button>
      <button class="btn btn-info mr-3" @click="updateData">Сохранить</button>
      <button class="btn btn-info mr-3" @click="delFromEmployees">Удалить</button>
    </div>
    <div class="container" v-else>
      <h3>Соотрудник удален из списка!</h3>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return  {
      id: this.$route.params.id,
      inputDisabled: false,
      deleteEmp: false,
      
    }
  },
  computed: {
    ...mapGetters(["employees", "user"]),
    maleChecked() {
      let checked = false;
      if (this.user.gender === "Мужчина") {
        checked = true
      }
      return checked
    },
    femaleChecked() {
      let checked = false;
      if (this.user.gender === "Женщина") {
        checked = true
      }
      return checked
    },

  },
  methods: {
    ...mapActions(["getEmployees", "getUser", "deleteEmployee", "updateDataEmployee"]),
    delFromEmployees() {
      this.deleteEmployee(this.id);
      this.deleteEmp = true;
     
    },
    changeData() {
      this.inputDisabled = true
    },
    updateData() {
      this.updateDataEmployee(this.id, this.user)
    }
    
  },
  mounted() {
    this.getUser(this.id);
    this.getEmployees();
    
  },
};
</script>
