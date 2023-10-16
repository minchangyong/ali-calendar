Page({
  data: {
    calendarValue: '2024/01/02,2024/01-/22',
    calendarVisible: false
  },
  handleClick() {
    this.setData({
      calendarVisible: !this.data.calendarVisible
    })
  },
  handleCalendarConfirm(e) {
    this.setData({
      calendarValue: e.value
    })
  },
  handleChangeTime(e) {
    console.log(e)
  }
});
