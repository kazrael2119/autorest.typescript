"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = {
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
exports.CatalogDictionary = {
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
exports.CatalogArray = {
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
exports.CatalogArrayOfDictionary = {
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
exports.CatalogDictionaryOfArray = {
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
exports.ErrorModel = {
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
exports.ComplexModelClientCreateOptionalParams = {
    required: false,
    serializedName: 'CreateOptions',
    type: {
        name: 'Composite',
        className: 'ComplexModelClientCreateOptionalParams',
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
exports.ComplexModelClientUpdateOptionalParams = {
    required: false,
    serializedName: 'UpdateOptions',
    type: {
        name: 'Composite',
        className: 'ComplexModelClientUpdateOptionalParams',
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
//# sourceMappingURL=mappers.js.map