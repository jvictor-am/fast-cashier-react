export const formatStringDate = (date: string) => {
  const dateReturned = new Date(date)

  return (
    `${addLeftZero(dateReturned.getDate())}/${addLeftZero(dateReturned.getMonth() + 1)}`+
    `/${(dateReturned.getFullYear())} - ${addLeftZero(dateReturned.getHours())}:`+
    `${addLeftZero(dateReturned.getMinutes())}`
  )
}

export const addLeftZero = (number: number) => {
  return (
    number.toString().length === 1 ? '0' + number.toString() : number.toString()
  )
}
