export interface Car {
    id: string;
    model: string;
    priceCategory: string;
    basePrice: string;
    amountOfAvaliable: number;
    avgFuelConsumption: number;
    currentLocation: {
        city: string;
        gasPrice: number;
        id: string;
        carId: string;
    };
    isRented: boolean;
}