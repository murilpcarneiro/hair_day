import dayjs from 'dayjs'

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault()

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim()
    if (!name) {
      return alert('Informe o nome do cliente.')
    }

    // Recupera o horário selecionado
    const selectedHour = document.querySelector('.hour-selected')
    if (!selectedHour) {
      return alert('Selecione um horário para o agendamento.')
    }

    // Recuperar somente a hora
    const [hour] = selectedHour.innerText.split(':')

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, 'hour')

    // Gera um id
    const id = new Date().getTime()

    console.log({ id, name, when: when.format('YYYY-MM-DD HH:mm:ss') })
  } catch (error) {
    alert('Não foi possível realizar o agendamento.')
    console.error(error)
  }
}
