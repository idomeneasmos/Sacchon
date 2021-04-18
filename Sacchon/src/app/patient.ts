export interface Patient {
    id: number,
    fullName: string,
    password: string,
    email: string,
    gender: boolean,
    dateOfBirth: Date,
    weight: number,
    height: number,
    doctorsId: number,
    active: boolean
}
