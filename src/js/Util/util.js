export class Util {
    static $(domItem) {
        return document.querySelector(domItem);
    }

    static $$(domItems) {
        return [...document.querySelectorAll(domItems)];
    }

    /**
     * @param {String} tagName 
     * @param  {Object} attributes 
     * @returns tag
     */
    static createElement(tagName, ...attributes) {
        return attributes.reduce((tag, attribute) => {
        const { name, value } = attribute;
        tag.setAttribute(name, value);
    
        return tag;
        }, document.createElement(tagName));
    }
}