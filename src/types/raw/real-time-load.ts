export interface Data {
    LoadInfo: LoadInfo;
}

export interface LoadInfo {
    RefId:                  string;
    ClearedMW:              ClearedMW[];
    MediumTermLoadForecast: MediumTermLoadForecast[];
    FiveMinTotalLoad:       FiveMinTotalLoad[];
}

export interface ClearedMW {
    ClearedMWHourly: ClearedMWHourly;
}

export interface ClearedMWHourly {
    Hour:  string;
    Value: string;
}

export interface FiveMinTotalLoad {
    Load: Load;
}

export interface Load {
    Time:  string;
    Value: string;
}

export interface MediumTermLoadForecast {
    Forecast: Forecast;
}

export interface Forecast {
    HourEnding:   string;
    LoadForecast: string;
}
