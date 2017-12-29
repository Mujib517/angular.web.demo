import { Injectable } from "@angular/core";


@Injectable()
export class FileLogger {

    warn(msg) {
        console.warn("File : ", msg);
    }

    error(msg) {
        console.error("File : ", msg);
    }

    info(msg) {
        console.info("File : ", msg);
    }
}