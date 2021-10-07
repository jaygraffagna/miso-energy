export interface Data {
    RefId:    string;
    instance: Instance[];
}

export interface Instance {
    timestamp: string;
    NSI:       string;
}
