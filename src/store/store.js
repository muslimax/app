import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    employees: [],
   
    user: {},
    delete: {},
  },

  mutations: {
   
    SET_EMPLOYEES: (state, employees) => {
      state.employees = employees;
    },
    SET_USER(state, payload) {
        state.user = payload;
    },
  
  },
  actions: {
    getEmployees({ commit }) {
      axios
        .get("http://localhost:3000/employees")
        .then(employees => {
          commit("SET_EMPLOYEES", employees.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getUser({ commit }, id) {
        axios.get(`http://localhost:3000/employees/${id}`)
        .then(res => {
            commit('SET_USER',res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },
    deleteEmployee({}, id) {
      axios.delete(`http://localhost:3000/employees/${id}`)
      .then(res => {console.log(res);})
      .catch((err) => {console.log(err)})
      
    },
    updateDataEmployee({}, id, data) {
      axios.patch(`http://localhost:3000/employees/${id}`, data)
      .then(res => {console.log(res);})
      .catch(error => {
        console.log(error);
      });
    }
  },
  getters: {
    employees(state) {
      return state.employees;
    },
    user(state) {
        return state.user;
    }
  }
});
