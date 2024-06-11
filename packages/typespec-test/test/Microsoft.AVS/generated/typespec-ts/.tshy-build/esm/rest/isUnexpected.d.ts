import { OperationsList200Response, OperationsListDefaultResponse, LocationsCheckTrialAvailability200Response, LocationsCheckTrialAvailabilityDefaultResponse, LocationsCheckQuotaAvailability200Response, LocationsCheckQuotaAvailabilityDefaultResponse, PrivateCloudsListByResourceGroup200Response, PrivateCloudsListByResourceGroupDefaultResponse, PrivateCloudsListInSubscription200Response, PrivateCloudsListInSubscriptionDefaultResponse, PrivateCloudsGet200Response, PrivateCloudsGetDefaultResponse, PrivateCloudsCreateOrUpdate200Response, PrivateCloudsCreateOrUpdate201Response, PrivateCloudsCreateOrUpdateLogicalResponse, PrivateCloudsCreateOrUpdateDefaultResponse, PrivateCloudsUpdate200Response, PrivateCloudsUpdate201Response, PrivateCloudsUpdateDefaultResponse, PrivateCloudsDelete200Response, PrivateCloudsDelete202Response, PrivateCloudsDelete204Response, PrivateCloudsDeleteLogicalResponse, PrivateCloudsDeleteDefaultResponse, PrivateCloudsRotateVcenterPassword202Response, PrivateCloudsRotateVcenterPassword204Response, PrivateCloudsRotateVcenterPasswordLogicalResponse, PrivateCloudsRotateVcenterPasswordDefaultResponse, PrivateCloudsRotateNsxtPassword202Response, PrivateCloudsRotateNsxtPassword204Response, PrivateCloudsRotateNsxtPasswordLogicalResponse, PrivateCloudsRotateNsxtPasswordDefaultResponse, PrivateCloudsListAdminCredentials200Response, PrivateCloudsListAdminCredentialsDefaultResponse, ClustersListByPrivateCloud200Response, ClustersListByPrivateCloudDefaultResponse, ClustersGet200Response, ClustersGetDefaultResponse, ClustersCreateOrUpdate200Response, ClustersCreateOrUpdate201Response, ClustersCreateOrUpdateLogicalResponse, ClustersCreateOrUpdateDefaultResponse, ClustersUpdate200Response, ClustersUpdate201Response, ClustersUpdateDefaultResponse, ClustersDelete200Response, ClustersDelete202Response, ClustersDelete204Response, ClustersDeleteLogicalResponse, ClustersDeleteDefaultResponse, ClustersListZones200Response, ClustersListZonesDefaultResponse, DatastoresListByCluster200Response, DatastoresListByClusterDefaultResponse, DatastoresGet200Response, DatastoresGetDefaultResponse, DatastoresCreateOrUpdate200Response, DatastoresCreateOrUpdate201Response, DatastoresCreateOrUpdateLogicalResponse, DatastoresCreateOrUpdateDefaultResponse, DatastoresDelete200Response, DatastoresDelete202Response, DatastoresDelete204Response, DatastoresDeleteLogicalResponse, DatastoresDeleteDefaultResponse, HcxEnterpriseSitesListByPrivateCloud200Response, HcxEnterpriseSitesListByPrivateCloudDefaultResponse, HcxEnterpriseSitesGet200Response, HcxEnterpriseSitesGetDefaultResponse, HcxEnterpriseSitesCreateOrUpdate200Response, HcxEnterpriseSitesCreateOrUpdate201Response, HcxEnterpriseSitesCreateOrUpdateDefaultResponse, HcxEnterpriseSitesDelete200Response, HcxEnterpriseSitesDelete204Response, HcxEnterpriseSitesDeleteDefaultResponse, AuthorizationsListByPrivateCloud200Response, AuthorizationsListByPrivateCloudDefaultResponse, AuthorizationsGet200Response, AuthorizationsGetDefaultResponse, AuthorizationsCreateOrUpdate200Response, AuthorizationsCreateOrUpdate201Response, AuthorizationsCreateOrUpdateLogicalResponse, AuthorizationsCreateOrUpdateDefaultResponse, AuthorizationsDelete200Response, AuthorizationsDelete202Response, AuthorizationsDelete204Response, AuthorizationsDeleteLogicalResponse, AuthorizationsDeleteDefaultResponse, GlobalReachConnectionsListByPrivateCloud200Response, GlobalReachConnectionsListByPrivateCloudDefaultResponse, GlobalReachConnectionsGet200Response, GlobalReachConnectionsGetDefaultResponse, GlobalReachConnectionsCreateOrUpdate200Response, GlobalReachConnectionsCreateOrUpdate201Response, GlobalReachConnectionsCreateOrUpdateLogicalResponse, GlobalReachConnectionsCreateOrUpdateDefaultResponse, GlobalReachConnectionsDelete200Response, GlobalReachConnectionsDelete202Response, GlobalReachConnectionsDelete204Response, GlobalReachConnectionsDeleteLogicalResponse, GlobalReachConnectionsDeleteDefaultResponse, WorkloadNetworksGet200Response, WorkloadNetworksGetDefaultResponse, WorkloadNetworksListByPrivateCloud200Response, WorkloadNetworksListByPrivateCloudDefaultResponse, WorkloadNetworkSegmentsListByWorkloadNetwork200Response, WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse, WorkloadNetworkSegmentsGet200Response, WorkloadNetworkSegmentsGetDefaultResponse, WorkloadNetworkSegmentsCreate200Response, WorkloadNetworkSegmentsCreate201Response, WorkloadNetworkSegmentsCreateLogicalResponse, WorkloadNetworkSegmentsCreateDefaultResponse, WorkloadNetworkSegmentsUpdate200Response, WorkloadNetworkSegmentsUpdate202Response, WorkloadNetworkSegmentsUpdateLogicalResponse, WorkloadNetworkSegmentsUpdateDefaultResponse, WorkloadNetworkSegmentsDeleteSegment200Response, WorkloadNetworkSegmentsDeleteSegment202Response, WorkloadNetworkSegmentsDeleteSegment204Response, WorkloadNetworkSegmentsDeleteSegmentLogicalResponse, WorkloadNetworkSegmentsDeleteSegmentDefaultResponse, WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response, WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse, WorkloadNetworkDhcpConfigurationsGet200Response, WorkloadNetworkDhcpConfigurationsGetDefaultResponse, WorkloadNetworkDhcpConfigurationsCreate200Response, WorkloadNetworkDhcpConfigurationsCreate201Response, WorkloadNetworkDhcpConfigurationsCreateLogicalResponse, WorkloadNetworkDhcpConfigurationsCreateDefaultResponse, WorkloadNetworkDhcpConfigurationsUpdate200Response, WorkloadNetworkDhcpConfigurationsUpdate202Response, WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse, WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse, WorkloadNetworkDhcpConfigurationsDelete200Response, WorkloadNetworkDhcpConfigurationsDelete202Response, WorkloadNetworkDhcpConfigurationsDelete204Response, WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse, WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse, WorkloadNetworkGatewaysListByWorkloadNetwork200Response, WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse, WorkloadNetworkGatewaysGet200Response, WorkloadNetworkGatewaysGetDefaultResponse, WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork200Response, WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse, WorkloadNetworkPortMirroringProfilesGet200Response, WorkloadNetworkPortMirroringProfilesGetDefaultResponse, WorkloadNetworkPortMirroringProfilesCreate200Response, WorkloadNetworkPortMirroringProfilesCreate201Response, WorkloadNetworkPortMirroringProfilesCreateLogicalResponse, WorkloadNetworkPortMirroringProfilesCreateDefaultResponse, WorkloadNetworkPortMirroringProfilesUpdate200Response, WorkloadNetworkPortMirroringProfilesUpdate202Response, WorkloadNetworkPortMirroringProfilesUpdateLogicalResponse, WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse, WorkloadNetworkPortMirroringProfilesDelete200Response, WorkloadNetworkPortMirroringProfilesDelete202Response, WorkloadNetworkPortMirroringProfilesDelete204Response, WorkloadNetworkPortMirroringProfilesDeleteLogicalResponse, WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse, WorkloadNetworkVmGroupsListByWorkloadNetwork200Response, WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse, WorkloadNetworkVmGroupsGet200Response, WorkloadNetworkVmGroupsGetDefaultResponse, WorkloadNetworkVmGroupsCreate200Response, WorkloadNetworkVmGroupsCreate201Response, WorkloadNetworkVmGroupsCreateLogicalResponse, WorkloadNetworkVmGroupsCreateDefaultResponse, WorkloadNetworkVmGroupsUpdate200Response, WorkloadNetworkVmGroupsUpdate202Response, WorkloadNetworkVmGroupsUpdateLogicalResponse, WorkloadNetworkVmGroupsUpdateDefaultResponse, WorkloadNetworkVmGroupsDelete200Response, WorkloadNetworkVmGroupsDelete202Response, WorkloadNetworkVmGroupsDelete204Response, WorkloadNetworkVmGroupsDeleteLogicalResponse, WorkloadNetworkVmGroupsDeleteDefaultResponse, WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response, WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse, WorkloadNetworkVirtualMachinesGet200Response, WorkloadNetworkVirtualMachinesGetDefaultResponse, WorkloadNetworkDnsServicesListByWorkloadNetwork200Response, WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse, WorkloadNetworkDnsServicesGet200Response, WorkloadNetworkDnsServicesGetDefaultResponse, WorkloadNetworkDnsServicesCreate200Response, WorkloadNetworkDnsServicesCreate201Response, WorkloadNetworkDnsServicesCreateLogicalResponse, WorkloadNetworkDnsServicesCreateDefaultResponse, WorkloadNetworkDnsServicesUpdate200Response, WorkloadNetworkDnsServicesUpdate202Response, WorkloadNetworkDnsServicesUpdateLogicalResponse, WorkloadNetworkDnsServicesUpdateDefaultResponse, WorkloadNetworkDnsServicesDelete200Response, WorkloadNetworkDnsServicesDelete202Response, WorkloadNetworkDnsServicesDelete204Response, WorkloadNetworkDnsServicesDeleteLogicalResponse, WorkloadNetworkDnsServicesDeleteDefaultResponse, WorkloadNetworkDnsZonesListByWorkloadNetwork200Response, WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse, WorkloadNetworkDnsZonesGet200Response, WorkloadNetworkDnsZonesGetDefaultResponse, WorkloadNetworkDnsZonesCreate200Response, WorkloadNetworkDnsZonesCreate201Response, WorkloadNetworkDnsZonesCreateLogicalResponse, WorkloadNetworkDnsZonesCreateDefaultResponse, WorkloadNetworkDnsZonesUpdate200Response, WorkloadNetworkDnsZonesUpdate202Response, WorkloadNetworkDnsZonesUpdateLogicalResponse, WorkloadNetworkDnsZonesUpdateDefaultResponse, WorkloadNetworkDnsZonesDelete200Response, WorkloadNetworkDnsZonesDelete202Response, WorkloadNetworkDnsZonesDelete204Response, WorkloadNetworkDnsZonesDeleteLogicalResponse, WorkloadNetworkDnsZonesDeleteDefaultResponse, WorkloadNetworkPublicIpsListByWorkloadNetwork200Response, WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse, WorkloadNetworkPublicIpsGet200Response, WorkloadNetworkPublicIpsGetDefaultResponse, WorkloadNetworkPublicIpsCreate200Response, WorkloadNetworkPublicIpsCreate201Response, WorkloadNetworkPublicIpsCreateLogicalResponse, WorkloadNetworkPublicIpsCreateDefaultResponse, WorkloadNetworkPublicIpsDelete200Response, WorkloadNetworkPublicIpsDelete202Response, WorkloadNetworkPublicIpsDelete204Response, WorkloadNetworkPublicIpsDeleteLogicalResponse, WorkloadNetworkPublicIpsDeleteDefaultResponse, CloudLinksListByPrivateCloud200Response, CloudLinksListByPrivateCloudDefaultResponse, CloudLinksGet200Response, CloudLinksGetDefaultResponse, CloudLinksCreateOrUpdate200Response, CloudLinksCreateOrUpdate201Response, CloudLinksCreateOrUpdateLogicalResponse, CloudLinksCreateOrUpdateDefaultResponse, CloudLinksDelete200Response, CloudLinksDelete202Response, CloudLinksDelete204Response, CloudLinksDeleteLogicalResponse, CloudLinksDeleteDefaultResponse, AddonsListByPrivateCloud200Response, AddonsListByPrivateCloudDefaultResponse, AddonsGet200Response, AddonsGetDefaultResponse, AddonsCreateOrUpdate200Response, AddonsCreateOrUpdate201Response, AddonsCreateOrUpdateLogicalResponse, AddonsCreateOrUpdateDefaultResponse, AddonsDelete200Response, AddonsDelete202Response, AddonsDelete204Response, AddonsDeleteLogicalResponse, AddonsDeleteDefaultResponse, VirtualMachinesListByCluster200Response, VirtualMachinesListByClusterDefaultResponse, VirtualMachinesGet200Response, VirtualMachinesGetDefaultResponse, VirtualMachinesRestrictMovement202Response, VirtualMachinesRestrictMovementLogicalResponse, VirtualMachinesRestrictMovementDefaultResponse, PlacementPoliciesListByCluster200Response, PlacementPoliciesListByClusterDefaultResponse, PlacementPoliciesGet200Response, PlacementPoliciesGetDefaultResponse, PlacementPoliciesCreateOrUpdate200Response, PlacementPoliciesCreateOrUpdate201Response, PlacementPoliciesCreateOrUpdateLogicalResponse, PlacementPoliciesCreateOrUpdateDefaultResponse, PlacementPoliciesUpdate200Response, PlacementPoliciesUpdate202Response, PlacementPoliciesUpdateDefaultResponse, PlacementPoliciesDelete200Response, PlacementPoliciesDelete202Response, PlacementPoliciesDelete204Response, PlacementPoliciesDeleteLogicalResponse, PlacementPoliciesDeleteDefaultResponse, ScriptPackagesListByPrivateCloud200Response, ScriptPackagesListByPrivateCloudDefaultResponse, ScriptPackagesGet200Response, ScriptPackagesGetDefaultResponse, ScriptCmdletsListByScriptPackage200Response, ScriptCmdletsListByScriptPackageDefaultResponse, ScriptCmdletsGet200Response, ScriptCmdletsGetDefaultResponse, ScriptExecutionsListByPrivateCloud200Response, ScriptExecutionsListByPrivateCloudDefaultResponse, ScriptExecutionsGet200Response, ScriptExecutionsGetDefaultResponse, ScriptExecutionsCreateOrUpdate200Response, ScriptExecutionsCreateOrUpdate201Response, ScriptExecutionsCreateOrUpdateLogicalResponse, ScriptExecutionsCreateOrUpdateDefaultResponse, ScriptExecutionsDelete200Response, ScriptExecutionsDelete202Response, ScriptExecutionsDelete204Response, ScriptExecutionsDeleteLogicalResponse, ScriptExecutionsDeleteDefaultResponse, ScriptExecutionsGetExecutionLogs200Response, ScriptExecutionsGetExecutionLogsDefaultResponse, IscsiPathsListByPrivateCloud200Response, IscsiPathsListByPrivateCloudDefaultResponse, IscsiPathsGet200Response, IscsiPathsGetDefaultResponse, IscsiPathsCreateOrUpdate200Response, IscsiPathsCreateOrUpdate201Response, IscsiPathsCreateOrUpdateLogicalResponse, IscsiPathsCreateOrUpdateDefaultResponse, IscsiPathsDelete200Response, IscsiPathsDelete202Response, IscsiPathsDelete204Response, IscsiPathsDeleteLogicalResponse, IscsiPathsDeleteDefaultResponse } from "./responses.js";
export declare function isUnexpected(response: OperationsList200Response | OperationsListDefaultResponse): response is OperationsListDefaultResponse;
export declare function isUnexpected(response: LocationsCheckTrialAvailability200Response | LocationsCheckTrialAvailabilityDefaultResponse): response is LocationsCheckTrialAvailabilityDefaultResponse;
export declare function isUnexpected(response: LocationsCheckQuotaAvailability200Response | LocationsCheckQuotaAvailabilityDefaultResponse): response is LocationsCheckQuotaAvailabilityDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsListByResourceGroup200Response | PrivateCloudsListByResourceGroupDefaultResponse): response is PrivateCloudsListByResourceGroupDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsListInSubscription200Response | PrivateCloudsListInSubscriptionDefaultResponse): response is PrivateCloudsListInSubscriptionDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsGet200Response | PrivateCloudsGetDefaultResponse): response is PrivateCloudsGetDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsCreateOrUpdate200Response | PrivateCloudsCreateOrUpdate201Response | PrivateCloudsCreateOrUpdateLogicalResponse | PrivateCloudsCreateOrUpdateDefaultResponse): response is PrivateCloudsCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsUpdate200Response | PrivateCloudsUpdate201Response | PrivateCloudsUpdateDefaultResponse): response is PrivateCloudsUpdateDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsDelete200Response | PrivateCloudsDelete202Response | PrivateCloudsDelete204Response | PrivateCloudsDeleteLogicalResponse | PrivateCloudsDeleteDefaultResponse): response is PrivateCloudsDeleteDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsRotateVcenterPassword202Response | PrivateCloudsRotateVcenterPassword204Response | PrivateCloudsRotateVcenterPasswordLogicalResponse | PrivateCloudsRotateVcenterPasswordDefaultResponse): response is PrivateCloudsRotateVcenterPasswordDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsRotateNsxtPassword202Response | PrivateCloudsRotateNsxtPassword204Response | PrivateCloudsRotateNsxtPasswordLogicalResponse | PrivateCloudsRotateNsxtPasswordDefaultResponse): response is PrivateCloudsRotateNsxtPasswordDefaultResponse;
export declare function isUnexpected(response: PrivateCloudsListAdminCredentials200Response | PrivateCloudsListAdminCredentialsDefaultResponse): response is PrivateCloudsListAdminCredentialsDefaultResponse;
export declare function isUnexpected(response: ClustersListByPrivateCloud200Response | ClustersListByPrivateCloudDefaultResponse): response is ClustersListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: ClustersGet200Response | ClustersGetDefaultResponse): response is ClustersGetDefaultResponse;
export declare function isUnexpected(response: ClustersCreateOrUpdate200Response | ClustersCreateOrUpdate201Response | ClustersCreateOrUpdateLogicalResponse | ClustersCreateOrUpdateDefaultResponse): response is ClustersCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: ClustersUpdate200Response | ClustersUpdate201Response | ClustersUpdateDefaultResponse): response is ClustersUpdateDefaultResponse;
export declare function isUnexpected(response: ClustersDelete200Response | ClustersDelete202Response | ClustersDelete204Response | ClustersDeleteLogicalResponse | ClustersDeleteDefaultResponse): response is ClustersDeleteDefaultResponse;
export declare function isUnexpected(response: ClustersListZones200Response | ClustersListZonesDefaultResponse): response is ClustersListZonesDefaultResponse;
export declare function isUnexpected(response: DatastoresListByCluster200Response | DatastoresListByClusterDefaultResponse): response is DatastoresListByClusterDefaultResponse;
export declare function isUnexpected(response: DatastoresGet200Response | DatastoresGetDefaultResponse): response is DatastoresGetDefaultResponse;
export declare function isUnexpected(response: DatastoresCreateOrUpdate200Response | DatastoresCreateOrUpdate201Response | DatastoresCreateOrUpdateLogicalResponse | DatastoresCreateOrUpdateDefaultResponse): response is DatastoresCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: DatastoresDelete200Response | DatastoresDelete202Response | DatastoresDelete204Response | DatastoresDeleteLogicalResponse | DatastoresDeleteDefaultResponse): response is DatastoresDeleteDefaultResponse;
export declare function isUnexpected(response: HcxEnterpriseSitesListByPrivateCloud200Response | HcxEnterpriseSitesListByPrivateCloudDefaultResponse): response is HcxEnterpriseSitesListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: HcxEnterpriseSitesGet200Response | HcxEnterpriseSitesGetDefaultResponse): response is HcxEnterpriseSitesGetDefaultResponse;
export declare function isUnexpected(response: HcxEnterpriseSitesCreateOrUpdate200Response | HcxEnterpriseSitesCreateOrUpdate201Response | HcxEnterpriseSitesCreateOrUpdateDefaultResponse): response is HcxEnterpriseSitesCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: HcxEnterpriseSitesDelete200Response | HcxEnterpriseSitesDelete204Response | HcxEnterpriseSitesDeleteDefaultResponse): response is HcxEnterpriseSitesDeleteDefaultResponse;
export declare function isUnexpected(response: AuthorizationsListByPrivateCloud200Response | AuthorizationsListByPrivateCloudDefaultResponse): response is AuthorizationsListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: AuthorizationsGet200Response | AuthorizationsGetDefaultResponse): response is AuthorizationsGetDefaultResponse;
export declare function isUnexpected(response: AuthorizationsCreateOrUpdate200Response | AuthorizationsCreateOrUpdate201Response | AuthorizationsCreateOrUpdateLogicalResponse | AuthorizationsCreateOrUpdateDefaultResponse): response is AuthorizationsCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: AuthorizationsDelete200Response | AuthorizationsDelete202Response | AuthorizationsDelete204Response | AuthorizationsDeleteLogicalResponse | AuthorizationsDeleteDefaultResponse): response is AuthorizationsDeleteDefaultResponse;
export declare function isUnexpected(response: GlobalReachConnectionsListByPrivateCloud200Response | GlobalReachConnectionsListByPrivateCloudDefaultResponse): response is GlobalReachConnectionsListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: GlobalReachConnectionsGet200Response | GlobalReachConnectionsGetDefaultResponse): response is GlobalReachConnectionsGetDefaultResponse;
export declare function isUnexpected(response: GlobalReachConnectionsCreateOrUpdate200Response | GlobalReachConnectionsCreateOrUpdate201Response | GlobalReachConnectionsCreateOrUpdateLogicalResponse | GlobalReachConnectionsCreateOrUpdateDefaultResponse): response is GlobalReachConnectionsCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: GlobalReachConnectionsDelete200Response | GlobalReachConnectionsDelete202Response | GlobalReachConnectionsDelete204Response | GlobalReachConnectionsDeleteLogicalResponse | GlobalReachConnectionsDeleteDefaultResponse): response is GlobalReachConnectionsDeleteDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworksGet200Response | WorkloadNetworksGetDefaultResponse): response is WorkloadNetworksGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworksListByPrivateCloud200Response | WorkloadNetworksListByPrivateCloudDefaultResponse): response is WorkloadNetworksListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkSegmentsListByWorkloadNetwork200Response | WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkSegmentsGet200Response | WorkloadNetworkSegmentsGetDefaultResponse): response is WorkloadNetworkSegmentsGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkSegmentsCreate200Response | WorkloadNetworkSegmentsCreate201Response | WorkloadNetworkSegmentsCreateLogicalResponse | WorkloadNetworkSegmentsCreateDefaultResponse): response is WorkloadNetworkSegmentsCreateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkSegmentsUpdate200Response | WorkloadNetworkSegmentsUpdate202Response | WorkloadNetworkSegmentsUpdateLogicalResponse | WorkloadNetworkSegmentsUpdateDefaultResponse): response is WorkloadNetworkSegmentsUpdateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkSegmentsDeleteSegment200Response | WorkloadNetworkSegmentsDeleteSegment202Response | WorkloadNetworkSegmentsDeleteSegment204Response | WorkloadNetworkSegmentsDeleteSegmentLogicalResponse | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse): response is WorkloadNetworkSegmentsDeleteSegmentDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response | WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDhcpConfigurationsGet200Response | WorkloadNetworkDhcpConfigurationsGetDefaultResponse): response is WorkloadNetworkDhcpConfigurationsGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDhcpConfigurationsCreate200Response | WorkloadNetworkDhcpConfigurationsCreate201Response | WorkloadNetworkDhcpConfigurationsCreateLogicalResponse | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse): response is WorkloadNetworkDhcpConfigurationsCreateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDhcpConfigurationsUpdate200Response | WorkloadNetworkDhcpConfigurationsUpdate202Response | WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse): response is WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDhcpConfigurationsDelete200Response | WorkloadNetworkDhcpConfigurationsDelete202Response | WorkloadNetworkDhcpConfigurationsDelete204Response | WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse): response is WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkGatewaysListByWorkloadNetwork200Response | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkGatewaysGet200Response | WorkloadNetworkGatewaysGetDefaultResponse): response is WorkloadNetworkGatewaysGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork200Response | WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPortMirroringProfilesGet200Response | WorkloadNetworkPortMirroringProfilesGetDefaultResponse): response is WorkloadNetworkPortMirroringProfilesGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPortMirroringProfilesCreate200Response | WorkloadNetworkPortMirroringProfilesCreate201Response | WorkloadNetworkPortMirroringProfilesCreateLogicalResponse | WorkloadNetworkPortMirroringProfilesCreateDefaultResponse): response is WorkloadNetworkPortMirroringProfilesCreateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPortMirroringProfilesUpdate200Response | WorkloadNetworkPortMirroringProfilesUpdate202Response | WorkloadNetworkPortMirroringProfilesUpdateLogicalResponse | WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse): response is WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPortMirroringProfilesDelete200Response | WorkloadNetworkPortMirroringProfilesDelete202Response | WorkloadNetworkPortMirroringProfilesDelete204Response | WorkloadNetworkPortMirroringProfilesDeleteLogicalResponse | WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse): response is WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkVmGroupsListByWorkloadNetwork200Response | WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkVmGroupsGet200Response | WorkloadNetworkVmGroupsGetDefaultResponse): response is WorkloadNetworkVmGroupsGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkVmGroupsCreate200Response | WorkloadNetworkVmGroupsCreate201Response | WorkloadNetworkVmGroupsCreateLogicalResponse | WorkloadNetworkVmGroupsCreateDefaultResponse): response is WorkloadNetworkVmGroupsCreateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkVmGroupsUpdate200Response | WorkloadNetworkVmGroupsUpdate202Response | WorkloadNetworkVmGroupsUpdateLogicalResponse | WorkloadNetworkVmGroupsUpdateDefaultResponse): response is WorkloadNetworkVmGroupsUpdateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkVmGroupsDelete200Response | WorkloadNetworkVmGroupsDelete202Response | WorkloadNetworkVmGroupsDelete204Response | WorkloadNetworkVmGroupsDeleteLogicalResponse | WorkloadNetworkVmGroupsDeleteDefaultResponse): response is WorkloadNetworkVmGroupsDeleteDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkVirtualMachinesGet200Response | WorkloadNetworkVirtualMachinesGetDefaultResponse): response is WorkloadNetworkVirtualMachinesGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsServicesListByWorkloadNetwork200Response | WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsServicesGet200Response | WorkloadNetworkDnsServicesGetDefaultResponse): response is WorkloadNetworkDnsServicesGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsServicesCreate200Response | WorkloadNetworkDnsServicesCreate201Response | WorkloadNetworkDnsServicesCreateLogicalResponse | WorkloadNetworkDnsServicesCreateDefaultResponse): response is WorkloadNetworkDnsServicesCreateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsServicesUpdate200Response | WorkloadNetworkDnsServicesUpdate202Response | WorkloadNetworkDnsServicesUpdateLogicalResponse | WorkloadNetworkDnsServicesUpdateDefaultResponse): response is WorkloadNetworkDnsServicesUpdateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsServicesDelete200Response | WorkloadNetworkDnsServicesDelete202Response | WorkloadNetworkDnsServicesDelete204Response | WorkloadNetworkDnsServicesDeleteLogicalResponse | WorkloadNetworkDnsServicesDeleteDefaultResponse): response is WorkloadNetworkDnsServicesDeleteDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsZonesListByWorkloadNetwork200Response | WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsZonesGet200Response | WorkloadNetworkDnsZonesGetDefaultResponse): response is WorkloadNetworkDnsZonesGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsZonesCreate200Response | WorkloadNetworkDnsZonesCreate201Response | WorkloadNetworkDnsZonesCreateLogicalResponse | WorkloadNetworkDnsZonesCreateDefaultResponse): response is WorkloadNetworkDnsZonesCreateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsZonesUpdate200Response | WorkloadNetworkDnsZonesUpdate202Response | WorkloadNetworkDnsZonesUpdateLogicalResponse | WorkloadNetworkDnsZonesUpdateDefaultResponse): response is WorkloadNetworkDnsZonesUpdateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkDnsZonesDelete200Response | WorkloadNetworkDnsZonesDelete202Response | WorkloadNetworkDnsZonesDelete204Response | WorkloadNetworkDnsZonesDeleteLogicalResponse | WorkloadNetworkDnsZonesDeleteDefaultResponse): response is WorkloadNetworkDnsZonesDeleteDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPublicIpsListByWorkloadNetwork200Response | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse): response is WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPublicIpsGet200Response | WorkloadNetworkPublicIpsGetDefaultResponse): response is WorkloadNetworkPublicIpsGetDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPublicIpsCreate200Response | WorkloadNetworkPublicIpsCreate201Response | WorkloadNetworkPublicIpsCreateLogicalResponse | WorkloadNetworkPublicIpsCreateDefaultResponse): response is WorkloadNetworkPublicIpsCreateDefaultResponse;
export declare function isUnexpected(response: WorkloadNetworkPublicIpsDelete200Response | WorkloadNetworkPublicIpsDelete202Response | WorkloadNetworkPublicIpsDelete204Response | WorkloadNetworkPublicIpsDeleteLogicalResponse | WorkloadNetworkPublicIpsDeleteDefaultResponse): response is WorkloadNetworkPublicIpsDeleteDefaultResponse;
export declare function isUnexpected(response: CloudLinksListByPrivateCloud200Response | CloudLinksListByPrivateCloudDefaultResponse): response is CloudLinksListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: CloudLinksGet200Response | CloudLinksGetDefaultResponse): response is CloudLinksGetDefaultResponse;
export declare function isUnexpected(response: CloudLinksCreateOrUpdate200Response | CloudLinksCreateOrUpdate201Response | CloudLinksCreateOrUpdateLogicalResponse | CloudLinksCreateOrUpdateDefaultResponse): response is CloudLinksCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: CloudLinksDelete200Response | CloudLinksDelete202Response | CloudLinksDelete204Response | CloudLinksDeleteLogicalResponse | CloudLinksDeleteDefaultResponse): response is CloudLinksDeleteDefaultResponse;
export declare function isUnexpected(response: AddonsListByPrivateCloud200Response | AddonsListByPrivateCloudDefaultResponse): response is AddonsListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: AddonsGet200Response | AddonsGetDefaultResponse): response is AddonsGetDefaultResponse;
export declare function isUnexpected(response: AddonsCreateOrUpdate200Response | AddonsCreateOrUpdate201Response | AddonsCreateOrUpdateLogicalResponse | AddonsCreateOrUpdateDefaultResponse): response is AddonsCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: AddonsDelete200Response | AddonsDelete202Response | AddonsDelete204Response | AddonsDeleteLogicalResponse | AddonsDeleteDefaultResponse): response is AddonsDeleteDefaultResponse;
export declare function isUnexpected(response: VirtualMachinesListByCluster200Response | VirtualMachinesListByClusterDefaultResponse): response is VirtualMachinesListByClusterDefaultResponse;
export declare function isUnexpected(response: VirtualMachinesGet200Response | VirtualMachinesGetDefaultResponse): response is VirtualMachinesGetDefaultResponse;
export declare function isUnexpected(response: VirtualMachinesRestrictMovement202Response | VirtualMachinesRestrictMovementLogicalResponse | VirtualMachinesRestrictMovementDefaultResponse): response is VirtualMachinesRestrictMovementDefaultResponse;
export declare function isUnexpected(response: PlacementPoliciesListByCluster200Response | PlacementPoliciesListByClusterDefaultResponse): response is PlacementPoliciesListByClusterDefaultResponse;
export declare function isUnexpected(response: PlacementPoliciesGet200Response | PlacementPoliciesGetDefaultResponse): response is PlacementPoliciesGetDefaultResponse;
export declare function isUnexpected(response: PlacementPoliciesCreateOrUpdate200Response | PlacementPoliciesCreateOrUpdate201Response | PlacementPoliciesCreateOrUpdateLogicalResponse | PlacementPoliciesCreateOrUpdateDefaultResponse): response is PlacementPoliciesCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: PlacementPoliciesUpdate200Response | PlacementPoliciesUpdate202Response | PlacementPoliciesUpdateDefaultResponse): response is PlacementPoliciesUpdateDefaultResponse;
export declare function isUnexpected(response: PlacementPoliciesDelete200Response | PlacementPoliciesDelete202Response | PlacementPoliciesDelete204Response | PlacementPoliciesDeleteLogicalResponse | PlacementPoliciesDeleteDefaultResponse): response is PlacementPoliciesDeleteDefaultResponse;
export declare function isUnexpected(response: ScriptPackagesListByPrivateCloud200Response | ScriptPackagesListByPrivateCloudDefaultResponse): response is ScriptPackagesListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: ScriptPackagesGet200Response | ScriptPackagesGetDefaultResponse): response is ScriptPackagesGetDefaultResponse;
export declare function isUnexpected(response: ScriptCmdletsListByScriptPackage200Response | ScriptCmdletsListByScriptPackageDefaultResponse): response is ScriptCmdletsListByScriptPackageDefaultResponse;
export declare function isUnexpected(response: ScriptCmdletsGet200Response | ScriptCmdletsGetDefaultResponse): response is ScriptCmdletsGetDefaultResponse;
export declare function isUnexpected(response: ScriptExecutionsListByPrivateCloud200Response | ScriptExecutionsListByPrivateCloudDefaultResponse): response is ScriptExecutionsListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: ScriptExecutionsGet200Response | ScriptExecutionsGetDefaultResponse): response is ScriptExecutionsGetDefaultResponse;
export declare function isUnexpected(response: ScriptExecutionsCreateOrUpdate200Response | ScriptExecutionsCreateOrUpdate201Response | ScriptExecutionsCreateOrUpdateLogicalResponse | ScriptExecutionsCreateOrUpdateDefaultResponse): response is ScriptExecutionsCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: ScriptExecutionsDelete200Response | ScriptExecutionsDelete202Response | ScriptExecutionsDelete204Response | ScriptExecutionsDeleteLogicalResponse | ScriptExecutionsDeleteDefaultResponse): response is ScriptExecutionsDeleteDefaultResponse;
export declare function isUnexpected(response: ScriptExecutionsGetExecutionLogs200Response | ScriptExecutionsGetExecutionLogsDefaultResponse): response is ScriptExecutionsGetExecutionLogsDefaultResponse;
export declare function isUnexpected(response: IscsiPathsListByPrivateCloud200Response | IscsiPathsListByPrivateCloudDefaultResponse): response is IscsiPathsListByPrivateCloudDefaultResponse;
export declare function isUnexpected(response: IscsiPathsGet200Response | IscsiPathsGetDefaultResponse): response is IscsiPathsGetDefaultResponse;
export declare function isUnexpected(response: IscsiPathsCreateOrUpdate200Response | IscsiPathsCreateOrUpdate201Response | IscsiPathsCreateOrUpdateLogicalResponse | IscsiPathsCreateOrUpdateDefaultResponse): response is IscsiPathsCreateOrUpdateDefaultResponse;
export declare function isUnexpected(response: IscsiPathsDelete200Response | IscsiPathsDelete202Response | IscsiPathsDelete204Response | IscsiPathsDeleteLogicalResponse | IscsiPathsDeleteDefaultResponse): response is IscsiPathsDeleteDefaultResponse;
//# sourceMappingURL=isUnexpected.d.ts.map