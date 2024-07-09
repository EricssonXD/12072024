import { makeAutoObservable } from "mobx"

export class AppState {

    presentOpened = false;

    constructor() {
        makeAutoObservable(this)
    }

    openPresent() {
        if (this.presentOpened === true) return;
        this.presentOpened = true;
        console.log('Present opened')
    }

}

export const appState = new AppState()

// export enum PresentState {
//     Opened,
//     Closed,
// }