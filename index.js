let store = { drivers: [], passengers: [], trips: [] }

let driverID = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverID;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.driverId === this.id;}.bind(this))
  }

  passengers() {
    return this.trips().map(
        function (trip) {
          return trip.passenger();
        }
      )
  }
}

let passengerID = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerID;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id
      }.bind(this)
    )
  }

  drivers() {
    return this.trips().map(
      function (trip) {
        return trip.driver()
      }
    )
  }
}

let tripID = 0;

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripID;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId
      }.bind(this)
    );
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId
      }.bind(this)
    )
  }
}
