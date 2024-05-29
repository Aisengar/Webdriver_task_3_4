
const testdata = {
    //options for test data qa
    machineTypeOption: 'n1-standard-8',
    gpuModelOption: 'nvidia-tesla-p100',
    localSSDOption: '2x375 GB',
    regionOption: 'us-west1',
    committedUseOption: '1 year',
    numberOfInstancesOption: '4',
    osSoftwareOption: 'free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license',
    provisioningModelOption: 'Regular',
    data_value: '2',

    //verification for the summary qa
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

};

module.exports = { testdata };