//Main Script for HW //

//Currency Variables//
var gold = 0;
var wood = 0;
var iron = 0;
var silver = 0;
var faith = 0;
var souls = 0;
var mana = 0;
var paper = 0;

//Statistic Variables//
var goldpersec = 0;
var woodpersec = 0;
var faithpersec = 0;
var ironpersec = 0;
var silverpersec = 0;
var soulspersec = 0;
var manapersec = 0;
var totalTimePlayed = 0;
var tTPinHHMMSS = 0;

//Unit Variables//
var tavernpeasants = 0;			//Tavern generated peasants
var tavernminers = 0;			//Tavern generated miners


//Status Variables//
var pGoldUpgrade = false;		//Peasant - Collection rate upgrade
var pGoldClickUpgrade = false;	//Peasant - Gold clicking upgrade
var lwoodClickUpgrade = false;  //LJack - Wood collection rate upgrade 
var mPanningUpgrade = false;	//Miner - Gold Panning upgrade
var mSilverUpgrade = false;		//Miner - Silver Mining upgrade
var paladinWepUpgrade = false;  //Paladin - Weapon Upgrade
var tavernUpgrade = false;		//Tavern - Weapon Upgrade

var squiresUnlocked = false;	//Page - Squire Tier unlock
var knightsUnlocked = false;    //Squire - Page Tier unlock

var lumbermillOpened = false;
var minesOpened = false;
var cathedralOpened = false;
var barracksOpened = false;
var towerUnlocked = false;
var towerBuilt = false;

//Etc Variables//
var lastPage;

function clickThing(number, type)
{
	switch(type){
		case "gold":
			gold = gold + number;
			document.getElementById("gold").innerHTML = fnum(gold);			
			break;
			
		case "goldMouse":
			if(pGoldClickUpgrade == true){
					number = number * 2;
			}
			gold = gold + number;
			document.getElementById("gold").innerHTML = fnum(gold);
			break;

		case "wood":
			wood = wood + number;
			document.getElementById("wood").innerHTML = fnum(wood);			
			break;	

		case "woodMouse":
			wood = wood + number;
			document.getElementById("wood").innerHTML = fnum(wood);
			break;

		case "paper":
			if(wood >= 50*number){
			paper = paper + number;
			wood = wood - number * 50;
			document.getElementById("paper").innerHTML = fnum(paper);
			document.getElementById("wood").innerHTML = fnum(wood);
			}
			break;				
			
		case "paperMouse":
			if(wood >= 50){
				paper = paper + number;
				wood = wood - number * 50;
				document.getElementById("paper").innerHTML = fnum(paper);
				document.getElementById("wood").innerHTML = fnum(wood);
			}
			break;			
			
		case "iron":
			iron = iron + number;
			document.getElementById("iron").innerHTML = fnum(iron);
			break;
		
		case "silver":
			silver = silver + number;
			document.getElementById("silver").innerHTML = fnum(silver);
			break;		
			
		case "faith":
			faith = faith + number;
			faith = faith.toFixedDown(2);
			document.getElementById("faith").innerHTML = fnum(faith);		
			break;
		
		case "peasant":
			Peasant.number = Peasant.number + number;
			document.getElementById("peasants").innerHTML = Peasant.number;
			break;

		case "miner":
			Miner.number = Miner.number + number;
			document.getElementById("miners").innerHTML = Miner.number + tavernminers;	
			break;			
		
		case "souls":
			souls = souls + number;
			document.getElementById("souls").innerHTML = fnum(souls);		
			break;
			
		case "mana":
			mana = mana + number;
			document.getElementById("mana").innerHTML = fnum(mana);		
		default:
	}
}

function debugCurrency(){
	gold = gold + 1000000;
	wood = wood + 10000;
	iron = iron + 10000;	
	silver = silver + 10000;
	faith = faith + 10000;
	souls = souls + 10000;
	mana = mana + 100000;
};

//UPGRADES

function peasantUpgradeCollection(){
	if(gold >= 2000){
		gold = gold - 2000;
		pGoldUpgrade = true;	
		document.getElementById('gold').innerHTML = fnum(gold);
		document.getElementById("btnPeasantUpgrade1").disabled = true;
	}	
};

function upgradeClickGoldMultiplier(){
	if(gold >= 1500){
		gold = gold - 1500;
		pGoldClickUpgrade = true;	
		document.getElementById('gold').innerHTML = fnum(gold);
		document.getElementById("clickGoldUpgrade").disabled = true;
	}	
};

function lumberjackUpgradeCollection(){
	if(gold >= 2500 && iron >= 1500){
		gold = gold - 1500;
		iron = iron - 1500;
		lwoodClickUpgrade = true;	
		document.getElementById('gold').innerHTML = fnum(gold);
		document.getElementById('iron').innerHTML = fnum(iron);
		document.getElementById("btnljackUpgrade1").disabled = true;
	}
};

function minerUpgradePanning(){
	if(gold >= 3500 && iron >= 1000){
		gold = gold - 3500;
		iron = iron - 1000;
		mPanningUpgrade = true;	
		document.getElementById('gold').innerHTML = fnum(gold);
		document.getElementById('iron').innerHTML = fnum(iron);
		document.getElementById("btnminerUpgrade1").disabled = true;
	}	
};

function minerUpgradeSilver(){
	if(gold >= 7500 && iron >= 2500){
		gold = gold - 7500;
		iron = iron - 2500;
		mSilverUpgrade = true;	
		document.getElementById('gold').innerHTML = fnum(gold);
		document.getElementById('iron').innerHTML = fnum(iron);
		document.getElementById('silverdiv').style.display = "block";
		document.getElementById("btnminerUpgrade2").disabled = true;
		document.getElementById("btnminerUpgrade2").innerHTML = "Learned Silver Studies";
		
	}	
};
			
function UnlockSquire(){
	if(gold >= 4000 && BattlePower >= 120){
		gold = gold - 400;
		document.getElementById('gold').innerHTML = fnum(gold);
		squiresUnlocked = true;
		document.getElementById("btnPageUpgrade1").disabled = true;
		document.getElementById('SquireTab').style.display = "block";
	}
}

function UnlockKnight(){
	if(gold >= 8000 && BattlePower >= 500){
		gold = gold - 8000;
		document.getElementById('gold').innerHTML = fnum(gold);
		knightsUnlocked = true;
		document.getElementById("btnSquireUpgrade1").disabled = true;
		document.getElementById('KnightTab').style.display = "block";
	}
}

function paladinUpgradeWeapon(){
	if(gold >= 20000 && iron >= 5000 && faith >=2500){
		gold = gold - 20000;
		iron = iron - 5000;
		faith = faith - 2500;
		document.getElementById('gold').innerHTML = fnum(gold);
		document.getElementById('iron').innerHTML = fnum(iron);
		document.getElementById('faith').innerHTML = fnum(faith);
		paladinWepUpgrade = true;
		document.getElementById("paladinUpgrade1").disabled = true;
	}
}

function recalculateCosts(){
	Peasant.costAdj = tavernpeasants;
	Peasant.recalcCost();
	Miner.costAdj = tavernminers;
	Miner.recalcCost();
	Priest.recalcCost();
	Page.recalcCost();
	Squire.recalcCost();
	Knight.recalcCost();
	Paladin.recalcCost();
	Shade.recalcCost();
	Aspect.recalcCost();
};

function UpdateButtons() {
	
	checkUnitButtons();
	checkBuildingButtons();

	//Upgrade Buttons//
	//Unlock Squire Button
	if(squiresUnlocked == true || (BattlePower < 120|| gold < 4000)){	
		document.getElementById("btnPageUpgrade1").disabled = true;
	}
	else{
		document.getElementById("btnPageUpgrade1").disabled = false;
	}	
	
	//Unlock Knight Button
	if(knightsUnlocked == true || (BattlePower < 500|| gold < 8000)){	
		document.getElementById("btnSquireUpgrade1").disabled = true;
	}
	else{
		document.getElementById("btnSquireUpgrade1").disabled = false;
	}		
	//End of Upgrade Buttons//
	checkBattleButtons();	
	
	//Changes status of Spell buttons
	checkSpellButtons();
	
}

window.setInterval(function(){                                 //Update per second counts
    
	
	if(pGoldUpgrade == true){
		goldpersec = Peasant.number * 2;
	}
	else{
		goldpersec = Peasant.number;	
	}
	if(mPanningUpgrade == true)
	{
		goldpersec = goldpersec + Miner.number;
	}

//	document.getElementById("goldpersec").innerHTML = goldpersec;	
	 document.getElementById("resgoldimage").title = "Gold per second: " + goldpersec ; 

	if(lwoodClickUpgrade == true){
		woodpersec = Lumberjack.number*2;		
	}
	else{
		woodpersec = Lumberjack.number;	
	}
	document.getElementById("reswoodimage").title = "Wood per second: " + woodpersec ; 	 
	 
	ironpersec = Miner.number;
//	document.getElementById("ironpersec").innerHTML = ironpersec;
	document.getElementById("resironimage").title = "Iron per second: " + ironpersec ; 	 
	 
	if(mSilverUpgrade == true)
	{
		silverpersec = Miner.number*0.5
	}
	document.getElementById("ressilverimage").title = "Silver per second: " + silverpersec ; 	 	
	
//	document.getElementById("silverpersec").innerHTML = silverpersec;	
  
  
    faithpersec = Priest.number*0.5 + Acolyte.number*0.1;
	faithpersec = faithpersec.toFixedDown(2)
 //   document.getElementById("faithpersec").innerHTML = faithpersec;
    document.getElementById("resfaithimage").title = "Faith per second: " + faithpersec ; 
	
    soulspersec = Paladin.number;
	if(paladinWepUpgrade == true){
		soulspersec = soulspersec * 2;
	}
//   document.getElementById("soulspersec").innerHTML = soulspersec;
	document.getElementById("ressoulsimage").title = "Souls per second: " + soulspersec ; 
	

	manapersec = 1;
//	document.getElementById("manapersec").innerHTML = manapersec;
	document.getElementById("resmanaimage").title = "Mana per second: " + manapersec ; 	
	
   
	document.getElementById("peasants").innerHTML = Peasant.number ;	//For testing
	document.getElementById("miners").innerHTML = Miner.number;			//For Testing
},100);


window.setInterval(function(){	

	//Gold generation via peasants etc every second
	var number = Peasant.number;
	if(pGoldUpgrade == true){
		number = Peasant.number*2;
	}
	if(mPanningUpgrade == true)
	{
		number = number + Miner.number;
	}
	clickThing(number, "gold");

	//Wood Generation via lumberjacks etc every second
	var woodnumber = Lumberjack.number;
	if(lwoodClickUpgrade == true){
		woodnumber = Lumberjack.number * 2;
	}
	
	clickThing(woodnumber, "wood")	
	
	//Iron Generation via miners etc every second
	clickThing(Miner.number, "iron")

	//Silver Generation via miners etc every second
	if(mSilverUpgrade == true)
	{
		clickThing(Miner.number*0.5, "silver")
	}	
	silver = silver.toFixedDown(2);
	
	 //Faith Generation via priests etc every second
	clickThing(Priest.number*0.5 + Acolyte.number*0.1, "faith");          
	faith = faith.toFixedDown(2);
	
	//Soul generation via paladins etc every second
	if(paladinWepUpgrade == true){
		clickThing(Paladin.number*2,"souls");	
	}
	else{
		clickThing(Paladin.number,"souls");	
	}

	//Mana generation per second
	if(towerBuilt == true){
		if(mana < manaCap){
			clickThing(1,"mana");
		}
	}
	
}, 1000);


window.setInterval(function(){					//Enables/disables buttons 
	UpdateButtons();
}, 100);

window.setInterval(function(){					//Increases totalTimePlayed by 1 second per second 
	totalTimePlayed = totalTimePlayed + 1;
	tTPinHHMMSS = dhms(totalTimePlayed,"d:h:m:s");
	document.getElementById("tTPinHHMMSS").innerHTML = tTPinHHMMSS;
}, 1000);

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function dhms(s, f) { // seconds, format
  var d=h=m=0;
  switch (true) {
  case (s>86400):
    d=Math.floor(s/86400);
    s-=d*86400;
  case (s>3600):
    h=Math.floor(s/3600);
    s-=h*3600;
  case (s>60):
    m=Math.floor(s/60);
    s-=m*60;
  } 
  if (f != null) {
    var f = f.replace('dd', (d<10)?"0"+d:d);
    f = f.replace('d', d);
    f = f.replace('hh', (h<10)?"0"+h:h);
    f = f.replace('h', h);
    f = f.replace('mm', (m<10)?"0"+m:m);
    f = f.replace('m', m);
    f = f.replace('ss', (s<10)?"0"+s:s);
    f = f.replace('s', s);
  } 
  else {
    f = d + ':' + h + ':' + m + ':' + s;
  }
  return f; // :) omg...
}

function fnum(x) {
	if(isNaN(x)) return x;
 
	if(x < 9999) {
		return x;
	}
 
	if( x < 1000000) {
		return (x/1000).toFixed(2) + "K";
	}
	if( x < 10000000) {
		return (x/1000000).toFixed(2) + "M";
	}
 
	if(x < 1000000000) {
		return (x/1000000).toFixed(2) + "M";
	}
 
	if(x < 1000000000000) {
		return (x/1000000000).toFixed(2) + "B";
	}
	
	if(x < 1000000000000000) {
		return (x/1000000000000).toFixed(2) + "Qd";
	}	
 
 	if(x < 1000000000000000000) {
		return (x/1000000000000000).toFixed(2) + "Qt";
	}	
 
	return "1T+";
}

