//Question Maker
var switcher=0;
//Keypad
var input = "";
//Highscore
var high = new Array();
var temp;
var high9 = new Object();
//Music Player
var playlist = [
    {
		mp3: 'music/01.mp3',
		ogg: 'music/01.ogg'
	},
    {
		mp3: 'music/02.mp3',
		ogg: 'music/02.ogg'
	},
    {
		mp3: 'music/03.mp3',
		ogg: 'music/03.ogg'
	},
    {
		mp3: 'music/04.mp3',
		ogg: 'music/04.ogg'
		},
    {
		mp3: 'music/05.mp3',
		ogg: 'music/05.ogg'
		},
    {
		mp3: 'music/06.mp3',
		ogg: 'music/06.ogg'
	},
    {
		mp3: 'music/07.mp3',
		ogg: 'music/07.ogg'
	},
    {
		mp3: 'music/08.mp3',
		ogg: 'music/08.ogg'
	},
    {
		mp3: 'music/09.mp3',
		ogg: 'music/09.ogg'
	},
    {
		mp3: 'music/10.mp3',
		ogg: 'music/10.ogg'
	},
    {
		mp3: 'music/11.mp3',
		ogg: 'music/11.ogg'
	},
    {
		mp3: 'music/12.mp3',
		ogg: 'music/12.ogg'
	},
    {
		mp3: 'music/13.mp3',
		ogg: 'music/13.ogg'
	},
    {
		mp3: 'music/14.mp3',
		ogg: 'music/14.ogg'
	},
    {
		mp3: 'music/15.mp3',
		ogg: 'music/15.ogg'
	},
    {
		mp3: 'music/16.mp3',
		ogg: 'music/16.ogg'
	},
    {
		mp3: 'music/17.mp3',
		ogg: 'music/17.ogg'
	},
    {
		mp3: 'music/18.mp3',
		ogg: 'music/18.ogg'
	},
    {
		mp3: 'music/19.mp3',
		ogg: 'music/19.ogg'
	},
];
var isPlaying,  currentTrack,
	currentTrack = 0,
	autoplay = true;
//Sound Effect
var asteriod = new Audio('music/asteriod.ogg');    	//destruction of an asteriod
var destoryed = new Audio('music/destoryed.ogg');	//destruction of the main ship
var beenhit = new Audio('music/beenhit.ogg');		//main ship been hit
//Save files
var creat = new Date();
var now = new Date();
//var newSave = new Array();
var getSave = new Array();
var saveLength = 5;
var selectSlot;
var slot = new Array();
var GG = 0;
//