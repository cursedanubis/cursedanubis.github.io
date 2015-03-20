var relicFragment = 0;

var inQuest = false;
var curQuestType = "";
var UnitOnQuest = "";
var NumUnitOnQuest = 0;
var questPercent = 0;
var spellBoostPercent;

$('#unitSelectPicker').selectpicker({
	 style: 'btn-info'
});

$('#questSelectPicker').selectpicker({
	 style: 'btn-info'
});
 
 
$("input[name='QuestNumSelect']").TouchSpin({
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

Quest.prototype.startQuest = function(){
	var perComplete = this.percentComplete;
	var perIncrement = this.percentIncrement;
	var alert = this.htmlAlertRef;
	var btn = this.htmlBtnRef;
	var box = this.htmlBoxRef;
	var bar = this.htmlBarRef;
	var QuestName = this.name;
		
	inQuest = true;
	curQuestType = this.name
	document.getElementById(this.htmlBoxRef).style.display = "block";	
	$bar = $(document.getElementById(this.htmlBarRef));
	UnitOnQuest = $('#unitSelectPicker').selectpicker('val')
	NumUnitOnQuest = $('#QuestNumSelect').val();		
	holdUnitforQuest();
	
	document.getElementById(btn).disabled = true;					//disables the buttons
	document.getElementById(btn).innerHTML = QuestName + " in progress!";     //Changes button text
	document.getElementById('questSelectPicker').disabled = true;  //disables picker
	document.getElementById('unitSelectPicker').disabled = true;   //disables picker
	document.getElementById('QuestNumSelect').disabled = true;		//disables number select	
	
	
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
		document.getElementById('QuestNumSelect').disabled = false;		//enables number select
//		document.getElementById(alert).style.display = "block";			//Displays alert related to this battle
//		scroll(alert,500);
		returnUnitfromQuest();
		inQuest = false;
		$bar.width(0 +'%');
		$bar.attr('aria-valuenow',0);
		$bar.text(0+'%');		
		
//		setDefeatEvents(EnemyName);
	  } 
	}, this.speed);
	return true;
}

function loadQuest(QuestName, percent, unit, numUnit){
	questSpellBoost(percent);
	document.getElementById('unitSelectPicker').value = unit;		//Type of unit sent
	document.getElementById('QuestNumSelect').value = numUnit;		//Number of units sent
	document.getElementById('questSelectPicker').value = QuestName; //Quest type

	$('.selectpicker').selectpicker('refresh');
	
	switch(QuestName){
		case 'Relic Hunt':
			RelicHunt.startQuest();
		break;
	}
	
};

function returnPickerSelection(){			//Need to change function name to something more intuitive

	 if (checkQuestSelection() == true){
		 var string = "You send " + $('#QuestNumSelect').val() + " " + $('#unitSelectPicker').selectpicker('val');
		 if($('#QuestNumSelect').val() > 1){
			 string = string + "s";
		 }
		 string = string + " out on the quest '" + $('#questSelectPicker').selectpicker('val') + "'";
	  document.getElementById('questAlertString').innerHTML = string;
	  document.getElementById('sendQuestAlert').style.display = "block";
	  
	  switch($('#questSelectPicker').selectpicker('val'))
	  {
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
		 
		 case 'Slay Treants':
			console.log('Slay Treants');
		 break;
		 
		 case 'Help the People':
			console.log('Help the People');
		 break;
	  }
	 }
};

function checkQuestSelection(){
	
	if($('.selectpicker').selectpicker('val') == "Paladin"){
		if(Paladin.number < $('#QuestNumSelect').val()){
			alert("You do not have enough Paladins for this!");
			$('#QuestNumSelect').attr('val', Paladin.number);
			return false;
		}
	}
	
	else if ($('.selectpicker').selectpicker('val') == "Knight"){
		if(Knight.number < $('#QuestNumSelect').val()){
			alert("You do not have enough Knights for this!");
			return false;
		}
	}
	else if ($('.selectpicker').selectpicker('val') == "Squire"){
		if(Squire.number < $('#QuestNumSelect').val()){
			alert("You do not have enough Squires for this!");
			return false;
		}
	}
	return true;
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
		
		UnitOnQuest = $('#unitSelectPicker').selectpicker('val')
		NumUnitOnQuest = $('#QuestNumSelect').val();		
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
		document.getElementById('QuestNumSelect').disabled = true;		//disables number select

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
			document.getElementById('QuestNumSelect').disabled = false;		//enables number select
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
	var numUnits = $('#QuestNumSelect').val();
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
	if(newMax > document.getElementById('QuestNumSelect').value){
		document.getElementById('QuestNumSelect').value = newMax;
	}
	$("input").trigger("touchspin.updatesettings", {max: newMax});
  });
  
});