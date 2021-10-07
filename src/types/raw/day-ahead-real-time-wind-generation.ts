export interface Data {
    MktDay:   string;
    RefId:    string;
    instance: Instance[];
}

export interface Instance {
    ForecastDateTimeEST:   string;
    ForecastHourEndingEST: string;
    ForecastValue:         string;
    ActualDateTimeEST:     null | string;
    ActualHourEndingEST:   null | string;
    ActualValue:           null | string;
}