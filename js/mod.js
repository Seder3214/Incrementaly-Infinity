let modInfo = {
	name: "Incremental Infinity",
	id: "iinf",
	author: "seder3214",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.96.4",
	name: "Literally Chemicals",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade("c", 35)) gain = gain.times(player.c.h.pow(1e75))
			 if (hasUpgrade("c", 24)) gain = gain.times(upgradeEffect("c", 24))
	if (hasAchievement("a", 11) && (!inChallenge("m", 11) && (!inChallenge("m",12)))) gain = gain.times(player.a.points.add(1).pow(0.56).pow(player.a.points.sub(1.2e6).max(1)))
	if (hasUpgrade("b", 95)) gain = gain.times(upgradeEffect("b", 95))
	if (hasUpgrade("b", 65)) gain = gain.times(upgradeEffect("b", 65))
	if (hasUpgrade("b", 64)) gain = gain.times(upgradeEffect("b", 64))
	if (hasUpgrade("b", 63)) gain = gain.times(upgradeEffect("b", 63))
	if (hasUpgrade("b", 55)) gain = gain.times(upgradeEffect("b", 55))
	if (hasUpgrade("b", 45)) gain = gain.pow(upgradeEffect("b", 44)).times(2)
	if (hasUpgrade("b", 43)) gain = gain.times(upgradeEffect("b", 43))
	if (hasUpgrade("b", 15)) gain = gain.times(upgradeEffect("b", 15))
	if (hasUpgrade("b", 11)) gain = gain.times(upgradeEffect("b", 11))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("eee280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}