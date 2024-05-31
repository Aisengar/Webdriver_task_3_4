const testdata = {

    //test data dev
    smokeUrl: 'https://cloud.google.com/products/calculator',
    serchInputWord: 'Google Cloud Platform Pricing Calculator',
    machineTypeOption: 'n1-standard-16',
    gpuModelOption: 'nvidia-tesla-k80',
    localSSDOption: '6x375 GB',
    data_value: '6',//This is part of the SSD option
    regionOption: 'europe-west1',
    committedUseOption: '3',// otion 1 = none, option 2 = 1 year and option 3 = 3 years
    numberOfInstancesOption: '2',
    osSoftwareOption: 'paid-red-hat-enterprise-linux-for-sap-with-ha-and-update-services',
    provisioningModelOption: 'Spot (Preemptible VM)',

    //verification for the summary dev
    machineType: 'n1-standard-16, vCPUs: 16, RAM: 60 GB',
    gpuModel: 'NVIDIA TESLA K80',
    localSSD: '6x375 GB',
    region: 'Belgium (europe-west1)',
    committedUse: '3 years',
    numberOfInstances: '2',
    osSoftware: 'Paid: Red Hat Enterprise Linux for SAP with HA and Update Services',
    provisioningModel: 'Spot (Preemptible VM)',
    totalcost: '',

};

module.exports = { testdata };