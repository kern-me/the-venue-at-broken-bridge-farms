document.addEventListener('DOMContentLoaded', function () {
    animateShapes();
    replaceDarkCarouselArrows();
    replaceReelGalleryArrows()
    replaceVenueText();
    replaceSocialIcons();
});

function animateShapes() {
    var rectangleShapes = document.querySelectorAll('.sqs-shape-rectangle');
    rectangleShapes.forEach(function (rect) {
        rect.classList.add('fade-in-on-scroll');
    });

    // Helper to determine if an element is visible in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    }

    function handleScrollFadeIn() {
        rectangleShapes.forEach(function (rect) {
            if (
                rect.classList.contains('fade-in-on-scroll') &&
                !rect.classList.contains('fade-in-visible') &&
                isElementInViewport(rect)
            ) {
                // Add a delay before triggering the animation
                setTimeout(function () {
                    rect.classList.add('fade-in-visible');
                }, 300);
            }
        });
    }

    // Initial check
    handleScrollFadeIn();

    window.addEventListener('scroll', handleScrollFadeIn);
    window.addEventListener('resize', handleScrollFadeIn);
}

function replaceSocialIcons() {
    var iconFacebook = document.querySelector('[aria-label=Facebook] svg');
    var iconFacebookSVG = '<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.375 17.9999C36.3694 22.3686 34.7665 26.5845 31.8683 29.8535C28.97 33.1225 24.9765 35.2188 20.6399 35.7477C20.5433 35.7586 20.4455 35.749 20.353 35.7194C20.2604 35.6897 20.1752 35.6408 20.1029 35.5759C20.0307 35.5109 19.973 35.4314 19.9337 35.3425C19.8944 35.2536 19.8744 35.1574 19.875 35.0602V22.1249H24C24.1885 22.1253 24.3751 22.087 24.5482 22.0122C24.7212 21.9375 24.8771 21.828 25.006 21.6905C25.1349 21.553 25.2342 21.3905 25.2977 21.213C25.3612 21.0355 25.3875 20.8469 25.375 20.6588C25.3447 20.3052 25.1815 19.9763 24.9185 19.7381C24.6554 19.4999 24.3119 19.3701 23.9571 19.3749H19.875V15.2499C19.875 14.5206 20.1648 13.8211 20.6805 13.3054C21.1962 12.7896 21.8957 12.4999 22.625 12.4999H25.375C25.5635 12.5003 25.7501 12.462 25.9232 12.3872C26.0962 12.3125 26.2521 12.203 26.381 12.0655C26.5099 11.928 26.6092 11.7655 26.6727 11.588C26.7362 11.4105 26.7625 11.2219 26.75 11.0338C26.7196 10.6796 26.556 10.3502 26.2922 10.1119C26.0284 9.8736 25.6841 9.74424 25.3286 9.7499H22.625C21.1664 9.7499 19.7674 10.3294 18.736 11.3608C17.7045 12.3923 17.125 13.7912 17.125 15.2499V19.3749H13C12.8115 19.3745 12.625 19.4128 12.4519 19.4876C12.2789 19.5623 12.123 19.6718 11.9941 19.8093C11.8651 19.9468 11.7658 20.1093 11.7024 20.2868C11.6389 20.4643 11.6126 20.6529 11.625 20.841C11.6555 21.1952 11.8191 21.5246 12.0829 21.7629C12.3467 22.0012 12.691 22.1306 13.0465 22.1249H17.125V35.0636C17.1256 35.1607 17.1057 35.2567 17.0665 35.3455C17.0273 35.4342 16.9698 35.5137 16.8977 35.5786C16.8256 35.6435 16.7406 35.6925 16.6483 35.7222C16.5559 35.752 16.4583 35.7618 16.3619 35.7511C11.9092 35.2089 7.82242 33.0147 4.91036 29.6029C1.9983 26.1912 0.473251 21.8104 0.637075 17.3279C0.980825 8.04661 8.49864 0.501302 17.7868 0.140364C20.1914 0.0472183 22.5902 0.44003 24.8396 1.2953C27.089 2.15058 29.1427 3.45074 30.8781 5.11803C32.6134 6.78532 33.9946 8.78548 34.9391 10.9989C35.8836 13.2123 36.372 15.5934 36.375 17.9999Z" fill="#F7F5EA"/></svg>';

    var iconInstagram = document.querySelector('[aria-label=Instagram] svg');
    var iconInstagramSVG = '<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.75 0.125H10.25C7.69813 0.12773 5.25156 1.14267 3.44711 2.94711C1.64267 4.75156 0.62773 7.19813 0.625 9.75V26.25C0.62773 28.8019 1.64267 31.2484 3.44711 33.0529C5.25156 34.8573 7.69813 35.8723 10.25 35.875H26.75C29.3019 35.8723 31.7484 34.8573 33.5529 33.0529C35.3573 31.2484 36.3723 28.8019 36.375 26.25V9.75C36.3723 7.19813 35.3573 4.75156 33.5529 2.94711C31.7484 1.14267 29.3019 0.12773 26.75 0.125ZM18.5 26.25C16.8683 26.25 15.2733 25.7661 13.9165 24.8596C12.5598 23.9531 11.5024 22.6646 10.878 21.1571C10.2536 19.6496 10.0902 17.9908 10.4085 16.3905C10.7269 14.7902 11.5126 13.3202 12.6664 12.1664C13.8202 11.0126 15.2902 10.2269 16.8905 9.90852C18.4908 9.59019 20.1496 9.75357 21.6571 10.378C23.1646 11.0024 24.4531 12.0598 25.3596 13.4165C26.2661 14.7733 26.75 16.3683 26.75 18C26.7477 20.1873 25.8778 22.2844 24.3311 23.8311C22.7844 25.3778 20.6873 26.2477 18.5 26.25ZM28.8125 9.75C28.4046 9.75 28.0058 9.62904 27.6666 9.40241C27.3275 9.17578 27.0631 8.85366 26.907 8.47678C26.7509 8.09991 26.71 7.68521 26.7896 7.28513C26.8692 6.88504 27.0656 6.51754 27.3541 6.22909C27.6425 5.94065 28.01 5.74421 28.4101 5.66463C28.8102 5.58505 29.2249 5.62589 29.6018 5.782C29.9787 5.9381 30.3008 6.20246 30.5274 6.54164C30.754 6.88081 30.875 7.27958 30.875 7.6875C30.875 8.23451 30.6577 8.75911 30.2709 9.14591C29.8841 9.5327 29.3595 9.75 28.8125 9.75ZM24 18C24 19.0878 23.6774 20.1512 23.0731 21.0556C22.4687 21.9601 21.6098 22.6651 20.6048 23.0813C19.5998 23.4976 18.4939 23.6065 17.427 23.3943C16.3601 23.1821 15.3801 22.6583 14.6109 21.8891C13.8417 21.1199 13.3179 20.1399 13.1057 19.073C12.8935 18.0061 13.0024 16.9002 13.4187 15.8952C13.8349 14.8902 14.5399 14.0313 15.4444 13.4269C16.3488 12.8226 17.4122 12.5 18.5 12.5C19.9587 12.5 21.3576 13.0795 22.3891 14.1109C23.4205 15.1424 24 16.5413 24 18Z" fill="#F7F5EA"/></svg>';

    var iconPinterest = document.querySelector('[aria-label=Pinterest] svg');
    var iconPinterestSVG = '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.75 18.1202C35.6846 27.8294 27.7646 35.7769 18.0571 35.8731C16.5552 35.889 15.0573 35.7157 13.5987 35.3575C13.511 35.3356 13.4284 35.2966 13.3557 35.2428C13.2831 35.1889 13.2218 35.1212 13.1753 35.0436C13.1288 34.966 13.0981 34.88 13.085 34.7906C13.0718 34.7011 13.0764 34.6099 13.0985 34.5222L14.5835 28.5839C16.032 29.3098 17.6298 29.6877 19.25 29.6874C25.6093 29.6874 30.714 23.9381 30.2173 17.0786C30.0826 15.2982 29.5642 13.568 28.6977 12.0069C27.8312 10.4457 26.6371 9.09056 25.1975 8.03443C23.7578 6.97829 22.1067 6.2462 20.3574 5.88841C18.6081 5.53062 16.8021 5.5556 15.0634 5.96164C13.3247 6.36768 11.6944 7.14516 10.2845 8.24071C8.87463 9.33626 7.71851 10.7239 6.89553 12.3084C6.07254 13.893 5.60219 15.6368 5.51675 17.4203C5.43132 19.2037 5.73283 20.9845 6.40058 22.6405C6.46995 22.8132 6.57368 22.9701 6.70547 23.1016C6.83727 23.233 6.99439 23.3364 7.16731 23.4053C7.34024 23.4743 7.52536 23.5074 7.71146 23.5027C7.89755 23.4979 8.08076 23.4555 8.24995 23.3778C8.57264 23.2214 8.82347 22.9477 8.95123 22.6127C9.079 22.2776 9.07407 21.9064 8.93745 21.5749C8.42354 20.2861 8.19433 18.9015 8.26551 17.5159C8.3367 16.1303 8.70661 14.7764 9.34988 13.5471C9.99316 12.3178 10.8946 11.2422 11.9924 10.3938C13.0903 9.5454 14.3585 8.9444 15.7103 8.63195C17.0621 8.31951 18.4655 8.30301 19.8243 8.58358C21.183 8.86416 22.4651 9.43517 23.5825 10.2575C24.7 11.0798 25.6265 12.134 26.2985 13.3479C26.9705 14.5617 27.3721 15.9065 27.4759 17.29C27.8437 22.5374 24.016 26.9374 19.25 26.9374C17.8483 26.9367 16.4733 26.554 15.2728 25.8305L17.8337 15.5833C17.9151 15.232 17.8554 14.8628 17.6672 14.5552C17.479 14.2476 17.1775 14.0262 16.8277 13.9388C16.4779 13.8513 16.1077 13.9048 15.7969 14.0876C15.4862 14.2705 15.2596 14.5681 15.1662 14.9164L10.5496 33.3844C10.5246 33.4849 10.4771 33.5785 10.4108 33.6582C10.3444 33.7378 10.2609 33.8014 10.1665 33.8442C10.0722 33.887 9.96932 33.9079 9.86571 33.9054C9.7621 33.9029 9.66041 33.8769 9.56823 33.8295C6.65226 32.2994 4.21564 29.9935 2.52722 27.1662C0.838802 24.339 -0.0357855 21.1002 -4.55249e-05 17.8074C0.103079 8.12048 8.02136 0.214229 17.7031 0.124854C20.075 0.101991 22.4278 0.551462 24.6243 1.44707C26.8208 2.34268 28.8171 3.66651 30.4968 5.34142C32.1765 7.01633 33.506 9.0088 34.4079 11.2027C35.3098 13.3967 35.766 15.7481 35.75 18.1202Z" fill="#F7F5EA"/></svg>';


    if (iconPinterest) {
        var parent = iconPinterest.parentNode;
        var newSVG = document.createElement('div');
        newSVG.innerHTML = iconPinterestSVG;
        parent.replaceChild(newSVG.firstChild, iconPinterest);
    }

    if (iconFacebook) {
        var parent = iconFacebook.parentNode;
        var newSVG = document.createElement('div');
        newSVG.innerHTML = iconFacebookSVG;
        parent.replaceChild(newSVG.firstChild, iconFacebook);
    }

    if (iconInstagram) {
        var parent = iconInstagram.parentNode;
        var newSVG = document.createElement('div');
        newSVG.innerHTML = iconInstagramSVG;
        parent.replaceChild(newSVG.firstChild, iconInstagram);
    }
}
  
function replaceReelGalleryArrows() {
  var rightArrow = document.querySelectorAll('.gallery-reel-controls > div:nth-child(2) > button > div > svg');
  
  var leftArrow = document.querySelectorAll('.gallery-reel-controls > div:nth-child(1) > button > div > svg');    
  
  var rightArrowSVG = '<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25002 11.7C8.75001 10.6333 9.23333 9.7 9.7 8.9C10.2 8.1 10.6833 7.43333 11.15 6.9L0 6.9L0 4.8L11.15 4.8C10.6833 4.23333 10.2 3.55 9.7 2.75C9.23333 1.95 8.75001 1.03333 8.25002 0L10 0C12.1 2.43333 14.3 4.23334 16.6 5.4V6.3C14.3 7.43333 12.1 9.23333 10 11.7H8.25002Z" fill="#737D6A"/></svg>';

  var leftArrowSVG = '<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.34996 1.07229e-05C7.84996 1.06668 7.36665 2.00001 6.89998 2.80001C6.39998 3.60001 5.91663 4.26668 5.44997 4.80001L16.6 4.80001L16.6 6.90001L5.44997 6.90001C5.91663 7.46668 6.39998 8.15001 6.89998 8.95001C7.36665 9.75001 7.84996 10.6667 8.34996 11.7L6.59996 11.7C4.49996 9.26668 2.29999 7.46668 -1.47867e-05 6.30001L-1.4708e-05 5.40001C2.29999 4.26668 4.49996 2.46668 6.59996 1.05699e-05L8.34996 1.07229e-05Z" fill="#737D6A"/></svg>';
  
  if (leftArrow) {
    leftArrow.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = leftArrowSVG.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
  
  if (rightArrow)
  	rightArrow.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = rightArrowSVG.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
}
  

function replaceDarkCarouselArrows() {
  var rightArrowDark = document.querySelectorAll('.dark .user-items-list-carousel__arrow-button--right > svg');
  
  var rightArrowLight = document.querySelectorAll('.light .user-items-list-carousel__arrow-button--right > svg');
  
  var rightArrowMobileDark = document.querySelectorAll('.dark button.mobile-arrow-button.mobile-arrow-button--right > svg');
  
  var rightArrowMobileLight = document.querySelectorAll('.light button.mobile-arrow-button.mobile-arrow-button--right > svg');
  
  var leftArrowDark = document.querySelectorAll('.dark .user-items-list-carousel__arrow-button--left > svg');
  
  var leftArrowLight = document.querySelectorAll('.light .user-items-list-carousel__arrow-button--left > svg');
  
  var leftArrowMobileDark = document.querySelectorAll('.dark button.mobile-arrow-button.mobile-arrow-button--left > svg');
  
  var leftArrowMobileLight = document.querySelectorAll('.light button.mobile-arrow-button.mobile-arrow-button--left > svg');

  var rightArrowSVGLight = '<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25002 11.7C8.75001 10.6333 9.23333 9.7 9.7 8.9C10.2 8.1 10.6833 7.43333 11.15 6.9L0 6.9L0 4.8L11.15 4.8C10.6833 4.23333 10.2 3.55 9.7 2.75C9.23333 1.95 8.75001 1.03333 8.25002 0L10 0C12.1 2.43333 14.3 4.23334 16.6 5.4V6.3C14.3 7.43333 12.1 9.23333 10 11.7H8.25002Z" fill="#F7F5EA"/></svg>';

  var rightArrowSVGDark = '<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25002 11.7C8.75001 10.6333 9.23333 9.7 9.7 8.9C10.2 8.1 10.6833 7.43333 11.15 6.9L0 6.9L0 4.8L11.15 4.8C10.6833 4.23333 10.2 3.55 9.7 2.75C9.23333 1.95 8.75001 1.03333 8.25002 0L10 0C12.1 2.43333 14.3 4.23334 16.6 5.4V6.3C14.3 7.43333 12.1 9.23333 10 11.7H8.25002Z" fill="#737D6A"/></svg>';

  var leftArrowSVGLight = '<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.34996 1.07229e-05C7.84996 1.06668 7.36665 2.00001 6.89998 2.80001C6.39998 3.60001 5.91663 4.26668 5.44997 4.80001L16.6 4.80001L16.6 6.90001L5.44997 6.90001C5.91663 7.46668 6.39998 8.15001 6.89998 8.95001C7.36665 9.75001 7.84996 10.6667 8.34996 11.7L6.59996 11.7C4.49996 9.26668 2.29999 7.46668 -1.47867e-05 6.30001L-1.4708e-05 5.40001C2.29999 4.26668 4.49996 2.46668 6.59996 1.05699e-05L8.34996 1.07229e-05Z" fill="#F7F5EA"/></svg>';

  var leftArrowSVGDark = '<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.34996 1.07229e-05C7.84996 1.06668 7.36665 2.00001 6.89998 2.80001C6.39998 3.60001 5.91663 4.26668 5.44997 4.80001L16.6 4.80001L16.6 6.90001L5.44997 6.90001C5.91663 7.46668 6.39998 8.15001 6.89998 8.95001C7.36665 9.75001 7.84996 10.6667 8.34996 11.7L6.59996 11.7C4.49996 9.26668 2.29999 7.46668 -1.47867e-05 6.30001L-1.4708e-05 5.40001C2.29999 4.26668 4.49996 2.46668 6.59996 1.05699e-05L8.34996 1.07229e-05Z" fill="#737D6A"/></svg>';
  
  if (rightArrowDark) {
    rightArrowDark.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = rightArrowSVGLight.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
  
  if (rightArrowLight) {
    rightArrowLight.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = rightArrowSVGDark.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
  
  if (rightArrowMobileDark) {
    rightArrowMobileDark.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = rightArrowSVGLight.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
  
  if (rightArrowMobileLight) {
    rightArrowMobileLight.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = rightArrowSVGDark.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
  
  if (leftArrowDark) {
    leftArrowDark.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = leftArrowSVGLight.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
  
  if (leftArrowLight) {
    leftArrowLight.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = leftArrowSVGDark.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
  
  if (leftArrowMobileDark) {
    leftArrowMobileDark.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = leftArrowSVGLight.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
  
  if (leftArrowMobileLight) {
    leftArrowMobileLight.forEach(function (svg) {
        var parent = svg.parentNode;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = leftArrowSVGDark.trim();
        var newSVG = tempDiv.firstChild;
        parent.replaceChild(newSVG, svg);
    });
  }
}

function replaceVenueText() {
    var el = document.querySelector("#block-yui_3_17_2_1_1760374344062_2748 h1");
    if (el) {
        el.innerHTML = '<span class="text-wrap--desktop">A Charming Venue Facing The</span> <span class="text-wrap--desktop">North Georgia Mountains</span>';
    }
}