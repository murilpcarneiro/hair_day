import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js'
import { hoursLoad } from '../form/hours-load.js'
import { showSchedules } from './show.js'

// Seleciona o aside de agendamentos
const scheduleAside = document.querySelector('aside .schedule')

// Seleciona o input de data
const selectedDate = document.getElementById('date')

export async function schedulesDay() {
  // Obtem a data selecionada no input
  const date = selectedDate.value

  // Busca na API os agendamentos do dia selecionado
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  showSchedules({ dailySchedules })

  // Renderiza as horas disponiveis.
  hoursLoad({ date })
}
