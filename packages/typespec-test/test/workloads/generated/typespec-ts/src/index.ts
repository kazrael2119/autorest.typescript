// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export {
  WorkloadsClient,
  WorkloadsClientOptionalParams,
} from "./workloadsClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  TrackedResource,
  SAPApplicationServerInstance,
  SAPApplicationServerProperties,
  LoadBalancerDetails,
  ApplicationServerVmDetails,
  KnownApplicationServerVirtualMachineType,
  ApplicationServerVirtualMachineType,
  StorageInformation,
  KnownSAPVirtualInstanceStatus,
  SAPVirtualInstanceStatus,
  KnownSAPHealthState,
  SAPHealthState,
  KnownSapVirtualInstanceProvisioningState,
  SapVirtualInstanceProvisioningState,
  SAPVirtualInstanceError,
  ErrorDefinition,
  UpdateSAPApplicationInstanceRequest,
  StartRequest,
  OperationStatusResult,
  StopRequest,
  SAPDatabaseInstance,
  SAPDatabaseProperties,
  DatabaseVmDetails,
  UpdateSAPDatabaseInstanceRequest,
  SAPCentralServerInstance,
  SAPCentralServerProperties,
  MessageServerProperties,
  EnqueueServerProperties,
  GatewayServerProperties,
  EnqueueReplicationServerProperties,
  KnownEnqueueReplicationServerType,
  EnqueueReplicationServerType,
  CentralServerVmDetails,
  KnownCentralServerVirtualMachineType,
  CentralServerVirtualMachineType,
  UpdateSAPCentralInstanceRequest,
  SAPVirtualInstance,
  SAPVirtualInstanceProperties,
  KnownSAPEnvironmentType,
  SAPEnvironmentType,
  KnownSAPProductType,
  SAPProductType,
  KnownManagedResourcesNetworkAccessType,
  ManagedResourcesNetworkAccessType,
  SAPConfiguration,
  DiscoveryConfiguration,
  DeploymentConfiguration,
  InfrastructureConfiguration,
  SingleServerConfiguration,
  NetworkConfiguration,
  KnownSAPDatabaseType,
  SAPDatabaseType,
  VirtualMachineConfiguration,
  ImageReference,
  OSProfile,
  OSConfiguration,
  WindowsConfiguration,
  LinuxConfiguration,
  SshConfiguration,
  SshPublicKey,
  SshKeyPair,
  KnownOSType,
  OSType,
  DiskConfiguration,
  DiskVolumeConfiguration,
  DiskSku,
  KnownDiskSkuName,
  DiskSkuName,
  SingleServerCustomResourceNames,
  SingleServerFullResourceNames,
  VirtualMachineResourceNames,
  NetworkInterfaceResourceNames,
  KnownNamingPatternType,
  NamingPatternType,
  ThreeTierConfiguration,
  CentralServerConfiguration,
  ApplicationServerConfiguration,
  DatabaseConfiguration,
  HighAvailabilityConfiguration,
  KnownSAPHighAvailabilityType,
  SAPHighAvailabilityType,
  StorageConfiguration,
  FileShareConfiguration,
  SkipFileShareConfiguration,
  CreateAndMountFileShareConfiguration,
  MountFileShareConfiguration,
  KnownFileShareConfigurationType,
  FileShareConfigurationType,
  ThreeTierCustomResourceNames,
  ThreeTierFullResourceNames,
  CentralServerFullResourceNames,
  LoadBalancerResourceNames,
  ApplicationServerFullResourceNames,
  DatabaseServerFullResourceNames,
  SharedStorageResourceNames,
  KnownSAPDeploymentType,
  SAPDeploymentType,
  SoftwareConfiguration,
  ServiceInitiatedSoftwareConfiguration,
  HighAvailabilitySoftwareConfiguration,
  SAPInstallWithoutOSConfigSoftwareConfiguration,
  ExternalInstallationSoftwareConfiguration,
  KnownSAPSoftwareInstallationType,
  SAPSoftwareInstallationType,
  DeploymentWithOSConfiguration,
  OsSapConfiguration,
  DeployerVmPackages,
  KnownSAPConfigurationType,
  SAPConfigurationType,
  ManagedRGConfiguration,
  KnownSAPVirtualInstanceState,
  SAPVirtualInstanceState,
  ManagedServiceIdentity,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  UpdateSAPVirtualInstanceRequest,
  UpdateSAPVirtualInstanceProperties,
  SAPSizingRecommendationRequest,
  KnownSAPDatabaseScaleMethod,
  SAPDatabaseScaleMethod,
  SAPSizingRecommendationResult,
  SingleServerRecommendationResult,
  ThreeTierRecommendationResult,
  SAPSupportedSkusRequest,
  SAPSupportedResourceSkusResult,
  SAPSupportedSku,
  SAPDiskConfigurationsRequest,
  SAPDiskConfigurationsResult,
  SAPDiskConfiguration,
  DiskDetails,
  SAPAvailabilityZoneDetailsRequest,
  SAPAvailabilityZoneDetailsResult,
  SAPAvailabilityZonePair,
  Versions,
  SAPConfigurationUnion,
  InfrastructureConfigurationUnion,
  OSConfigurationUnion,
  SingleServerCustomResourceNamesUnion,
  FileShareConfigurationUnion,
  ThreeTierCustomResourceNamesUnion,
  SoftwareConfigurationUnion,
  SAPSizingRecommendationResultUnion,
  SAPVirtualInstancesGetOptionalParams,
  SAPVirtualInstancesCreateOptionalParams,
  SAPVirtualInstancesUpdateOptionalParams,
  SAPVirtualInstancesDeleteOptionalParams,
  SAPVirtualInstancesListByResourceGroupOptionalParams,
  SAPVirtualInstancesListBySubscriptionOptionalParams,
  SAPVirtualInstancesStartOptionalParams,
  SAPVirtualInstancesStopOptionalParams,
  SAPVirtualInstancesGetSizingRecommendationsOptionalParams,
  SAPVirtualInstancesGetSapSupportedSkuOptionalParams,
  SAPVirtualInstancesGetDiskConfigurationsOptionalParams,
  SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams,
  SAPCentralServerInstancesGetOptionalParams,
  SAPCentralServerInstancesCreateOptionalParams,
  SAPCentralServerInstancesUpdateOptionalParams,
  SAPCentralServerInstancesDeleteOptionalParams,
  SAPCentralServerInstancesListOptionalParams,
  SAPCentralServerInstancesStartOptionalParams,
  SAPCentralServerInstancesStopOptionalParams,
  SAPDatabaseInstancesGetOptionalParams,
  SAPDatabaseInstancesCreateOptionalParams,
  SAPDatabaseInstancesUpdateOptionalParams,
  SAPDatabaseInstancesDeleteOptionalParams,
  SAPDatabaseInstancesListOptionalParams,
  SAPDatabaseInstancesStartOptionalParams,
  SAPDatabaseInstancesStopOptionalParams,
  SAPApplicationServerInstancesGetOptionalParams,
  SAPApplicationServerInstancesCreateOptionalParams,
  SAPApplicationServerInstancesUpdateOptionalParams,
  SAPApplicationServerInstancesDeleteOptionalParams,
  SAPApplicationServerInstancesListOptionalParams,
  SAPApplicationServerInstancesStartOptionalParams,
  SAPApplicationServerInstancesStopOptionalParams,
  OperationsListOptionalParams,
} from "./models/index.js";
export {
  OperationsOperations,
  SAPApplicationServerInstancesOperations,
  SAPCentralServerInstancesOperations,
  SAPDatabaseInstancesOperations,
  SAPVirtualInstancesOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
