document.addEventListener('DOMContentLoaded', () => {
    // Custom Scripts
    let navBtnEl = document.querySelector('.nav-btn-toggler');
    let navBtnIconEl = document.querySelector('.nav-toggler-icon');
    let navMenuEl = document.querySelector('.nav-menu');
    let navLinkEl = document.querySelectorAll('.nav-link');
    let navDropdownLinkEl = document.querySelectorAll('.dropdown-item');
    
    /* This is the code that is executed when the navBtnEl is clicked. It toggles the navMenuEl class to
    nav-menu-sm. If the navMenuEl class contains nav-menu-sm, then the navBtnIconEl innerHTML is set to
    close. Otherwise, the navBtnIconEl innerHTML is set to menu. */
    navBtnEl.addEventListener('click', () => {
        navMenuEl.classList.toggle('nav-menu-sm');
    
        if (navMenuEl.classList.contains('nav-menu-sm')) {
            navBtnIconEl.innerHTML = "close";
        } else {
            navBtnIconEl.innerHTML = "menu";
        }
    });
    
    /* Adding an event listener to each navLinkEl. When the navLinkEl is clicked, the navMenuEl class is
    removed. If the navMenuEl class contains nav-menu-sm, then the navBtnIconEl innerHTML is set to
    close. Otherwise, the navBtnIconEl innerHTML is set to menu. */
    navLinkEl.forEach((element) => {
        element.addEventListener('click', () => {
            navMenuEl.classList.remove('nav-menu-sm');
        
            if (navMenuEl.classList.contains('nav-menu-sm')) {
                navBtnIconEl.innerHTML = "close";
            } else {
                navBtnIconEl.innerHTML = "menu";
            }
        });
    });

    navDropdownLinkEl.forEach((element) => {
        element.addEventListener('click', () => {
            navMenuEl.classList.remove('nav-menu-sm');
        
            if (navMenuEl.classList.contains('nav-menu-sm')) {
                navBtnIconEl.innerHTML = "close";
            } else {
                navBtnIconEl.innerHTML = "menu";
            }
        });
    });
    
    // Every time a modal is shown, if it has an autofocus element, focus on it.
    $('.modal').on('shown.bs.modal', function() {
        $(this).find('[autofocus]').focus();
    });
    
    $('.offcanvas').on('shown.bs.offcanvas', function() {
        $(this).find('[autofocus]').focus();
    });
    
    // Clear the form values after closing the modal
    $('.modal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
    });
    
    $('.offcanvas').on('hidden.bs.offcanvas', function () {
        $(this).find('form').trigger('reset');
    });
});
