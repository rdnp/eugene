export interface Vector {
    direction: number;
    speed: number;
}

export interface TripSegment {
    variation: number;
    fuelConsumptionRate: number;
    windDirection: number;
    windSpeed: number;
    trueAirspeed: number;
    altitude: number;
    magneticCourse: number;
    magneticHeading: number;
    groundSpeed: number;
    time: number;
    fuel: number;
}

export interface RouteSegment {
    sourcePointId: string;
    targetPointId: string;
    trueCourse: number;
    distance: number;
    minimumSafeAltitude: number;
    _links: RouteSegmentLinks;
}

export interface RouteSegmentList {
    'route-segments': RouteSegment[];
}

export interface RouteSegmentRepositoryResponse {
    _embedded: RouteSegmentList;
}

export interface RouteSegmentLinks {
    self: Link;
    'route-segment': Link;
}

export class Flight {

    name: string;
    origin: string;
    destination: string;
    alternate: string;
    aircraftType: string;
    pointIds: string[];

    // tslint:disable-next-line: variable-name
    _links: FlightLinks; // variable from Spring repository

    constructor(name: string, origin: string, destination: string, alternate: string, aircraftType: string, pointIds: string[],
        // tslint:disable-next-line: align variable-name
        _links: FlightLinks) {
        this.name = name;
        this.origin = origin;
        this.destination = destination;
        this.aircraftType = aircraftType;
        this.pointIds = pointIds;
        this.alternate = alternate;
    }
}

export interface FlightLinks {
    self: Link;
    flight: Link;
}

export interface Link {
    href: string;
}

export interface FlightList {
    flights: Flight[];
}

export interface FlightRepositoryResponse {
    _embedded: FlightList;
}
