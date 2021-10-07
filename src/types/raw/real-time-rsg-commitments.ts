export interface Data {
    MktDay:     string;
    RefId:      string;
    Commitment: Commitment[];
}

export interface Commitment {
    MKT_INT_END_EST: string;
    COMMIT_REASON:   string;
    TOTAL_ECON_MAX:  string;
    NUM_RESOURCES:   string;
}