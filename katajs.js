/*Hamburger menü*/
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        document.getElementById("hmenudiv").style.display="flex";
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        document.getElementById("hmenudiv").style.display="none";
        menuOpen = false;
    }
});
/*Alap érték áraink*/

function grandFunction() {
    document.getElementById("grand_div").style.display = "inline";
  }
  function haromFunction() {
    document.getElementById("harom_div").style.display = "none";
  }

  /*Szobák kiválasztása áraink*/ 

  function szoba() {
    var melyik_szoba = document.getElementById("szobak_menu").value;
    var ifa = 530;
    var fizet = 0;
    var ejszaka = document.getElementById("ejszaka").value;

    switch (melyik_szoba) {
      case "grand":
        document.getElementById("grand_div").style.display = "inline";
        document.getElementById("harom_div").style.display = "none";
        break;
      case "fold":
        document.getElementById("grand_div").style.display = "none";
        document.getElementById("harom_div").style.display = "none";
        break;
      case "teto":
        document.getElementById("grand_div").style.display = "none";
        document.getElementById("harom_div").style.display = "none";
        break;
      case "harom":
        document.getElementById("grand_div").style.display = "none";
        document.getElementById("harom_div").style.display = "inline";
        break;
    }
    document.getElementById("fizetendo").innerHTML = "Fizezendő :" + fizet + " Ft";
  }

  /*Számolás áraink*/

  function szamol() {
    var ejszaka = document.getElementById("ejszaka").value;
    var fo_grand = document.getElementById("grand_fo").value;
    var fo_harom = document.getElementById("harom_fo").value;
    var anakin = document.getElementById("szobak_menu").value;
    var ifa = 530;
    var fizet = 0;
    if(anakin == "teto"){
        fizet = (11000 + ifa) * ejszaka;
    }
    if(anakin == "fold"){
        fizet = (11000 + ifa) * ejszaka;
    }
if (anakin == "grand") {
    
    switch (fo_grand) {
      case "22":
        fizet = (22000 + ifa) * ejszaka;
        break;
      case "25":
        fizet = (25000 + ifa) * ejszaka;
        break;
      case "28":
        fizet = (28000 + ifa) * ejszaka;
        break;
    }
}

if(anakin == "harom"){
    switch (fo_harom) {
      case "11":
        fizet = (11000 + ifa) * ejszaka;
        break;
      case "15":
        fizet = (15000 + ifa) * ejszaka;
        break;
    }
}


    if (ejszaka > 1 && ejszaka != 69) {
      document.getElementById("fizetendo").innerHTML = "Fizetendő : " + fizet + " Ft";
    } else if (ejszaka == 69) {
      document.getElementById("fizetendo").innerHTML = "Nice Fizetendő : " + fizet + " Ft";
    } else{
      document.getElementById("fizetendo").innerHTML = "Minimum 2 éjszaka!";
    }

  }

