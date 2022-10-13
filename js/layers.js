addLayer("b", {
    name: "boosters", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		best: new Decimal(0),
        pwr: new Decimal(0),
		auto: true,
    }},
	automate() {},
	autoUpgrade() {return (hasMilestone("i", 11) && player.b.auto)},
    color: "#9BEDF2",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "boosters", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
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
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10]]
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
		effect() {if (hasUpgrade("ex", 11)) return player.b.points.pow(0.5).min(upgradeEffect("ex", 11).times(.34e9)).max(1)
			if (hasUpgrade("b", 25)) return player.b.points.pow(0.5).min(.34e9)
			else return player.b.points.pow(2.2).min(upgradeEffect("b", 21).times(20)).max(1.5)},
		effectDisplay() {return format(upgradeEffect("b", 11)) + "x"},
		},
		12: {
		title: "Self-boost",
		description: "Boosters boost booster gain.",
		cost: new Decimal(20),
		unlocked() {return hasUpgrade("b", 11)},
		effect() {return player.b.points.pow(0.6).min(upgradeEffect("b", 22).times(20)).max(1)},
		effectDisplay() {return format(upgradeEffect("b", 12)) + "x"},
		},
		13: {
		title: "Synergism",
		description: "Points boost booster gain.",
		cost: new Decimal(280),
				unlocked() {return hasUpgrade("b", 12)},
		effect() {if (hasUpgrade("ex", 15)) return player.points.pow(0.8).min(upgradeEffect("b", 23).times(5).pow(10).times(upgradeEffect("ex", 15))).max(1)
			if (hasUpgrade("b", 35)) return player.points.pow(0.8).min(upgradeEffect("b", 23).times(5).pow(10)).max(1)
			else return player.points.pow(0.8).min(upgradeEffect("b", 23).times(5)).max(1)},
		effectDisplay() {return format(upgradeEffect("b", 13)) + "x"},
		},
		14: {
		title: "Best Power",
		description: "Best Boosters boost booster gain.",
		cost: new Decimal(3200),
				unlocked() {return hasUpgrade("b", 13)},
		effect() {return player.b.best.pow(0.3).max(1).min(4e13)},
		effectDisplay() {return format(upgradeEffect("b", 14)) + "x"},
		},
		15: {
		title: "Point Booster",
		description: "Point gain boosts themselves",
		cost: new Decimal(25000),
				unlocked() {return hasUpgrade("b", 14)},
		effect() {return getPointGen().pow(0.5).max(1)},
		effectDisplay() {return format(upgradeEffect("b", 15)) + "x"},
		},
		21: {
		title: "Softcap Booster",
		description: "Increase 'Boost!' softcap by points",
		cost: new Decimal(1005000),
		unlocked() {return hasUpgrade("b", 15)},
		effect() {if (hasUpgrade("b", 21)) return player.points.pow(1.15).min(upgradeEffect("b", 23).times(50))
			else return player.points.min(1)},
		effectDisplay() {return format(upgradeEffect("b", 21)) + "x"},
		},
		22: {
		title: "Boosting Feature",
		description: "Increase 'Synergism' softcap by best boosters",
		cost: new Decimal(328600000),
		unlocked() {return hasUpgrade("b", 21)},
		effect() {if (hasUpgrade("b", 21)) return player.b.points.pow(0.3).min(upgradeEffect("b", 23).times(10))
			else return player.points.min(1)},
		effectDisplay() {return format(upgradeEffect("b", 22)) + "x"},
		},
		23: {
		title: "Ancient Boost!",
		description: "Increase all booster upgrades softcap by 3.00x",
		cost: new Decimal(4e9),
		unlocked() {return hasUpgrade("b", 22)},
		effect() {if (hasUpgrade("b", 23)) return player.points.min(3)
			else return player.points.min(1)},
		effectDisplay() {return format(upgradeEffect("b", 23)) + "x"},
		},
		24: {
		title: "Synergism v2",
		description: "Each booster upgrade boost booster gain",
		cost: new Decimal(3e11),
		unlocked() {return hasUpgrade("b", 23)},
		effect() {let ret = Decimal.pow(1.2, player.b.upgrades.length)
		return ret;},
		effectDisplay() {return format(upgradeEffect("b", 24)) + "x"},
		},
		25: {
		title: "Sneaky Booster",
		description: "Scale 'Boost!' softcap but decrease its effect",
		cost: new Decimal(3e12),
		unlocked() {return hasUpgrade("b", 24)},
		},
		31: {
		title: "Booster Booster",
		description: "Best booster scale booster gain",
		cost: new Decimal(3e19),
		effect() {return player.b.best.pow(0.5).max(1).min(20)},
		unlocked() {return hasUpgrade("b", 25)},
		effectDisplay() {return format(upgradeEffect("b", 31)) + "x"},
		},
		32: {
		title: "Super Booster",
		description: "Unlock new tab",
		cost: new Decimal(1e22),
		unlocked() {return hasUpgrade("b", 31)},
		},
        33: {
		title: "Boostering",
		description: "Power boost boosters gain",
		cost: new Decimal(1e40),
				effect() {return player.b.pwr.pow(0.15).min(50)},
		unlocked() {return hasUpgrade("b", 55)},
		effectDisplay() {return format(upgradeEffect("b", 33)) + "x"},
		},
		 34: {
		title: "Machinering",
		description: "Points boost boosters gain",
		cost: new Decimal(3e45),
				effect() {return player.points.pow(0.15).min(100)},
		unlocked() {return hasUpgrade("b", 33)},
		effectDisplay() {return format(upgradeEffect("b", 34)) + "x"},
		},
		 35: {
		title: "Machinering II",
		description: "Scale up 'Synergism' softcap by ^2",
		cost: new Decimal(2e50),
		unlocked() {return hasUpgrade("b", 34)},
		},
				41: {
		title: "Booster Effect",
		description: "Power boosts boosters gain",
		cost: new Decimal(10),
		effect() {return player.b.pwr.pow(0.5).max(1).min(30)},
		unlocked() {return hasUpgrade("b", 32)},
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
		cost: new Decimal(5e22),
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
		cost: new Decimal(1e28),
		unlocked() {return hasUpgrade("b", 45)},
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
		cost: new Decimal(360000000),
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
		cost: new Decimal(5e32),
		unlocked() {return hasUpgrade("b", 54)},
				effect() {return player.b.points.pow(0.2).min(120)},
						effectDisplay() {return format(upgradeEffect("b", 55)) + "x"},
		},
						61: {
		title: "Power SSR",
		description: "Boosters boost booster gain",
		cost: new Decimal(1.2e61),
		unlocked() {return hasUpgrade("b", 35)},
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
	},
	update(diff) {
		if (hasUpgrade("b", 32)) return player.b.pwr = player.b.pwr.add(tmp.b.effect.times(diff))
	},
			passiveGeneration() {
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
					["display-text", () => "You are gaining <h2 style='color: #F2CD9B; text-shadow: 0 0 10px #F2CD9B'>" + format(tmp.i.pasgain) + "</h2> Incrementals/s" ],
					["display-text", () => "You have <h2 style='color: #F2CD9B; text-shadow: 0 0 10px #F2CD9B'>" + format(player.i.energy) + "</h2> Energy, which gains <h2 style='color: #F2CD9B; text-shadow: 0 0 10px #F2CD9B'> <br>" + format(player.i.energy.max(1).pow(0.4)) + "x</h2> boost to booster gain"],
                    "upgrades"
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
				if (hasUpgrade("i", 44)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Softcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)).times(upgradeEffect("i", 42)).times(upgradeEffect("i", 43)).times(player.i.sci.pow(300)))+"</b>"
				if (hasUpgrade("i", 43)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Softcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)).times(upgradeEffect("i", 42)).times(upgradeEffect("i", 43)))+"</b>"
				if (hasUpgrade("i", 42)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Softcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)).times(upgradeEffect("i", 42)))+"</b>"
				if (hasUpgrade("i", 41)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Softcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34)).times(upgradeEffect("i", 41)))+"</b>"
			if (hasUpgrade("i", 34)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Softcap is</b>  <b>" + format(player.i.sci.times(upgradeEffect("i", 33)).times(upgradeEffect("i", 34))) + "</b>"
				if (hasUpgrade("i", 33)) return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Softcap is</b> <b>" + format(player.i.sci.times(upgradeEffect("i", 33))) + "</b>"
				else return format(upgradeEffect("i", 33)) + "x" + "<br> <b>Current Softcap is</b> <b>" + format(player.i.sci) + "</b>"},
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
			unlocked() {return (upgradeEffect("ex", 31).gte(2))},
			effect() {return player.ex.points.pow(1.6e4)},
			effectDisplay(){ return format(upgradeEffect("i", 51)) + "x"},
				currencyDisplayName: "Energy", // Use if using a nonstandard currency
                currencyInternalName: "energy", // Use if using a nonstandard currency
                currencyLayer: "i",
		},
				52: {
					title: "Boosts",
			description: "Apply Energy effect to energy gain",
			cost: new Decimal(Decimal.pow(1e9, 1.458e5)),
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
			unlocked() {return (upgradeEffect("ex", 31).gte(3))},
			effect() {return player.ex.points.pow(1e4).sub(player.ex.points.pow(3)).min(Decimal.pow(1e9, 4e41))},
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
		update(diff) {
		if (hasMilestone("i", 12)) {
			player.i.energy = player.i.energy.add(tmp.i.effect.times(diff))
			player.i.points = player.i.points.add(tmp.i.pasgain.times(diff))}
		if (hasUpgrade("i", 11)) return player.i.energy = player.i.energy.add(tmp.i.effect.times(diff))
	},
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for incrementals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("b", 75) || player[this.layer].unlocked)}
})
addLayer("g", {
    name: "generator", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		energy: new Decimal(0),
		auto: true,
    }},
    color: "#E99BF2",
	branches: ["b"],
			automate() {},
	autoPrestige() {return (hasMilestone("ex", 13) && player.g.auto)},
	effectDescription() {return "which are gaining <h2 style='color: #E99BF2; text-shadow: 0 0 10px #E99BF2'>" + format(player.g.points.max(1).add(1)) + "x</h2> to Booster and Power gain <br>"},
    requires() { return Decimal.pow(10,59265)},// Can be a function that takes requirement increases into account
    resource: "generators", // Name of prestige currency
    baseResource: "boosters", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {if (hasMilestone("ex", 13)) return new Decimal(34)
		else return new Decimal(17.86)}, // Prestige currency exponent
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
                    "Upgrades": {
                content: [
                    ["blank", "15px"],
					["display-text", () => "You have <h2 style='color: #E99BF2; text-shadow: 0 0 10px #E99BF2'>" + format(player.g.energy) + "</h2> Generator Power, which gains <h2 style='color: #E99BF2; text-shadow: 0 0 10px #E99BF2'> <br>" + format(player.g.energy.max(1).pow(0.4)) + "x</h2> boost to booster gain"],
                    ["upgrades", [1,2,3,4]]
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
		},
			milestones: {
		11: {
			requirementDescription: "68 Generators",
			effectDescription: "Gain 1e30% of Booster gain on reset",
			done() { return (player.g.points.gte(68)) },		
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
		if (hasUpgrade("g", 14)) return player.g.energy = player.g.energy.add(tmp.g.effect.times(diff))
	},
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Generators", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("b", 75) || player[this.layer].unlocked)}
}),

addLayer("ex", {
    name: "ExpantaNum", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "EX", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		energy: new Decimal(0),
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
                    "Main": {
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4,10,11,12]]
                ]
            },
                    "Milestones": {
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]
            },
			                    "ExBoosters": {
									unlocked() {return hasUpgrade("ex", 45)},
                content: [
                    ["blank", "15px"],
                    ["upgrades", [5,6,7]],
					["buyables", [1]]
                ]
            },
			                    "Nums": {
				unlocked() {return hasUpgrade("ex", 75)},
                content: [
                    ["blank", "15px"],
                    ["buyables", [2,3]],
					 ["upgrades", [8,9]]
                ]
            },
	},
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
			cost: new Decimal(1240),
			unlocked() {return hasUpgrade("ex", 14)},
			effect() {return player.ex.points.pow(Decimal.pow(10, 3400)).min(Decimal.pow(1e10, 345000))},
			effectDisplay() {return format(upgradeEffect("ex", 15)) + "x"},
		},
		16: {
			title: "Expandation II",
			description: "Generators after 150 gives boost to ExpantaNum gain",
			cost: new Decimal(1840),
			unlocked() {return hasUpgrade("ex", 15)},
			effect() {return player.g.points.sub(150).max(1).pow(0.6).min(12500)},
			effectDisplay() {return format(upgradeEffect("ex", 16)) + "x"},
		},
				21: {
			title: "Expandation III",
			description: "Generators after 180 gives boost to ExpantaNum gain",
			cost: new Decimal(7640),
			unlocked() {return hasUpgrade("ex", 16)},
			effect() {return player.g.points.sub(180).max(1).pow(1.2).min(12500)},
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
			cost: new Decimal(1e11),
			unlocked() {return hasUpgrade("ex", 23)},
			effect() {return player.g.points.min(25).pow(20).max(1)},
			effectDisplay() {return format(upgradeEffect("ex", 24)) + "x"},
		},
				25: {
			title: "Power-Boost",
			description: "Generator Power boosts expantaNum gain",
			cost: new Decimal(1.65e11),
			unlocked() {return hasUpgrade("ex", 24)},
			effect() {return tmp.g.effect.pow(0.02).max(1)},
			effectDisplay() {return format(upgradeEffect("ex", 25)) + "x"},
		},
						26: {
			title: "Expandation IV",
			description: "Energy boosts expantaNum gain",
			cost: new Decimal(2.35e11),
			unlocked() {return hasUpgrade("ex", 25)},
			effect() {return tmp.i.effect.pow(0.3).max(1).min(100)},
			effectDisplay() {return format(upgradeEffect("ex", 26)) + "x"},
		},
						31: {
			title: "Expandation V",
			description: "Each ExpantaNum milestones gives a boost to itself",
			cost: new Decimal(2e12),
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
					else return player.ex.points.gte(1)},
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
			effect() {return player.g.energy.times(player.i.energy).pow(0.3).min(Decimal.pow(1e9, 1e307))},
			effectDisplay() {return format(upgradeEffect("ex", 34)) + "x"},
		},
						35: {
			title: "Numerize",
			description: "Unlock new tab",
			cost: new Decimal(Decimal.pow(1e11, 1.36e306)),
			unlocked() {return hasUpgrade("ex", 34)},
		},
	},
				milestones: {
		11: {
			requirementDescription: "30 ExpantaNums",
			effectDescription: "Keep Generator upgrades on reset",
			done() { return (player.ex.points.gte(30)) },		
    },
		12: {
			requirementDescription: "2500 ExpantaNums",
			effectDescription: "Gain 10% of ExpantaNum",
			done() { return (player.ex.points.gte(2500)) },		
    },
		13: {
			requirementDescription: "e1e56 ExpantaNums",
			effectDescription: "Auto-buy Generators",
			done() { return player.ex.points.gte(Decimal.pow(1e9, 2e52))},
			toggles: [["g", "auto"]],			
    },
				},
								passiveGeneration() {
				if (hasMilestone("ex", 12)) return (hasMilestone("ex", 12)?0.1:0)
  },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for ExpantaNums", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("g", 31) || player[this.layer].unlocked)}
}),
addLayer("m", {
    name: "Masteries", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		energy: new Decimal(0),
    }},
    color: "#fcf174",
	branches: ["i"],
	effectDescription() {return "which are gaining <h2 style='color: #fcf174; text-shadow: 0 0 10px #fcf174'>" + format(player.ex.points.max(1).add(1)) + "x</h2> to Incrementals gain <br>"},
    requires() { return new Decimal(Decimal.pow(1e300, 3e45))},// Can be a function that takes requirement increases into account
    resource: "masteries", // Name of prestige currency
    baseResource: "expantaNums", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
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
                    "Upgrades": {
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4]]
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
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for Masteries", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return false},
})
addLayer("c", {
    name: "Chemicals", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		energy: new Decimal(0),
    }},
    color: "#d9ff66",
	branches: ["i", "g"],
	effectDescription() {return "which are gaining <h2 style='color: #d9ff66; text-shadow: 0 0 10px #d9ff66'>" + format(player.c.points.max(1).add(1)) + "x</h2> to Incrementals gain <br>"},
    requires() { return new Decimal(Decimal.pow(1e300, 3e20))},// Can be a function that takes requirement increases into account
    resource: "generators", // Name of prestige currency
    baseResource: "expantaNums", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
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
                    "Upgrades": {
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4]]
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
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Chemicals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return false},
})
