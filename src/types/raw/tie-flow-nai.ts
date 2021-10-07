export interface Data {
    Date:   string;
    Actual: Actual;
}

export interface Actual {
    HourandMin: string;
    TieFlow:    TieFlow;
}

export interface TieFlow {
    Name:  string;
    Value: string;
}
