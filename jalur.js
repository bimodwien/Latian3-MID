const data = [
    [0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0]
]

const value = []

for (let i = 0; i < data[0].length; i++){
    let isEnd = true
    for (let j = 0; j < data.length ; j++) {
        if(data[j][i] === 0) {
            console.log(`Jalur ${j+1}`)
            isEnd = false
            break
        }
    }
    if (isEnd) break
}

// console.log(value)