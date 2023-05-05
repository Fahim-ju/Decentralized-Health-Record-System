import web3 from './web3';
const address = '0x84eE0F5f8Ed83b72FbC98D9e9D480CA0475e1931';
const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_adharCardNumber",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_name",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_addres",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_phoneNo",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_bloodGroup",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_insuranceCompany",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_emergencyContact",
          "type": "uint256"
        }
      ],
      "name": "addPatientInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_adharCardNumber",
          "type": "uint256"
        }
      ],
      "name": "getPatientInfo",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "addres",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "phoneNo",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "bloodGroup",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "insuranceCompany",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "emergencyContacts",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "Precautions",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_adharCardNumber",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_Precautions",
          "type": "bytes32"
        }
      ],
      "name": "UpdatePrecautions",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_companyId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_name",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "phone_no",
          "type": "uint256"
        }
      ],
      "name": "addInsurancecompany",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "Insu_id",
          "type": "uint256"
        }
      ],
      "name": "getInsuranceCompany",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "phoneNo",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_Medication",
          "type": "bytes32"
        }
      ],
      "name": "addNotCoverdMedicationInInsurance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint64",
          "name": "_adharCardNumber",
          "type": "uint64"
        }
      ],
      "name": "applyForInsurance",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "InsuranceStatus",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "patient_id",
          "type": "uint256"
        }
      ],
      "name": "createTreatmentID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "patient_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "doctor_id",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "diagnosis",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "test_conducted",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "bill",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "medicine",
          "type": "bytes32"
        }
      ],
      "name": "TreatPatient",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tid",
          "type": "uint256"
        }
      ],
      "name": "getTreatmentDetails",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "p_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "d_id",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "diagnosis",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "test_conducted",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "bill",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "medicine",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "p_id",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_medication",
          "type": "bytes32"
        }
      ],
      "name": "addInsuranceKeep",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "doc_id",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "practice_type",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "area_of_expertize",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "phone_no",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "Address",
          "type": "bytes32"
        }
      ],
      "name": "addDoctor",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_d_id",
          "type": "uint256"
        }
      ],
      "name": "getDoctorDetails",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "doc_id",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "practice_type",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "area_of_expertize",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "phone_no",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "Address",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_adharCardNumber",
          "type": "uint256"
        }
      ],
      "name": "requestAccessToPatient",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_adharCardNumber",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "OTP",
          "type": "uint256"
        }
      ],
      "name": "getDetailsOfAllTID",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "chem_id",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "Address",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "phone_no",
          "type": "uint256"
        }
      ],
      "name": "addChemist",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "chem_id",
          "type": "uint256"
        }
      ],
      "name": "getchemistinfo",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "Address",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "phone_no",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "p_id",
          "type": "uint256"
        }
      ],
      "name": "giveMedicines",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "Identify",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "val",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
export default new web3.eth.Contract(abi, address);