addEventListener("load",app);
function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = !fortuneList ? "No fortune" : fortuneList[~~(Math.random() * fortuneList.length)];
			this.luckyNumbers = [];
			this.drawLuckyNumbers();
		}
		drawLuckyNumbers() {
			let maxDraws = 6,
				draws = maxDraws,
				maxNumber = 49,
				numberPool = [];

			// create number pool
			while (maxNumber--) {
				numberPool.unshift(maxNumber + 1);
			}
			// draw from pool, populate the lucky numbers
			while (draws--) {
				let drawn = ~~(Math.random() * numberPool.length);
				this.luckyNumbers.push(numberPool[drawn]);
				numberPool.splice(drawn,1);
			}
		}
	}

	var fcBtn = document.querySelector("button"),
		fortuneText = document.querySelector(".fc-fortune-text"),
		fortuneLuckyNumbers = document.querySelector(".fc-lucky-numbers span"),
		fortuneList = [
			"Through the journey of healing, every step forward is a triumph.",
            "The pages of your story are being rewritten with resilience and strength.",
            "With each breath, you're releasing the weight of the past, making room for peace.",
            "You're not defined by your history; your future is an open canvas of possibilities.",
            "Every day, you're planting seeds of self-compassion that will grow into healing.",
            "Your journey is like a phoenix rising from the ashes, stronger and more resilient.",
            "Reclaim your narrative; you're the author of a story filled with courage and growth.",
            "The colors of strength and healing are painting a beautiful picture in your life.",
            "Your journey is a testament to the power of resilience; keep walking with purpose.",
            "In the garden of self-love, you're tending to the roots that anchor your strength.",
            "Worry is a passing cloud; let it drift away as you navigate toward calm seas.",
            "You're the captain of your thoughts, steering toward the peaceful shores of serenity.",
            "Your mind is a canvas; paint it with strokes of tranquility and hues of calm.",
            "Breathe in courage, exhale fear. You're stronger than the challenges you face.",
            "In the dance of thoughts, let calmness lead the way; anxiety can only follow.",
            "You're not a prisoner of anxiety; you hold the key to your own liberation.",
            "Your mind is a sanctuary; guard its gates with the shield of tranquility.",
            "With each step, you're forging a path through the storms with resilience and grace.",
            "Like a butterfly emerging, transform worries into the beauty of resilience.",
            "In the symphony of life, let the melody be composed of your strength and peace.",
            "Every sunrise is a new canvas, painted with the hues of hope and possibility.",
            "Your journey may be clouded, but the sun still shines behind the veil of despair.",
            "In the garden of emotions, nurture seeds of joy that will blossom in time.",
            "You're not alone in the darkness; others are ready to share their light with you.",
            "The night may be long, but so is your capacity for resilience and inner strength.",
            "Your spirit echoes louder than despair in the silent battles you face.",
            "Your life's symphony is incomplete without the uplifting melody of self-compassion.",
            "The tapestry of your life is a mosaic of experiences, contributing to your strength.",
            "With each tear shed, you're watering the garden of your inner resilience.",
            "Climb the mountain of self-discovery; the summit reveals your strength and resilience."
		],
		fortune = new Fortune(),

		getFortune = function(){
			fortune = new Fortune(fortuneList);
			fortuneText.innerHTML = fortune.text;
			fortuneLuckyNumbers.innerHTML = fortune.luckyNumbers.join(", ");
		},
		nextState = function(){
			let elClass = this.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (elClass.contains(spawned)) {
				elClass.remove(spawned);
				elClass.add(opened);

			// new cookie
			} else {
				elClass.remove(opened);
				elClass.add(spawned);
				getFortune();
			}
		};
	
	getFortune();
	fcBtn.addEventListener("click",nextState);
}
