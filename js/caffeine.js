
function embedFunction() {
  var copyText = document.getElementById("iframe_code");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
 
}
