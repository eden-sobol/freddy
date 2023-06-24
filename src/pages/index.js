import { useState, useEffect } from "react";

export default function Index() {
	let random = null;
	let interval = null;
	let max = null;
	let temp = [];
	let counter = 0;
	let counter2 = 0;

	let stage = class {
		constructor(time, timer, code) {
			this.time = time;
			this.timer = timer;
			temp[counter] = code;
			counter++;
		}
		start() {
			interval = setInterval(this.check, this.time);
			if (this.timer != "inf") {
				max = setTimeout(() => {
					clearInterval(interval);
					interval = undefined;
					clearTimeout(max);
					max = undefined;
					setTimeout(temp[counter2]);
					counter2++;
				}, this.timer);
			}
		}
		check() {
			random = Math.floor(Math.random() * 5 + 1);
			if (random == 1) {
				clearInterval(interval);
				interval = undefined;
				clearTimeout(max);
				max = undefined;
				setTimeout(temp[counter2]);
				counter2++;
			}
		}
	};

	function s1() {
		stage2.start();
		document.querySelector("#video").currentTime = 21;
	}
	function s2() {
		stage3.start();
		document.querySelector("#video").currentTime = 41;
	}
	function s3() {
		document.querySelector("#jumpscare").classList.remove("jumpscareHide");
		document.querySelector("#video").remove();
		document.querySelector("#jumpscareVideo").play();
	}

	let stage1 = new stage(5000, 20000, s1);
	let stage2 = new stage(5000, 20000, s2);
	let stage3 = new stage(2000, "inf", s3);

	return (
		<>
			<video id="video">
				<source src="main.mov"></source>
			</video>
			<div
				id="clickdetector"
				onClick={() => {
					document.querySelector("#clickdetector").onClick = "";
					stage1.start();
					document.querySelector("#video").play();
				}}
			></div>
			<div id="jumpscare" className="jumpscareHide">
				<video id="jumpscareVideo">
					<source src="jump.mp4"></source>
				</video>
			</div>
		</>
	);
}
