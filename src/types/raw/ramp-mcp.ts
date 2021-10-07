export interface Data {
    RCData: RCData;
}

export interface RCData {
    RefId:                  string;
    MktDay:                 string;
    RealTimeRampCapability: RealTimeRampCapability;
    DayAheadMCP:            DayAheadMCP;
}

export interface DayAheadMCP {
    HourEnding: string;
    Zone:       DayAheadMCPZone[];
}

export interface DayAheadMCPZone {
    number:      string;
    DARCUpMCP:   string;
    DARCDownMCP: string;
}

export interface RealTimeRampCapability {
    HourAndMin: string;
    Zone:       RealTimeRampCapabilityZone[];
}

export interface RealTimeRampCapabilityZone {
    number:      string;
    RTRCUpMCP:   string;
    RTRCDownMCP: string;
}