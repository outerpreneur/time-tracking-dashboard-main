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
        const currentDailyData = data[currentCounter].timeframes.daily.current
        currentCounterTag.innerHTML = currentDailyData + "hrs"
    })
    
    lastFrameCounter.forEach(lastWeekCounter => {
        previousCounter += 1;
        const previousDailyData = data[currentCounter].timeframes.daily.previous
        lastWeekCounter.innerHTML = `Yesterday - ${previousDailyData}hrs`
    })
}

// Weekly toggle

function getWeeklyStats() {
    currentFrameCounter.forEach(currentCounterTag => {
        weeklyCurrentCounter += 1;
        const currentWeeklyData = data[weeklyCurrentCounter].timeframes.weekly.current
        currentCounterTag.innerHTML = currentWeeklyData + "hrs"
    })
    
    lastFrameCounter.forEach(lastWeekCounter => {
        weeklyPreviousCounter += 1;
        const previousWeeklyData = data[weeklyCurrentCounter].timeframes.weekly.previous
        lastWeekCounter.innerHTML = `Last Week - ${previousWeeklyData}hrs`
    })
}

// Monthly toggle

function getMonthlyStats() {
    currentFrameCounter.forEach(currentCounterTag => {
        monthlyCurrentCounter += 1;
        const currentMonthlyData = data[monthlyCurrentCounter].timeframes.monthly.current
        currentCounterTag.innerHTML = currentMonthlyData + "hrs"
    })
    
    lastFrameCounter.forEach(lastWeekCounter => {
        monthlyPreviousCounter += 1;
        const previousMonthlyData = data[monthlyCurrentCounter].timeframes.monthly.previous
        lastWeekCounter.innerHTML = `Last Month - ${previousMonthlyData}hrs`
    })
}



dailyTag.addEventListener("click", getDailyStats)

weeklyTag.addEventListener("click", getWeeklyStats)

monthlyTag.addEventListener("click", getMonthlyStats)



}) ();