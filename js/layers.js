addLayer("b", {
    name: "boosters", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		best: new Decimal(0),
        pwr: new Decimal(0),
    }},
    color: "#9BEDF2",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "boosters", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
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
                    "Boosters": {
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,7,8]]
                ]
            },
			                    "Booster Power": {
									unlocked() {return hasUpgrade("b", 32)},
                content: [
                    ["blank", "15px"],
					["display-text", () => "You have <h2 style='color: #9BEDF2; text-shadow: 0 0 10px #9BEDF2'>" + format(player.b.pwr) + "</h2> Booster Power. <br>" + "You are generating " + format(tmp.b.effect) + " Booster Power/s"],
                    ["upgrades", [4,5,6]]
                ]
            },
	},
	},
	upgrades: {
		11: {
		title: "Boost!",
		description: "Boosters boost point gain.",
		cost: new Decimal(1),
		effect() {if (hasUpgrade("b", 25)) return player.b.points.pow(0.5).min(.34e9)
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
		effect() {return player.points.pow(0.8).min(upgradeEffect("b", 23).times(5)).max(1)},
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
		description: "Unlock Generators and Incrementalies",
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
	},
	update(diff) {
		if (hasUpgrade("b", 32)) return player.b.pwr = player.b.pwr.add(tmp.b.effect.times(diff))
	},
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
}),
addLayer("i", {
    name: "incremental", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#F2CD9B",
	branches: ["b"],
    requires: new Decimal(1e32), // Can be a function that takes requirement increases into account
    resource: "incrementals", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("b", 35)}
})
addLayer("g", {
    name: "generator", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#E99BF2",
	branches: ["b"],
    requires: new Decimal(1e32), // Can be a function that takes requirement increases into account
    resource: "incrementals", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("b", 35)}
})
