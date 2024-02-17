
class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = ["dcode", "bottle"];
    }

    /* -- Makes an <li>text<li> element/tag  -- */

    static createListItem(text) {
        const li = document.createElement("li");

        li.textContent = text;

        return li;
    }

    update() {
        /* Remove all existing <li> element/tags */

        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        /* Fill <ul>/<ol> tag with <li> */
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }
}

listBinding.update();  // in inspect pannel


////////-------------------//////////////////


//----- Add Method And Remove Method -----// 


class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = [];
    }
    /* -- Makes an <li>text<li> element/tag  -- */

    static createListItem(text) {
        const li = document.createElement("li");

        li.textContent = text;

        return li;
    }


    update() {
        /* Remove all existing <li> element/tags */

        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        /* Fill <ul>/<ol> tag with <li> */
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    add(text) {
        this.textList.push(text);
        this.update();

        // listBinding.add("dcode");  // in inspect pannel
        // listBinding.add("dog");    // in inspect pannel
    }


    remove(index) {
        this.textList.splice(index, 1);
        this.update();

        // listBinding.add("dog");  // in inspect pannel
        // listBinding.add("dcode");    // in inspect pannel
        // listBinding.add("bottle"); // in inspect pannel

        // listBinding.remove(1); // in inspect pannel
    }

}