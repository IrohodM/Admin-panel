export const ToggleSidebar = () => {

    // aside start
    const switchToggle = document.getElementById("switchCheckDefault");
    const sidebar = document.getElementById("sidebar_section");

    switchToggle.addEventListener("change", function () {
        if (this.checked) {
            sidebar.classList.add("collapsed"); // collapse when ON
        } else {
            sidebar.classList.remove("collapsed"); // expand when OFF
        }
    });
    // aside end

}