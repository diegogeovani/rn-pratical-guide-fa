const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

const dateDiffInDays = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / MILLISECONDS_PER_DAY);
}

export default function lastExpenses(expenses, thresholdInDays = 7) {
  const currentDate = new Date()
  return expenses.filter((exp) => {
    const fromDaysAgo = dateDiffInDays(exp.date, currentDate)
    return fromDaysAgo <= thresholdInDays
  })
}
