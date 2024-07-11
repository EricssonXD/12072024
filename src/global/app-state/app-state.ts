import { makeAutoObservable } from "mobx"

export class AppState {

    presentOpened = false;
    openedBlessing: { name: string, message: string } | undefined = undefined;

    constructor() {
        makeAutoObservable(this)
    }

    openBlessing(blessing: { name: string, message: string }) {
        this.openedBlessing = blessing;
    }

    closeBlessing() {
        this.openedBlessing = undefined;
    }

    openPresent() {
        if (this.presentOpened === true) return;
        this.presentOpened = true;
        console.log('Present opened')
    }

    closePresent() {
        if (this.presentOpened === false) return;
        this.presentOpened = false;
        console.log('Present closed')
    }

}

export const appState = new AppState()

// export enum PresentState {
//     Opened,
//     Closed,
// }