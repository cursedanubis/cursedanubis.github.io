//HW Relics
var relicFragment = 0;

var Relic = function(name, htmlRelicCost, htmlGoldCost, htmlIronCost, htmlSilverCost, htmlFaithCost, htmlSoulCost, htmlBuyBtn, 
					goldCost, ironCost, silverCost, faithCost, soulCost, description){
	this.name = name;
	this.htmlRelicCost = htmlRelicCost;
	this.htmlGoldCost = htmlGoldCost;
	this.htmlIronCost = htmlIronCost;
	this.htmlSilverCost = htmlSilverCost;
	this.htmlFaithCost = htmlFaithCost;
	this.htmlSoulCost = htmlSoulCost;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.description = description;
}