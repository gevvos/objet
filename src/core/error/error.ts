export class ObjetError extends Error {
    type;

    constructor(message: string) {
        super(message);
        this.type = 'error';
    }
}