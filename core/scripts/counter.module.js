import{CountUp as t}from"./countUp.min.js";export class Counter{constructor(t){this.targetVals=t,this.section=document.getElementById("achievement"),this.counterElements=[document.getElementById("counter1"),document.getElementById("counter2"),document.getElementById("counter3"),document.getElementById("counter4")],this.counterElements.forEach((t,e)=>{this.startCounter(t,this.targetVals[e])})}startCounter(e,r){let n=new t(e,r,{duration:3,useEasing:!0,useGrouping:!1,enableScrollSpy:!0});n.error?console.error(`Error initializing CountUp for ${e}:`,n.error):n.start()}}