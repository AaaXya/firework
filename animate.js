class CreatePattern {
    constructor(el, x, y, config = {}) {
        this.root = el
        this.x = x
        this.y = y
        this.options = {
            ...{
                type: 'aixin', //class属性名
                quantity: 10, //数量
                distanceMax: 100, //移动最大距离px
                distanceMin: 20,
                palette: ['f9f383', 'eb125f', '6eff8a', '66ffff'], //调色盘
            },
            ...config,
        }
        this.openSwing = () =>
            (Math.random() < 0.5 ? -1 : 1) *
            //[n,m] 范围随机数 Math.floor(Math.random() * (m - n + 1)) + n;
            (this.mFmR(this.options.distanceMax - this.options.distanceMin + 1) +
                this.options.distanceMin)
        this.growUp()
    }

    //添加属性
    giveBirthToAChild() {
        const initialStyles = document.createElement('i')
        initialStyles.style.cssText = `background-color:#${
            this.options.palette[this.mFmR(this.options.palette.length)]
        };left:${this.x}px;top:${this.y}px;z-index:999`
        this.root.append(initialStyles)
        initialStyles.classList.add(this.options.type)
        this.dynamic(initialStyles)
    }

    growUp() {
        for (let i = 0; i < this.options.quantity; i++) this.giveBirthToAChild()
    }

    mFmR(v) {
        return Math.floor(Math.random() * v)
    }

    //随机散开
    dynamic(x) {
        setTimeout(() => {
            x.style.transform = `translate(${this.openSwing()}px,${this.openSwing()}px) scale(0)`
        })

        setTimeout(() => {
            x.remove()
        }, 700)
    }
}

const el = document.createElement('div')

addEventListener('load', () => {
    document.body.append(el)

    document.addEventListener('click', function (e) {
        new CreatePattern(el, e.pageX, e.pageY)
    })
})
