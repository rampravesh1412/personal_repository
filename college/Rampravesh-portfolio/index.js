$(document).ready(function () {
  $(".about-me-link").on("click", function () {
    $(".about-section").show();
    $(".services-section").hide();
    $(".works-section").hide();

    $(".about-me-link").addClass("active");
    $(".services-link").removeClass("active");
    $(".works-link").removeClass("active");
  });

  $(".services-link").on("click", function () {
    $(".about-section").hide();
    $(".services-section").show();
    $(".works-section").hide();

    $(".about-me-link").removeClass("active");
    $(".services-link").addClass("active");
    $(".works-link").removeClass("active");
  });

  $(".works-link").on("click", function () {
    $(".about-section").hide();
    $(".services-section").hide();
    $(".works-section").show();

    $(".about-me-link").removeClass("active");
    $(".services-link").removeClass("active");
    $(".works-link").addClass("active");
  });
});

function DownloadFile(fileName) {
  //Set the File URL.
  var url = "Files/" + fileName;

  //Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
    //Convert the Byte Data to BLOB object.
    var blob = new Blob([req.response], { type: "application/octetstream" });

    //Check the Browser type and download the File.
    var isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      var url = window.URL || window.webkitURL;
      link = url.createObjectURL(blob);
      var a = document.createElement("a");
      a.setAttribute("download", fileName);
      a.setAttribute("href", link);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  req.send();
}
