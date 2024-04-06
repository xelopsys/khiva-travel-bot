
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BannerScalarFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  createdAt: 'createdAt',
  uuid: 'uuid'
};

exports.Prisma.TravelScalarFieldEnum = {
  name: 'name',
  route: 'route',
  description: 'description',
  duration: 'duration',
  sightseeingTime: 'sightseeingTime',
  drivingTime: 'drivingTime',
  drivingDistance: 'drivingDistance',
  included: 'included',
  notIncluded: 'notIncluded',
  reservation: 'reservation',
  travelType: 'travelType',
  time: 'time',
  createdAt: 'createdAt',
  travelImageId: 'travelImageId',
  uuid: 'uuid'
};

exports.Prisma.CarScalarFieldEnum = {
  models: 'models',
  included: 'included',
  carType: 'carType',
  uuid: 'uuid',
  capacity: 'capacity'
};

exports.Prisma.PictureScalarFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  createdAt: 'createdAt',
  uuid: 'uuid',
  carId: 'carId'
};

exports.Prisma.PricingTierScalarFieldEnum = {
  id: 'id',
  carId: 'carId',
  travelId: 'travelId',
  distance: 'distance',
  price: 'price'
};

exports.Prisma.ItineraryScalarFieldEnum = {
  route: 'route',
  description: 'description',
  duration: 'duration',
  time: 'time',
  uuid: 'uuid'
};

exports.Prisma.TravelImageScalarFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  createdAt: 'createdAt',
  uuid: 'uuid'
};

exports.Prisma.ContactScalarFieldEnum = {
  map: 'map',
  telegram: 'telegram',
  whatsapp: 'whatsapp',
  createdAt: 'createdAt',
  uuid: 'uuid'
};

exports.Prisma.GalleryScalarFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  createdAt: 'createdAt',
  uuid: 'uuid'
};

exports.Prisma.TravelBannerScalarFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  createdAt: 'createdAt',
  uuid: 'uuid'
};

exports.Prisma.TransferOptionScalarFieldEnum = {
  uuid: 'uuid',
  price: 'price',
  carId: 'carId',
  transferInfoId: 'transferInfoId'
};

exports.Prisma.TransferInfoScalarFieldEnum = {
  uuid: 'uuid',
  transfer: 'transfer',
  time: 'time',
  drivingTime: 'drivingTime',
  drivingDistance: 'drivingDistance'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.BannerOrderByRelevanceFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  uuid: 'uuid'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.TravelOrderByRelevanceFieldEnum = {
  name: 'name',
  route: 'route',
  description: 'description',
  duration: 'duration',
  sightseeingTime: 'sightseeingTime',
  drivingTime: 'drivingTime',
  drivingDistance: 'drivingDistance',
  included: 'included',
  notIncluded: 'notIncluded',
  reservation: 'reservation',
  travelImageId: 'travelImageId',
  uuid: 'uuid'
};

exports.Prisma.CarOrderByRelevanceFieldEnum = {
  models: 'models',
  included: 'included',
  carType: 'carType',
  uuid: 'uuid'
};

exports.Prisma.PictureOrderByRelevanceFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  uuid: 'uuid',
  carId: 'carId'
};

exports.Prisma.PricingTierOrderByRelevanceFieldEnum = {
  carId: 'carId',
  travelId: 'travelId',
  distance: 'distance'
};

exports.Prisma.ItineraryOrderByRelevanceFieldEnum = {
  route: 'route',
  description: 'description',
  duration: 'duration',
  uuid: 'uuid'
};

exports.Prisma.TravelImageOrderByRelevanceFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  uuid: 'uuid'
};

exports.Prisma.ContactOrderByRelevanceFieldEnum = {
  map: 'map',
  telegram: 'telegram',
  whatsapp: 'whatsapp',
  uuid: 'uuid'
};

exports.Prisma.GalleryOrderByRelevanceFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  uuid: 'uuid'
};

exports.Prisma.TravelBannerOrderByRelevanceFieldEnum = {
  fileId: 'fileId',
  fileBase64: 'fileBase64',
  uuid: 'uuid'
};

exports.Prisma.TransferOptionOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  carId: 'carId',
  transferInfoId: 'transferInfoId'
};

exports.Prisma.TransferInfoOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  transfer: 'transfer',
  drivingTime: 'drivingTime',
  drivingDistance: 'drivingDistance'
};
exports.travelType = exports.$Enums.travelType = {
  SHARED: 'SHARED',
  PRIVATE: 'PRIVATE'
};

exports.Time = exports.$Enums.Time = {
  min: 'min',
  hour: 'hour',
  day: 'day'
};

exports.Prisma.ModelName = {
  Banner: 'Banner',
  Travel: 'Travel',
  Car: 'Car',
  Picture: 'Picture',
  PricingTier: 'PricingTier',
  Itinerary: 'Itinerary',
  TravelImage: 'TravelImage',
  Contact: 'Contact',
  Gallery: 'Gallery',
  TravelBanner: 'TravelBanner',
  TransferOption: 'TransferOption',
  TransferInfo: 'TransferInfo'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
