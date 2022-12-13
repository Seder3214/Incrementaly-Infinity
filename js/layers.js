addLayer("b", {
    name: "boosters", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol() {if (hasAchievement("a", 71)) return "PS"
		else return "B"}, // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		best: new Decimal(0),
        pwr: new Decimal(0),
		l: new Decimal(0),
		st: new Decimal(0),
		auto: true,
    }},
	automate() {},
		canBuyMax(){
		return (hasAchievement("a", 71))
	},
	autoUpgrade() { if (hasAchievement("a", 71)) return false
		else return (hasMilestone("i", 11) && player.b.auto)},
    color() {if (hasAchievement("a", 71)) return "#78a2b7"
		else return "#9BEDF2"},
    requires() {if (hasAchievement("a", 71) && player.b.points.gte(1)) return new Decimal.pow(10,942)
		if (hasAchievement("a", 71)) return new Decimal.pow(10,941)
		else return new Decimal(10)}, // Can be a function that takes requirement increases into account
    resource() {if (hasAchievement("a", 71)) return "Physics"
		else return "boosters"}, // Name of prestige currency
    baseResource() {if (hasAchievement("a", 71)) return "Lithium"
		else return"points"}, // Name of resource prestige is based on
    baseAmount() {if (hasAchievement("a", 71)) return player.c.li
		else return player.points}, // Get the current amount of baseResource
    type() {if (hasAchievement("a", 71)) return "static"
		else return "normal"}, // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {if (hasAchievement("a", 71)) return new Decimal(2)
		else return new Decimal(0.5)},
effectDescription() {if (hasAchievement("a",71)) return "<h4 style='color: #808080;'>You have " + format(player.b.l) + "L of water</h4><br><h4 style='color: #808080;'>You have " + format(player.b.st) + " steam</h4>"},	// Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if (hasUpgrade("i", 74)) mult = mult.times(upgradeEffect("i", 74))
				if (hasUpgrade("i", 71)) mult = mult.times(upgradeEffect("i", 71))
		if (hasUpgrade("m", 15)) mult = mult.times(upgradeEffect("m", 11)).times(upgradeEffect("m", 13))
		if (hasUpgrade("m", 13) & inChallenge("m", 11)) mult = mult.times(upgradeEffect("m", 13))
				if (hasUpgrade("m", 11) & inChallenge("m", 11)) mult = mult.times(upgradeEffect("m", 11))
				if (hasUpgrade("i", 64)) mult = mult.times(player.i.energy.max(1).pow(0.4))
if (hasUpgrade("ex", 13)) mult = mult.times(upgradeEffect("ex", 13))
				if (player.g.energy.gte(1)) mult = mult.times(player.g.energy.max(1).pow(0.4))
		if (hasUpgrade("g", 13)) mult = mult.times(upgradeEffect("g", 13)).pow(upgradeEffect("g", 13).times(1e4))
		if (hasUpgrade("i", 44)) mult = mult.times(upgradeEffect("i", 44))
		if (hasUpgrade("i", 21)) mult = mult.times(upgradeEffect("i", 21))
		if (hasUpgrade("i", 14)) mult = mult.times(upgradeEffect("i", 14))
		if (hasUpgrade("g", 12)) mult = mult.times(upgradeEffect("g", 12)).pow(upgradeEffect("g", 12).times(2))
		if (hasUpgrade("g", 11)) mult = mult.times(upgradeEffect("g", 11)).pow(upgradeEffect("g", 11).div(1.3))
		if (player.i.energy.gte(1)) mult = mult.times(player.i.energy.max(1).pow(0.4))
		if (hasUpgrade("i", 11)) mult = mult.times(upgradeEffect("i", 11))
		if (hasUpgrade("b", 94)) mult = mult.times(upgradeEffect("b", 94))
		if (hasUpgrade("b", 93)) mult = mult.times(upgradeEffect("b", 93))
		if (hasUpgrade("b", 92)) mult = mult.times(upgradeEffect("b", 92))
		if (hasUpgrade("b", 91)) mult = mult.times(upgradeEffect("b", 91))
		if (hasUpgrade("b", 83)) mult = mult.times(upgradeEffect("b", 83))
		if (hasUpgrade("b", 82)) mult = mult.times(upgradeEffect("b", 82))
		if (hasUpgrade("b", 81)) mult = mult.times(upgradeEffect("b", 81))
		if (player.i.points.gte(1)) mult = mult.times(player.i.points.max(1).times(2))
		if (player.g.points.gte(1)) mult = mult.times(player.g.points.max(1).add(1))
		if (hasUpgrade("b", 71)) mult = mult.times(upgradeEffect("b", 71))
		if (hasUpgrade("b", 63)) mult = mult.times(upgradeEffect("b", 63).pow(0.65))
		if (hasUpgrade("b", 62)) mult = mult.times(upgradeEffect("b", 62))
		if (hasUpgrade("b", 61)) mult = mult.times(upgradeEffect("b", 61)).pow(20)
		if (hasUpgrade("b", 34)) mult = mult.times(upgradeEffect("b", 34))
		if (hasUpgrade("b", 33)) mult = mult.times(upgradeEffect("b", 33))
		if (hasUpgrade("b", 54)) mult = mult.times(upgradeEffect("b", 54))
		if (hasUpgrade("b", 45)) mult = mult.pow(upgradeEffect("b", 44)).times(2)
if (hasUpgrade("b", 41)) mult = mult.times(upgradeEffect("b", 41))
        if (hasUpgrade("b", 31)) mult = mult.times(upgradeEffect("b", 31))
		if (hasUpgrade("b", 24)) mult = mult.times(upgradeEffect("b", 24))
		if (hasUpgrade("b", 14)) mult = mult.times(upgradeEffect("b", 14))
		if (hasUpgrade("b", 13)) mult = mult.times(upgradeEffect("b", 13))
		if (hasUpgrade("b", 12)) mult = mult.times(upgradeEffect("b", 12))
			if (hasUpgrade("g", 21)) mult = mult.times(upgradeEffect("g", 21).pow(1e17))
		if (hasUpgrade("g", 23)) mult = mult.times(upgradeEffect("g", 23).pow(1e18))
		if (hasUpgrade("g", 24)) mult = mult.times(upgradeEffect("g", 24))
		if (hasUpgrade("g", 25)) mult = mult.times(upgradeEffect("g", 25))
	if (hasUpgrade("g", 31)) mult = mult.times(upgradeEffect("g", 31))
        return mult
    },
			    effect() {
        if (!hasUpgrade("b", 32))
            return new Decimal(1);
        let eff = Decimal.pow(1);
		if (hasUpgrade("m", 15)) eff = eff.times(upgradeEffect("m", 14))
		if (hasUpgrade("m", 14) & inChallenge("m", 11)) eff = eff.times(upgradeEffect("m", 14))
		if (inChallenge("m", 11)) eff = eff.div(5)
		if (hasUpgrade("b", 42)) eff = eff.times(upgradeEffect("b", 42))
		if (hasUpgrade("b", 44)) eff = eff.pow(upgradeEffect("b", 44))
			if (hasUpgrade("b", 51)) eff = eff.pow(upgradeEffect("b", 51))
		if (hasUpgrade("b", 52)) eff = eff.times(upgradeEffect("b", 52))
		if (player.i.points.gte(1)) eff = eff.times(player.i.points.max(1).times(2))
		if (player.g.points.gte(1)) eff = eff.times(player.g.points.max(1).times(2))
		if (hasUpgrade("i", 11)) eff = eff.times(upgradeEffect("i", 11))
			
        return eff;
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
		        tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
	microtabs: {
    stuff: {
                    "Upgrades": {
						unlocked() {return (!hasAchievement("a", 71))},
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10]]
                ]
            },
                    "Physic Upgrades": {
                content: [
                    ["blank", "15px"],
                    ["upgrades", [11,12,13]],
					["buyables", [2]]
                ]
            },
                    "Physical Phenomenas": {
						unlocked() {return (player.c.points.gte(1))},
                content: [
                    ["blank", "15px"],
					["buyables",[1]],
					["clickable",[11]],
                ]
            },
			                    "Booster Power": {
									unlocked() {return hasUpgrade("b", 32)},
                content: [
                    ["blank", "15px"],
					["display-text", () => "You have <h2 style='color: #9BEDF2; text-shadow: 0 0 10px #9BEDF2'>" + format(player.b.pwr) + "</h2> Booster Power. <br>" + "You are generating " + format(tmp.b.effect) + " Booster Power/s"],
                    ["upgrades", [4,5]]
                ]
            },
	},
	},
	upgrades: {
		11: {
		title: "Boost!",
		description: "Boosters boost point gain.",
		cost: new Decimal(1),
		effect() {
			if (inChallenge("m", 11) && hasUpgrade("b", 21)) return player.b.points.pow(2.2).min(upgradeEffect("b", 21).times(4)).max(1.5)
			if (inChallenge("m", 11)) return player.b.points.pow(2.2).min(10).max(1.5)
			if (hasUpgrade("ex", 11)) return player.b.points.pow(0.5).min(upgradeEffect("ex", 11).times(.34e9)).max(1)
			if (hasUpgrade("b", 25)) return player.b.points.pow(0.5).min(.34e9)
			else return player.b.points.pow(2.2).min(upgradeEffect("b", 21).times(20)).max(1.5)},
		effectDisplay() {return format(upgradeEffect("b", 11)) + "x"},
		},
		12: {
		title: "Self-boost",
		description: "Boosters boost booster gain.",
		cost: new Decimal(20),
		unlocked() {return hasUpgrade("b", 11)},
		effect() {if (inChallenge("m", 11)) return player.b.points.pow(0.6).min(upgradeEffect("b", 22).times(4)).max(1)
			else return player.b.points.pow(0.6).min(upgradeEffect("b", 22).times(20)).max(1)},
		effectDisplay() {return format(upgradeEffect("b", 12)) + "x"},
		},
		13: {
		title: "Synergism",
		description: "Points boost booster gain.",
		cost: new Decimal(280),
				unlocked() {return hasUpgrade("b", 12)},
		effect() {if (hasUpgrade("i", 73)) return player.points.pow(1e120).min(upgradeEffect("i", 73).times(7)).max(1)
			if (hasUpgrade("i", 72)) return player.points.pow(1e12).min(upgradeEffect("i", 72).times(7)).max(1)
			if (inChallenge("m", 11) && hasUpgrade("b", 22)) return player.points.pow(0.8).min(upgradeEffect("b", 23).times(7)).max(1)
		if (inChallenge("m", 11)) return player.points.pow(0.8).min(upgradeEffect("b", 23).times(3.5)).max(1)
			if (hasUpgrade("ex", 15)) return player.points.pow(0.8).min(upgradeEffect("b", 23).times(5).pow(10).times(upgradeEffect("ex", 15))).max(1)
			if (hasUpgrade("b", 35)) return player.points.pow(0.8).min(upgradeEffect("b", 23).times(5).pow(10)).max(1)
			else return player.points.pow(0.8).min(upgradeEffect("b", 23).times(5)).max(1)},
		effectDisplay() {return format(upgradeEffect("b", 13)) + "x"},
		},
		14: {
		title: "Best Power",
		description: "Best Boosters boost booster gain.",
		cost() {if (inChallenge("m", 11)) return new Decimal(1250)
			else return new Decimal(3200)},
				unlocked() {return hasUpgrade("b", 13)},
		effect() {if (inChallenge("m", 11)) return player.points.pow(0.8).min(upgradeEffect("b", 23).times(2.5)).max(1)
			else return player.b.best.pow(0.3).max(1).min(4e13)},
		effectDisplay() {return format(upgradeEffect("b", 14)) + "x"},
		},
		15: {
		title: "Point Booster",
		description: "Point gain boosts themselves",
		cost() {if (inChallenge("m", 11)) return new Decimal(3100)
			else return new Decimal(25000)},
				unlocked() {return hasUpgrade("b", 14)},
		effect() { return getPointGen().pow(0.5).max(1)},
		effectDisplay() {return format(upgradeEffect("b", 15)) + "x"},
		},
		21: {
		title: "Softcap Booster",
		description: "Increase 'Boost!' softcap by points",
		cost() {if (inChallenge("m", 11)) return new Decimal(15000)
			else return new Decimal(1005000)},
		unlocked() {
			return hasUpgrade("b", 15)},
		effect() {if (inChallenge("m", 11)) return player.points.pow(1.15).min(upgradeEffect("b", 23).times(10))
			if (hasUpgrade("b", 21)) return player.points.pow(1.15).min(upgradeEffect("b", 23).times(50))
			else return player.points.min(1)},
		effectDisplay() {return format(upgradeEffect("b", 21)) + "x"},
		},
		22: {
		title: "Boosting Feature",
		description: "Increase 'Synergism' softcap by best boosters",
		cost() {if (inChallenge("m", 11)) return new Decimal(28000)
			else return new Decimal(328600000)},
		unlocked() {return hasUpgrade("b", 21)},
		effect() {if (inChallenge("m", 11)) return player.b.points.pow(0.3).min(upgradeEffect("b", 23).times(2))
			if (hasUpgrade("b", 21)) return player.b.points.pow(0.3).min(upgradeEffect("b", 23).times(10))
			else return player.points.min(1)},
		effectDisplay() {return format(upgradeEffect("b", 22)) + "x"},
		},
		23: {
		title: "Ancient Boost!",
		description: "Increase all booster upgrades softcap by 3.00x",
		cost() {if (inChallenge("m", 11)) return new Decimal(78000)
			else return new Decimal(4e9)},
		unlocked() {return hasUpgrade("b", 22)},
		effect() {
			if (hasUpgrade("b", 23)) return player.points.min(3)
			else return player.points.min(1)},
		effectDisplay() {return format(upgradeEffect("b", 23)) + "x"},
		},
		24: {
		title: "Synergism v2",
		description: "Each booster upgrade boost booster gain",
		cost() {if (inChallenge("m", 11)) return new Decimal(2000000)
			else return new Decimal(3e11)},
		unlocked() {return hasUpgrade("b", 23)},
		effect() {let ret = Decimal.pow(1.2, player.b.upgrades.length)
		return ret;},
		effectDisplay() {return format(upgradeEffect("b", 24)) + "x"},
		},
		25: {
		title: "Sneaky Booster",
		description: "Scale 'Boost!' softcap but decrease its effect",
		cost() {if (inChallenge("m", 11)) return new Decimal(16000000)
			else return new Decimal(3e12)},
		unlocked() {return hasUpgrade("b", 24)},
		},
		31: {
		title: "Booster Booster",
		description: "Best booster scale booster gain",
		cost() {if (inChallenge("m", 11)) return new Decimal(1e9)
			else return new Decimal(3e19)},
		effect() {return player.b.best.pow(0.5).max(1).min(20)},
		unlocked() {
			 return hasUpgrade("b", 25)},
		effectDisplay() {return format(upgradeEffect("b", 31)) + "x"},
		},
		32: {
		title: "Super Booster",
		description: "Unlock new tab",
		cost() {if (inChallenge("m", 11)) return new Decimal(1e13)
			else return new Decimal(1e22)},
		unlocked() {return hasUpgrade("b", 31)},
		},
        33: {
		title: "Boostering",
		description: "Power boost boosters gain",
		cost() {if (inChallenge("m", 11)) return new Decimal(3e28)
			else return new Decimal(1e40)},
				effect() {return player.b.pwr.pow(0.15).min(50)},
		unlocked() {return hasUpgrade("b", 55)},
		effectDisplay() {return format(upgradeEffect("b", 33)) + "x"},
		},
		 34: {
		title: "Machinering",
		description: "Points boost boosters gain",
		cost() {if (inChallenge("m", 11)) return new Decimal(4e30)
			else return new Decimal(3e45)},
				effect() {return player.points.pow(0.15).min(100)},
		unlocked() {return hasUpgrade("b", 33)},
		effectDisplay() {return format(upgradeEffect("b", 34)) + "x"},
		},
		 35: {
		title: "Machinering II",
		description: "Scale up 'Synergism' softcap by ^2",
		cost() {if (inChallenge("m", 11)) return new Decimal(4e34)
			else return new Decimal(2e50)},
		unlocked() {return hasUpgrade("b", 34)},
		},
				41: {
		title: "Booster Effect",
		description: "Power boosts boosters gain",
		cost: new Decimal(10),
		effect() {return player.b.pwr.pow(0.5).max(1).min(30)},
		unlocked() {
			return hasUpgrade("b", 32)},
		effectDisplay() {return format(upgradeEffect("b", 41)) + "x"},
				currencyDisplayName: "Power", // Use if using a nonstandard currency
                currencyInternalName: "pwr", // Use if using a nonstandard currency
                currencyLayer: "b",
		},
				42: {
		title: "Booster Power",
		description: "Boosters boost power gain",
		cost: new Decimal(15),
		effect() {return player.b.points.pow(0.5).max(1).min(10)},
		unlocked() {return hasUpgrade("b", 41)},
		effectDisplay() {return format(upgradeEffect("b", 42)) + "x"},
				currencyDisplayName: "Power", // Use if using a nonstandard currency
                currencyInternalName: "pwr", // Use if using a nonstandard currency
                currencyLayer: "b",
		},
				43: {
		title: "Point Power",
		description: "Power boost point gain",
		cost: new Decimal(350),
		effect() {return player.b.pwr.pow(0.5).max(1).min(100)},
		unlocked() {return hasUpgrade("b", 42)},
		effectDisplay() {return format(upgradeEffect("b", 43)) + "x"},
				currencyDisplayName: "Power", // Use if using a nonstandard currency
                currencyInternalName: "pwr", // Use if using a nonstandard currency
                currencyLayer: "b",
		},
				44: {
		title: "Exponent Booster",
		description: "Points boosts power gain",
		cost() {if (inChallenge("m", 11)) return new Decimal(3e15)
			else return new Decimal(5e22)},
		effect() {return player.points.pow(0.014).max(1).min(upgradeEffect("b", 53).times(1.5))},
		unlocked() {return hasUpgrade("b", 43)},
		effectDisplay() {return "^" + format(upgradeEffect("b", 44))},
		},
				45: {
		title: "Power Empower",
		description: "Apply 'Exponent Booster' effect to point and booster gain at boosted rate",
		cost: new Decimal(550),
		unlocked() {return hasUpgrade("b", 44)},
		currencyDisplayName: "Power", // Use if using a nonstandard currency
                currencyInternalName: "pwr", // Use if using a nonstandard currency
                currencyLayer: "b",
		},
				51: {
		title: "Power Ex",
		description: "Each boosters upgrades gives a boost to Power gain",
		cost() {if (inChallenge("m", 11)) return new Decimal(1e18)
			else return new Decimal(1e28)},
		unlocked() {
		 return hasUpgrade("b", 45)},
				effect() {let ret = Decimal.pow(1.05, player.b.upgrades.length)
		return ret;},
						effectDisplay() {return "^" + format(upgradeEffect("b", 51))},
		},
				52: {
		title: "Power S",
		description: "Power gain boosts power gain",
		cost: new Decimal(90000),
		unlocked() {return hasUpgrade("b", 51)},
				effect() {return tmp.b.effect.pow(0.6).min(35)},
						effectDisplay() {return format(upgradeEffect("b", 52)) + "x"},
		currencyDisplayName: "Power", // Use if using a nonstandard currency
                currencyInternalName: "pwr", // Use if using a nonstandard currency
                currencyLayer: "b",
		},
				53: {
		title: "Power X",
		description: "Increase 'Exponent Booster' softcap.",
		cost: new Decimal(2000000),
		unlocked() {return hasUpgrade("b", 52)},
				effect() {if (hasUpgrade("b", 53)) return player.b.pwr.pow(0.4).min(1.5)
					else return player.points.min(1)},
						effectDisplay() {return format(upgradeEffect("b", 53)) + "x"},
		currencyDisplayName: "Power", // Use if using a nonstandard currency
                currencyInternalName: "pwr", // Use if using a nonstandard currency
                currencyLayer: "b",
		},
				54: {
		title: "Powering Boosters",
		description: "Power boosts boosters gain",
		cost() {if (inChallenge("m", 11)) return new Decimal(16000000)
			else return new Decimal(360000000)},
		unlocked() {return hasUpgrade("b", 53)},
				effect() {return player.b.pwr.pow(0.5).min(30)},
						effectDisplay() {return format(upgradeEffect("b", 54)) + "x"},
		currencyDisplayName: "Power", // Use if using a nonstandard currency
                currencyInternalName: "pwr", // Use if using a nonstandard currency
                currencyLayer: "b",
		},
				55: {
		title: "Power Mastery",
		description: "Boosters boost point gain",
		cost() {if (inChallenge("m", 11)) return new Decimal(5e22)
			else return new Decimal(5e32)},
		unlocked() {return hasUpgrade("b", 54)},
				effect() {return player.b.points.pow(0.2).min(120)},
						effectDisplay() {return format(upgradeEffect("b", 55)) + "x"},
		},
						61: {
		title: "Power SSR",
		description: "Boosters boost booster gain",
		cost: new Decimal(1.2e61),
		unlocked() {
			return hasUpgrade("b", 35)},
				effect() {return player.b.points.pow(0.002).min(2)},
						effectDisplay() {return "^" + format(upgradeEffect("b", 61))},
		},
						62: {
		title: "Mult Booster",
		description: "Power gain boost boooster gain",
		cost: new Decimal(1.5e67),
		unlocked() {return hasUpgrade("b", 61)},
				effect() {return tmp.b.effect.times(3).min(50)},
						effectDisplay() {return format(upgradeEffect("b", 62)) + "x"},
		},
						63: {
		title: "Div boost",
		description: "Boost point gain based on boosters/1e10.",
		cost: new Decimal(3e151),
		unlocked() {return hasUpgrade("b", 62)},
				effect() {return player.points.times(player.b.points.div(1e10)).max(1).min(25)},
						effectDisplay() {return format(upgradeEffect("b", 63)) + "x"},
		},
						64: {
		title: "More Points",
		description: "Boost point gain based on Power gain",
		cost: new Decimal(1e195),
		unlocked() {return hasUpgrade("b", 63)},
				effect() {return player.points.div(tmp.b.effect).min(1000).max(1)},
						effectDisplay() {return  format(upgradeEffect("b", 64)) + "x"},
		},
								65: {
		title: "Over Points",
		description: "Boost point gain based on boosters",
		cost: new Decimal(3e202),
		unlocked() {return hasUpgrade("b", 64)},
				effect() {return player.points.pow(12).div(player.b.points).min(13).max(1)},
						effectDisplay() {return  format(upgradeEffect("b", 65)) + "x"},
		},
										71: {
		title: "Start Pos",
		description: "Boost booster gain by points^points",
		cost: new Decimal(1e204),
		unlocked() {return hasUpgrade("b", 65)},
				effect() {if (hasUpgrade("b", 71)) return player.points.max(1).pow(player.points).min(205)
					else return player.points.min(1)},
						effectDisplay() {return  format(upgradeEffect("b", 71)) + "x"},
		},
										72: {
		title: "Infinity starts here",
		description: "Gain 100% of boosters per sec",
		cost: Decimal.pow(10,308),
		unlocked() {return hasUpgrade("b", 71)},
		},
										73: {
		title: "Infinity Booster",
		description: "Gain 500% of boosters per sec",
		cost: Decimal.pow(10,310),
		unlocked() {return hasUpgrade("b", 72)},
		},
										74: {
		title: "Infinity Overload?",
		description: "Gain 5e10% of boosters per sec",
		cost: Decimal.pow(10,311),
		unlocked() {return hasUpgrade("b", 73)},
		},
										75: {
		title: "Infinery I",
		description: "Unlock Generators and Incrementals",
		cost: Decimal.pow(10,321),
		unlocked() {return hasUpgrade("b", 74)},
		},
										81: {
		title: "Incremental Booster",
		description: "Unspent Incrementals boost booster gain",
		cost: Decimal.pow(10,348),
						effect() {return player.i.points.add(1).pow(2).min(15).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 81)) + "x"},
		unlocked() {return player.i.best.gte(1)},
		},
										82: {
		title: "Unincremental Booster",
		description: "Best Incrementals boost booster gain",
		cost: Decimal.pow(10,375),
						effect() {return player.i.best.add(1).pow(2.5).min(35).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 82)) + "x"},
		unlocked() {return hasUpgrade("b", 81)},
		},
												83: {
		title: "Effect Booster",
		description: "Best and unspent Incrementals boost booster gain",
		cost: Decimal.pow(10,409),
						effect() {return player.i.best.add(1).add(player.i.points).pow(2.5).min(35).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 83)) + "x"},
		unlocked() {return hasUpgrade("b", 82)},
		},
														84: {
		title: "Int Booster",
		description: "Decrease Incremental cost by points amount",
		cost: Decimal.pow(10,463),
						effect() {return player.points.log10(player.points).pow(5).min(5e8).max(1)},
						effectDisplay() {return "/" + format(upgradeEffect("b", 84))},
		unlocked() {return hasUpgrade("b", 83)},
		},
														85: {
		title: "Decrease Booster",
		description: "Decrease Incremental cost by boosters",
		cost: Decimal.pow(10.02,463),
						effect() {return player.b.points.pow(8).min(1e9).max(1)},
						effectDisplay() {return "/" + format(upgradeEffect("b", 85))},
		unlocked() {return hasUpgrade("b", 84)},
		},
																91: {
		title: "Area Booster",
		description: "Points*Incremental gives an exponental boost to booster gain",
		cost: Decimal.pow(10.04,514),
						effect() {return player.points.pow(0.015).times(player.i.points.pow(0.015)).min(150).max(1)},
						effectDisplay() {return  format(upgradeEffect("b", 91)) + "x"},
		unlocked() {return (player.i.best.gte(2))},
		},
																		92: {
		title: "Merge Booster",
		description: "Boosters*Incremental gives an exponental boost to booster gain",
		cost: Decimal.pow(10.025,554),
						effect() {return player.b.points.pow(0.002).times(player.i.points.pow(0.015)).min(150).max(1)},
						effectDisplay() {return  format(upgradeEffect("b", 92)) + "x"},
		unlocked() {return hasUpgrade("b", 91)},
		},
																		93: {
		title: "Ext Booster",
		description: "Boost boosters based on upgrades amount",
		cost: Decimal.pow(10.025,609),
						effect() {let ret = Decimal.pow(1.1, player.b.upgrades.length)
						return ret;},
						effectDisplay() {return format(upgradeEffect("b", 93)) + "x"},
		unlocked() {return  hasUpgrade("b", 92)},
		},
																		94: {
		title: "Pre-final Booster",
		description: "Boost boosters based on points",
		cost: Decimal.pow(10,698),
						effect() {return player.points.pow(0.012).min(500).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 94)) + "x"},
		unlocked() {return hasUpgrade("b", 93)},
		},
																				95: {
		title: "Final Booster",
		description: "Boost points based on Incrementals",
		cost: Decimal.pow(10,735),
						effect() {return player.i.points.pow(100).min(1e24).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 95)) + "x"},
		unlocked() {return hasUpgrade("b", 94)},
		},
																				101: {
		title: "Mini-Energy Booster",
		description: "Boost Energy gain by points",
		cost: Decimal.pow(10.01,1212),
						effect() {return player.points.pow(0.02).min(1e12).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 101)) + "x"},
		unlocked() {return hasUpgrade("i", 11)},
		},
																				102: {
		title: "Semi-Energy Booster",
		description: "Boost Energy gain by boosters",
		cost: Decimal.pow(10.01,1262),
						effect() {return player.b.points.pow(0.15).min(1e12).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 102)) + "x"},
		unlocked() {return hasUpgrade("b", 101)},
		},
																				103: {
		title: "Energy Booster",
		description: "Boost Energy gain by boosters^2",
		cost: Decimal.pow(10.01,1475),
						effect() {return player.b.points.pow(0.3).min(1e100).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 103)) + "x"},
		unlocked() {return hasUpgrade("b", 102)},
		},
																				104: {
		title: "Mega-Energy Booster",
		description: "Boost Energy gain by boosters^3",
		cost: Decimal.pow(10.01,3280),
						effect() {return player.b.points.pow(0.6).min(1e300).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 104)) + "x"},
		unlocked() {return hasUpgrade("b", 103)},
		},
																						105: {
		title: "Ultra-Energy Booster",
		description: "Boost Energy gain by boosters^10",
		cost: Decimal.pow(10.01,8680),
						effect() {return player.b.points.pow(1).min(Decimal.pow(10, 2500)).max(1)},
						effectDisplay() {return format(upgradeEffect("b", 105)) + "x"},
		unlocked() {return hasUpgrade("b", 104)},
		},
				111: {
					title: "Water I",
			description: "Water amount boosts [Spawn a rain] effect",
			cost: new Decimal(135),
						effect() {if (hasUpgrade("b", 111)) return player.b.l.pow(0.22)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 111)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				112: {
					title: "Water II",
			description: "Chemicals boost Water gain",
			cost: new Decimal(350),
						unlocked() {return (hasUpgrade("b", 111))},
						effect() {if (hasUpgrade("b", 112)) return player.c.points.pow(1.45)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 112)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				113: {
					title: "Water III",
			description: "log10(Hydrogen) boost Water gain",
			cost: new Decimal(2780),
						unlocked() {return (hasUpgrade("b", 112))},
						effect() {if (hasUpgrade("b", 113)) return player.c.h.log10(player.c.h).div(10)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 113)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				114: {
					title: "Water IV",
			description: "log10(Lithium) boost Water gain",
			cost: new Decimal(88200),
						unlocked() {return (hasUpgrade("b", 113))},
						effect() {if (hasUpgrade("b", 113)) return player.c.li.log10(player.c.li).div(100)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 114)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				115: {
					title: "Water V",
			description: "Apply Generate Hydrogen level as a Water boost",
			cost: new Decimal(6270000),
						unlocked() {return (hasUpgrade("b", 114))},
						effect() {if (hasUpgrade("b", 115)) return player.c.buyables[11].add(upgradeEffect("c", 21)).add(upgradeEffect("c", 23))
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 115)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				121: {
					title: "Water VI",
			description: "Water amount boosts Lithium gain",
			cost: new Decimal(278000000),
						unlocked() {return (hasUpgrade("b", 115))},
						effect() {if (hasUpgrade("b", 121)) return player.b.l.pow(10)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 121)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				122: {
					title: "Water VII",
			description: "Physics boosts Water gain",
			cost: new Decimal(4.8e9),
						unlocked() {return (hasUpgrade("b", 121))},
						effect() {if (hasUpgrade("b", 122)) return player.b.points.pow(1.2)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 122)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				123: {
					title: "Water VIII",
			description: "Water amount boosts Hydrogen gain",
			cost: new Decimal(2e12),
						unlocked() {return (hasUpgrade("b", 122))},
						effect() {if (hasUpgrade("b", 123)) return player.b.l.pow(6)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 123)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				124: {
					title: "Water IX",
			description: "Hydrogen boosts Lithium gain",
			cost: new Decimal(7e13),
						unlocked() {return (hasUpgrade("b", 123))},
						effect() {if (hasUpgrade("b", 124)) return player.c.h.pow(2)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 124)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				125: {
					title: "Water X",
			description() {if (player.b.buyables[12].gte(1)) return "Steam boosts water gain"
				else return "Lithium/Hydrogen^19 boosts water gain"},
			cost: new Decimal(1e14),
						unlocked() {return (player.b.buyables[12].gte(1) || player.b.points.gte(210))},
						effect() {if (player.b.buyables[12].gte(1) || player.b.points.gte(210)) return player.b.st.times(3)
							if (hasUpgrade("b", 125)) return player.c.li.div(player.c.h.pow(19)).times(0.9).min(1e15).max(1)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 125)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				131: {
					title: "Water XI",
			description() {return "Twice [Steam Gain] effect"},
			cost: new Decimal(1e27),
						unlocked() {return (hasUpgrade("b", 125))},
						effect() {
							if (hasUpgrade("b", 131)) return new Decimal(2)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 131)) + "x"},
				currencyDisplayName: "L of water", // Use if using a nonstandard currency
                currencyInternalName: "l", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				132: {
					title: "Steam I",
			description() {return "Additional [Water Gain] levels gives a boost to [Steam Gain]"},
			cost: new Decimal(100000),
						unlocked() {return (hasUpgrade("b", 131))},
						effect() {
							if (hasUpgrade("b", 132)) return player.b.buyables[22]
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 132)) + "x"},
				currencyDisplayName: "Steam", // Use if using a nonstandard currency
                currencyInternalName: "st", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				133: {
					title: "Steam II",
			description() {return "Physics boosts Steam gain"},
			cost: new Decimal(1200000),
						unlocked() {return (hasUpgrade("b", 132))},
						effect() {
							if (hasUpgrade("b", 133)) return player.b.points.times(0.2)
							else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("b", 133)) + "x"},
				currencyDisplayName: "Steam", // Use if using a nonstandard currency
                currencyInternalName: "st", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
						134: {
					title: "Steam III",
			description() {return "Buyed upgrades boosts Steam gain"},
			cost: new Decimal(38000000),
						unlocked() {return (hasUpgrade("b", 133))},
						effect() {
							if (hasUpgrade("b", 134)) ret = Decimal.pow(1.4, player.b.upgrades.length)
							else ret = new Decimal(1)
						return ret},
			effectDisplay() {return format(upgradeEffect("b", 134)) + "x"},
				currencyDisplayName: "Steam", // Use if using a nonstandard currency
                currencyInternalName: "st", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
				135: {
					title: "Steam IV",
			description() {return "Unlock another element."},
			cost: new Decimal(3e9),
						unlocked() {return (hasUpgrade("b", 134))},
						effect() {
							if (hasUpgrade("b", 135)) return player.b.st.pow(0.1)
							else return new Decimal(1)},
			effectDisplay() {return "+" + format(upgradeEffect("b", 135)) + " Carbon/s"},
				currencyDisplayName: "Steam", // Use if using a nonstandard currency
                currencyInternalName: "st", // Use if using a nonstandard currency
                currencyLayer: "b", // Use if using a nonstandard currency
		},
	},
		buyables: {
						      11: {
        title: "Spell a rain",
				purchaseLimit: 10,
        cost(x) {return new Decimal(1).times(x.add(1)).pow(x.add(1))},
		canAfford() {return (player.b.points.gte(this.cost()))},
        display() { return `Generate Water<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Physics<br>Effect: +${format(this.effect())} L/s`},
        buy() {
          player.b.points = player.b.points.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        effect(x) {
let eff = x.add(0.45).pow(2).times(upgradeEffect("b",111)).times(upgradeEffect("b",112)).times(upgradeEffect("b",113)).times(upgradeEffect("b",114)).times(upgradeEffect("b",115)).times(upgradeEffect("b",122)).times(upgradeEffect("b",125)).times(buyableEffect("b",22))
          return eff
        },
        style: {
          width: "150px",
          height: "150px",
        },
      },
						      12: {
        title: "Create a fog after rain",
				purchaseLimit: 10,
        cost(x) {return new Decimal(210).times(x.add(1)).pow(x.add(1))},
		canAfford() {return (player.b.points.gte(this.cost()))},
        display() { return `Generate Steam. Stop producing of water per/s.<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Physics<br>Effect: +${format(this.effect())} steam/s`},
        buy() {
          player.b.points = player.b.points.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        effect(x) {
let eff = x.add(0.45).pow(2).times(buyableEffect("b",21))
          return eff
        },
        style: {
          width: "150px",
          height: "150px",
        },
      },
						      21: {
        title: "Steam Gain",
				purchaseLimit: 25,
        cost(x) {return new Decimal(82).times(x.add(1))},
		unlocked() {return player.b.buyables[12].gte(1)},
		canAfford() {return (player.b.st.gte(this.cost()))},
        display() { return `Boost Steam gain.<br>Level: ${formatWhole(getBuyableAmount(this.layer, this.id))}/25<br>Cost: ${format(this.cost())} Steam<br>Effect: x${format(this.effect())} to steam gain`},
        buy() {
          player.b.st = player.b.st.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
if (player.b.buyables[21].gte(1)) eff = x.add(0.75).times(6.45).times(player.b.buyables[22].times(0.5)).times(upgradeEffect("b", 131)).times(upgradeEffect("b", 132)).times(upgradeEffect("b", 133)).times(upgradeEffect("b", 134))
		else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "150px",
          height: "150px",
        },
      },
						      22: {
        title: "Water Gain",
				purchaseLimit: 10,
        cost(x) {return new Decimal(1725).times(x.add(1))},
				unlocked() {return player.b.buyables[12].gte(1)},
		canAfford() {return (player.b.st.gte(this.cost()))},
        display() { return `Boost Water gain.<br>Level: ${formatWhole(getBuyableAmount(this.layer, this.id))}/10<br>Cost: ${format(this.cost())} Steam<br>Effect: x${format(this.effect())} to water gain`},
        buy() {
          player.b.st = player.b.st.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
if (player.b.buyables[22].gte(1)) eff = x.add(1.5).pow(6.5)
	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "150px",
          height: "150px",
        },
      },
		},
			clickables: {
		      11: {
        display() {return `Respec Phenomenas`},
        onClick() {
          if(confirm("Are you sure you want to respec? This will turn off all of Phenomenas except rain")){
			  player.b.buyables[12] = new Decimal(0)
player.b.points = new Decimal(0)
          }
        },
        canClick() {return true},
        style: {
          width: "100px",
          minHeight: "50px",
        },
      },
	},
	update(diff) {
			if (player.b.buyables[12].gte(1)) {
				player.b.st = player.b.st.add(buyableEffect("b", 12).times(diff))
				player.b.l = player.b.l.sub(player.b.l.times(40).times(diff)).max(10)
			}
		if (player.b.buyables[11].gte(1)) return player.b.l = player.b.l.add(buyableEffect("b",11).times(diff))
		if (hasUpgrade("b", 32)) return player.b.pwr = player.b.pwr.add(tmp.b.effect.times(diff))
	},
			passiveGeneration() {
				if (hasAchievement("a", 71)) return (hasAchievement("a", 71)?0:0)
				if (hasMilestone("g", 11)) return (hasMilestone("g", 11)?1e30:0)
				if (hasUpgrade("b", 74)) return (hasUpgrade("b", 74)?5e10:0)
if (hasUpgrade("b", 73)) return (hasUpgrade("b", 73)?5:0)				
					if (hasUpgrade("b", 72)) return (hasUpgrade("b", 72)?1:0)
  },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for Boosters", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
}),
addLayer("i", {
    name: "incremental", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
effectDescription() {return "which are gaining <h2 style='color: #F2CD9B; text-shadow: 0 0 10px #F2CD9B'>" + format(player.i.points.max(1).times(2)) + "x</h2> to Booster and Power gain <br>"},	// Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		best: new Decimal(0),
		energy: new Decimal(0),
		sci: new Decimal(2000000),
		a: new Decimal(0),
    }},
					    pasgain() {
            let gain = new Decimal(0.175);
			let sc = new Decimal(2000000);
		if (player.ex.points.gte(1) || hasUpgrade("ex", 11)) gain = gain.times(2)
		if (hasUpgrade("i", 22)) gain = gain.times(upgradeEffect("i", 22))
		if (hasUpgrade("i", 23)) gain = gain.times(upgradeEffect("i", 23))
		if (hasUpgrade("i", 24)) gain = gain.times(upgradeEffect("i", 24))
		if (hasUpgrade("i", 31)) gain = gain.times(upgradeEffect("i", 31))
		if (hasUpgrade("i", 32)) gain = gain.times(upgradeEffect("i", 32))
		if (hasUpgrade("i", 33)) gain = gain.times(upgradeEffect("i", 33))
		if (hasUpgrade("i", 34)) gain = gain.times(upgradeEffect("i", 34))
		if (hasUpgrade("i", 41)) gain = gain.times(upgradeEffect("i", 41))
		if (hasUpgrade("i", 42)) gain = gain.times(upgradeEffect("i", 42))
		if (hasUpgrade("i", 43)) gain = gain.times(upgradeEffect("i", 43))
		if (hasUpgrade("i", 44)) gain = gain.times(sc.pow(300))
		if (hasUpgrade("g", 21)) gain = gain.times(upgradeEffect("g", 21))
			if (player.i.points.gte(Decimal.pow(1e9, 1e30))) gain = gain.pow(0.1)
		if (hasUpgrade("i", 52)) gain = gain.times(player.i.energy.max(1).pow(0.4)).pow(0.3)
		if (hasUpgrade("i", 53)) gain = gain.times(player.i.energy.max(1).pow(0.4)).pow(0.6)
			if (player.m.points.gte(1)) gain = gain.times(player.m.points.max(1).add(1000))
		if (hasUpgrade("i", 33)) sc = sc.times(upgradeEffect("i", 33))
		if (hasUpgrade("i", 34)) sc = sc.times(upgradeEffect("i", 34))
		if (hasUpgrade("i", 41)) sc = sc.times(upgradeEffect("i", 41))
		if (hasUpgrade("i", 42)) sc = sc.times(upgradeEffect("i", 42))
		if (hasUpgrade("i", 43)) sc = sc.times(upgradeEffect("i", 43))
		if (hasUpgrade("i", 44)) sc = sc.times(sc.pow(300))
		if (hasUpgrade("ex", 14)) sc = sc.times(gain)
		if (player.i.points.gte(sc)) gain = gain.div(gain).sub(1)
        return gain;
    },
				    effect() {
        if (!hasUpgrade("i", 11))
            return new Decimal(1);
        let eff = Decimal.pow(1);
		if (hasUpgrade("i", 13)) eff = eff.times(upgradeEffect("i", 13).pow(1e9)).min(Decimal.pow(10, 1025000))
		if (player.i.energy.gte(1)) eff = eff.times(player.i.points.max(1).pow(0.45).add(player.b.points.pow(0.1)).min(1e9))
			if (hasUpgrade("b", 101)) eff = eff.times(upgradeEffect("b", 101))
				if (hasUpgrade("b", 102)) eff = eff.times(upgradeEffect("b", 102))
			if (hasUpgrade("b", 103)) eff = eff.times(upgradeEffect("b", 103))
			if (hasUpgrade("b", 104)) eff = eff.times(upgradeEffect("b", 104))
			if (hasUpgrade("b", 105)) eff = eff.times(upgradeEffect("b", 105))
				if (hasUpgrade("i", 12)) eff = eff.times(upgradeEffect("i", 12))
			if (hasUpgrade("i", 51)) eff = eff.times(upgradeEffect("i", 51))
				if (hasUpgrade("i", 52)) eff = eff.times(player.i.energy.max(1).pow(0.4))
			if (hasUpgrade("i", 61)) eff = eff.times(upgradeEffect("i", 61))
			if (hasUpgrade("i", 62)) eff = eff.times(upgradeEffect("i", 62))
			if (hasUpgrade("i", 63)) eff = eff.times(upgradeEffect("i", 63))
				if (player.ex.buyables[22].gte(1)) eff = eff.times(buyableEffect("ex", 22))
		
        return eff;
    },
    color: "#F2CD9B",
	branches: ["b"],
    requires() {return Decimal.pow(10,321)}, // Can be a function that takes requirement increases into account
    resource: "incrementals", // Name of prestige currency
    baseResource: "boosters", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 11, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if (hasUpgrade("b", 85)) mult = mult.div(upgradeEffect("b", 85))
		if (hasUpgrade("b", 84)) mult = mult.div(upgradeEffect("b", 84))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
	canBuyMax(){
		return (hasUpgrade("i", 73))
	},
			        tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
	microtabs: {
    stuff: {
                    "Upgrades": {
						unlocked() {return (!inChallenge("m", 12))},
                content: [
                    ["blank", "15px"],
					["display-text", () => "You are gaining <h2 style='color: #F2CD9B; text-shadow: 0 0 10px #F2CD9B'>" + format(tmp.i.pasgain) + "</h2> Incrementals/s" ],
					["display-text", () => "You have <h2 style='color: #F2CD9B; text-shadow: 0 0 10px #F2CD9B'>" + format(player.i.energy) + "</h2> Energy, which gains <h2 style='color: #F2CD9B; text-shadow: 0 0 10px #F2CD9B'> <br>" + format(player.i.energy.max(1).pow(0.4)) + "x</h2> boost to booster gain"],
                    ["upgrades", [1,2,3,4,5,6]]
                ]
            },
			"Allocations": {
										unlocked() {return (inChallenge("m", 12))},
                content: [
                    ["blank", "15px"],
			["display-text", () => "You have <h2 style='color: #F2CD9B; text-shadow: 0 0 10px #F2CD9B'>" + format(player.i.buyables[11]) + "</h2> Allocations"],
			"buyables",
                    ["upgrades", [7,8,9,10]]
                ]
            },
			                    "Milestones": {
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]
            },
	},
	},
	upgrades: {
		11: {
			title: "Incremenergy!",
			description: "Unspent Incrementals boost booster gain and start gaining 1 energy/s",
			cost: new Decimal(3),
			effect() {return player.i.points.max(1).times(3.5)},
			effectDisplay() {return format(upgradeEffect("i", 11)) + "x"},
		},
		12: {
			title: "Exponent?",
			description: "Unspent Incrementals boost energy gain",
			cost: new Decimal(4),
			unlocked() {return hasUpgrade("i", 11)},
			effect() {return player.i.points.max(1).times(Decimal.pow(10, 309))},
			effectDisplay() {return format(upgradeEffect("i", 12)) + "x"},
		},
		13: {
			title: "I think",
			description: "Generators boost energy gain",
			cost: new Decimal(5),
			unlocked() {return hasUpgrade("i", 12)},
			effect() {return player.g.points.max(1).times(1e8)},
			effectDisplay() {return format(upgradeEffect("i", 13)) + "x"},
		},
		14: {
					title: "why not :D",
			description: "Boosters boost energy effect",
			cost: new Decimal(6),
			unlocked() {return hasUpgrade("i", 13)},
			effect() {return player.b.points.max(1).pow(0.003).min(Decimal.pow(10, 15000))},
			effectDisplay() {return format(upgradeEffect("i", 14)) + "x"},
		},
		21: {
					title: "One more",
			description: "Points boost energy effect",
			cost: new Decimal(10),
			unlocked() {return hasUpgrade("i", 14)},
			effect() {return player.points.max(1).pow(30)},
			effectDisplay() {return format(upgradeEffect("i", 21)) + "x"},
		},
		22: {
					title: "Or 3 rows",
			description: "Points boost incrementals passive gain",
			cost: new Decimal(30),
			unlocked() {return hasUpgrade("i", 21)},
			effect() {return player.points.max(1).pow(0.2).min(15)},
			effectDisplay() {return format(upgradeEffect("i", 22)) + "x"},
		},
		23: {
					title: "Will be",
			description: "Boosters boost incrementals passive gain",
			cost: new Decimal(70),
			unlocked() {return hasUpgrade("i", 22)},
			effect() {return player.b.points.max(1).pow(0.2).min(150)},
			effectDisplay() {return format(upgradeEffect("i", 23)) + "x"},
		},
		24: {
					title: "Good",
			description: "Generators boost incrementals passive gain",
			cost: new Decimal(7500),
			unlocked() {return hasUpgrade("i", 23)},
			effect() {return player.g.points.max(1).pow(0.5).min(360)},
			effectDisplay() {return format(upgradeEffect("i", 24)) + "x"},
		},
		31: {
					title: "Incrementals",
			description: "Self boost incrementals passive gain",
			cost: new Decimal(17500),
			unlocked() {return hasUpgrade("i", 24)},
			effect() {return player.i.points.max(1).pow(1.2).min(36)},
			effectDisplay() {return format(upgradeEffect("i", 31)) + "x"},
		},
		32: {
					title: "Increases",
			description: "Self^2 boost incrementals passive gain",
			cost: new Decimal(305500),
			unlocked() {return hasUpgrade("i", 31)},
			effect() {return player.i.points.max(1).pow(2.2).min(15)},
			effectDisplay() {return format(upgradeEffect("i", 32)) + "x"},
		},
		33: {
					title: "Its",
			description: "Booster^2 boost incrementals passive hardcap",
			cost: new Decimal(2000000),
			unlocked() {return hasUpgrade("i", 32)},
			effect() {return player.b.points.max(1).pow(2.2).min(15)},
			effectDisplay() {
				if (hasUpgrade("i", 44)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Hardcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)).times(upgradeEffect("i", 42)).times(upgradeEffect("i", 43)).times(player.i.sci.pow(300)))+"</b>"
				if (hasUpgrade("i", 43)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Hardcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)).times(upgradeEffect("i", 42)).times(upgradeEffect("i", 43)))+"</b>"
				if (hasUpgrade("i", 42)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Hardcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)).times(upgradeEffect("i", 42)))+"</b>"
				if (hasUpgrade("i", 41)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Hardcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)))+"</b>"
			if (hasUpgrade("i", 34)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Hardcap is</b>  <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34))) + "</b>"
				if (hasUpgrade("i", 33)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Hardcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33))) + "</b>"
				else return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Hardcap is</b> <b>" + format(player.i.sci) + "</b>"},
		},
		34: {
					title: "Own Hardcap",
			description: "Incrementals boost incrementals passive hardcap and its own gain",
			cost: new Decimal(30000000),
			unlocked() {return hasUpgrade("i", 33)},
			effect() {return player.i.points.max(1).pow(0.3).min(7)},
			effectDisplay() {return format(upgradeEffect("i", 34)) + "x"},
		},
		41: {
					title: "And",
			description: "Incrementals boost incrementals passive hardcap and its own gain",
			cost: new Decimal(210000000),
			unlocked() {return hasUpgrade("i", 34)},
			effect() {return player.i.points.max(1).pow(0.3).min(70)},
			effectDisplay() {return format(upgradeEffect("i", 41)) + "x"},
		},
		42: {
					title: "Boosts",
			description: "Hardcap boosts its own and energy gain",
			cost: new Decimal(1.47e10),
			unlocked() {return hasUpgrade("i", 41)},
			effect() {return player.i.sci.pow(0.3).min(70)},
			effectDisplay(){ return format(upgradeEffect("i", 42)) + "x"},
		},
		43: {
					title: "Booster",
			description: "Hardcap boosts its own and energy gain",
			cost: new Decimal(1.02e12),
			unlocked() {return hasUpgrade("i", 42)},
			effect() {return player.i.sci.pow(0.3).min(20)},
			effectDisplay(){ return format(upgradeEffect("i", 43)) + "x"},
		},
		44: {
					title: "Gain",
			description: "Hardcap boosts booster gain and self-boost hardcap",
			cost: new Decimal(2.05e13),
			unlocked() {return hasUpgrade("i", 42)},
			effect() {return player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)).times(upgradeEffect("i", 42)).times(upgradeEffect("i", 43)).times(player.i.sci.pow(300)).pow(1500).min(Decimal.pow(10, 3000000))},
			effectDisplay(){ return format(upgradeEffect("i", 44)) + "x"},
		},
		51: {
					title: "ExpantaNums",
			description: "Expantanums boosts energy gain",
			cost: new Decimal(Decimal.pow(1e9, 1.14e5)),
			unlocked() {return (upgradeEffect("ex", 32).gte(2))},
			effect() {return player.ex.points.pow(1.6e4).max(1)},
			effectDisplay(){ return format(upgradeEffect("i", 51)) + "x"},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
				52: {
					title: "Boosts",
			description: "Apply Energy effect to energy gain",
			cost: new Decimal(Decimal.pow(1e9, 1.454e5)),
			unlocked() {return (hasUpgrade("i", 51))},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
				53: {
					title: "Incrementals",
			description: "Apply Energy effect to Incrementals gain at reduced rate (^0.3)",
			cost: new Decimal(Decimal.pow(1e9, 2.434e5)),
			unlocked() {return (hasUpgrade("i", 52))},
			effect() {return player.i.energy.max(1).pow(0.4).pow(0.3).min(Decimal.pow(1e9, 1e45))},
						effectDisplay(){ return format(upgradeEffect("i", 53)) + "x"},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
				54: {
					title: "Gain",
			description: "Apply Energy effect to Incrementals gain at reduced rate (^0.6)",
			cost: new Decimal(Decimal.pow(1e9, 4.96e5)),
			unlocked() {return (hasUpgrade("i", 53))},
			effect() {return player.i.energy.max(1).pow(0.4).pow(0.6).min(Decimal.pow(1e9, 1e45))},
						effectDisplay(){ return format(upgradeEffect("i", 54)) + "x"},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
		61: {
					title: "Incrementals",
			description: "Expantanum boost energy gain at boosted rate",
			cost: new Decimal(Decimal.pow(1e9, 2.28e11)),
			unlocked() {return (upgradeEffect("ex", 32).gte(3))},
			effect() {return player.ex.points.pow(1e4).sub(player.ex.points.pow(3)).min(Decimal.pow(1e9, 4e41)).max(1)},
			effectDisplay(){ return format(upgradeEffect("i", 61)) + "x"},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
		62: {
					title: "Boosts",
			description: "Generators boost energy gain",
			cost: new Decimal(Decimal.pow(1e9, 4.06e41)),
			unlocked() {return (hasUpgrade("i", 61))},
			effect() {return player.g.points.pow(1e47)},
			effectDisplay(){ return format(upgradeEffect("i", 62)) + "x"},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
		63: {
					title: "All",
			description: "[Ultra-Energy Booster] applies to energy gain at boosted rate (^1e56)",
			cost: new Decimal(Decimal.pow(1e9, 6.86e46)),
			unlocked() {return (hasUpgrade("i", 62))},
			effect() {return upgradeEffect("b", 85).pow(1e56)},
			effectDisplay(){ return format(upgradeEffect("i", 63)) + "x"},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
		64: {
					title: "Gains",
			description: "Energy effect applies to all gains (except ExpantaNum)",
			cost: new Decimal(Decimal.pow(1e9, 2.604e57)),
			unlocked() {return (hasUpgrade("i", 63))},
			effect() {return upgradeEffect("b", 85).pow(1e56)},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
		71: {
					title: "Booster Allocation",
			description: "Boost Booster gain by allocations amount. <br> Req: 1 Incremental",
			cost: new Decimal(1),
			unlocked() {return true},
						effect() {return player.i.buyables[11].add(1).pow(Decimal.pow(1.2, 106))},
			canAfford() {return player.i.buyables[11].gte(1)},
			pay() {return player.i.buyables[11] = player.i.buyables[11].sub(1)},
			effectDisplay() {return "x" + format(upgradeEffect("i", 71))},
				currencyDisplayName: "Allocations", // Use if using a nonstandard currency
		},
		72: {
					title: "Booster Allocation II",
			description: "Scale [Synergism] effect by generators amount. <br> Req: 3 Incremental",
			cost: new Decimal(3),
						unlocked() {return (hasUpgrade("i", 71))},
			unlocked() {return true},
						effect() {return player.g.points.add(1).pow(Decimal.pow(1.2, 1040))},
			canAfford() {return player.i.buyables[11].gte(3)},
			pay() {return player.i.buyables[11] = player.i.buyables[11].sub(1)},
			effectDisplay() {return "x" + format(upgradeEffect("i", 72))},
				currencyDisplayName: "Allocations", // Use if using a nonstandard currency
		},
		73: {
					title: "Booster Allocation III",
			description: "Scale [Synergism] effect by generators amount and bulk buy Incrementals. <br> Req: 5 Incremental",
			cost: new Decimal(5),
						unlocked() {return (hasUpgrade("i", 72))},
			unlocked() {return true},
						effect() {return player.g.points.add(1).pow(Decimal.pow(1.2, 2020))},
			canAfford() {return player.i.buyables[11].gte(5)},
			pay() {return player.i.buyables[11] = player.i.buyables[11].sub(1)},
			effectDisplay() {return "x" + format(upgradeEffect("i", 73))},
				currencyDisplayName: "Allocations", // Use if using a nonstandard currency
		},
		74: {
					title: "Allocation X",
			description: "Boost Boosters by generators amount and bulk buy Incrementals. <br> Req: 100 Incremental",
			cost: new Decimal(100),
						unlocked() {return (hasUpgrade("i", 73))},
			unlocked() {return true},
						effect() {return player.g.points.add(1).pow(Decimal.pow(1.2, 5020))},
			canAfford() {return player.i.buyables[11].gte(5)},
			pay() {return player.i.buyables[11] = player.i.buyables[11].sub(1)},
			effectDisplay() {return "x" + format(upgradeEffect("i", 73))},
				currencyDisplayName: "Allocations", // Use if using a nonstandard currency
		},
	},
	milestones: {
		11: {
			requirementDescription: "4 Incrementals",
			effectDescription: "Autobuys Booster upgrades",
			done() { return (player.i.points.gte(4)) },
			toggles: [["b", "auto"]],			
    },
		12: {
			requirementDescription: "10 Incrementals",
			effectDescription: "Start passively gain Incrementals",
			done() { return (player.i.points.gte(10)) },			
    },
		},
					    		doReset(resettingLayer) {
			if (layers[resettingLayer].row <= layers[this.layer].row) return
			let keep = [];
							 if (hasUpgrade("g", 31)|| player.ex.points.gte(1)) keep.push("milestones");
			             layerDataReset("i", keep)
		},
						buyables: {
									      11: {
        title: "Reset for Allocation",
        cost(x) {return new Decimal(3).times(x.add(1).add(player.g.points))},
        display() {let data = tmp[this.layer].buyables[this.id]
 return `Next At ${format(this.cost())} Incrementals`},
		canAfford() {return (player.i.points.gte(this.cost()))},
        buy() {
		  player.i.points = player.i.points.sub(this.cost())
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        style: {
          width: "175px",
          height: "120px",
        },
      },
						},
		update(diff) {
		if (hasMilestone("i", 12) && !inChallenge("m", 12)) {
			player.i.energy = player.i.energy.add(tmp.i.effect.times(diff))
			player.i.points = player.i.points.add(tmp.i.pasgain.times(diff))}
		if (hasUpgrade("i", 11)) return player.i.energy = player.i.energy.add(tmp.i.effect.times(diff))
	},
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for incrementals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasAchievement("a", 71)) return "ghost"
		else return (hasUpgrade("b", 75) || player[this.layer].unlocked)}
})
addLayer("g", {
    name: "generator", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		energy: new Decimal(0),
    }},
    color: "#E99BF2",
	branches: ["b"],
	effectDescription() {return "which are gaining <h2 style='color: #E99BF2; text-shadow: 0 0 10px #E99BF2'>" + format(player.g.points.max(1).add(1)) + "x</h2> to Booster and Power gain <br>"},
    requires() {return Decimal.pow(10,59265)},// Can be a function that takes requirement increases into account
    resource: "generators", // Name of prestige currency
    baseResource: "boosters", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {if (inChallenge("m", 12)) return new Decimal(50)
		else return new Decimal(17.86)}, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
	    canBuyMax() {
        return hasMilestone("ex", 12)
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
				        tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
	microtabs: {
    stuff: {
                    "Upgrades": {
                content: [
                    ["blank", "15px"],
					["display-text", () => "You have <h2 style='color: #E99BF2; text-shadow: 0 0 10px #E99BF2'>" + format(player.g.energy) + "</h2> Generator Power, which gains <h2 style='color: #E99BF2; text-shadow: 0 0 10px #E99BF2'> <br>" + format(player.g.energy.max(1).pow(0.4)) + "x</h2> boost to booster gain"],
                    ["upgrades", [1,2,3,4,5]]
                ]
            },
			                    "Milestones": {
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]
            },
	},
	},
					    effect() {
        if (!hasUpgrade("g", 14))
            return new Decimal(1);
        let eff = Decimal.pow(1);
		if (player.g.energy.gte(1)) eff = eff.times(player.g.points.pow(1.8).add(player.g.energy.pow(2))).min(1e25)
		if (hasUpgrade("g", 15)) eff = eff.times(upgradeEffect("g", 15))
		if (hasUpgrade("g", 22)) eff = eff.times(upgradeEffect("g", 22))
			if (hasUpgrade("ex", 24)) eff = eff.times(upgradeEffect("ex", 24))
	if (hasUpgrade("g", 41)) eff = eff.times(upgradeEffect("g", 41))
	if (hasUpgrade("g", 42)) eff = eff.times(upgradeEffect("g", 42))
	if (hasUpgrade("g", 43)) eff = eff.times(upgradeEffect("g", 43))
	if (hasUpgrade("g", 44)) eff = eff.times(upgradeEffect("g", 44))
	if (player.ex.buyables[22].gte(1)) eff = eff.times(buyableEffect("ex", 22))
	if (hasUpgrade("g", 51)) eff = eff.times(upgradeEffect("g", 51))
		if (hasUpgrade("g", 52)) eff = eff.times(upgradeEffect("g", 52))
	if (hasUpgrade("g", 53)) eff = eff.times(upgradeEffect("g", 53))
	if (hasUpgrade("g", 54)) eff = eff.times(upgradeEffect("g", 54))
		if (hasUpgrade("g", 55)) eff = eff.times(upgradeEffect("g", 55))
			if (player.m.points.gte(1)) eff = eff.times(player.m.points.max(1).add(1000))
        return eff;
    },
		upgrades: {
		11: {
			title: "Generating",
			description: "Unspent Generators boost booster gain",
			cost: new Decimal(2),
			effect() {return player.g.points.max(1).add(1).times(300)},
			effectDisplay() {return format(upgradeEffect("g", 11)) + "x"},
		},
		12: {
			title: "Boosters",
			description: "Unspent Generators boost booster gain",
			cost: new Decimal(3),
			unlocked() {return hasUpgrade("g", 11)},
			effect() {return player.g.points.max(1).add(1).pow(2)},
			effectDisplay() {return format(upgradeEffect("g", 12)) + "x"},
		},
		13: {
			title: "Based On",
			description: "Unspent Generators boost booster gain",
			cost: new Decimal(6),
			unlocked() {return hasUpgrade("g", 12)},
			effect() {return player.g.points.max(1).add(1).pow(5)},
			effectDisplay() {return format(upgradeEffect("g", 13)) + "x"},
		},
		14: {
			title: "Generator Power",
			description: "Start gaining Generator Power",
			cost: new Decimal(10),
			unlocked() {return hasUpgrade("g", 13)},
		},
		15: {
			title: "And",
			description: "Boost Generator Power gain by itself",
			cost: new Decimal(11),
			unlocked() {return hasUpgrade("g", 14)},
			effect() {return player.g.energy.max(1).pow(.5).min(1e20)},
			effectDisplay() {return format(upgradeEffect("g", 15)) + "x"},
		},
		21: {
			title: "Generator Power",
			description: "Each Generator upgrade boosts Incrementals and energy effect",
			cost: new Decimal(3e46),
			unlocked() {return hasUpgrade("g", 15)},
			effect() {let ret = Decimal.pow(1e250, player.g.upgrades.length)
				return ret},
			effectDisplay() {return format(upgradeEffect("g", 21)) + "x"},
				currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g",
		},
		22: {
			title: "Exponents",
			description: "Each Generator upgrade boosts Generator Power gain",
			cost: new Decimal(5e46),
			unlocked() {return hasUpgrade("g", 21)},
			effect() {let ret = Decimal.pow(1e10, player.g.upgrades.length)
				return ret},
			effectDisplay() {return format(upgradeEffect("g", 22)) + "x"},
				currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g",
		},
		23: {
			title: "Itself",
			description: "Each Generator upgrade adds an additional base boost to Generator Power effect",
			cost: new Decimal(4e116),
			unlocked() {return hasUpgrade("g", 22)},
			effect() {let ret = Decimal.pow(1e230, player.g.upgrades.length)
				return ret},
			effectDisplay() {return format(upgradeEffect("g", 23)) + "x"},
				currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g",
		},
		24: {
			title: "And Booster Gain",
			description: "Generators boosts booster gain",
			cost: new Decimal(17),
			unlocked() {return hasUpgrade("g", 23)},
			effect() {return player.g.points.pow(Decimal.pow(1e300, 1e8)).min(Decimal.pow(1e300, 1e20)).max(1)},
			effectDisplay() {return format(upgradeEffect("g", 24)) + "x"},
		},
		25: {
			title: "At Boosted Rate",
			description: "Generators boosts booster gain",
			cost: new Decimal(3e136),
			unlocked() {return hasUpgrade("g", 24)},
			effect() {return player.g.points.pow(Decimal.pow(1e300, 1e8)).min(Decimal.pow(1e300, 3e30)).max(1)},
			effectDisplay() {return format(upgradeEffect("g", 25)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				31: {
			title: "Keep ALL",
			description: "Buying this upgrade, first Incrementals and Generators milestones are keep on higher row reset. <br> Boosts Booster gain by e1e32x",
			cost: new Decimal(Decimal.pow(1e300, 1.5e30)),
			unlocked() {return hasUpgrade("g", 24)},
			effect() {return player.g.points.max(Decimal.pow(1e300, 1.5e31))},
			currencyDisplayName: "Boosters", // Use if using a nonstandard currency
                currencyInternalName: "points", // Use if using a nonstandard currency
                currencyLayer: "b",
				style() {
					return {
						'width': '600px'
					}
				},
		},
				41: {
			title: "Generators^2",
			description: "Boost Generator Power gain by itself",
			cost: new Decimal(330),
			unlocked() {return upgradeEffect("ex", 33).gte(2)},
			effect() {return player.g.energy.pow(0.05).max(1)},
			effectDisplay() {return format(upgradeEffect("g", 41)) + "x"},
		},
				42: {
			title: "Tetrates",
			description: "Generators boosts Generator Power gain",
			cost: new Decimal(.7e205),
			unlocked() {return hasUpgrade("g", 41)},
			effect() {return tmp.g.effect.pow(0.03).max(1)},
			effectDisplay() {return format(upgradeEffect("g", 42)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				43: {
			title: "Expantanum",
			description: "Each Generators upgrades gives a boost to Generator power gain",
			cost: new Decimal(4e221),
			unlocked() {return hasUpgrade("g", 42)},
			effect() {let ret = Decimal.pow(1e4, player.g.upgrades.length)
			return ret},
			effectDisplay() {return format(upgradeEffect("g", 43)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				44: {
			title: "And Itself",
			description: "Each Booster upgrade gives a boost to Generator Power gain",
			cost: new Decimal(1.5e294),
			unlocked() {return hasUpgrade("g", 43)},
			effect() {let ret = Decimal.pow(120, player.b.upgrades.length)
			return ret},
			effectDisplay() {return format(upgradeEffect("g", 44)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				45: {
			title: "Gain",
			description: "Apply Generator Power to expantaNum gain at boosted rate (^1e67)",
			cost: new Decimal(Decimal.pow(10, 399)),
			unlocked() {return hasUpgrade("g", 43)},
			effect() {return tmp.g.effect.pow(1e67).max(1)},
			effectDisplay() {return format(upgradeEffect("g", 45)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				51: {
			title: "Generateness I",
			description: "Apply expantanum to Generator Power gain at boosted rate (^1e154)",
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(40, 303))),
			unlocked() {return player.ex.buyables[23].gte(1)},
			effect() {return player.ex.points.pow(2e154).min(Decimal.pow(1e300, Decimal.pow(40, 500)))},
			effectDisplay() {return format(upgradeEffect("g", 51)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				52: {
			title: "Generateness II",
			description: "Apply Energy to Generator Power gain at boosted rate (^4e154)",
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(40, 500))),
			unlocked() {return hasUpgrade("g", 51)},
			effect() {return tmp.i.effect.pow(4e154).min(Decimal.pow(1e300, Decimal.pow(40, 1500)))},
			effectDisplay() {return format(upgradeEffect("g", 52)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				53: {
			title: "Generateness III",
			description: "Apply Boosters to Generator Power gain at boosted rate (^2e154)",
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(40, 1500))),
			unlocked() {return hasUpgrade("g", 52)},
			effect() {return player.b.points.pow(2e154).min(Decimal.pow(1e300, Decimal.pow(40, 3500))).max(1)},
			effectDisplay() {return format(upgradeEffect("g", 53)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				54: {
			title: "Generateness IV",
			description: "Apply Self to Self gain at boosted rate (^1e308)",
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(40, 3500))),
			unlocked() {return hasUpgrade("g", 53)},
			effect() {return player.g.energy.pow(1e308).pow(1e308).min(Decimal.pow(1e300, Decimal.pow(40, 15500))).max(1)},
			effectDisplay() {return format(upgradeEffect("g", 54)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
				55: {
			title: "Generateness V",
			description: "Apply Points to Generator Power gain at boosted rate (^1e308)",
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(40, 15500))),
			unlocked() {return hasUpgrade("g", 54)},
			effect() {return player.points.pow(Decimal.pow(1e308, 1e308)).min(Decimal.pow(1e300, Decimal.pow(40, 150500)))},
			effectDisplay() {return format(upgradeEffect("g", 55)) + "x"},
currencyDisplayName: "Generator Power", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "g"
		},
		},
			milestones: {
		11: {
			requirementDescription: "11 Generators",
			effectDescription: "Gain 1e30% of Booster gain on reset",
			done() { return (player.g.points.gte(11)) },		
    },
			},
			    		doReset(resettingLayer) {
			if (layers[resettingLayer].row <= layers[this.layer].row) return
			let keep = [];
			if (hasMilestone("ex", 11)) keep.push("upgrades", "milestones")
			  else if (hasUpgrade("g", 31)|| player.ex.points.gte(1)) keep.push("milestones");
		  layerDataReset("g", keep)
		},
				update(diff) {
					if (hasUpgrade("m", 21) && !inChallenge("m", 12) && !inChallenge("m", 11)) {
						 player.g.energy = player.g.energy.add(tmp.g.effect.times(diff))
						 player.g.points = player.g.points.add(diff)
					}
		if (hasUpgrade("g", 14)) return player.g.energy = player.g.energy.add(tmp.g.effect.times(diff))
	},
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Generators", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ if (hasAchievement("a", 71)) return "ghost"
		else return (hasUpgrade("b", 75) || player[this.layer].unlocked)}
}),

addLayer("ex", {
    name: "ExpantaNum", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "EX", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		energy: new Decimal(0),
		nums: new Decimal(0),
		numess: new Decimal(0),
		exinc: new Decimal(0),
		exboost: new Decimal(0),
    }},
    color: "#ffb6c1",
	branches: ["g"],
	effectDescription() {let gain = layers.ex.gainMult().times(1.1925)
		if (hasMilestone("ex", 12)) return "which are gaining <h2 style='color: #ffb6c1; text-shadow: 0 0 10px #ffb6c1'>" + format(player.ex.points.max(1).add(1)) + "x</h2> to Incrementals gain <br>" + "You are gaining " + format(gain.div(10)) + " ExpantaNums/s"
		else return "which are gaining <h2 style='color: #ffb6c1; text-shadow: 0 0 10px #ffb6c1'>" + format(player.ex.points.max(1).add(1)) + "x</h2> to Incrementals gain <br>"},
    requires() { return new Decimal(80)},// Can be a function that takes requirement increases into account
    resource: "expantaNum", // Name of prestige currency
    baseResource: "generators", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if (player.ex.points.gte(Decimal.pow(1e9, 1e307))) mult = mult.div(1e300)
		if (hasUpgrade("ex", 34)) mult = mult.times(upgradeEffect("ex", 34))
		if (hasUpgrade("g", 45)) mult = mult.times(upgradeEffect("g", 45))
		if (hasUpgrade("ex", 31)) mult = mult.times(upgradeEffect("ex", 31))
		if (hasUpgrade("ex", 26)) mult = mult.times(upgradeEffect("ex", 26))
		if (hasUpgrade("ex", 23)) mult = mult.times(upgradeEffect("ex", 23))
		if (hasUpgrade("ex", 22)) mult = mult.times(upgradeEffect("ex", 22))
		if (hasUpgrade("ex", 21)) mult = mult.times(upgradeEffect("ex", 21))
		if (hasUpgrade("ex", 16)) mult = mult.times(upgradeEffect("ex", 16))
		if (hasUpgrade("ex", 14)) mult = mult.times(upgradeEffect("ex", 14))
		if (hasUpgrade("ex", 12)) mult = mult.times(upgradeEffect("ex", 12))
		if (player.ex.buyables[21].gte(1)) mult = mult.times(buyableEffect("ex", 21))
		if (player.ex.buyables[24].gte(1)) mult = mult.times(buyableEffect("ex", 24))
			if (hasUpgrade("ex", 75)) mult = mult.times(upgradeEffect("ex", 75))
				if (player.m.points.gte(1)) mult = mult.times(player.m.points.max(1).add(1000))
        return mult
    },
						    effect() {
								if (hasUpgrade("ex", 73))
									return new Decimal(upgradeEffect("ex", 73).times(1.5))
									if (hasUpgrade("m", 24))
			return new Decimal(100);
							if (hasUpgrade("ex", 42))
			return new Decimal(10);
        if (hasUpgrade("ex", 35))
            return new Decimal(0.3);
				if (player.ex.points.gte(Decimal.pow(1e10, 1e306)))
					return new Decimal(0.15)
				else return new Decimal(0.01)
		
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
				        tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
	microtabs: {
    stuff: {
                    "Main": {
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11,12]]
                ]
            },
                    "Milestones": {
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]
            },
			                    "Nums": {
				unlocked() {return hasUpgrade("ex", 35)},
                content: [
									["display-text", () => "You have <h2 style='color: #ffb6c1; text-shadow: 0 0 10px #ffb6c1'>" + format(player.ex.numess) + "</h2> Num essences" + "<br> You have <h2 style='color: #ffb6c1; text-shadow: 0 0 10px #ffb6c1'>" + format(player.ex.buyables[11]) + "</h2> Nums."],
                    ["blank", "15px"],
                    ["buyables", [1]],
					["blank", "5px"],
					["buyables", [2,3]],
					["clickables", [1]],
                ]
            },
						                    "ExBoosters": {
									unlocked() {return hasUpgrade("ex", 43)},
                content: [
                    ["blank", "15px"],
					["display-text", () => "You have <h2 style='color: #bcb6c1; text-shadow: 0 0 10px #bcb6c1'>" + format(player.ex.exboost) + "</h2> ExBoosters"],
                    ["upgrades", [5,7,8]],
                ]
            },
						                    "ExIncrementals": {
									unlocked() {return hasUpgrade("ex", 43)},
                content: [
                    ["blank", "15px"],
										["display-text", () => "You have <h2 style='color: #acc6c1; text-shadow: 0 0 10px #acc6c1'>" + format(player.ex.exinc) + "</h2> ExIncrementals"],
                    ["upgrades", [6,9,10,11,12]],
                ]
            },
	},
	},
						    incr() {
        if (!hasUpgrade("ex", 61) || hasUpgrade("ex", 61))
            exp = new Decimal(0.015)
        let eff = exp.pow(1);
		if (hasUpgrade("m", 25)) eff = eff.times(10)
		if (hasUpgrade("ex", 62)) eff = eff.times(upgradeEffect("ex", 62))
		if (hasUpgrade("ex", 63)) eff = eff.times(upgradeEffect("ex", 63))
			if (hasUpgrade("ex", 64)) eff = eff.pow(upgradeEffect("ex", 64))
		if (hasUpgrade("ex", 65)) eff = eff.times(player.ex.exboost.min(Decimal.pow(Decimal.pow(1e308, 1e308), Decimal.pow(1e300, 1e308))))
        return eff;
    },
							    boost() {
        if (!hasUpgrade("ex", 51) || hasUpgrade("ex", 51))
            exp = new Decimal(0.025)
        let eff = exp.pow(1);
		if (hasUpgrade("m", 25)) eff = eff.times(10)
		if (hasUpgrade("ex", 52)) eff = eff.times(upgradeEffect("ex", 52))
		if (hasUpgrade("ex", 53)) eff = eff.times(upgradeEffect("ex", 53))
		if (hasUpgrade("ex", 54)) eff = eff.times(upgradeEffect("ex", 54))
		if (hasUpgrade("ex", 55)) eff = eff.times(upgradeEffect("ex", 55))
		if (hasUpgrade("ex", 71)) eff = eff.times(upgradeEffect("ex", 71))
		if (hasUpgrade("ex", 72)) eff = eff.times(upgradeEffect("ex", 72))
		if (hasUpgrade("ex", 74)) eff = eff.times(upgradeEffect("ex", 74))
		if (hasUpgrade("ex", 65)) eff = eff.times(player.ex.exinc.min(Decimal.pow(Decimal.pow(1e308, 1e308), Decimal.pow(1e300, 1e308))))
        return eff;
    },
		
	upgrades: {
		11: {
			title: "ExpantaNum Booster",
			description: "Unspent ExpantaNums boost [Boost!] softcap",
			cost: new Decimal(1),
			effect() {return player.ex.points.times(3e300).pow(player.ex.points.max(1)).min(Decimal.pow(10, 300000)).max(Decimal.pow(10, 320))},
			effectDisplay() {return format(upgradeEffect("ex", 11)) + "x"},
		},
		12: {
			title: "ExEnergy",
			description: "Points boost ExpantaNum gain",
			cost: new Decimal(2),
			unlocked() {return hasUpgrade("ex", 11)},
			effect() {return player.points.pow(0.0015).min(20)},
			effectDisplay() {return format(upgradeEffect("ex", 12)) + "x"},
		},
		13: {
			title: "ExPoints",
			description: "Generators under 10 gives a bonus to booster gain",
			cost: new Decimal(55),
			unlocked() {return hasUpgrade("ex", 12)},
			effect() {return player.g.points.max(1).min(10).times(Decimal.pow(1e10, 1e13)).max(1)},
			effectDisplay() {return format(upgradeEffect("ex", 13)) + "x"},
		},
		14: {
			title: "ExExPoints",
			description: "Passive incremental gain after 1e12 gives a boost to generator gain",
			cost: new Decimal(80),
			unlocked() {return hasUpgrade("ex", 13)},
			effect() {if (tmp.i.pasgain.gte(3e12)) return tmp.i.pasgain.pow(0.0001)
				else return player.points.min(1)},
			effectDisplay() {return format(upgradeEffect("ex", 14)) + "x"},
		},
		15: {
			title: "Expandation",
			description: "ExpantaNums boost [Synergism] gain",
			cost: new Decimal(240),
			unlocked() {return hasUpgrade("ex", 14)},
			effect() {return player.ex.points.pow(Decimal.pow(10, 3400)).min(Decimal.pow(1e10, 345000)).max(1)},
			effectDisplay() {return format(upgradeEffect("ex", 15)) + "x"},
		},
		16: {
			title: "Expandation II",
			description: "Generators after 135 gives boost to ExpantaNum gain",
			cost: new Decimal(840),
			unlocked() {return hasUpgrade("ex", 15)},
			effect() {return player.g.points.sub(135).max(1).pow(0.6).min(12500)},
			effectDisplay() {return format(upgradeEffect("ex", 16)) + "x"},
		},
				21: {
			title: "Expandation III",
			description: "Generators after 155 gives boost to ExpantaNum gain",
			cost: new Decimal(5640),
			unlocked() {return hasUpgrade("ex", 16)},
			effect() {return player.g.points.sub(155).max(1).pow(1.2).min(12500)},
			effectDisplay() {return format(upgradeEffect("ex", 21)) + "x"},
		},
				22: {
			title: "Hexa-Boost",
			description: "Each buyed ExpantaNum upgrade boosts itself gain",
			cost: new Decimal(76040),
			unlocked() {return hasUpgrade("ex", 21)},
			effect() {let ret = Decimal.pow(1.7, player.ex.upgrades.length)
			return ret;},
			effectDisplay() {return format(upgradeEffect("ex", 22)) + "x"},
		},
				23: {
			title: "Penta-Boost",
			description: "Passive ExpantaNums gain boosts itself gain",
			cost: new Decimal(120040),
			unlocked() {return hasUpgrade("ex", 22)},
			effect() {let gain = layers.ex.gainMult().times(1.192).min(150).max(1)
			return gain.pow(1.2)},
			effectDisplay() {return format(upgradeEffect("ex", 23)) + "x"},
		},
				24: {
			title: "Octo-Boost",
			description: "Boost Generator Power by Generators under 25",
			cost: new Decimal(3e10),
			unlocked() {return hasUpgrade("ex", 23)},
			effect() {return player.g.points.min(25).pow(20).max(1)},
			effectDisplay() {return format(upgradeEffect("ex", 24)) + "x"},
		},
				25: {
			title: "Power-Boost",
			description: "Generator Power boosts expantaNum gain",
			cost: new Decimal(5e10),
			unlocked() {return hasUpgrade("ex", 24)},
			effect() {return tmp.g.effect.pow(0.02).max(1)},
			effectDisplay() {return format(upgradeEffect("ex", 25)) + "x"},
		},
						26: {
			title: "Expandation IV",
			description: "Energy boosts expantaNum gain",
			cost: new Decimal(8e10),
			unlocked() {return hasUpgrade("ex", 25)},
			effect() {return tmp.i.effect.pow(0.3).max(1).min(100)},
			effectDisplay() {return format(upgradeEffect("ex", 26)) + "x"},
		},
						31: {
			title: "Expandation V",
			description: "Each ExpantaNum milestones gives a boost to itself",
			cost: new Decimal(1e12),
			unlocked() {return hasUpgrade("ex", 25)},
			effect() {let ret = Decimal.pow(18, player.ex.milestones.length)
			return ret;},
			effectDisplay() {return format(upgradeEffect("ex", 31)) + "x"},
		},
						32: {
			title: "Exnumation",
			description: "Each of e16/e20 expantaNums unlocks a new row of Incrementals upgrades (MAX: 2)",
			cost: new Decimal(3e16),
			unlocked() {return hasUpgrade("ex", 31)},
			effect() {if (player.ex.points.gte(1e20)) return player.ex.points.min(3)
				else if (player.ex.points.gte(1e16)) return player.ex.points.min(2)
					else return player.ex.points.min(1)},
			effectDisplay() {return "+" + format(upgradeEffect("ex", 32))},
		},
						33: {
			title: "Exnumation II",
			description: "Each of ee50 expantaNums unlocks a new row of Generator upgrades (MAX: 1)",
			cost: new Decimal(Decimal.pow(1e9, 4.03e52)),
			unlocked() {return hasUpgrade("i", 64)},
			effect() {if (player.ex.points.gte(Decimal.pow(1e9,1e50))) return player.ex.points.min(2)
				else return player.ex.points.min(1)},
			effectDisplay() {return "+" + format(upgradeEffect("ex", 33))},
		},
						34: {
			title: "Exnumation III",
			description: "Generator Power*Energy boost expantanum gain",
			cost: new Decimal(Decimal.pow(1e9, 1.36e69)),
			unlocked() {return hasUpgrade("g", 45)},
			effect() {
				return player.g.energy.times(player.i.energy).pow(0.3).min(Decimal.pow(1e9, 1e307)).max(1)},
			effectDisplay() {return format(upgradeEffect("ex", 34)) + "x"},
		},
						35: {
			title: "Numerize",
			description: "Unlock new tab",
			cost: new Decimal(Decimal.pow(1e11, 1.36e306)),
			unlocked() {return hasUpgrade("ex", 34)},
		},
						36: {
			title: "Numerize II",
			description: "Now you can buy 2 Nums",
						unlocked() {return hasUpgrade("ex", 35)},
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(40, 300))),
		},
								41: {
			title: "Numerize III",
			description: "Now you can buy 4 Nums",
						unlocked() {return hasUpgrade("ex", 36)},
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(60, 299.7))),
			unlocked() {return hasUpgrade("ex", 35)}		},
										42: {
			title: "ExNumerize",
			description: "Now you can buy 16 Nums and boost Num Essence Gain",
						unlocked() {return hasUpgrade("g", 51)},
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(40, 150500))),
		},
										43: {
			title: "ExBoosterize",
			description: "Unlock a new tabs",
						unlocked() {return hasUpgrade("ex", 42)},
			cost: new Decimal(Decimal.pow(1e300, Decimal.pow(40, 1500499))),
		},
										51: {
			title: "Boosting",
			description: "Start Producing ExBoosters",
						unlocked() {return hasUpgrade("ex", 43)},
			cost() { return new Decimal(Decimal.pow(1e300, Decimal.pow(40, 1500499)))},
		},
										52: {
			title: "Scale up",
			description: "For each buyed Num you will gain boost to ExBoosters gain",
						unlocked() {return hasUpgrade("ex", 51)},
			cost() { return new Decimal(0.75)},
			effect() {return player.ex.buyables[21].times(12).add(player.ex.buyables[22].times(12)).add(player.ex.buyables[23].times(12)).add(player.ex.buyables[24].times(34)).max(1)},
			effectDisplay() {return format(upgradeEffect("ex", 52)) + "x"},
			currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
												53: {
			title: "Boosters Invasion",
			description: "If you have more than 4 buyed Nums levels, you will gain a boost to ExBoosters gain",
						unlocked() {return hasUpgrade("ex", 52)},
			cost() { return new Decimal(125)},
			effect() {if (player.ex.buyables[21].add(player.ex.buyables[22]).add(player.ex.buyables[23]).add(player.ex.buyables[24]).gte(4)) return player.ex.points.min(130)
				else return player.ex.points.min(1)},
			effectDisplay() {return format(upgradeEffect("ex", 53)) + "x"},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
												54: {
			title: "Nums Expansion",
			description: "If Decimal or Boolean level is below 3 and Double-Decimal level is 1, then you will get boost ExBooster gain",
						unlocked() {return hasUpgrade("ex", 53)},
			cost() { return new Decimal(13560)},
			effect() {if (player.ex.buyables[21].lt(3) && player.ex.buyables[22].lt(3) && player.ex.buyables[24].gte(1)) return player.ex.buyables[21].max(1).times(17).add(player.ex.buyables[22].max(1).times(13))
				if (player.ex.buyables[22].lt(3) && player.ex.buyables[21].gte(3) && player.ex.buyables[24].gte(1)) return player.ex.buyables[22].max(1).times(13)
				if (player.ex.buyables[21].lt(3) && player.ex.buyables[22].gte(3) && player.ex.buyables[24].gte(1)) return player.ex.buyables[21].max(1).times(17)
				else return player.ex.points.min(1)},
			effectDisplay() {return format(upgradeEffect("ex", 54)) + "x"},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
												55: {
			title: "Nums Overloading",
			description: "If Double level is above 1 and Double-Decimal level is 1, then you will get boost ExBooster gain",
						unlocked() {return hasUpgrade("ex", 54)},
			cost() { return new Decimal(168140)},
			effect() {if (player.ex.buyables[23].gte(1) && player.ex.buyables[24].gte(1)) return player.ex.buyables[23].max(1).times(175)
				else return player.ex.points.min(1)},
			effectDisplay() {return format(upgradeEffect("ex", 55)) + "x"},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
														56: {
			title: "Adding Nums",
			description: "Add one more Num, which will increase maximum of Nums can be buyed",
						unlocked() {return hasUpgrade("ex", 54)},
			cost() { return new Decimal(225680)},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
														71: {
			title: "Bexoost",
			description: "Number of Nums boosts exBoosters gain",
						unlocked() {return hasUpgrade("ex", 56)},
			cost() { return new Decimal(23000000)},
						effect() {return player.ex.buyables[11].times(1.5)},
			effectDisplay() {return format(upgradeEffect("ex", 71)) + "x"},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
														72: {
			title: "Outta Nums",
			description: "If you have less than 25% of Nums, you will gain a boost based on Nums",
						unlocked() {return hasUpgrade("ex", 71)},
			cost() { return new Decimal(6.5e8)},
						effect() {if (player.ex.buyables[21].lte(buyableEffect("ex", 31).add(16).div(0.75))) return player.ex.buyables[11].times(3.4).max(1)
							else return player.ex.points.min(1)},
			effectDisplay() {return format(upgradeEffect("ex", 72)) + "x"},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
														73: {
			title: "Essences Boost",
			description: "If your num essences amount more than Nums amount, you will get a boost to Num Essences gain based on Nums",
						unlocked() {return hasUpgrade("ex", 72)},
			cost() { return new Decimal(2e11)},
						effect() {if (player.ex.buyables[21].lte(player.ex.numess)) return player.ex.buyables[11].max(1).times(1.2)
							else return player.ex.points.min(1)},
			effectDisplay() {return format(upgradeEffect("ex", 73)) + "x"},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
																74: {
			title: "ExBoosters Boost",
			description: "If Nums Bexoost and Outta Nums effect summary more than 500x, you will gain a boost based on Num Essences",
						unlocked() {return hasUpgrade("ex", 73)},
			cost() { return new Decimal(4.5e11)},
						effect() {if (upgradeEffect("ex", 72).add(upgradeEffect("ex", 71)).gte(500)) return player.ex.numess.max(1).times(0.36)
							else return player.ex.points.min(1)},
			effectDisplay() {return format(upgradeEffect("ex", 74)) + "x"},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
																		75: {
			title: "Expantum Boost",
			description: "Amount of ExBoosters boost ExpantaNum gain at tetrated rate",
						unlocked() {return hasUpgrade("ex", 74)},
			cost() { return new Decimal(3.5e16)},
						effect() {return player.ex.exboost.pow(Decimal.pow(Decimal.pow(8, 12), 1e8))},
			effectDisplay() {return format(upgradeEffect("ex", 75)) + "x"},
						currencyDisplayName: "ExBoosters", // Use if using a nonstandard currency
                currencyInternalName: "exboost", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
												61: {
			title: "Incrementing",
			description: "Start Producing ExIncrementals",
						unlocked() {return hasUpgrade("ex", 43)},
			cost() {return new Decimal(Decimal.pow(1e300, Decimal.pow(40, 160000500)))},
		},
																		62: {
			title: "Incrementaly Booster",
			description: "Integer level boosts ExIncrementals gain",
						unlocked() {return hasUpgrade("ex", 61)},
			cost() { return new Decimal(0.58)},
						effect() {return player.ex.buyables[31].times(20)},
			effectDisplay() {return format(upgradeEffect("ex", 62)) + "x"},
						currencyDisplayName: "ExIncrementals", // Use if using a nonstandard currency
                currencyInternalName: "exinc", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
																		63: {
			title: "I think you've tired",
			description: "Nums maximum boosts exIncrementals gain",
						unlocked() {return hasUpgrade("ex", 62)},
			cost() { return new Decimal(450)},
						effect() {return buyableEffect("ex", 31).add(16).div(0.75).times(25)},
			effectDisplay() {return format(upgradeEffect("ex", 63)) + "x"},
						currencyDisplayName: "ExIncrementals", // Use if using a nonstandard currency
                currencyInternalName: "exinc", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
																				64: {
			title: "TetrExion",
			description: "ExBoosters gives an additional exponent to ExIncrementals gain",
						unlocked() {return hasUpgrade("ex", 63)},
			cost() { return new Decimal(45000000)},
						effect() {return player.ex.exboost.pow(0.01)},
			effectDisplay() {return "^" + format(upgradeEffect("ex", 64))},
						currencyDisplayName: "ExIncrementals", // Use if using a nonstandard currency
                currencyInternalName: "exinc", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
																				65: {
			title: "Finally!",
			description: "ExBoosters applies to ExIncremental gain and ExIncrementals applies to ExBooster gain",
						unlocked() {return hasUpgrade("ex", 64)},
			cost() { return new Decimal(4e10)},
						currencyDisplayName: "ExIncrementals", // Use if using a nonstandard currency
                currencyInternalName: "exinc", // Use if using a nonstandard currency
                currencyLayer: "ex"
		},
	},
				milestones: {
		11: {
			requirementDescription: "15 ExpantaNums",
			effectDescription: "Keep Generator upgrades on reset",
			done() { return (player.ex.points.gte(15)) },		
    },
		13: {
			requirementDescription: "2500 ExpantaNums",
			effectDescription: "Gain 10% of ExpantaNum",
			done() { return (player.ex.points.gte(2500)) },		
    },
		12: {
			requirementDescription: "200 ExpantaNums",
			effectDescription: "You can bulk buy generators",
			done() { return player.ex.points.gte(200)},		
    },
				},
				buyables: {
									      11: {
        title: "Reset for Nums",
        cost(x) {return new Decimal(1).add(x.times(1.5).max(1))},
        display() {let data = tmp[this.layer].buyables[this.id]
		if (hasUpgrade("ex",56)) return `Next At ${format(this.cost())} Num Essences (Max: ${format(buyableEffect("ex", 31).add(16))})`
		if (hasUpgrade("ex",42)) return `Next At ${format(this.cost())} Num Essences (Max: 16)`
		if (hasUpgrade("ex",41)) return `Next At ${format(this.cost())} Num Essences (Max: 4)`
		if (hasUpgrade("ex",36)) return `Next At ${format(this.cost())} Num Essences (Max: 2)`
			else return `Next At ${format(this.cost())} Num Essences (Max: 1)`},
		canAfford() {if (hasUpgrade("ex", 56)) return (player.ex.numess.gte(this.cost()) && player.ex.buyables[11].lt(buyableEffect("ex", 31).add(16)))
			if (hasUpgrade("ex", 42)) return (player.ex.numess.gte(this.cost()) && player.ex.buyables[11].lt(16))
		if (hasUpgrade("ex", 41)) return (player.ex.numess.gte(this.cost()) && player.ex.buyables[11].lt(4))
		if (hasUpgrade("ex", 36)) return (player.ex.numess.gte(this.cost()) && player.ex.buyables[11].lt(2))
			else return (player.ex.numess.gte(this.cost()) && player.ex.buyables[11].lt(1))},
        buy() {
          player.ex.numess = player.ex.numess.sub(this.cost())
		  player.ex.points = player.ex.points.sub(player.ex.points)
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        style: {
          width: "175px",
          height: "120px",
        },
      },
				      21: {
        title: "Decimal",
        cost(x) {return new Decimal(1).add(x).times(player.ex.buyables[22].add(1)).times(player.ex.buyables[23].times(8).max(1)).times(player.ex.buyables[24].add(1)).max(1)},
				canAfford() {return player.ex.buyables[11].gte(this.cost())},
        display() {return `Boost ExpantaNum gain by Decimal Level<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Nums<br>Effect: +${format(this.effect())}x`},
        buy() {
          player.ex.buyables[11] = player.ex.buyables[11].sub(this.cost())
		  player.ex.points = player.ex.points.sub(player.ex.points)
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        effect(x) {
          let eff = x.times(Decimal.pow(1e300, Decimal.pow(40, 3e2))).pow(x.pow(20).max(1))
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
				      22: {
        title: "Boolean",
        cost(x) {return new Decimal(1).add(x).times(player.ex.buyables[21].add(1)).times(player.ex.buyables[23].times(8).max(1)).times(player.ex.buyables[24].add(1)).max(1)},
				canAfford() {return player.ex.buyables[11].gte(this.cost())},
        display() {return `Boost Generator Power and Energy effects by Boolean Level<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Nums<br>Effect: +${format(this.effect())}x`},
        buy() {
          player.ex.buyables[11] = player.ex.buyables[11].sub(this.cost())
		  player.ex.points = player.ex.points.sub(player.ex.points)
		  player.g.energy = player.g.energy.sub(player.g.energy)
		  player.i.energy = player.i.energy.sub(player.i.energy)
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        effect(x) {
          let eff = x.times(Decimal.pow(Decimal.pow(1e170, 1e170), 1e300)).pow(x.pow(30).max(1))
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
				      23: {
        title: "Double",
		purchaseLimit: 1,
        cost(x) {return new Decimal(4).add(x).times(player.ex.buyables[21].add(1)).times(player.ex.buyables[22].add(1)).times(player.ex.buyables[24].add(1)).max(1)},
				canAfford() {return player.ex.buyables[11].gte(this.cost())},
        display() {return `Every Double level adds +1 to Exnumation effect<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Nums<br>Effect: +${format(this.effect())} row`},
        buy() {
          player.ex.buyables[11] = player.ex.buyables[11].sub(this.cost())
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        effect(x) {
          let eff = x
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
				      24: {
        title: "Double-decimal",
				purchaseLimit: 1,
        cost(x) {return new Decimal(16).add(x).times(player.ex.buyables[21].add(1)).times(player.ex.buyables[22].add(1)).times(player.ex.buyables[23].add(1)).max(1)},
				canAfford() {return player.ex.buyables[11].gte(this.cost())},
        display() {return `Every Double-Decimal level adds softcap boost to all gains<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Nums<br>Effect: +${format(this.effect())}x`},
        buy() {
          player.ex.buyables[11] = player.ex.buyables[11].sub(this.cost())
		  player.ex.points = player.ex.points.sub(player.ex.points)
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        effect(x) {
          let eff = x.times(Decimal.pow(1e300, Decimal.pow(40, 1500500)))
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
				      31: {
        title: "Integer",
		purchaseLimit: 100,
		unlocked() {return hasUpgrade("ex", 56)},
        cost(x) {if (player.ex.buyables[31].gte(75)) return new Decimal(2e10).times(x.add(27))
		if (player.ex.buyables[31].gte(35)) return new Decimal(820000000).times(x.add(27))
			if (player.ex.buyables[31].gte(15)) return new Decimal(72500000).times(x.add(13))
			if (player.ex.buyables[31].gte(7)) return new Decimal(7250000).times(x.add(4))
			else return new Decimal(65000).times(x.add(0.4))},
				canAfford() {return player.ex.exboost.gte(this.cost())},
        display() {return `Every Double-Decimal level adds softcap boost to all gains<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} ExBoosters<br>Effect: +${format(this.effect())}`},
        buy() {
          player.ex.exboost = player.ex.exboost.sub(this.cost())
		  player.ex.points = player.ex.points.sub(player.ex.points)
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
          let eff = x.times(6)
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
    },
	clickables: {
		      11: {
        display() {return `Respec Nums`},
        onClick() {
          if(confirm("Are you sure you want to respec? This will cause a Nums tab reset and you will not get points back!")){
			  player.ex.buyables[11] = new Decimal(0)
            player.ex.buyables[21] = new Decimal(0)
            player.ex.buyables[22] = new Decimal(0)
			player.ex.buyables[23] = new Decimal(0)
			player.ex.buyables[24] = new Decimal(0)
            player.ex.numess = new Decimal(0)
			player.ex.points = new Decimal(0)
			player.g.energy = new Decimal(0)
			player.i.energy = new Decimal(0)
          }
        },
        canClick() {return true},
        style: {
          width: "100px",
          minHeight: "50px",
        },
      },
	},
	update(diff) {
		if (hasUpgrade("m", 23) && !inChallenge("m", 12) && !inChallenge("m", 11))
			player.ex.points = player.ex.points.add(diff)
						if (hasUpgrade("ex", 61))
			player.ex.exinc = player.ex.exinc.add(tmp.ex.incr.times(diff))
				if (hasUpgrade("ex", 51))
			player.ex.exboost = player.ex.exboost.add(tmp.ex.boost.times(diff))
		if (player.ex.points.gte(Decimal.pow(1e10, 1e306))) 
			player.ex.numess = player.ex.numess.add(tmp.ex.effect.times(diff))
	},
								passiveGeneration() {
				if (hasMilestone("ex", 13)) return (hasMilestone("ex", 13)?0.1:0)
  },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for ExpantaNums", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasAchievement("a", 71)) return "ghost"
		else return (hasUpgrade("g", 31) || player[this.layer].unlocked)}
}),
addLayer("m", {
    name: "Masteries", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		masB: new Decimal(0),
		a: new Decimal(0),
    }},
    color: "#fcf174",
	branches: ["i"],
	effectDescription() {return "which are gaining <h2 style='color: #fcf174; text-shadow: 0 0 10px #fcf174'>" + format(player.m.points.max(1).add(1000)) + "x</h2> to Incrementals and ExpantaNum  gain <br>"},
    requires() { return new Decimal(Decimal.pow(Decimal.pow(1e308, 1e308), Decimal.pow(1e300, 1e308)))},// Can be a function that takes requirement increases into account
    resource: "masteries", // Name of prestige currency
    baseResource: "expantaNums", // Name of resource prestige is based on
    baseAmount() {return player.ex.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: Decimal.pow(Decimal.pow(1e308, 1e308), Decimal.pow(1e300, 1e308)), // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
							    masBt() {
        if (!hasChallenge("m", 11) || hasChallenge("m", 11))
            exp = new Decimal(0.6)
        let eff = exp.pow(1);
						if (hasUpgrade("m", 12) & inChallenge("m", 11)) eff = eff.times(upgradeEffect("m", 12))
		if (hasUpgrade("m", 13) & inChallenge("m", 11)) eff = eff.times(upgradeEffect("m", 13))
					if (hasUpgrade("m", 15)) eff = eff.times(upgradeEffect("m", 12)).times(upgradeEffect("m", 13)).times(eff)
		if (hasUpgrade("m", 22)) eff = eff.times(upgradeEffect("m", 22))
        return eff;
    },
				        tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
	microtabs: {
    stuff: {
                    "Masteries": {
                content: [
                    ["blank", "15px"],
                    ["challenges", [1]],
					["blank", "15px"]
                ]
            },
			                    "Mastered Boosters": {
                content: [
                    ["blank", "15px"],
										["display-text", () => "You have <h2 style='color: #FFA500; text-shadow: 0 0 10px #FFA500'>" + format(player.m.masB) + "</h2> Mastered Boosters"],
                    ["upgrades", [1,2]]
                ]
            },
			                    "Allocations": {
                content: [
                    ["blank", "15px"],
										["display-text", () => "You have <h2 style='color: #FFA500; text-shadow: 0 0 10px #FFA500'>" + format(player.m.a) + "</h2> Allocations"],
										"buyables",
                    ["upgrades", [3,4]]
                ]
            },
	},
	},
	challenges: {
    11: {
		completionLimit: 3,
        name() {return "Mastery - Boosters (" + formatWhole(challengeCompletions("m",11)) + "/3)"},
        challengeDescription: "While in this challenge, some upgrades in first 2 row of Boosters effects are /5 less efficient, and its cost massively reduced",
        canComplete: function() {if (challengeCompletions("m", 11) == 2) return player.b.points.gte(3e34)
			if (challengeCompletions("m", 11) == 1) return player.b.points.gte(1.46e12)
			else return player.b.points.gte(16000000)},
		goalDescription() {if (challengeCompletions("m", 11) == 2) return "3e34 Boosters"
			if (challengeCompletions("m", 11) == 1) return "1.46e12 Boosters"
			else return "16000000 Boosters"},
 rewardDescription: "Start generating Mastered Boosters and unlock one more row of Mastered Booster upgrades at first and last completion",
 style() {
	return {
		'border-top-left-radius': '30px',
		'border-top-right-radius': '0',
		'border-bottom-right-radius': '0',
		'border-bottom-left-radius': '30px',
		'width': '400px',
		'height': '230px',
				'border-right': '2',
	}
 },
    },
	    12: {
		completionLimit: 1,
        name() {return "Mastery - Incrementals (" + formatWhole(challengeCompletions("m",12)) + "/1)"},
        challengeDescription: "While in this challenge, Upgrades tab in Incrementals will be change to Allocations tab. Automation doesnt work in this challenge",
        canComplete: function() {return player.i.points.gte(2e38)},
		goalDescription() { return "2e38 Incrementals"},
 rewardDescription: "Unlock Allocations.",
 style() {
	return {
		'border-top-left-radius': '0',
		'border-top-right-radius': '30px',
		'border-bottom-right-radius': '30px',
		'border-bottom-left-radius': '0',
		'width': '400px',
		'height': '230px',
		'border-left': '0',
	}
 },
    },
},
upgrades: {
	11: {
		title: "Mastered Mastery",
		description: "Mastered Boosters boosts booster gain while in Mastery challenges",
		cost: new Decimal(15),
		effect() {return player.m.masB.pow(0.78)},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
				effectDisplay() {return format(upgradeEffect("m", 11)) + "x"},
		
	},
	12: {
		title: "Boosted Mastery",
		description: "<h5>Each buyed Booster upgrade boosts Mastered Boosters gain, but while you are in Mastery challenges</h5>",
		cost: new Decimal(40),
		unlocked() {return hasUpgrade("m", 11)},
		effect() {let ret = Decimal.pow(1.25, player.b.upgrades.length)
		return ret},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
				effectDisplay() {return format(upgradeEffect("m", 12)) + "x"},
		
	},
	13: {
		title: "Exponential Growth",
		description: "<h5>Number of Mastery - Booster completions boosts Booster and Mastered Boosters gain in Mastery challenges</h5>",
		cost: new Decimal(630),
		unlocked() {return hasUpgrade("m", 12)},
		effect() {let ret = Decimal.pow(3.65, challengeCompletions("m", 11)).max(1)
		return ret},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
				effectDisplay() {return format(upgradeEffect("m", 13)) + "x"},
		
	},
	14: {
		title: "Exponential Growth",
		description: "Boost Booster Power gain by Mastered Boosters",
		cost: new Decimal(3650),
		unlocked() {return hasUpgrade("m", 13)},
		effect() {return player.m.masB.pow(0.15)},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
				effectDisplay() {return format(upgradeEffect("m", 14)) + "x"},
		
	},
	15: {
		title: "Applying",
		description: "Now all upgrades effect works even if you arent in challenge",
		cost: new Decimal(15650),
		unlocked() {return hasUpgrade("m", 14)},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
		
	},
	21: {
		title: "Automate",
		description: "Now you will passive generate 1 generators/s",
		cost: new Decimal(25000000),
		unlocked() {return (hasUpgrade("m", 15) && challengeCompletions("m", 11) == 3)},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
		
	},
	22: {
		title: "Generators Mastery",
		description: "Generators gives a boost to Mastered Boosters gain",
		cost: new Decimal(46000000),
		effect() {return player.g.points},
		unlocked() {return (hasUpgrade("m", 21))},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
				effectDisplay() {return format(upgradeEffect("m", 22)) + "x"},
		
	},
	23: {
		title: "Automate II",
		description: "Now you will passive generate 1 expantaNums/s",
		cost: new Decimal(2.3e9),
		effect() {return player.g.points},
				unlocked() {return (hasUpgrade("m", 22))},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
		
	},
	24: {
		title: "Automate III",
		description: "Now you will passive generate 100 Nums/s",
		cost: new Decimal(4e9),
		effect() {return player.g.points},
				unlocked() {return (hasUpgrade("m", 23))},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
		
	},
	25: {
		title: "Last One",
		description: "Passive generate 10/s ExBoosters <br>and Incrementals ",
		cost: new Decimal(6e9),
		effect() {return player.g.points},
				unlocked() {return (hasUpgrade("m", 24))},
								currencyDisplayName: "Mastered Boosters", // Use if using a nonstandard currency
                currencyInternalName: "masB", // Use if using a nonstandard currency
                currencyLayer: "m",
		
	},
},
	doReset() {
		layerDataReset("ex")
	},
	update(diff){
		if (hasChallenge("m", 11)) return player.m.masB = player.m.masB.add(tmp.m.masBt.times(diff))
	},
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for Masteries", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasAchievement("a", 71)) return "ghost"
		else return (player.ex.points.gte(Decimal.pow(Decimal.pow(1e300, 1e300), 1e300)) || player[this.layer].unlocked)},
})
addLayer("c", {
    name: "Chemicals", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		energy: new Decimal(0),
		h: new Decimal(0),
		li: new Decimal(0),
		be: new Decimal(0),
		b: new Decimal(0),
		c: new Decimal(0),
    }},
    color: "#d9ff66",
	branches: ["b"],
	effectDescription() {return "<h4 style='color: #808080;'>You have " + format(player.c.h) + " Hydrogen</h4><br><h4 style='color: #808080;'>You have " + format(player.c.li) + " Lithium</h4><br<h4 style='color: #808080;'>You have " + format(player.c.c) + " Carbon</h4>"},
    requires() { return new Decimal(Decimal.pow(1e280, 0.5e29))},// Can be a function that takes requirement increases into account
    resource: "Chemicals", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 125, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
				        tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
	microtabs: {
    stuff: {
                    "Lab": {
                content: [
                    ["blank", "15px"],
                    ["buyables", [1,2,4]]
                ]
            },
			                    "Fuses": {
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2]],
					["buyables", [3]],
					["blank", "10px"],
					["upgrades", [3]],
                ]
            },
	},
	},
	upgrades: {
		11: {
			title: "Hydrogen I",
			description: "Unspent Hydrogen boosts Generate Hydrogen effect",
			cost: new Decimal(125),
			effect() {if (hasUpgrade("c", 14)) return player.c.h.pow(0.16).max(1)
				if (hasUpgrade("c", 11)) return player.c.h.pow(0.32).max(1)
				else return new Decimal(1)},
			effectDisplay() {return format(upgradeEffect("c",11)) + "x"},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		12: {
			title: "Hydrogen II",
			description: "Buyed upgrades boosts Generate Hydrogen effect",
			cost: new Decimal(1825),
			unlocked() {return (hasUpgrade("c", 11))},
			effect() {if (hasUpgrade("c", 12)) ret = Decimal.pow(1.5, player.c.upgrades.length)
				else ret = new Decimal(1)
				return ret},
			effectDisplay() {return format(upgradeEffect("c",12)) + "x"},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		13: {
			title: "Hydrogen III",
			description: "Add base to Generate Hydrogen effect for each buyed upgrade",
			cost: new Decimal(11630),
						unlocked() {return (hasUpgrade("c", 12))},
			effect() {if (hasUpgrade("c", 15)) ret = Decimal.pow(1.05, player.c.upgrades.length)
				else if (hasUpgrade("c", 13)) ret = Decimal.pow(0.65, player.c.upgrades.length)
				else ret = new Decimal(0)
				return ret},
			effectDisplay() {return "+" + format(upgradeEffect("c",13))},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		14: {
			title: "Hydrogen IV",
			description: "Scale Generate Hydrogen effect formula",
			cost: new Decimal(65450),
			unlocked() {return (hasUpgrade("c", 13))},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		15: {
			title: "Hydrogen V",
			description: "Unlock extra buyable and boost Hydrogen III effect",
			cost: new Decimal(3e10),
			unlocked() {return (hasUpgrade("c", 14))},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		21: {
			title: "Hydrogen VI",
			description: "Add a free levels to Generate Hydrogen for each buyed upgrade",
			cost: new Decimal(1e28),
			unlocked() {return (hasUpgrade("c", 15))},
			effect() {if (hasUpgrade("c", 21)) return player.c.upgrades.length
			else return new Decimal(0)},
						effectDisplay() {return "+" + format(upgradeEffect("c",21))},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		22: {
			title: "Hydrogen VII",
			description: "Add a free levels to Mix Hydrogen for each buyed upgrade",
			cost: new Decimal(1e32),
			unlocked() {return (hasUpgrade("c", 21))},
			effect() {if (hasUpgrade("c", 22)) ret = Decimal.pow(2.75, player.c.upgrades.length)
			else ret = new Decimal(0)
		return ret;},
						effectDisplay() {return "+" + format(upgradeEffect("c",22))},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		23: {
			title: "Hydrogen VIII",
			description: "Add a free levels to Generate Hydrogen for each buyed upgrade",
			cost: new Decimal(2.5e45),
			unlocked() {return (hasUpgrade("c", 22))},
			effect() {if (hasUpgrade("c", 23)) ret = Decimal.div(462, player.c.upgrades.length)
			else ret = new Decimal(0)
		return ret;},
						effectDisplay() {return "+" + format(upgradeEffect("c",23))},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		24: {
			title: "Hydrogen IX",
			description: "Apply Hydrogen to point gain",
			cost: new Decimal(3e51),
			unlocked() {return (hasUpgrade("c", 23))},
			effect() {if (hasUpgrade("c", 24)) return player.c.h.pow(1e36)
			else return new Decimal(0)},
						effectDisplay() {return format(upgradeEffect("c",24)) + "x"},
			currencyDisplayName: "Hydrogen", // Use if using a nonstandard currency
            currencyInternalName: "h", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		25: {
			title: "Hydrogen X",
			description: "Unlock new Element",
			cost: new Decimal(3),
			unlocked() {return (hasUpgrade("c", 24))},
		},
		31: {
			title: "Lithium VI",
			description: "Apply Hydrogen to Lithium gain",
			cost: new Decimal(5e269),
			unlocked() {return (player.c.buyables[35].gte(2))},
			effect() {if (hasUpgrade("c", 31)) return player.c.h.pow(1.02)
			else return new Decimal(1)},
						effectDisplay() {return format(upgradeEffect("c",31)) + "x"},
			currencyDisplayName: "Lithium", // Use if using a nonstandard currency
            currencyInternalName: "li", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		32: {
			title: "Lithium VII",
			description: "Add base to Lithium IV for each buyed upgrade",
			cost: Decimal.pow(10, 372),
			unlocked() {return (hasUpgrade("c", 31))},
			effect() {if (hasUpgrade("c", 32)) ret = Decimal.pow(2.35, player.c.upgrades.length)
			else ret = new Decimal(0)
		return ret;},
						effectDisplay() {return "+" + format(upgradeEffect("c",32))},
			currencyDisplayName: "Lithium", // Use if using a nonstandard currency
            currencyInternalName: "li", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		33: {
			title: "Lithium VIII",
			description: "Add base to Lithium V for each buyed upgrade",
			cost: Decimal.pow(10, 520),
			unlocked() {return (hasUpgrade("c", 32))},
			effect() {if (hasUpgrade("c", 33)) ret = Decimal.pow(1.45, player.c.upgrades.length)
			else ret = new Decimal(0)
		return ret;},
						effectDisplay() {return "+" + format(upgradeEffect("c",33))},
			currencyDisplayName: "Lithium", // Use if using a nonstandard currency
            currencyInternalName: "li", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		34: {
			title: "Lithium IX",
			description: "Add base to Lithium IV & V for each buyed upgrade",
			cost: Decimal.pow(10, 547),
			unlocked() {return (hasUpgrade("c", 33))},
			effect() {if (hasUpgrade("c", 34)) ret = Decimal.pow(2.25, player.c.upgrades.length)
			else ret = new Decimal(0)
		return ret;},
						effectDisplay() {return "+" + format(upgradeEffect("c",34))},
			currencyDisplayName: "Lithium", // Use if using a nonstandard currency
            currencyInternalName: "li", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
		35: {
			title: "Lithium X",
			description: "Add levels of Lithium I, II and III as a base for Lithium IV and V. Unlock modes",
			cost: Decimal.pow(10, 589),
			unlocked() {return (hasUpgrade("c", 34))},
			effect() {if (hasUpgrade("c", 35)) return player.c.buyables[31].add(player.c.buyables[32]).add(player.c.buyables[33]).times(1000)
			else ret = new Decimal(0)
		return ret;},
						effectDisplay() {return "+" + format(upgradeEffect("c",35))},
			currencyDisplayName: "Lithium", // Use if using a nonstandard currency
            currencyInternalName: "li", // Use if using a nonstandard currency
            currencyLayer: "c",
		},
	},
	buyables: {
						      11: {
        title: "Generate Hydrogen",
				purchaseLimit: 1,
        cost(x) {return new Decimal(2).pow(x.add(1))},
		canAfford() {return (player.c.points.gte(this.cost()))},
        display() { return `Generate A New Element<br>Level: ${format(getBuyableAmount(this.layer, this.id).add(upgradeEffect("c", 21)).add(upgradeEffect("c", 23)))}<br>Cost: ${format(this.cost())} Chemicals<br>Element gains: +${format(this.effect())} Hydrogen/s`},
        buy() {
          player.c.points = player.c.points.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return true},
        effect(x) {
			if (hasUpgrade("c", 14)) eff = x.add(upgradeEffect("c", 21)).add(buyableEffect("c", 41)).add(buyableEffect("c", 43)).pow(10).add(upgradeEffect("c", 13)).add(buyableEffect("c", 12)).times(player.c.h.pow(0.2)).times(upgradeEffect("c", 11)).times(upgradeEffect("c", 12)).times(upgradeEffect("b", 123))
          else eff = x.add(upgradeEffect("c", 21)).add(upgradeEffect("c", 23)).pow(10).add(upgradeEffect("c", 13)).times(player.c.h.pow(0.15).add(0.5)).times(upgradeEffect("c", 11)).times(upgradeEffect("c", 12))
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
						      12: {
        title: "Mix Hydrogen",
		purchaseLimit: 130,
        cost(x) {return new Decimal(15000000).times(x.pow(4).add(1))},
		canAfford() {return (player.c.h.gte(this.cost()))},
        display() {return `Add more base to Generate Hydrogen effect<br>Level: ${format(getBuyableAmount(this.layer, this.id).add(upgradeEffect("c", 22)))}<br>Cost: ${format(this.cost())} Chemicals<br>Effect: +${format(this.effect())}`},
        buy() {
          player.c.h = player.c.h.sub(this.cost())
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 15))},
        effect(x) {
          let eff = x.add(upgradeEffect("c", 22)).pow(8.55).max(1)
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
	  						      21: {
        title: "Generate Lithium",
				purchaseLimit: 1,
        cost(x) {return new Decimal(3).pow(x.add(1))},
		canAfford() {return (player.c.points.gte(this.cost()))},
        display() { return `Generate A New Element<br>Level: ${format(getBuyableAmount(this.layer, this.id).add(upgradeEffect("c", 21)).add(upgradeEffect("c", 23)))}<br>Cost: ${format(this.cost())} Chemicals<br>Element gains: +${format(this.effect())} Lithium/s`
          player.c.points = player.c.points.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 25))},
        effect(x) {if (hasUpgrade("b", 121)) eff = x.add(1).times(player.c.li.pow(0.09).add(0.75)).times(buyableEffect("c", 31)).times(buyableEffect("c", 32)).times(buyableEffect("c", 33)).times(buyableEffect("c", 34)).times(buyableEffect("c", 35)).times(upgradeEffect("c", 31))
 else eff = x.add(1).times(player.c.li.pow(0.15).add(0.75)).times(buyableEffect("c", 31)).times(buyableEffect("c", 32)).times(buyableEffect("c", 33)).times(buyableEffect("c", 34)).times(buyableEffect("c", 35)).times(upgradeEffect("c", 31))
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
	  						      31: {
        title: "Lithium I",
				purchaseLimit: 100,
        cost(x) {return new Decimal(32).pow(x.pow(0.55).add(1))},
		canAfford() {return (player.c.li.gte(this.cost()))},
        display() { return `Boost Generate Lithium effect (based on Lithium)<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Lithium<br>Effect: ${format(this.effect())}x`},
        buy() {
          player.c.li = player.c.li.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 25))},
        effect(x) {
if (player.c.buyables[31].gte(1)) eff = x.add(1).times(3).times(player.c.li.pow(0.3).max(1).min(250000)).min(1e22)
	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "120px",
          height: "120px",
        },
      },
	  						      32: {
        title: "Lithium II",
				purchaseLimit: 100,
        cost(x) {return new Decimal(2500000).pow(x.times(0.2).add(1))},
		canAfford() {return (player.c.li.gte(this.cost()))},
        display() { return `Boost Generate Lithium effect (based on Lithium and prev. upgrade level)<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Lithium<br>Effect: ${format(this.effect())}x`},
        buy() {
          player.c.li = player.c.li.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 25))},
        effect(x) {
if (player.c.buyables[32].gte(1)) eff = x.add(1).times(3).pow(player.c.li.pow(0.02).max(1).min(25)).times(player.c.buyables[31])
	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "120px",
          height: "120px",
        },
      },
	  						      33: {
        title: "Lithium III",
				purchaseLimit: 100,
        cost(x) {return new Decimal(5e13).pow(x.times(0.2).add(1))},
		canAfford() {return (player.c.li.gte(this.cost()))},
        display() { return `Boost Generate Lithium effect (based on Lithium and prev. upgrade level)<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Lithium<br>Effect: ${format(this.effect())}x`},
        buy() {
          player.c.li = player.c.li.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 25))},
        effect(x) {
if (player.c.buyables[33].gte(1)) eff = x.add(1).times(3).pow(player.c.li.pow(0.05).max(1).min(25)).times(player.c.buyables[32].add(player.c.buyables[31]))
	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "120px",
          height: "120px",
        },
      },
	  						      34: {
        title: "Lithium IV",
				purchaseLimit: 15,
        cost(x) {return new Decimal(1e153).pow(x.times(0.2).add(1))},
		canAfford() {return (player.c.li.gte(this.cost()))},
        display() { return `Boost Generate Lithium effect (based on Lithium and prev. upgrade level)<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Lithium<br>Effect: ${format(this.effect())}x`},
        buy() {
          player.c.li = player.c.li.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 25))},
        effect(x) {
if (player.c.buyables[34].gte(1)) eff = x.add(1).times(8).add(upgradeEffect("c", 32)).add(upgradeEffect("c", 34)).add(upgradeEffect("c", 35)).pow(player.c.li.pow(0.25).max(1).min(25)).times(player.c.buyables[32].add(player.c.buyables[31]).add(player.c.buyables[33]))
	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "120px",
          height: "120px",
        },
      },
	  						      35: {
        title: "Lithium V",
				purchaseLimit: 11,
        cost(x) {return new Decimal(1e200).pow(x.times(0.2).add(1))},
		canAfford() {return (player.c.li.gte(this.cost()))},
        display() { return `Boost Generate Lithium effect (based on Lithium and prev. upgrade level)<br>Level: ${format(getBuyableAmount(this.layer, this.id))}<br>Cost: ${format(this.cost())} Lithium<br>Effect: ${format(this.effect())}x`},
        buy() {
          player.c.li = player.c.li.sub(this.cost())
			  setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 25))},
        effect(x) {
if (player.c.buyables[34].gte(1)) eff = x.add(1).times(25).add(upgradeEffect("c", 32)).add(upgradeEffect("c", 34)).add(upgradeEffect("c", 35)).add(buyableEffect("c", 42)).add(buyableEffect("c", 43)).add(upgradeEffect("b", 121)).pow(player.c.li.pow(0.25).max(1).min(25)).times(player.c.buyables[32].add(player.c.buyables[31]).add(player.c.buyables[33]).add(player.c.buyables[34])).times(upgradeEffect("b", 121))
	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "120px",
          height: "120px",
        },
      },
	  						      41: {
        title: "Hydrogen Node",
		purchaseLimit: 1,
        cost(x) {return new Decimal(1e95).times(x.add(1))},
		canAfford() {return (player.c.h.gte(this.cost()))},
        display() {return `Add more base to Generate Hydrogen effect<br>Level: ${format(getBuyableAmount(this.layer, this.id).add(upgradeEffect("c", 22)))}<br>Cost: ${format(this.cost())} Hydrogen<br>Effect: +${format(this.effect())}`},
        buy() {
          player.c.h = player.c.h.sub(this.cost())
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 35))},
        effect(x) {
     if (player.c.buyables[41].gte(1)) eff = x.add(100)
		  	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
	  						      42: {
        title: "Lithium Node",
		purchaseLimit: 1,
        cost(x) {return new Decimal.pow(10, 627).times(x.add(1))},
		canAfford() {return (player.c.li.gte(this.cost()))},
        display() {return `Add more base to Lithium V effect<br>Level: ${format(getBuyableAmount(this.layer, this.id).add(upgradeEffect("c", 22)))}<br>Cost: ${format(this.cost())} Lithium<br>Effect: +${format(this.effect())}`},
        buy() {
          player.c.li = player.c.li.sub(this.cost())
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 35))},
        effect(x) {
     if (player.c.buyables[42].gte(1)) eff = x.add(1.75e16)
		  	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
	  						      43: {
        title: "Chemicals Node",
		purchaseLimit: 1,
        cost(x) {return new Decimal(5).times(x.add(1))},
		canAfford() {return (player.c.points.gte(this.cost()))},
        display() {return `Add more base to Lithium V and Generate Hydrogen effect<br>Level: ${format(getBuyableAmount(this.layer, this.id).add(upgradeEffect("c", 22)))}<br>Cost: ${format(this.cost())} Chemicals<br>Effect: +${format(this.effect())}`},
        buy() {
          player.c.points = player.c.points.sub(this.cost())
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
				unlocked() {return (hasUpgrade("c", 35))},
        effect(x) {
     if (player.c.buyables[43].gte(1)) eff = x.add(1e6)
		  	else eff = new Decimal(1)
          return eff
        },
        style: {
          width: "175px",
          height: "120px",
        },
      },
	},
	doReset() {
		if (hasAchievement("a", 71)) {
						layerDataReset("ex")
			layerDataReset("m")
			layerDataReset("g")
			layerDataReset("i")
		}
	},
	update(diff) {
						if (hasUpgrade("b", 135)) {
							player.c.c = player.c.c.add(upgradeEffect("b", 135).times(diff))
					player.c.li = player.c.li.add(buyableEffect("c",21).times(diff))
					player.c.h = player.c.h.add(buyableEffect("c",11).times(diff))}
				if (player.c.buyables[21].gte(1)) {
					player.c.li = player.c.li.add(buyableEffect("c",21).times(diff))
					player.c.h = player.c.h.add(buyableEffect("c",11).times(diff))}
		if (player.c.buyables[11].gte(1)) return player.c.h = player.c.h.add(buyableEffect("c",11).times(diff))
	},
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Chemicals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasAchievement("a", 71))},
})
addLayer("cl", {
    name: "Combining Lab", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CL", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#d9ff66",
	branches: ["c"],
    requires() {return new Decimal(Decimal.pow(1e280, 1e246))},// Can be a function that takes requirement increases into account
    resource: "Chemicals", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 125, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
				        tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
	microtabs: {
    stuff: {
                    "Combine": {
                content: [
                    ["blank", "15px"],
                    ["buyables", [1,2,4]]
                ]
            },
			                    "Fuses": {
                content: [
                    ["blank", "15px"]
                ]
            },
	},
	},
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Chemicals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasAchievement("a", 71))},
})
addLayer("a", {
    startData() {
        return {
            unlocked: true,
			points: new Decimal(0),
			badges: new Decimal(0),
        }
    },
    color: "yellow",
    row: "side",
    layerShown() {
        return true
    },
    tooltip() {
        return ("Achievements")
    },
    achievements: {
        11: {
            name: "Starting Booster",
            done() {
                return player.b.points.gte(10)
            },
            tooltip: "Get 10 Boosters. <br>Reward: 2 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2)
			},
        },
        12: {
            name: "Three upgrades in a row!",
            done() {
                if (hasUpgrade("b", 13)) return true
            },
            tooltip: "Get <b>Synergism</b>. <br>Reward: 2 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2)
			},
        },
        13: {
            name: "More upgrades?!",
            done() {
                if (hasUpgrade("b", 21)) return true
            },
            tooltip: "Buy first upgrade in 2nd row <br>Reward: 5 AP",
			onComplete() {
				return player.a.points = player.a.points.add(5)
			},
        },
        14: {
            name: "That's really much!",
            done() {
                if (hasUpgrade("b", 31)) return true
            },
            tooltip: "Buy first upgrade in 3rd row <br>Reward: 10 AP",
			onComplete() {
				return player.a.points = player.a.points.add(10)
			},
        },
        15: {
            name: "Over-upgrading!",
            done() {
                if (hasUpgrade("b", 41)) return true
            },
            tooltip: "Buy first upgrade in 4nd row <br>Reward: 20 AP",
			onComplete() {
				return player.a.points = player.a.points.add(20)
			},
        },
        16: {
            name: "Over-over-upgrading!",
            done() {
                if (hasUpgrade("b", 51)) return true
            },
            tooltip: "Buy first upgrade in 5nd row <br>Reward: 75 AP",
			onComplete() {
				return player.a.points = player.a.points.add(75)
			},
        },
        21: {
            name: "Upgrades Mansion",
            done() {
                if (hasUpgrade("b", 61)) return true
            },
            tooltip: "Buy first upgrade in 6nd row <br>Reward: 125 AP",
			onComplete() {
				return player.a.points = player.a.points.add(125)
			},
        },
        22: {
            name: "Incrementy",
            done() {
                return player.i.points.gte(1)
            },
            tooltip: "Get 1 Incremental <br>Reward: 225 AP",
			onComplete() {
				return player.a.points = player.a.points.add(225)
			},
        },
        23: {
            name: "Energizer",
            done() {
                return player.i.energy.gte(1)
            },
            tooltip: "Get 1 Energy <br>Reward: 285 AP",
			onComplete() {
				return player.a.points = player.a.points.add(285)
			},
        },
        24: {
            name: "Hardcap?!",
            done() {
                if (hasUpgrade("i", 33)) return true
            },
            tooltip: "Get to Incrementals Hardcap <br>Reward: 500 AP",
			onComplete() {
				return player.a.points = player.a.points.add(500)
			},
        },
        25: {
            name: "<h4>Many Incrementals</h4>",
            done() {
                return player.i.points.gte(1e308)
            },
            tooltip: "Get more than 1e308 Incrementals <br>Reward: 1500 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1500)
			},
        },
        26: {
            name: "Generating Achievements",
            done() {
                return player.g.points.gte(1)
            },
            tooltip: "Get 1 Generator <br>Reward: 300 AP",
			onComplete() {
				return player.a.points = player.a.points.add(300)
			},
        },
		        31: {
            name: "Generator Powers",
            done() {
                return player.g.energy.gte(1)
            },
            tooltip: "Get 1 Generator Power <br>Reward: 700 AP",
			onComplete() {
				return player.a.points = player.a.points.add(700)
			},
        },
		        32: {
            name: "A new adventure",
            done() {
                return player.ex.points.gte(1)
            },
            tooltip: "Get 1 Expantanum <br>Reward: 2900 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2900)
			},
				},
		        33: {
            name: "<h4>Expandations</h4>",
            done() {
                if (hasUpgrade("ex", 15)) return true
            },
            tooltip: "Get Expandation <br>Reward: 3300 AP",
			onComplete() {
				return player.a.points = player.a.points.add(3300)
			},
        },
		        34: {
            name: "<h4>Go back to Incrementing...</h4>",
            done() {
                if (hasUpgrade("ex", 32)) return true
            },
            tooltip: "Get Exnumation <br>Reward: 5000 AP",
			onComplete() {
				return player.a.points = player.a.points.add(5000)
			},
        },
		        35: {
            name: "<h4>Go back to Generators...</h4>",
            done() {
                if (hasUpgrade("ex", 33)) return true
            },
            tooltip: "Get Exnumation II <br>Reward: 37000 AP",
			onComplete() {
				return player.a.points = player.a.points.add(37000)
			},
        },
		        36: {
            name: "Numerizing Begins",
            done() {
                if (hasUpgrade("ex", 35)) return true
            },
            tooltip: "Unlock Nums <br>Reward: 85000 AP",
			onComplete() {
				return player.a.points = player.a.points.add(85000)
			},
        },
		        41: {
            name: "You're Smart I",
            done() {
                if (player.ex.buyables[23].gte(1)) return true
            },
            tooltip: "Get 1 Double Level <br>Reward: 146000 AP",
			onComplete() {
				return player.a.points = player.a.points.add(146000)
			},
        },
		        42: {
            name: "You're Smart II",
            done() {
                if (hasUpgrade("ex", 42)) return true
            },
            tooltip: "Get ExNumerize <br>Reward: 326000 AP",
			onComplete() {
				return player.a.points = player.a.points.add(326000)
			},
        },
		        43: {
            name: "Ex-ing Boosters",
            done() {
                if (hasUpgrade("ex", 51)) return true
            },
            tooltip: "Start Producing ExBoosters <br>Reward: 800000 AP",
			onComplete() {
				return player.a.points = player.a.points.add(800000)
			},
        },
		        44: {
            name: "<h4>Ex-ing Incrementals</h4>",
            done() {
                if (hasUpgrade("ex", 61)) return true
            },
            tooltip: "Start Producing ExIncrementals <br>Reward: 1600000 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1600000)
			},
        },
		        45: {
            name: "Mastering Time",
            done() {
                return player.m.points.gte(1)
            },
            tooltip: "Get 1 Mastery <br>Reward: 1.2e7 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1.2e7)
			},
        },
		        46: {
            name: "Automating I",
            done() {
                if (hasUpgrade("m", 15)) return true
            },
            tooltip: "Finish 1 row of Mastered Boosters Upgrades <br>Reward: 1e9 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e9)
			},
		},
		        51: {
            name: "Challenging",
            done() {
                if (challengeCompletions("m",11) == 3) return true
            },
            tooltip: "Mastery Boosters for 3 times <br>Reward: 2e10 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2e10)
			},
		},
		        52: {
            name: "Automating II",
            done() {
                if (hasUpgrade("m", 25)) return true
            },
            tooltip: "Finish 2 rows of Mastered Boosters Upgrades <br>Reward: 1e12 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e12)
			},
		},
		        53: {
            name: "Allocations!",
            done() {
                if (hasUpgrade("i", 71)) return true
            },
            tooltip: "Buy 1st Alloctaion while in challenge <br>Reward: 1e22 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e22)
			},
		},
		        54: {
            name: "More Incermentals",
            done() {
                if (hasUpgrade("i", 73)) return true
            },
            tooltip: "Buy 3rd Alloctaion while in challenge <br>Reward: 1e25 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e25)
			},
		},
		        55: {
            name: "Challenging II",
            done() {
                if (hasChallenge("m",12)) return true
            },
            tooltip: "Mastery Incrementals <br>Reward: 1e30 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e30)
			},
		},
		        56: {
            name: "NG+ starts gere",
            done() {
                if (player.c.points.gte(1)) return true
            },
            tooltip: "Obtain 1 Chemical <br>Reward: 1e31 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e31)
			},
		},
		        61: {
            name: "Hydrogen!",
            done() {
                if (player.c.h.gte(1)) return true
            },
            tooltip: "Obtain Hydrogen <br>Reward: 1e35 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e35)
			},
		},
		        62: {
            name: "Mixing Hydrogen",
            done() {
                if (player.c.buyables[12].gte(1)) return true
            },
            tooltip: "Obtain Mix Hydrogen <br>Reward: 1e36 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e36)
			},
		},
		        63: {
            name: "Lithium!",
            done() {
                if (player.c.li.gte(1)) return true
            },
            tooltip: "Obtain Lithium <br>Reward: 1e40 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e40)
			},
		},
		        64: {
            name: "Lithium x5",
            done() {
                if (player.c.buyables[35].gte(1)) return true
            },
            tooltip: "Buy Lithium V <br>Reward: 1e45 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e45)
			},
		},
		        65: {
            name: "<h4>Nodes</h4>",
            done() {
                if (player.c.buyables[42].gte(1)) return true
            },
            tooltip: "Obtain Chemical Node <br>Reward: 1e50 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e50)
			},
		},
				        71: {
            name: "Woah",
            done() {
                if (hasChallenge("m",12)) return true
            },
            tooltip: "Complete a game! <br>Reward: NG+",
			onComplete() {
				return 	player.a.badges = player.a.badges.add(1);
					layerDataReset("b")
					layerDataReset("i")
					layerDataReset("g")
					layerDataReset("ex")
					layerDataReset("m")
			},
					style() {
						return {
    'width': '120px',
    'height': '120px',
    '-webkit-transform': 'rotate(-45deg)',
    '-moz-transform': 'rotate(-45deg)',
    '-ms-transform': 'rotate(-45deg)',
    '-o-transform': 'rotate(-45deg)',
    'transform': 'rotate(-45deg)',
    '-webkit-transform-origin': '0 100%',
    '-moz-transform-origin': '0 100%',
    '-ms-transform-origin': '0 100%',
    '-o-transform-origin': '0 100%',
    'transform-origin': '0 100%',
    'margin': '60px 0 10px 110px',
	'border-radius': '0',
						}
},
		},

    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h4 style='color: #808080;'>Achievements: " + player.a.achievements.length + "/" + (Object.keys(tmp.a.achievements).length - 2) + "</h4><h4 style='color: #808080;'>Badges: " + formatWhole(player.a.badges) + "/" + formatWhole(player.a.badges.min(1)) + "</h4><br>You have <h3 style='color: yellow; text-shadow: 0 0 10px yellow'>" + format(player.a.points) + "</h3> Achievement Points, <br><h4 style='color: #808080;'>Giving x" + format(player.a.points.add(1).pow(0.56).pow(player.a.points.sub(1.2e6).max(1))) + " to point gain (not working in challenges)</h4><br>" + "<h4 style='color: #808080;'>The effect massively boosts at 1.2e6 AP" + "</h4>"
    }
    ], "blank", "blank", "achievements", ],
}, )