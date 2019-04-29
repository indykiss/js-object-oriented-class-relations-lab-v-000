

let store = {drivers: [], passengers: [], trips: []}
let driverID = 0

class Driver {
  constructor(name) {
    this.ID = ++driverID;
    this.name = name
    store.drivers.push(this);}


  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverID === this.ID;}.bind(this))
  }

passengers() {
  return store.passengers.filter(
    function(passenger) {
        return passenger.driverID == this.passengerID;}.bind(this);
  );
}

let passengerID = 0

class Passenger {
  constructor(name, driver) {
    this.id = ++passengerID
    this.name = name
    store.passengers.push(this);
  }
}

drivers() {
  return store.drivers.find(
    function(driver) {
      return driver.passengerID == this.driverID;}.bind(this);
  );
}

trips() {
  return store.trips.filter(
    function(trip) {
      return trip.passengerID == this.ID;}.bind(this);
  );
}


let tripID = 0

class Trip {
  constructor(driver, passenger) {
    this.ID = ++tripID
    store.trips.push(this)

      if(driver) {
        this.setDriver(driver)
      }
      if(passenger){
        this.setPassenger(passenger)
      }
  }

    setDriver(driver) {
      this.driverID = driver.ID
    }

    setPassenger(passenger){
      this.passengerID = passenger.ID
    }

    passenger() {
      return store.passengers.find(
        function(passenger) {
          return passenger.ID == this.passengerID;}.bind(this)
      );
    }

    driver() {
      return store.drivers.find(
        function(driver) {
          return driver.ID == this.driverID;}.bind(this)
        );
    }
}
