import React, { useRef, useState } from "react"
import ResultModel from "./ResultModel"

function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState()
  const [timerStarted, setTimerStarted] = useState()

  const timer = useRef()
  const dialog = useRef()

  const handleStart = function () {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
      dialog.open()
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  const handleStop = function () {
    clearTimeout(timer.current)
  }

  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        result="lost"
      />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
        </p>
        <p className={timerStarted ? "active" : "undefined"}>{timerStarted ? "Time is running..." : "Timer inactive"}</p>
      </section>
    </>
  )
}

export default TimerChallenge
