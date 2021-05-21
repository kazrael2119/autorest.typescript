/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IntOptionalWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntOptionalWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const StringWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StringWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StringOptionalWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StringOptionalWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Product: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClassWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClassWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "Product"
        }
      }
    }
  }
};

export const ClassOptionalWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClassOptionalWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "Product"
        }
      }
    }
  }
};

export const ArrayWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ArrayWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ArrayOptionalWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ArrayOptionalWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};
