/* Update */
const updateDate = '2024-04-02'
const updateDateText = updateDate.split('-').map((number, index) => {
  if (index !== 2) {
    return `${number}. `
  }
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ]
  const weekdayIndex = new Date(updateDate).getDay()

  return `${number}. ${days[weekdayIndex]}`
})

/* Player & Video */
const exceedQuotaMessage =
  'Error: 지금은 서비스를 이용할 수 없습니다. 잠시 후에 다시 시도해주십시오.'
const qFilterKeyword = 'KY Karaoke -노래방챌린지'
const kyID = 'UCDqaUIUSJP5EVMEI178Zfag'

export { exceedQuotaMessage, qFilterKeyword, kyID, updateDate, updateDateText }
