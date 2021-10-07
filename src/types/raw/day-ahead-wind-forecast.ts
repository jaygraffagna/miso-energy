export interface Data {
    MktDay:   string;
    RefId:    string;
    Forecast: Forecast[];
}

export interface Forecast {
    DateTimeEST:   string;
    HourEndingEST: string;
    Value:         string;
}