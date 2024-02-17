
class Settings {
    constructor() {

        // if (Settings.instance instanceof Settings){  // comment code  -- value defrent
        //     return Settings.instance;
        // }

        this.settingsObject = {
            'background': '#ff0000',
            'version': Math.floor(Math.random() * 4000)
        };
        Object.freeze(this.settingsObject);
        // Object.freeze(this);         // CC - value different
        // Settings.instance = this;    // CC - value different
    }

    get(key) {
        return this.settingsObject[key];
    }
}