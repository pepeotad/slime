var total_images = 7;
var random_number = Math.floor((Math.random()*total_images));
var random_img = new Array();
random_img[0] = '<a href="http://slime.nz"><img width="400" height="100" src="http://i.imgur.com/RtPsUeF.gif"></a>';
random_img[1] = '<a href="http://slime.nz"><img width="400" height="100" src="http://i.imgur.com/00kmXXS.png"></a>';
random_img[2] = '<a href="http://slime.nz"><img width="400" height="100" src="http://i.imgur.com/m0EyHL8.png"></a>';
random_img[3] = '<a href="http://slime.nz"><img width="400" height="100" src="http://i.imgur.com/ZXrXR6I.png"></a>';
random_img[4] = '<a href="http://slime.nz"><img width="400" height="100" src="http://i.imgur.com/d2818Xg.png"></a>';
random_img[5] = '<a href="http://slime.nz"><img width="400" height="100" src="http://i.imgur.com/yvEGYzp.png"></a>';
random_img[6] = '<a href="http://slime.nz"><img width="400" height="100" src="http://i.imgur.com/POxLu9y.png"></a>';
document.write(random_img[random_number]);
