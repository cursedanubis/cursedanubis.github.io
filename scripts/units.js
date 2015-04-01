//HW Units

var Unit = function(name, htmlNumRef, htmlNextGoldCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlNextTomeCost, htmlNextManaCost, htmlBuyBtn, 
					goldCost, ironCost, silverCost, faithCost, soulCost, tomeCost, manaCost, costMult, description, costAdj, hasReqUnit, reqUnit){
	this.name = name;
	this.htmlNumRef = htmlNumRef;
	this.htmlNextGoldCost = htmlNextGoldCost;
	this.htmlNextIronCost = htmlNextIronCost;
	this.htmlNextSilverCost = htmlNextSilverCost;
	this.htmlNextFaithCost = htmlNextFaithCost;
	this.htmlNextSoulCost = htmlNextSoulCost;
	this.htmlNextTomeCost = htmlNextTomeCost;
	this.htmlNextManaCost = htmlNextManaCost;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.tomeCost = tomeCost;
	this.manaCost = manaCost;
	this.costMult = costMult;
	this.description = description;
	this.goldClickVal = 0;
	this.woodClickVal = 0;
	this.ironClickVal = 0;
	this.silverClickVal = 0;
	this.faithClickVal = 0;
	this.soulsClickVal = 0;
	this.tomeClickVal = 0;
	this.manaClickVal = 0;
	this.armyPower = 0;
	this.spiritPower = 0;
	this.curGoldCost = 0;
	this.curIronCost = 0;
	this.curSilverCost = 0;	
	this.curFaithCost = 0;
	this.curSoulCost = 0;
	this.curTomeCost = 0;
	this.curManaCost = 0;
	this.nextGoldCost = 0;
	this.nextIronCost = 0;
	this.nextSilverCost = 0;
	this.nextFaithCost = 0;
	this.nextSoulCost = 0;
	this.nextTomeCost = 0;
	this.nextManaCost = 0;
	this.number = 0;
	this.costAdj = costAdj;	
	this.hasReqUnit = hasReqUnit;
	this.reqUnit = reqUnit;
};


Unit.prototype.buyOne = function(){
	this.curGoldCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));
	this.curIronCost =  Math.floor(this.ironCost * Math.pow(this.costMult,this.number));
	this.curSilverCost =  Math.floor(this.silverCost * Math.pow(this.costMult,this.number));
	this.curFaithCost =  Math.floor(this.faithCost * Math.pow(this.costMult,this.number));
	this.curSoulCost =  Math.floor(this.soulCost * Math.pow(this.costMult,this.number));
	this.curTomeCost =  Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));
	this.curManaCost = Math.floor(this.manaCost * Math.pow(this.costMult,this.number));
	
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.number > 0)){
		if(gold >= this.curGoldCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost && tomes >= this.tomeCost && mana >= this.manaCost){    //checks that the player can afford the Unit
			this.number += 1;                                  							 	  //increases number of Unit
			gold -= this.curGoldCost;                     										      //removes the gold spent
			iron -= this.curIronCost;                                                                   //removes the iron spent
			silver -= this.curSilverCost;                                                             //removes the silver spent
			faith -= this.curFaithCost;                                                                //removes the faith spent
			souls -= this.curSoulCost;                                                                 //removes the souls spent
			tomes -= this.curTomeCost; 																  //removes the tomes spent
			mana -= this.curManaCost;
			document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
			document.getElementById('gold').innerHTML = fnum(gold);  										          //updates the number of gold for the user
			document.getElementById('iron').innerHTML = fnum(iron);  										          //updates the number of iron for the user
			document.getElementById('silver').innerHTML = fnum(silver);  										       //updates the number of silver for the user
			document.getElementById('faith').innerHTML = fnum(faith);  										      //updates the number of faith for the user
			document.getElementById('souls').innerHTML = fnum(souls);  										      //updates the number of souls for the user
			document.getElementById('tomes').innerHTML = fnum(tomes);  										      //updates the number of tomes for the user
			document.getElementById('mana').innerHTML = fnum(mana);  										      //updates the mana for the user
			if(this.hasReqUnit == true){
				this.reqUnit.removeOne();
			}
			this.nextGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Unit
			document.getElementById(this.htmlNextGoldCost).innerHTML = fnum(this.nextGoldCost);  						      //updates the Unit cost for the user
			
			if(this.htmlNextIronCost != 'none'){
				this.nextIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number));                      //works out the iron cost of the next Unit
				document.getElementById(this.htmlNextIronCost).innerHTML = fnum(this.nextIronCost);  						      //updates the Unit iron cost for the user
			}
			
			if(this.htmlNextSilverCost != 'none'){
				this.nextSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number));                    //works out the silver cost of the next Unit	
				document.getElementById(this.htmlNextSilverCost).innerHTML = fnum(this.nextSilverCost);  						      //updates the Unit silver cost for the user
			}
			
			if(this.htmlNextFaithCost != 'none'){
				this.nextFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number));                      //works out the faith cost of the next Unit
				document.getElementById(this.htmlNextFaithCost).innerHTML = fnum(this.nextFaithCost);  						      //updates the Unit faith cost for the user	
			}	

			if(this.htmlNextSoulCost != 'none'){
				this.nextSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Unit
				document.getElementById(this.htmlNextSoulCost).innerHTML = fnum(this.nextSoulCost);  						      //updates the Unit Soul cost for the user
			}

			if(this.htmlNextTomeCost != 'none'){
				this.nextTomeCost = Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));                       //works out the Tome cost of the next Unit
				document.getElementById(this.htmlNextTomeCost).innerHTML = fnum(this.nextTomeCost);  						      //updates the Unit Tome cost for the user
			}	

			if(this.htmlNextManaCost != 'none'){
				this.nextManaCost = Math.floor(this.manaCost * Math.pow(this.costMult,this.number));                       //works out the Mana cost of the next Unit
				document.getElementById(this.htmlNextManaCost).innerHTML = fnum(this.nextManaCost);  						      //updates the Unit Mana cost for the user
			}				
			
			updateStatistic(this.name, 1);
		};
	}
	QuestCheckUnitOptions(); //
};

Unit.prototype.removeOne = function(){
	this.number -= 1;																	  //subtracts a unit from count
	document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
	this.recalcCost();
}

Unit.prototype.recalcCost = function(){
	this.curGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Unit
	document.getElementById(this.htmlNextGoldCost).innerHTML = fnum(this.curGoldCost);  						      //updates the Unit cost for the user
	
	if(this.htmlNextIronCost != 'none'){
		this.curIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number));                      //works out the iron cost of the next Unit
		document.getElementById(this.htmlNextIronCost).innerHTML = fnum(this.curIronCost);  						      //updates the Unit iron cost for the user
	}
	
	if(this.htmlNextSilverCost != 'none'){
		this.curSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number));                    //works out the silver cost of the next Unit	
		document.getElementById(this.htmlNextSilverCost).innerHTML = fnum(this.curSilverCost);  						      //updates the Unit silver cost for the user
	}
	
	if(this.htmlNextFaithCost != 'none'){
		this.curFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number));                      //works out the faith cost of the next Unit
		document.getElementById(this.htmlNextFaithCost).innerHTML = fnum(this.curFaithCost);  						      //updates the Unit faith cost for the user	
	}	

	if(this.htmlNextSoulCost != 'none'){
		this.curSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Unit
		document.getElementById(this.htmlNextSoulCost).innerHTML = fnum(this.curSoulCost);  						      //updates the Unit Soul cost for the user
	}	

	if(this.htmlNextTomeCost != 'none'){
		this.curTomeCost = Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));                       //works out the Tome cost of the next Unit
		document.getElementById(this.htmlNextTomeCost).innerHTML = fnum(this.curTomeCost);  					   //updates the Unit Tome cost for the user
	}	

	if(this.htmlNextManaCost != 'none'){
		this.curManaCost = Math.floor(this.manaCost * Math.pow(this.costMult,this.number));                       //works out the Mana cost of the next Unit
		document.getElementById(this.htmlNextManaCost).innerHTML = fnum(this.curManaCost);  					   //updates the Unit Mana cost for the user
	}	
	
};

Unit.prototype.canBuy = function(){
	this.recalcCost();
	btn = this.htmlBuyBtn
	
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.number > 0)){	
		if(gold >= this.curGoldCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost && tomes >= this.curTomeCost && mana >= this.curManaCost){     //checks that the player can afford the Unit
			document.getElementById(btn).disabled = false;					//enables the buy button
	}
		else{
			document.getElementById(btn).disabled = true;					//disables the buy button
		}
	}
	else{
		document.getElementById(btn).disabled = true;	
	}
};

Unit.prototype.totalArmyPower = function(){
	return this.armyPower*this.number;
};

Unit.prototype.totalSpiritPower = function(){
	return this.spiritPower*this.number;
};

function setDescription(Unit, element){
	var popover = document.getElementById(element);
	popover.setAttribute("data-content", Unit.description);		
};

function setArmyPower(Unit, value){
	Unit.armyPower = value;
}

function setSpiritPower(Unit, value){
	Unit.spiritPower = value;
}

function setClickVal(Unit, type, value){
	switch(type)
	{
		case 'gold':
			Unit.goldClickVal = value;
		break;
		
		case 'wood':
			Unit.woodClickVal = value;
		break;
		
		case 'iron':
			Unit.ironClickVal = value;
		break;
		
		case 'silver':
			Unit.silverClickVal = value;
		break;
		
		case 'faith':
			Unit.faithClickVal = value;
		break;
		
		case 'tome':
			Unit.tomeClickVal = value;
		break;
		
		case 'souls':
			Unit.soulsClickVal = value;
		break;
		
		case 'mana':
			Unit.manaClickVal = value;
		break;
	}
}

function updateStatistic(name, value){
//	console.log(name);
	switch(name)
	{
		case 'Peasant':
			statPeasantsHired += value;
			statTotalPeasantsHired += value;
			statSelfPeasantsHired += value;
			statTotalSelfPeasantsHired += value;
			document.getElementById('statPeasantsHired').innerHTML = statPeasantsHired;
			document.getElementById('statSelfPeasantsHired').innerHTML = statSelfPeasantsHired;
			document.getElementById('statTotalSelfPeasantsHired').innerHTML = statTotalSelfPeasantsHired;
			document.getElementById('statTotalPeasantsHired').innerHTML = statTotalPeasantsHired;
		break;
		
		case 'Miner':
			statMinersHired += value;
			statSelfMinersHired += value;
			statTotalSelfMinersHired += value;
			statTotalMinersHired += value;
			document.getElementById('statMinersHired').innerHTML = statMinersHired;
			document.getElementById('statSelfMinersHired').innerHTML = statSelfMinersHired;
			document.getElementById('statTotalSelfMinersHired').innerHTML = statTotalSelfMinersHired;
			document.getElementById('statTotalMinersHired').innerHTML = statTotalMinersHired;
			console.log('Lumberjack');
		break;
		
		case 'Lumberjack':
			statLumberjacksHired += value;
			statSelfLumberjacksHired += value;
			statTotalSelfLumberjacksHired += value;
			statTotalLumberjacksHired += value;
			document.getElementById('statLumberjacksHired').innerHTML = statLumberjacksHired;
			document.getElementById('statSelfLumberjacksHired').innerHTML = statSelfLumberjacksHired;
			document.getElementById('statTotalSelfLumberjacksHired').innerHTML = statTotalSelfLumberjacksHired;
			document.getElementById('statTotalLumberjacksHired').innerHTML = statTotalLumberjacksHired;			
		break;
		
		case 'Page':
			statPagesTrained += value;
			statTotalPagesTrained += value;
			document.getElementById('statPagesTrained').innerHTML = statPagesTrained;
			document.getElementById('statTotalPagesTrained').innerHTML = statTotalPagesTrained;
		break;
		
		case 'Squire':
			statSquiresTrained += value;
			statTotalSquiresTrained += value;
			document.getElementById('statSquiresTrained').innerHTML = statSquiresTrained;
			document.getElementById('statTotalSquiresTrained').innerHTML = statTotalSquiresTrained;
		break;

		case 'Knight':
			statKnightsTrained += value;
			statTotalKnightsTrained += value;
			document.getElementById('statKnightsTrained').innerHTML = statKnightsTrained;
			document.getElementById('statTotalKnightsTrained').innerHTML = statTotalKnightsTrained;			
		break;	

		case 'Paladin':
			statPaladinsTrained += value;
			statTotalPaladinsTrained += value;
			document.getElementById('statPaladinsTrained').innerHTML = statPaladinsTrained;
			document.getElementById('statTotalPaladinsTrained').innerHTML = statTotalPaladinsTrained;		
		break;

		case 'Acolyte':
			statAcolytesRecruited += value;
			statTotalAcolytesRecruited += value;
			document.getElementById('statAcolytesRecruited').innerHTML = statAcolytesRecruited;
			document.getElementById('statTotalAcolytesRecruited').innerHTML = statTotalAcolytesRecruited;	
		break;

		case 'Priest':
			statPriestsTrained += value;
			statTotalPriestsTrained += value;
			document.getElementById('statPriestsTrained').innerHTML = statPriestsTrained;
			document.getElementById('statTotalPriestsTrained').innerHTML = statTotalPriestsTrained;			
		break;

		case 'Bishop':
			statBishopsTrained += value;
			statTotalBishopsTrained += value;
			document.getElementById('statBishopsTrained').innerHTML = statBishopsTrained;
			document.getElementById('statTotalBishopsTrained').innerHTML = statTotalBishopsTrained;				
		break;

		case 'Shade':
			statShadesSummoned += value;
			statTotalShadesSummoned += value;
			document.getElementById('statShadesSummoned').innerHTML = statShadesSummoned;
			document.getElementById('statTotalShadesSummoned').innerHTML = statTotalShadesSummoned;				
		break;

		case 'AspectofJustice':
			statAspectsTrained += value;
			statTotalAspectsTrained += value;
			document.getElementById('statAspectsTrained').innerHTML = statAspectsTrained;
			document.getElementById('statTotalAspectsTrained').innerHTML = statTotalAspectsTrained;				
		break;	

		case 'Angel':
			statAngelsSummoned += value;
			statTotalAngelsSummoned += value;
			document.getElementById('statAngelsSummoned').innerHTML = statAngelsSummoned;
			document.getElementById('statTotalAngelsSummoned').innerHTML = statTotalAngelsSummoned;				
		break;

		case 'Sprite':
			statSpritesSummoned += value;
			statTotalSpritesSummoned += value;
			document.getElementById('statSpritesSummoned').innerHTML = statSpritesSummoned;
			document.getElementById('statTotalSpritesSummoned').innerHTML = statTotalSpritesSummoned;				
		break;			
		
	}
}

//Unit constructor  (name, htmlNumRef, htmlNextGodCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlNextTomeCost, htmlBuyBtn, 
//					goldCost, ironCost, silverCost, faithCost, soulCost, tomeCost, costMult,description, costAdj, hasReqUnit, reqUnit){
var peasDesc = "A lowly denizen of your realm. They are adept at farming and scrounging for gold but completely useless at fighting."
var Peasant = new Unit("Peasant",'peasants','PeasantCost','none','none','none','none','none','none','btnbuyPeasant',50,0,0,0,0,0,0,1.1, peasDesc, tavernpeasants,false,"none");
setDescription(Peasant, 'BtnPeasantDesc');
setClickVal(Peasant, 'gold', 1);

var lumberjackDesc = "These brawny men fell trees for you."
var Lumberjack = new Unit("Lumberjack",'lumberjacks','LumberjackCost','none','none','none','none','none','none','btnbuyLumberjack',150,0,0,0,0,0,0,1.1, lumberjackDesc, tavernlumberjacks, false, "none")
setDescription(Lumberjack, 'BtnLumberjackDesc');
setClickVal(Lumberjack, 'wood', 1);

var minerDesc = "These hard-working mine excavate minerals from the mine you have built. They bring canaries in with them to warn them of disasters. Also as lunch."
var Miner = new Unit("Miner",'miners','MinerCost','none','none','none','none','none','none','btnbuyMiner',250,0,0,0,0,0,0,1.1, minerDesc, tavernminers, false, "none")
setDescription(Miner, 'BtnMinerDesc');
setClickVal(Miner, 'iron', 1);

var pageDesc = "Young men in training to become knights. Not too great with weapons yet, but they're learning.  <br> Provides  <img src = 'images/armsmall.png'>10 army strength"
var Page = new Unit("Page",'personPage','PageCost','PageIronCost','none','none','none','none','none','btnBuyPage',500,100,0,0,0,0,0,1.1, pageDesc, 0, false, "none");
setDescription(Page, 'BtnPageDesc');
setArmyPower(Page, 10);

var squireDesc = "Pages that have gained enough experience are promoted to Squires. They are semi-capable warriors. <br> Provides <img src = 'images/armsmall.png'>50 army strength."
var Squire = new Unit("Squire",'squires','SquireCost','SquireIronCost','none','none','none','none','none','btnBuySquire',1200,250,0,0,0,0,0,1.15, squireDesc, 0, true, Page);	
setDescription(Squire, 'BtnSquireDesc');
setArmyPower(Squire, 50);

var knightDesc = "Squires whom have passed the test of courage, honor, and battle prowess are promoted to knights. <br> Provides <img src = 'images/armsmall.png'>150 army strength."
var Knight = new Unit("Knight",'knights','KnightCost','KnightIronCost','none','none','none','none','none','btnBuyKnight',3000,350,0,0,0,0,0,1.25, knightDesc, 0, true, Squire);	
setDescription(Knight, 'BtnKnightDesc');
setArmyPower(Knight, 150);

var paladinDesc = "Holy warriors that channel their faith into their weapons. They are quite adept at slaying monsters, both magical and not. Paladins go out into the field, slaying lesser demons of The Evil One, freeing their souls."
var Paladin = new Unit("Paladin",'paladins','PaladinCost','PaladinIronCost','PaladinSilverCost','PaladinFaithCost','none','none','none','btnBuyPaladin',10000,500,100,50,0,0,0,1.1, paladinDesc, 0, true, Knight);		
setDescription(Paladin, 'BtnPaladinDesc')
setArmyPower(Paladin, 500);
setSpiritPower(Paladin, 5);
setClickVal(Paladin, 'souls', 1);

Paladin.totalArmyPower = function(){
	if(paladinWepUpgrade == true){
			return this.armyPower*this.number * 2;
	}
	else{
		return this.armyPower*this.number;
	}
};

Paladin.totalSpiritPower = function(){
	if(paladinWepUpgrade == true){
			return this.spiritPower*this.number * 2;
	}
	else{
		return this.spiritPower*this.number;
	}
};

var acolyteDesc = "Trainees in the world of the holy. Over time they may become mighty pillars of Holiness."
var Acolyte = new Unit("Acolyte",'acolytes','AcolyteCost','none','none','none','none','none','none','btnbuyAcolyte',500,0,0,0,0,0,0,1.1, acolyteDesc, 0, false, "none");	
setDescription(Acolyte, 'BtnAcolyteDesc');
setClickVal(Acolyte, 'faith', 0.1);

var priestDesc = "Men of the cloth. Their piety helps them channel the holy energy from the universe. They have duties ranging from teaching the acolytes to writing down of knowledge of the Order in <img src = 'images/bookssmall.png' Title='Tomes'>tomes."
var Priest = new Unit("Priest",'priests','PriestCost','none','PriestSilverCost','PriestFaithCost','none','none','none','btnbuyPriest',1000,0,10,50,0,0,0,1.15, priestDesc, 0, true, Acolyte);	
setDescription(Priest, 'BtnPriestDesc');
setClickVal(Priest, 'faith', 0.5);

var bishopDesc = "  "
var Bishop = new Unit("Bishop",'bishops','BishopCost','none','BishopSilverCost','BishopFaithCost','none','BishopTomeCost','none','btnbuyBishop',75000,0,10000,5000,0,10,0,1.15, bishopDesc, 0, true, Priest);	
setDescription(Bishop, 'BtnBishopDesc');
setClickVal(Bishop, 'faith', 10);

var shadeDesc = "This spirits are but a barely present in our world, but they are still capable of damaging demonic beings."
var Shade = new Unit("Shade",'shades','ShadeCost','none','shadeSilverCost','none','shadeSoulCost','none','none','btnBuyShade',10000,0,250,0,200,0,0,1.15, shadeDesc, 0, false, "none");
setDescription(Shade, 'BtnShadeDesc');
setArmyPower(Shade, 5);
setSpiritPower(Shade, 10);

var aspectDesc = "You are able to improve your shades by providing them a more concrete anchor into the physical realm in the form of suit of armor made from blessed silver. Once bound to this armor, they are much more capable of battling demonic beings."
var Aspect = new Unit("AspectofJustice",'aspects','AspectCost','aspectIronCost','aspectSilverCost','none','aspectSoulCost','none','none','btnBuyAspect',15000,1000,500,0,500,0,0,1.2, aspectDesc, 0, true, Shade);
setDescription(Aspect, 'BtnAspectDesc');
setArmyPower(Aspect, 100);
setSpiritPower(Aspect, 50);
setClickVal(Aspect, 'souls', 2);

var angelDesc = "Divine warriors capable of flight summoned down from the heavens. They smell vaguely like freshly baked brownies."
var Angel = new Unit("Angel",'angels','AngelCost','angelIronCost','angelSilverCost','angelFaithCost','angelSoulCost','angelTomeCost','none','btnBuyAngel',200000,500,2500,25000,1500,20,0,1.15, angelDesc, 0, false, "none");
setDescription(Angel, 'BtnAngelDesc');
setArmyPower(Angel, 450)
setSpiritPower(Angel, 200);
setClickVal(Angel, 'souls', 5);

var spriteDesc = "These petite, fairy-like creatures are intensely attracted to the arcane aura emanating from your tower. Just being around them makes your mind sharpen to the arcane energies of the universe. <br><br>Increases mana generation by 0.1 <img src = 'images/manasmall.png' Title='Mana'> per second."
var Sprite = new Unit("Sprite",'sprites','SpriteCost','none','spriteSilverCost','spriteFaithCost','spriteSoulCost','spriteTomeCost', 'spriteManaCost','btnBuySprite',750000,500000,2500,50000,2000,25,2000,1.5, spriteDesc, 0, false, "none");
setDescription(Sprite, 'BtnSpritesDesc');
setClickVal(Sprite, 'mana', 0.1);

function checkUnitButtons(){
	//Unit Buttons //
	//Enable/disables buy peasant button depending on if there is enough currency	
	Peasant.canBuy();

	//Enable/disables buy miner button depending on if there is enough currency
	Lumberjack.canBuy();
	
	//Enable/disables buy miner button depending on if there is enough currency
	Miner.canBuy();

	//Enable/disables buy priest button depending on if there is enough currency
	Acolyte.canBuy();	
	
	//Enable/disables buy priest button depending on if there is enough currency
	Priest.canBuy();
	
	//Enable/disables buy priest button depending on if there is enough currency
	Bishop.canBuy();	

	//Enable/disables buy page button depending on if there is enough currency
	Page.canBuy();	

	//Enable/disables buy squire button depending on if there is enough currency
	Squire.canBuy();	
	
	//Enable/disables buy squire button depending on if there is enough currency
	Knight.canBuy();	
	
	//Enable/disables buy paladin button depending on if there is enough currency
	Paladin.canBuy();
	
	//Enable/disables buy Shade button depending on if there is enough currency
	Shade.canBuy();
	
	//Enable/disables buy AofJustice button depending on if there is enough currency
	Aspect.canBuy();	
	
	//Enable/disables buy Angel button depending on if there is enough currency
	Angel.canBuy();		
	
	//Enable/disables buy Sprites button depending on if there is enough currency
	Sprite.canBuy();	
	
	// End of Unit Buttons//	
};

function updateUnitPopover(){
	
	//Peasant
	if(pGoldUpgrade == true){
		Peasant.goldClickVal = 2;
	}
	Peasant.description = peasDesc + "<br> Generates " + Peasant.goldClickVal + "<img src='images/money_goldsmall.png'> per second"
	setDescription(Peasant, 'BtnPeasantDesc');
	
	
	//Lumberjack
	if(lwoodUpgrade == true){
		Lumberjack.woodClickVal = 2;
	}
	Lumberjack.description = lumberjackDesc + "<br> Generates " + Lumberjack.woodClickVal + "<img src = 'images/woodsmall.png'> per second"
	setDescription(Lumberjack, 'BtnLumberjackDesc');
	
	//Miner
	var tempMinerDesc = minerDesc
	
	tempMinerDesc = tempMinerDesc + "<br> Generates " + Miner.ironClickVal + "<img src='images/ironsmall.png'> per second"
	
	if(mPanningUpgrade == true){
		Miner.goldClickVal = 1;
		tempMinerDesc = tempMinerDesc + "<br> Generates " + Miner.goldClickVal + "<img src='images/money_goldsmall.png'> per second"
	}
	if(mSilverUpgrade == true){
		Miner.silverClickVal = 0.5;
		tempMinerDesc = tempMinerDesc + "<br> Generates " + Miner.silverClickVal + "<img src = 'images/silverOresmall.png'> per second"
	}
	Miner.description = tempMinerDesc;
	setDescription(Miner, 'BtnMinerDesc');
	
//	setDescription(Page, 'BtnPageDesc');
//	setDescription(Squire, 'BtnSquireDesc');
//	setDescription(Knight, 'BtnKnightDesc');

	//Paladin
	if(paladinWepUpgrade == true){
		Paladin.soulsClickVal = 2;
		Paladin.spiritPower = 10;
	}
	Paladin.description = paladinDesc + "<br> Provides <img src = 'images/armsmall.png'> " + Paladin.armyPower + " army strength. <br>Provides <img src = 'images/armsmall.png'> " + Paladin.spiritPower + " spiritual strength. <br>Generates " + Paladin.soulsClickVal + " <img src = 'images/soulssmall.png'> per second."
	setDescription(Paladin, 'BtnPaladinDesc')
	
	//Acolyte
	Acolyte.description = acolyteDesc + "<br> Generates "+ Acolyte.faithClickVal +" <img src = 'images/faithsmall.png'> per second"
	setDescription(Acolyte, 'BtnAcolyteDesc');
	
	//Priest
	if(prFaithUpgrade == true){
		Priest.faithClickVal = 1
	}
	Priest.description = priestDesc + "<br>Generates " + Priest.faithClickVal + " <img src = 'images/faithsmall.png'> per second";
	setDescription(Priest, 'BtnPriestDesc');
	
	//Bishop
	Bishop.description = bishopDesc + "<br> Generates " + Bishop.faithClickVal + " <img src = 'images/faithsmall.png'> per second";
	setDescription(Bishop, 'BtnBishopDesc');
	
	//Shade
	Shade.description = shadeDesc + "<br>Provides <img src = 'images/armsmall.png'> " + Shade.armyPower + "army strength. <br> Provides <img src = 'images/armsmall.png'>" + Shade.spiritPower + " spiritual strength." ;
	setDescription(Shade, 'BtnShadeDesc');
	
	//Aspect
	Aspect.description = aspectDesc + "<br> Provides <img src = 'images/armsmall.png'> " + Aspect.armyPower + " army strength. <br>Provides <img src = 'images/armsmall.png'>" + Aspect.spiritPower +
							" spiritual strength.<br> Generates " + Aspect.soulsClickVal + " <img src = 'images/soulssmall.png'> per second."
	setDescription(Aspect, 'BtnAspectDesc');
	
	//Angel
	Angel.description = angelDesc + "<br> Provides <img src = 'images/armsmall.png'> " + Angel.armyPower + " army strength. <br>Provides <img src = 'images/armsmall.png'> " +
						Angel.spiritPower + " spiritual strength.<br>Generates " + Angel.soulsClickVal + " <img src = 'images/soulssmall.png'> per second.";
	setDescription(Angel, 'BtnAngelDesc'); 
	
	//Sprite
};