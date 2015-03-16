var manaCap = 2000;

var Spell = function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, htmlAlertRef, goldCost, woodCost, ironCost, silverCost, faithCost, soulCost, manaCost){
	this.name = name;
	this.description = description;
	this.htmlBoxRef = htmlBoxRef;
	this.htmlBarRef = htmlBarRef;
	this.htmlBtnRef = htmlBtnRef;
	this.htmlAlertRef = htmlAlertRef;
	this.goldCost = goldCost;
	this.woodCost = woodCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.manaCost = manaCost;
};


Spell.prototype.cast = function(){
		gold = gold - this.goldCost;                     										      //removes the gold spent
		wood = wood - this.woodCost;
		iron = iron - this.ironCost;                                                                   //removes the iron spent
		silver = silver - this.silverCost;                                                             //removes the silver spent
		faith = faith - this.faithCost;                                                                //removes the faith spent
		souls = souls - this.soulCost;                                                                 //removes the souls spent
		mana = mana - this.manaCost;                                                                  //removes the souls spent
		document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
		document.getElementById('gold').innerHTML = gold;  										          //updates the number of gold for the user
		document.getElementById('iron').innerHTML = iron;  										          //updates the number of iron for the user
		document.getElementById('silver').innerHTML = iron;  										       //updates the number of silver for the user
		document.getElementById('faith').innerHTML = faith;  										      //updates the number of faith for the user
		document.getElementById('souls').innerHTML = souls;  										      //updates the number of souls for the user
		document.getElementById('mana').innerHTML = mana;  										      //updates the number of souls for the user
	
	alert(this.name + " spell cast!");
}

Spell.prototype.canCast = function(){
	var btn = this.htmlBtnRef;
	
	if(gold >= this.goldCost && iron >= this.ironCost && silver >= this.silverCost && faith >= this.faithCost && souls >= this.soulCost && mana >= this.manaCost){     //checks that the player can afford the spell
		document.getElementById(btn).disabled = false;					//enables the buy button
	}
	else{
		document.getElementById(btn).disabled = true;					//disables the buy button
	}
};

function setSpellDescription(Spell, element){
	var popover = document.getElementById(element);
	popover.setAttribute("data-content", Spell.description);		
};


var fastForwardDesc = "<img src='images/stopwatch.png'>The archmage casts a spell that warps your kingdom 15 minutes into the future. Unfortunately, the spell isn't strong enough to keep your taverns working for the duration of the spell.";
var FastForward = new Spell("Time Warp", fastForwardDesc, 0, 0, 'btnSpellFF', 'Alert', 0, 0, 0, 0, 0, 0, 1000);
setSpellDescription(FastForward, 'BtnSpellFFDesc');

FastForward.cast = function(){
	
	var timemultiplier = 15; //15 Minutes
	var goldGained = 0;
	var woodGained = 0;
	var ironGained = 0;
	var silverGained = 0;
	var faithGained = 0;
	var soulsGained = 0;
	var paperGained = 0;
	
	if(mana >= 1000){
	goldGained = timemultiplier*60*goldpersec;
	gold = gold + goldGained;
	document.getElementById('gold').innerHTML = gold;  										          //updates the number of gold for the user	

	woodGained = timemultiplier*60*woodpersec;
	wood = wood + woodGained;
	document.getElementById('wood').innerHTML = wood;  										          //updates the number of wood for the user	

	ironGained = timemultiplier*60*ironpersec;
	iron = iron + ironGained;
	document.getElementById('iron').innerHTML = iron;  										          //updates the number of iron for the user	

	silverGained = timemultiplier*60*silverpersec;
	silver = silver + silverGained;
	document.getElementById('silver').innerHTML = silver;  										          //updates the number of gold for the user	

	faithGained = timemultiplier*60*faithpersec;
	faith = faith + faithGained;
	document.getElementById('faith').innerHTML = faith;  										          //updates the number of faith for the user	

	soulsGained = timemultiplier*60*soulspersec;
	souls = souls + soulsGained;
	document.getElementById('souls').innerHTML = souls;  										          //updates the number of souls for the user		
	
	paperGained = timemultiplier*60*paperpersec;														// updates number of paper for the user
	paper = paper + paperGained;	
	document.getElementById('paper').innerHTML = paper;					
	
	
	mana = mana - this.manaCost;                                                                  //removes the souls spent	
	statManaUsed += this.manaCost;
	statTotalManaUsed += this.manaCost;
	statCastedTimeSkip += 1;
	statTotalCastedTimeSkip +=1;
	document.getElementById('mana').innerHTML = mana;  										      //updates the number of souls for the user
	document.getElementById('statManaUsed').innerHTML = statManaUsed;
	document.getElementById('statTotalManaUsed').innerHTML = statTotalManaUsed;
	document.getElementById('statCastedTimeSkip').innerHTML = statCastedTimeSkip;
	document.getElementById('statTotalCastedTimeSkip').innerHTML = statTotalCastedTimeSkip;
	
	var alertString = "The archmage releases a burst of magic causing the world to blur before your eyes! ";
		if(goldGained > 0){alertString = alertString + "<br>You gain " + fnum(goldGained)+ " gold."}
		if(woodGained > 0){alertString = alertString + "<br>You gain " + fnum(woodGained) + " wood. "}
		if(ironGained > 0){alertString = alertString + "<br>You gain " + fnum(ironGained) + " iron."}
		if(silverGained > 0){alertString = alertString + "<br>You gain " + fnum(silverGained) + " silver."}
		if(faithGained > 0){alertString = alertString + "<br>You gain " + fnum(faithGained) + " faith."}
		if(soulsGained > 0){alertString = alertString + "<br>You gain " + fnum(soulsGained) + " souls."}
		if(paperGained > 0){alertString = alertString + "<br>You gain " + fnum(paperGained) + " paper."}
					 
	document.getElementById('TimeWarpAlert').style.display = "block";
	document.getElementById('timeWarpAlertString').innerHTML = alertString;
	scroll('TimeWarpAlert',1000);
	}
}

var fireBallDesc = "<img src='images/fireball.png'>The archmage conjures a flaming ball of fire and sends it hurtling towards your foe! It will damage the enemy you are currently battling, pushing you 15% closer to victory!";
var FireBall = new Spell("FireBall", fireBallDesc, 0, 0, 'btnSpellFB', 'Alert', 0, 0, 0, 0, 0, 0, 750);
setSpellDescription(FireBall, 'BtnSpellFBDesc');

FireBall.cast = function(){
	if(inbattle == false){
		document.getElementById('FireBallFailAlert').style.display = "block";
	}
	else{
		spellBoost(15);
		mana = mana - this.manaCost;                                                                  //removes the souls spent	
		statManaUsed += this.manaCost;
		statTotalManaUsed += this.manaCost;	
		statCastedFireBall += 1;
		statTotalCastedFireBall += 1;
		document.getElementById('mana').innerHTML = mana;  										      //updates the number of souls for the user	
		document.getElementById('statManaUsed').innerHTML = statManaUsed;
		document.getElementById('statTotalManaUsed').innerHTML = statTotalManaUsed;
		document.getElementById('statCastedFireBall').innerHTML = statCastedFireBall;
		document.getElementById('statTotalCastedFireBall').innerHTML = statTotalCastedFireBall;
		CollapseAll(); 
		toggle('Battle');
		var AlertString = "With a large 'woosh!' and a burst of intense light and heat, the archmage sends a fireball flying from his tower straight at " + curBattling + "!";
		document.getElementById('fireBallAlertString').innerHTML = AlertString;
		document.getElementById('FireBallAlert').style.display = "block";
		scroll('FireBallAlert',1000);
	}

}

function spellBoost(num){			//Boosts current battle completion percent by desired number
	spellBoostPercent = num;
}

function checkSpellButtons(){
	FastForward.canCast();
	FireBall.canCast();
};

window.setInterval(function(){                                 
	document.getElementById("manaCap").innerHTML = fnum(manaCap);	
	
	var percentFull = ((mana/manaCap)*100).toFixedDown(1);
	
	var $bar = $(document.getElementById('manaprogbar'));
		$bar.width(percentFull +'%');
		$bar.attr('aria-valuenow',percentFull);
		$bar.text(percentFull + '%' + " mana");
	
	var currWidth = parseInt($bar.attr('aria-valuenow'));
    var maxWidth = parseInt($bar.attr('aria-valuemax'));
	if (currWidth >= maxWidth){
		$bar.text("Mana Full!");
	}
},100);

