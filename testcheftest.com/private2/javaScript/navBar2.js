let compare = "";
let count = 0;
document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
          var submenu = this.querySelector('.submenu');
          
          // Close all open submenus
          document.querySelectorAll('.menu-item').forEach(function (sub) {
              if (sub !== submenu) {
                  sub.classList.remove('open');
              }
          });

          if (submenu !== compare) {
            // Toggle the submenu
            this.classList.toggle('open');
            event.stopPropagation(); // prevent the click event from reaching the document
          }
          else{
            this.classList.remove('open');
            event.stopPropagation();
          }
          if(count == 0){
            compare = submenu;
            count++;
          }
          else{
            compare = "";
            count--;
          }
          
      });
  });

  var submenuItems = document.querySelectorAll('.submenu-item');
  submenuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        var submenu = this.querySelector('.subsubmenu');

        // Close all open submenus
        document.querySelectorAll('.submenu-item').forEach(function (sub) {
            if (sub !== submenu) {
                sub.classList.remove('open');
            }
        });

        if (submenu !== compare) {
            // Toggle the submenu
            this.classList.toggle('open');
            event.stopPropagation(); // prevent the click event from reaching the document
          }
          else{
            this.classList.remove('open');
            event.stopPropagation();
          }
          if(count == 0){
            compare = submenu;
            count++;
          }
          else{
            compare = "";
            count--;
          }
    });
});

  // Close submenus when clicking outside the menu
  document.addEventListener('click', function () {
      document.querySelectorAll('.subsubmenu').forEach(function (sub) {
          sub.classList.remove('open');
      });
  });
});
function openFilter(){
  let toShow =document.getElementById("selector");
  toShow.classList.toggle('open');
}


