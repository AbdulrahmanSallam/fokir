import{Counter as e}from"./counter.module.js";import{Validation as o}from"./validation.module.js";AOS.init();let nav=document.getElementById("nav"),goTop=document.getElementById("goTop"),newScrollVal=0;window.addEventListener("scroll",function(){let e=this.scrollY;newScrollVal<e?nav.classList.add("nav-hidden"):nav.classList.remove("nav-hidden"),e>0?nav.classList.add("bg-second-color"):nav.classList.remove("bg-second-color"),newScrollVal=e}),$(document).ready(function(){$(".owl-carousel").owlCarousel({items:1,loop:!0,smartSpeed:200})}),goTop.addEventListener("click",function(){window.scrollTo(0,0)});var typed=new Typed("#typed",{strings:["Developer","Designer"],typeSpeed:60,loop:!0,backSpeed:60,smartBackspace:!1});new e([150,255,1340,850]),new o("form","name","nameError","email","emailError","subject","subjectError","message","messageError");