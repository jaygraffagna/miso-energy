export interface Data {
    MCPData: MCPData;
}

export interface MCPData {
    RefId:       string;
    MktDay:      string;
    RealTimeMCP: RealTimeMCP;
    DayAheadMCP: DayAheadMCP;
}

export interface DayAheadMCP {
    HourEnding: string;
    Zone:       Zone[];
}

export interface Zone {
    number:         string;
    GenRegMCP:      string;
    GenSpinMCP:     string;
    GenSuppMCP:     string;
    DemSuppMCP:     string;
    RegMileageMCP?: string;
}

export interface RealTimeMCP {
    HourAndMin: string;
    Zone:       Zone[];
}