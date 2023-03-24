var pitta = 0;
var kapha = 0;
var vata = 0;
var VP = 0;
var VK = 0;
var PK = 0;
var prakruti = 0;
//starttoque
hideElement("BAD");
setTimeout(function() {
  setScreen("startscreen");
}, 5000);
onEvent("10que", "click", function( ) {
  setScreen("qu1");
});
//starttoque
//quetodeter
onEvent("next1", "click", function( ) {
    setScreen("qu2");
  });
onEvent("next2", "click", function( ) {
    setScreen("qu3");
  });
onEvent("next3", "click", function( ) {
    setScreen("qu4");
  });
onEvent("next4", "click", function() {
    if (getChecked("vata1") == true) {
      vata++;
    }
    if (getChecked("vata2") == true) {
      vata++;
    }
    if (getChecked("vata3") == true) {
      vata++;
    }
    if (getChecked("vata4") == true) {
      vata++;
    }
    if (getChecked("vata5") == true) {
      vata++;
    }
    if (getChecked("vata6") == true) {
      vata++;
    }
    if (getChecked("vata7") == true) {
      vata++;
    }
    if (getChecked("vata8") == true) {
      vata++;
    }
    if (getChecked("vata9") == true) {
      vata++;
    }
    if (getChecked("vata10") == true) {
      vata++;
    }
    if (getChecked("pitta1") == true) {
     pitta++; 
    }
    if (getChecked("pitta2") == true) {
     pitta++; 
    }
    if (getChecked("pitta3") == true) {
     pitta++; 
    }
    if (getChecked("pitta4") == true) {
     pitta++; 
    }
    if (getChecked("pitta5") == true) {
     pitta++; 
    }
    if (getChecked("pitta6") == true) {
     pitta++; 
    }
    if (getChecked("pitta7") == true) {
     pitta++; 
    }
    if (getChecked("pitta8") == true) {
     pitta++; 
    }
    if (getChecked("pitta9") == true) {
     pitta++; 
    }
    if (getChecked("pitta10") == true) {
     pitta++; 
    }
    if (getChecked("kapha1") == true) {
      kapha++;
    }
    if (getChecked("kapha2") == true) {
      kapha++;
    }
    if (getChecked("kapha3") == true) {
      kapha++;
    }
    if (getChecked("kapha4") == true) {
      kapha++;
    }
    if (getChecked("kapha5") == true) {
      kapha++;
    }
    if (getChecked("kapha6") == true) {
      kapha++;
    }
    if (getChecked("kapha7") == true) {
      kapha++;
    }
    if (getChecked("kapha8") == true) {
      kapha++;
    }
    if (getChecked("kapha9") == true) {
      kapha++;
    }
    if (getChecked("kapha10") == true) {
      kapha++;
    }
    if (vata + pitta + kapha == 10) {
      /*createRecord("prakruti", {Body_Frame:'', Skin_Type:'', Hair_Type:'', Food_Likings:'', Learning_Type:'', Appetite:'', Nature:'', Sleep:'', Stength_Stamina:'', Sweating:''}, function() {
              setScreen("determine");
      if (getProperty("vata1", "checked") == true) {
        updateRecord("prakruti", {Body_Frame:'Thin'}, function() {
          
        });
      }
      if ((getProperty("vata2", "checked") == true)) {
        updateRecord("prakruti", {Skin_Type:'Dark & Dry'}, function() {
          
        });
      }
      if ((getProperty("vata3", "checked") == true)) {
        updateRecord("prakruti", {Hair_Type:'Black Coloured & Curly'}, function() {
          
        });
      }
      if ((getProperty("vata4", "checked") == true)) {
        updateRecord("prakruti", {Food_Likings:'Spicy & Sour'}, function() {
          
        });
      }
      if ((getProperty("vata5", "checked") == true)) {
        updateRecord("prakruti", {Learning_Type:'Fast Learner & Volatile Memory'}, function() {
          
        });
      }
      if ((getProperty("vata6", "checked") == true)) {
        updateRecord("prakruti", {Appetite:'Irregular Quantity & Frequency'}, function() {
          
        });
      }
      if ((getProperty("vata7", "checked") == true)) {
        updateRecord("prakruti", {Nature:'Hyperactive & Moody'}, function() {
          
        });
      }
      if ((getProperty("vata8", "checked") == true)) {
        updateRecord("prakruti", {Sleep:'Irregular Sleep with More Dreams'}, function() {
          
        });
      }
      if ((getProperty("vata9", "checked") == true)) {
        updateRecord("prakruti", {Stength_Stamina:'Less'}, function() {
          
        });
      }
      if ((getProperty("vata10", "checked") == true)) {
        updateRecord("prakruti", {Sweating:'Hyper Perspiration'}, function() {
          
        });
      }
      if (getProperty("pitta1", "checked") == true) {
       updateRecord("prakruti", {Body_frame:'Medium'}, function() {
         
       });
      }
      if ((getProperty("pitta2", "checked") == true)) {
        updateRecord("prakruti", {Skin_Type:'Yellowish White & Smooth'}, function() {
          
        });
      }
      if ((getProperty("pitta3", "checked") == true)) {
        updateRecord("prakruti", {Hair_Type:'Brownish & Smooth'}, function() {
          
        });
      }
      if ((getProperty("pitta4", "checked") == true)) {
        updateRecord("prakruti", {Food_Likings:'Cold Food'}, function() {
          
        });
      }
      if ((getProperty("pitta5", "checked") == true)) {
        updateRecord("prakruti", {Learning_Type:'Medium Learner & Good Memory'}, function() {
          
        });
      }
      if ((getProperty("pitta6", "checked") == true)) {
        updateRecord("prakruti", {Appetite:'Less Quantity & More Frequency'}, function() {
          
        });
      }
      if ((getProperty("pitta7", "checked") == true)) {
        updateRecord("prakruti", {Nature:'Aggressive & Moderately Active'}, function() {
          
        });
      }
      if ((getProperty("pitta8", "checked") == true)) {
        updateRecord("prakruti", {Sleep:'Regular Sleep & Easily Get Disturbed'}, function() {
          
        });
      }
      if ((getProperty("pitta9", "checked") == true)) {
        updateRecord("prakruti", {Stength_Stamina:'Moderate'}, function() {
          
        });
      }
      if ((getProperty("pitta10", "checked") == true)) {
        updateRecord("prakruti", {Sweating:'Hyper Perspiration with Odour'}, function() {
          
        });
      }
      if (getProperty("kapha1", "checked") == true) {
        updateRecord("prakruti", {Body_frame:'Srong'}, function() {
          
        });
      }
      if ((getProperty("kapha2", "checked") == true)) {
        updateRecord("prakruti", {Skin_Type:'White & Smooth'}, function() {
          
        });
      }
      if ((getProperty("kapha3", "checked") == true)) {
        updateRecord("prakruti", {Hair_Type:'Black & Smooth'}, function() {
          
        });
      }
      if ((getProperty("kapha4", "checked") == true)) {
        updateRecord("prakruti", {Food_Likings:'Sweet & Hot Food'}, function() {
          
        });
      }
      if ((getProperty("kapha5", "checked") == true)) {
        updateRecord("prakruti", {Learning_Type:'Slow Learner & Strong Memory'}, function() {
          
        });
      }
      if ((getProperty("kapha6", "checked") == true)) {
        updateRecord("prakruti", {Appetite:'More Quantity & Less Frequency'}, function() {
          
        });
      }
      if ((getProperty("kapha7", "checked") == true)) {
        updateRecord("prakruti", {Nature:'Calm & Friendly'}, function() {
          
        });
      }
      if ((getProperty("kapha8", "checked") == true)) {
        updateRecord("prakruti", {Sleep:'Deep & Continuous'}, function() {
          
        });
      }
      if ((getProperty("kapha9", "checked") == true)) {
        updateRecord("prakruti", {Stength_Stamina:'Good'}, function() {
          
        });
      }
      if ((getProperty("kapha10", "checked") == true)) {
        updateRecord("prakruti", {Sweating:'Moderate Perspiration'}, function() {
          
        });
      }
      });*/
      if (vata > pitta) {
       VP = vata - pitta;
        } else if ((pitta > vata)) {
       VP = pitta - vata;
        } else if ((vata == pitta)) {
        VP = 0;
      }
      if (vata > kapha) {
       VK = vata - kapha;
        } else if ((kapha > vata)) {
       VK = kapha - vata;
        } else if ((vata == kapha)) {
        VK = 0;
      }
      if (pitta > kapha) {
       PK = pitta - kapha;
        } else if ((kapha > pitta)) {
       PK = kapha - pitta;
        } else if ((pitta == kapha)) {
        PK = 0;
      }
      if (VP <= 1 && VK <= 1 && PK <= 1) {
       prakruti = "VataPittaKapha";
        }
      if ( vata > kapha && pitta > kapha && VP <= 1) {
       prakruti = "VataPitta";
        } else if ( vata > pitta && kapha > pitta && VK <= 1) {
       prakruti = "VataKapha";
        } else if ( kapha > vata && pitta > vata && PK <= 1) {
       prakruti = "PittaKapha";
        }
      if (vata > 5) {
       prakruti = "Vata";
        } else if ((pitta > 5)) {
       prakruti = "Pitta";
        } else if ((kapha > 5)) {
      prakruti = "Kapha";
       }
      setScreen("determine");
    } else if (vata + pitta + kapha != 10) {      
      VP = undefined;
      VK = undefined;
      PK = undefined;
      prakruti = undefined;
      pitta = undefined;
      vata = undefined;
      kapha = undefined;
      setChecked("vata1", false);
      setChecked("vata2", false);
      setChecked("vata3", false);
      setChecked("vata4", false);
      setChecked("vata5", false);
      setChecked("vata6", false);
      setChecked("vata7", false);
      setChecked("vata8", false);
      setChecked("vata9", false);
      setChecked("vata10", false);
      setChecked("pitta1", false);
      setChecked("pitta2", false);
      setChecked("pitta3", false);
      setChecked("pitta4", false);
      setChecked("pitta5", false);
      setChecked("pitta6", false);
      setChecked("pitta7", false);
      setChecked("pitta8", false);
      setChecked("pitta9", false);
      setChecked("pitta10", false);
      setChecked("kapha1", false);
      setChecked("kapha2", false);
      setChecked("kapha3", false);
      setChecked("kapha4", false);
      setChecked("kapha5", false);
      setChecked("kapha6", false);
      setChecked("kapha7", false);
      setChecked("kapha8", false);
      setChecked("kapha9", false);
      setChecked("kapha10", false);
      setScreen("qu1");
      showElement("BAD");
      setTimeout(function() {
        hideElement("BAD");
      }, 5000);
    }
  });
onEvent("back1", "click", function( ) {
    setScreen("qu1");
  });
onEvent("back2", "click", function() {
    setScreen("qu2");
  });
onEvent("back3", "click", function( ) {
    setScreen("qu3");
  });
//quetodeter
//detertodeterdivision
onEvent("back4", "click", function( ) {
    setScreen("determine");
  });
onEvent("prakruti", "click", function( ) {
  setScreen("prakrutiscreen");
  setNumber("vata", vata);
  setNumber("pitta", pitta);
  setNumber("kapha", kapha);
  setText("prakruti2", prakruti);
  });
onEvent("disease", "click", function( ) {
    if (prakruti == "Pitta") {
      onEvent("disease", "click", function( ) {
        setScreen("diseaseP");
        onEvent("diseasePE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "Vata")) {
      onEvent("disease", "click", function( ) {
        setScreen("diseaseV");
        onEvent("diseaseVE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "Kapha")) {
      onEvent("disease", "click", function( ) {
        setScreen("diseaseK");
        onEvent("diseaseKE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "VataPitta")) {
      onEvent("disease", "click", function( ) {
        setScreen("diseaseVP");
        onEvent("diseaseVPE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "VataKapha")) {
      onEvent("disease", "click", function( ) {
        setScreen("diseaseVK");
        onEvent("diseaseVKE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "PittaKapha")) {
      onEvent("disease", "click", function( ) {
        setScreen("diseasePK");
        onEvent("diseasePKE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "VataPittaKapha")) {
      onEvent("disease", "click", function( ) {
        setScreen("diseaseVPK");
        onEvent("diseaseVPKE", "click", function( ) {
          setScreen("determine");
        });
      });
    }
  });
onEvent("prescription", "click", function( ) {
    if (prakruti == "Pitta") {
      onEvent("prescription", "click", function( ) {
        setScreen("prescriptionP");
        onEvent("prescriptionPE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "Vata")) {
      onEvent("prescription", "click", function( ) {
        setScreen("prescriptionV");
        onEvent("prescriptionVE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "Kapha")) {
      onEvent("prescription", "click", function( ) {
        setScreen("prescriptionK");
        onEvent("prescriptionKE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "VataPitta")) {
      onEvent("prescription", "click", function( ) {
        setScreen("PRESCRIPTIONVP");
        onEvent("prescriptionVPE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "VataKapha")) {
      onEvent("prescription", "click", function( ) {
        setScreen("prescriptionVK");
        onEvent("prescriptionVKE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "PittaKapha")) {
      onEvent("prescription", "click", function( ) {
        setScreen("prescriptionPK");
        onEvent("prescriptionPKE", "click", function( ) {
          setScreen("determine");
        });
      });
    } else if ((prakruti == "VataPittaKapha")) {
      onEvent("prescription", "click", function( ) {
        setScreen("PRESCRIPTIONVPK");
        onEvent("prescriptionVPKE", "click", function( ) {
          setScreen("determine");
        });
      });
    }
  });
//detertodeterdivision
//deterdivisiontoend
onEvent("exit", "click", function( ) {
    setChecked("vata1", false);
    setChecked("vata2", false);
    setChecked("vata3", false);
    setChecked("vata4", false);
    setChecked("vata5", false);
    setChecked("vata6", false);
    setChecked("vata7", false);
    setChecked("vata8", false);
    setChecked("vata9", false);
    setChecked("vata10", false);
    setChecked("pitta1", false);
    setChecked("pitta2", false);
    setChecked("pitta3", false);
    setChecked("pitta4", false);
    setChecked("pitta5", false);
    setChecked("pitta6", false);
    setChecked("pitta7", false);
    setChecked("pitta8", false);
    setChecked("pitta9", false);
    setChecked("pitta10", false);
    setChecked("kapha1", false);
    setChecked("kapha2", false);
    setChecked("kapha3", false);
    setChecked("kapha4", false);
    setChecked("kapha5", false);
    setChecked("kapha6", false);
    setChecked("kapha7", false);
    setChecked("kapha8", false);
    setChecked("kapha9", false);
    setChecked("kapha10", false);
    VP = 0;
    VK = 0;
    PK = 0;
    prakruti = 0;
    pitta = 0;
    vata = 0;
    kapha = 0;
    setScreen("welscreen");
    setTimeout(function() {
      setScreen("startscreen");
    }, 5000);
  });
//deterdivisiontoend
