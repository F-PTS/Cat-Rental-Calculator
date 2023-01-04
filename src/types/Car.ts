export interface Car {
    id: string;
    model: string;
    priceCathegory: "basic" | "standard" | "medium" | "premium";
    basePrice: number;
    amountOfAvaliable: number;
    avgFuelConsumption: number;
    currentLocation: [
        { city: string; gasPrice: number; id: string; carId: string }
    ];
    isRented: boolean;
    image: string;
}
