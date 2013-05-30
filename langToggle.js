function texthtml(div,content){
    $(div).html(content);
}
function textreplace(div,content){
$(div).html(content);
}

function french(){
var newgame = '<p><span class="bigger">J</span>ouer</p>';
var setting = '<p><span class="bigger">D</span>ésignations</p>';
var help = '<p><span class="bigger">I</span>nstructions</p>';
var highscore = '<p><span class="bigger">P</span>lacementes</p>';
var credit = '<p><span class="bigger">C</span>rédit</p>';
var exit = '<p><span class="bigger">S</span>ortir</p>';
var musicOn = 'musique oui';
var musicOff = 'musique non';
var soundOn = 'les sons oui';
var soundOff = 'les sons non';
var backscorllOn = 'movement the scéne oui';
var backscorllOff = 'movement the scéne non';
var helpText = '';
var slot = 'fente';
var deleteL = 'effacer';
var inputName = '';
var launch = '';
var levelComplete = '';
var continueL = '';
var rest = '';
var lives = 'vies';
var score = '';
var level = 'niveau';
var shop = 'Magasin';
var bomb = 'bombe';
var shield = 'bouclier';
var life = 'vie';
var freeze = 'geler';
var mainConfirm = '';
var yes = '';
var no = '';
var clear = '';
var submit = '';
var pause = '';
var mainMenu = '';

}

function english(){
var newgame = '<p><span class="bigger">p</span>lay</p>';
var setting = '<p><span class="bigger">s</span>ettings</p>';
var help = '<p><span class="bigger">I</span>nstructions</p>';
var highscore = '<p><span class="bigger">H</span>igh score</p>';
var credit = '<p><span class="bigger">C</span>redit</p>';
var exit = '<p><span class="bigger">E</span>xit</p>';
var musicOn = 'Music On';
var musicOff = 'Music Off';
var soundOn = 'Sound On';
var soundOff = 'sound off';
var backscorllOn = 'background scrolling on';
var backscorllOff = 'background scrolling off';
var helpText = '<p>You are a gallant space explorer who wishes to find and name a new planet.</p><p>One day, when you are woken up by siren, your AI tells you that the space ship encounters a meteoric stream.</p><p>You have to destory all the incoming asteroids to survive!</p><p>Use the number pad on the right hand side to solve questions brought by asteroid and destory them!</p>';
var slot = 'slot';
var deleteL = 'delete';
var inputName = 'input name';
var launch = 'launch!';
var levelComplete = 'level complete!';
var continueL = 'continue';
var rest = 'take a rest';
var lives = 'lives';
var score = 'score';
var level = 'level';
var shop = 'shop';
var bomb = 'bomb';
var shield = 'shield';
var life = 'life';
var freeze = 'freeze';
var mainConfirm = 'return to main menu?';
var yes = 'yes';
var no = 'no';
var clear = 'clear';
var submit = 'submit';
var pause = 'pause';
var mainMenu = 'main menu';

}

texthtml('#menu .newgame ','<p><span class="bigger">P</span>df</p>')