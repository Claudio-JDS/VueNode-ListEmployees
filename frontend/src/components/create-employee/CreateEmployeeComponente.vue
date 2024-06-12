<script setup lang="ts">
import type Employee from '@/interfaces/IEmployeeHttp';
import { ref } from 'vue';
//vuelidate
import useVuelidate from '@vuelidate/core';
import { required, minLength, minValue } from '@vuelidate/validators'


const employee = ref<Employee>({
  name: '',
  job_role: '',
  salary: 0,
  birth: new Date(),
  employee_registration: ''
});

// vuelidate: definição das regras de validação
const rules = {
  name: { required, minLength: minLength(2) },
  job_role: {required},
  salary: { required, minValue: minValue(1) } ,
  birth: { required, minLength: minLength(8) },
  employee_registration: {required}
}

// vuelidate: uso do Vuelidate com as regras de validação
const v$ = useVuelidate(rules, employee);

function handleSubmitForm() {
  // vuelidate: validações do  ao tentar enviar o formulário
  v$.value.$touch();
  if (v$.value.$invalid) {
    console.log('Formulário inválido!');
    return;
  }
  console.log('Formulário válido!', employee.value);
}

</script>

<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-header">
        <h3>Add Enployee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm">
          <!-- INÍCIO BLOCO: Employee Name -->
          <div class="form-group">
            <label for="" class="font-weight-bold">Employee Name</label>
            <input 
              type="text" 
              id="name" 
              class="form-control" 
              placeholder="Type Your Name" 
              v-model="employee.name"
              :class="{'is-invalid': v$.name.$error}"
            >
            <span v-if="v$.name.$error" class="is-invalid-span">
              The name field is mandatory and must have at least 2 characters
            </span>
          </div>
          <!-- FIM BLOCO: Employee Name -->

          <!-- INÍCIO BLOCO: Job Role -->
          <div class="form-group">
              <label for="" class="font-weight-bold">Job Role</label>
              <input 
                type="text" 
                class="form-control" 
                placeholder="Type Job" 
                v-model="employee.job_role"
                :class="{'is-invalid': v$.job_role.$error}"
              >
              <span v-if="v$.job_role.$error" class="is-invalid-span">
              Fill in the field
            </span>
          </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INÍCIO BLOCO: Salary-->
          <div class="form-group">
            <label for="" class="font-weight-bold">Salary</label>
            <input 
              type="number" 
              id="salary" 
              class="form-control" 
              placeholder="Salary" 
              v-model="employee.salary"
              :class="{'is-invalid': v$.salary.$error}"
            >
            <span v-if="v$.salary.$error" class="is-invalid-span">
              The salary field is mandatory
            </span>
          </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INÍCIO BLOCO: Birth-->
          <div class="form-group">
            <label for="" class="font-weight-bold">Birth</label>
            <input 
              type="date" 
              class="form-control" 
              placeholder="YYYY/MM/DD" 
              v-model="employee.birth"
              :class="{'is-invalid': v$.birth.$error}"
            >
            <span v-if="v$.birth.$error" class="is-invalid-span">
              Fill in the field
            </span>
          </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INÍCIO BLOCO: Employee Registration-->
          <div class="form-group">
            <label for="" class="font-weight-bold">Employee Registration</label>
            <input 
              type="text" 
              class="form-control" 
              placeholder="Employee Registration"
              v-model="employee.employee_registration"
              :class="{'is-invalid': v$.employee_registration.$error}"
            >
            <span v-if="v$.employee_registration.$error" class="is-invalid-span">
              Fill in the field
            </span>
          </div>
          <!-- FIM BLOCO: Employee Registration -->

          <div class="form-group">
            <button class="btn btn-primary" type="submit">
              + Employee
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.is-invalid {
  border-color: red;
}
.is-invalid-span{
  color: red;
}
</style>