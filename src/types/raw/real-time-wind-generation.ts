export interface Data {
    MktDay:   string;
    RefId:    string;
    instance: Instance[];
}

export interface Instance {
    DateTimeEST:   string;
    HourEndingEST: string;
    Value:         string;
}