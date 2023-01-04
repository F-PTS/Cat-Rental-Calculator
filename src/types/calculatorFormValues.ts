export interface CalculatorFormValues {
    firstName: string;
    lastName: string;
    pesel: string;
    birthDate: Date | null;
    dateRange: [Date | null, Date | null];
    driverLicenseYear: number | null;
    distance: number;
}
