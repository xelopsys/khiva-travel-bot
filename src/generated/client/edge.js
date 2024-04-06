
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/xelopsys/Desktop/Projects/hr bot/src/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "fullTextSearch"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.11.0",
  "engineVersion": "efd2449663b3d73d637ea1fd226bafbcf45b3102",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated/client\"\n  previewFeatures = [\"fullTextSearch\"]\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"POSTGRES_PRISMA_URL\")\n  directUrl = env(\"POSTGRES_URL_NON_POOLING\")\n}\n\nmodel Banner {\n  fileId     String\n  fileBase64 String\n  createdAt  DateTime @default(now())\n  uuid       String   @id @default(uuid())\n}\n\nmodel Travel {\n  name            String\n  route           String\n  description     String\n  duration        String\n  sightseeingTime String\n  drivingTime     String\n  drivingDistance String\n  included        String?       @default(\"\")\n  notIncluded     String?       @default(\"\")\n  reservation     String?       @default(\"\")\n  travelType      travelType\n  time            Time          @default(hour)\n  createdAt       DateTime      @default(now())\n  travelImageId   String\n  uuid            String        @id @default(uuid())\n  pricesPerCar    PricingTier[]\n  travelImage     TravelImage   @relation(fields: [travelImageId], references: [uuid])\n  itinerary       Itinerary[]   @relation(\"ItineraryToTravel\")\n}\n\nmodel Car {\n  models         String[]\n  included       String?\n  carType        String\n  uuid           String           @id @default(uuid())\n  capacity       Int\n  pictures       Picture[]\n  prices         PricingTier[]\n  transferOption TransferOption[]\n}\n\nmodel Picture {\n  fileId     String\n  fileBase64 String\n  createdAt  DateTime @default(now())\n  uuid       String   @id @default(uuid())\n  carId      String\n  car        Car      @relation(fields: [carId], references: [uuid])\n}\n\nmodel PricingTier {\n  id       Int     @id @default(autoincrement())\n  carId    String?\n  travelId String?\n  distance String\n  price    Int\n  car      Car?    @relation(fields: [carId], references: [uuid])\n  travel   Travel? @relation(fields: [travelId], references: [uuid])\n}\n\nmodel Itinerary {\n  route       String\n  description String\n  duration    String\n  time        Time     @default(hour)\n  uuid        String   @id @default(uuid())\n  travel      Travel[] @relation(\"ItineraryToTravel\")\n}\n\nmodel TravelImage {\n  fileId     String\n  fileBase64 String\n  createdAt  DateTime @default(now())\n  uuid       String   @id @default(uuid())\n  travel     Travel[]\n}\n\nmodel Contact {\n  map       String\n  telegram  String\n  whatsapp  String\n  createdAt DateTime @default(now())\n  uuid      String   @id @default(uuid())\n}\n\nmodel Gallery {\n  fileId     String\n  fileBase64 String\n  createdAt  DateTime @default(now())\n  uuid       String   @id @default(uuid())\n}\n\nmodel TravelBanner {\n  fileId     String\n  fileBase64 String\n  createdAt  DateTime @default(now())\n  uuid       String   @id @default(uuid())\n}\n\nmodel TransferOption {\n  uuid           String        @id @default(uuid())\n  price          Int\n  carId          String?\n  transferInfoId String?\n  car            Car?          @relation(fields: [carId], references: [uuid])\n  transferInfo   TransferInfo? @relation(fields: [transferInfoId], references: [uuid])\n}\n\nmodel TransferInfo {\n  uuid            String           @id @default(uuid())\n  transfer        String\n  time            Time\n  drivingTime     String\n  drivingDistance String\n  transferOptions TransferOption[]\n}\n\nenum travelType {\n  SHARED\n  PRIVATE\n}\n\nenum Time {\n  min\n  hour\n  day\n}\n",
  "inlineSchemaHash": "b6440d675d6bb07e455ec1ac9cd924161acc410220d5891cc5b6aeae39a2ee37",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Banner\":{\"dbName\":null,\"fields\":[{\"name\":\"fileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileBase64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Travel\":{\"dbName\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"route\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sightseeingTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drivingTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drivingDistance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"included\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notIncluded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travelType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"travelType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Time\",\"default\":\"hour\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travelImageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricesPerCar\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PricingTier\",\"relationName\":\"PricingTierToTravel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travelImage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TravelImage\",\"relationName\":\"TravelToTravelImage\",\"relationFromFields\":[\"travelImageId\"],\"relationToFields\":[\"uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itinerary\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Itinerary\",\"relationName\":\"ItineraryToTravel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Car\":{\"dbName\":null,\"fields\":[{\"name\":\"models\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"included\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capacity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pictures\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Picture\",\"relationName\":\"CarToPicture\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PricingTier\",\"relationName\":\"CarToPricingTier\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transferOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransferOption\",\"relationName\":\"CarToTransferOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Picture\":{\"dbName\":null,\"fields\":[{\"name\":\"fileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileBase64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"relationName\":\"CarToPicture\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PricingTier\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"relationName\":\"CarToPricingTier\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"relationName\":\"PricingTierToTravel\",\"relationFromFields\":[\"travelId\"],\"relationToFields\":[\"uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Itinerary\":{\"dbName\":null,\"fields\":[{\"name\":\"route\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Time\",\"default\":\"hour\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"relationName\":\"ItineraryToTravel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TravelImage\":{\"dbName\":null,\"fields\":[{\"name\":\"fileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileBase64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"travel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"relationName\":\"TravelToTravelImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Contact\":{\"dbName\":null,\"fields\":[{\"name\":\"map\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telegram\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"whatsapp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Gallery\":{\"dbName\":null,\"fields\":[{\"name\":\"fileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileBase64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TravelBanner\":{\"dbName\":null,\"fields\":[{\"name\":\"fileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileBase64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TransferOption\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transferInfoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"relationName\":\"CarToTransferOption\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transferInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransferInfo\",\"relationName\":\"TransferInfoToTransferOption\",\"relationFromFields\":[\"transferInfoId\"],\"relationToFields\":[\"uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TransferInfo\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Time\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drivingTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drivingDistance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transferOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransferOption\",\"relationName\":\"TransferInfoToTransferOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"travelType\":{\"values\":[{\"name\":\"SHARED\",\"dbName\":null},{\"name\":\"PRIVATE\",\"dbName\":null}],\"dbName\":null},\"Time\":{\"values\":[{\"name\":\"min\",\"dbName\":null},{\"name\":\"hour\",\"dbName\":null},{\"name\":\"day\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

