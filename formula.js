function formula1() {
    let Cantidadt =parseInt(document.getElementById('cant').value);
    let Cantidad1 =parseInt(document.getElementById('c1').value);
    let Cantidad2 =parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value= (Cantidad1-Cantidadt);
    document.getElementById('c2').value= (Cantidad2+Cantidadt);
}

function formula2() {   
    let Cantidadt =parseInt(document.getElementById('cant').value);
    let Cantidad1 =parseInt(document.getElementById('c1').value);
    let Cantidad2 =parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value= (Cantidad1+Cantidadt);
    document.getElementById('c2').value= (Cantidad2-Cantidadt); 
}
    function formula3() {
        let Cantidadt =parseInt(document.getElementById('cant').value);
        let Cantidad1 =parseInt(document.getElementById('c1').value);
        let Cantidad2 =parseInt(document.getElementById('c2').value);
        document.getElementById('c1').value= (Cantidad1+Cantidadt);
        
    }

    function formula4() {
        let Cantidadt =parseInt(document.getElementById('cant').value);
        let Cantidad1 =parseInt(document.getElementById('c1').value);
        let Cantidad2 =parseInt(document.getElementById('c2').value);
        document.getElementById('c2').value= (Cantidad2+Cantidadt);
    }

    function formula5() {
        let Cantidadt =parseInt(document.getElementById('cant').value);
        let Cantidad1 =parseInt(document.getElementById('c1').value);
        let Cantidad2 =parseInt(document.getElementById('c2').value);
        document.getElementById('c1').value= (Cantidad1-Cantidadt);
    }

    function formula6() {
        let Cantidadt =parseInt(document.getElementById('cant').value);
        let Cantidad1 =parseInt(document.getElementById('c1').value);
        let Cantidad2 =parseInt(document.getElementById('c2').value);
        document.getElementById('c2').value= (Cantidad2-Cantidadt);
    }