export interface Data {
    RefId:    string;
    Interval: Interval[];
}

export interface Interval {
    CASEAPPROVALDATE: string;
    SOLUTIONTIME:     string;
    PJMFORECASTEDLMP: string;
}