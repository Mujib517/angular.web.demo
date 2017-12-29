import { Injectable } from "@angular/core";


@Injectable()
export class ConsoleLogger {

    warn(msg) {
        console.warn(msg);
    }

    error(msg){
        console.error(msg);
    }

    info(msg){
        console.info(msg);
    }
}