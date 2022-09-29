/* This file contains all the functions related to strings */

export default function useStringable() {

    // for making the first word capital of the string
    function capitalizeFirstLetter(str) { return str.charAt(0).toUpperCase() + str.slice(1) }

    return { capitalizeFirstLetter }
}