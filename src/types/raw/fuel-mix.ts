export interface Data {
    RefId:   string;
    TotalMW: string;
    Fuel:    Fuel;
}

export interface Fuel {
    Type: Type[];
}

export interface Type {
    INTERVALEST:   string;
    CATEGORY:      string;
    ACT:           string;
    FUEL_CATEGORY: string;
}