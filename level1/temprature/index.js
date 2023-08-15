var bat = document.getElementById('buti');

bat.addEventListener('click', function() {
    var temp = parseFloat(document.getElementById('num').value);
    var selectElement = document.getElementById('ans').value;
    var outp = document.getElementById('out');

    if (isNaN(temp)) {
        alert("Enter a valid number");
    } 
    else 
    {
    if(selectElement === "celsius") {
         var celsiusValue = (temp) * (5/9)+32;
        outp.textContent = `${celsiusValue.toFixed(2)} °F`;
      
        }
        else if(selectElement === "faranite") {
          var celsiusValue = (temp - 32) * 5 / 9;
          outp.textContent = `${celsiusValue.toFixed(2)} °C`;
        }
      }
      });