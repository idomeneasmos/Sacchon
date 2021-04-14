export interface Patient {
    Id: number,
    Fullname: string,
    Password: string,
    Email: string,
    Gender: boolean,
    DateOfBirth: Date,
    Weight: number,
    Height: number,
    DoctorsId: number,
    Active: boolean
}
