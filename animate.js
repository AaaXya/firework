class CreatePattern {
    constructor() {
        this.color = presetColor.palette[mFmR(presetColor.palette.length)]
        this.initialStyles = document.createElement('i')
    }

    //添加class
    growUp(pattern, x, y) {
        this.initialStyles.classList.add(pattern)
        this.initialStyles.style.cssText = `background-color:${this.color};left:${x}px;top:${y}px;z-index:999`
        abc.append(this.initialStyles)
    }

    //随机散开
    dynamic() {
        let sc = 1, x = 0, y = 0

        function trans(a, b, c) {
            if (b) {
                a -= c
            } else {
                a += c
            }
            return a
        }
        //骰子
        let dice = function (a, b) {
            return a < 6 && b < 6 ? dice(mFmR(20), mFmR(20)) : [a, b]
        }
        let dd = dice(mFmR(20), mFmR(20));

        let polePositiveNegative = [mFmR(2), mFmR(2)]

        let animating = setInterval(() => {
            //sc归零动画结束
            if (sc <= 0) {
                clearInterval(animating)
                this.initialStyles.remove()
            } else {
                sc -= 0.1
                x = trans(x, polePositiveNegative[0], dd[0]);
                y = trans(y, polePositiveNegative[1], dd[1]);
                this.initialStyles.style.transform = `translate(${x}px,${y}px) scale(0)`
            }
        }, 99);
    }
}

function mFmR(value) {
    return Math.floor(Math.random() * value)
}

//调色盘
const presetColor = { palette: ["#f9f383", "#eb125f", "#6eff8a", "#66ffff"] }

// function creatPatternGroup(){}

function produceStyle(x, y) {
    let produce = new CreatePattern()
    produce.growUp('aixin', x, y)
    produce.dynamic()
}

let abc = document.querySelector('.abc')

document.addEventListener('click', function (e) {
    for (let i = 0; i < 10; i++) {
        produceStyle(e.pageX, e.pageY)
    }
})
