var photos=["https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/88175503_2463700723882908_6368965522444255232_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFwbt2baOLNj3kQhD4DOto3x-7VgxB9I6TH7tWDEH0jpBYO58ey_iOhCwZfy2PCOtQIXMuAZA_oWgU--Sv-6GnT&_nc_ohc=l2q0EiDFlvgAX-2Wi1G&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDae6usCi3jb3sTXOuKXGQ00IXX2TFLrl8uLvT5tHPzHw&oe=65077A85","https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/88357305_2463700707216243_911443329235812352_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHM0d5AWbcQYMLjqvgQ08bCQYChRW8hVzZBgKFFbyFXNsx7R8FBnuZUYpikWhSfm_iLqJOfZj3ZXKmC9X6-5Fee&_nc_ohc=znACLUMwuFEAX-ko1zZ&_nc_ht=scontent.fdel29-1.fna&oh=00_AfCJ67C-mf08n_W2yBwG1rUVZc-2AvVzHKSkmfpjDCCTuQ&oe=65076E5C","https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/88434822_2462596013993379_5971950595416784896_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeGY-BLrvXWjrIDKyb2OVeoI5O6Xo4Ng6iPk7pejg2DqI5oErQTW7NPrC2UFEPrnsJyvsvZbS56EWurffieGQAjh&_nc_ohc=jElxHeFCt1cAX9YBsod&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDMrtVffHN4t4gAVAqkFw0ib55OYd4g5CDzv-u2vGoVqA&oe=6507754B"]

var imgTag= document.querySelector("img");
var count=0;
function next(){
count++;
if(count>=photos.length){
    count=0;
    imgTag.src=photos[count];
}
else{
    imgTag.src=photos[count];
}
}
 function prev(){
    count--;
    if(count<0){
        count=photos.length-1   ;
        imgTag.src=photos[count];
    }
    else{
        imgTag.src=photos[count];
    }
 }