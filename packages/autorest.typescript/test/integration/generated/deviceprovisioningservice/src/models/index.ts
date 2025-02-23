import * as coreClient from "@azure/core-client";

/** Result of the request to list provisioning service operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * Provisioning service operations supported by the Microsoft.Devices resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results if there are any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Provisioning Service REST API operation. */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{read | write | action | delete}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft Devices.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * Resource Type: ProvisioningServices.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * Name of the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
}

/** Error details. */
export interface ErrorDetails {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The HTTP status code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly httpStatusCode?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: string;
}

/** The X509 Certificate. */
export interface CertificateResponse {
  /** properties of a certificate */
  properties?: CertificateProperties;
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the certificate.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The entity tag.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The description of an X509 CA Certificate. */
export interface CertificateProperties {
  /**
   * The certificate's subject name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly subject?: string;
  /**
   * The certificate's expiration date and time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly expiry?: Date;
  /**
   * The certificate's thumbprint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly thumbprint?: string;
  /**
   * Determines whether certificate has been verified.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isVerified?: boolean;
  /**
   * base-64 representation of X509 certificate .cer file or just .pem file content.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly certificate?: Uint8Array;
  /**
   * The certificate's creation date and time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly created?: Date;
  /**
   * The certificate's last update date and time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly updated?: Date;
}

/** The JSON-serialized X509 Certificate. */
export interface CertificateBodyDescription {
  /** Base-64 representation of the X509 leaf certificate .cer file or just .pem file content. */
  certificate?: string;
  /** True indicates that the certificate will be created in verified state and proof of possession will not be required. */
  isVerified?: boolean;
}

/** the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope */
export interface IotDpsPropertiesDescription {
  /** Current state of the provisioning service. */
  state?: State;
  /** Whether requests from Public Network are allowed */
  publicNetworkAccess?: PublicNetworkAccess;
  /** The IP filter rules. */
  ipFilterRules?: IpFilterRule[];
  /** Private endpoint connections created on this IotHub */
  privateEndpointConnections?: PrivateEndpointConnection[];
  /** The ARM provisioning state of the provisioning service. */
  provisioningState?: string;
  /** List of IoT hubs associated with this provisioning service. */
  iotHubs?: IotHubDefinitionDescription[];
  /** Allocation policy to be used by this provisioning service. */
  allocationPolicy?: AllocationPolicy;
  /**
   * Service endpoint for provisioning service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceOperationsHostName?: string;
  /**
   * Device endpoint for this provisioning service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deviceProvisioningHostName?: string;
  /**
   * Unique identifier of this provisioning service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly idScope?: string;
  /** List of authorization keys for a provisioning service. */
  authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
}

/** The IP filter rules for a provisioning Service. */
export interface IpFilterRule {
  /** The name of the IP filter rule. */
  filterName: string;
  /** The desired action for requests captured by this rule. */
  action: IpFilterActionType;
  /** A string that contains the IP address range in CIDR notation for the rule. */
  ipMask: string;
  /** Target for requests captured by this rule. */
  target?: IpFilterTargetType;
}

/** The private endpoint connection of a provisioning service */
export interface PrivateEndpointConnection {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The properties of a private endpoint connection */
  properties: PrivateEndpointConnectionProperties;
}

/** The properties of a private endpoint connection */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint property of a private endpoint connection */
  privateEndpoint?: PrivateEndpoint;
  /** The current state of a private endpoint connection */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

/** The private endpoint property of a private endpoint connection */
export interface PrivateEndpoint {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** The current state of a private endpoint connection */
export interface PrivateLinkServiceConnectionState {
  /** The status of a private endpoint connection */
  status: PrivateLinkServiceConnectionStatus;
  /** The description for the current state of a private endpoint connection */
  description: string;
  /** Actions required for a private endpoint connection */
  actionsRequired?: string;
}

/** Description of the IoT hub. */
export interface IotHubDefinitionDescription {
  /** flag for applying allocationPolicy or not for a given iot hub. */
  applyAllocationPolicy?: boolean;
  /** weight to apply for a given iot h. */
  allocationWeight?: number;
  /**
   * Host name of the IoT hub.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Connection string of the IoT hub. */
  connectionString: string;
  /** ARM region of the IoT hub. */
  location: string;
}

/** Description of the shared access key. */
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
  /** Name of the key. */
  keyName: string;
  /** Primary SAS key value. */
  primaryKey?: string;
  /** Secondary SAS key value. */
  secondaryKey?: string;
  /** Rights that this key has. */
  rights: AccessRightsDescription;
}

/** List of possible provisioning service SKUs. */
export interface IotDpsSkuInfo {
  /** Sku name. */
  name?: IotDpsSku;
  /**
   * Pricing tier name of the provisioning service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tier?: string;
  /** The number of units to provision */
  capacity?: number;
}

/** The common properties of an Azure resource. */
export interface Resource {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The resource location. */
  location: string;
  /** The resource tags. */
  tags?: { [propertyName: string]: string };
}

/** A container holding only the Tags for a resource, allowing the user to update the tags on a Provisioning Service instance. */
export interface TagsResource {
  /** Resource tags */
  tags?: { [propertyName: string]: string };
}

/** The JSON-serialized array of Certificate objects. */
export interface CertificateListDescription {
  /** The array of Certificate objects. */
  value?: CertificateResponse[];
}

/** List of provisioning service descriptions. */
export interface ProvisioningServiceDescriptionListResult {
  /** List of provisioning service descriptions. */
  value?: ProvisioningServiceDescription[];
  /**
   * the next link
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Result of a long running operation. */
export interface AsyncOperationResult {
  /** current status of a long running operation. */
  status?: string;
  /** Error message containing code, description and details */
  error?: ErrorMesssage;
}

/** Error response containing message and code. */
export interface ErrorMesssage {
  /** standard error code */
  code?: string;
  /** standard error description */
  message?: string;
  /** detailed summary of error */
  details?: string;
}

/** List of available SKUs. */
export interface IotDpsSkuDefinitionListResult {
  /** The list of SKUs */
  value?: IotDpsSkuDefinition[];
  /**
   * The next link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Available SKUs of tier and units. */
export interface IotDpsSkuDefinition {
  /** Sku name. */
  name?: IotDpsSku;
}

/** Description of the response of the verification code. */
export interface VerificationCodeResponse {
  /**
   * Name of certificate.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Request etag.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  properties?: VerificationCodeResponseProperties;
}

export interface VerificationCodeResponseProperties {
  /** Verification code. */
  verificationCode?: string;
  /** Certificate subject. */
  subject?: string;
  /** Code expiry. */
  expiry?: string;
  /** Certificate thumbprint. */
  thumbprint?: string;
  /** Indicate if the certificate is verified by owner of private key. */
  isVerified?: boolean;
  /** base-64 representation of X509 certificate .cer file or just .pem file content. */
  certificate?: Uint8Array;
  /** Certificate created time. */
  created?: string;
  /** Certificate updated time. */
  updated?: string;
}

/** The JSON-serialized leaf certificate */
export interface VerificationCodeRequest {
  /** base-64 representation of X509 certificate .cer file or just .pem file content. */
  certificate?: string;
}

/** Input values for operation results call. */
export interface OperationInputs {
  /** The name of the Provisioning Service to check. */
  name: string;
}

/** Description of name availability. */
export interface NameAvailabilityInfo {
  /** specifies if a name is available or not */
  nameAvailable?: boolean;
  /** specifies the reason a name is unavailable */
  reason?: NameUnavailabilityReason;
  /** message containing a detailed reason name is unavailable */
  message?: string;
}

/** List of shared access keys. */
export interface SharedAccessSignatureAuthorizationRuleListResult {
  /** The list of shared access policies. */
  value?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
  /**
   * The next link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The available private link resources for a provisioning service */
export interface PrivateLinkResources {
  /** The list of available private link resources for a provisioning service */
  value?: GroupIdInformation[];
}

/** The group information for creating a private endpoint on a provisioning service */
export interface GroupIdInformation {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The properties for a group information object */
  properties: GroupIdInformationProperties;
}

/** The properties for a group information object */
export interface GroupIdInformationProperties {
  /** The group id */
  groupId?: string;
  /** The required members for a specific group id */
  requiredMembers?: string[];
  /** The required DNS zones for a specific group id */
  requiredZoneNames?: string[];
}

/** The description of the provisioning service. */
export interface ProvisioningServiceDescription extends Resource {
  /** The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. */
  etag?: string;
  /** Service specific properties for a provisioning service */
  properties: IotDpsPropertiesDescription;
  /** Sku info for a provisioning Service. */
  sku: IotDpsSkuInfo;
}

/** Known values of {@link CertificatePurpose} that the service accepts. */
export enum KnownCertificatePurpose {
  /** ClientAuthentication */
  ClientAuthentication = "clientAuthentication",
  /** ServerAuthentication */
  ServerAuthentication = "serverAuthentication"
}

/**
 * Defines values for CertificatePurpose. \
 * {@link KnownCertificatePurpose} can be used interchangeably with CertificatePurpose,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **clientAuthentication** \
 * **serverAuthentication**
 */
export type CertificatePurpose = string;

/** Known values of {@link State} that the service accepts. */
export enum KnownState {
  /** Activating */
  Activating = "Activating",
  /** Active */
  Active = "Active",
  /** Deleting */
  Deleting = "Deleting",
  /** Deleted */
  Deleted = "Deleted",
  /** ActivationFailed */
  ActivationFailed = "ActivationFailed",
  /** DeletionFailed */
  DeletionFailed = "DeletionFailed",
  /** Transitioning */
  Transitioning = "Transitioning",
  /** Suspending */
  Suspending = "Suspending",
  /** Suspended */
  Suspended = "Suspended",
  /** Resuming */
  Resuming = "Resuming",
  /** FailingOver */
  FailingOver = "FailingOver",
  /** FailoverFailed */
  FailoverFailed = "FailoverFailed"
}

/**
 * Defines values for State. \
 * {@link KnownState} can be used interchangeably with State,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Activating** \
 * **Active** \
 * **Deleting** \
 * **Deleted** \
 * **ActivationFailed** \
 * **DeletionFailed** \
 * **Transitioning** \
 * **Suspending** \
 * **Suspended** \
 * **Resuming** \
 * **FailingOver** \
 * **FailoverFailed**
 */
export type State = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type PublicNetworkAccess = string;

/** Known values of {@link PrivateLinkServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateLinkServiceConnectionStatus {
  /** Pending */
  Pending = "Pending",
  /** Approved */
  Approved = "Approved",
  /** Rejected */
  Rejected = "Rejected",
  /** Disconnected */
  Disconnected = "Disconnected"
}

/**
 * Defines values for PrivateLinkServiceConnectionStatus. \
 * {@link KnownPrivateLinkServiceConnectionStatus} can be used interchangeably with PrivateLinkServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected**
 */
export type PrivateLinkServiceConnectionStatus = string;

/** Known values of {@link AllocationPolicy} that the service accepts. */
export enum KnownAllocationPolicy {
  /** Hashed */
  Hashed = "Hashed",
  /** GeoLatency */
  GeoLatency = "GeoLatency",
  /** Static */
  Static = "Static"
}

/**
 * Defines values for AllocationPolicy. \
 * {@link KnownAllocationPolicy} can be used interchangeably with AllocationPolicy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Hashed** \
 * **GeoLatency** \
 * **Static**
 */
export type AllocationPolicy = string;

/** Known values of {@link AccessRightsDescription} that the service accepts. */
export enum KnownAccessRightsDescription {
  /** ServiceConfig */
  ServiceConfig = "ServiceConfig",
  /** EnrollmentRead */
  EnrollmentRead = "EnrollmentRead",
  /** EnrollmentWrite */
  EnrollmentWrite = "EnrollmentWrite",
  /** DeviceConnect */
  DeviceConnect = "DeviceConnect",
  /** RegistrationStatusRead */
  RegistrationStatusRead = "RegistrationStatusRead",
  /** RegistrationStatusWrite */
  RegistrationStatusWrite = "RegistrationStatusWrite"
}

/**
 * Defines values for AccessRightsDescription. \
 * {@link KnownAccessRightsDescription} can be used interchangeably with AccessRightsDescription,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServiceConfig** \
 * **EnrollmentRead** \
 * **EnrollmentWrite** \
 * **DeviceConnect** \
 * **RegistrationStatusRead** \
 * **RegistrationStatusWrite**
 */
export type AccessRightsDescription = string;

/** Known values of {@link IotDpsSku} that the service accepts. */
export enum KnownIotDpsSku {
  /** S1 */
  S1 = "S1"
}

/**
 * Defines values for IotDpsSku. \
 * {@link KnownIotDpsSku} can be used interchangeably with IotDpsSku,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **S1**
 */
export type IotDpsSku = string;

/** Known values of {@link NameUnavailabilityReason} that the service accepts. */
export enum KnownNameUnavailabilityReason {
  /** Invalid */
  Invalid = "Invalid",
  /** AlreadyExists */
  AlreadyExists = "AlreadyExists"
}

/**
 * Defines values for NameUnavailabilityReason. \
 * {@link KnownNameUnavailabilityReason} can be used interchangeably with NameUnavailabilityReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type NameUnavailabilityReason = string;
/** Defines values for IpFilterActionType. */
export type IpFilterActionType = "Accept" | "Reject";
/** Defines values for IpFilterTargetType. */
export type IpFilterTargetType = "all" | "serviceApi" | "deviceApi";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface DpsCertificateGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the certificate. */
  ifMatch?: string;
}

/** Contains response data for the get operation. */
export type DpsCertificateGetResponse = CertificateResponse;

/** Optional parameters. */
export interface DpsCertificateCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DpsCertificateCreateOrUpdateResponse = CertificateResponse;

/** Optional parameters. */
export interface DpsCertificateDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** This is optional, and it is the Common Name of the certificate. */
  certificateName1?: string;
  /** Raw data within the certificate. */
  certificateRawBytes?: Uint8Array;
  /** Indicates if certificate has been verified by owner of the private key. */
  certificateIsVerified?: boolean;
  /** A description that mentions the purpose of the certificate. */
  certificatePurpose?: CertificatePurpose;
  /** Time the certificate is created. */
  certificateCreated?: Date;
  /** Time the certificate is last updated. */
  certificateLastUpdated?: Date;
  /** Indicates if the certificate contains a private key. */
  certificateHasPrivateKey?: boolean;
  /** Random number generated to indicate Proof of Possession. */
  certificateNonce?: string;
}

/** Optional parameters. */
export interface DpsCertificateListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type DpsCertificateListResponse = CertificateListDescription;

/** Optional parameters. */
export interface DpsCertificateGenerateVerificationCodeOptionalParams
  extends coreClient.OperationOptions {
  /** Common Name for the certificate. */
  certificateName1?: string;
  /** Raw data of certificate. */
  certificateRawBytes?: Uint8Array;
  /** Indicates if the certificate has been verified by owner of the private key. */
  certificateIsVerified?: boolean;
  /** Description mentioning the purpose of the certificate. */
  certificatePurpose?: CertificatePurpose;
  /** Certificate creation time. */
  certificateCreated?: Date;
  /** Certificate last updated time. */
  certificateLastUpdated?: Date;
  /** Indicates if the certificate contains private key. */
  certificateHasPrivateKey?: boolean;
  /** Random number generated to indicate Proof of Possession. */
  certificateNonce?: string;
}

/** Contains response data for the generateVerificationCode operation. */
export type DpsCertificateGenerateVerificationCodeResponse = VerificationCodeResponse;

/** Optional parameters. */
export interface DpsCertificateVerifyCertificateOptionalParams
  extends coreClient.OperationOptions {
  /** Common Name for the certificate. */
  certificateName1?: string;
  /** Raw data of certificate. */
  certificateRawBytes?: Uint8Array;
  /** Indicates if the certificate has been verified by owner of the private key. */
  certificateIsVerified?: boolean;
  /** Describe the purpose of the certificate. */
  certificatePurpose?: CertificatePurpose;
  /** Certificate creation time. */
  certificateCreated?: Date;
  /** Certificate last updated time. */
  certificateLastUpdated?: Date;
  /** Indicates if the certificate contains private key. */
  certificateHasPrivateKey?: boolean;
  /** Random number generated to indicate Proof of Possession. */
  certificateNonce?: string;
}

/** Contains response data for the verifyCertificate operation. */
export type DpsCertificateVerifyCertificateResponse = CertificateResponse;

/** Optional parameters. */
export interface IotDpsResourceGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type IotDpsResourceGetResponse = ProvisioningServiceDescription;

/** Optional parameters. */
export interface IotDpsResourceCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type IotDpsResourceCreateOrUpdateResponse = ProvisioningServiceDescription;

/** Optional parameters. */
export interface IotDpsResourceUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type IotDpsResourceUpdateResponse = ProvisioningServiceDescription;

/** Optional parameters. */
export interface IotDpsResourceDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface IotDpsResourceListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type IotDpsResourceListBySubscriptionResponse = ProvisioningServiceDescriptionListResult;

/** Optional parameters. */
export interface IotDpsResourceListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type IotDpsResourceListByResourceGroupResponse = ProvisioningServiceDescriptionListResult;

/** Optional parameters. */
export interface IotDpsResourceGetOperationResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOperationResult operation. */
export type IotDpsResourceGetOperationResultResponse = AsyncOperationResult;

/** Optional parameters. */
export interface IotDpsResourceListValidSkusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listValidSkus operation. */
export type IotDpsResourceListValidSkusResponse = IotDpsSkuDefinitionListResult;

/** Optional parameters. */
export interface IotDpsResourceCheckProvisioningServiceNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkProvisioningServiceNameAvailability operation. */
export type IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse = NameAvailabilityInfo;

/** Optional parameters. */
export interface IotDpsResourceListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type IotDpsResourceListKeysResponse = SharedAccessSignatureAuthorizationRuleListResult;

/** Optional parameters. */
export interface IotDpsResourceListKeysForKeyNameOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeysForKeyName operation. */
export type IotDpsResourceListKeysForKeyNameResponse = SharedAccessSignatureAuthorizationRuleAccessRightsDescription;

/** Optional parameters. */
export interface IotDpsResourceListPrivateLinkResourcesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listPrivateLinkResources operation. */
export type IotDpsResourceListPrivateLinkResourcesResponse = PrivateLinkResources;

/** Optional parameters. */
export interface IotDpsResourceGetPrivateLinkResourcesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getPrivateLinkResources operation. */
export type IotDpsResourceGetPrivateLinkResourcesResponse = GroupIdInformation;

/** Optional parameters. */
export interface IotDpsResourceListPrivateEndpointConnectionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listPrivateEndpointConnections operation. */
export type IotDpsResourceListPrivateEndpointConnectionsResponse = PrivateEndpointConnection[];

/** Optional parameters. */
export interface IotDpsResourceGetPrivateEndpointConnectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getPrivateEndpointConnection operation. */
export type IotDpsResourceGetPrivateEndpointConnectionResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdatePrivateEndpointConnection operation. */
export type IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface IotDpsResourceDeletePrivateEndpointConnectionOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the deletePrivateEndpointConnection operation. */
export type IotDpsResourceDeletePrivateEndpointConnectionResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface IotDpsResourceListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type IotDpsResourceListBySubscriptionNextResponse = ProvisioningServiceDescriptionListResult;

/** Optional parameters. */
export interface IotDpsResourceListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type IotDpsResourceListByResourceGroupNextResponse = ProvisioningServiceDescriptionListResult;

/** Optional parameters. */
export interface IotDpsResourceListValidSkusNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listValidSkusNext operation. */
export type IotDpsResourceListValidSkusNextResponse = IotDpsSkuDefinitionListResult;

/** Optional parameters. */
export interface IotDpsResourceListKeysNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeysNext operation. */
export type IotDpsResourceListKeysNextResponse = SharedAccessSignatureAuthorizationRuleListResult;

/** Optional parameters. */
export interface DeviceProvisioningClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
