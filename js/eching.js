// INDEX JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

// // OPEN NAV
// document.getElementById("navIcon").onclick = function() {
	// document.getElementById("navIcon").style.display = "none";
	// document.getElementById("closeNav").style.display = "block";
	// document.getElementsByTagName("nav")[0].style.display = "block";
// };

// // CLOSE NAV
// document.getElementById("closeNav").onclick = function() {
	// document.getElementById("navIcon").style.display = "block";
	// document.getElementById("closeNav").style.display = "none";
	// document.getElementsByTagName("nav")[0].style.display = "none";
// };

// SHORTCUT FUNCIOTN FOR GRABBING ID AND SETTING BACKGROUND AND DISPLAY VALUES
function set(idee, background, display, bs, br, bp) {
	var setIdee = document.getElementById(idee);
	setIdee.style.background = background;
	setIdee.style.display = display;
	setIdee.style.backgroundSize = bs;
	setIdee.style.backgroundRepeat = br;
	setIdee.style.backgroundPosition = bp;
};

var backgrounds1 = ["url('img/background1.jpg')", "url('img/background2.jpg')", "url('img/background3.jpg')"];
var backgrounds2 = ["url('img/background11.jpg')", "url('img/background22.jpg')", "url('img/background33.jpg')"];
var backgrounds3 = ["url('img/background111.jpg')", "url('img/background222.jpg')", "url('img/background333.jpg')"];
var ranBack1 = Math.floor(Math.random() * backgrounds1.length);
var ranBack2 = Math.floor(Math.random() * backgrounds1.length);
var ranBack3 = Math.floor(Math.random() * backgrounds1.length);
 
set("coinHexWrap", backgrounds1[ranBack1], "block", "100% 100%", "no-repeat");
set("hexInfo", backgrounds2[ranBack2], "none", "contain", "no-repeat");
set("coinButton", backgrounds3[ranBack3], "block", "100% auto", "no-repeat");
set("hexButton", backgrounds3[ranBack2], "block", "100% auto", "no-repeat");
set("readButton", backgrounds3[ranBack1], "block", "100% auto", "no-repeat");
set("againButton", backgrounds3[ranBack3], "block", "100% auto", "no-repeat");

// set("heads1", "url('img/coinFlip.png')", "block", "675px 75px", "no-repeat");
// set("tails1", "url('img/coinFlip.png')", "block", "675px 75px", "no-repeat");

// set("heads2", "url('img/coinFlip.png')", "block", "675px 75px", "no-repeat");
// set("tails2", "url('img/coinFlip.png')", "block", "675px 75px", "no-repeat");

// set("heads3", "url('img/coinFlip.png')", "block", "675px 75px", "no-repeat");
// set("tails3", "url('img/coinFlip.png')", "block", "675px 75px", "no-repeat");

// SET NAV ICON IMAGE
// set("navIcon", "url('img/nav.png')", "block", "100% 100%", "no-repeat");

// SET NAV LINK ICONS
// set("navGithubLink", "url('img/github.png')", "block", "50px 50px", "no-repeat", "center");
// set("navLinkedinLink", "url('img/linkedin.png')", "block", "50px 50px", "no-repeat", "center");

// SET FOOTER LINK ICONS
// set("footerGithubLink", "url('img/github.png')", "block", "50px 50px", "no-repeat", "center");
// set("footerLinkedinLink", "url('img/linkedin.png')", "block", "50px 50px", "no-repeat", "center"); 

//document.getElementById("coinButton").disabled = false;


document.getElementById("coinButton").disabled = false;
document.getElementById("hexButton").disabled = true;
document.getElementById("readButton").disabled = true;
document.getElementById("againButton").disabled = true;

var coinWrap = document.getElementsByClassName("coinWrap");

document.getElementById("coinButton").onclick = function() {

	coinWrap[0].style.webkitAnimation = "coinSpin 1.5s 1 steps(23) forwards, coinFlip 1.5s";
	coinWrap[0].style.animation = "coinSpin 1.5s 1 steps(23) forwards, coinFlip 1.5s";

	setTimeout(function(){ coinWrap[1].style.webkitAnimation = "coinSpin 1.5s 1 steps(23) forwards, coinFlip 1.5s"; }, 100);
	setTimeout(function(){ coinWrap[1].style.animation = "coinSpin 1.5s 1 steps(23) forwards, coinFlip 1.5s"; }, 100);
	
	setTimeout(function(){ coinWrap[2].style.webkitAnimation = "coinSpin 1.5s 1 steps(23) forwards, coinFlip 1.5s"; }, 200);
	setTimeout(function(){ coinWrap[2].style.animation = "coinSpin 1.5s 1 steps(23) forwards, coinFlip 1.5s"; }, 200);
	
	document.getElementById("hexButton").disabled = false;
	document.getElementById("coinButton").disabled = true;
};


var hex = [];
hex.reverse();

var lineTotal = [];

var tri1 = [];
var tri2 = [];

document.getElementById("hexButton").onclick = function() {
	for (var j = 0; j < 6; j++) {
		hex.push([]); 
		for (var i = 0; i < 3; i++) {
			hex[j].push(Math.round(Math.random()));
			if (hex[j][i] === 1) {
				hex[j][i] = 3;
			} else if (hex[j][i] === 0) {
				hex[j][i] = 2;
			}
		}
		lineTotal.push(hex[j][0] + hex[j][1] + hex[j][2]);

		if (lineTotal[j] === 6 || lineTotal[j] === 8) {
			var h3 = document.createElement("h3");
			var hexLine = document.createTextNode("~");
			h3.appendChild(hexLine);
			h3.style.background = "-webkit-linear-gradient(left, black 40%, transparent 40.01%, transparent 60%, black 60.01%)";
			h3.style.background = "linear-gradient(to right, black 40%, transparent 40.01%, transparent 60%, black 60.01%)";
			document.getElementById("hex").appendChild(h3);
		} else if (lineTotal[j] === 7 || lineTotal[j] === 9) {
			var h3 = document.createElement("h3");
			var hexLine = document.createTextNode("-");
			h3.appendChild(hexLine);
			h3.style.background = "black";
			document.getElementById("hex").appendChild(h3);
		}
	}
	
	tri1.push(lineTotal[3],lineTotal[4],lineTotal[5]);
	tri2.push(lineTotal[0],lineTotal[1],lineTotal[2]);
	
	document.getElementById("hexButton").disabled = true;
	document.getElementById("readButton").disabled = false;
};

var hexInfo = document.getElementById("hexInfo");
var hexIcon = document.getElementById("hexIcon");
var hexNumber = document.getElementById("hexNumber");
var hexName = document.getElementById("hexName");
var keyWords = document.getElementById("keyWords");
var description = document.getElementById("description");
var hexAnchor = document.getElementById("hexAnchor");

var triName1;
var triName2;

document.getElementById("readButton").onclick = function() {
	hexInfo.style.display = "block";
	hexInfoWrap.style.display = "block";
	
	document.getElementById("readButton").disabled = true;
	
	if (tri1[0] == 7 || tri1[0] == 9) {
		if (tri1[1] == 7 || tri1[1] == 9) {
			if (tri1[2] == 7 || tri1[2] == 9) {
				triName1 = "Heaven";
			} else if (tri1[2] == 6 || tri1[2] == 8) {
				triName1 = "Wind";
			}
		} else if (tri1[1] == 6 || tri1[1] == 8) {
			if (tri1[2] == 7 || tri1[2] == 9) {
				triName1 = "Fire";
			} else if (tri1[2] == 6 || tri1[2] == 8) {
				triName1 = "Mountain";
			}
		}
	} else if (tri1[0] == 6 || tri1[0] == 8) {
		if (tri1[1] == 7 || tri1[1] == 9) {
			if (tri1[2] == 7 || tri1[2] == 9) {
				triName1 = "Lake";
			} else if (tri1[2] == 6 || tri1[2] == 8) {
				triName1 = "Water";
			}
		} else if (tri1[1] == 6 || tri1[1] == 8) {
			if (tri1[2] == 7 || tri1[2] == 9) {
				triName1 = "Thunder";
			} else if (tri1[2] == 6 || tri1[2] == 8) {
				triName1 = "Earth";
			}
		}
	}
	
	if (tri2[0] == 7 || tri2[0] == 9) {
		if (tri2[1] == 7 || tri2[1] == 9) {
			if (tri2[2] == 7 || tri2[2] == 9) {
				triName2 = "Heaven";
			} else if (tri2[2] == 6 || tri2[2] == 8) {
				triName2 = "Wind";
			}
		} else if (tri2[1] == 6 || tri2[1] == 8) {
			if (tri2[2] == 7 || tri2[2] == 9) {
				triName2 = "Fire";
			} else if (tri2[2] == 6 || tri2[2] == 8) {
				triName2 = "Mountain";
			}
		}
	} else if (tri2[0] == 6 || tri2[0] == 8) {
		if (tri2[1] == 7 || tri2[1] == 9) {
			if (tri2[2] == 7 || tri2[2] == 9) {
				triName2 = "Lake";
			} else if (tri2[2] == 6 || tri2[2] == 8) {
				triName2 = "Water";
			}
		} else if (tri2[1] == 6 || tri2[1] == 8) {
			if (tri2[2] == 7 || tri2[2] == 9) {
				triName2 = "Thunder";
			} else if (tri2[2] == 6 || tri2[2] == 8) {
				triName2 = "Earth";
			}
		}
	}
	
	if (triName1 == "Heaven") {
		if (triName2 == "Heaven") {
			hexIcon.innerHTML = "&#x4DC0;";
			hexNumber.innerHTML = "1. ";
			hexName.innerHTML = "QIAN";
			keyWords.innerHTML = "Force, the creative, strong but kind action, the key, the creator, pure yang"; 
			description.innerHTML = "You are strong enough to accomplish your goals.  If you use this strength in kind and good ways, the highest forms of success are almost certainly yours.  However, if you overuse this strength, or use it mean or bad ways, trouble will likely head your way.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/1.php");
		} else if (triName2 == "Earth") {
			hexIcon.innerHTML = "&#x4DCA;";
			hexNumber.innerHTML = "11. ";
			hexName.innerHTML = "TAI";
			keyWords.innerHTML = "Pervading, peace, harmony, greatness, fruitfulness, perfect balance"; 
			description.innerHTML = "Things should start going your way, if they aren't already.  Success should come with out much of a struggle.  Great ideas and a spirit of compassion should easily overcome bad attidues small mindedness.  Small investments might pay off big.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/11.php");
		} else if (triName2 == "Thunder") {
			hexIcon.innerHTML = "&#x4DE1;";
			hexNumber.innerHTML = "34. ";
			hexName.innerHTML = "DA ZHUANG (TA CHUANG)";
			keyWords.innerHTML = "Power of the great, invigorating, rising energy, great maturity, responsibility"; 
			description.innerHTML = "You might want to think about adopting an emphasis on ethical strategies while shying away from impulsive actions.  Excessive force and overconfidence bring daggers.  Patience and consistent kindness are your friends and should offer greater gains.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/34.php");
		} else if (triName2 == "Wind") {
			hexIcon.innerHTML = "&#x4DC8;";
			hexNumber.innerHTML = "9. ";
			hexName.innerHTML = "XIAO XU (HSIAO CHU)";
			keyWords.innerHTML = "The taming power of the small, small harvest, quiet accumulation"; 
			description.innerHTML = "Great lessons may be learned from small matters.  Patience and caution are your allies.  Preparation is key.  Be wary of trouble and suspicion in relationships.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/9.php");
		} else if (triName2 == "Water") {
			hexIcon.innerHTML = "&#x4DC4;";
			hexNumber.innerHTML = "5. ";
			hexName.innerHTML = "XU (HSU)";
			keyWords.innerHTML = "Confident patience, waiting, nourishment, arriving, calculated inaction"; 
			description.innerHTML = "Rain feeds that which grows, which in turn feeds the people, but we must wait for it to come in its own time.  Don't worry or interfere before the time is right.  Acceptance of waiting does not mean the same thing as not trying.  Patience is the key to locating the sweet spot of time and opportunity.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/5.php");
		} else if (triName2 == "Fire") {
			hexIcon.innerHTML = "&#x4DCD;";
			hexNumber.innerHTML = "14. ";
			hexName.innerHTML = "DA YU";
			keyWords.innerHTML = "Abundance, wealth, a great harvest"; 
			description.innerHTML = "Great success occurs when we are in harmony with all things.  Things are falling into place, but pride, arrogance, and the self-indulgent pursuit of luxuries will likely lead to ruin.  Being humble and generous are likely to increase gains.  Wealth and power should be increased when they are seen as responsibilities instead of toys.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/14.php");
		} else if (triName2 == "Mountain") {
			hexIcon.innerHTML = "&#x4DD9;";
			hexNumber.innerHTML = "26. ";
			hexName.innerHTML = "DA XU (TA CHU)";
			keyWords.innerHTML = "The taming power of the great, appropriate restraint, accumulation, potential energy"; 
			description.innerHTML = "Focus is key.  Amass personal virtue, daily.  Accumulate both knowledge and wisdom. Be wary of interference from troublesome people.  Friendships should be cultivated.  Win enemies over by gentle persistence.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/26.php");
		} else if (triName2 == "Lake") {
			hexIcon.innerHTML = "&#x4DE9;";
			hexNumber.innerHTML = "43. ";
			hexName.innerHTML = "GUAI (KUAI)";
			keyWords.innerHTML = "Break-through, resolve, determination, speaking out"; 
			description.innerHTML = "The time for hesitation is over.  Don't fight fire with fire.  Don't resort to throwing things in other people's face.  Avoid letting anger or ego take the upper hand.  The wisest tactic is to be cool and further virtue.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/43.php");
		}
	} else if (triName1 == "Earth") {
		if (triName2 == "Heaven") {
			hexIcon.innerHTML = "&#x4DCB;";
			hexNumber.innerHTML = "12. ";
			hexName.innerHTML = "PI";
			keyWords.innerHTML = "Standstill, obstruction, disharmony, adversity, fragility"; 
			description.innerHTML = "Be wary of opportunities to sell your integrity for favor or fortune.  Don't be talked into something you know is wrong, otherwise expect further problems.  When things are difficult, it is wise to remain steadfast, and remember that all situations are temporary.  Eventaully, peace follows war.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/9.php");
		} else if (triName2 == "Earth") {
			hexIcon.innerHTML = "&#x4DC1;";
			hexNumber.innerHTML = "2. ";
			hexName.innerHTML = "KUN";
			keyWords.innerHTML = "The flow, receptivity, passivity, pure yin"; 
			description.innerHTML = "Receptivity should lead to abundance.  Opportunities abound for those who are open.  In good soil, one seed can become a million.<br>Listen to your giudes.  Now is the time for following good adive.  Good advice comes from those who have your best iunterest in heart and know what they are talking about.  Following now should lead to desired results.  Thinking your decision is the only one that matters will aslmost cetainly lead to disaster.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/2.php");
		} else if (triName2 == "Thunder") {
			hexIcon.innerHTML = "&#x4DCF;";
			hexNumber.innerHTML = "16. ";
			hexName.innerHTML = "YU";
			keyWords.innerHTML = "Enthusiasm, vitality, delight, providing for"; 
			description.innerHTML = "Energy wells up and builds and finally releases like powerful thunder storms.  This is worthy of celebration.  Celebration brings people together, transcends differences, and reminds people their ultimately unified agenda.  Don't be that person who misuses this time for personal gains, and be wary of any who would.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/16.php");
		} else if (triName2 == "Wind") {
			hexIcon.innerHTML = "&#x4DD3;";
			hexNumber.innerHTML = "20. ";
			hexName.innerHTML = "GUAN";
			keyWords.innerHTML = "Observation, contemplation, meditation, looking to different elevations"; 
			description.innerHTML = "Mental clarity is key.  Just as the high ground offers a better vantage pont, a calm mind can see more than one in chaos.  Stepping back for a larger view can offer great rewards, but stay present in the moment.  Be mindful of things and just as importanlty, the spaces between things.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/20.php");
		} else if (triName2 == "Water") {
			hexIcon.innerHTML = "&#x4DC7;";
			hexNumber.innerHTML = "8. ";
			hexName.innerHTML = "BI";
			keyWords.innerHTML = "Holding together, union, alliance, alignment, support, solidarity"; 
			description.innerHTML = "The community is strenghtened by connections.  Good relationships give people strength and harmony.  People are more likely to thrive in a strong community.  This requires learning from mistakes and making a conscious effort to imoprove ourselves and our behaviour.  Value a sincere desire for harmony in your freindships, communities, and workplaces.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/8.php");
		} else if (triName2 == "Fire") {
			hexIcon.innerHTML = "&#x4DE2;";
			hexNumber.innerHTML = "35. ";
			hexName.innerHTML = "JING (CHIN)";
			keyWords.innerHTML = "Progress, prospering, promotion, fast and easy change"; 
			description.innerHTML = "New beginnings and bright hope for the future, abound.  Pure motives should help illuminate the path for others and increase opprotunities to fulfill a goal.  However, it is wise to be somewhat wary of easy progress, for it may undermine your ultimate progress and character.  Insincerity and vanity are enemies to be on the look out for.  These must be avoided, as must the tendancy to slack off or to pretend to be something you are not.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/35.php");
		} else if (triName2 == "Mountain") {
			hexIcon.innerHTML = "&#x4DD6;";
			hexNumber.innerHTML = "23. ";
			hexName.innerHTML = "PO (BO)";
			keyWords.innerHTML = "Splitting apart, stripping, falling away, decay, collapse from within"; 
			description.innerHTML = "Don't postpone the inevetiable.  There is littel point to hangin on after the time for letting go has come and gone.  This is a time for learning from our mistakes.  Remember that it is darkest before the dawn, and to hold on to hope.  Learn waht you can and share it with others and the state of things will eventualy change.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/23.php");
		} else if (triName2 == "Lake") {
			hexIcon.innerHTML = "&#x4DEC;";
			hexNumber.innerHTML = "45. ";
			hexName.innerHTML = "CUI (TS'UI)";
			keyWords.innerHTML = "Gathering together, community, congregating, group cooperation"; 
			description.innerHTML = "Be on the lookout for unexpected situations, circumstances, and consequences.  This is a time for strengthening character.  Work towards keeping order.  Follow when wisely lead.  If leading, remember the importance of mutual intention and wise coordination.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/45.php");
		}
	} else if (triName1 == "Thunder") {
		if (triName2 == "Heaven") {
			hexIcon.innerHTML = "&#x4DD8;";
			hexNumber.innerHTML = "25. ";
			hexName.innerHTML = "WU WANG";
			keyWords.innerHTML = "Innocence, the unexpected, simplicity, integrity, absence of expectations"; 
			description.innerHTML = "Be here now.  Live in the moment.  Too much time spent anticipating rewards or unecessarily seeking approval can undermine your effots.  Adapt to unexpected difficulties.  Don't spend too much time overthinking or worrying about all the things that may or may not happen.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/25.php");
		} else if (triName2 == "Earth") {
			hexIcon.innerHTML = "&#x4DD7;";
			hexNumber.innerHTML = "24. ";
			hexName.innerHTML = "FU";
			keyWords.innerHTML = "The turning point, cycles, fresh beginings, returning"; 
			description.innerHTML = "Improvements may seem slow, but now is the time when things get better.  They will get better at their own pace.  Rushing things will only risk spoiling the good that is on its way.  Prepare youself by cultivating wisdom and patience so that you are best equipped to welcome the approaching opportunities.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/24.php");
		} else if (triName2 == "Thunder") {
			hexIcon.innerHTML = "&#x4DF2;";
			hexNumber.innerHTML = "51. ";
			hexName.innerHTML = "ZHEN (CHEN)";
			keyWords.innerHTML = "Shock, thunder, surprise, taking action"; 
			description.innerHTML = "Take responsibility for your troubles and look for new perspectives.  Adversity is natural.  More importantly, it often leads to better things and better character when we can rise to the challenge.  Take care, as trouble passes, not to fall back into old destructive or otherwise detrimental ways.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/51.php");
		} else if (triName2 == "Wind") {
			hexIcon.innerHTML = "&#x4DE9;";
			hexNumber.innerHTML = "42. ";
			hexName.innerHTML = "YI (I)";
			keyWords.innerHTML = "Increase, accumulation, blessings, windfalls"; 
			description.innerHTML = "Times of abundance must not be taken for granted, for just like times of trouble, they never last forever.  Now is the time for strong confident action.  Now is the time for capitalizing on opportunites.  Self-improvement can only increase your gains, while exploiting others for your personal interests runs the strong risk of derailing your efforts.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/42.php");
		} else if (triName2 == "Water") {
			hexIcon.innerHTML = "&#x4DC2;";
			hexNumber.innerHTML = "3. ";
			hexName.innerHTML = "ZHUN (CHUN)";
			keyWords.innerHTML = "Sprouting, budding, learning, difficulty at the beginning"; 
			description.innerHTML = "Preperation and timing are key.  So is being able to differentiate reality from illusion, real danger from percieved danger.  Be watchful of corrupting influences.  Like a big dark storm, confusion obscures good vision.  In the midst of a storm is perhaps not the best time for action.  Better to batten down the hatches, put your house in order, and hunker down until the storm passes.  The calm after the storm is a good time for action.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/3.php");
		} else if (triName2 == "Fire") {
			hexIcon.innerHTML = "&#x4DD4;";
			hexNumber.innerHTML = "21. ";
			hexName.innerHTML = "SHI HE (SHI HO)";
			keyWords.innerHTML = "Gnawing bite, corrective measures, restoring order, confronting negativity"; 
			description.innerHTML = "Perseverance, like biting your way through an obstacle, is sometimes the best course of action.  Good and properly administered law is the best way to deal with legal issues and to let harmony prevail.  Punishment must fit the crime and be free from vindictivness.  Keep the benefits of patience in mind.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/21.php");
		} else if (triName2 == "Mountain") {
			hexIcon.innerHTML = "&#x4DDA;";
			hexNumber.innerHTML = "27. ";
			hexName.innerHTML = "YI";
			keyWords.innerHTML = "Nourishment, nurturing, comfort and security"; 
			description.innerHTML = "Encourage renewed growth.  Take responsibility for the food you put in your mouth and the ideas you feed to your mind and spirit.  An emotional or intillectual diet of delusions, hate, self pity, or greed can be as damaging as destructive eating habbits. Just as you must be mindful of what you put into yourself, you must also be mindful of what you contribute to the world.  Moderation and tranquility yeild better results than carelessness and poor ingredients.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/27.php");
		} else if (triName2 == "Lake") {
			hexIcon.innerHTML = "&#x4DD0;";
			hexNumber.innerHTML = "17. ";
			hexName.innerHTML = "SUI";
			keyWords.innerHTML = "Following, adaptation, appropriate change, leading from behind"; 
			description.innerHTML = "Work to understand your place withing a situation and what you mean to the bigger picture.  Know when to act and when to wait.  Good leaders have learned how to serve and follow.  This is what inspires others to follow thier lead.  Coercion and cunning are likely to lead to ressentment and resistance.";
			hexAnchor.setAttributes("href", "http://ichingfortune.com/hexagrams/17.php");
		}
	} else if (triName1 == "Wind") {
		if (triName2 == "Heaven") {
			hexIcon.innerHTML = "&#x4DEB;";
			hexNumber.innerHTML = "44. ";
			hexName.innerHTML = "GOU (KOU)";
			keyWords.innerHTML = "Coming to meet, coupling, temptation, seduction, encountering bad influences"; 
			description.innerHTML = "It is time to gaurd against unworthy people, influences, and habits, even if they appear to be harmless.  Be wary against over-self-indulgence.  Dangerous and damaging behaviour can somtimes conquer slowly and imperceptably, like the darkness of night slowly getting longer as winter approaches.  Don't let the quietly gathering strentgh of bad impulseses and activities overtake you.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/44.php");
		} else if (triName2 == "Earth") {
			hexIcon.innerHTML = "&#x4DED;";
			hexNumber.innerHTML = "46. ";
			hexName.innerHTML = "SHENG";
			keyWords.innerHTML = "Ascending, pushing upward, steady growth, spring"; 
			description.innerHTML = "It's time to level up.  Obstacles should be few, minor, and far between.  Make the most of favorable circumstances.  Don't rush things, but don't stop trying either.  Find a balance.  Will power and self-control are key.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/46.php");
		} else if (triName2 == "Thunder") {
			hexIcon.innerHTML = "&#x4DDF;";
			hexNumber.innerHTML = "32. ";
			hexName.innerHTML = "HENG";
			keyWords.innerHTML = "persevering, duration, constancy, long-term partnerships"; 
			description.innerHTML = "Proper perseverance is made possible through proper fluxuations, like the constant but ever changing cycles of the seasons, like the expansion and contraction of our lungs as we breath.  Life is made possible by persevering along the constantly undulating current of change.  Cooperating and united purposes and relationships or more likely to endure inevitable change more harmoniously.  Ethics are key, as is avoiding disloyalty and self-interest.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/32.php");
		} else if (triName2 == "Wind") {
			hexIcon.innerHTML = "&#x4DF8;";
			hexNumber.innerHTML = "57. ";
			hexName.innerHTML = "XUN (SUN)";
			keyWords.innerHTML = "The gentle, the penetrating, persistence and patience"; 
			description.innerHTML = "Even a gentle wind can eventually tear down a mountain.  Aggressive or violent actions can make big changes, but are likely to strengthen the opposition.  In the long-term, intimidation and the forceful imposing of the will are less effective than earning trust through integrity, constancy, and humility.  A flexible nature is key, like the wind that persists but can easily change course in relation to its environment.  Balance is also key.  Be gentle and flexible, but don't be a push-over.  Advancment is much more difficult from a crouched position.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/57.php");
		} else if (triName2 == "Water") {
			hexIcon.innerHTML = "&#x4DEF;";
			hexNumber.innerHTML = "48. ";
			hexName.innerHTML = "JING (CHING)";
			keyWords.innerHTML = "The well, the source, replenishment, connection, spiritual satisfaction"; 
			description.innerHTML = "Don't underestimate the value of spiritual needs.  Just as the body needs nutritional sustenance, and the heart and mind need emotional and educational nourishment, so to does the soul require the quenching of spiritual thirst.  Spiritual sustenance lies below the surface, like water in a well that keeps the whole village alive.  Living purely on the the shallow, the surface, and the superficiality of the world will leave the needs of the deepest parts of oneself unsatisfied.  For a better life, feed the body, mind, heart, and spirit with uncontaminated food, love, wisdom, knowledge, and spirituality.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/48.php");
		} else if (triName2 == "Fire") {
			hexIcon.innerHTML = "&#x4DF1;";
			hexNumber.innerHTML = "50. ";
			hexName.innerHTML = "DING (TING)";
			keyWords.innerHTML = "The cauldron, the sacred vessel, transformation, consecration"; 
			description.innerHTML = "If a life is to be lived well, the meeting of the physical and meta-physical must be attended to and respected.  On one hand, our food is just food, just meat and wheat and whatnot made of cells, molocules and atoms.  On the other hand, everything has its own nature and essence, a spirit if you will.  Take the squirrel and the rat for instance.  The cute squirrel dines on fruit and nuts.  The off-puting rat rumages through refuse and waste.  You are what you eat, they say.  Is it the cells, molocules, and atoms of these very different diets that makes the squirrel's nature seem sweet, and the rat's nature seem repulsive?  Or is it the essence and spirit of what these animals eat that helps make them the way the are?  Be mindful of the deeper meanings and workings that underly everything you do and encounter.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/50.php");
		} else if (triName2 == "Mountain") {
			hexIcon.innerHTML = "&#x4DD1;";
			hexNumber.innerHTML = "18. ";
			hexName.innerHTML = "GU (KU)";
			keyWords.innerHTML = "Correcting, decay, working on what has been spoiled"; 
			description.innerHTML = "It's probably a good idea to turn over a new leaf, but use caution and clear thought both before and after the change is implemented to avoid disaster.  Be wary of change that offers short term gains over long lasting positive effects.  Problems must be addressed at their root to keep damaging cycles from repeating indefinitely.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/18.php");
		} else if (triName2 == "Lake") {
			hexIcon.innerHTML = "&#x4DDB;";
			hexNumber.innerHTML = "28. ";
			hexName.innerHTML = "DA GUO (TA KUO)";
			keyWords.innerHTML = "Critical mass, excessive pressure, the preponderance of the great, the danger of collapse"; 
			description.innerHTML = "One of the best ways to avoid danger is to simply get out of its way.  Don't be under the roof when it collapses.  Avoid reaching too far or spreading resources too thinly.  Success is attainable if we rise to the challenge with courage, self-discipline, and decisive action.  The most dangerous error at this point would likely be inaction.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/28.php");
		}
	} else if (triName1 == "Water") {
		if (triName2 == "Heaven") {
			hexIcon.innerHTML = "&#x4DC5;";
			hexNumber.innerHTML = "6. ";
			hexName.innerHTML = "SONG (SUNG)";
			keyWords.innerHTML = "Conflict, quarrels, contention, fighting"; 
			description.innerHTML = "Be wary of differences of opinion.  When conflicting ideas clash, things have the potential to get dicey unless we reamin clearheaded and compromising.  Impartial mediation is worth considering.  Large extravagant endeavors are probably ill adevised just now.  Calmness and caution are key, as is minding your temper.  Remember, outer conflict is often a reflection of some intrnal conflict.  Be cool and level-headed to have a better chance at avoiding life-altering conflict.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/6.php");
		} else if (triName2 == "Earth") {
			hexIcon.innerHTML = "&#x4DC6;";
			hexNumber.innerHTML = "7. ";
			hexName.innerHTML = "SHE (SHIH)";
			keyWords.innerHTML = "Leading, the army, collective energy, gathering your forces"; 
			description.innerHTML = "There is strength in numbers.  Where one is weak, many are strong.  But that strength can be of little use if untrained, inexpereinced, immoral, and/or mislead.  A bad army can be worse and more harmful than no army at all.  The same can be soaid of a good army with bad leadership.  Loyalty, self-discipline, honorable leadership, and a dedication to the benefit of all are key.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/7.php");
		} else if (triName2 == "Thunder") {
			hexIcon.innerHTML = "&#x4DE7;";
			hexNumber.innerHTML = "40. ";
			hexName.innerHTML = "JIE (HSIEH)";
			keyWords.innerHTML = "Deliverance, liberation, relief"; 
			description.innerHTML = "When obstacels are dissolved and difficulties resolved, advancment is again possible.  However, this is not the time to relax.  Neither is it the time for aggresively forging onward.  Instead, it is probably better just to return to your normal way of life and a position of centrality.  The realease of tension now is no more than a chance to begin anew.  Forgiveness is key here.  Grievances and grudges will only impede progress.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/40.php");
		} else if (triName2 == "Wind") {
			hexIcon.innerHTML = "&#x4DF;";
			hexNumber.innerHTML = "59. ";
			hexName.innerHTML = "HUAN";
			keyWords.innerHTML = "Dispersing, dissolution, resolving conflicts, restoring unity"; 
			description.innerHTML = "It is time to discard obstacels like stagnation, stalemates, and rigidity of thought.  Better to be flexible and move forward together.  This may accompanied by a period of chaos, like the deluge resulting from the tearing down of a dam.  Don't get lost in the confusion.  Ride it out.  Learn waht you can.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/59.php");
		} else if (triName2 == "Water") {
			hexIcon.innerHTML = "&#x4DDC;";
			hexNumber.innerHTML = "29. ";
			hexName.innerHTML = "KAN";
			keyWords.innerHTML = "The abyss, the perilous pit, danger, descent, darkness, mastering pitfalls"; 
			description.innerHTML = "Be wary of dangers.  Don't give in to doubt and desperation.  Consistancy, dependability, a calm and positive attitude, and the ability to move with the currents are key.  Danger, properly approached, offers the chance to sharpen our minds and senses and to learn rare things.  That which doesn't kill us has the potential to make us stronger.  Avoiding grief and escapism while relying on decisive action is likely to lead the way out of danger and into safety.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/29.php");
		} else if (triName2 == "Fire") {
			hexIcon.innerHTML = "&#x4DFF;";
			hexNumber.innerHTML = "64. ";
			hexName.innerHTML = "WEI JI (WEI CHI)";
			keyWords.innerHTML = "Before completion, continued effort, approaching success, the river not yet crossed"; 
			description.innerHTML = "The finish line is in sight, but the work isn't done yet.  This time can be dangerous.  Good work can be ruined by hastily rushing towards the end or overlooking unfinished details.  Gaurd against both frustration and bravado.  Focus on patience and caution to keep a probably victory from turning into an embarrassing mishap.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/64.php");
		} else if (triName2 == "Mountain") {
			hexIcon.innerHTML = "&#x4DC3;";
			hexNumber.innerHTML = "4. ";
			hexName.innerHTML = "MENG";
			keyWords.innerHTML = "Youthful folly, immaturity, inexperience, confusion, discovering";
			description.innerHTML = "A young mind is like an empty cup.  This cup is always being filled, but it is bottomless.  No matter our age, each of us is sometimes having our cup filled.  At other times, we are helping to fill the cup of another.  It may be time to be the student, to develop modesty, to suspend mistrust of the unknown and follw one who is wiser.<br>Alternatively, it may be time to instruct, in which case you would do well to cultivate patience and thoughtfulness.  Inspire in your pupil sincerity and a willingness to learn.  Be a good role model for those students who, for whatever reason, aren't ready to be taught, and they will eventually outgrow their difficulties.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/4.php");
		} else if (triName2 == "Lake") {
			hexIcon.innerHTML = "&#x4DEE;";
			hexNumber.innerHTML = "47. ";
			hexName.innerHTML = "KUN";
			keyWords.innerHTML = "Exhaustion, opression, entaglement, despair"; 
			description.innerHTML = "In the face of prolonged confidence-sucking adversity, a sense of purpose is a very valuable asset.  Without it, progress can be difficult and cease to seem desirable.  Be wary of pessimism and self-pitty.  Concentrate on retaining control.  Remaining cheerful is essential.  It may be time to hit the books or do some research, to get back to basics and remind yourself of all the great reasons you were trying in the first place.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/47.php");
		}
	} else if (triName1 == "Fire") {
		if (triName2 == "Heaven") {
			hexIcon.innerHTML = "&#x4DCC;";
			hexNumber.innerHTML = "13. ";
			hexName.innerHTML = "TONG REN (T'UNG JEN)";
			keyWords.innerHTML = "Fellowship, gathering, community, seeking harmony"; 
			description.innerHTML = "This is a time to look to the community or consider your group for strength.  True community is so much more than just a collection of people.  It's the power of the connection those people share.  One person praying is like an ember in the dark.  A community of prayers shines like a galaxy.  Common ground and shared goals make a community.  But it's not enough.  Sometimes everyone needs to be reminded that we all come from the same place, and that without a community, everyday life would be near impossible to survive.<br>Secrecy, suspicion, and factionalism are among the greatest enemies of the community.  For a community to thrive, hidden agendas, secret reservations, and unhelpful attitudes must be brought out into the open where they can be gently and respectfully discussed and dealt with.  The creation of such a community will not eliminate challenges, but if the group's unity is solid, they can expect to endure much and abound with success.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/13.php");
		} else if (triName2 == "Earth") {
			hexIcon.innerHTML = "&#x4DE3;";
			hexNumber.innerHTML = "36. ";
			hexName.innerHTML = "MING YI (MING I)";
			keyWords.innerHTML = "The darkening of the light, the wounding of brightness, brillinace injured, intelligence hidden, concealment of virtue"; 
			description.innerHTML = "Darkness is as inevitable as the dawn.  Darkness is an integral part of natural cycles, but it is not the best time to charge out or start a new enterprise.  The wise course would be to wait it out, and try again after the sunrise.<br>In dark times, individuals of an equaly dark nature often rise to power.  This might not be the best time to rise up and defy such individuals, since this could get you swallowed up by the dark.  Some terriblke and hopefully rare situations call for the concealment of your inner light in order to prevail.  This doesn't mean supporting dark people, power, or schemes.  It means outward detachment and inward perseverance so that you may be a living light in the darkness.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/36.php");
		} else if (triName2 == "Thunder") {
			hexIcon.innerHTML = "&#x4DF6;";
			hexNumber.innerHTML = "55. ";
			hexName.innerHTML = "FENG";
			keyWords.innerHTML = "Abundance, fullness, opportunity, bounty"; 
			description.innerHTML = "Energy is peaking.  This is a time of abundance, success, and supreme ahceivment.  But it won't last for ever.  You have to strike while the iron is hot.  Take full advantage of this time.  Get your plans in order.  Be wary of both excess and complacency during this time of abundance.  Don't get bogged down by self-congratualtions.  Instead focus on the careful management of all your affairs.  But don't let all this responsibility get in the way of taking pleasure in this great time.  it is right to celebrate with your people.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/55.php");
		} else if (triName2 == "Wind") {
			hexIcon.innerHTML = "&#x4DE4;";
			hexNumber.innerHTML = "37. ";
			hexName.innerHTML = "JIA REN (CHIA JEN)";
			keyWords.innerHTML = "The harmonious family, the well-ordered household, relationships, teamwork, communication, leading by example"; 
			description.innerHTML = "It is time to think on the importance of family, how you can help them, how they might be able to help you if you deserve it.  Family is a powerful force because a family cannot be broken.  They can be seperated by disputes and distances and differences and even death, butfamily they remain for all time.  Family function best when everyone contributes.  Integrity, generousity, accomodation, and communication are key.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/37.php");
		} else if (triName2 == "Water") {
			hexIcon.innerHTML = "&#x4DFE;";
			hexNumber.innerHTML = "63. ";
			hexName.innerHTML = "JI JI (CHI CHI)";
			keyWords.innerHTML = "After completion, fulfillment, the river crossed"; 
			description.innerHTML = "This is a time of victory, but vigilance is required to see that gains are not lost.  Balance and harmony are fragile, but key.  Consolidation is also key.  Be wary of both complacency and over-celebration.  Consider the importance of finishing what you're working on before starting that next project.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/63.php");
		} else if (triName2 == "Fire") {
			hexIcon.innerHTML = "&#x4DDD;";
			hexNumber.innerHTML = "30. ";
			hexName.innerHTML = "LI";
			keyWords.innerHTML = "Radiance, brightness, the fire, illumination, brilliance"; 
			description.innerHTML = "Fire can light the dark of night.  An internal fire lights our joy and enthusiasms.  If it is not properly fed, the fire can burn itself out, or blaze out of control.  With patience and self-awareness, we can relearn the instincitve knowledge of living in harmony and moving towards a more balanced and enlightened state.  Be wary of self-obsession.  Nothing good is gained through vanity or a lack of empathy or compassion.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/30.php");
		} else if (triName2 == "Mountain") {
			hexIcon.innerHTML = "&#x4DD5;";
			hexNumber.innerHTML = "22. ";
			hexName.innerHTML = "BI (PI)";
			keyWords.innerHTML = "Grace, luxuriance, elegance, presentation, glow"; 
			description.innerHTML = "There is great value and inspiration to be taken from natural beauty, but at the same time we should not be too hung up on surface appearances.  It is wise to see beyond surface superficialities.  Over emphasis on surface beauty can lead to reckless and unfair jusdgments, pretense and bravado.  Recognize all forms of beauty, but never forget its fleeting nature.  It's impermanence reminds us the true nature of time and being and the beauty of the spirit and that there are worlds behind this world.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/22.php");
		} else if (triName2 == "Lake") {
			hexIcon.innerHTML = "&#x4DF0;";
			hexNumber.innerHTML = "49. ";
			hexName.innerHTML = "GE (KO)";
			keyWords.innerHTML = "Revolution, molting, radical change, innovation, renewal, upheaval"; 
			description.innerHTML = "All movement in the universe is made possible by the interaction of opposing forces, yin and yang, summer and winter, male and femal, light and dark.  Imbalances sometimes make radical changes necessary.  The old way must go before the new way can take hold.  Careful consideration is key.  All alternatives must be considered, like the farmer planning for both rain and drought.  It is important to wait for the right moment to strike.  Timing is of paramount importance.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/49.php");
		}
	} else if (triName1 == "Mountain") {
		if (triName2 == "Heaven") {
			hexIcon.innerHTML = "&#x4DE0;";
			hexNumber.innerHTML = "33. ";
			hexName.innerHTML = "DUN (TUN)";
			keyWords.innerHTML = "Retreat, retiring, withdrawal, yeilding, refusal to be provoked"; 
			description.innerHTML = "Against opposing darkness, sometimes retreat is more honorable and correct than engagement.  What's important is to recognize when retreat is appropriate.  Don't be goaded into unecessary engagement, failure, or a comprimise with dark forces.  Action is best when the timing is right.  Gaurd against pride.  Be cool.  Be ruled not by hatred, but by dignity and prudence.  Cowradice, obstinance and beligerancy are more likely to pointlessly exhaust one's self and put important things in danger.  Now may not be the best to embark upon large undertakings.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/33.php");
		} else if (triName2 == "Earth") {
			hexIcon.innerHTML = "&#x4DCE;";
			hexNumber.innerHTML = "15. ";
			hexName.innerHTML = "QIAN (CH'IEN)";
			keyWords.innerHTML = "Humility, modesty, propriety"; 
			description.innerHTML = "Humility is the opposite of bad arrogance.  Ostentatious displays erode success.  Ego and pride, though strong, interfere with the ability to work with others.  Humility isn't innate, so it must be cultivated.  However, watch out for those who would take advantage of your humility.  Also, gaurd against boasting, pride, and self-importance.  Even the individual who climbs to the highest peak is still standing on the smae old Earth as everyone else.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/15.php");
		} else if (triName2 == "Thunder") {
			hexIcon.innerHTML = "&#x4DFD;";
			hexNumber.innerHTML = "62. ";
			hexName.innerHTML = "XIAO GUO (HSIAO KUO)";
			keyWords.innerHTML = "Preponderance of the small, small exceeding, small surpassing, attention to deatils, small adjustments, adapting to circumstances"; 
			description.innerHTML = "This may not be the time for ambition.  This is the time for saftey and humble duties rather than grandiose plans.  Advnacement is difficult.  A low profile is complimented by concentration on small challenges.  But don't completely abandon ambition and purpose.  Respect and kindness are key.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/62.php");
		} else if (triName2 == "Wind") {
			hexIcon.innerHTML = "&#x4DF4;";
			hexNumber.innerHTML = "53. ";
			hexName.innerHTML = "JIAN (CHIEN)";
			keyWords.innerHTML = "Development, gradual progress, advancement, steady growth, lasting results"; 
			description.innerHTML = "Look towards slow and steady progress.  Be strong and firmly rooted.  A sappling that grows too tall too soon can be easily unearthed by a moderate wind.  Patience and strength are key, but forceful behaviour will likely complicate difficulties, while persistence should lead otwards success.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/53.php");
		} else if (triName2 == "Water") {
			hexIcon.innerHTML = "&#x4DE6;";
			hexNumber.innerHTML = "39. ";
			hexName.innerHTML = "JIAN (CHEN)";
			keyWords.innerHTML = "Obstruction, obstacles, hardships, limping, interuption of flow"; 
			description.innerHTML = "As obstacles accumulate, so do dangers.  The realease of large quantities of stored up energy can wreak havoc.  It is perhaps better not to confront these dangers head on.  Skirting the hazards is better, if it can be done safely.  Although it is probably better to stay put until you have built up strength and consolidated support.  Be on the lookout for like-minded companions.  Be wary of self-pity or searching for someone to blame.  It is better to reflect and consider how the current situation might be a result of some internal conflict.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/39.php");
		} else if (triName2 == "Fire") {
			hexIcon.innerHTML = "&#x4DF7;";
			hexNumber.innerHTML = "56. ";
			hexName.innerHTML = "LU";
			keyWords.innerHTML = "Sojourning, the wanderer, traveling, transition, impermanence"; 
			description.innerHTML = "Restlessness often arises from the need to find some new form of inspiration.  While traveling or searching, it is important to be wary of hazards.   Avoid pretension or putting on airs.  Adaptation, caution, respect, and discretion are key.  Traveling prevents stagnation, but it limits your impact on the world.  Good strength is required for good travel, as is an understadning of the difference between running away from something versus seeking something.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/56.php");
		} else if (triName2 == "Mountain") {
			hexIcon.innerHTML = "&#x4DF3;";
			hexNumber.innerHTML = "52. ";
			hexName.innerHTML = "GEN (KEN)";
			keyWords.innerHTML = "Keeping still, resting, inner peace, resting, meditation"; 
			description.innerHTML = "This might be a time for wathdrawing from the rat race and cultivating inner peace and tranquility.  This sort of meditative state is not easy to achieve.  It requires gerat persistence and self-discipline.  True mediation is dependant upon both inner and outer stillness, which can be a monumental feat to accomplish.  This can only be reached through the patient and persistent quieting of anxieties and internal chatter.  Increased serenity leads to an increased ability to see the world as it actually is.  This may not be the ultimate goal, but it may be what is required to thrive through some of life's more difficult challenges.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/52.php");
		} else if (triName2 == "Lake") {
			hexIcon.innerHTML = "&#x4DDE;";
			hexNumber.innerHTML = "31. ";
			hexName.innerHTML = "XIAN (HSIEN)";
			keyWords.innerHTML = "Conjoining, influence, courtship, attraction, sensitivity, support"; 
			description.innerHTML = "Mutual attraction comes from recognizing both similarities and comlimentary qualities.  Lasting relationships are only possible when both parties are treated fairly and respectfully by each other.  Tenderness, loyalty, respect, and a healthy independence are key.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/31.php");
		}
	} else if (triName1 == "Lake") {
		if (triName2 == "Heaven") {
			hexIcon.innerHTML = "&#x4DC9;";
			hexNumber.innerHTML = "10. ";
			hexName.innerHTML = "LU";
			keyWords.innerHTML = "Following a path, treading carefully"; 
			description.innerHTML = "The path ahead may be unfamiliar and fraught with danger, but careful planning and sensible precuations can help to defend against harm.  If there is no immediate danger, it may be wise to consider what possible dangers lurk up ahead.  Decorum, diplomacy, and good humor are key.  With enough care, cuation, and tact, one might tread on a tiger's tail without fear of reprisal, while an overly aggressive person practically invites a tiger's bite.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/10.php");
		} else if (triName2 == "Earth") {
			hexIcon.innerHTML = "&#x4DD2;";
			hexNumber.innerHTML = "19. ";
			hexName.innerHTML = "LIN";
			keyWords.innerHTML = "Nearing, approach, expansion"; 
			description.innerHTML = "This might be just the right time to recieve vital instructions.  Look for good examples.  Maintain a willingness to learn and you should have a better shot at flourishing.  Be wary of small errors that might grow with your current expansion and advancement.  Avoid self-importance and a lack of discipline.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/19.php");
		} else if (triName2 == "Thunder") {
			hexIcon.innerHTML = "&#x4DF5;";
			hexNumber.innerHTML = "54. ";
			hexName.innerHTML = "GUI MEI (KEUI MEI)";
			keyWords.innerHTML = "The marrying maiden, inexperience, impoetiousness, perspective"; 
			description.innerHTML = "Be cautious about entering into any union impulsively.  The realities may not live up to expectations and could ultimately end up being a source of great discomfort and discord.  In this situation, mistakes must be acknowledged and carefuly dealt with.  Patience, timing, and thoughtfulness are key.  Rushing to escape may make things worse.  It is unlikely that anything good will come from compounding one impetuous mistake with another.  Be wary of whims of fancy and detrimental influences.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/54.php");
		} else if (triName2 == "Wind") {
			hexIcon.innerHTML = "&#x4DFC;";
			hexNumber.innerHTML = "61. ";
			hexName.innerHTML = "ZHONG FU (CHUNG FU)";
			keyWords.innerHTML = "Inner truth, sincerity, compassion, transformation, willingness to grow, spiritual development, center returning"; 
			description.innerHTML = "The wind can't be seen directly, but it's effects are evident.  Leaves rustling across an autumn playground.  Rippling little wavelets surfing across the surface of a moonlit pond.  The spiritual side of things is like this.  It can't be percieved directly, but it's effects can be seen in that actions of those who've been affected by it's touch.  Now is the time for a good devotion to becomming more receptive to universal compassion and the spiritual truths that transcend individual and cultural differences.  Force and intimidiation inspire far less than gentleness and understanding.  Be wary of self-interest and whims of the ego.  This is a good time for endeavors that are for the good of the community.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/61.php");
		} else if (triName2 == "Water") {
			hexIcon.innerHTML = "&#x4DFB;";
			hexNumber.innerHTML = "60. ";
			hexName.innerHTML = "JIE (CHIEH)";
			keyWords.innerHTML = "Limitation, moderation, equilibrium"; 
			description.innerHTML = "Now is the time for moderation and sensible limits.  Knowledge of our limitations helps prevent the dangers of overindulgance.  Balance is key.  Don't get carried away with moderation and become a myser or an ascetic.  Even limitaitons have their limitation.  As usual, the middle way is best.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/60.php");
		} else if (triName2 == "Fire") {
			hexIcon.innerHTML = "&#x4DE5;";
			hexNumber.innerHTML = "38. ";
			hexName.innerHTML = "KUI";
			keyWords.innerHTML = "Opposition, disharmony, polarization, incompatibility, inner conflict"; 
			description.innerHTML = "Try to reconcile opposing forces.  Seek harmony through diversity.  Time and place are key.  So is reflection.  Be wary of fear, misunderstandings and resistance to change.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/38.php");
		} else if (triName2 == "Mountain") {
			hexIcon.innerHTML = "&#x4DE8;";
			hexNumber.innerHTML = "41. ";
			hexName.innerHTML = "SUN";
			keyWords.innerHTML = "Decrease, diminishing, restraint, letting go of what is unnecessary"; 
			description.innerHTML = "When the lowly decerases to the benefit of the upper, stability is more fragile than when this flow is reversed.  A two story house with a weak ground floor is in danger of collapse, as is a nation where the leaders get richer and the building blocks of that society, the lower classes, grow in their struggles.<br>This is a time to gauard against impatience, resentment and anger.  Govern your emotions and self-indulgences.  Self-restraint and a sense of perspective are key.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/41.php");
		} else if (triName2 == "Lake") {
			hexIcon.innerHTML = "&#x4DF9;";
			hexNumber.innerHTML = "58. ";
			hexName.innerHTML = "DUI";
			keyWords.innerHTML = "The joyous, pleasure, openess, banishment of anxiety"; 
			description.innerHTML = "Enhance joy, knowledge, and wisdom by spreading them throughout the community.  A harvest is a time for celebration.  Enjoy it, but don't let the party get out of hand.  Be wary of gossip and other quarrelsome talk.  Goodwill, good humor, and wisdom are key. Share the fruits of your endeavors, and emprace with pleasure all ofyour undertakings.";
			hexAnchor.setAttribute("href", "http://ichingfortune.com/hexagrams/58.php");
		}
	}
};


document.getElementById("closeHexInfo").onclick = function() {
	hexInfo.style.display = "none";
	hexInfoWrap.style.display = "none";
	
	document.getElementById("readButton").disabled = true;
	document.getElementById("againButton").disabled = false;
};



document.getElementById("againButton").onclick = function() {
	for (var cc = 0; cc < coinWrap.length; cc++) {
		coinWrap[cc].style.webkitAnimation = "none";
		coinWrap[cc].style.animation = "none";
	}
	
	for (var x = 0; x < 6; x++) {
		hex.pop();
		lineTotal.pop();
	}
	
	for (var xx = 0; xx < 3; xx++) {
		tri1.pop();
		tri2.pop();
	}
	
	var hexNode = document.getElementById("hex");
	while (hexNode.firstChild) {
		hexNode.removeChild(hexNode.firstChild);
	}
	
	var ranBackAgain1 = Math.floor(Math.random() * backgrounds1.length);
	var ranBackAgain2 = Math.floor(Math.random() * backgrounds1.length);
	var ranBackAgain3 = Math.floor(Math.random() * backgrounds1.length);
	set("coinHexWrap", backgrounds1[ranBackAgain1], "block", "100% 100%", "no-repeat");
	set("hexInfo", backgrounds2[ranBackAgain2], "none", "contain", "no-repeat");
	set("coinButton", backgrounds3[ranBackAgain1], "block", "100% auto", "no-repeat");
	set("hexButton", backgrounds3[ranBackAgain2], "block", "100% auto", "no-repeat");
	set("readButton", backgrounds3[ranBackAgain3], "block", "100% auto", "no-repeat");
	set("againButton", backgrounds3[ranBackAgain1], "block", "100% auto", "no-repeat");
	
	document.getElementById("coinButton").disabled = false;
	document.getElementById("againButton").disabled = true;
};
