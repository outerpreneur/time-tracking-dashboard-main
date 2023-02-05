const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  let currentCounter = -1
  let previousCounter = -1
  let weeklyCurrentCounter = -1
  let weeklyPreviousCounter = -1
  let monthlyCurrentCounter = -1
  let monthlyPreviousCounter = -1


//   Timeframe selectors

  const dailyTag = document.querySelector("#daily")
  const weeklyTag = document.querySelector("#weekly")
  const monthlyTag = document.querySelector("#monthly")


// Current previous selectors

const currentFrameCounter = document.querySelectorAll(".timeframe-counter")
const lastFrameCounter = document.querySelectorAll(".last-week-row") 

// Functions

function getDailyStats() {
    currentFrameCounter.forEach(currentCounterTag => {
        currentCounter += 1;
        const blockData = data[currentCounter]
        const getTimeframes = blockData["timeframes"]
        const getDaily = getTimeframes["daily"]
        const getCurrent = getDaily["current"]
        currentCounterTag.innerHTML = getCurrent + "hrs"
    })
    
    lastFrameCounter.forEach(lastWeekCounter => {
        previousCounter += 1;
        const blockData = data[previousCounter]
        const getTimeframes = blockData["timeframes"]
        const getDaily = getTimeframes["daily"]
        const getLastWeek = getDaily["previous"]
        lastWeekCounter.innerHTML = `Yesterday - ${getLastWeek}hrs`
    })
}


function getWeeklyStats() {
    currentFrameCounter.forEach(currentCounterTag => {
        weeklyCurrentCounter += 1;
        const blockData = data[weeklyCurrentCounter]
        const getTimeframes = blockData["timeframes"]
        const getWeekly = getTimeframes["weekly"]
        const getCurrent = getWeekly["current"]
        console.log(getCurrent)
        currentCounterTag.innerHTML = getCurrent + "hrs"
    })
    
    lastFrameCounter.forEach(lastWeekCounter => {
        weeklyPreviousCounter += 1;
        const blockData = data[weeklyPreviousCounter]
        const getTimeframes = blockData["timeframes"]
        const getWeekly = getTimeframes["weekly"]
        const getLastWeek = getWeekly["previous"]
        lastWeekCounter.innerHTML = `Last Week - ${getLastWeek}hrs`
    })
}

function getMonthlyStats() {
    currentFrameCounter.forEach(currentCounterTag => {
        monthlyCurrentCounter += 1;
        const blockData = data[monthlyCurrentCounter]
        const getTimeframes = blockData["timeframes"]
        const getMonthly = getTimeframes["monthly"]
        const getCurrent = getMonthly["current"]
        console.log(getCurrent)
        currentCounterTag.innerHTML = getCurrent + "hrs"
    })
    
    lastFrameCounter.forEach(lastWeekCounter => {
        monthlyPreviousCounter += 1;
        const blockData = data[monthlyPreviousCounter]
        const getTimeframes = blockData["timeframes"]
        const getMonthly = getTimeframes["monthly"]
        const getLastWeek = getMonthly["previous"]
        lastWeekCounter.innerHTML = `Last Month - ${getLastWeek}hrs`
    })
}





dailyTag.addEventListener("click", ()=> {
    getDailyStats()
})

weeklyTag.addEventListener("click", ()=> {
    getWeeklyStats()
})

monthlyTag.addEventListener("click", ()=> {
    getMonthlyStats()
})




    // for (let i = 0; i < data.length; i++) {
    //     habitBlock = data[i];
    //     console.log(data[i])    
    // }