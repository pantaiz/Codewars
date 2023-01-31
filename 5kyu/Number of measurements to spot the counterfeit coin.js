function howManyMeasurements(n){
    if (n <= 1) return 0;
    return howManyMeasurements(Math.ceil(n/3)) + 1;
}