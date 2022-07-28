
//case event function 

function updateCaseNember(increaseing){

    let caseinput = document.getElementById('caseNumber');
    let casenumber = caseinput.value;


    if (increaseing == true)

    {
        casenumber = parseInt(casenumber) + 1 ;
    }

    else if(casenumber > 0)
    {
        casenumber = parseInt(casenumber) - 1 ;
    }

    caseinput.value = casenumber; 
    const casetotal = document.getElementById('casevalue');
    casetotal.innerText = casenumber * 59;

}


//Phone event function 


function updatephoneNember(increaseing){

    let phoneinput = document.getElementById('phonenumber');
    let phonenumber = phoneinput.value;


    if (increaseing == true)

    {
        phonenumber = parseInt(phonenumber) + 1 ;
    }

    else if(phonenumber > 0)
    {
        phonenumber = parseInt(phonenumber) - 1 ;
    }

    phoneinput.value = phonenumber; 
    const phonetotal = document.getElementById('phonevalue');
    phonetotal.innerText = phonenumber * 1219;

}


// price calculate function


function calculatetotal()
{


    let phoneinput = document.getElementById('phonenumber');
    let phonenumber = parseInt(phoneinput.value);
    let phonetotal = phonenumber * 1219;


    let caseinput = document.getElementById('caseNumber');
    let casenumber = parseInt(caseinput.value);
    let casetotal = casenumber * 59;


    let subtotal = phonetotal + casetotal ;

    let tex = subtotal / 7 ;

    document.getElementById('subTotal').innerText = parseInt(subtotal) ;
    document.getElementById('texTotal').innerText = parseInt(tex) ;


    let total = subtotal + tex;

    document.getElementById('total').innerText = parseInt(total) ;

    //console.log(subtotal);

}



// handle Phone event 

document.getElementById('phoneplus').addEventListener('click' , function() {


    updatephoneNember(true);
    calculatetotal()

})


document.getElementById('phoneMinus').addEventListener('click' , function() {


    updatephoneNember(false);
    calculatetotal()
    
})







// handle case event 

document.getElementById('casePlus').addEventListener('click', function() {

    updateCaseNember(true);
   // console.log(casenumber);
   calculatetotal()
})

document.getElementById('caseminus').addEventListener('click', function() {

    updateCaseNember(false);
  //  console.log(casenumber);
  calculatetotal()

})

