export interface Data {
    MktDay: string;
    RefId:  string;
    ACE:    Ace[];
}

export interface Ace {
    instantEST: string;
    value:      string;
}
