/* Button related global methods */

export default function useButtonHelper() {

    // this makes the button disabled and adds the text
    function btnToggle(btn, text = "Button") { btn.ajax = !btn.ajax; btn.text = text }

    return { btnToggle }
}