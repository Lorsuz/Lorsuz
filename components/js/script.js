class Slide {
	slide
	prev
	next
	dot
	slideCurrent = 0
	totalSlides
	interval

	constructor(slide, prev, next, dot) {
		this.slide = document.querySelectorAll(slide)
		this.prev = document.querySelector(prev).addEventListener("click", () => {
			this.calculateSlideCurrent(-1)
		})
		this.next = document.querySelector(next).addEventListener("click", () => {
			this.calculateSlideCurrent(1)
		})
		this.dot = document.querySelectorAll(dot)
		for (let index = 0; index < this.dot.length; index++) {
			this.dot[index].addEventListener("click", () => {
				this.removeAnimation()
				this.animationEffect(this.slideCurrent, index)
				this.changeSlideCurrent(index)
			})
		}
		this.totalSlides = this.slide.length - 1
		this.slide[0].classList.add("active")

		this.init()
	}

	init() {
		this.interval = setInterval(() => {
			this.calculateSlideCurrent(1)
		}, 5000);
	}

	calculateSlideCurrent(value) {
		this.removeAnimation()
		var index = this.slideCurrent
		index += value
		if (index < 0) {
			index = this.totalSlides
		}
		if (index > this.totalSlides) {
			index = 0
		}
		this.animationEffect(this.slideCurrent, index, value)
		this.changeSlideCurrent(index)
	}

	animationEffect(slideCurrent, index, value = 0) {
		if (value == 1) {
			this.slide[slideCurrent].classList.add("toRightOld")
			this.slide[index].classList.add("toRightNew")
		} else if (value == -1) {
			this.slide[this.slideCurrent].classList.add("toLeftOld")
			this.slide[index].classList.add("toLeftNew")
		} else if (slideCurrent < index) {
			this.slide[slideCurrent].classList.add("toRightOld")
			this.slide[index].classList.add("toRightNew")
		} else if (slideCurrent > index) {
			this.slide[slideCurrent].classList.add("toLeftOld")
			this.slide[index].classList.add("toLeftNew")
		}

	}

	changeSlideCurrent(index) {
		this.slide[this.slideCurrent].classList.remove("active")
		this.dot[this.slideCurrent].classList.remove("active")
		this.slideCurrent = index
		this.slide[this.slideCurrent].classList.add("active")
		this.dot[this.slideCurrent].classList.add("active")

		this.init()
	}

	removeAnimation() {
		clearInterval(this.interval)
		this.slide.forEach(element => {
			element.classList.remove("toRightOld")
			element.classList.remove("toRightNew")
			element.classList.remove("toLeftOld")
			element.classList.remove("toLeftNew")
		});
	}

}
class Section {
	section
	button
	indexCurrent = 0
	zIndex = 1

	constructor(section, button) {
		this.section = document.querySelectorAll(section)
		this.button = document.querySelectorAll(button)
		for (let index = 0; index < this.button.length; index++) {
			this.button[index].addEventListener("click", () => {
				this.appearSection(index)
			})
		}
	}

	appearSection(index) {
		if (this.indexCurrent != index) {
			this.zIndex++
			this.section[this.indexCurrent].classList.remove("sectionAppear")

			this.button[this.indexCurrent].classList.remove("active")
			this.button[index].classList.add("active")

			this.section[index].style.zIndex = "" + this.zIndex

			this.section[index].classList.add("sectionAppear")

			this.indexCurrent = index

		}
	}
}
class Color {
	input
	valueColor
	constructor(input) {
		this.input = document.querySelector(input)
		this.init()
	}
	init() {
		setInterval(() => {
			this.valueColor = this.input.value
			this.changeColor()
		}, 0);
	}
	changeColor() {
		document.body.style.setProperty('--skin-color', this.valueColor);
	}
}
class Mode {
	button
	dark = false
	icon
	times = 1

	constructor(button) {
		this.button = document.querySelector(button)
		this.icon = document.querySelector(button + " i")
		this.button.addEventListener("click", () => { this.toggleMode() })
	}

	toggleMode() {

		this.icon.style.transform = `rotate(${this.times * 360}deg)`
		this.times++

		if (this.dark) {
			this.dark = false
			setTimeout(() => {
				this.icon.classList.add('fa-sun')
				this.icon.classList.remove('fa-moon')
			}, 200);
			document.body.classList.remove("dark")
		} else {
			this.dark = true
			setTimeout(() => {
				this.icon.classList.remove('fa-sun')
				this.icon.classList.add('fa-moon')
			}, 200);
			document.body.classList.add("dark")
		}
	}
}

window.addEventListener("load", () => {

	const sys = new Slide(
		"main section.about .container .geral-data .data-self .xp .slides .slides-pag",
		"main section.about .container .geral-data .data-self .xp .slides .prev",
		"main section.about .container .geral-data .data-self .xp .slides .next",
		"main section.about .container .geral-data .data-self .xp .slides .dots .dot"
	);

	const section = new Section(
		"main section",
		"aside nav ul li button"
	);

	const color = new Color("aside .theme input");

	const mode = new Mode("aside .theme button");
})
