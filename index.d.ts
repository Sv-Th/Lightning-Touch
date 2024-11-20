import {Lightning} from '@lightningjs/sdk';

declare interface TouchConfig {
    bridgeCloseTimeout?: number;
    tapDelay?: number;
    doubleTapActive?: boolean;
    beforeDoubleTapDelay?: number;
    flagAsHoldDelay?: number;
    doubleTapMaxDistance?: number;
    externalTouchScreen?: boolean;
    componentBlockBroadcast?: boolean;
    touchQueueMaxLength?: number;
    swipeXTreshold?: number;
    swipeYTreshold?: number;
    viewportOffsetX?: number;
    viewportOffsetY?: number;
    dragInterval?: number;
    ipad?: boolean;
    releaseSingleTapDelay?: number;
}

declare interface Vector {
    add(v: Vector): Vector;

    subtract(v: Vector): Vector;

    x: number;
    y: number;
}

declare interface Recording {
    recordingID: number;

    update(event: TouchEvent): void;

    starttime: number;
    fingers: Map<any, any>;
    fingersToucher: number;
    endtime: number;
    duration: number;
    isTap: boolean;
    isHold: boolean;
    moved: boolean;
    hasFingerMoved: boolean;
    startPosition: Vector;
    delta: Vector;
    firstFinger: Finger;
    analyzed: boolean;
    pinch?: { distance: number, angle: number };
}


declare interface Finger {
    update(data: Touch): void;

    moved: boolean;
    identifier: number;
    start: Vector;
    end: Vector;
    position: Vector;
    delta: Vector;
    queue: { position: Vector, time: number }[];
    pinching: boolean;
}


declare namespace Automotive {
    function start(app: Lightning.Application, config: TouchConfig): void;

    function block(events: string[]): void;

    function release(events: string[]): void;

    function lock(events: string[]): void;

    function unlock(events: string[]): void;

    function createVector(x: number, y: number): Vector;

    function distance(v1: Vector, v2: Vector): number;

    function smoothstep(min: number, max: number, value: number): number;

    function getHorizontalForce(finger: Finger): number;

    function getVerticalForce(finger: Finger): number;

    function updateConfig(key: string, value: number | boolean): void;
}