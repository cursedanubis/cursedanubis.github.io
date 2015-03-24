var relicFragment = 0;

var inQuest = false;
var curQuestType = "";
var UnitOnQuest = "";
var NumUnitOnQuest = 0;
var questPercent = 0;
var spellBoostPercent;
var QuestDuration = 0;

$('#unitSelectPicker').selectpicker({
	 style: 'btn-info'
});

$('#questSelectPicker').selectpicker({
	 style: 'btn-info'
});
 
 
$("input[name='QuestUnitNumSelect']").TouchSpin({
  prefix: 'Send',
  verticalbuttons: true,
  min: 1,
  max: 100
});


var Quest = function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, htmlAlertRef, percentComplete, percentIncrement,speed){
	this.name = name;
	this.description = description;
	this.htmlBoxRef = htmlBoxRef;
	this.htmlBarRef = htmlBarRef;
	this.htmlBtnRef = htmlBtnRef;
	this.htmlAlertRef = htmlAlertRef;
	this.percentComplete = percentComplete;
	this.percentIncrement = percentIncrement;
	this.speed = speed;
	this.questSpellBoostPercent;
	var $bar = $(document.getElementById(this.htmlBarRef));
};

Quest.prototype.startQuest = function(resource){    //Generic Resource quest
	var perComplete = this.percentComplete;
	var perIncrement = this.percentIncrement;
	var alert = this.htmlAlertRef;
	var btn = this.htmlBtnRef;
	var box = this.htmlBoxRef;
	var bar = this.htmlBarRef;
	var QuestName = this.name;
	var resourceEarned = 0;
		
	inQuest = true;
	curQuestType = this.name
	document.getElementById(this.htmlBoxRef).style.display = "block";	
	$bar = $(document.getElementById(this.htmlBarRef));
	UnitOnQuest = $('#unitSelectPicker').selectpicker('val')
	NumUnitOnQuest = $('#QuestUnitNumSelect').val();		
	holdUnitforQuest();
	
	document.getElementById(btn).disabled = true;					//disables the buttons
	document.getElementById(btn).innerHTML = QuestName + " in progress!";     //Changes button text
	document.getElementById('questSelectPicker').disabled = true;  //disables picker
	document.getElementById('unitSelectPicker').disabled = true;   //disables picker
	document.getElementById('QuestUnitNumSelect').disabled = true;		//disables number select	
	
	
	var progress = setInterval(function() {
	currWidth = parseInt(this.$bar.attr('aria-valuenow'));
	maxWidth = parseInt(this.$bar.attr('aria-valuemax'));	
	QuestDuration += 1;
	
		//update the progress
		$bar.width(perComplete +'%');
		$bar.attr('aria-valuenow',perComplete);
		$bar.text(perComplete+'%');
		perComplete = perComplete + perIncrement;
		this.percentComplete = perComplete;
		questPercent = perComplete;

		//update the progress
		if(this.questSpellBoostPercent > 0){
			perComplete = perComplete + parseInt(questSpellBoostPercent);
			questSpellBoostPercent = 0
			if(perComplete > 100){
				perComplete = 100;
			}
		}		
		
	  if (currWidth >= maxWidth){
		clearInterval(progress);
		$bar.text("Complete!");
		document.getElementById(box).style.display = "none";			//Hides progress bar box
		document.getElementById(btn).innerHTML = "Send";                 //Changes button text
		document.getElementById(btn).disabled = false;					//enables the buttons
		document.getElementById('questSelectPicker').disabled = false;  //enables picker
		document.getElementById('unitSelectPicker').disabled = false;   //enables picker
		document.getElementById('QuestUnitNumSelect').disabled = false;		//enables number select

		returnUnitfromQuest();
		inQuest = false;
		$bar.width(0 +'%');
		$bar.attr('aria-valuenow',0);
		$bar.text(0+'%');	
		
		var finishString;
		resourceEarned = questCalcReward(resource, UnitOnQuest);
		
		switch(resource){
			case 'gold':
//				 resourceEarned = QuestDuration*goldpersec;
				 console.log(QuestDuration + " seconds * " + goldpersec + " = " + resourceEarned)
				 gold += resourceEarned;
				 statGoldCollected += resourceEarned;
				 statTotalGoldCollected += resourceEarned;
				 document.getElementById('gold').innerHTML = fnum(gold);
				 document.getElementById('stattotalgoldcollected').innerHTML = fnum(statTotalGoldCollected);
				 document.getElementById('statgoldcollected').innerHTML = fnum(statGoldCollected);
				 finishString = "Your units return from helping out the people in your kingdom! They bring back " + fnum(resourceEarned) + " gold to add to your coffers.";
				 document.getElementById('questFinishAlertString').innerHTML = finishString;
			break;
			
			case 'wood':
//				 resourceEarned = QuestDuration*woodpersec;
				 console.log(QuestDuration + " seconds * " + woodpersec + " = " + resourceEarned)
				 wood += resourceEarned;
				 statWoodCollected += resourceEarned;
				 statTotalWoodCollected += resourceEarned;
				 document.getElementById('wood').innerHTML = fnum(wood);
				 document.getElementById('statWoodCollected').innerHTML = fnum(statWoodCollected);
				 document.getElementById('statTotalWoodCollected').innerHTML = fnum(statTotalWoodCollected);
				 finishString = "Your units return from vanquishing a bunch of angry treants! They bring back " + fnum(resourceEarned) + " wood to add to your collection.";
				 document.getElementById('questWoodFinishAlertString').innerHTML = finishString;			
			break;
			
			case 'iron':
//				 resourceEarned = QuestDuration*ironpersec;
				 console.log(QuestDuration + " seconds * " + ironpersec + " = " + resourceEarned)
				 iron += resourceEarned;
				 statIronCollected += resourceEarned;
				 statTotalIronCollected += resourceEarned;
				 document.getElementById('iron').innerHTML = fnum(iron);
				 document.getElementById('statIronCollected').innerHTML = fnum(statIronCollected);
				 document.getElementById('statTotalIronCollected').innerHTML = fnum(statTotalIronCollected);				 
				 finishString = "Your units return from vanquishing a bunch of sturdy animated iron golems! It wasn't easy, but they bring back " + fnum(resourceEarned) + " iron to add to your collection.";
				 document.getElementById('questIronFinishAlertString').innerHTML = finishString;			
			break;

			case 'silver':
//				 resourceEarned = QuestDuration*silverpersec;
				 console.log(QuestDuration + " seconds * " + silverpersec + " = " + resourceEarned)
				 silver += resourceEarned;
				 statSilverCollected += resourceEarned;
				 statTotalSilverCollected += resourceEarned;
				 document.getElementById('silver').innerHTML = fnum(silver);
				 document.getElementById('statSilverCollected').innerHTML = fnum(statSilverCollected);
				 document.getElementById('statTotalSilverCollected').innerHTML = fnum(statTotalSilverCollected);					 
				 finishString = "Your units successfully help the the friendly sprites living in your mines. As a token of their gratitude, they send you " + fnum(resourceEarned) + " silver to add to your collection.";
				 document.getElementById('questSilverFinishAlertString').innerHTML = finishString;			
			break;

			case 'souls':
//				 resourceEarned = QuestDuration*soulspersec;
				 console.log(QuestDuration + " seconds * " + soulspersec + " = " + resourceEarned)
				 souls += resourceEarned;
				 statSoulsCollected += resourceEarned;
				 statTotalSoulsCollected += resourceEarned;
				 document.getElementById('souls').innerHTML = fnum(souls);
				 document.getElementById('statSoulsCollected').innerHTML = fnum(statSoulsCollected);
				 document.getElementById('statTotalSoulsCollected').innerHTML = fnum(statTotalSoulsCollected);				 
				 finishString = "Your units successfully help the the defeat some lesser demons plaguing the countryside. When they die, your troops are able to collect " + fnum(resourceEarned) + " souls.";
				 document.getElementById('questSoulsFinishAlertString').innerHTML = finishString;			
			break;				
			
		}
		
		document.getElementById(alert).style.display = "block";			//Displays alert related to this quest	
		scroll(alert,500);		
	  } 
	}, this.speed);
	return true;
}

function questCalcReward(type, unit){
	var unitPower = 0;
	console.log(unit);
	switch(unit){
		case 'Squire':
			unitPower = 0.05 * NumUnitOnQuest;
		break;

		case 'Knight':
			unitPower = 0.15 * NumUnitOnQuest;
		break;

		case 'Paladin':
			unitPower = 0.35 * NumUnitOnQuest;
		break;
		
	}
	
	switch(type){
		case 'gold':
			console.log(QuestDuration * unitPower * goldpersec);
			return QuestDuration * unitPower * goldpersec;
		break;
		
		case 'wood':
			console.log(QuestDuration * unitPower * woodpersec);
			return QuestDuration * unitPower * woodpersec;
		break;
		
		case 'iron':
			return QuestDuration * unitPower * ironpersec;
		break;
		
		case 'silver':
			return QuestDuration * unitPower * silverpersec;
		break;
		
		case 'souls':
			return QuestDuration * unitPower * soulspersec;
		break;
	}
};

function loadQuest(QuestName, percent, unit, numUnit){
	questSpellBoost(percent);
	document.getElementById('unitSelectPicker').value = unit;		//Type of unit sent
	document.getElementById('QuestUnitNumSelect').value = numUnit;		//Number of units sent
	document.getElementById('questSelectPicker').value = QuestName; //Quest type

	$('.selectpicker').selectpicker('refresh');
	
	switch(QuestName){
		case 'Help the People':
			goldQuest.startQuest('gold');
			UnitOnQuest = unit;
		break;	

		case 'Slay Treants':
			woodQuest.startQuest('wood');
			UnitOnQuest = unit;
		break;	

		case 'Slay Iron Golems':
			ironQuest.startQuest('iron');
			UnitOnQuest = unit;
		break;	
		
		case 'Aid the Sprites':
			silverQuest.startQuest('silver');
			UnitOnQuest = unit;
		break;

		case 'Hunt lesser demons':
			soulsQuest.startQuest('souls');
			UnitOnQuest = unit;
		break;		
		
		case 'Relic Hunt':
			RelicHunt.startQuest();
			UnitOnQuest = unit;
		break;		
	}
	
};

function btnSendQuest(){			

	 if (checkQuestSelection() == true){
		 var string = "You send " + $('#QuestUnitNumSelect').val() + " " + $('#unitSelectPicker').selectpicker('val');
		 if($('#QuestUnitNumSelect').val() > 1){
			 string = string + "s";
		 }
		 string = string + " out on the quest '" + $('#questSelectPicker').selectpicker('val') + "'";
	  document.getElementById('questAlertString').innerHTML = string;
	  document.getElementById('sendQuestAlert').style.display = "block";
	  
		//Dismisses Alert
		var ticker = 0 ;
		var clearAlert = setInterval(function() {
			ticker = ticker + 1;   
		  if (ticker == 5){
			clearInterval(clearAlert);
			if(document.getElementById('sendQuestAlert').style.display == "block"){
				document.getElementById("sendQuestAlert").style.display = "none";
			}	
		  }
		}, 1000);	
	    //End Dismisses Alert	  
	  
	  switch($('#questSelectPicker').selectpicker('val'))
	  {
		 case 'Help the People':
			console.log('Help the People');
			goldQuest.startQuest('gold');
		 break;

		 case 'Slay Treants':
			console.log('Slay Treants');
			woodQuest.startQuest('wood');
		 break;
		 
		 case 'Slay Iron Golems':
			console.log('Slay Iron Golems');
			ironQuest.startQuest('iron');
		 break;

		 case 'Aid the Sprites':
			console.log('Aid the Sprites');
			silverQuest.startQuest('silver');
		 break;	 
		 
		 case 'Hunt lesser demons':
			console.log('Hunt lesser demons');
			soulsQuest.startQuest('souls');
		 break;		 
		 
		 case 'Relic Hunt':
			if($('#unitSelectPicker').selectpicker('val') == 'Paladin')
			{
					RelicHunt.startQuest();
			}
			else{
				alert("You can only send Paladins relic hunting!");
			}
		 break;
		 
		 case 'Demon Hunt':
			console.log('Demon hunt');
		 break;
	  }
	 }
};

function checkQuestSelection(){
	
	if($('.selectpicker').selectpicker('val') == "Paladin"){
		if(Paladin.number < $('#QuestUnitNumSelect').val()){
			alert("You do not have enough Paladins for this!");
			$('#QuestUnitNumSelect').attr('val', Paladin.number);
			return false;
		}
	}
	
	else if ($('.selectpicker').selectpicker('val') == "Knight"){
		if(Knight.number < $('#QuestUnitNumSelect').val()){
			alert("You do not have enough Knights for this!");
			return false;
		}
	}
	else if ($('.selectpicker').selectpicker('val') == "Squire"){
		if(Squire.number < $('#QuestUnitNumSelect').val()){
			alert("You do not have enough Squires for this!");
			return false;
		}
	}
	return true;
}

function checkQuestGoButton(){
	if(inQuest == false){
		if($('#unitSelectPicker').selectpicker('val') == "" || $('#questSelectPicker').selectpicker('val') == "" ){
			document.getElementById('btnQuestGo').disabled = true;
		}
		else
		{
			document.getElementById('btnQuestGo').disabled = false;
		}		
	}
	else
	{
		document.getElementById('btnQuestGo').disabled = false;
	}
}

function QuestCheckUnitOptions(){
	if(Paladin.number == 0){
		$('#PaladinOption').prop("disabled", true);
		$('.selectpicker').selectpicker('refresh');
	}
	else{
		$('#PaladinOption').prop("disabled", false);
		$('.selectpicker').selectpicker('refresh');
	}
	
	if(Knight.number == 0){
		$('#KnightOption').prop("disabled", true);
		$('.selectpicker').selectpicker('refresh');
	}
	else{
		$('#KnightOption').prop("disabled", false);
		$('.selectpicker').selectpicker('refresh');
	}
	if(Squire.number == 0){
		$('#SquireOption').prop("disabled", true);
		$('.selectpicker').selectpicker('refresh');
	}
	else{
		$('#SquireOption').prop("disabled", false);
		$('.selectpicker').selectpicker('refresh');
	}	
}

var goldQuestDesc = "";
var goldQuest = new Quest('Help the People', goldQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','goldQuestFinishAlert',0,1,500);

var woodQuestDesc = "";
var woodQuest = new Quest('Slay Treants', woodQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','woodQuestFinishAlert',0,1,500);

var ironQuestDesc = "";
var ironQuest = new Quest('Slay Iron Golems', ironQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','ironQuestFinishAlert',0,1,500);

var silverQuestDesc = "";
var silverQuest = new Quest('Aid the Sprites', silverQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','silverQuestFinishAlert',0,1,500);

var soulsQuestDesc = "";
var soulsQuest = new Quest('Hunt lesser demons', soulsQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','soulsQuestFinishAlert',0,1,500);

//var Quest = function(name, description, htmlBoxRef, htmlBarRef, htmlAlertRef, percentComplete, percentIncrement,speed){
var relicHuntDesc = "";
var RelicHunt = new Quest('Relic Hunt', relicHuntDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','goblinDefeatAlert',0,1,500);
//setEnemyDescription(Goblins, 'btnDescGoblins');

RelicHunt.startQuest = function(){
		var perComplete = this.percentComplete;
		var perIncrement = this.percentIncrement;
		var alert = this.htmlAlertRef;
		var btn = this.htmlBtnRef;
		var box = this.htmlBoxRef;
		var bar = this.htmlBarRef;
		var QuestName = this.name;
		var foundRelic = false;
			
		inQuest = true;
		curQuestType = this.name
		document.getElementById(this.htmlBoxRef).style.display = "block";	
		$bar = $(document.getElementById(this.htmlBarRef));
		
		UnitOnQuest = $('#unitSelectPicker').selectpicker('val');
		NumUnitOnQuest = $('#QuestUnitNumSelect').val();		
		holdUnitforQuest();
		
		var progress = setInterval(function() {
		currWidth = parseInt(this.$bar.attr('aria-valuenow'));
		maxWidth = parseInt(this.$bar.attr('aria-valuemax'));	
				
		//update the progress
		$bar.width(perComplete +'%');
		$bar.attr('aria-valuenow',perComplete);
		$bar.text(perComplete+'%');
		perComplete = perComplete + perIncrement;
		this.percentComplete = perComplete;
		questPercent = perComplete;

		if(perComplete%50 == 0){
			rollForFragment();
		}	
		document.getElementById(btn).disabled = true;					//disables the buttons
		document.getElementById(btn).innerHTML = QuestName + " in progress!";     //Changes button text
		document.getElementById('questSelectPicker').disabled = true;  //disables picker
		document.getElementById('unitSelectPicker').disabled = true;   //disables picker
		document.getElementById('QuestUnitNumSelect').disabled = true;		//disables number select

		//update the progress
		if(this.questSpellBoostPercent > 0){
			perComplete = perComplete + parseInt(questSpellBoostPercent);
			questSpellBoostPercent = 0
			if(perComplete > 100){
				perComplete = 100;
			}
		}		
		
		if (currWidth >= maxWidth){
			clearInterval(progress);
			$bar.text("Complete!");
			document.getElementById(box).style.display = "none";			//Hides progress bar box
			document.getElementById(btn).innerHTML = "Send";                 //Changes button text
			document.getElementById(btn).disabled = false;					//enables the buttons
			document.getElementById('questSelectPicker').disabled = false;  //enables picker
			document.getElementById('unitSelectPicker').disabled = false;   //enables picker
			document.getElementById('QuestUnitNumSelect').disabled = false;		//enables number select
	//		document.getElementById(alert).style.display = "block";			//Displays alert related to this battle
	//		scroll(alert,500);
			returnUnitfromQuest();
			inQuest = false;
			
			$bar.width(0 +'%');
			$bar.attr('aria-valuenow',0);
			$bar.text(0+'%');
		} 
	}, this.speed);
	return true;
}

function rollForFragment(){
	var unitType = $('#unitSelectPicker').selectpicker('val')
	var numUnits = $('#QuestUnitNumSelect').val();
	var percentFind = 0;
	var multiplier = 1.5
	var rand = Math.floor(Math.random()*100) + 1;
	switch(unitType){
		case "Paladin":
			for (i = 0; i < numUnits; i++) { 
				percentFind += multiplier;
				multiplier *= .975;
			}
		break;
		default:
	}
	console.log(percentFind + '% chance to find a relic fragment');
	if(percentFind >= rand){
		relicFragment += 1;
		alert("Relic fragment found!");		
	}
	else{
		console.log("No Relic found");
	}
}

function holdUnitforQuest(){
	switch(UnitOnQuest){
		case "Paladin":
			Paladin.number -= NumUnitOnQuest;
			Paladin.totalArmyPower();
			Paladin.totalSpiritPower();
			document.getElementById('paladins').innerHTML = Paladin.number;
			calculateBattlePower();
			calculateSpiritPower();	
			console.log("taking paladins");			
		break;
		
		case "Knight":
			Knight.number -= parseInt(NumUnitOnQuest);
			Knight.totalArmyPower();
			document.getElementById('knights').innerHTML = Knight.number;	
			calculateBattlePower();
			console.log("taking knights");		
		break;
		
		case "Squire":
			Squire.number -= parseInt(NumUnitOnQuest);
			Squire.totalArmyPower();
			document.getElementById('squire').innerHTML = Squire.number;	
			calculateBattlePower();
			console.log("taking Squires");		
		break;		
	}
};

function returnUnitfromQuest(){
	switch(UnitOnQuest){
		case "Paladin":
			Paladin.number += parseInt(NumUnitOnQuest);
			Paladin.totalArmyPower();
			Paladin.totalSpiritPower();
			document.getElementById('paladins').innerHTML = Paladin.number;
			calculateBattlePower();
			calculateSpiritPower();
			console.log("returned paladins");
		break;
		
		case "Knight":
			Knight.number += parseInt(NumUnitOnQuest);
			Knight.totalArmyPower();
			document.getElementById('knights').innerHTML = Knight.number;	
			calculateBattlePower();
			console.log("returned knights");
		break;
		
		case "Squire":
			Squire.number += parseInt(NumUnitOnQuest);
			Squire.totalArmyPower();
			document.getElementById('squire').innerHTML = Squire.number;	
			calculateBattlePower();
			console.log("returned Squires");
		break;		
	}
};

$(function() {
  $('#unitSelectPicker').on('change', function(){
	var newMax;
	switch($('#unitSelectPicker').selectpicker('val')){
		case 'Paladin':
			newMax = Paladin.number;
		break;
		
		case 'Knight':
			newMax = Knight.number;
		break;
		
		case 'Squire':
			newMax = Squire.number;
		break;
		
		default:
			newMax = 50;
	}
	
//	console.log(newMax);
	if(newMax > document.getElementById('QuestUnitNumSelect').value){
		document.getElementById('QuestUnitNumSelect').value = newMax;
	}
	$("input").trigger("touchspin.updatesettings", {max: newMax});
  });
  
});

$(function() {
  $('#questSelectPicker').on('change', function(){
	switch($('#questSelectPicker').selectpicker('val')){
		case 'Relic Hunt':									//Only Paladins or higher can go on Relic Hunts
			$('#KnightOption').prop("disabled", true);
			$('#SquireOption').prop("disabled", true);
			$('.selectpicker').selectpicker('refresh');
		break;
		
		case 'Demon Hunt':
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			$('.selectpicker').selectpicker('refresh');				
		break;
		
		case 'Slay Treants':
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			$('.selectpicker').selectpicker('refresh');				
		break;
		
		case 'Help the People':
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			$('.selectpicker').selectpicker('refresh');				
		break;		
		
		default:
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			$('.selectpicker').selectpicker('refresh');		
	}
  });
});