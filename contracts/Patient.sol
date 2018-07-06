pragma solidity ^0.4.23;

contract Patient {
  struct Patient {
      bytes32 name;
  }
  mapping(uint => Patient) internal patients;

  constructor(bytes32 _name) public {
      Patient memory patient = Patient(_name);
      patients[1] = patient;
  }
}
