import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import NepaliDate from 'nepali-datetime'

import './App.css'

function App() {
  const [npDate, setNpDate] = useState('')
  const [enDate, setEnDate] = useState('')

  const [npHour, setNPHour] = useState('')
  const [npMinute, setNPMinute] = useState('')
  const [npSecond, setNPSecond] = useState('')
  const [npAmPm, setNPAmPm] = useState('')

  const updateTime = useCallback(() => {
    const currentNepaliDateTime = new NepaliDate()
    setNpDate(currentNepaliDateTime.formatNepali('MMMM DD, YYYY'))
    setEnDate(dayjs().format('MMMM DD, YYYY'))

    setNPHour(currentNepaliDateTime.format('hh'))
    setNPMinute(currentNepaliDateTime.format('mm'))
    setNPSecond(currentNepaliDateTime.format('ss'))
    setNPAmPm(currentNepaliDateTime.format('A'))
  }, [])

  useEffect(() => {
    updateTime()
    const updateTimeInterval = setInterval(updateTime, 1000)
    return () => clearInterval(updateTimeInterval)
  }, [updateTime])

  return (
    <>
      <div className="time-board">
        <div className="font-montserrat english-date">
          <span>{enDate}</span>
        </div>
        <div className="nepali-date font-mukta">
          <span>{npDate}</span>
        </div>
        <div className="nepali-time font-montserrat">
          <span className="nepali-time-sub nepali-hour">{npHour}</span>
          <span className="nepali-time-sub nepali-minute">{npMinute}</span>
          <span className="nepali-time-sub nepali-second">{npSecond}</span>
          <span className="nepali-am-pm">{npAmPm}</span>
        </div>
      </div>
      <div className="org-name font-montserrat">
        Powered by{' '}
        <a
          target="_blank"
          href="https://github.com/opensource-nepal/node-nepali-datetime"
        >
          node-nepali-datetime
        </a>
      </div>
    </>
  )
}

export default App
