export interface Data {
    LMPData: LMPData;
}

export interface LMPData {
    RefId:     string;
    ExAnteLMP: ExAnteLMP;
}

export interface ExAnteLMP {
    HourAndMin: string;
    Hub:        Hub[];
}

export interface Hub {
    LMP:        string;
    name:       string;
    loss:       string;
    congestion: string;
}