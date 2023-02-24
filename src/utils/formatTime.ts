import { format, formatDistanceToNow, getTime } from 'date-fns'
import { fr } from 'date-fns/locale'

export function fDate(date: string) {
  return format(new Date(date), 'dd MMMM yyyy', { locale: fr })
}

export function fDateTime(date: string) {
  return format(new Date(date), 'dd MMM yyyy HH:mm')
}

export function fTimestamp(date: string) {
  return getTime(new Date(date))
}

export function fDateTimeSuffix(date: string) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}

export function fToNow(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  })
}
