// pragma solidity ^0.8.0;

// contract CrimeRegistry {
//     struct Crime {
//         uint caseId;
//         string description;
//         string suspect;
//         string caseCode;
//         uint[] photoIds;
//         uint[] videoIds;
//         string forensicsDescription;
//         bool isForensicsAdded;
//     }
    
//     mapping(uint => Crime) public crimes;
//     uint public crimeCounter;
    
//     mapping(address => bool) public policeAccounts;
//     mapping(address => bool) public forensicsAccounts;
    
//     modifier onlyPolice() {
//         require(policeAccounts[msg.sender], "Only police can access this function.");
//         _;
//     }
    
//     modifier onlyForensics(uint _caseId) {
//         require(forensicsAccounts[msg.sender], "Only forensics team can access this function.");
//         require(crimes[_caseId].isForensicsAdded == false, "Forensics data already added.");
//         _;
//     }
    
//     function addPoliceAccount(address _policeAccount) public {
//         // Implement your own mechanism to add police accounts
//         // For simplicity, we assume only the contract owner can add police accounts
//         // In a real application, you may use a role-based access control system
//         require(msg.sender == owner, "Only contract owner can add police accounts.");
//         policeAccounts[_policeAccount] = true;
//     }
    
//     function addForensicsAccount(address _forensicsAccount) public {
//         // Implement your own mechanism to add forensics accounts
//         // For simplicity, we assume only the contract owner can add forensics accounts
//         // In a real application, you may use a role-based access control system
//         require(msg.sender == owner, "Only contract owner can add forensics accounts.");
//         forensicsAccounts[_forensicsAccount] = true;
//     }
    
//     function addCrime(uint _caseId, string memory _description, string memory _suspect, string memory _caseCode) public onlyPolice {
//         crimes[_caseId] = Crime(_caseId, _description, _suspect, _caseCode, new uint[](0), new uint[](0), "", false);
//         crimeCounter++;
//     }
    
//     function addForensicsData(uint _caseId, uint[] memory _photoIds, uint[] memory _videoIds, string memory _forensicsDescription) public onlyForensics(_caseId) {
//         crimes[_caseId].photoIds = _photoIds;
//         crimes[_caseId].videoIds = _videoIds;
//         crimes[_caseId].forensicsDescription = _forensicsDescription;
//         crimes[_caseId].isForensicsAdded = true;
//     }
    
//     // Example functions for storing and retrieving photos and videos using IPFS
    
//     mapping(uint => mapping(uint => string)) private photoData;
//     mapping(uint => mapping(uint => string)) private videoData;
    
//     function addPhoto(uint _caseId, uint _photoId, string memory _ipfsHash) public onlyPolice {
//         photoData[_caseId][_photoId] = _ipfsHash;
//     }
    
//     function addVideo(uint _caseId, uint _videoId, string memory _ipfsHash) public onlyPolice {
//         videoData[_caseId][_videoId] = _ipfsHash;
//     }
    
//     function getPhoto(uint _caseId, uint _photoId) public view returns (string memory) {
//         return photoData[_caseId][_photoId];
//     }
    
//     function getVideo(uint _caseId, uint _videoId) public view returns (string memory) {
//         return videoData[_caseId][_videoId];
//     }
// }
