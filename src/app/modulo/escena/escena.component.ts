import { Component, Input } from "@angular/core";
import { Historia } from "../../interface/historia.interface";

@Component({
    selector: "app-escena",
    // template: `<p>
    //     El nostre heroi estava surant per l'espai sideral quan a la llunyania va
    //     albirar una nau espacial
    // </p>`,
    templateUrl: "./escena.component.html",
    styleUrls: ["./escena.component.css"],
})
export class EscenaComponent {
    @Input() public historias: Historia[] = [];
    currentSentence = 0;

    prev() {
        this.currentSentence = Math.max(0, this.currentSentence - 1);
    }

    next() {
        this.currentSentence = Math.min(
            this.historias.length - 1,
            this.currentSentence + 1
        );
    }
    constructor() {}
}
