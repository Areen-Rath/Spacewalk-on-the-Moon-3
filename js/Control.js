AFRAME.registerComponent("control", {
    init: function() {
        window.addEventListener("click", this.onClick());
    },
    onClick: function() {
        var camera = document.querySelector("#camera")
        var coords = camera.getAttribute("position");
        if (coords.x > 78 && coords.x < 207 && coords.z > -85 && coords.z < 33) {
            camera.setAttribute("hill", "true")
        }
        if (coords.x > -120 && coords.x < -75  && coords.z > -15 && coords.z < 25) {
            camera.setAttribute("rover", "true")
        }
    }
});