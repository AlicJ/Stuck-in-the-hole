function texthtml(div,content){
    $(div).html(content);
}
function textreplace(div,content){
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
var fr_backscorllOn = 'movement the scéne oui';
var fr_backscorllOff = 'movement the scéne non';
var fr_helpText = '';
var fr_slot = 'fente';
var fr_delete = 'effacer';
var fr_inputName = '';
var fr_launch = '';
var fr_levelComplete = '';
var fr_continue = '';
var fr_rest = '';
var fr_lives = 'vies';
var fr_score = '';
var fr_level = 'niveau';
var fr_shop = 'Magasin';
var fr_bomb = 'bombe';
var fr_shield = 'bouclier';
var fr_life = 'vie';
var fr_freeze = 'geler';
var fr_mainConfirm = '';
var fr_yes = '';
var fr_no = '';
var fr_clear = '';
var fr_submit = '';
var fr_pause = '';
var fr_mainMenu = '';

}

function english(){
var en_newgame = '<p><span class="bigger">p</span>lay</p>';
var en_setting = '<p><span class="bigger">s</span>ettings</p>';
var en_help = '<p><span class="bigger">I</span>nstructions</p>';
var en_highscore = '<p><span class="bigger">H</span>igh score</p>';
var en_credit = '<p><span class="bigger">C</span>redit</p>';
var en_exit = '<p><span class="bigger">E</span>xit</p>';
var en_musicOn = 'Music On';
var en_musicOff = 'Music Off';
var en_soundOn = 'Sound On';
var en_soundOff = 'sound off';
var en_backscorllOn = 'background scrolling on';
var en_backscorllOff = 'background scrolling off';
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

}

texthtml('#menu .newgame ','<p><span class="bigger">P</span>df</p>')