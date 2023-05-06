AFRAME.registerComponent("coords", {
    init: function() {
        var camera = document.querySelector("#camera");
        window.addEventListener("click", function() {
            console.log(camera.getAttribute("position"));
        })
    }
})