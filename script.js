/* Script de modificacion de botones*/

function pageChange (button) {
    document.getElementById("Icontainer").src = button.dataset.src;

    document.querySelectorAll(".lat-button").forEach(button => {
        button.disabled = false;
        button.classList.remove("active");
    });
    button.disabled = true;
    button.classList.add("active");
}

/*Script para mostrar hora actual en Chile*/

function UpdateChileTime() {
    const option ={
        timeZone: 'America/Santiago',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short'
    };
const ActualTime = new Intl.DateTimeFormat('es-CL', option).format(new Date());
const el = document.getElementById('Chile-Time');
if (el) el.textContent = actualTime;
}
UpdateChileTime();
setInterval(UpdateChileTime, 1000);