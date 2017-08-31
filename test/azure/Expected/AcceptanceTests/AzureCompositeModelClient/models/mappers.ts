/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-ts";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Product = {
  required: false,
  serializedName: 'Product',
  type: {
    name: 'Composite',
    className: 'Product',
    modelProperties: {
      productId: {
        required: false,
        serializedName: 'product_id',
        type: {
          name: 'String'
        }
      },
      description: {
        required: false,
        serializedName: 'description',
        type: {
          name: 'String'
        }
      },
      displayName: {
        required: false,
        serializedName: 'display_name',
        type: {
          name: 'String'
        }
      },
      capacity: {
        required: false,
        serializedName: 'capacity',
        defaultValue: '100',
        type: {
          name: 'String'
        }
      },
      image: {
        required: false,
        serializedName: 'image',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const CatalogDictionary = {
  required: false,
  serializedName: 'CatalogDictionary',
  type: {
    name: 'Composite',
    className: 'CatalogDictionary',
    modelProperties: {
      productDictionary: {
        required: false,
        serializedName: 'productDictionary',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'ProductElementType',
              type: {
                name: 'Composite',
                className: 'Product'
              }
          }
        }
      }
    }
  }
};

export const CatalogArray = {
  required: false,
  serializedName: 'CatalogArray',
  type: {
    name: 'Composite',
    className: 'CatalogArray',
    modelProperties: {
      productArray: {
        required: false,
        serializedName: 'productArray',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ProductElementType',
              type: {
                name: 'Composite',
                className: 'Product'
              }
          }
        }
      }
    }
  }
};

export const CatalogArrayOfDictionary = {
  required: false,
  serializedName: 'CatalogArrayOfDictionary',
  type: {
    name: 'Composite',
    className: 'CatalogArrayOfDictionary',
    modelProperties: {
      productArrayOfDictionary: {
        required: false,
        serializedName: 'productArrayOfDictionary',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ObjectElementType',
              type: {
                name: 'Dictionary',
                value: {
                    required: false,
                    serializedName: 'ProductElementType',
                    type: {
                      name: 'Composite',
                      className: 'Product'
                    }
                }
              }
          }
        }
      }
    }
  }
};

export const CatalogDictionaryOfArray = {
  required: false,
  serializedName: 'CatalogDictionaryOfArray',
  type: {
    name: 'Composite',
    className: 'CatalogDictionaryOfArray',
    modelProperties: {
      productDictionaryOfArray: {
        required: false,
        serializedName: 'productDictionaryOfArray',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'ArrayElementType',
              type: {
                name: 'Sequence',
                element: {
                    required: false,
                    serializedName: 'ProductElementType',
                    type: {
                      name: 'Composite',
                      className: 'Product'
                    }
                }
              }
          }
        }
      }
    }
  }
};

export const ErrorModel = {
  required: false,
  serializedName: 'Error',
  type: {
    name: 'Composite',
    className: 'ErrorModel',
    modelProperties: {
      status: {
        required: false,
        serializedName: 'status',
        type: {
          name: 'Number'
        }
      },
      message: {
        required: false,
        serializedName: 'message',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Basic = {
  required: false,
  serializedName: 'basic',
  type: {
    name: 'Composite',
    className: 'Basic',
    modelProperties: {
      id: {
        required: false,
        serializedName: 'id',
        type: {
          name: 'Number'
        }
      },
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      color: {
        required: false,
        serializedName: 'color',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Pet = {
  required: false,
  serializedName: 'pet',
  type: {
    name: 'Composite',
    className: 'Pet',
    modelProperties: {
      id: {
        required: false,
        serializedName: 'id',
        type: {
          name: 'Number'
        }
      },
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Dog = {
  required: false,
  serializedName: 'dog',
  type: {
    name: 'Composite',
    className: 'Dog',
    modelProperties: {
      id: {
        required: false,
        serializedName: 'id',
        type: {
          name: 'Number'
        }
      },
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      food: {
        required: false,
        serializedName: 'food',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Cat = {
  required: false,
  serializedName: 'cat',
  type: {
    name: 'Composite',
    className: 'Cat',
    modelProperties: {
      id: {
        required: false,
        serializedName: 'id',
        type: {
          name: 'Number'
        }
      },
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      color: {
        required: false,
        serializedName: 'color',
        type: {
          name: 'String'
        }
      },
      hates: {
        required: false,
        serializedName: 'hates',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'DogElementType',
              type: {
                name: 'Composite',
                className: 'Dog'
              }
          }
        }
      }
    }
  }
};

export const Siamese = {
  required: false,
  serializedName: 'siamese',
  type: {
    name: 'Composite',
    className: 'Siamese',
    modelProperties: {
      id: {
        required: false,
        serializedName: 'id',
        type: {
          name: 'Number'
        }
      },
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      color: {
        required: false,
        serializedName: 'color',
        type: {
          name: 'String'
        }
      },
      hates: {
        required: false,
        serializedName: 'hates',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'DogElementType',
              type: {
                name: 'Composite',
                className: 'Dog'
              }
          }
        }
      },
      breed: {
        required: false,
        serializedName: 'breed',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Fish = {
  required: false,
  serializedName: 'Fish',
  type: {
    name: 'Composite',
    polymorphicDiscriminator: {
      serializedName: 'fishtype',
      clientName: 'fishtype'
    },
    uberParent: 'Fish',
    className: 'Fish',
    modelProperties: {
      species: {
        required: false,
        serializedName: 'species',
        type: {
          name: 'String'
        }
      },
      length: {
        required: true,
        serializedName: 'length',
        type: {
          name: 'Number'
        }
      },
      siblings: {
        required: false,
        serializedName: 'siblings',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'FishElementType',
              type: {
                name: 'Composite',
                polymorphicDiscriminator: {
                  serializedName: 'fishtype',
                  clientName: 'fishtype'
                },
                uberParent: 'Fish',
                className: 'Fish'
              }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: 'fishtype',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Salmon = {
  required: false,
  serializedName: 'salmon',
  type: {
    name: 'Composite',
    className: 'Salmon',
    modelProperties: {
      species: {
        required: false,
        serializedName: 'species',
        type: {
          name: 'String'
        }
      },
      length: {
        required: true,
        serializedName: 'length',
        type: {
          name: 'Number'
        }
      },
      siblings: {
        required: false,
        serializedName: 'siblings',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'FishElementType',
              type: {
                name: 'Composite',
                polymorphicDiscriminator: {
                  serializedName: 'fishtype',
                  clientName: 'fishtype'
                },
                uberParent: 'Fish',
                className: 'Fish'
              }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: 'fishtype',
        type: {
          name: 'String'
        }
      },
      location: {
        required: false,
        serializedName: 'location',
        type: {
          name: 'String'
        }
      },
      iswild: {
        required: false,
        serializedName: 'iswild',
        type: {
          name: 'Boolean'
        }
      }
    }
  }
};

export const Shark = {
  required: false,
  serializedName: 'shark',
  type: {
    name: 'Composite',
    className: 'Shark',
    modelProperties: {
      species: {
        required: false,
        serializedName: 'species',
        type: {
          name: 'String'
        }
      },
      length: {
        required: true,
        serializedName: 'length',
        type: {
          name: 'Number'
        }
      },
      siblings: {
        required: false,
        serializedName: 'siblings',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'FishElementType',
              type: {
                name: 'Composite',
                polymorphicDiscriminator: {
                  serializedName: 'fishtype',
                  clientName: 'fishtype'
                },
                uberParent: 'Fish',
                className: 'Fish'
              }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: 'fishtype',
        type: {
          name: 'String'
        }
      },
      age: {
        required: false,
        serializedName: 'age',
        type: {
          name: 'Number'
        }
      },
      birthday: {
        required: true,
        serializedName: 'birthday',
        type: {
          name: 'DateTime'
        }
      }
    }
  }
};

export const Sawshark = {
  required: false,
  serializedName: 'sawshark',
  type: {
    name: 'Composite',
    className: 'Sawshark',
    modelProperties: {
      species: {
        required: false,
        serializedName: 'species',
        type: {
          name: 'String'
        }
      },
      length: {
        required: true,
        serializedName: 'length',
        type: {
          name: 'Number'
        }
      },
      siblings: {
        required: false,
        serializedName: 'siblings',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'FishElementType',
              type: {
                name: 'Composite',
                polymorphicDiscriminator: {
                  serializedName: 'fishtype',
                  clientName: 'fishtype'
                },
                uberParent: 'Fish',
                className: 'Fish'
              }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: 'fishtype',
        type: {
          name: 'String'
        }
      },
      age: {
        required: false,
        serializedName: 'age',
        type: {
          name: 'Number'
        }
      },
      birthday: {
        required: true,
        serializedName: 'birthday',
        type: {
          name: 'DateTime'
        }
      },
      picture: {
        required: false,
        serializedName: 'picture',
        type: {
          name: 'ByteArray'
        }
      }
    }
  }
};

export const Goblinshark = {
  required: false,
  serializedName: 'goblin',
  type: {
    name: 'Composite',
    className: 'Goblinshark',
    modelProperties: {
      species: {
        required: false,
        serializedName: 'species',
        type: {
          name: 'String'
        }
      },
      length: {
        required: true,
        serializedName: 'length',
        type: {
          name: 'Number'
        }
      },
      siblings: {
        required: false,
        serializedName: 'siblings',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'FishElementType',
              type: {
                name: 'Composite',
                polymorphicDiscriminator: {
                  serializedName: 'fishtype',
                  clientName: 'fishtype'
                },
                uberParent: 'Fish',
                className: 'Fish'
              }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: 'fishtype',
        type: {
          name: 'String'
        }
      },
      age: {
        required: false,
        serializedName: 'age',
        type: {
          name: 'Number'
        }
      },
      birthday: {
        required: true,
        serializedName: 'birthday',
        type: {
          name: 'DateTime'
        }
      },
      jawsize: {
        required: false,
        serializedName: 'jawsize',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const Cookiecuttershark = {
  required: false,
  serializedName: 'cookiecuttershark',
  type: {
    name: 'Composite',
    className: 'Cookiecuttershark',
    modelProperties: {
      species: {
        required: false,
        serializedName: 'species',
        type: {
          name: 'String'
        }
      },
      length: {
        required: true,
        serializedName: 'length',
        type: {
          name: 'Number'
        }
      },
      siblings: {
        required: false,
        serializedName: 'siblings',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'FishElementType',
              type: {
                name: 'Composite',
                polymorphicDiscriminator: {
                  serializedName: 'fishtype',
                  clientName: 'fishtype'
                },
                uberParent: 'Fish',
                className: 'Fish'
              }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: 'fishtype',
        type: {
          name: 'String'
        }
      },
      age: {
        required: false,
        serializedName: 'age',
        type: {
          name: 'Number'
        }
      },
      birthday: {
        required: true,
        serializedName: 'birthday',
        type: {
          name: 'DateTime'
        }
      }
    }
  }
};

export const IntWrapper = {
  required: false,
  serializedName: 'int-wrapper',
  type: {
    name: 'Composite',
    className: 'IntWrapper',
    modelProperties: {
      field1: {
        required: false,
        serializedName: 'field1',
        type: {
          name: 'Number'
        }
      },
      field2: {
        required: false,
        serializedName: 'field2',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const LongWrapper = {
  required: false,
  serializedName: 'long-wrapper',
  type: {
    name: 'Composite',
    className: 'LongWrapper',
    modelProperties: {
      field1: {
        required: false,
        serializedName: 'field1',
        type: {
          name: 'Number'
        }
      },
      field2: {
        required: false,
        serializedName: 'field2',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const FloatWrapper = {
  required: false,
  serializedName: 'float-wrapper',
  type: {
    name: 'Composite',
    className: 'FloatWrapper',
    modelProperties: {
      field1: {
        required: false,
        serializedName: 'field1',
        type: {
          name: 'Number'
        }
      },
      field2: {
        required: false,
        serializedName: 'field2',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const DoubleWrapper = {
  required: false,
  serializedName: 'double-wrapper',
  type: {
    name: 'Composite',
    className: 'DoubleWrapper',
    modelProperties: {
      field1: {
        required: false,
        serializedName: 'field1',
        type: {
          name: 'Number'
        }
      },
      field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose: {
        required: false,
        serializedName: 'field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const BooleanWrapper = {
  required: false,
  serializedName: 'boolean-wrapper',
  type: {
    name: 'Composite',
    className: 'BooleanWrapper',
    modelProperties: {
      fieldTrue: {
        required: false,
        serializedName: 'field_true',
        type: {
          name: 'Boolean'
        }
      },
      fieldFalse: {
        required: false,
        serializedName: 'field_false',
        type: {
          name: 'Boolean'
        }
      }
    }
  }
};

export const StringWrapper = {
  required: false,
  serializedName: 'string-wrapper',
  type: {
    name: 'Composite',
    className: 'StringWrapper',
    modelProperties: {
      field: {
        required: false,
        serializedName: 'field',
        type: {
          name: 'String'
        }
      },
      empty: {
        required: false,
        serializedName: 'empty',
        type: {
          name: 'String'
        }
      },
      nullProperty: {
        required: false,
        serializedName: 'null',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const DateWrapper = {
  required: false,
  serializedName: 'date-wrapper',
  type: {
    name: 'Composite',
    className: 'DateWrapper',
    modelProperties: {
      field: {
        required: false,
        serializedName: 'field',
        type: {
          name: 'Date'
        }
      },
      leap: {
        required: false,
        serializedName: 'leap',
        type: {
          name: 'Date'
        }
      }
    }
  }
};

export const DatetimeWrapper = {
  required: false,
  serializedName: 'datetime-wrapper',
  type: {
    name: 'Composite',
    className: 'DatetimeWrapper',
    modelProperties: {
      field: {
        required: false,
        serializedName: 'field',
        type: {
          name: 'DateTime'
        }
      },
      now: {
        required: false,
        serializedName: 'now',
        type: {
          name: 'DateTime'
        }
      }
    }
  }
};

export const Datetimerfc1123Wrapper = {
  required: false,
  serializedName: 'datetimerfc1123-wrapper',
  type: {
    name: 'Composite',
    className: 'Datetimerfc1123Wrapper',
    modelProperties: {
      field: {
        required: false,
        serializedName: 'field',
        type: {
          name: 'DateTimeRfc1123'
        }
      },
      now: {
        required: false,
        serializedName: 'now',
        type: {
          name: 'DateTimeRfc1123'
        }
      }
    }
  }
};

export const DurationWrapper = {
  required: false,
  serializedName: 'duration-wrapper',
  type: {
    name: 'Composite',
    className: 'DurationWrapper',
    modelProperties: {
      field: {
        required: false,
        serializedName: 'field',
        type: {
          name: 'TimeSpan'
        }
      }
    }
  }
};

export const ByteWrapper = {
  required: false,
  serializedName: 'byte-wrapper',
  type: {
    name: 'Composite',
    className: 'ByteWrapper',
    modelProperties: {
      field: {
        required: false,
        serializedName: 'field',
        type: {
          name: 'ByteArray'
        }
      }
    }
  }
};

export const ArrayWrapper = {
  required: false,
  serializedName: 'array-wrapper',
  type: {
    name: 'Composite',
    className: 'ArrayWrapper',
    modelProperties: {
      arrayProperty: {
        required: false,
        serializedName: 'array',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const DictionaryWrapper = {
  required: false,
  serializedName: 'dictionary-wrapper',
  type: {
    name: 'Composite',
    className: 'DictionaryWrapper',
    modelProperties: {
      defaultProgram: {
        required: false,
        serializedName: 'defaultProgram',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const ReadonlyObj = {
  required: false,
  serializedName: 'readonly-obj',
  type: {
    name: 'Composite',
    className: 'ReadonlyObj',
    modelProperties: {
      id: {
        required: false,
        readOnly: true,
        serializedName: 'id',
        type: {
          name: 'String'
        }
      },
      size: {
        required: false,
        serializedName: 'size',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const AzureCompositeModelCreateOptionalParams = {
  required: false,
  serializedName: 'CreateOptions',
  type: {
    name: 'Composite',
    className: 'AzureCompositeModelCreateOptionalParams',
    modelProperties: {
      productDictionaryOfArray: {
        required: false,
        serializedName: 'productDictionaryOfArray',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'ArrayElementType',
              type: {
                name: 'Sequence',
                element: {
                    required: false,
                    serializedName: 'ProductElementType',
                    type: {
                      name: 'Composite',
                      className: 'Product'
                    }
                }
              }
          }
        }
      }
    }
  }
};

export const AzureCompositeModelUpdateOptionalParams = {
  required: false,
  serializedName: 'UpdateOptions',
  type: {
    name: 'Composite',
    className: 'AzureCompositeModelUpdateOptionalParams',
    modelProperties: {
      productArrayOfDictionary: {
        required: false,
        serializedName: 'productArrayOfDictionary',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ObjectElementType',
              type: {
                name: 'Dictionary',
                value: {
                    required: false,
                    serializedName: 'ProductElementType',
                    type: {
                      name: 'Composite',
                      className: 'Product'
                    }
                }
              }
          }
        }
      }
    }
  }
};

export const PrimitivePutDurationOptionalParams = {
  required: false,
  serializedName: 'PutDurationOptions',
  type: {
    name: 'Composite',
    className: 'PrimitivePutDurationOptionalParams',
    modelProperties: {
      field: {
        required: false,
        serializedName: 'field',
        type: {
          name: 'TimeSpan'
        }
      }
    }
  }
};

export const PrimitivePutByteOptionalParams = {
  required: false,
  serializedName: 'PutByteOptions',
  type: {
    name: 'Composite',
    className: 'PrimitivePutByteOptionalParams',
    modelProperties: {
      field: {
        required: false,
        serializedName: 'field',
        type: {
          name: 'ByteArray'
        }
      }
    }
  }
};

export const ArrayModelPutValidOptionalParams = {
  required: false,
  serializedName: 'PutValidOptions',
  type: {
    name: 'Composite',
    className: 'ArrayModelPutValidOptionalParams',
    modelProperties: {
      arrayProperty: {
        required: false,
        serializedName: 'array',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const ArrayModelPutEmptyOptionalParams = {
  required: false,
  serializedName: 'PutEmptyOptions',
  type: {
    name: 'Composite',
    className: 'ArrayModelPutEmptyOptionalParams',
    modelProperties: {
      arrayProperty: {
        required: false,
        serializedName: 'array',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const DictionaryPutValidOptionalParams = {
  required: false,
  serializedName: 'PutValidOptions',
  type: {
    name: 'Composite',
    className: 'DictionaryPutValidOptionalParams',
    modelProperties: {
      defaultProgram: {
        required: false,
        serializedName: 'defaultProgram',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const DictionaryPutEmptyOptionalParams = {
  required: false,
  serializedName: 'PutEmptyOptions',
  type: {
    name: 'Composite',
    className: 'DictionaryPutEmptyOptionalParams',
    modelProperties: {
      defaultProgram: {
        required: false,
        serializedName: 'defaultProgram',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const ReadonlypropertyPutValidOptionalParams = {
  required: false,
  serializedName: 'PutValidOptions',
  type: {
    name: 'Composite',
    className: 'ReadonlypropertyPutValidOptionalParams',
    modelProperties: {
      size: {
        required: false,
        serializedName: 'size',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const discriminators = {
  'Fish' : Fish,
  'Fish.salmon' : Salmon,
  'Fish.shark' : Shark,
  'Fish.sawshark' : Sawshark,
  'Fish.goblin' : Goblinshark,
  'Fish.cookiecuttershark' : Cookiecuttershark
};
