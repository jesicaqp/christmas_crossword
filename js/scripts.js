/*!
* Start Bootstrap - New Age v6.0.5 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const itemMaps = new Map([
        ["item1-3", 'N'],
        ["item2-3", 'O'],
        ["item3-3", 'S'],
        ["item4-3", 'T'],
        ["item5-3", 'A'],
        ["item6-3", 'L'],
        ["item7-3", 'G'],
        ["item8-3", 'I'],
        ["item9-3", 'A'],
        ["item4-1",'F'],
        ["item4-2",'U'],
        ["item4-4",'U'],
        ["item4-5",'R'],
        ["item4-6",'E'],
      ]);

    var numInputs = document.querySelectorAll('input');
    const button = document.getElementById('submitButton');
    const log = document.getElementById('values');
    button.disabled = true 
    let notValid = true

    for (var i = 0; i < numInputs .length; i++) {
        numInputs[i].addEventListener("input", updateValue, false);
    }
    function updateValue(e) {
            notValid = false
            itemMaps.forEach((values,keys)=>{
                if (document.getElementById(keys).value.toUpperCase() != values){
                    notValid = true
                }
            })
            ///log.textContent = (e.target.value.toUpperCase() === 'N');

        button.disabled = notValid
    }


    //------------------------------------------
      // let notValid = false
    // const input = document.querySelectorAll('input');
    // const log = document.getElementById('values');
    // const button = document.getElementById('submitButton');

    // input.addEventListener('input', updateValue);
    // button.addEventListener('button', updateValue);
    // notValid = true

    // function updateValue(e) {
    //     itemMaps.forEach((values,keys)=>{
    //         log.textContent = (e.target.value.toUpperCase() === 'S');
    //         if (document.getElementById(keys).value == values){
    //             button.disabled = false
    //         }
    //     })
    //     log.textContent = (e.target.value.toUpperCase() === 'N');
    // }
    // button.disabled = notValid

    // let elementsArray = document.querySelectorAll("whatever");
    //-----------------------------------------------------------------------
  
    // const disableButton = true; //change this value to false and the button will be clickable
    // const button = document.getElementById('submitButton');
    
    // if (disableButton) button.disabled = "disabled";

    // input.addEventListener("change", stateHandle);

    // function stateHandle() {
    //     for (key in itemMaps.keys()){
    //         if (document.getElementById(key).value != itemMaps.get(key)){
    //             notValid = true
    //         }
    //     }
    //     button.disabled = true
    // }

    //let input = document.querySelector(".input");

    // let button = document.querySelector(".btn");

    // button.disabled = true
    // input.addEventListener("change", stateHandle);

    // function stateHandle() {
    //     if (document.querySelector(".input").value === "") {
    //         button.disabled = false; //button remains disabled
    //     } else {
    //         button.disabled = true; //button is enabled
    //     }
    // }


    // var input = document.getElementById("item1-3")
    // if (input.checkValidity()){
    //     const disableButton = false;
    // } else {
    //     const disableButton = true;
    // }


    // const disableButton = true; //change this value to false and the button will be clickable
    // const button = document.getElementById('submitButton');
    
    // if (disableButton) button.disabled = "disabled";
});


