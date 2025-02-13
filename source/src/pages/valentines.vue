<template>
	<q-layout view="hHh LpR fFf">
		<q-header elevated>
		</q-header>

		<q-page-container>
			<q-page class="" :class="[$q.dark.isActive ? 'bg-primary': '']">
				<div id="start" :class="[isOpen? 'open': 'close']" class="fullscreen row justify-center items-center">
					<div class="envlope-wrapper">
					    <div id="envelope" :class="[isOpen? 'open': 'close']" @click="Open()">
					        <div class="front flap"></div>
					        <div class="front pocket"></div>
					        <div class="letter text-black">
			                    <div class="words line1"></div>
			                    <div class="words line2"></div>
			                    <div class="words line3"></div>
			                    <div class="words line4"></div>
					        </div>
					        <div class="hearts">
					            <div class="heart a1"></div>
					            <div class="heart a2"></div>
					            <div class="heart a3"></div>
					        </div>
					    </div>
					</div>
				</div>

				
				<div v-if="isOpen && !happy" id="story" class="fullscreen row justify-center items-center" style="overflow:auto">
					<img :class="[this.NoIndex < this.NoText.length? '': 'leave', q.screen.gt.sm? 'col-3 q-pa-xl': 'col-7']" :src="url + 'bubu.png'" width="100%" height="auto"/>

					<div :class="[this.NoIndex < this.NoText.length? '': 'hide', q.screen.gt.sm? 'col-6': 'col-12']" class="column justify-center">
						<div :class="[q.screen.gt.sm? 'q-pa-xl q-ma-xl': 'q-pa-sm q-ma-sm']" class="bg-grey-10 text-italic">
							<h5 class="q-pa-xs q-ma-xs"><u>Will you be my Valentine!</u></h5>
							<h6 class="q-pa-xs q-ma-xs">Do you accept?</h6>
						</div>
						<div :class="[q.screen.gt.md? 'q-pa-xl q-gutter-xl': 'q-pa-sm q-gutter-sm']" class="row">
							<q-btn no-caps class="col text-subtitle1 text-center bg-grey-10 text-italic q-px-xl" @click="SayYes()">
								Yes!
							</q-btn>
							<q-btn no-caps class="col text-subtitle1 text-center bg-grey-10 text-italic q-px-xl" @click="SayNo()">
								{{ NoText[NoIndex] }}
							</q-btn>
						</div>
					</div>
					
					<img v-if="this.NoIndex < this.NoText.length" :class="[q.screen.gt.sm? 'col-3 q-pa-xl': 'col-7']" :src="url + 'dudu.png'" width="100%" height="auto"/>
					<img v-if="this.NoIndex >= this.NoText.length" :class="[q.screen.gt.sm? 'col-3 q-pa-xl': 'col-7']" :src="url + 'sad-dudu.png'" width="100%" height="auto"/>
				</div>
				<div v-if="happy" class="fullscreen row justify-center items-center">
					<h5 :class="[q.screen.gt.sm? 'col-4': 'col-5']" class="text-center text-italic">
					    Happy Valentines, my love<br/>
						<img class="col-12" :src="url + 'goofs.png'" width="100%" height="auto"/>
					</h5>
				</div>
			</q-page>
		</q-page-container>

		<q-footer elevated style="height: 0px; overflow: visible">
		</q-footer>
	</q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { until } from 'src/types/net';
import { url } from 'src/api/raw/raw';
import router from 'src/router';
import { useQuasar } from 'quasar';

export default defineComponent({
	name: "valentines",
  	components: {},
	props: {},
	setup() {},
	data() {
        const q = useQuasar();
	
		return {
			happy: false,
			isOpen: false,
			NoText: ["No :(", "Are you sure it's no?", "Are you REALLY REALLY sure it's no?", "Do you really want to make me sad?"],
			NoIndex: 0,
			url,
			q,
		};
	},
	computed: {},
	watch: {},
	created: function () {},
	methods: {
		async Open() {
			this.isOpen = true;
		    setTimeout(async () => {
		    }, 3000)
		},
		async SayYes() {
			this.happy = true;
		},

		async SayNo() {
			this.NoIndex = this.NoIndex + 1;
		}
	},
});
</script>

<style scoped lang="scss">
$color-env          : #4a4a4a;
$color-env2         : darken($color-env, 3%);
$color-flap         : darken($color-env, 10%);
$color-bg           : lighten($color-env, 20%);
$color-heart        : #D00000; 

$env-border-radius  : 6px;
$env-width          : 280px;
$env-height         : 180px;
$heart-width        : 50px;

.leave {
	animation: leaving 6s forwards;
	transform: translateX(0vw);
}
@keyframes leaving {
	33% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(-75vw);
	}
}

.hide {
	transform: scale(1, 1);
	animation: hiding 2s forwards;
}
@keyframes hiding {
	0% {
		transform: scale(1, 1);
	}
	100% {
		transform: scale(0, 1);
	}
}

#start.open {
	opacity: 1;
	animation: fadeOut 6s forwards;
}
@keyframes fadeOut {
	50% {
		opacity: 1;
	}
	75% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
#story {
	opacity: 0;
	animation: fadeIn 6s forwards;
}
@keyframes fadeIn {
	75% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

#envelope {
    position: relative;
    width: $env-width;
    height: $env-height;
    border-bottom-left-radius: $env-border-radius;
    border-bottom-right-radius: $env-border-radius;
    margin-left: auto;
    margin-right: auto;
    top: 150px;
    background-color: $color-flap;
    box-shadow: 0 4px 20px rgba(0,0,0,.2);
}
.front { 
    position: absolute;
    width: 0;
    height: 0;
    z-index: 3;
}
.flap {
    border-left: ($env-width / 2) solid transparent;
    border-right: ($env-width / 2) solid transparent;
    border-bottom: ($env-height / 2) - 8 solid transparent; /* a little smaller */
    border-top: ($env-height / 2) + 8 solid $color-flap; /* a little larger */
    transform-origin: top;
    pointer-events: none;
}
.pocket {
    border-left: ($env-width / 2) solid $color-env;
    border-right: ($env-width / 2) solid $color-env;
    border-bottom: ($env-height / 2) solid $color-env2;
    border-top: ($env-height / 2) solid transparent;
    border-bottom-left-radius: $env-border-radius;
    border-bottom-right-radius: $env-border-radius;
}
.letter {
    position: relative;
    background-color: #fff;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 90%;
    top: 5%;
    border-radius: $env-border-radius;
    box-shadow: 0 2px 26px rgba(0,0,0,.12);
}
.letter:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: 
        linear-gradient(180deg, 
        rgba(255,255,255,0.00) 25%, 
        rgba(215,227,239,0.70) 55%, 
        rgba(215,227,239,1.00) 100%);
}
.words {
    position: absolute;
    left: 10%;
    width: 80%;
    height: 14%;
    background-color: #EEEFF0;
}
.words.line1 {
    top: 15%;
    width: 20%;
    height: 7%;
}
.words.line2 {
    top: 30%;
}
.words.line3 {
    top: 50%;
}
.words.line4 {
    top: 70%;
}
.open .flap {
    transform: rotateX(180deg);
    transition: transform .4s ease, z-index .6s;
    z-index: 1;
}
.close .flap {
    transform: rotateX(0deg);
    transition: transform .4s .6s ease, z-index 1s;
    z-index: 5;
}
.close .letter {
    transform: translateY(0px); 
    transition: transform .4s ease, z-index 1s;
    z-index: 1;
}
.open .letter {
    transform: translateY(-($env-height / 3));
    transition: transform .4s .6s ease, z-index .6s;
    z-index: 2;
}
.hearts {
    position: absolute;
    top: ($env-height / 2);
    left: 0;
    right: 0;
    z-index: 2;
}
.heart {
    position: absolute;
    bottom: 0;
    right: 10%;
    pointer-events: none;
}

.heart:before,
.heart:after {
    position: absolute;
    content: "";
    left: $heart-width;
    top: 0;
    width: $heart-width;
    height: ($heart-width * 1.6);
    background: $color-heart;
    border-radius: $heart-width $heart-width 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    pointer-events: none;
}
.heart:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
}
.close .heart {
    opacity: 0;
    animation: none;
}
.a1 {
    left: 20%;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    -webkit-animation: 
        slideUp 4s linear 1, 
        sideSway 2s ease-in-out 4 alternate;
    -moz-animation: 
        slideUp 4s linear 1, 
        sideSway 2s ease-in-out 4 alternate;
    animation-fill-mode: forwards;
    animation-delay: .7s;
}
.a2 {
    left: 55%;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    -webkit-animation: 
        slideUp 5s linear 1, 
        sideSway 4s ease-in-out 2 alternate;
    -moz-animation: 
        slideUp 5s linear 1, 
        sideSway 4s ease-in-out 2 alternate;
    animation-fill-mode: forwards;
    animation-delay: .7s;
}
.a3 {
    left: 10%;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 1;
    -webkit-animation: 
        slideUp 7s linear 1, 
        sideSway 2s ease-in-out 6 alternate;
    -moz-animation: 
        slideUp 7s linear 1, 
        sideSway 2s ease-in-out 6 alternate; 
    animation-fill-mode: forwards;
    animation-delay: .7s;
}

@-webkit-keyframes slideUp { 
    0% { 
        top: 0;
    }
    100% { 
        top: -600px;
    }
}
@keyframes slideUp {     
    0% { 
        top: 0;
    }
    100% { 
        top: -600px;
    }
}
@-webkit-keyframes sideSway { 
    0% { 
        margin-left: 0px;
    }
    100% { 
        margin-left: 50px;
    }
}
@keyframes sideSway {
    0% {
        margin-left: 0px;
    }
    100% {
        margin-left: 50px;
    }
}

body {
    background-color: $color-bg;
}
.envlope-wrapper {
    height: ($env-height + 200px);
}
</style>
