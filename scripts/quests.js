var inQuest = false;
var curQuestType = "";
var questBoost = 0;

$('#unitSelectPicker').selectpicker({
	 style: 'btn-info'
});

$('#questSelectPicker').selectpicker({
	 style: 'btn-success'
});
 
 
$("input[name='QuestNumSelect']").TouchSpin({
  prefix: 'Send',
  verticalbuttons: true,
  min: 1,
  max: 50
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
	var $bar = $(document.getElementById(this.htmlBarRef));
};

Quest.prototype.go = function(){
	
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
	var progress = setInterval(function() {
	currWidth = parseInt(this.$bar.attr('aria-valuenow'));
	maxWidth = parseInt(this.$bar.attr('aria-valuemax'));	
			
		//update the progress
	
		$bar.width(perComplete +'%');
		$bar.attr('aria-valuenow',perComplete);
		$bar.text(perComplete+'%');
		perComplete = perComplete + perIncrement;
		this.percentComplete = perComplete;
		battlePercent = perComplete;
		
		document.getElementById(btn).disabled = true;					//disables the buttons
		document.getElementById(btn).innerHTML = QuestName + " in progress!";     //Changes button text
		
	  if (currWidth >= maxWidth){
		clearInterval(progress);
			$bar.text("Complete!");
		document.getElementById(box).style.display = "none";			//Hides progress bar box
		document.getElementById(btn).innerHTML = "Send";                 //Changes button text
		document.getElementById(btn).disabled = false;					//disables the buttons
//		document.getElementById(alert).style.display = "block";			//Displays alert related to this battle
//		scroll(alert,500);
		inQuest = false;
//		setDefeatEvents(EnemyName);
	  } 
	}, this.speed);
	return true;
}



function returnPickerSelection(){
//	console.log($('#unitSelectPicker').selectpicker('selectAll').selected);

 if (checkQuestSelection() == true){
	 var string = "You send " + $('#QuestNumSelect').val() + " " + $('#unitSelectPicker').selectpicker('val');
	 if($('#QuestNumSelect').val() > 1){
		 string = string + "s";
	 }
	 string = string + " out on the quest '" + $('#questSelectPicker').selectpicker('val') + "'";

  alert(string);
  RelicHunt.go();
  console.log($('#questSelectPicker').selectpicker('val'));
  console.log($('#unitSelectPicker').selectpicker('val'));
  console.log($('#QuestNumSelect').val()); 
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
var relicHuntDesc = "Goblin description placeholder <br><br> You should probably stop them.";
var RelicHunt = new Quest('Relic Hunt', relicHuntDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','goblinDefeatAlert',0,1,500);
//setEnemyDescription(Goblins, 'btnDescGoblins');