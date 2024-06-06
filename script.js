let header = document.getElementById('header');

function locatio() {
  // Tab to edit
  window.location.href="https://maps.app.goo.gl/kGTWxsxZ2kgF2sNd9?g_st=ac"
}

function showmenu() {
  // Tab to edit
  document.getElementById('menush').style.display="block"
  navigator.vibrate(50)
}

function exitsh() {
  // Tab to edit
document.getElementById('menush').style.display="none"
  
  navigator.vibrate(50)
  

}

function whatsapphr() {
  // Tab to edit

  window.location.href="https://wa.me/+201270144885"
}

function instag() {
  // Tab to edit
  window.location.href="https://www.instagram.com/mina.shehata1?igsh=c3lkNmJzYmg5YWti"
}

function facehr() {
  // Tab to edit
  window.location.href="https://www.facebook.com/profile.php?id=100081772560341&mibextid=ZbWKwL"
}




// عند الضغط على الزر، يتم التمرير إلى أعلى الوثيقة
document.getElementById("scrollToTopBtn").onclick = function() {
  document.body.scrollTop = 0; // لـ Safari
  document.documentElement.scrollTop = 0; // لـ Chrome, Firefox, IE و Opera
  document.getElementById('menush').style.display="none"
};




document.getElementById("scrollTobottomBtn").onclick = function() {
  document.body.scrollTop = 0; // لـ Safari
  document.documentElement.scrollTop = 1200; // لـ Chrome, Firefox, IE و Opera
  
  document.getElementById('menush').style.display="none"
};
