export class ObjetWarning extends Error {
    type;

    constructor(message: string) {
        super(message);
        this.type = 'warn';
    }
}