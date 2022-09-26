 export class ValidationError extends Error {
    status: number | undefined;
    field: string | undefined;
    errors: Array<string>;

    constructor(status: number, message: string, field: string, errors: Array<string> = []) {
        super(message);
        this.status = status;
        this.errors = errors;
        this.field = field;
    }

    // static UnauthorizedError() {
    //     return new ValidationError(401, 'User no authorized' )
    // }

    static BadRequest(message: string,field: string, errors: Array<string> = []) {
        return new ValidationError(400, message, field, errors);
    }
}