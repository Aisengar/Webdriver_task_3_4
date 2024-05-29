const { machineType } = require("../page/cloud_google_add.page");

const testdata = {
    machineType: 'n1-standard-8, vCPUs: 8, RAM: 30 GB',
    gpuModel: 'NVIDIA TESLA P100',
    numberOfGPUs: '1',
    localSSD: '2x375 GB',
    region: 'Oregon (us-west1)',
    committedUse: '1 year',
    numberOfInstances: '4',
    osSoftware: 'Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)',
    provisioningModel: 'Regular',
    totalcost: '',

    //test data
    machineTypeOption: 'n1-standard-8',
    gpuModelOption: 'NVIDIA TESLA P100',
    localSSDOption: '2x375 GB',
    regionOption: 'Oregon (us-west1)',
    committedUseOption: '1 year',
    numberOfInstancesOption: '4',
    osSoftwareOption: 'Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)',
    provisioningModelOption: 'Regular',
};

module.exports = { testdata };