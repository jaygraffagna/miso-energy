export interface Data {
    LMPData: LMPData;
}

export interface LMPData {
    RefId:               string;
    FiveMinLMP:          Lmp;
    HourlyIntegratedLMP: Lmp;
    DayAheadExAnteLMP:   Lmp;
    DayAheadExPostLMP:   Lmp;
}

export interface Lmp {
    HourAndMin:  string;
    PricingNode: PricingNode[];
}

export interface PricingNode {
    name:   string;
    region: Region;
    LMP:    string;
    MCC:    string;
    MLC:    string;
}

export enum Region {
    Midwest = "Midwest",
    North = "North",
    South = "South",
}