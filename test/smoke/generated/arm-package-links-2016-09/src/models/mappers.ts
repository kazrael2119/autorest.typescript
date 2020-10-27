/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const OperationListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationDisplay: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceLink: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceLink",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "any"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceLinkProperties"
        }
      }
    }
  }
};

export const ResourceLinkProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceLinkProperties",
    modelProperties: {
      sourceId: {
        serializedName: "sourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      targetId: {
        serializedName: "targetId",
        required: true,
        type: {
          name: "String"
        }
      },
      notes: {
        serializedName: "notes",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceLinkResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceLinkResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceLink"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceLinkFilter: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceLinkFilter",
    modelProperties: {
      targetId: {
        serializedName: "targetId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
