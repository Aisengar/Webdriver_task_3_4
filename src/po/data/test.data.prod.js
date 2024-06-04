
const testdata = {
    //options for test data prod
    smokeUrl: 'https://cloud.google.com/products/calculator',
    serchInputWord: 'Google Cloud Platform Pricing Calculator',
    machineTypeOption: 'n1-standard-8',
    gpuModelOption: 'nvidia-tesla-p100',
    localSSDOption: '2x375 GB',
    data_value: '2',//This is part of the SSD option
    regionOption: 'us-west1',
    committedUseOption: '2',// otion 1 = none, option 2 = 1 year and option 3 = 3 years
    numberOfInstancesOption: '4',
    osSoftwareOption: 'free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license',
    provisioningModelOption: 'Regular',
    
    summary: {
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
    }
};

module.exports = { testdata };