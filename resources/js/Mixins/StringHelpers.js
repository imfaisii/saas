/* This file contains all the functions related to strings */

export default {
    data() {
        return { /* data */ }
    },
    methods: {
        capitalizeFirstLetter(str) { return str.charAt(0).toUpperCase() + str.slice(1) }
    },
}