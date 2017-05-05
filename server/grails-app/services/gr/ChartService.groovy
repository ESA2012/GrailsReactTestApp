package gr

import grails.transaction.Transactional

@Transactional
class ChartService {

    def clearAllData() {
        DayValue.executeUpdate('delete from DayValue')
    }

    def addValue(Double value) {
        DayValue lastDayValue = DayValue.last()
        long date = lastDayValue ? lastDayValue.date.time : new Date().time
        long newDate = date + 86400000
        DayValue newDayValue = new DayValue(date: new Date(newDate), value: value)
        newDayValue.save(flush: true, failOnError: true)
    }

    def getData() {
        DayValue.findAll()
    }
}
