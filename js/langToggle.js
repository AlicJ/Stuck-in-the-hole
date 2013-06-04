//language
var english = true;
var french = false;
//English words----------------------------------------------------------
var en_newgame = '<span class="bigger">P</span>lay';
var en_setting = '<span class="bigger">S</span>ettings';
var en_help = '<span class="bigger">I</span>nstructions';
var en_highscore = '<span class="bigger">H</span>igh score';
var en_credit = '<span class="bigger">C</span>redit';
var en_exit = '<span class="bigger">E</span>xit';
var en_musicOn = 'Music On';
var en_musicOff = 'Music Off';
var en_soundOn = 'Sound FX On';
var en_soundOff = 'sound FX Off';
var en_backscrollOn = 'background scrolling on';
var en_backscrollOff = 'background scrolling off';
var en_helpText = '<p>You are a gallant space explorer who wishes to find and name a new planet.</p>\
				<p>One day, when you are woken up by siren, your AI tells you that the space ship encounters a meteoric stream.</p>\
				<p>You have to destory all the incoming asteroids to survive!</p>\
				<p>Use the number pad on the right hand side to solve questions brought by asteroid and destory them!</p>';
var en_slot = 'slot';
var en_delete = 'delete';
var en_inputName = 'Please enter your name:';
var en_launch = 'launch!';
var en_levelComplete = 'level complete!';
var en_continue = 'continue';
var en_rest = 'take a rest';
var en_lives = 'lives';
var en_score = 'score';
var en_level = 'level';
var en_shop = 'shop';
var en_bomb = 'bomb';
var en_shield = 'shield';
var en_life = 'life';
var en_freeze = 'freeze';
var en_mainConfirm = '<h3>Are you sure you want to go back to mainmenu?</h3><h3>All unsaved data will be lost.</h3>';
var en_yes = 'Yes';
var en_no = 'No';
var en_clear = 'clear';
var en_submit = 'submit';
var en_pause = 'pause';
var en_mainMenu = 'main menu';

var en_restart = 'Please restart to use this slot';
var en_destroyed = 'Our ship is destroyed!';
var en_retreate = 'Retreat';
var en_survive = 'We survived the asteriod field!';
var en_celeb = 'Celebrate!';

//French words----------------------------------------------------------
var fr_newgame = '<span class="bigger">J</span>ouer';
var fr_setting = '<span class="bigger">D</span>ésignations';
var fr_help = '<span class="bigger">I</span>nstructions';
var fr_highscore = '<span class="bigger">P</span>lacementes';
var fr_credit = '<span class="bigger">C</span>rédit';
var fr_exit = '<span class="bigger">S</span>ortir';
var fr_musicOn = 'allumer musique';
var fr_musicOff = 'éteindre musique';
var fr_soundOn = 'les sons oui';
var fr_soundOff = 'les sons non';
var fr_backscrollOn = 'movement the scéne oui';
var fr_backscrollOff = 'movement the scéne non';
var fr_helpText = '<p>Vous êtes un explorateur de l\'espace galant qui souhaite trouver et nommer une nouvelle planète.</p>\
				<p>Un jour, quand vous êtes réveillé par une sirène, votre AI indique que le vaisseau spatial se heurte à un flux météorique.</p>\
				<p>Vous devez destory tous les astéroïdes entrants pour survivre!</p>\
				<p>Utilisez le pavé numérique sur le côté droit pour résoudre les questions soulevées par les astéroïdes et destory eux!</p>';
var fr_slot = 'fente';
var fr_delete = 'effacer';
var fr_inputName = 'Entrez votre nom';
var fr_launch = 'Lancer';
var fr_levelComplete = 'niveau complet';
var fr_continue = 'continuer';
var fr_rest = 'reste';
var fr_lives = 'vies';
var fr_score = 'score';
var fr_level = 'niveau';
var fr_shop = 'Magasin';
var fr_bomb = 'bombe';
var fr_shield = 'bouclier';
var fr_life = 'vie';
var fr_freeze = 'geler';
var fr_mainConfirm = 'Est-que tu es sure tu veux retourner au menu principal?';
var fr_yes = 'oui';
var fr_no = 'non';
var fr_clear = 'effacer';
var fr_submit = 'soumettre';
var fr_pause = 'pause';
var fr_mainMenu = 'menu principal';

var en_restart = 'S\'il vous plaît redémarrer pour utiliser cet emplacement';
var en_destroyed = 'Notre vaisseau est détruit!';
var en_retreate = 'reculer';
var en_survive = 'Nous avons survécu le domaine d\'astéroïdes!';
var en_celeb = 'Célébrer!';


//functions----------------------------------------------------------

function texthtml(div,content){
    $(div).html(content);
}
function textrepl(div,content){
    $(div).html(content);
}

function fr_toggle(){
    texthtml('#menu .newgame p', fr_newgame);
	texthtml('#menu .setting1 p', fr_setting);
	texthtml('#menu .help1 p', fr_help);
	texthtml('#menu .highscore p', fr_highscore);
	texthtml('#menu .credit p', fr_credit);
	texthtml('#menu .exit p', fr_exit);
	texthtml('#setting1 h2', fr_setting);
	textrepl('#setting1 .music', fr_musicOff);
	textrepl('#setting1 .sound', fr_soundOff);
	textrepl('#setting1 .bg', fr_backscrollOff);
	texthtml('#help1 h2', fr_help);
	texthtml('#help1 .helpText', fr_helpText);
	texthtml('#highscore h2', fr_highscore);
	$('#credit').css('background-image', 'url(images/fr_credit.gif)');
	for (var i = 1; i <= 5; i ++){
		textrepl('#save .save' + i, fr_slot + i);
		textrepl('#save .delete' + i, fr_delete);
	}
	textrepl('#namefield h3', fr_inputName);
	textrepl('#namefield .launch', fr_launch);
	textrepl('#levelComplete h3', fr_levelComplete);
	textrepl('#levelComplete .nextLevel', fr_continue);
	textrepl('#leftPanel #lives .text', fr_lives + ':');
	textrepl('#leftPanel #score .text', fr_score + ':');
	textrepl('#rightPanel .text', fr_level + ':');
	textrepl('#shop .items .bomb', fr_bomb);
	textrepl('#shop .items .shield', fr_shield);
	textrepl('#shop .items .life', fr_life);
	textrepl('#shop .items .freeze', fr_freeze);
	texthtml('#setting2 h2', fr_setting);
	textrepl('#setting2 .music', fr_musicOn);
	textrepl('#setting2 .sound', fr_soundOn);
	textrepl('#setting2 .bg', fr_backscrollOn);
	texthtml('#help2 h2', fr_help);
	texthtml('#help2 .helpText', fr_helpText);
	texthtml('#mainmenu .confirm', fr_mainConfirm);
	textrepl('#mainmenu .backMain', fr_yes);
	textrepl('#mainmenu .no', fr_no);
	textrepl('#ui #nonPause #input #clear', fr_clear);
	textrepl('#ui #nonPause #input #submit', fr_submit);
	textrepl('#buttons .pause', fr_pause);
	textrepl('#buttons .numBomb .text', fr_bomb + ':');
	textrepl('#buttons .numShield .text', fr_shield + ':');
	textrepl('#buttons .numFreeze .text', fr_freeze + ':');
	textrepl('#pauseScreen .shop', fr_shop);
	textrepl('#pauseScreen .setting2', fr_setting);
	textrepl('#pauseScreen .help2', fr_help);
	textrepl('#pauseScreen .mainmenu', fr_mainMenu);
	textrepl('#levelComplete .backMain', fr_rest);
	
	if (music) textrepl('#setting1 .music', fr_musicOn);
	if (sound) textrepl('#setting1 .sound', fr_soundOn);
	if (bgscrolling) textrepl('#setting1 .bg', fr_backscrollOn);
}

function en_toggle(){
	texthtml('#menu .newgame p', en_newgame);
	texthtml('#menu .setting1 p', en_setting);
	texthtml('#menu .help1 p', en_help);
	texthtml('#menu .highscore p', en_highscore);
	texthtml('#menu .credit p', en_credit);
	texthtml('#menu .exit p', en_exit);
	texthtml('#setting1 h2', en_setting);
	textrepl('#setting1 .music', en_musicOff);
	textrepl('#setting1 .sound', en_soundOff);
	textrepl('#setting1 .bg', en_backscrollOff);
	texthtml('#help1 h2', en_help);
	texthtml('#help1 .helpText', en_helpText);
	texthtml('#highscore h2', en_highscore);
	$('#credit').css('background-image', 'url(images/en_credit.gif)');
	for (var i = 1; i <= 5; i ++){
		textrepl('#save .save' + i, en_slot + i);
		textrepl('#save .delete' + i, en_delete);
	}
	textrepl('#namefield h3', en_inputName);
	textrepl('#namefield .launch', en_launch);
	textrepl('#levelComplete h3', en_levelComplete);
	textrepl('#levelComplete .nextLevel', en_continue);
	textrepl('#leftPanel #lives .text', en_lives + ':');
	textrepl('#leftPanel #score .text', en_score + ':');
	textrepl('#rightPanel .text', en_level + ':');
	textrepl('#shop .items .bomb', en_bomb);
	textrepl('#shop .items .shield', en_shield);
	textrepl('#shop .items .life', en_life);
	textrepl('#shop .items .freeze', en_freeze);
	texthtml('#setting2 h2', en_setting);
	textrepl('#setting2 .music', en_musicOn);
	textrepl('#setting2 .sound', en_soundOn);
	textrepl('#setting2 .bg', en_backscrollOn);
	texthtml('#help2 h2', en_help);
	texthtml('#help2 .helpText', en_helpText);
	texthtml('#mainmenu .confirm', en_mainConfirm);
	textrepl('#mainmenu .backMain', en_yes);
	textrepl('#mainmenu .no', en_no);
	textrepl('#ui #nonPause #input #clear', en_clear);
	textrepl('#ui #nonPause #input #submit', en_submit);
	textrepl('#buttons .pause', en_pause);
	textrepl('#buttons .numBomb .text', en_bomb + ':');
	textrepl('#buttons .numShield .text', en_shield + ':');
	textrepl('#buttons .numFreeze .text', en_freeze + ':');
	textrepl('#pauseScreen .shop', en_shop);
	textrepl('#pauseScreen .setting2', en_setting);
	textrepl('#pauseScreen .help2', en_help);
	textrepl('#pauseScreen .mainmenu', en_mainMenu);
	textrepl('#levelComplete .backMain', en_rest);
	
	if (music) textrepl('#setting1 .music', en_musicOn);
	if (sound) textrepl('#setting1 .sound', en_soundOn);
	if (bgscrolling) textrepl('#setting1 .bg', en_backscrollOn);
}

