//Save and Loading Script for HW //

	function saveCookie(){
		if(typeof(Storage) !== "undefined"){
		//Currency variables
		localStorage.setItem("gold",gold);
		localStorage.setItem("wood", wood);
		localStorage.setItem("paper",paper);
		localStorage.setItem("iron",iron);
		localStorage.setItem("silver",silver);			
		localStorage.setItem("faith",faith);
		localStorage.setItem("souls",souls);
		localStorage.setItem("tomes",tomes);
		localStorage.setItem("mana",mana);
		localStorage.setItem("goldStolen",goldStolen);
		localStorage.setItem("totalTimePlayed",totalTimePlayed);
		
		//Unit variables
 		localStorage.setItem("peasants",Peasant.number - tavernpeasants);
		localStorage.setItem("lumberjacks", Lumberjack.number - tavernlumberjacks);
		localStorage.setItem("miners",Miner.number - tavernminers);
		localStorage.setItem("personPage",Page.number);
		localStorage.setItem("squires",Squire.number);
		localStorage.setItem("knights",Knight.number);
		localStorage.setItem("acolytes",Acolyte.number);
		localStorage.setItem("priests",Priest.number);
		localStorage.setItem("bishops", Bishop.number);
		localStorage.setItem("paladins",Paladin.number); 
		localStorage.setItem("shades", Shade.number);
		localStorage.setItem("aspects", Aspect.number);
		localStorage.setItem("angels", Angel.number);
		
		//Building Variables
		localStorage.setItem("taverns", Tavern.number);
		localStorage.setItem("tavernpeasants",tavernpeasants);
		localStorage.setItem("tavernminers",tavernminers);
		localStorage.setItem("tavernlumberjacks",tavernlumberjacks);
		localStorage.setItem("papermills", PaperMill.number)
		localStorage.setItem("papermillstatus", PaperMill.status)
		localStorage.setItem("papermillnumon",PaperMill.numberOn)
		
		//Building flags
		localStorage.setItem("lumbermillOpened",lumbermillOpened);
		localStorage.setItem("minesOpened",minesOpened);
		localStorage.setItem("cathedralOpened",cathedralOpened);
		localStorage.setItem("barracksOpened",barracksOpened);
		localStorage.setItem("towerUnlocked",towerUnlocked);
		localStorage.setItem("towerBuilt",towerBuilt);
		
		//Battle flags
		localStorage.setItem("defeatedGoblins",defeatedGoblins);
		localStorage.setItem("defeatedBandits",defeatedBandits);
		localStorage.setItem("defeatedHermit",defeatedHermit);
		localStorage.setItem("defeatedOgre",defeatedOgre); 
		localStorage.setItem("defeatedHhounds",defeatedHhounds);
		localStorage.setItem("defeatedPixie",defeatedPixie);
		localStorage.setItem("defeatedArmor",defeatedArmor);
		localStorage.setItem("defeatedOoze",defeatedOoze);	
		localStorage.setItem("defeatedArchmage",defeatedArchmage);
		localStorage.setItem("defeatedSuccubus",defeatedSuccubus);
		localStorage.setItem("defeatedUArmy", defeatedUArmy);
		localStorage.setItem("defeatedNecromancer", defeatedNecromancer);
		localStorage.setItem("peasantsKilled",peasantsKilled);
		localStorage.setItem("minersKilled", minersKilled);
		localStorage.setItem("ironAbsorbed",ironAbsorbed);
		localStorage.setItem("silverAbsorbed",silverAbsorbed);
		localStorage.setItem("unitsSeduced", unitsSeduced);
		localStorage.setItem("UARevivedCount",UARevivedCount);
		
		//Upgradeflags
		localStorage.setItem("pGoldUpgrade",pGoldUpgrade);
		localStorage.setItem("pGoldClickUpgrade",pGoldClickUpgrade);
		localStorage.setItem("pGoldClickUpgrade2",pGoldClickUpgrade2);
		localStorage.setItem("lwoodUpgrade",lwoodUpgrade);
		localStorage.setItem("lwoodClickUpgrade",lwoodClickUpgrade);
		localStorage.setItem("mPanningUpgrade",mPanningUpgrade);
		localStorage.setItem("mSilverUpgrade",mSilverUpgrade);
		localStorage.setItem("prFaithUpgrade",prFaithUpgrade);
		localStorage.setItem("squiresUnlocked",squiresUnlocked);
		localStorage.setItem("knightsUnlocked",knightsUnlocked);
		localStorage.setItem("angelsUnlocked", angelsUnlocked);
		localStorage.setItem("tomesUnlocked",tomesUnlocked);
		localStorage.setItem("PmillEffUpgr", PmillEffUpgr);
		localStorage.setItem("PmillEffUpgr2",PmillEffUpgr2);
		localStorage.setItem("paladinWepUpgrade",paladinWepUpgrade);
		localStorage.setItem("tavernUpgrade",tavernUpgrade);
		localStorage.setItem("tavernUpgrade2", tavernUpgrade2);
		
		//MiscFlags
		localStorage.setItem("faithDonated", faithDonated);
		localStorage.setItem("lastPage",lastPage);
		localStorage.setItem("inbattle",inbattle);
		localStorage.setItem("curBattling",curBattling);
		localStorage.setItem("battlePercent", battlePercent);
		
		document.getElementById('saveAlert').style.display = "block";  //Displays saved alert
		
		//Dismisses Save Alert
		var ticker = 0 ;
		var clearSave = setInterval(function() {
			ticker = ticker + 1;   
		  if (ticker == 5){
			clearInterval(clearSave);
			if(document.getElementById('saveAlert').style.display == "block"){
				document.getElementById("saveAlert").style.display = "none";
			}	
		  }
		}, 1000);	
	    //End Dismisses Save Alert
	}
	else{
		alert("Sorry! Your web browser does not support local saving. Please try a newer version of your browser.")
	}
};
	
	function deleteCookie(){
		localStorage.clear();
		console.log("Your cookies have been cleared.")
	};
	
	function loadCookie(){
	//	console.debug($.cookie("gold"));
		if(localStorage.gold != null){
			gold = parseInt(localStorage.gold);
			document.getElementById("gold").innerHTML = fnum(gold);
		}
		
		if(localStorage.goldStolen != null){
			goldStolen = parseInt(localStorage.goldStolen);
			document.getElementById("goldStolen").innerHTML = goldStolen;
		}
		
		if(localStorage.wood != null){
			wood = parseInt(localStorage.wood);
			document.getElementById("wood").innerHTML = fnum(wood);
		}	

		if(localStorage.paper != null){
			paper = parseInt(localStorage.paper);
			document.getElementById("paper").innerHTML = fnum(paper);
		}			
		
		if(localStorage.iron != null){
			iron = parseInt(localStorage.iron);
			document.getElementById("iron").innerHTML = fnum(iron);
		}

		if(localStorage.silver != null){
			silver = parseInt(localStorage.silver);
			document.getElementById("silver").innerHTML = fnum(silver);
		}		
		
		if(localStorage.faith != null){
			faith = parseInt(localStorage.faith);
			document.getElementById("faith").innerHTML = fnum(faith);
		}			
		if(localStorage.souls != null){
			souls = parseInt(localStorage.souls);
			document.getElementById("souls").innerHTML = fnum(souls);
		}		
		if(localStorage.tomes != null){
			tomes = parseInt(localStorage.tomes);
			document.getElementById("tomes").innerHTML = fnum(tomes);
		}	
		if(localStorage.mana != null){
			mana = parseInt(localStorage.mana);
			document.getElementById("mana").innerHTML = fnum(mana);
		}		
		if(localStorage.totalTimePlayed != null){
			totalTimePlayed = parseInt(localStorage.totalTimePlayed);
		}
		
		if(localStorage.peasants != null){
			Peasant.number = parseInt(localStorage.peasants);
			document.getElementById("peasants").innerHTML = Peasant.number;
		}
		if(localStorage.lumberjacks != null){
			Lumberjack.number = parseInt(localStorage.lumberjacks);
			document.getElementById("lumberjacks").innerHTML = Lumberjack.number;
		}			
		if(localStorage.miners != null){
			Miner.number = parseInt(localStorage.miners);
			document.getElementById("miners").innerHTML = Miner.number;
		}
		if(localStorage.personPage != null){
			Page.number = parseInt(localStorage.personPage);
			document.getElementById("personPage").innerHTML = Page.number;
		}
		if(localStorage.squires != null){
			Squire.number = parseInt(localStorage.squires);
			document.getElementById("squires").innerHTML = Squire.number;
		}
		if(localStorage.knights != null){
			Knight.number = parseInt(localStorage.knights);
			document.getElementById("knights").innerHTML = Knight.number;
		}
		if(localStorage.lumbermillOpened != null){
			var myBool = localStorage.lumbermillOpened == "true"
			if(myBool == true){
				lumbermillOpened = true
				document.getElementById('WoodcuttingTab').style.display = "block";
			}
		}			
		if(localStorage.minesOpened != null){
			var myBool = localStorage.minesOpened == "true"
			if(myBool == true){
				minesOpened = true
				document.getElementById('irondiv').style.display = "block";
				document.getElementById("Mining").style.display = "block";
			}
		}			
		if(localStorage.tavernpeasants != null){
			tavernpeasants = parseInt(localStorage.tavernpeasants);
			Peasant.number = Peasant.number + tavernpeasants;
			document.getElementById("tavernpeasants").innerHTML = tavernpeasants;
			document.getElementById("peasants").innerHTML = Peasant.number;
		}		

		if(localStorage.tavernminers != null){
			tavernminers = parseInt(localStorage.tavernminers);
			Miner.number = Miner.number + tavernminers;
			document.getElementById("tavernminers").innerHTML = tavernminers;
			document.getElementById("miners").innerHTML = Miner.number;
		}			
		if(localStorage.tavernlumberjacks != null){
			tavernlumberjacks = parseInt(localStorage.tavernlumberjacks);
			Lumberjack.number = Lumberjack.number + tavernlumberjacks;
			document.getElementById("tavernlumberjacks").innerHTML = tavernlumberjacks;
			document.getElementById("lumberjacks").innerHTML = Lumberjack.number;
		}		
		if(localStorage.taverns != null){
			Tavern.number = parseInt(localStorage.taverns);
			document.getElementById("taverns").innerHTML = Tavern.number;
		}
		
		if(localStorage.papermills != null){
			PaperMill.number = parseInt(localStorage.papermills);
			document.getElementById("papermills").innerHTML = PaperMill.number;
			if(localStorage.papermillstatus != null){
				PaperMill.status = localStorage.papermillstatus;
			}
			if(localStorage.papermillnumon != null){
				PaperMill.numberOn = parseInt(localStorage.papermillnumon);
			}
		}		
		
		if(localStorage.barracksOpened != null){
			var myBool = localStorage.barracksOpened == "true"
			if(myBool == true){
				barracksOpened = true
				document.getElementById('Barracks').style.display = "block";
				document.getElementById('BarracksMenu').style.display = "block";
				document.getElementById('armystrdiv').style.display = "block";
			}
		}			
		
		if(localStorage.cathedralOpened != null){
			var myBool = (localStorage.cathedralOpened == "true")
			if(myBool == true){
				cathedralOpened = true
				document.getElementById('Cathedral').style.display = "block";
				document.getElementById('FaithMenu').style.display = "block";
				document.getElementById('faithdiv').style.display = "block";
			}
		}

		if(localStorage.towerUnlocked != null){
			var myBool = (localStorage.towerUnlocked == "true")
			if(myBool == true){
				towerUnlocked = true
				document.getElementById('buildTowerTab').style.display = "block";
			}
		}

		if(localStorage.towerBuilt != null){
			var myBool = (localStorage.towerBuilt == "true")
			if(myBool == true){
				towerBuilt = true
				document.getElementById('Magic').style.display = "block";
				document.getElementById('manadiv').style.display = "block";
				document.getElementById('TowerMenu').style.display = "block";
			}
		}	

		if(localStorage.acolytes != null){
			 Acolyte.number = parseInt(localStorage.acolytes);
			document.getElementById("acolytes").innerHTML = Acolyte.number;
		}			
		
		if(localStorage.priests != null){
			 Priest.number = parseInt(localStorage.priests);
			document.getElementById("priests").innerHTML = Priest.number;
		}

		if(localStorage.bishops != null){
			 Bishop.number = parseInt(localStorage.bishops);
			document.getElementById("bishops").innerHTML = Bishop.number;
		}			
		
		if(localStorage.paladins != null){
			Paladin.number = parseInt(localStorage.paladins);
			document.getElementById("paladins").innerHTML = Paladin.number;
		}

		if(localStorage.shades != null){
			Shade.number = parseInt(localStorage.shades);
			document.getElementById("shades").innerHTML = Shade.number;
		}

		if(localStorage.aspects != null){
			Aspect.number = parseInt(localStorage.aspects);
			document.getElementById("aspects").innerHTML = Aspect.number;
		}

		if(localStorage.angels != null){
			Angel.number = parseInt(localStorage.angels);
			document.getElementById("angels").innerHTML = Angel.number;
		}			
		
		if(localStorage.pGoldUpgrade != null){
			var myBool = (localStorage.pGoldUpgrade == "true")
			if(myBool == true){
				pGoldUpgrade = true;
				document.getElementById("btnPeasantUpgrade1").disabled = true;
				document.getElementById("btnPeasantUpgrade1").innerHTML = "Peasant Power Bought";
			}
		}
		
		if(localStorage.pGoldClickUpgrade != null){
			var myBool = (localStorage.pGoldClickUpgrade == "true")
			if(myBool == true){
				pGoldClickUpgrade = true;
				document.getElementById("clickGoldUpgrade").disabled = true;
				document.getElementById("clickGoldUpgrade").innerHTML = "Click Upgrade Bought";
			}
		}

		if(localStorage.pGoldClickUpgrade2 != null){
			var myBool = (localStorage.pGoldClickUpgrade2 == "true")
			if(myBool == true){
				pGoldClickUpgrade2 = true;
				document.getElementById("clickGoldUpgrade2").disabled = true;
				document.getElementById("clickGoldUpgrade2").innerHTML = "Click Upgrade 2 Bought";
			}
		}
		if(localStorage.lwoodUpgrade != null){
			var myBool = (localStorage.lwoodUpgrade == "true")
			if(myBool == true){
				lwoodUpgrade = true;
				document.getElementById("btnljackUpgrade1").disabled = true;
				document.getElementById("btnljackUpgrade1").innerHTML = "Reinforced Axes Bought";
			}
		}				
		
		if(localStorage.lwoodClickUpgrade != null){
			var myBool = (localStorage.lwoodClickUpgrade == "true")
			if(myBool == true){
				lwoodClickUpgrade = true;
				document.getElementById("btnljackUpgrade2").disabled = true;
				document.getElementById("btnljackUpgrade2").innerHTML = "Phantom Axes Bought";
			}
		}
		
		
		if(localStorage.mSilverUpgrade != null){
			var myBool = (localStorage.mSilverUpgrade == "true")
			if(myBool == true){
				mSilverUpgrade = true;
				document.getElementById('silverdiv').style.display = "block";
				document.getElementById("btnminerUpgrade2").innerHTML = "Learned Silver Studies";
				document.getElementById("btnminerUpgrade2").disabled = true;				
			}
		}		
		
		if(localStorage.mPanningUpgrade != null){
			var myBool = (localStorage.mPanningUpgrade == "true")
			if(myBool == true){
				mPanningUpgrade = true;
				document.getElementById("btnminerUpgrade1").innerHTML = "Learn Panning Bought";
				document.getElementById("btnminerUpgrade1").disabled = true;
			}
		}
		if(localStorage.prFaithUpgrade != null){
			var myBool = (localStorage.prFaithUpgrade == "true")
			if(myBool == true){
				prFaithUpgrade = true;
				document.getElementById("btnPriestUpgrade1").disabled = true;
				document.getElementById("btnPriestUpgrade1").innerHTML = "Rosary Beads Crafted";
			}
		}		
		if(localStorage.tomesUnlocked != null){
			var myBool = (localStorage.tomesUnlocked == "true")
			if(myBool == true){
				tomesUnlocked = true;
				document.getElementById('tomediv').style.display = "block";
				document.getElementById('createTome').style.display = "block";
				document.getElementById("btnTomeUnlock").innerHTML = "Scribing Unlocked";
				document.getElementById("btnTomeUnlock").disabled = true;
			}
		}	
		
		if(localStorage.PmillEffUpgr != null){
			var myBool = (localStorage.PmillEffUpgr == "true")
			if(myBool == true){
				PmillEffUpgr = true;
				document.getElementById("btnPmillEffUpgrade").disabled = true;
				document.getElementById("btnPmillEffUpgrade").innerHTML = "Process Control Bought";
			}
		}	
		if(localStorage.PmillEffUpgr2 != null){
			var myBool = (localStorage.PmillEffUpgr2 == "true")
			if(myBool == true){
				PmillEffUpgr2 = true;
				document.getElementById("btnPmillEffUpgrade2").disabled = true;
				document.getElementById("btnPmillEffUpgrade2").innerHTML = "Total Overhaul Bought";
			}
		}		
		if(localStorage.paladinWepUpgrade != null){
			var myBool = (localStorage.paladinWepUpgrade == "true")
			if(myBool == true){
				paladinWepUpgrade = true;
				document.getElementById("paladinUpgrade1").innerHTML = "Imbue Weapons Bought";
				document.getElementById("paladinUpgrade1").disabled = true;
			}
		}		

		if(localStorage.tavernUpgrade != null){
			var myBool = (localStorage.tavernUpgrade == "true")
			if(myBool == true){
				tavernUpgrade = true;
				document.getElementById("btnUpgradeTavern").disabled = true;
			}
		}
		if(localStorage.tavernUpgrade2 != null){
			var myBool = (localStorage.tavernUpgrade2 == "true")
			if(myBool == true){
				tavernUpgrade2 = true;
				document.getElementById("btnUpgradeTavern2").disabled = true;
			}
		}			
		if(localStorage.squiresUnlocked != null){
			var myBool = (localStorage.squiresUnlocked == "true")
			if(myBool == true){
				squiresUnlocked = true;
				document.getElementById("btnPageUpgrade1").disabled = true;
				document.getElementById("btnPageUpgrade1").innerHTML = "Unlocked Squires";
				document.getElementById('SquireTab').style.display = "block";
			}
		}	
		
		if(localStorage.knightsUnlocked != null){
			var myBool = (localStorage.knightsUnlocked == "true")
			if(myBool == true){
				knightsUnlocked = true;
				document.getElementById("btnSquireUpgrade1").disabled = true;
				document.getElementById("btnSquireUpgrade1").innerHTML = "Unlocked Knights";
				document.getElementById('KnightTab').style.display = "block";
			}
		}	
		
		if(localStorage.angelsUnlocked != null){
			var myBool = (localStorage.angelsUnlocked == "true")
			if(myBool == true){
				angelsUnlocked = true;
			document.getElementById('RelicPedestalTab').style.display = "none";
			document.getElementById('AngelTab').style.display = "block";	
			document.getElementById("Etherealtitle").innerHTML = "Ethereal Rip & Angelic Gates";
			}
		}			
		
		if(localStorage.defeatedGoblins != null){
			var myBool = (localStorage.defeatedGoblins == "true")
			if(myBool == true){
				defeatedGoblins = true;
				document.getElementById('BatGoblinsProgBarBox').style.display = "none";			
				document.getElementById("btnBatGoblins").innerHTML = "Goblins Defeated!";
				document.getElementById("btnBatGoblins").disabled = true;
				defeatedGoblins = true;
			}
		}
			
		if(localStorage.defeatedBandits != null){
			var myBool = (localStorage.defeatedBandits == "true")
			if(myBool == true){
				defeatedBandits = true;
				document.getElementById('BatBanditsProgBarBox').style.display = "none";
				document.getElementById('FaithStructuresTab').style.display = "block";				
				document.getElementById("btnBatBandits").innerHTML = "Bandits Defeated!";
				document.getElementById("btnBatBandits").disabled = true;
				defeatedBandits = true;
			}
		}

		if(localStorage.defeatedHermit != null){
			var myBool = (localStorage.defeatedHermit == "true")
			if(myBool == true){
				defeatedHermit = true;
				document.getElementById('BatHermitProgBarBox').style.display = "none";
				document.getElementById('PaperMillTab').style.display = "block";
				document.getElementById('gatherPaper').style.display = "block";
				document.getElementById('paperdiv').style.display = "block";
				document.getElementById("btnBatHermit").innerHTML = "Bandits Defeated!";
				document.getElementById("btnBatHermit").disabled = true;
				defeatedBandits = true;
			}
		}				
		
		if(localStorage.defeatedOgre != null){
			var myBool = (localStorage.defeatedOgre == "true")
			if(myBool == true){
				defeatedOgre = true;
				document.getElementById('soulsdiv').style.display = "block";
				document.getElementById('PaladinTab').style.display = "block";
//				document.getElementById('PaladinWeaponTab').style.display = "block";   //Until a drop unlocks paladin weapon upgrade
				document.getElementById('BatOgreProgBarBox').style.display = "none";
				document.getElementById("btnBatOgre").disabled = true;
				document.getElementById("btnBatOgre").innerHTML = "Ogre Defeated!";
				document.getElementById('BatHellhound').style.display = "block";
			}
		}
		if(localStorage.defeatedHhounds != null){
			var myBool = (localStorage.defeatedHhounds == "true")
				if(myBool == true){
					defeatedHhounds = true;
					document.getElementById('Ethereal').style.display = "block";
					document.getElementById('EtherealMenu').style.display = "block";
					document.getElementById('SpiritualStrength').style.display = "block";
					document.getElementById('BatPixie').style.display = "block";
					document.getElementById('BatArmor').style.display = "block";
					document.getElementById('BatHhoundProgBarBox').style.display = "none";
					document.getElementById("btnBatHellhound").disabled = true;
					document.getElementById("btnBatHellhound").innerHTML = "Hellhounds Defeated!";
					defeatedHhounds = true;
				}
				else if(defeatedOgre == true){
					setTimeout(function() { hellHoundRaid(); }, 30000);			//killed ogre but haven't defeated hhounds yet, start raids again
				}
		};
		if(localStorage.defeatedPixie != null){
			var myBool = (localStorage.defeatedPixie == "true")
				if(myBool == true){
					defeatedPixie = true;
				}
		};
		
		if(localStorage.defeatedArmor != null){
			var myBool = (localStorage.defeatedArmor == "true")
				if(myBool == true){
					defeatedArmor = true;
					document.getElementById('AspectofJustice').style.display = "block";
				}
		};

		if(localStorage.defeatedOoze != null){
			var myBool = (localStorage.defeatedOoze == "true")
				if(myBool == true){
					defeatedOoze = true;
					document.getElementById('BatOoze').style.display = "block";
					document.getElementById('tomeUnlock').style.display = "block";
				}
				else if(defeatedHhounds == true && myBool == false){
					setTimeout(function() { triggerOoze(); }, 60000);				//restarts ooze raids after defeating hhounds
				}
		};			
							
		if(localStorage.defeatedArchmage != null){
			var myBool = (localStorage.defeatedArchmage == "true")
				if(myBool == true){
					document.getElementById('buildTowerTab').style.display = "block";
					document.getElementById('BatMageProgBarBox').style.display = "none";
					document.getElementById("btnBatMage").disabled = true;
					document.getElementById("btnBatMage").innerHTML = "Archmage Defeated!";
					document.getElementById('BatSuccubus').style.display = "block";
					document.getElementById('BatUndeadArmy').style.display = "block";
					defeatedArchmage = true;
					setTimeout(function() { succubusRaid(); }, 30000);			//defeated archmage but haven't defeated succubus yet, start raids again
				}
		};		
		if(localStorage.defeatedSuccubus != null){
			var myBool = (localStorage.defeatedSuccubus == "true")
				if(myBool == true){
					document.getElementById('BatSuccubus').style.display = "block";
					document.getElementById('btnBatSuccubus').innerHTML = this.name + " Defeated!"; 
					document.getElementById("btnBatSuccubus").disabled = true;
					document.getElementById('RelicPedestalTab').style.display = "block";
					defeatedSuccubus = true;
				}
		};
		
		if(localStorage.defeatedUArmy != null){
			var myBool = (localStorage.defeatedUArmy == "true")
				if(myBool == true){
					defeatedUArmy = true;
				}
		};
		
		if(localStorage.UARevivedCount != null){
			UARevivedCount = parseInt(localStorage.UARevivedCount);
			if(UARevivedCount < 3){
				setTimeout(function() { necroReviveUA(); }, 20000);
			}
			else if( UARevivedCount >= 3){
				document.getElementById("BatNecromancer").style.display = "block";
//				showBattle('Necromancer');
			}
//			document.getElementById("UARevivedCount").innerHTML = fnum(UARevivedCount);
		}				
		if(localStorage.defeatedNecromancer != null){
			var myBool = (localStorage.defeatedNecromancer == "true")
				if(myBool == true){
					defeatedNecromancer = true;
				}
		};			
		if(localStorage.peasantsKilled != null){
			peasantsKilled = parseInt(localStorage.peasantsKilled);
			document.getElementById("peasantsKilled").innerHTML = peasantsKilled;
		}			

		if(localStorage.minersKilled != null){
			minersKilled = parseInt(localStorage.minersKilled);
			document.getElementById("minersKilled").innerHTML = minersKilled;
		}	
		
		if(localStorage.ironAbsorbed != null){
			ironAbsorbed = parseInt(localStorage.ironAbsorbed);
			document.getElementById("ironAbsorbed").innerHTML = fnum(ironAbsorbed);
			if(ironAbsorbed > 0 ){
				document.getElementById('BatOoze').style.display = "block";
			}
		}	
		
		if(localStorage.silverAbsorbed != null){
			silverAbsorbed = parseInt(localStorage.silverAbsorbed);
			document.getElementById("silverAbsorbed").innerHTML = fnum(silverAbsorbed);
			if(silverAbsorbed > 0 ){
				document.getElementById('BatOoze').style.display = "block";
			}
		}			
		if(localStorage.unitsSeduced != null){
			unitsSeduced = parseInt(localStorage.unitsSeduced);
			document.getElementById("unitsSeduced").innerHTML = fnum(unitsSeduced);
		}		
		
		if(localStorage.inbattle != null){
			var myBool = (localStorage.inbattle == "true")
			if(myBool == true){
//				inbattle = localStorage.inbattle;
				curBattling = localStorage.curBattling;
				battlePercent = localStorage.battlePercent;
				console.log(curBattling + ": " + battlePercent + "%")
				setTimeout(function() { loadBattle(curBattling, battlePercent); }, 500)
			}
		}
		if(localStorage.faithDonated != null){
			faithDonated = parseInt(localStorage.faithDonated);
			document.getElementById("faithDonated").innerHTML = fnum(faithDonated);
			if(faithDonated >= 500000){
				document.getElementById('RelicPedestalTab').style.display = "none";
			}			
		}		
		if(localStorage.lastPage != null){
			lastPage = localStorage.lastPage;
		}
		
		if(silver != 0 || paper != 0 || BattlePower != 0){
			$("#SecondaryResources").collapse('show');
		}
		else{
			lastPage = 'Production';
		}
		recalculateCosts();
		
//		setTimeout(function() { showUndefeatedBattles(); }, 1000)
//		showUndefeatedBattles();
		
		if(window.localStorage.length != 0){
			console.log("Save loaded.")
			document.getElementById('loadAlert').style.display = "block";  //Displays load alert
			
			//Dismisses load Alert
			var ticker = 0 ;
			var clearSave = setInterval(function() {
				ticker = ticker + 1;   
			  if (ticker == 3){
				clearInterval(clearSave);
				if(document.getElementById('loadAlert').style.display == "block"){
					document.getElementById("loadAlert").style.display = "none";
				}	
			  }
			}, 1000);	
			//End Dismisses load Alert			
		}
	};
	
	function hardReset(){
	//set all variables to zero, delete cookies
	var answer
		answer = confirm("Are you sure you want to hard reset? You will LOSE ALL YOUR DATA!");
		if(answer == true){
			deleteCookie();
			location.reload(true);
		}
	};
	
	
window.setInterval(function(){					//Autosaves every minute
	saveCookie();
}, 60000);
			
			
function loadScenario(number){
	switch(number){
		case 1:
			gold = 10000;
			wood = 10000;
			iron = 10000;
			Peasant.number = 10;
			Miner.number = 10;
			Lumberjack.number = 10;
			Page.number = 12;
			lumbermillOpened = true;
			barracksOpened = true;
			minesOpened = true;
			saveCookie();
			location.reload(true);
		break;
		
		case 2:
			gold = 100000;
			wood = 100000;
			iron = 100000;
			silver = 100000;
			Peasant.number = 50;
			Miner.number = 50;
			Lumberjack.number = 50;
			Page.number = 20;
			Squire.number = 5;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			
			squiresUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;	
			saveCookie();
			location.reload(true);			
		break;

		case 3:
			gold = 500000;
			wood = 500000;
			iron = 500000;
			silver = 500000;
			faith = 100;
			Tavern.number = 1;
			Peasant.number = 100;
			Miner.number = 100;
			Lumberjack.number = 100;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Acolyte.number = 10;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			cathedralOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);			
		break;
		
		case 4:
			gold = 700000;
			wood = 700000;
			iron = 700000;
			silver = 700000;
			faith = 1000;
			paper = 100;
			Tavern.number = 2;
			Peasant.number = 150;
			Miner.number = 150;
			Lumberjack.number = 150;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Paladin.number = 5;
			Acolyte.number = 10;
			Priest.number = 5;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			cathedralOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);				
		break;

		case 5:
			gold = 750000;
			wood = 750000;
			iron = 750000;
			silver = 750000;
			faith = 2000;
			paper = 10000;
			Tavern.number = 3;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Paladin.number = 10;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 20;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHhounds = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			cathedralOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);			
		break;
		
		case 6:
			gold = 1000000;
			wood = 1000000;
			iron = 1000000;
			silver = 1000000;
			faith = 50000;
			paper = 100000;
			mana = 2000;
			Tavern.number = 5;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 20;
			Paladin.number = 30;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 20;
			Aspect.number = 11;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHhounds = true;
			defeatedPixie = true;
			defeatedArmor = true;
			defeatedOoze = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			cathedralOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			paladinWepUpgrade = true;
			saveCookie();
			location.reload(true);			
		break;	

		case 7:
			gold = 1000000;
			wood = 1000000;
			iron = 1000000;
			silver = 1000000;
			faith = 50000;
			paper = 100000;
			mana = 2000;
			Tavern.number = 5;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 15;
			Paladin.number = 44;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 30;
			Aspect.number = 26;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHhounds = true;
			defeatedPixie = true;
			defeatedArmor = true;
			defeatedOoze = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			cathedralOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			prFaithUpgrade = true;
			paladinWepUpgrade = true;
			tomesUnlocked = true;
			
			saveCookie();
			location.reload(true);			
		break;		
		
		default:
	}
}