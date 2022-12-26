export class CreateUserDTO {
    readonly id?: number;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: string
}