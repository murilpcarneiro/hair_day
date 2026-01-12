import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours.js'
import { hoursClick } from './hours-click.js'

const hours = document.getElementById('hours')

export function hoursLoad({ date, dailySchedules }) {
  // Limpa os horários anteriores
  hours.innerHTML = ''

  // Obtém a lista de todos os horários ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format('HH:mm')
  )

  // Verifica os horários disponíveis
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(':')

    // Adiciona a hora na date e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs())

    const avaible = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      avaible,
    }
  })

  // Renderizar os horários
  opening.forEach(({ hour, avaible }) => {
    const li = document.createElement('li')
    li.classList.add('hour')
    li.classList.add(avaible ? 'hour-avaible' : 'hour-unavailable')

    li.textContent = hour
    if (hour === '9:00') {
      hourHeaderAdd('Manhã')
    } else if (hour === '13:00') {
      hourHeaderAdd('Tarde')
    } else if (hour === '18:00') {
      hourHeaderAdd('Noite')
    }
    hours.appendChild(li)
  })

  // Adiciona o evento de click nas horas disponiveis
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement('li')
  header.classList.add('hour-period')
  header.textContent = title
  hours.appendChild(header)
}
