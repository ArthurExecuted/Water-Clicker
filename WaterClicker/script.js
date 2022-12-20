var gameData = {
    aua: 0,
    pia: 0,
    piaCost: 10,
    piaEarn: 0.1,
    auaBox: 0,
    auaBoxCost: 100,
    auaBoxEarn: 1,
    rio: 0,
    rioCost: 1200,
    rioEarn: 12,
    ocean: 0,
    oceanCost: 12000,
    oceanEarn: 110,
    ice: 0,
    iceCost: 140000,
    iceEarn: 1200,
    auaPerClick: 1,
    auaPerClickUpg: 1,
    auaPerClickCost: 10,
    sinkUpg1: false,
    sinkUpg2: false,
    boxUpg1: false,
    boxUpg2: false,
    riverUpg1: false,
    riverUpg2: false,
    oceanUpg1: false,
    oceanUpg2: false,
    iceUpg1: false,
    iceUpg2: false,
  }

  const gameDataReset = {
    aua: 0,
    pia: 0,
    piaCost: 10,
    piaEarn: 0.1,
    auaBox: 0,
    auaBoxCost: 100,
    auaBoxEarn: 1,
    rio: 0,
    rioCost: 1200,
    rioEarn: 12,
    ocean: 0,
    oceanCost: 12000,
    oceanEarn: 110,
    ice: 0,
    iceCost: 140000,
    iceEarn: 1200,
    auaPerClick: 1,
    auaPerClickUpg: 1,
    auaPerClickCost: 10,
    sinkUpg1: false,
    sinkUpg2: false,
    boxUpg1: false,
    boxUpg2: false,
    riverUpg1: false,
    riverUpg2: false,
    oceanUpg1: false,
    oceanUpg2: false,
    iceUpg1: false,
    iceUpg2: false,
  }
  
  function getAua() {
    gameData.aua += gameData.auaPerClick;
    document.getElementById("auas").innerHTML = gameData.aua.toFixed(0) + " auas coletadas."
  }
  
  function kitchenSink() {
    if (gameData.aua >= gameData.piaCost) {
      gameData.aua -= gameData.piaCost;
      gameData.pia += 1;
      gameData.piaCost += 5;
      document.getElementById("sink").innerHTML = "pia por " + gameData.piaCost + " auas";
      document.getElementById("pias").innerHTML = "Você tem " + gameData.pia + " pias";
      document.getElementById("auas").innerHTML = gameData.aua.toFixed(0) + " auas coletadas"
    }
  }

  function waterBoxGet() {
    if (gameData.aua >= gameData.auaBoxCost) {
        gameData.aua -= gameData.auaBoxCost;
        gameData.auaBox += 1;
        gameData.auaBoxCost += 40;
        document.getElementById("waterBoxes").innerHTML = "Caixa d'Água por "+ gameData.auaBoxCost + " auas";
        document.getElementById("caixaAgua").innerHTML = "Você tem "+ gameData.auaBox + " caixas d'água";
        document.getElementById("auas").innerHTML = gameData.aua.toFixed(0) +" auas coletadas"
    }
  }

  function riverGet() {
    if (gameData.aua >= gameData.rioCost) {
        gameData.aua -= gameData.rioCost;
        gameData.rio += 1;
        gameData.rioCost += 200;
        document.getElementById("rivers").innerHTML = "Água do rio por "+ gameData.rioCost + " auas";
        document.getElementById("rios").innerHTML = "Você tem "+ gameData.rio + " rios";
        document.getElementById("auas").innerHTML = gameData.aua.toFixed(0) +" auas coletadas"
    }
  }

  function oceanGet() {
    if (gameData.aua >= gameData.oceanCost) {
        gameData.aua -= gameData.oceanCost;
        gameData.ocean += 1;
        gameData.oceanCost += 1100;
        document.getElementById("oceanWater").innerHTML = "Água do mar tratada por "+ gameData.oceanCost + " auas";
        document.getElementById("aguaDoMar").innerHTML = "Você tem "+ gameData.ocean + " prédios de tratamento";
        document.getElementById("auas").innerHTML = gameData.aua.toFixed(0) +" auas coletadas"
    }
  }

  function iceGet() {
    if (gameData.aua >= gameData.iceCost) {
        gameData.aua -= gameData.iceCost;
        gameData.ice += 1;
        gameData.iceCost += 30000;
        document.getElementById("iceCaps").innerHTML = "Extrator de água do gelo por "+ gameData.iceCost + " auas";
        document.getElementById("geloGelo").innerHTML = "Você tem "+ gameData.ice + " extratores de gelo";
        document.getElementById("auas").innerHTML = gameData.aua.toFixed(0) +" auas coletadas"
    }
  }
  
  function getMoreAua() {
    if (gameData.aua >= gameData.auaPerClickCost && gameData.auaPerClick < 20) {
      gameData.aua -= gameData.auaPerClickCost;
      gameData.auaPerClick += gameData.auaPerClickUpg;
      gameData.auaPerClickCost += 20;
      document.getElementById("auas").innerHTML = gameData.aua.toFixed(0) + " auas coletadas.";
      document.getElementById("moreAua").innerHTML = "melhorar torneira(" + gameData.auaPerClick + " aua por click) por " + gameData.auaPerClickCost + " auas";
    } else if (gameData.aua >= gameData.auaPerClickCost && gameData.auaPerClick == 20) {
      document.getElementById("moreAua").innerHTML = "Torneira Máxima(20 auas por click)";
    }
  }

  function sinkUpg1() {
    if (gameData.sinkUpg1 == false && gameData.aua >= 100) {
      gameData.sinkUpg1 = true;
      gameData.aua -= 100;
      gameData.piaEarn *= 2;

      var x = document.getElementById("sinkUpg1");
      x.style.display = "none";
    } else if (gameData.sinkUpg1 == false && gameData.aua < 100) {
      var x = document.getElementById("sinkUpg1");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("sinkUpg1");
      x.style.display = "none";
    }
  }

  function sinkUpg2() {
    if (gameData.sinkUpg2 == false && gameData.aua >= 500) {
      gameData.sinkUpg2 = true;
      gameData.aua -= 500;
      gameData.piaEarn *= 2;

      var x = document.getElementById("sinkUpg2");
      x.style.display = "none";
    } else if (gameData.sinkUpg2 == false && gameData.aua < 500) {
      var x = document.getElementById("sinkUpg2");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("sinkUpg2");
      x.style.display = "none";
    }
  }

  function boxUpg1() {
    if (gameData.boxUpg1 == false && gameData.aua >= 1000) {
      gameData.boxUpg1 = true;
      gameData.aua -= 1000;
      gameData.auaBoxEarn *= 2;

      var x = document.getElementById("boxUpg1");
      x.style.display = "none";
    } else if (gameData.boxUpg1 == false && gameData.aua < 1000) {
      var x = document.getElementById("boxUpg1");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("boxUpg1");
      x.style.display = "none";
    }
  }

  function boxUpg2() {
    if (gameData.boxUpg2 == false && gameData.aua >= 3000) {
      gameData.boxUpg2 = true;
      gameData.aua -= 3000;
      gameData.auaBoxEarn *= 2;

      var x = document.getElementById("boxUpg2");
      x.style.display = "none";
    } else if (gameData.boxUpg2 == false && gameData.aua < 3000) {
      var x = document.getElementById("boxUpg2");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("boxUpg2");
      x.style.display = "none";
    }
  }

  function riverUpg1() {
    if (gameData.riverUpg1 == false && gameData.aua >= 5000) {
      gameData.riverUpg1 = true;
      gameData.aua -= 5000;
      gameData.rioEarn *= 2;

      var x = document.getElementById("riverUpg1");
      x.style.display = "none";
    } else if (gameData.riverUpg1 == false && gameData.aua < 5000) {
      var x = document.getElementById("riverUpg1");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("riverUpg1");
      x.style.display = "none";
    }
  }

  function riverUpg2() {
    if (gameData.riverUpg2 == false && gameData.aua >= 12000) {
      gameData.riverUpg2 = true;
      gameData.aua -= 12000;
      gameData.rioEarn *= 2;

      var x = document.getElementById("riverUpg2");
      x.style.display = "none";
    } else if (gameData.riverUpg2 == false && gameData.aua < 12000) {
      var x = document.getElementById("riverUpg2");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("riverUpg2");
      x.style.display = "none";
    }
  }

  function oceanUpg1() {
    if (gameData.oceanUpg1 == false && gameData.aua >= 50000) {
      gameData.oceanUpg1 = true;
      gameData.aua -= 50000;
      gameData.oceanEarn *= 2;

      var x = document.getElementById("oceanUpg1");
      x.style.display = "none";
    } else if (gameData.oceanUpg1 == false && gameData.aua < 50000) {
      var x = document.getElementById("oceanUpg1");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("oceanUpg1");
      x.style.display = "none";
    }
  }

  function oceanUpg2() {
    if (gameData.oceanUpg2 == false && gameData.aua >= 100000) {
      gameData.oceanUpg2 = true;
      gameData.aua -= 100000;
      gameData.oceanEarn *= 2;

      var x = document.getElementById("oceanUpg2");
      x.style.display = "none";
    } else if (gameData.oceanUpg2 == false && gameData.aua < 100000) {
      var x = document.getElementById("oceanUpg2");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("oceanUpg2");
      x.style.display = "none";
    }
  }

  function iceUpg1() {
    if (gameData.iceUpg1 == false && gameData.aua >= 500000) {
      gameData.iceUpg1 = true;
      gameData.aua -= 500000;
      gameData.iceEarn *= 2;

      var x = document.getElementById("iceUpg1");
      x.style.display = "none";
    } else if (gameData.iceUpg1 == false && gameData.aua < 500000) {
      var x = document.getElementById("iceUpg1");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("iceUpg1");
      x.style.display = "none";
    }
  }

  function iceUpg2() {
    if (gameData.iceUpg2 == false && gameData.aua >= 1000000) {
      gameData.iceUpg2 = true;
      gameData.aua -= 1000000;
      gameData.iceEarn *= 2;

      var x = document.getElementById("iceUpg2");
      x.style.display = "none";
    } else if (gameData.iceUpg2 == false && gameData.aua < 1000000) {
      var x = document.getElementById("iceUpg2");
      x.style.display = "block";
    } else {
      var x = documento.getElementById("iceUpg2");
      x.style.display = "none";
    }
  }

  var userInfo = {
    username: "default",
    password: "",
  };

  var gameDataSave = gameData;
  var gameDataSaveJson = JSON.stringify(gameDataSave)

  const getSaveData = keyName => {
    const keyValue = localStorage.getItem(keyName)
    return JSON.parse(keyValue)
  }

  if (getSaveData(userInfo.username+'Save') != null){
    gameData = getSaveData(userInfo.username+'Save');
  } else {
    gameDataSave = gameData;
    gameDataSaveJson = JSON.stringify(gameDataSave)
    localStorage.setItem(userInfo.username+"Save", gameDataSaveJson)
  }

  function wipeSaveData() {
    gameData = gameDataReset;
  }

  function logIn() {
    var x = document.getElementById("logInForm")
    if (x.style.display != "none"){
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
  }

  function register() {
    var x = document.getElementById("registerForm")
    if(x.style.display != "none"){
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
  }

  function logInVerify() {
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const getUserData = keyName => {
      const keyValue = localStorage.getItem(keyName)
      return JSON.parse(keyValue)
    }

    userInfoVerify = getUserData(user)

    if(userInfoVerify.username == user && userInfoVerify.password == password) {
      document.getElementById("saveNow").innerHTML = "Águaria de "+ user;
      userInfo = userInfoVerify

      gameData = getSaveData(userInfo.username+'Save');

      var x = document.getElementById("logBtnIn");
      x.style.display = "none";
      var y = document.getElementById("logOffBtn");
      y.style.display = "block";

      logIn();
      verifyData();

      return gameData, userInfo;
    } else {
      document.getElementById("error").innerHTML = "Senha/nome errado";
    }

  }

  function registerUser() {
    var user = document.getElementById("usernameSet").value;
    var password = document.getElementById("passwordSet").value;

    const getUserData = keyName => {
      const keyValue = localStorage.getItem(keyName)
      return JSON.parse(keyValue)
    }

    userInfoVerify = getUserData(user)

    if(userInfoVerify === null) {
      userInfoStored = userInfo;
        userInfoStored.password = password;
        userInfoStored.username = user;

        console.log(userInfoStored);
        localStorage.setItem(user, JSON.stringify(userInfoStored))   
    } else {
      document.getElementById("error2").innerHTML = "Nome de usuário já existe"
    }
  }

  function logOff() {
      document.getElementById("saveNow").innerHTML = "";
      userInfo = {
        username: "default",
        password: "",
      };

      gameData = getSaveData(userInfo.username+'Save');

      verifyData();
      var x = document.getElementById("logBtnIn");
      x.style.display = "block";
      var y = document.getElementById("logOffBtn");
      y.style.display = "none";

      return gameData, userInfo;
  }

async function verifyData(){
  for (i = 0; i < 11; i++) {
    switch (i) {
      case 1:
        if (gameData.sinkUpg1 == true){var x = document.getElementById("sinkUpg1"); x.style.display = "none"} else {var x = document.getElementById("sinkUpg1"); x.style.display = "block"}
        document.getElementById("sink").innerHTML = "pia por " + gameData.piaCost + " auas";
        document.getElementById("pias").innerHTML = "Você tem " + gameData.pia + " pias";
        break;
      case 2:
        if (gameData.sinkUpg2 == true){var x = document.getElementById("sinkUpg2"); x.style.display = "none"} else {var x = document.getElementById("sinkUpg2"); x.style.display = "block"}
        break;
      case 3:
        if (gameData.boxUpg1 == true){var x = document.getElementById("boxUpg1"); x.style.display = "none"} else {var x = document.getElementById("boxUpg1"); x.style.display = "block"}
        document.getElementById("waterBoxes").innerHTML = "Caixa d'Água por "+ gameData.auaBoxCost + " auas";
        document.getElementById("caixaAgua").innerHTML = "Você tem "+ gameData.auaBox + " caixas d'água";
        break;
      case 4:
        if (gameData.boxUpg2 == true){var x = document.getElementById("boxUpg2"); x.style.display = "none"} else {var x = document.getElementById("boxUpg2"); x.style.display = "block"}
        break;
      case 5:
        if (gameData.riverUpg1 == true){var x = document.getElementById("riverUpg1"); x.style.display = "none"} else {var x = document.getElementById("riverUpg1"); x.style.display = "block"}
        document.getElementById("rivers").innerHTML = "Água do rio por "+ gameData.rioCost + " auas";
        document.getElementById("rios").innerHTML = "Você tem "+ gameData.rio + " rios";
        break;
      case 6:
        if (gameData.riverUpg2 == true){var x = document.getElementById("riverUpg2"); x.style.display = "none"} else {var x = document.getElementById("riverUpg2"); x.style.display = "block"}
        break;
      case 7:
        if (gameData.oceanUpg1 == true){var x = document.getElementById("oceanUpg1"); x.style.display = "none"} else {var x = document.getElementById("oceanUpg1"); x.style.display = "block"}
        document.getElementById("oceanWater").innerHTML = "Água do mar tratada por "+ gameData.oceanCost + " auas";
        document.getElementById("aguaDoMar").innerHTML = "Você tem "+ gameData.ocean + " prédios de tratamento";
        break;
      case 8:
        if (gameData.oceanUpg2 == true){var x = document.getElementById("oceanUpg2"); x.style.display = "none"} else {var x = document.getElementById("oceanUpg2"); x.style.display = "block"}
        break;
      case 9:
        if (gameData.iceUpg1 == true){var x = document.getElementById("iceUpg1"); x.style.display = "none"} else {var x = document.getElementById("iceUpg1"); x.style.display = "block"}
        document.getElementById("iceCaps").innerHTML = "Extrator de água do gelo por "+ gameData.iceCost + " auas";
        document.getElementById("geloGelo").innerHTML = "Você tem "+ gameData.ice + " extratores de gelo";
        break;
      case 10:
        if (gameData.iceUpg2 == true){var x = document.getElementById("iceUpg2"); x.style.display = "none"} else {var x = document.getElementById("iceUpg2"); x.style.display = "block"}
        if (gameData.auaPerClick < 20) {
          document.getElementById("moreAua").innerHTML = "melhorar torneira(" + gameData.auaPerClick + " aua por click) por " + gameData.auaPerClickCost + " auas";
        } else {
          document.getElementById("moreAua").innerHTML = "Torneira Máxima(20 auas por click)";
        }
        break;
    };
  }
}

verifyData()


  function gameLoop() {
    var auaDiffer = gameData.aua;

    gameData.aua += gameData.piaEarn * gameData.pia;
    gameData.aua += gameData.rioEarn * gameData.rio;
    gameData.aua += gameData.auaBoxEarn * gameData.auaBox;
    gameData.aua += gameData.oceanEarn * gameData.ocean;
    gameData.aua += gameData.iceEarn * gameData.ice;

    auaDiffer = gameData.aua - auaDiffer;

    gameDataSave = gameData;
    gameDataSaveJson = JSON.stringify(gameDataSave)
    localStorage.setItem(userInfo.username +"Save", gameDataSaveJson)

    document.getElementById("auas").innerHTML = gameData.aua.toFixed(0) + " auas coletadas";
    document.getElementById("auasPorSeg").innerHTML = auaDiffer.toFixed(1) +" auas por seg.";
  }

  function gameEarn(auas) {
    gameData.aua += auas;
  }

  function gameDataYes(){
    console.log(gameData)
  }
  
  var mainGameLoop = window.setInterval(function() {
    gameLoop();
  }, 1000)