import { Component, Input } from "@angular/core";
import { Historia } from "../../interface/historia.interface";
import historias from "../../../assets/historias.json";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent {
    @Input() public historias: Historia[] = historias;
    mostrarEscena: boolean = false;

    start() {
        this.mostrarEscena = true;
    }
    constructor() {}
}
