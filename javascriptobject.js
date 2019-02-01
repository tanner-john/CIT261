function Vehicle(type, engine, wheels, doors, transmission, windows, maxMPH) {
    this.type = type;
    this.engine = engine;
    this.wheels = wheels;
    this.doors = doors;
    this.transmission = transmission;
    this.windows = windows;
    this.maxMPH = maxMPH;
}

var motorcycle = new Vehicle('Kowasaki', '250cc', 2, 0, 'automatic', 0, 180);