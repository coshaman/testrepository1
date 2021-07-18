import GlitchedWriter, { wait } from "https://cdn.skypack.dev/glitched-writer@2.0.22";
// Glitched Writer npm module:
// https://www.npmjs.com/package/glitched-writer
const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, undefined, logString);
(async function () {
    await wait(1000);
    await Writer.write("Entering the system...");
    await wait(1200);
    await Writer.write("Access Granted");
    await wait(1500);
    await Writer.write("Enter Command mode...");
    input.removeAttribute("disabled");
})();
function logString(string) {
    logs.innerHTML += `<p>${string}</p>`;
}
input.addEventListener("input", _.debounce(() => {
    Writer.write(input.value);
}, 500));