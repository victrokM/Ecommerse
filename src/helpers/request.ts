export const responseCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_AUTHORIZED: 401,
  PERMISSION_DENIED: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
} as const;

const response = {
  data: null,
  message: null,
  code: responseCode.OK,
  errors: []
}

export const error = {
  imageResizeError: {
    ...response,
    errors: ['Ocurrió un error al redimensionar la imagen'],
    code: responseCode.BAD_REQUEST
  },
  invalidImageFormat: {
    ...response,
    errors: ['El formato de la imagen es inválido. Formatos aceptados .png, .jpg, .jpeg y .gif'],
    code: responseCode.BAD_REQUEST
  },
  invalidDocumentFormat: {
    ...response,
    errors: ['El formato del documento es inválido. Formato aceptado .pdf'],
    code: responseCode.BAD_REQUEST
  },
  invalidDriverDocumentType: {
    ...response,
    errors: ['El tipo del documento es inválido. Tipos aceptados: identification y license'],
    code: responseCode.BAD_REQUEST
  },
  invalidVehicleDocumentType: {
    ...response,
    errors: ['El tipo del documento del vehículo es inválido. Tipos aceptados: soat, rtm, vehicle_license y license_plate'],
    code: responseCode.BAD_REQUEST
  },
  contentTypeIsInvalid: {
    ...response,
    errors: ['Content-Type es inválido'],
    code: responseCode.BAD_REQUEST
  },
  authorizationHeaderDoesntExist: {
    ...response,
    errors: ['No autorizado. El token es requerido'],
    code: responseCode.NOT_AUTHORIZED
  },
  forbidden: {
    ...response,
    errors: ['Acceso denegado. El token no tiene permisos para esta acción'],
    code: responseCode.PERMISSION_DENIED
  },
  apiKeyHeaderDoesntExist: {
    ...response,
    errors: ['No autorizado. El api-key es requerido'],
    code: responseCode.NOT_AUTHORIZED
  },
  invalidApiKey: {
    ...response,
    errors: ['No autorizado. El api-key no es válido'],
    code: responseCode.NOT_AUTHORIZED
  },
  invalidToken: {
    ...response,
    errors: ['No autorizado. El token no es válido'],
    code: responseCode.NOT_AUTHORIZED
  },
  expiredToken: {
    ...response,
    errors: ['No autorizado. El token ya expiró'],
    code: responseCode.NOT_AUTHORIZED
  },
  queryParamIsNotInteger: {
    ...response,
    errors: ['El parámetro de entrada debe ser un número entero'],
    code: responseCode.BAD_REQUEST
  },
  resourceDoesNotExist: {
    ...response,
    errors: ['El recurso no existe en base de datos'],
    code: responseCode.NOT_FOUND
  },
  clientDoesNotExist: {
    ...response,
    errors: ['El cliente no existe en base de datos'],
    code: responseCode.NOT_FOUND
  },
  typeIsNotInteger: {
    ...response,
    errors: ['El parámetro debe ser un número entero'],
    code: responseCode.BAD_REQUEST
  },
  typeIsNotString: {
    ...response,
    errors: ['El parámetro debe ser un string'],
    code: responseCode.BAD_REQUEST
  },
  creatingWasNotPossible: {
    ...response,
    errors: ['Ha ocurrido un error al momento de crear el recurso'],
    code: responseCode.SERVER_ERROR
  },
  updatingWasNotPossible: {
    ...response,
    errors: ['Ha ocurrido un error al momento de actualizar el recurso'],
    code: responseCode.SERVER_ERROR
  },
  someFieldsAreRequired: {
    ...response,
    errors: ['No se recibieron algunos recursos que son requeridos'],
    code: responseCode.BAD_REQUEST
  },
  driverAlreadyLinkedToBranchOffice: {
    ...response,
    errors: ['El repartidor ya esta vinculado a esta sucursal'],
    code: responseCode.BAD_REQUEST
  },
  driverNotLinkedToBranchOffice: {
    ...response,
    errors: ['El repartidor no esta vinculado a esta sucursal'],
    code: responseCode.BAD_REQUEST
  },
  driverAlreadyLinkedToOrder: {
    ...response,
    errors: ['El repartidor ya esta vinculado a esta orden'],
    code: responseCode.BAD_REQUEST
  },
  driverNotLinkedToOrder: {
    ...response,
    errors: ['El repartidor no esta vinculado a esta orden'],
    code: responseCode.BAD_REQUEST
  },
  maxSizeLimit: {
    ...response,
    errors: ['El tamaño del archivo excede el límite permitido'],
    code: responseCode.BAD_REQUEST
  },
}

