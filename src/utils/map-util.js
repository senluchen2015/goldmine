export function inBounds(point, bounds) {
    const eastBound = point.lng < bounds.ne.lng;
    const westBound = point.lng > bounds.sw.lng;
    let inLong;

    if (bounds.ne.long < bounds.sw.long) {
        inLong = eastBound || westBound;
    } else {
        inLong = eastBound && westBound;
    }

    const inLat = point.lat > bounds.sw.lat && point.lat < bounds.ne.lat;
    return inLat && inLong;
}