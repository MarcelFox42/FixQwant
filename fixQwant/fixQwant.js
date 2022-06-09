{
  // === Colors ===
  var darkBlue = "#2e5cb8";
  var darkGrey = "#20252a";
  var lightGrey = "#c7cbd2";
  
  // === HTML Element Styles ===
  document.body.style.background = darkGrey;
  
  // Qwant Lite Logo
  document.querySelector(".home-logo img").style.filter = "invert(98%) sepia(3%) saturate(1726%) hue-rotate(182deg) brightness(83%) contrast(99%)";
  
  // Text input field border + shadow
  var inputField = document.body.querySelector("#search-input");
  var css_shadow = "#search-input:hover, #search-input:focus { box-shadow: 8px 8px 0 0 " + darkBlue + "; }";
  var inputHoverRule = document.createElement("style");
  
  if ( inputHoverRule.styleSheet ) {
    inputHoverRule.styleSheet.cssText = css_shadow;
  } else {
    inputHoverRule.appendChild( document.createTextNode(css_shadow) );
  }
  
  document.getElementsByTagName("head")[0].appendChild( inputHoverRule );
  inputField.style.border = "2px solid " + lightGrey;
  
  // Text below text input field
  document.body.querySelector(".home-title").style.color = lightGrey;
}