import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { FhirDestinations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HealthCareApisClient } from "../healthCareApisClient";
import {
  IotFhirDestination,
  FhirDestinationsListByIotConnectorNextOptionalParams,
  FhirDestinationsListByIotConnectorOptionalParams,
  FhirDestinationsListByIotConnectorResponse,
  FhirDestinationsListByIotConnectorNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FhirDestinations operations. */
export class FhirDestinationsImpl implements FhirDestinations {
  private readonly client: HealthCareApisClient;

  /**
   * Initialize a new instance of the class FhirDestinations class.
   * @param client Reference to the service client
   */
  constructor(client: HealthCareApisClient) {
    this.client = client;
  }

  /**
   * Lists all FHIR destinations for the given IoT Connector
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param options The options parameters.
   */
  public listByIotConnector(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    options?: FhirDestinationsListByIotConnectorOptionalParams
  ): PagedAsyncIterableIterator<IotFhirDestination> {
    const iter = this.listByIotConnectorPagingAll(
      resourceGroupName,
      workspaceName,
      iotConnectorName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByIotConnectorPagingPage(
          resourceGroupName,
          workspaceName,
          iotConnectorName,
          options,
          settings
        );
      }
    };
  }

  private async *listByIotConnectorPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    options?: FhirDestinationsListByIotConnectorOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<IotFhirDestination[]> {
    let result: FhirDestinationsListByIotConnectorResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByIotConnector(
        resourceGroupName,
        workspaceName,
        iotConnectorName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByIotConnectorNext(
        resourceGroupName,
        workspaceName,
        iotConnectorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByIotConnectorPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    options?: FhirDestinationsListByIotConnectorOptionalParams
  ): AsyncIterableIterator<IotFhirDestination> {
    for await (const page of this.listByIotConnectorPagingPage(
      resourceGroupName,
      workspaceName,
      iotConnectorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all FHIR destinations for the given IoT Connector
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param options The options parameters.
   */
  private _listByIotConnector(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    options?: FhirDestinationsListByIotConnectorOptionalParams
  ): Promise<FhirDestinationsListByIotConnectorResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, iotConnectorName, options },
      listByIotConnectorOperationSpec
    );
  }

  /**
   * ListByIotConnectorNext
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param nextLink The nextLink from the previous successful call to the ListByIotConnector method.
   * @param options The options parameters.
   */
  private _listByIotConnectorNext(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    nextLink: string,
    options?: FhirDestinationsListByIotConnectorNextOptionalParams
  ): Promise<FhirDestinationsListByIotConnectorNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, iotConnectorName, nextLink, options },
      listByIotConnectorNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByIotConnectorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}/fhirdestinations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotFhirDestinationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.iotConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByIotConnectorNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotFhirDestinationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.workspaceName,
    Parameters.iotConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
