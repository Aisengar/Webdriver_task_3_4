const testDataDev = {

    //test data dev
    machineTypeOption: 'n1-standard-16',
    gpuModelOption: 'nvidia-tesla-k80',
    localSSDOption: '6x375 GB',
    regionOption: 'europe-west1',
    committedUseOption: '1 year',
    numberOfInstancesOption: '1',
    osSoftwareOption: 'paid-red-hat-enterprise-linux-for-sap-with-ha-and-update-services',
    provisioningModelOption: 'Spot (Preemptible VM)',
    data_value: '6',

    //verification for the summary dev
    machineType: '',
    gpuModel: '',
    numberOfGPUs: '',
    localSSD: '',
    region: '',
    committedUse: '',
    numberOfInstances: '',
    osSoftware: '',
    provisioningModel: '',
    totalcost: '',
};

module.exports = { testDataDev };