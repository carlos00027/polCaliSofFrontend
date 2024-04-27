<template>
  <div class="card">
    <div style="text-align: left;">
      <h2>Formulario <br /> para hacer <br> operaciones</h2>
    </div>
    <div>
      <label for="n1">Numero1</label>
      <input v-model="num1" type="number" id="n1">
    </div>
    <div>
      <label for="n2">Numero2</label>
      <input v-model="num2" type="number" id="n2">
    </div>
    <div>
      <label for="operacion">Operación</label>
      <select v-model="operador" id="operacion">
        <option value="">--Seleccionar--</option>
        <option value="sumar">Sumar</option>
        <option value="restar">Restar</option>
        <option value="dividir">dividir</option>
        <option value="multiplicar">multiplicar</option>
      </select>
    </div>
    <div>
      <button type="button" class="btn-calcular" @click="onClickCalcular">
        Calcular
      </button>
    </div>
    <div style="display: flex; align-items: center;">
      <label for="">Resultado:</label>
      <input type="text" :value="resultado" disabled>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useApp } from './composables/useApp.ts'
const {
  num1,
  num2,
  operador,
  calcular,
  resultado
} = useApp()
const onClickCalcular = (): void => {
  console.log('click aqui')
  if (num1.value === "" && num2.value === "") {
    alert('numero1 y numero2 son requeridos')
    return;
  }
  if(operador.value === ''){
    alert('Seleccionar un operador antes de continuar')
    return;
  }
  const response = calcular()
  console.log(response)
  resultado.value = response?.toString() ?? ""
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.card {
  display: flex;
  flex-direction: column;
  border: 1px dashed gray;
  padding: 10px;
}

.card label {
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
}

.card select {
  width: 100%;
}

.card input {
  width: 100%;
}

.btn-calcular {
  width: 100%;
  background: blue;
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
}
</style>
