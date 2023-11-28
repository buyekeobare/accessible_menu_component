/**
 * Keyboard users:
 * Toggle visibility with Javascript
 * Focus management with Javascript
 * Escape key management with Javascript
 * Keyboard navigation with javascript
 */

function app() {

        // get the menu trigger
        // get the menu
        // get all menu items

        const menuTrigger = document.querySelector('#profile-menu');
        const menu = document.querySelector('#profile-menu-content');
        const allMenuItems = menu.querySelectorAll('[role="menuitem"]');


        function closeMenu() {

          menuTrigger.ariaExpanded = "false";
          
          menuTrigger.focus();

        }

        function handleMenuEscapeKeyPress(event) {

          // if user press escape key 


          if (event.key === "Escape") {

            // close menu
            toggleMenu();
          }
        
        }

        function handleMenuItemArrowKeyPress(event, menuItemIndex){

          // create some helpful variables: isLastMenuItem, isFirstMenuItem

          const isLastMenuItem = menuItemIndex === allMenuItems.length - 1;
          const isFirstMenuItem = menuItemIndex === 0;

          const nextMenuItem = allMenuItems.item(menuItemIndex + 1)
          const previousMenuItem = allMenuItems.item(menuItemIndex - 1)
          // if the user pressed arrow right or arrow down
          if (event.key === 'ArrowRight' || 
              event.key === 'ArrowDown') {

          // if the user is on last item, focus on first menu item
          if (isLastMenuItem) {
            allMenuItems.item(0).focus()

            return;
          }
          
          // then focus on next menu item
          nextMenuItem.focus();
          }

          // if the user pressed arrow up or arrow left
          if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {

            // if the user is on the first item, focus on last menu item
            if(isFirstMenuItem) {
              allMenuItems.item(allMenuItems.length - 1).focus();

              return;
            }

            // then focus on the previous menu item
            previousMenuItem.focus();

          }
          
          
        }

        function openMenu() {

          menuTrigger.ariaExpanded = "true";

          

          // get the first item in the menu
          // focus that item
          allMenuItems.item(0).focus()

          
          menu.addEventListener('keyup', handleMenuEscapeKeyPress)


          // for each menu item, register an event listener for the keyup event
          allMenuItems.forEach(function(menuItem, menuItemIndex) {

            menuItem.addEventListener('keyup', (event) => {
              handleMenuItemArrowKeyPress(event, menuItemIndex)
            });

          })

        }


        function toggleMenu() {
          
          const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";

          // when the menu trigger is clicked
          // add the menu-active class to the menu 
          menu.classList.toggle("menu-active")

           if (isExpanded) {
            
            closeMenu();

          } else {
             
            openMenu();
          }
        }

        // add a click event listener to the menu trigger
        menuTrigger.addEventListener('click', toggleMenu);
  
  }

  app();


