class Event {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }
  
  getStartHours() {
    return Number(this.startTime.split(":")[0]);
  }
  getStartMinutes() {
    return Number(this.startTime.split(":")[1]);
  }
  getEndHours() {
    return Number(this.endTime.split(":")[0]);
  }
  getEndMinutes() {
    return Number(this.endTime.split(":")[1]);
  }
  isBefore(other) {
    return (
      this.getEndHours() < other.getStartHours() ||
      (this.getEndHours() === other.getStartHours() &&
        this.getEndMinutes() <= other.getStartMinutes())
    );
  }
  
  durationMinutes() {
    const startHours = this.getStartHours();
    const startMinutes = this.getStartMinutes();
    const endHours = this.getEndHours();
    const endMinutes = this.getEndMinutes();

    const hoursDifference = endHours - startHours;
    const minutesDifference = endMinutes - startMinutes;

    return hoursDifference * 60 + minutesDifference;
}
  
  conflict(otherEvent) {
    const thisStart = this.getStartHours();
    const thisEnd = this.getEndHours();
    const otherStart = otherEvent.getStartHours();
    const otherEnd = otherEvent.getEndHours();

    const overlapInTime =
      !(thisStart > otherEnd || thisEnd < otherStart);

    return overlapInTime;
  }
}

