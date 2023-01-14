export function number(busStops: [number, number][]): number {
    return busStops.reduce((s,i)=>s+i[0]-i[1],0)
  }