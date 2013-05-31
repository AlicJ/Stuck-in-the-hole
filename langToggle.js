function texthtml(div,content){
    $(div).html(content);
}
function textrepl(div,content){
    $(div).html(content);
}

function french(){
var fr_newgame = '<p><span class="bigger">J</span>ouer</p>';
var fr_setting = '<p><span class="bigger">D</span>ésignations</p>';
var fr_help = '<p><span class="bigger">I</span>nstructions</p>';
var fr_highscore = '<p><span class="bigger">P</span>lacementes</p>';
var fr_credit = '<p><span class="bigger">C</span>rédit</p>';
var fr_exit = '<p><span class="bigger">S</span>ortir</p>';
var fr_musicOn = 'musique oui';
var fr_musicOff = 'musique non';
var fr_soundOn = 'les sons oui';
var fr_soundOff = 'les sons non';
var en_backscrollOn = 'movement the scéne oui';
var fr_backscrollOff = 'movement the scéne non';
var fr_helpText = '';
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
var fr_mainConfirm = '';
var fr_yes = 'oui';
var fr_no = 'non';
var fr_clear = 'effacer';
var fr_submit = 'soumettre';
var fr_pause = 'pause';
var fr_mainMenu = 'menu principal';

}

function english(){
var en_newgame = '<span class="bigger">P</span>lay';
var en_setting = '<span class="bigger">S</span>ettings';
var en_help = '<span class="bigger">I</span>nstructions';
var en_highscore = '<span class="bigger">H</span>igh score';
var en_credit = '<span class="bigger">C</span>redit';
var en_exit = '<span class="bigger">E</span>xit';
var en_musicOn = 'Music On';
var en_musicOff = 'Music Off';
var en_soundOn = 'Sound On';
var en_soundOff = 'sound off';
var en_backscrollOn = 'background scrolling on';
var en_backscrollOFF = 'background scrolling off';
var en_helpText = '<p>You are a gallant space explorer who wishes to find and name a new planet.</p><p>One day, when you are woken up by siren, your AI tells you that the space ship encounters a meteoric stream.</p><p>You have to destory all the incoming asteroids to survive!</p><p>Use the number pad on the right hand side to solve questions brought by asteroid and destory them!</p>';
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
var en_yes = '<span class="backMain">Yes</span>';
var en_no = '<span class="no">No</span>';
var en_clear = 'clear';
var en_submit = 'submit';
var en_pause = 'pause';
var en_mainMenu = 'main menu';

texthtml('#menu .newgame p', en_newgame);
texthtml('#menu .setting1 p', en_setting);
texthtml('#menu .help1 p', en_help);
texthtml('#menu .highscore p', en_highscore);
texthtml('#menu .credit p', en_credit);
texthtml('#menu .exit p', en_exit);
texthtml('#setting1 h2', en_setting);
textrepl('#setting1 .music', en_musicOn);
textrepl('#setting1 .sound', en_soundOn);
textrepl('#setting1 .bg', en_backscrollOn);
texthtml('#help1 h2', en_help);
texthtml('#help1 .helpText', en_helpText);
texthtml('#highscore h2', en_highscore);
$('#credit').css('background-image', 'url(images/en_credit.gif)');
for (var i = 1; i <= 5; i ++){
    textrepl('#save .save' + i, en_slot + i);
    textrepl('#save .delete' + i, en_delete);
}

}
english();