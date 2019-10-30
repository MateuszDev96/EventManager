import nativeFormat from 'date-fns/format'
import locale from 'date-fns/locale/pl'

export const format = (date: number | Date, format: string) => nativeFormat(date, format, { locale })