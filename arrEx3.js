

const arr = [36,61,53,17,93,85]

//평균 => 모든 점수의 합/ 개수
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    console.log(`SUM: ${sum}`)
}
let avg = (sum / arr.length).toFixed(3)
console.log('AVG: ' + avg)

//최저
let min = 101
for (let i = 0; i < arr.length; i++) {
    const score = arr[i]

    if(score < min) {
        min = score
    }
}
console.log(`MIN: ${min}`)

//최고
let max = -1
for (let i = 0; i < arr.length; i++) {
    const score = arr[i]

    if(score > max){
        max = score
    }
}
console.log(`MAX: ${max}`)