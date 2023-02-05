(async () => {
    const response = await fetch("./data.json");
    const data = await response.json();

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

// daily toggle

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

// Weekly toggle

function getWeeklyStats() {
    currentFrameCounter.forEach(currentCounterTag => {
        weeklyCurrentCounter += 1;
        const blockData = data[weeklyCurrentCounter]
        const getTimeframes = blockData["timeframes"]
        const getWeekly = getTimeframes["weekly"]
        const getCurrent = getWeekly["current"]
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

// Monthly toggle

function getMonthlyStats() {
    currentFrameCounter.forEach(currentCounterTag => {
        monthlyCurrentCounter += 1;
        const blockData = data[monthlyCurrentCounter]
        const getTimeframes = blockData["timeframes"]
        const getMonthly = getTimeframes["monthly"]
        const getCurrent = getMonthly["current"]
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



dailyTag.addEventListener("click", getDailyStats)

weeklyTag.addEventListener("click", getWeeklyStats)

monthlyTag.addEventListener("click", getMonthlyStats)



}) ();