

const pointArr = [
    {name: 'A' , xpos: 3 , ypos: 10 },
    {name: 'B' , xpos: 7 , ypos: 6 },
    {name: 'C' , xpos: 3 , ypos: 2 },
    {name: 'D' , xpos: 6 , ypos: 2 }
]

const target = {xpos: 2 , ypos: 8}

// for (const pointArrElement of pointArr) {
//     console.log(pointArrElement)
//
//     //target과 pointArrElement의 거리 계산
//
//     const distance = Math.sqrt(
//         Math.pow(pointArrElement.xpos - target.xpos , 2) +
//         Math.pow(pointArrElement.ypos - target.ypos, 2))

pointArr.sort((a,b)) => {
    const distance = Math.sqrt(
        Math.pow(pointArrElement.xpos - target.xpos , 2) + Math.pow(pointArrElement.ypos - target.ypos, 2))
    

    console.log(distance)
}