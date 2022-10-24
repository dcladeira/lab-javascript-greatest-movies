// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((item)=>{return item.director})
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter((item)=>{return item.director == "Steven Spielberg" && item.genre.includes("Drama")})
    return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0){
        return 0
    } else {
        const scores = moviesArray.map((item)=>{
            if (typeof item.score == "number") {
                return item.score
            } else {
                return 0
            }
        })
        const sumScores = scores.reduce((acumulator, item)=>{return acumulator + item})
        const avgScores = sumScores/scores.length
        return Number(avgScores.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((item)=>{return item.genre.includes("Drama")})
    if (dramaMovies.length == 0){
        return 0
    } else {
        const scores = dramaMovies.map((item)=>{
            if (typeof item.score == "number") {
                return item.score
            } else {
                return 0
            }
        })
        const sumScores = scores.reduce((acumulator, item)=>{return acumulator + item})
        const avgScores = sumScores/scores.length
        return Number(avgScores.toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayOrdered = moviesArray.map((item)=>{return item})
    moviesArrayOrdered.sort(function(a,b){
        if (a.year < b.year) return -1
        if (a.year > b.year) return 1
        if (a.year == b.year) {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
        }
    })
    return moviesArrayOrdered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesTitleOrdered = moviesArray.map((item)=>{return item.title})
    moviesTitleOrdered.sort(function(a,b){
        if (a < b) return -1
        if (a > b) return 1
    })
    moviesTitleOrdered.splice(20, moviesTitleOrdered.length - 20)
    return moviesTitleOrdered    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let hours, minutes, durationInMinutes
    const moviesArrayCopy = moviesArray.map((item)=>{
      if (item.duration.indexOf("h") == -1) {
        hours = 0
      } else {
        hours = Number(item.duration.substring(0, item.duration.indexOf("h")))
      }
      if (item.duration.indexOf("min") == -1) {
        minutes = 0
      } else {
        minutes = Number(item.duration.substring(item.duration.indexOf("h")+1, item.duration.indexOf("min")))
      }
      durationInMinutes = hours*60 + minutes
      item.duration = durationInMinutes
      return item
      })
    return moviesArrayCopy
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length == 0) {
        return null
    } else {
        let scoreAvgPerYear = []
        const yearsArray = moviesArray.map((x)=>{return x.year})
        const yearsArrayUnique = []
        for (year of yearsArray) {
          if (!yearsArrayUnique.includes(year)) {
            yearsArrayUnique.push(year)
          }
        }
        for (let i=0; i<yearsArrayUnique.length; i++) {
          scoreAvgPerYear.push({year: yearsArrayUnique[i], score: 0})
          const yearMovies = moviesArray.filter((y)=>{return y.year == yearsArrayUnique[i]})
          const scores = yearMovies.map((z)=>{return z.score})
          const sumScores = scores.reduce((acumulator, item)=>{return acumulator + item})
          const avgScores = sumScores/scores.length
          scoreAvgPerYear[i].score = Number(avgScores.toFixed(2))
        }
        scoreAvgPerYear.sort(function(a,b){
            if (a.score < b.score) return 1
            if (a.score > b.score) return -1
            if (a.score == b.score) {
                if (a.year < b.year) return -1
                if (a.year > b.year) return 1
            }
        })
        return `The best year was ${scoreAvgPerYear[0].year} with an average score of ${scoreAvgPerYear[0].score}`
    }
  }
