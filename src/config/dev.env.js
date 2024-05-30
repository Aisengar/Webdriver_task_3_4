const testDataDev = {

    //test data dev
    machineTypeOption: 'n1-standard-16',
    gpuModelOption: 'nvidia-tesla-k80',
    localSSDOption: '6x375 GB',
    data_value: '6',//This is part of the SSD option
    regionOption: 'europe-west1',
    committedUseOption: '3',// otion 1 = none, option 2 = 1 year and option 3 = 3 years
    numberOfInstancesOption: '2',
    osSoftwareOption: 'paid-red-hat-enterprise-linux-for-sap-with-ha-and-update-services',
    provisioningModelOption: 'Spot (Preemptible VM)',


};

module.exports = { testDataDev };