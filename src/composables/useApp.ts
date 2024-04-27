import { ref } from 'vue'

export type TOperador = "sumar" | "restar" | "dividir" | "multiplicar" | ""

export const useApp = () => {
  const num1 = ref<string>("")
  const num2 = ref<string>("")
  const operador = ref<TOperador>("")
  const resultado = ref<string>("")

  const calcular = (): number | undefined => {
    if (operador.value === '') return undefined

    const a: number = parseInt(num1.value)
    const b: number = parseInt(num2.value)

    if (operador.value === 'sumar') {
      return a + b
    } else if (operador.value === 'restar') {
      return a - b
    } else if (operador.value === 'dividir') {
      return a * b
    } else if (operador.value === 'multiplicar') {
      return a * b
    }
  }

  

  return {
    num1,
    num2,
    operador,
    resultado,
    calcular,
  }
}

