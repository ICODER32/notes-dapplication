// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Notes {
    address payable owner;

    struct Note {
        string name;
        string note;
        uint timestamp;
        address from;
    }

    Note[] notes;

    constructor() {
        owner = payable(msg.sender);
    }

    function leaveNote(
        string calldata name,
        string calldata note
    ) external payable {
        require(msg.value > 0, "Please send ethers");
        owner.transfer(msg.value);
        notes.push(Note(name, note, block.timestamp, msg.sender));
    }

    function getNotes() public view returns (Note[] memory) {
        return notes;
    }
}
