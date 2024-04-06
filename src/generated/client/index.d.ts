
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model Travel
 * 
 */
export type Travel = $Result.DefaultSelection<Prisma.$TravelPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>
/**
 * Model PricingTier
 * 
 */
export type PricingTier = $Result.DefaultSelection<Prisma.$PricingTierPayload>
/**
 * Model Itinerary
 * 
 */
export type Itinerary = $Result.DefaultSelection<Prisma.$ItineraryPayload>
/**
 * Model TravelImage
 * 
 */
export type TravelImage = $Result.DefaultSelection<Prisma.$TravelImagePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Gallery
 * 
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>
/**
 * Model TravelBanner
 * 
 */
export type TravelBanner = $Result.DefaultSelection<Prisma.$TravelBannerPayload>
/**
 * Model TransferOption
 * 
 */
export type TransferOption = $Result.DefaultSelection<Prisma.$TransferOptionPayload>
/**
 * Model TransferInfo
 * 
 */
export type TransferInfo = $Result.DefaultSelection<Prisma.$TransferInfoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const travelType: {
  SHARED: 'SHARED',
  PRIVATE: 'PRIVATE'
};

export type travelType = (typeof travelType)[keyof typeof travelType]


export const Time: {
  min: 'min',
  hour: 'hour',
  day: 'day'
};

export type Time = (typeof Time)[keyof typeof Time]

}

export type travelType = $Enums.travelType

export const travelType: typeof $Enums.travelType

export type Time = $Enums.Time

export const Time: typeof $Enums.Time

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Banners
 * const banners = await prisma.banner.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Banners
   * const banners = await prisma.banner.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs>;

  /**
   * `prisma.travel`: Exposes CRUD operations for the **Travel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Travels
    * const travels = await prisma.travel.findMany()
    * ```
    */
  get travel(): Prisma.TravelDelegate<ExtArgs>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs>;

  /**
   * `prisma.pricingTier`: Exposes CRUD operations for the **PricingTier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingTiers
    * const pricingTiers = await prisma.pricingTier.findMany()
    * ```
    */
  get pricingTier(): Prisma.PricingTierDelegate<ExtArgs>;

  /**
   * `prisma.itinerary`: Exposes CRUD operations for the **Itinerary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Itineraries
    * const itineraries = await prisma.itinerary.findMany()
    * ```
    */
  get itinerary(): Prisma.ItineraryDelegate<ExtArgs>;

  /**
   * `prisma.travelImage`: Exposes CRUD operations for the **TravelImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelImages
    * const travelImages = await prisma.travelImage.findMany()
    * ```
    */
  get travelImage(): Prisma.TravelImageDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.GalleryDelegate<ExtArgs>;

  /**
   * `prisma.travelBanner`: Exposes CRUD operations for the **TravelBanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelBanners
    * const travelBanners = await prisma.travelBanner.findMany()
    * ```
    */
  get travelBanner(): Prisma.TravelBannerDelegate<ExtArgs>;

  /**
   * `prisma.transferOption`: Exposes CRUD operations for the **TransferOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransferOptions
    * const transferOptions = await prisma.transferOption.findMany()
    * ```
    */
  get transferOption(): Prisma.TransferOptionDelegate<ExtArgs>;

  /**
   * `prisma.transferInfo`: Exposes CRUD operations for the **TransferInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransferInfos
    * const transferInfos = await prisma.transferInfo.findMany()
    * ```
    */
  get transferInfo(): Prisma.TransferInfoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'banner' | 'travel' | 'car' | 'picture' | 'pricingTier' | 'itinerary' | 'travelImage' | 'contact' | 'gallery' | 'travelBanner' | 'transferOption' | 'transferInfo'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>,
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      Travel: {
        payload: Prisma.$TravelPayload<ExtArgs>
        fields: Prisma.TravelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findFirst: {
            args: Prisma.TravelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findMany: {
            args: Prisma.TravelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          create: {
            args: Prisma.TravelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          createMany: {
            args: Prisma.TravelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TravelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          update: {
            args: Prisma.TravelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          deleteMany: {
            args: Prisma.TravelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TravelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TravelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          aggregate: {
            args: Prisma.TravelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTravel>
          }
          groupBy: {
            args: Prisma.TravelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TravelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelCountArgs<ExtArgs>,
            result: $Utils.Optional<TravelCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>,
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>
        fields: Prisma.PictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>,
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
      PricingTier: {
        payload: Prisma.$PricingTierPayload<ExtArgs>
        fields: Prisma.PricingTierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingTierFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingTierFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          findFirst: {
            args: Prisma.PricingTierFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingTierFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          findMany: {
            args: Prisma.PricingTierFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>[]
          }
          create: {
            args: Prisma.PricingTierCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          createMany: {
            args: Prisma.PricingTierCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PricingTierDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          update: {
            args: Prisma.PricingTierUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          deleteMany: {
            args: Prisma.PricingTierDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PricingTierUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PricingTierUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          aggregate: {
            args: Prisma.PricingTierAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePricingTier>
          }
          groupBy: {
            args: Prisma.PricingTierGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PricingTierGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingTierCountArgs<ExtArgs>,
            result: $Utils.Optional<PricingTierCountAggregateOutputType> | number
          }
        }
      }
      Itinerary: {
        payload: Prisma.$ItineraryPayload<ExtArgs>
        fields: Prisma.ItineraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItineraryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItineraryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          findFirst: {
            args: Prisma.ItineraryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItineraryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          findMany: {
            args: Prisma.ItineraryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>[]
          }
          create: {
            args: Prisma.ItineraryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          createMany: {
            args: Prisma.ItineraryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItineraryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          update: {
            args: Prisma.ItineraryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          deleteMany: {
            args: Prisma.ItineraryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItineraryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItineraryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          aggregate: {
            args: Prisma.ItineraryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItinerary>
          }
          groupBy: {
            args: Prisma.ItineraryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItineraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItineraryCountArgs<ExtArgs>,
            result: $Utils.Optional<ItineraryCountAggregateOutputType> | number
          }
        }
      }
      TravelImage: {
        payload: Prisma.$TravelImagePayload<ExtArgs>
        fields: Prisma.TravelImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          findFirst: {
            args: Prisma.TravelImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          findMany: {
            args: Prisma.TravelImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>[]
          }
          create: {
            args: Prisma.TravelImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          createMany: {
            args: Prisma.TravelImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TravelImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          update: {
            args: Prisma.TravelImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          deleteMany: {
            args: Prisma.TravelImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TravelImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TravelImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          aggregate: {
            args: Prisma.TravelImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTravelImage>
          }
          groupBy: {
            args: Prisma.TravelImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TravelImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelImageCountArgs<ExtArgs>,
            result: $Utils.Optional<TravelImageCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>
        fields: Prisma.GalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>,
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      TravelBanner: {
        payload: Prisma.$TravelBannerPayload<ExtArgs>
        fields: Prisma.TravelBannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelBannerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelBannerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload>
          }
          findFirst: {
            args: Prisma.TravelBannerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelBannerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload>
          }
          findMany: {
            args: Prisma.TravelBannerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload>[]
          }
          create: {
            args: Prisma.TravelBannerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload>
          }
          createMany: {
            args: Prisma.TravelBannerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TravelBannerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload>
          }
          update: {
            args: Prisma.TravelBannerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload>
          }
          deleteMany: {
            args: Prisma.TravelBannerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TravelBannerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TravelBannerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBannerPayload>
          }
          aggregate: {
            args: Prisma.TravelBannerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTravelBanner>
          }
          groupBy: {
            args: Prisma.TravelBannerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TravelBannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelBannerCountArgs<ExtArgs>,
            result: $Utils.Optional<TravelBannerCountAggregateOutputType> | number
          }
        }
      }
      TransferOption: {
        payload: Prisma.$TransferOptionPayload<ExtArgs>
        fields: Prisma.TransferOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferOptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferOptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload>
          }
          findFirst: {
            args: Prisma.TransferOptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferOptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload>
          }
          findMany: {
            args: Prisma.TransferOptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload>[]
          }
          create: {
            args: Prisma.TransferOptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload>
          }
          createMany: {
            args: Prisma.TransferOptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransferOptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload>
          }
          update: {
            args: Prisma.TransferOptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload>
          }
          deleteMany: {
            args: Prisma.TransferOptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransferOptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransferOptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferOptionPayload>
          }
          aggregate: {
            args: Prisma.TransferOptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransferOption>
          }
          groupBy: {
            args: Prisma.TransferOptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransferOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransferOptionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransferOptionCountAggregateOutputType> | number
          }
        }
      }
      TransferInfo: {
        payload: Prisma.$TransferInfoPayload<ExtArgs>
        fields: Prisma.TransferInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferInfoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferInfoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload>
          }
          findFirst: {
            args: Prisma.TransferInfoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferInfoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload>
          }
          findMany: {
            args: Prisma.TransferInfoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload>[]
          }
          create: {
            args: Prisma.TransferInfoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload>
          }
          createMany: {
            args: Prisma.TransferInfoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransferInfoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload>
          }
          update: {
            args: Prisma.TransferInfoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload>
          }
          deleteMany: {
            args: Prisma.TransferInfoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransferInfoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransferInfoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferInfoPayload>
          }
          aggregate: {
            args: Prisma.TransferInfoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransferInfo>
          }
          groupBy: {
            args: Prisma.TransferInfoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransferInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransferInfoCountArgs<ExtArgs>,
            result: $Utils.Optional<TransferInfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TravelCountOutputType
   */

  export type TravelCountOutputType = {
    pricesPerCar: number
    itinerary: number
  }

  export type TravelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricesPerCar?: boolean | TravelCountOutputTypeCountPricesPerCarArgs
    itinerary?: boolean | TravelCountOutputTypeCountItineraryArgs
  }

  // Custom InputTypes

  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelCountOutputType
     */
    select?: TravelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeCountPricesPerCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingTierWhereInput
  }


  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeCountItineraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItineraryWhereInput
  }



  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    pictures: number
    prices: number
    transferOption: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | CarCountOutputTypeCountPicturesArgs
    prices?: boolean | CarCountOutputTypeCountPricesArgs
    transferOption?: boolean | CarCountOutputTypeCountTransferOptionArgs
  }

  // Custom InputTypes

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }


  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingTierWhereInput
  }


  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountTransferOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferOptionWhereInput
  }



  /**
   * Count Type ItineraryCountOutputType
   */

  export type ItineraryCountOutputType = {
    travel: number
  }

  export type ItineraryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | ItineraryCountOutputTypeCountTravelArgs
  }

  // Custom InputTypes

  /**
   * ItineraryCountOutputType without action
   */
  export type ItineraryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryCountOutputType
     */
    select?: ItineraryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ItineraryCountOutputType without action
   */
  export type ItineraryCountOutputTypeCountTravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
  }



  /**
   * Count Type TravelImageCountOutputType
   */

  export type TravelImageCountOutputType = {
    travel: number
  }

  export type TravelImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | TravelImageCountOutputTypeCountTravelArgs
  }

  // Custom InputTypes

  /**
   * TravelImageCountOutputType without action
   */
  export type TravelImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImageCountOutputType
     */
    select?: TravelImageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TravelImageCountOutputType without action
   */
  export type TravelImageCountOutputTypeCountTravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
  }



  /**
   * Count Type TransferInfoCountOutputType
   */

  export type TransferInfoCountOutputType = {
    transferOptions: number
  }

  export type TransferInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transferOptions?: boolean | TransferInfoCountOutputTypeCountTransferOptionsArgs
  }

  // Custom InputTypes

  /**
   * TransferInfoCountOutputType without action
   */
  export type TransferInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfoCountOutputType
     */
    select?: TransferInfoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TransferInfoCountOutputType without action
   */
  export type TransferInfoCountOutputTypeCountTransferOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferOptionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerMinAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type BannerMaxAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type BannerCountAggregateOutputType = {
    fileId: number
    fileBase64: number
    createdAt: number
    uuid: number
    _all: number
  }


  export type BannerMinAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
  }

  export type BannerMaxAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
  }

  export type BannerCountAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationAndSearchRelevanceInput | BannerOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    fileId: string
    fileBase64: string
    createdAt: Date
    uuid: string
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
  }


  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      fileId: string
      fileBase64: string
      createdAt: Date
      uuid: string
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }


  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BannerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>
    ): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Banner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BannerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>
    ): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const bannerWithFileIdOnly = await prisma.banner.findMany({ select: { fileId: true } })
     * 
    **/
    findMany<T extends BannerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
    **/
    create<T extends BannerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BannerCreateArgs<ExtArgs>>
    ): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Banners.
     *     @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     *     @example
     *     // Create many Banners
     *     const banner = await prisma.banner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BannerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
    **/
    delete<T extends BannerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>
    ): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BannerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>
    ): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BannerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BannerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
    **/
    upsert<T extends BannerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>
    ): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Banner model
   */ 
  interface BannerFieldRefs {
    readonly fileId: FieldRef<"Banner", 'String'>
    readonly fileBase64: FieldRef<"Banner", 'String'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly uuid: FieldRef<"Banner", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }


  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }


  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationAndSearchRelevanceInput | BannerOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }


  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationAndSearchRelevanceInput | BannerOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }


  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationAndSearchRelevanceInput | BannerOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }


  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }


  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }


  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
  }


  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }


  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }


  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
  }


  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
  }



  /**
   * Model Travel
   */

  export type AggregateTravel = {
    _count: TravelCountAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  export type TravelMinAggregateOutputType = {
    name: string | null
    route: string | null
    description: string | null
    duration: string | null
    sightseeingTime: string | null
    drivingTime: string | null
    drivingDistance: string | null
    included: string | null
    notIncluded: string | null
    reservation: string | null
    travelType: $Enums.travelType | null
    time: $Enums.Time | null
    createdAt: Date | null
    travelImageId: string | null
    uuid: string | null
  }

  export type TravelMaxAggregateOutputType = {
    name: string | null
    route: string | null
    description: string | null
    duration: string | null
    sightseeingTime: string | null
    drivingTime: string | null
    drivingDistance: string | null
    included: string | null
    notIncluded: string | null
    reservation: string | null
    travelType: $Enums.travelType | null
    time: $Enums.Time | null
    createdAt: Date | null
    travelImageId: string | null
    uuid: string | null
  }

  export type TravelCountAggregateOutputType = {
    name: number
    route: number
    description: number
    duration: number
    sightseeingTime: number
    drivingTime: number
    drivingDistance: number
    included: number
    notIncluded: number
    reservation: number
    travelType: number
    time: number
    createdAt: number
    travelImageId: number
    uuid: number
    _all: number
  }


  export type TravelMinAggregateInputType = {
    name?: true
    route?: true
    description?: true
    duration?: true
    sightseeingTime?: true
    drivingTime?: true
    drivingDistance?: true
    included?: true
    notIncluded?: true
    reservation?: true
    travelType?: true
    time?: true
    createdAt?: true
    travelImageId?: true
    uuid?: true
  }

  export type TravelMaxAggregateInputType = {
    name?: true
    route?: true
    description?: true
    duration?: true
    sightseeingTime?: true
    drivingTime?: true
    drivingDistance?: true
    included?: true
    notIncluded?: true
    reservation?: true
    travelType?: true
    time?: true
    createdAt?: true
    travelImageId?: true
    uuid?: true
  }

  export type TravelCountAggregateInputType = {
    name?: true
    route?: true
    description?: true
    duration?: true
    sightseeingTime?: true
    drivingTime?: true
    drivingDistance?: true
    included?: true
    notIncluded?: true
    reservation?: true
    travelType?: true
    time?: true
    createdAt?: true
    travelImageId?: true
    uuid?: true
    _all?: true
  }

  export type TravelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travel to aggregate.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationAndSearchRelevanceInput | TravelOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Travels
    **/
    _count?: true | TravelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelMaxAggregateInputType
  }

  export type GetTravelAggregateType<T extends TravelAggregateArgs> = {
        [P in keyof T & keyof AggregateTravel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel[P]>
      : GetScalarType<T[P], AggregateTravel[P]>
  }




  export type TravelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithAggregationInput | TravelOrderByWithAggregationInput[]
    by: TravelScalarFieldEnum[] | TravelScalarFieldEnum
    having?: TravelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelCountAggregateInputType | true
    _min?: TravelMinAggregateInputType
    _max?: TravelMaxAggregateInputType
  }

  export type TravelGroupByOutputType = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included: string | null
    notIncluded: string | null
    reservation: string | null
    travelType: $Enums.travelType
    time: $Enums.Time
    createdAt: Date
    travelImageId: string
    uuid: string
    _count: TravelCountAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  type GetTravelGroupByPayload<T extends TravelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelGroupByOutputType[P]>
            : GetScalarType<T[P], TravelGroupByOutputType[P]>
        }
      >
    >


  export type TravelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    route?: boolean
    description?: boolean
    duration?: boolean
    sightseeingTime?: boolean
    drivingTime?: boolean
    drivingDistance?: boolean
    included?: boolean
    notIncluded?: boolean
    reservation?: boolean
    travelType?: boolean
    time?: boolean
    createdAt?: boolean
    travelImageId?: boolean
    uuid?: boolean
    pricesPerCar?: boolean | Travel$pricesPerCarArgs<ExtArgs>
    travelImage?: boolean | TravelImageDefaultArgs<ExtArgs>
    itinerary?: boolean | Travel$itineraryArgs<ExtArgs>
    _count?: boolean | TravelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectScalar = {
    name?: boolean
    route?: boolean
    description?: boolean
    duration?: boolean
    sightseeingTime?: boolean
    drivingTime?: boolean
    drivingDistance?: boolean
    included?: boolean
    notIncluded?: boolean
    reservation?: boolean
    travelType?: boolean
    time?: boolean
    createdAt?: boolean
    travelImageId?: boolean
    uuid?: boolean
  }

  export type TravelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricesPerCar?: boolean | Travel$pricesPerCarArgs<ExtArgs>
    travelImage?: boolean | TravelImageDefaultArgs<ExtArgs>
    itinerary?: boolean | Travel$itineraryArgs<ExtArgs>
    _count?: boolean | TravelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TravelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Travel"
    objects: {
      pricesPerCar: Prisma.$PricingTierPayload<ExtArgs>[]
      travelImage: Prisma.$TravelImagePayload<ExtArgs>
      itinerary: Prisma.$ItineraryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      route: string
      description: string
      duration: string
      sightseeingTime: string
      drivingTime: string
      drivingDistance: string
      included: string | null
      notIncluded: string | null
      reservation: string | null
      travelType: $Enums.travelType
      time: $Enums.Time
      createdAt: Date
      travelImageId: string
      uuid: string
    }, ExtArgs["result"]["travel"]>
    composites: {}
  }


  type TravelGetPayload<S extends boolean | null | undefined | TravelDefaultArgs> = $Result.GetResult<Prisma.$TravelPayload, S>

  type TravelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TravelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TravelCountAggregateInputType | true
    }

  export interface TravelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Travel'], meta: { name: 'Travel' } }
    /**
     * Find zero or one Travel that matches the filter.
     * @param {TravelFindUniqueArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TravelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TravelFindUniqueArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Travel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TravelFindUniqueOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TravelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Travel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TravelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelFindFirstArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Travel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TravelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Travels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travels
     * const travels = await prisma.travel.findMany()
     * 
     * // Get first 10 Travels
     * const travels = await prisma.travel.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const travelWithNameOnly = await prisma.travel.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends TravelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Travel.
     * @param {TravelCreateArgs} args - Arguments to create a Travel.
     * @example
     * // Create one Travel
     * const Travel = await prisma.travel.create({
     *   data: {
     *     // ... data to create a Travel
     *   }
     * })
     * 
    **/
    create<T extends TravelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelCreateArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Travels.
     *     @param {TravelCreateManyArgs} args - Arguments to create many Travels.
     *     @example
     *     // Create many Travels
     *     const travel = await prisma.travel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TravelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Travel.
     * @param {TravelDeleteArgs} args - Arguments to delete one Travel.
     * @example
     * // Delete one Travel
     * const Travel = await prisma.travel.delete({
     *   where: {
     *     // ... filter to delete one Travel
     *   }
     * })
     * 
    **/
    delete<T extends TravelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TravelDeleteArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Travel.
     * @param {TravelUpdateArgs} args - Arguments to update one Travel.
     * @example
     * // Update one Travel
     * const travel = await prisma.travel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TravelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelUpdateArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Travels.
     * @param {TravelDeleteManyArgs} args - Arguments to filter Travels to delete.
     * @example
     * // Delete a few Travels
     * const { count } = await prisma.travel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TravelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TravelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TravelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Travel.
     * @param {TravelUpsertArgs} args - Arguments to update or create a Travel.
     * @example
     * // Update or create a Travel
     * const travel = await prisma.travel.upsert({
     *   create: {
     *     // ... data to create a Travel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel we want to update
     *   }
     * })
    **/
    upsert<T extends TravelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TravelUpsertArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelCountArgs} args - Arguments to filter Travels to count.
     * @example
     * // Count the number of Travels
     * const count = await prisma.travel.count({
     *   where: {
     *     // ... the filter for the Travels we want to count
     *   }
     * })
    **/
    count<T extends TravelCountArgs>(
      args?: Subset<T, TravelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelAggregateArgs>(args: Subset<T, TravelAggregateArgs>): Prisma.PrismaPromise<GetTravelAggregateType<T>>

    /**
     * Group by Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelGroupByArgs['orderBy'] }
        : { orderBy?: TravelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Travel model
   */
  readonly fields: TravelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Travel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pricesPerCar<T extends Travel$pricesPerCarArgs<ExtArgs> = {}>(args?: Subset<T, Travel$pricesPerCarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'findMany'> | Null>;

    travelImage<T extends TravelImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelImageDefaultArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    itinerary<T extends Travel$itineraryArgs<ExtArgs> = {}>(args?: Subset<T, Travel$itineraryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Travel model
   */ 
  interface TravelFieldRefs {
    readonly name: FieldRef<"Travel", 'String'>
    readonly route: FieldRef<"Travel", 'String'>
    readonly description: FieldRef<"Travel", 'String'>
    readonly duration: FieldRef<"Travel", 'String'>
    readonly sightseeingTime: FieldRef<"Travel", 'String'>
    readonly drivingTime: FieldRef<"Travel", 'String'>
    readonly drivingDistance: FieldRef<"Travel", 'String'>
    readonly included: FieldRef<"Travel", 'String'>
    readonly notIncluded: FieldRef<"Travel", 'String'>
    readonly reservation: FieldRef<"Travel", 'String'>
    readonly travelType: FieldRef<"Travel", 'travelType'>
    readonly time: FieldRef<"Travel", 'Time'>
    readonly createdAt: FieldRef<"Travel", 'DateTime'>
    readonly travelImageId: FieldRef<"Travel", 'String'>
    readonly uuid: FieldRef<"Travel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Travel findUnique
   */
  export type TravelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }


  /**
   * Travel findUniqueOrThrow
   */
  export type TravelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }


  /**
   * Travel findFirst
   */
  export type TravelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationAndSearchRelevanceInput | TravelOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }


  /**
   * Travel findFirstOrThrow
   */
  export type TravelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationAndSearchRelevanceInput | TravelOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }


  /**
   * Travel findMany
   */
  export type TravelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travels to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationAndSearchRelevanceInput | TravelOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }


  /**
   * Travel create
   */
  export type TravelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to create a Travel.
     */
    data: XOR<TravelCreateInput, TravelUncheckedCreateInput>
  }


  /**
   * Travel createMany
   */
  export type TravelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Travel update
   */
  export type TravelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to update a Travel.
     */
    data: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
    /**
     * Choose, which Travel to update.
     */
    where: TravelWhereUniqueInput
  }


  /**
   * Travel updateMany
   */
  export type TravelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
  }


  /**
   * Travel upsert
   */
  export type TravelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The filter to search for the Travel to update in case it exists.
     */
    where: TravelWhereUniqueInput
    /**
     * In case the Travel found by the `where` argument doesn't exist, create a new Travel with this data.
     */
    create: XOR<TravelCreateInput, TravelUncheckedCreateInput>
    /**
     * In case the Travel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
  }


  /**
   * Travel delete
   */
  export type TravelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter which Travel to delete.
     */
    where: TravelWhereUniqueInput
  }


  /**
   * Travel deleteMany
   */
  export type TravelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travels to delete
     */
    where?: TravelWhereInput
  }


  /**
   * Travel.pricesPerCar
   */
  export type Travel$pricesPerCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    where?: PricingTierWhereInput
    orderBy?: PricingTierOrderByWithRelationAndSearchRelevanceInput | PricingTierOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PricingTierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }


  /**
   * Travel.itinerary
   */
  export type Travel$itineraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    where?: ItineraryWhereInput
    orderBy?: ItineraryOrderByWithRelationAndSearchRelevanceInput | ItineraryOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ItineraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }


  /**
   * Travel without action
   */
  export type TravelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
  }



  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    capacity: number | null
  }

  export type CarSumAggregateOutputType = {
    capacity: number | null
  }

  export type CarMinAggregateOutputType = {
    included: string | null
    carType: string | null
    uuid: string | null
    capacity: number | null
  }

  export type CarMaxAggregateOutputType = {
    included: string | null
    carType: string | null
    uuid: string | null
    capacity: number | null
  }

  export type CarCountAggregateOutputType = {
    models: number
    included: number
    carType: number
    uuid: number
    capacity: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    capacity?: true
  }

  export type CarSumAggregateInputType = {
    capacity?: true
  }

  export type CarMinAggregateInputType = {
    included?: true
    carType?: true
    uuid?: true
    capacity?: true
  }

  export type CarMaxAggregateInputType = {
    included?: true
    carType?: true
    uuid?: true
    capacity?: true
  }

  export type CarCountAggregateInputType = {
    models?: true
    included?: true
    carType?: true
    uuid?: true
    capacity?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationAndSearchRelevanceInput | CarOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    models: string[]
    included: string | null
    carType: string
    uuid: string
    capacity: number
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    models?: boolean
    included?: boolean
    carType?: boolean
    uuid?: boolean
    capacity?: boolean
    pictures?: boolean | Car$picturesArgs<ExtArgs>
    prices?: boolean | Car$pricesArgs<ExtArgs>
    transferOption?: boolean | Car$transferOptionArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    models?: boolean
    included?: boolean
    carType?: boolean
    uuid?: boolean
    capacity?: boolean
  }

  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | Car$picturesArgs<ExtArgs>
    prices?: boolean | Car$pricesArgs<ExtArgs>
    transferOption?: boolean | Car$transferOptionArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      prices: Prisma.$PricingTierPayload<ExtArgs>[]
      transferOption: Prisma.$TransferOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      models: string[]
      included: string | null
      carType: string
      uuid: string
      capacity: number
    }, ExtArgs["result"]["car"]>
    composites: {}
  }


  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>
    ): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Car that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>
    ): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `models`
     * const carWithModelsOnly = await prisma.car.findMany({ select: { models: true } })
     * 
    **/
    findMany<T extends CarFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
    **/
    create<T extends CarCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarCreateArgs<ExtArgs>>
    ): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cars.
     *     @param {CarCreateManyArgs} args - Arguments to create many Cars.
     *     @example
     *     // Create many Cars
     *     const car = await prisma.car.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
    **/
    delete<T extends CarDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarDeleteArgs<ExtArgs>>
    ): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarUpdateArgs<ExtArgs>>
    ): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
    **/
    upsert<T extends CarUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarUpsertArgs<ExtArgs>>
    ): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pictures<T extends Car$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Car$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findMany'> | Null>;

    prices<T extends Car$pricesArgs<ExtArgs> = {}>(args?: Subset<T, Car$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'findMany'> | Null>;

    transferOption<T extends Car$transferOptionArgs<ExtArgs> = {}>(args?: Subset<T, Car$transferOptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Car model
   */ 
  interface CarFieldRefs {
    readonly models: FieldRef<"Car", 'String[]'>
    readonly included: FieldRef<"Car", 'String'>
    readonly carType: FieldRef<"Car", 'String'>
    readonly uuid: FieldRef<"Car", 'String'>
    readonly capacity: FieldRef<"Car", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }


  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }


  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationAndSearchRelevanceInput | CarOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }


  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationAndSearchRelevanceInput | CarOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }


  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationAndSearchRelevanceInput | CarOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }


  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }


  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }


  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
  }


  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }


  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }


  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
  }


  /**
   * Car.pictures
   */
  export type Car$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Car.prices
   */
  export type Car$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    where?: PricingTierWhereInput
    orderBy?: PricingTierOrderByWithRelationAndSearchRelevanceInput | PricingTierOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PricingTierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }


  /**
   * Car.transferOption
   */
  export type Car$transferOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    where?: TransferOptionWhereInput
    orderBy?: TransferOptionOrderByWithRelationAndSearchRelevanceInput | TransferOptionOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: TransferOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferOptionScalarFieldEnum | TransferOptionScalarFieldEnum[]
  }


  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
  }



  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureMinAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
    carId: string | null
  }

  export type PictureMaxAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
    carId: string | null
  }

  export type PictureCountAggregateOutputType = {
    fileId: number
    fileBase64: number
    createdAt: number
    uuid: number
    carId: number
    _all: number
  }


  export type PictureMinAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
    carId?: true
  }

  export type PictureMaxAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
    carId?: true
  }

  export type PictureCountAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
    carId?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type PictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithAggregationInput | PictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: PictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    fileId: string
    fileBase64: string
    createdAt: Date
    uuid: string
    carId: string
    _count: PictureCountAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type PictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
    carId?: boolean
  }

  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }


  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fileId: string
      fileBase64: string
      createdAt: Date
      uuid: string
      carId: string
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }


  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Picture'], meta: { name: 'Picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PictureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Picture that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PictureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const pictureWithFileIdOnly = await prisma.picture.findMany({ select: { fileId: true } })
     * 
    **/
    findMany<T extends PictureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
    **/
    create<T extends PictureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PictureCreateArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pictures.
     *     @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     *     @example
     *     // Create many Pictures
     *     const picture = await prisma.picture.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PictureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
    **/
    delete<T extends PictureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PictureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PictureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PictureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
    **/
    upsert<T extends PictureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs['orderBy'] }
        : { orderBy?: PictureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Picture model
   */
  readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Picture model
   */ 
  interface PictureFieldRefs {
    readonly fileId: FieldRef<"Picture", 'String'>
    readonly fileBase64: FieldRef<"Picture", 'String'>
    readonly createdAt: FieldRef<"Picture", 'DateTime'>
    readonly uuid: FieldRef<"Picture", 'String'>
    readonly carId: FieldRef<"Picture", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }


  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }


  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Picture create
   */
  export type PictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
  }


  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Picture update
   */
  export type PictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput
  }


  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
  }


  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
  }


  /**
   * Picture delete
   */
  export type PictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
  }


  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput
  }


  /**
   * Picture without action
   */
  export type PictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
  }



  /**
   * Model PricingTier
   */

  export type AggregatePricingTier = {
    _count: PricingTierCountAggregateOutputType | null
    _avg: PricingTierAvgAggregateOutputType | null
    _sum: PricingTierSumAggregateOutputType | null
    _min: PricingTierMinAggregateOutputType | null
    _max: PricingTierMaxAggregateOutputType | null
  }

  export type PricingTierAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PricingTierSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PricingTierMinAggregateOutputType = {
    id: number | null
    carId: string | null
    travelId: string | null
    distance: string | null
    price: number | null
  }

  export type PricingTierMaxAggregateOutputType = {
    id: number | null
    carId: string | null
    travelId: string | null
    distance: string | null
    price: number | null
  }

  export type PricingTierCountAggregateOutputType = {
    id: number
    carId: number
    travelId: number
    distance: number
    price: number
    _all: number
  }


  export type PricingTierAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PricingTierSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PricingTierMinAggregateInputType = {
    id?: true
    carId?: true
    travelId?: true
    distance?: true
    price?: true
  }

  export type PricingTierMaxAggregateInputType = {
    id?: true
    carId?: true
    travelId?: true
    distance?: true
    price?: true
  }

  export type PricingTierCountAggregateInputType = {
    id?: true
    carId?: true
    travelId?: true
    distance?: true
    price?: true
    _all?: true
  }

  export type PricingTierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingTier to aggregate.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationAndSearchRelevanceInput | PricingTierOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingTiers
    **/
    _count?: true | PricingTierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingTierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingTierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingTierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingTierMaxAggregateInputType
  }

  export type GetPricingTierAggregateType<T extends PricingTierAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingTier[P]>
      : GetScalarType<T[P], AggregatePricingTier[P]>
  }




  export type PricingTierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingTierWhereInput
    orderBy?: PricingTierOrderByWithAggregationInput | PricingTierOrderByWithAggregationInput[]
    by: PricingTierScalarFieldEnum[] | PricingTierScalarFieldEnum
    having?: PricingTierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingTierCountAggregateInputType | true
    _avg?: PricingTierAvgAggregateInputType
    _sum?: PricingTierSumAggregateInputType
    _min?: PricingTierMinAggregateInputType
    _max?: PricingTierMaxAggregateInputType
  }

  export type PricingTierGroupByOutputType = {
    id: number
    carId: string | null
    travelId: string | null
    distance: string
    price: number
    _count: PricingTierCountAggregateOutputType | null
    _avg: PricingTierAvgAggregateOutputType | null
    _sum: PricingTierSumAggregateOutputType | null
    _min: PricingTierMinAggregateOutputType | null
    _max: PricingTierMaxAggregateOutputType | null
  }

  type GetPricingTierGroupByPayload<T extends PricingTierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingTierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingTierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingTierGroupByOutputType[P]>
            : GetScalarType<T[P], PricingTierGroupByOutputType[P]>
        }
      >
    >


  export type PricingTierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    travelId?: boolean
    distance?: boolean
    price?: boolean
    car?: boolean | PricingTier$carArgs<ExtArgs>
    travel?: boolean | PricingTier$travelArgs<ExtArgs>
  }, ExtArgs["result"]["pricingTier"]>

  export type PricingTierSelectScalar = {
    id?: boolean
    carId?: boolean
    travelId?: boolean
    distance?: boolean
    price?: boolean
  }

  export type PricingTierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | PricingTier$carArgs<ExtArgs>
    travel?: boolean | PricingTier$travelArgs<ExtArgs>
  }


  export type $PricingTierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingTier"
    objects: {
      car: Prisma.$CarPayload<ExtArgs> | null
      travel: Prisma.$TravelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: string | null
      travelId: string | null
      distance: string
      price: number
    }, ExtArgs["result"]["pricingTier"]>
    composites: {}
  }


  type PricingTierGetPayload<S extends boolean | null | undefined | PricingTierDefaultArgs> = $Result.GetResult<Prisma.$PricingTierPayload, S>

  type PricingTierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PricingTierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PricingTierCountAggregateInputType | true
    }

  export interface PricingTierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingTier'], meta: { name: 'PricingTier' } }
    /**
     * Find zero or one PricingTier that matches the filter.
     * @param {PricingTierFindUniqueArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PricingTierFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PricingTierFindUniqueArgs<ExtArgs>>
    ): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PricingTier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PricingTierFindUniqueOrThrowArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PricingTierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PricingTierFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PricingTier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindFirstArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PricingTierFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PricingTierFindFirstArgs<ExtArgs>>
    ): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PricingTier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindFirstOrThrowArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PricingTierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PricingTierFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PricingTiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingTiers
     * const pricingTiers = await prisma.pricingTier.findMany()
     * 
     * // Get first 10 PricingTiers
     * const pricingTiers = await prisma.pricingTier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingTierWithIdOnly = await prisma.pricingTier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PricingTierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PricingTierFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PricingTier.
     * @param {PricingTierCreateArgs} args - Arguments to create a PricingTier.
     * @example
     * // Create one PricingTier
     * const PricingTier = await prisma.pricingTier.create({
     *   data: {
     *     // ... data to create a PricingTier
     *   }
     * })
     * 
    **/
    create<T extends PricingTierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PricingTierCreateArgs<ExtArgs>>
    ): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PricingTiers.
     *     @param {PricingTierCreateManyArgs} args - Arguments to create many PricingTiers.
     *     @example
     *     // Create many PricingTiers
     *     const pricingTier = await prisma.pricingTier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PricingTierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PricingTierCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PricingTier.
     * @param {PricingTierDeleteArgs} args - Arguments to delete one PricingTier.
     * @example
     * // Delete one PricingTier
     * const PricingTier = await prisma.pricingTier.delete({
     *   where: {
     *     // ... filter to delete one PricingTier
     *   }
     * })
     * 
    **/
    delete<T extends PricingTierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PricingTierDeleteArgs<ExtArgs>>
    ): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PricingTier.
     * @param {PricingTierUpdateArgs} args - Arguments to update one PricingTier.
     * @example
     * // Update one PricingTier
     * const pricingTier = await prisma.pricingTier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PricingTierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PricingTierUpdateArgs<ExtArgs>>
    ): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PricingTiers.
     * @param {PricingTierDeleteManyArgs} args - Arguments to filter PricingTiers to delete.
     * @example
     * // Delete a few PricingTiers
     * const { count } = await prisma.pricingTier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PricingTierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PricingTierDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingTiers
     * const pricingTier = await prisma.pricingTier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PricingTierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PricingTierUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PricingTier.
     * @param {PricingTierUpsertArgs} args - Arguments to update or create a PricingTier.
     * @example
     * // Update or create a PricingTier
     * const pricingTier = await prisma.pricingTier.upsert({
     *   create: {
     *     // ... data to create a PricingTier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingTier we want to update
     *   }
     * })
    **/
    upsert<T extends PricingTierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PricingTierUpsertArgs<ExtArgs>>
    ): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PricingTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierCountArgs} args - Arguments to filter PricingTiers to count.
     * @example
     * // Count the number of PricingTiers
     * const count = await prisma.pricingTier.count({
     *   where: {
     *     // ... the filter for the PricingTiers we want to count
     *   }
     * })
    **/
    count<T extends PricingTierCountArgs>(
      args?: Subset<T, PricingTierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingTierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PricingTierAggregateArgs>(args: Subset<T, PricingTierAggregateArgs>): Prisma.PrismaPromise<GetPricingTierAggregateType<T>>

    /**
     * Group by PricingTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PricingTierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingTierGroupByArgs['orderBy'] }
        : { orderBy?: PricingTierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricingTierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingTier model
   */
  readonly fields: PricingTierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingTier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingTierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends PricingTier$carArgs<ExtArgs> = {}>(args?: Subset<T, PricingTier$carArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    travel<T extends PricingTier$travelArgs<ExtArgs> = {}>(args?: Subset<T, PricingTier$travelArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PricingTier model
   */ 
  interface PricingTierFieldRefs {
    readonly id: FieldRef<"PricingTier", 'Int'>
    readonly carId: FieldRef<"PricingTier", 'String'>
    readonly travelId: FieldRef<"PricingTier", 'String'>
    readonly distance: FieldRef<"PricingTier", 'String'>
    readonly price: FieldRef<"PricingTier", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PricingTier findUnique
   */
  export type PricingTierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where: PricingTierWhereUniqueInput
  }


  /**
   * PricingTier findUniqueOrThrow
   */
  export type PricingTierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where: PricingTierWhereUniqueInput
  }


  /**
   * PricingTier findFirst
   */
  export type PricingTierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationAndSearchRelevanceInput | PricingTierOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingTiers.
     */
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }


  /**
   * PricingTier findFirstOrThrow
   */
  export type PricingTierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationAndSearchRelevanceInput | PricingTierOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingTiers.
     */
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }


  /**
   * PricingTier findMany
   */
  export type PricingTierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTiers to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationAndSearchRelevanceInput | PricingTierOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }


  /**
   * PricingTier create
   */
  export type PricingTierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingTier.
     */
    data: XOR<PricingTierCreateInput, PricingTierUncheckedCreateInput>
  }


  /**
   * PricingTier createMany
   */
  export type PricingTierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingTiers.
     */
    data: PricingTierCreateManyInput | PricingTierCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PricingTier update
   */
  export type PricingTierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingTier.
     */
    data: XOR<PricingTierUpdateInput, PricingTierUncheckedUpdateInput>
    /**
     * Choose, which PricingTier to update.
     */
    where: PricingTierWhereUniqueInput
  }


  /**
   * PricingTier updateMany
   */
  export type PricingTierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingTiers.
     */
    data: XOR<PricingTierUpdateManyMutationInput, PricingTierUncheckedUpdateManyInput>
    /**
     * Filter which PricingTiers to update
     */
    where?: PricingTierWhereInput
  }


  /**
   * PricingTier upsert
   */
  export type PricingTierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingTier to update in case it exists.
     */
    where: PricingTierWhereUniqueInput
    /**
     * In case the PricingTier found by the `where` argument doesn't exist, create a new PricingTier with this data.
     */
    create: XOR<PricingTierCreateInput, PricingTierUncheckedCreateInput>
    /**
     * In case the PricingTier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingTierUpdateInput, PricingTierUncheckedUpdateInput>
  }


  /**
   * PricingTier delete
   */
  export type PricingTierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter which PricingTier to delete.
     */
    where: PricingTierWhereUniqueInput
  }


  /**
   * PricingTier deleteMany
   */
  export type PricingTierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingTiers to delete
     */
    where?: PricingTierWhereInput
  }


  /**
   * PricingTier.car
   */
  export type PricingTier$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
  }


  /**
   * PricingTier.travel
   */
  export type PricingTier$travelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
  }


  /**
   * PricingTier without action
   */
  export type PricingTierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricingTierInclude<ExtArgs> | null
  }



  /**
   * Model Itinerary
   */

  export type AggregateItinerary = {
    _count: ItineraryCountAggregateOutputType | null
    _min: ItineraryMinAggregateOutputType | null
    _max: ItineraryMaxAggregateOutputType | null
  }

  export type ItineraryMinAggregateOutputType = {
    route: string | null
    description: string | null
    duration: string | null
    time: $Enums.Time | null
    uuid: string | null
  }

  export type ItineraryMaxAggregateOutputType = {
    route: string | null
    description: string | null
    duration: string | null
    time: $Enums.Time | null
    uuid: string | null
  }

  export type ItineraryCountAggregateOutputType = {
    route: number
    description: number
    duration: number
    time: number
    uuid: number
    _all: number
  }


  export type ItineraryMinAggregateInputType = {
    route?: true
    description?: true
    duration?: true
    time?: true
    uuid?: true
  }

  export type ItineraryMaxAggregateInputType = {
    route?: true
    description?: true
    duration?: true
    time?: true
    uuid?: true
  }

  export type ItineraryCountAggregateInputType = {
    route?: true
    description?: true
    duration?: true
    time?: true
    uuid?: true
    _all?: true
  }

  export type ItineraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Itinerary to aggregate.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationAndSearchRelevanceInput | ItineraryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Itineraries
    **/
    _count?: true | ItineraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItineraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItineraryMaxAggregateInputType
  }

  export type GetItineraryAggregateType<T extends ItineraryAggregateArgs> = {
        [P in keyof T & keyof AggregateItinerary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItinerary[P]>
      : GetScalarType<T[P], AggregateItinerary[P]>
  }




  export type ItineraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItineraryWhereInput
    orderBy?: ItineraryOrderByWithAggregationInput | ItineraryOrderByWithAggregationInput[]
    by: ItineraryScalarFieldEnum[] | ItineraryScalarFieldEnum
    having?: ItineraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItineraryCountAggregateInputType | true
    _min?: ItineraryMinAggregateInputType
    _max?: ItineraryMaxAggregateInputType
  }

  export type ItineraryGroupByOutputType = {
    route: string
    description: string
    duration: string
    time: $Enums.Time
    uuid: string
    _count: ItineraryCountAggregateOutputType | null
    _min: ItineraryMinAggregateOutputType | null
    _max: ItineraryMaxAggregateOutputType | null
  }

  type GetItineraryGroupByPayload<T extends ItineraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItineraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItineraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItineraryGroupByOutputType[P]>
            : GetScalarType<T[P], ItineraryGroupByOutputType[P]>
        }
      >
    >


  export type ItinerarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    route?: boolean
    description?: boolean
    duration?: boolean
    time?: boolean
    uuid?: boolean
    travel?: boolean | Itinerary$travelArgs<ExtArgs>
    _count?: boolean | ItineraryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary"]>

  export type ItinerarySelectScalar = {
    route?: boolean
    description?: boolean
    duration?: boolean
    time?: boolean
    uuid?: boolean
  }

  export type ItineraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | Itinerary$travelArgs<ExtArgs>
    _count?: boolean | ItineraryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ItineraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Itinerary"
    objects: {
      travel: Prisma.$TravelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      route: string
      description: string
      duration: string
      time: $Enums.Time
      uuid: string
    }, ExtArgs["result"]["itinerary"]>
    composites: {}
  }


  type ItineraryGetPayload<S extends boolean | null | undefined | ItineraryDefaultArgs> = $Result.GetResult<Prisma.$ItineraryPayload, S>

  type ItineraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItineraryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItineraryCountAggregateInputType | true
    }

  export interface ItineraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Itinerary'], meta: { name: 'Itinerary' } }
    /**
     * Find zero or one Itinerary that matches the filter.
     * @param {ItineraryFindUniqueArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItineraryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItineraryFindUniqueArgs<ExtArgs>>
    ): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Itinerary that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItineraryFindUniqueOrThrowArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItineraryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItineraryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Itinerary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindFirstArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItineraryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItineraryFindFirstArgs<ExtArgs>>
    ): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Itinerary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindFirstOrThrowArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItineraryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItineraryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Itineraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Itineraries
     * const itineraries = await prisma.itinerary.findMany()
     * 
     * // Get first 10 Itineraries
     * const itineraries = await prisma.itinerary.findMany({ take: 10 })
     * 
     * // Only select the `route`
     * const itineraryWithRouteOnly = await prisma.itinerary.findMany({ select: { route: true } })
     * 
    **/
    findMany<T extends ItineraryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItineraryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Itinerary.
     * @param {ItineraryCreateArgs} args - Arguments to create a Itinerary.
     * @example
     * // Create one Itinerary
     * const Itinerary = await prisma.itinerary.create({
     *   data: {
     *     // ... data to create a Itinerary
     *   }
     * })
     * 
    **/
    create<T extends ItineraryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItineraryCreateArgs<ExtArgs>>
    ): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Itineraries.
     *     @param {ItineraryCreateManyArgs} args - Arguments to create many Itineraries.
     *     @example
     *     // Create many Itineraries
     *     const itinerary = await prisma.itinerary.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItineraryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItineraryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Itinerary.
     * @param {ItineraryDeleteArgs} args - Arguments to delete one Itinerary.
     * @example
     * // Delete one Itinerary
     * const Itinerary = await prisma.itinerary.delete({
     *   where: {
     *     // ... filter to delete one Itinerary
     *   }
     * })
     * 
    **/
    delete<T extends ItineraryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItineraryDeleteArgs<ExtArgs>>
    ): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Itinerary.
     * @param {ItineraryUpdateArgs} args - Arguments to update one Itinerary.
     * @example
     * // Update one Itinerary
     * const itinerary = await prisma.itinerary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItineraryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItineraryUpdateArgs<ExtArgs>>
    ): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Itineraries.
     * @param {ItineraryDeleteManyArgs} args - Arguments to filter Itineraries to delete.
     * @example
     * // Delete a few Itineraries
     * const { count } = await prisma.itinerary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItineraryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItineraryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Itineraries
     * const itinerary = await prisma.itinerary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItineraryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItineraryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Itinerary.
     * @param {ItineraryUpsertArgs} args - Arguments to update or create a Itinerary.
     * @example
     * // Update or create a Itinerary
     * const itinerary = await prisma.itinerary.upsert({
     *   create: {
     *     // ... data to create a Itinerary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Itinerary we want to update
     *   }
     * })
    **/
    upsert<T extends ItineraryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItineraryUpsertArgs<ExtArgs>>
    ): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryCountArgs} args - Arguments to filter Itineraries to count.
     * @example
     * // Count the number of Itineraries
     * const count = await prisma.itinerary.count({
     *   where: {
     *     // ... the filter for the Itineraries we want to count
     *   }
     * })
    **/
    count<T extends ItineraryCountArgs>(
      args?: Subset<T, ItineraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItineraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Itinerary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItineraryAggregateArgs>(args: Subset<T, ItineraryAggregateArgs>): Prisma.PrismaPromise<GetItineraryAggregateType<T>>

    /**
     * Group by Itinerary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItineraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItineraryGroupByArgs['orderBy'] }
        : { orderBy?: ItineraryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItineraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItineraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Itinerary model
   */
  readonly fields: ItineraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Itinerary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItineraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    travel<T extends Itinerary$travelArgs<ExtArgs> = {}>(args?: Subset<T, Itinerary$travelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Itinerary model
   */ 
  interface ItineraryFieldRefs {
    readonly route: FieldRef<"Itinerary", 'String'>
    readonly description: FieldRef<"Itinerary", 'String'>
    readonly duration: FieldRef<"Itinerary", 'String'>
    readonly time: FieldRef<"Itinerary", 'Time'>
    readonly uuid: FieldRef<"Itinerary", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Itinerary findUnique
   */
  export type ItineraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where: ItineraryWhereUniqueInput
  }


  /**
   * Itinerary findUniqueOrThrow
   */
  export type ItineraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where: ItineraryWhereUniqueInput
  }


  /**
   * Itinerary findFirst
   */
  export type ItineraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationAndSearchRelevanceInput | ItineraryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Itineraries.
     */
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }


  /**
   * Itinerary findFirstOrThrow
   */
  export type ItineraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationAndSearchRelevanceInput | ItineraryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Itineraries.
     */
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }


  /**
   * Itinerary findMany
   */
  export type ItineraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itineraries to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationAndSearchRelevanceInput | ItineraryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }


  /**
   * Itinerary create
   */
  export type ItineraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The data needed to create a Itinerary.
     */
    data: XOR<ItineraryCreateInput, ItineraryUncheckedCreateInput>
  }


  /**
   * Itinerary createMany
   */
  export type ItineraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Itineraries.
     */
    data: ItineraryCreateManyInput | ItineraryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Itinerary update
   */
  export type ItineraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The data needed to update a Itinerary.
     */
    data: XOR<ItineraryUpdateInput, ItineraryUncheckedUpdateInput>
    /**
     * Choose, which Itinerary to update.
     */
    where: ItineraryWhereUniqueInput
  }


  /**
   * Itinerary updateMany
   */
  export type ItineraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Itineraries.
     */
    data: XOR<ItineraryUpdateManyMutationInput, ItineraryUncheckedUpdateManyInput>
    /**
     * Filter which Itineraries to update
     */
    where?: ItineraryWhereInput
  }


  /**
   * Itinerary upsert
   */
  export type ItineraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The filter to search for the Itinerary to update in case it exists.
     */
    where: ItineraryWhereUniqueInput
    /**
     * In case the Itinerary found by the `where` argument doesn't exist, create a new Itinerary with this data.
     */
    create: XOR<ItineraryCreateInput, ItineraryUncheckedCreateInput>
    /**
     * In case the Itinerary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItineraryUpdateInput, ItineraryUncheckedUpdateInput>
  }


  /**
   * Itinerary delete
   */
  export type ItineraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter which Itinerary to delete.
     */
    where: ItineraryWhereUniqueInput
  }


  /**
   * Itinerary deleteMany
   */
  export type ItineraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Itineraries to delete
     */
    where?: ItineraryWhereInput
  }


  /**
   * Itinerary.travel
   */
  export type Itinerary$travelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithRelationAndSearchRelevanceInput | TravelOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: TravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }


  /**
   * Itinerary without action
   */
  export type ItineraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItineraryInclude<ExtArgs> | null
  }



  /**
   * Model TravelImage
   */

  export type AggregateTravelImage = {
    _count: TravelImageCountAggregateOutputType | null
    _min: TravelImageMinAggregateOutputType | null
    _max: TravelImageMaxAggregateOutputType | null
  }

  export type TravelImageMinAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type TravelImageMaxAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type TravelImageCountAggregateOutputType = {
    fileId: number
    fileBase64: number
    createdAt: number
    uuid: number
    _all: number
  }


  export type TravelImageMinAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
  }

  export type TravelImageMaxAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
  }

  export type TravelImageCountAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
    _all?: true
  }

  export type TravelImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelImage to aggregate.
     */
    where?: TravelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelImages to fetch.
     */
    orderBy?: TravelImageOrderByWithRelationAndSearchRelevanceInput | TravelImageOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelImages
    **/
    _count?: true | TravelImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelImageMaxAggregateInputType
  }

  export type GetTravelImageAggregateType<T extends TravelImageAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelImage[P]>
      : GetScalarType<T[P], AggregateTravelImage[P]>
  }




  export type TravelImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelImageWhereInput
    orderBy?: TravelImageOrderByWithAggregationInput | TravelImageOrderByWithAggregationInput[]
    by: TravelImageScalarFieldEnum[] | TravelImageScalarFieldEnum
    having?: TravelImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelImageCountAggregateInputType | true
    _min?: TravelImageMinAggregateInputType
    _max?: TravelImageMaxAggregateInputType
  }

  export type TravelImageGroupByOutputType = {
    fileId: string
    fileBase64: string
    createdAt: Date
    uuid: string
    _count: TravelImageCountAggregateOutputType | null
    _min: TravelImageMinAggregateOutputType | null
    _max: TravelImageMaxAggregateOutputType | null
  }

  type GetTravelImageGroupByPayload<T extends TravelImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelImageGroupByOutputType[P]>
            : GetScalarType<T[P], TravelImageGroupByOutputType[P]>
        }
      >
    >


  export type TravelImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
    travel?: boolean | TravelImage$travelArgs<ExtArgs>
    _count?: boolean | TravelImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelImage"]>

  export type TravelImageSelectScalar = {
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
  }

  export type TravelImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | TravelImage$travelArgs<ExtArgs>
    _count?: boolean | TravelImageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TravelImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelImage"
    objects: {
      travel: Prisma.$TravelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fileId: string
      fileBase64: string
      createdAt: Date
      uuid: string
    }, ExtArgs["result"]["travelImage"]>
    composites: {}
  }


  type TravelImageGetPayload<S extends boolean | null | undefined | TravelImageDefaultArgs> = $Result.GetResult<Prisma.$TravelImagePayload, S>

  type TravelImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TravelImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TravelImageCountAggregateInputType | true
    }

  export interface TravelImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelImage'], meta: { name: 'TravelImage' } }
    /**
     * Find zero or one TravelImage that matches the filter.
     * @param {TravelImageFindUniqueArgs} args - Arguments to find a TravelImage
     * @example
     * // Get one TravelImage
     * const travelImage = await prisma.travelImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TravelImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TravelImageFindUniqueArgs<ExtArgs>>
    ): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TravelImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TravelImageFindUniqueOrThrowArgs} args - Arguments to find a TravelImage
     * @example
     * // Get one TravelImage
     * const travelImage = await prisma.travelImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TravelImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TravelImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageFindFirstArgs} args - Arguments to find a TravelImage
     * @example
     * // Get one TravelImage
     * const travelImage = await prisma.travelImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TravelImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelImageFindFirstArgs<ExtArgs>>
    ): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TravelImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageFindFirstOrThrowArgs} args - Arguments to find a TravelImage
     * @example
     * // Get one TravelImage
     * const travelImage = await prisma.travelImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TravelImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TravelImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelImages
     * const travelImages = await prisma.travelImage.findMany()
     * 
     * // Get first 10 TravelImages
     * const travelImages = await prisma.travelImage.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const travelImageWithFileIdOnly = await prisma.travelImage.findMany({ select: { fileId: true } })
     * 
    **/
    findMany<T extends TravelImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TravelImage.
     * @param {TravelImageCreateArgs} args - Arguments to create a TravelImage.
     * @example
     * // Create one TravelImage
     * const TravelImage = await prisma.travelImage.create({
     *   data: {
     *     // ... data to create a TravelImage
     *   }
     * })
     * 
    **/
    create<T extends TravelImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelImageCreateArgs<ExtArgs>>
    ): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TravelImages.
     *     @param {TravelImageCreateManyArgs} args - Arguments to create many TravelImages.
     *     @example
     *     // Create many TravelImages
     *     const travelImage = await prisma.travelImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TravelImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TravelImage.
     * @param {TravelImageDeleteArgs} args - Arguments to delete one TravelImage.
     * @example
     * // Delete one TravelImage
     * const TravelImage = await prisma.travelImage.delete({
     *   where: {
     *     // ... filter to delete one TravelImage
     *   }
     * })
     * 
    **/
    delete<T extends TravelImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TravelImageDeleteArgs<ExtArgs>>
    ): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TravelImage.
     * @param {TravelImageUpdateArgs} args - Arguments to update one TravelImage.
     * @example
     * // Update one TravelImage
     * const travelImage = await prisma.travelImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TravelImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelImageUpdateArgs<ExtArgs>>
    ): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TravelImages.
     * @param {TravelImageDeleteManyArgs} args - Arguments to filter TravelImages to delete.
     * @example
     * // Delete a few TravelImages
     * const { count } = await prisma.travelImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TravelImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelImages
     * const travelImage = await prisma.travelImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TravelImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TravelImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TravelImage.
     * @param {TravelImageUpsertArgs} args - Arguments to update or create a TravelImage.
     * @example
     * // Update or create a TravelImage
     * const travelImage = await prisma.travelImage.upsert({
     *   create: {
     *     // ... data to create a TravelImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelImage we want to update
     *   }
     * })
    **/
    upsert<T extends TravelImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TravelImageUpsertArgs<ExtArgs>>
    ): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TravelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageCountArgs} args - Arguments to filter TravelImages to count.
     * @example
     * // Count the number of TravelImages
     * const count = await prisma.travelImage.count({
     *   where: {
     *     // ... the filter for the TravelImages we want to count
     *   }
     * })
    **/
    count<T extends TravelImageCountArgs>(
      args?: Subset<T, TravelImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelImageAggregateArgs>(args: Subset<T, TravelImageAggregateArgs>): Prisma.PrismaPromise<GetTravelImageAggregateType<T>>

    /**
     * Group by TravelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelImageGroupByArgs['orderBy'] }
        : { orderBy?: TravelImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelImage model
   */
  readonly fields: TravelImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    travel<T extends TravelImage$travelArgs<ExtArgs> = {}>(args?: Subset<T, TravelImage$travelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TravelImage model
   */ 
  interface TravelImageFieldRefs {
    readonly fileId: FieldRef<"TravelImage", 'String'>
    readonly fileBase64: FieldRef<"TravelImage", 'String'>
    readonly createdAt: FieldRef<"TravelImage", 'DateTime'>
    readonly uuid: FieldRef<"TravelImage", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TravelImage findUnique
   */
  export type TravelImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImage to fetch.
     */
    where: TravelImageWhereUniqueInput
  }


  /**
   * TravelImage findUniqueOrThrow
   */
  export type TravelImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImage to fetch.
     */
    where: TravelImageWhereUniqueInput
  }


  /**
   * TravelImage findFirst
   */
  export type TravelImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImage to fetch.
     */
    where?: TravelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelImages to fetch.
     */
    orderBy?: TravelImageOrderByWithRelationAndSearchRelevanceInput | TravelImageOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelImages.
     */
    cursor?: TravelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelImages.
     */
    distinct?: TravelImageScalarFieldEnum | TravelImageScalarFieldEnum[]
  }


  /**
   * TravelImage findFirstOrThrow
   */
  export type TravelImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImage to fetch.
     */
    where?: TravelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelImages to fetch.
     */
    orderBy?: TravelImageOrderByWithRelationAndSearchRelevanceInput | TravelImageOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelImages.
     */
    cursor?: TravelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelImages.
     */
    distinct?: TravelImageScalarFieldEnum | TravelImageScalarFieldEnum[]
  }


  /**
   * TravelImage findMany
   */
  export type TravelImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImages to fetch.
     */
    where?: TravelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelImages to fetch.
     */
    orderBy?: TravelImageOrderByWithRelationAndSearchRelevanceInput | TravelImageOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelImages.
     */
    cursor?: TravelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelImages.
     */
    skip?: number
    distinct?: TravelImageScalarFieldEnum | TravelImageScalarFieldEnum[]
  }


  /**
   * TravelImage create
   */
  export type TravelImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelImage.
     */
    data: XOR<TravelImageCreateInput, TravelImageUncheckedCreateInput>
  }


  /**
   * TravelImage createMany
   */
  export type TravelImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelImages.
     */
    data: TravelImageCreateManyInput | TravelImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TravelImage update
   */
  export type TravelImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelImage.
     */
    data: XOR<TravelImageUpdateInput, TravelImageUncheckedUpdateInput>
    /**
     * Choose, which TravelImage to update.
     */
    where: TravelImageWhereUniqueInput
  }


  /**
   * TravelImage updateMany
   */
  export type TravelImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelImages.
     */
    data: XOR<TravelImageUpdateManyMutationInput, TravelImageUncheckedUpdateManyInput>
    /**
     * Filter which TravelImages to update
     */
    where?: TravelImageWhereInput
  }


  /**
   * TravelImage upsert
   */
  export type TravelImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelImage to update in case it exists.
     */
    where: TravelImageWhereUniqueInput
    /**
     * In case the TravelImage found by the `where` argument doesn't exist, create a new TravelImage with this data.
     */
    create: XOR<TravelImageCreateInput, TravelImageUncheckedCreateInput>
    /**
     * In case the TravelImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelImageUpdateInput, TravelImageUncheckedUpdateInput>
  }


  /**
   * TravelImage delete
   */
  export type TravelImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter which TravelImage to delete.
     */
    where: TravelImageWhereUniqueInput
  }


  /**
   * TravelImage deleteMany
   */
  export type TravelImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelImages to delete
     */
    where?: TravelImageWhereInput
  }


  /**
   * TravelImage.travel
   */
  export type TravelImage$travelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithRelationAndSearchRelevanceInput | TravelOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: TravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }


  /**
   * TravelImage without action
   */
  export type TravelImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelImageInclude<ExtArgs> | null
  }



  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    map: string | null
    telegram: string | null
    whatsapp: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type ContactMaxAggregateOutputType = {
    map: string | null
    telegram: string | null
    whatsapp: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type ContactCountAggregateOutputType = {
    map: number
    telegram: number
    whatsapp: number
    createdAt: number
    uuid: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    map?: true
    telegram?: true
    whatsapp?: true
    createdAt?: true
    uuid?: true
  }

  export type ContactMaxAggregateInputType = {
    map?: true
    telegram?: true
    whatsapp?: true
    createdAt?: true
    uuid?: true
  }

  export type ContactCountAggregateInputType = {
    map?: true
    telegram?: true
    whatsapp?: true
    createdAt?: true
    uuid?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationAndSearchRelevanceInput | ContactOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    map: string
    telegram: string
    whatsapp: string
    createdAt: Date
    uuid: string
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    map?: boolean
    telegram?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    uuid?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    map?: boolean
    telegram?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    uuid?: boolean
  }


  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      map: string
      telegram: string
      whatsapp: string
      createdAt: Date
      uuid: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }


  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `map`
     * const contactWithMapOnly = await prisma.contact.findMany({ select: { map: true } })
     * 
    **/
    findMany<T extends ContactFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends ContactCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactCreateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contacts.
     *     @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends ContactDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly map: FieldRef<"Contact", 'String'>
    readonly telegram: FieldRef<"Contact", 'String'>
    readonly whatsapp: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly uuid: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationAndSearchRelevanceInput | ContactOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationAndSearchRelevanceInput | ContactOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationAndSearchRelevanceInput | ContactOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }


  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }


  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }


  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }


  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
  }



  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryMinAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type GalleryMaxAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type GalleryCountAggregateOutputType = {
    fileId: number
    fileBase64: number
    createdAt: number
    uuid: number
    _all: number
  }


  export type GalleryMinAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
  }

  export type GalleryMaxAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
  }

  export type GalleryCountAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationAndSearchRelevanceInput | GalleryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type GalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithAggregationInput | GalleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: GalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    fileId: string
    fileBase64: string
    createdAt: Date
    uuid: string
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type GallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectScalar = {
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
  }


  export type $GalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gallery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      fileId: string
      fileBase64: string
      createdAt: Date
      uuid: string
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }


  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface GalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gallery'], meta: { name: 'Gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GalleryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gallery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GalleryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const galleryWithFileIdOnly = await prisma.gallery.findMany({ select: { fileId: true } })
     * 
    **/
    findMany<T extends GalleryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
    **/
    create<T extends GalleryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Galleries.
     *     @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     *     @example
     *     // Create many Galleries
     *     const gallery = await prisma.gallery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GalleryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
    **/
    delete<T extends GalleryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GalleryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GalleryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GalleryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
    **/
    upsert<T extends GalleryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gallery model
   */
  readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Gallery model
   */ 
  interface GalleryFieldRefs {
    readonly fileId: FieldRef<"Gallery", 'String'>
    readonly fileBase64: FieldRef<"Gallery", 'String'>
    readonly createdAt: FieldRef<"Gallery", 'DateTime'>
    readonly uuid: FieldRef<"Gallery", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }


  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }


  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationAndSearchRelevanceInput | GalleryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationAndSearchRelevanceInput | GalleryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationAndSearchRelevanceInput | GalleryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * Gallery create
   */
  export type GalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
  }


  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput
  }


  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
  }


  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
  }


  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput
  }


  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput
  }


  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
  }



  /**
   * Model TravelBanner
   */

  export type AggregateTravelBanner = {
    _count: TravelBannerCountAggregateOutputType | null
    _min: TravelBannerMinAggregateOutputType | null
    _max: TravelBannerMaxAggregateOutputType | null
  }

  export type TravelBannerMinAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type TravelBannerMaxAggregateOutputType = {
    fileId: string | null
    fileBase64: string | null
    createdAt: Date | null
    uuid: string | null
  }

  export type TravelBannerCountAggregateOutputType = {
    fileId: number
    fileBase64: number
    createdAt: number
    uuid: number
    _all: number
  }


  export type TravelBannerMinAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
  }

  export type TravelBannerMaxAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
  }

  export type TravelBannerCountAggregateInputType = {
    fileId?: true
    fileBase64?: true
    createdAt?: true
    uuid?: true
    _all?: true
  }

  export type TravelBannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelBanner to aggregate.
     */
    where?: TravelBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelBanners to fetch.
     */
    orderBy?: TravelBannerOrderByWithRelationAndSearchRelevanceInput | TravelBannerOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelBanners
    **/
    _count?: true | TravelBannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelBannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelBannerMaxAggregateInputType
  }

  export type GetTravelBannerAggregateType<T extends TravelBannerAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelBanner[P]>
      : GetScalarType<T[P], AggregateTravelBanner[P]>
  }




  export type TravelBannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelBannerWhereInput
    orderBy?: TravelBannerOrderByWithAggregationInput | TravelBannerOrderByWithAggregationInput[]
    by: TravelBannerScalarFieldEnum[] | TravelBannerScalarFieldEnum
    having?: TravelBannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelBannerCountAggregateInputType | true
    _min?: TravelBannerMinAggregateInputType
    _max?: TravelBannerMaxAggregateInputType
  }

  export type TravelBannerGroupByOutputType = {
    fileId: string
    fileBase64: string
    createdAt: Date
    uuid: string
    _count: TravelBannerCountAggregateOutputType | null
    _min: TravelBannerMinAggregateOutputType | null
    _max: TravelBannerMaxAggregateOutputType | null
  }

  type GetTravelBannerGroupByPayload<T extends TravelBannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelBannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelBannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelBannerGroupByOutputType[P]>
            : GetScalarType<T[P], TravelBannerGroupByOutputType[P]>
        }
      >
    >


  export type TravelBannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
  }, ExtArgs["result"]["travelBanner"]>

  export type TravelBannerSelectScalar = {
    fileId?: boolean
    fileBase64?: boolean
    createdAt?: boolean
    uuid?: boolean
  }


  export type $TravelBannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelBanner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      fileId: string
      fileBase64: string
      createdAt: Date
      uuid: string
    }, ExtArgs["result"]["travelBanner"]>
    composites: {}
  }


  type TravelBannerGetPayload<S extends boolean | null | undefined | TravelBannerDefaultArgs> = $Result.GetResult<Prisma.$TravelBannerPayload, S>

  type TravelBannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TravelBannerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TravelBannerCountAggregateInputType | true
    }

  export interface TravelBannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelBanner'], meta: { name: 'TravelBanner' } }
    /**
     * Find zero or one TravelBanner that matches the filter.
     * @param {TravelBannerFindUniqueArgs} args - Arguments to find a TravelBanner
     * @example
     * // Get one TravelBanner
     * const travelBanner = await prisma.travelBanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TravelBannerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBannerFindUniqueArgs<ExtArgs>>
    ): Prisma__TravelBannerClient<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TravelBanner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TravelBannerFindUniqueOrThrowArgs} args - Arguments to find a TravelBanner
     * @example
     * // Get one TravelBanner
     * const travelBanner = await prisma.travelBanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TravelBannerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBannerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TravelBannerClient<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TravelBanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBannerFindFirstArgs} args - Arguments to find a TravelBanner
     * @example
     * // Get one TravelBanner
     * const travelBanner = await prisma.travelBanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TravelBannerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBannerFindFirstArgs<ExtArgs>>
    ): Prisma__TravelBannerClient<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TravelBanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBannerFindFirstOrThrowArgs} args - Arguments to find a TravelBanner
     * @example
     * // Get one TravelBanner
     * const travelBanner = await prisma.travelBanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TravelBannerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBannerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TravelBannerClient<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TravelBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBannerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelBanners
     * const travelBanners = await prisma.travelBanner.findMany()
     * 
     * // Get first 10 TravelBanners
     * const travelBanners = await prisma.travelBanner.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const travelBannerWithFileIdOnly = await prisma.travelBanner.findMany({ select: { fileId: true } })
     * 
    **/
    findMany<T extends TravelBannerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBannerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TravelBanner.
     * @param {TravelBannerCreateArgs} args - Arguments to create a TravelBanner.
     * @example
     * // Create one TravelBanner
     * const TravelBanner = await prisma.travelBanner.create({
     *   data: {
     *     // ... data to create a TravelBanner
     *   }
     * })
     * 
    **/
    create<T extends TravelBannerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBannerCreateArgs<ExtArgs>>
    ): Prisma__TravelBannerClient<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TravelBanners.
     *     @param {TravelBannerCreateManyArgs} args - Arguments to create many TravelBanners.
     *     @example
     *     // Create many TravelBanners
     *     const travelBanner = await prisma.travelBanner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TravelBannerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBannerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TravelBanner.
     * @param {TravelBannerDeleteArgs} args - Arguments to delete one TravelBanner.
     * @example
     * // Delete one TravelBanner
     * const TravelBanner = await prisma.travelBanner.delete({
     *   where: {
     *     // ... filter to delete one TravelBanner
     *   }
     * })
     * 
    **/
    delete<T extends TravelBannerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBannerDeleteArgs<ExtArgs>>
    ): Prisma__TravelBannerClient<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TravelBanner.
     * @param {TravelBannerUpdateArgs} args - Arguments to update one TravelBanner.
     * @example
     * // Update one TravelBanner
     * const travelBanner = await prisma.travelBanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TravelBannerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBannerUpdateArgs<ExtArgs>>
    ): Prisma__TravelBannerClient<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TravelBanners.
     * @param {TravelBannerDeleteManyArgs} args - Arguments to filter TravelBanners to delete.
     * @example
     * // Delete a few TravelBanners
     * const { count } = await prisma.travelBanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TravelBannerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBannerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelBanners
     * const travelBanner = await prisma.travelBanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TravelBannerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBannerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TravelBanner.
     * @param {TravelBannerUpsertArgs} args - Arguments to update or create a TravelBanner.
     * @example
     * // Update or create a TravelBanner
     * const travelBanner = await prisma.travelBanner.upsert({
     *   create: {
     *     // ... data to create a TravelBanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelBanner we want to update
     *   }
     * })
    **/
    upsert<T extends TravelBannerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBannerUpsertArgs<ExtArgs>>
    ): Prisma__TravelBannerClient<$Result.GetResult<Prisma.$TravelBannerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TravelBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBannerCountArgs} args - Arguments to filter TravelBanners to count.
     * @example
     * // Count the number of TravelBanners
     * const count = await prisma.travelBanner.count({
     *   where: {
     *     // ... the filter for the TravelBanners we want to count
     *   }
     * })
    **/
    count<T extends TravelBannerCountArgs>(
      args?: Subset<T, TravelBannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelBannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelBannerAggregateArgs>(args: Subset<T, TravelBannerAggregateArgs>): Prisma.PrismaPromise<GetTravelBannerAggregateType<T>>

    /**
     * Group by TravelBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelBannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelBannerGroupByArgs['orderBy'] }
        : { orderBy?: TravelBannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelBannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelBanner model
   */
  readonly fields: TravelBannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelBanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelBannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TravelBanner model
   */ 
  interface TravelBannerFieldRefs {
    readonly fileId: FieldRef<"TravelBanner", 'String'>
    readonly fileBase64: FieldRef<"TravelBanner", 'String'>
    readonly createdAt: FieldRef<"TravelBanner", 'DateTime'>
    readonly uuid: FieldRef<"TravelBanner", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TravelBanner findUnique
   */
  export type TravelBannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * Filter, which TravelBanner to fetch.
     */
    where: TravelBannerWhereUniqueInput
  }


  /**
   * TravelBanner findUniqueOrThrow
   */
  export type TravelBannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * Filter, which TravelBanner to fetch.
     */
    where: TravelBannerWhereUniqueInput
  }


  /**
   * TravelBanner findFirst
   */
  export type TravelBannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * Filter, which TravelBanner to fetch.
     */
    where?: TravelBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelBanners to fetch.
     */
    orderBy?: TravelBannerOrderByWithRelationAndSearchRelevanceInput | TravelBannerOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelBanners.
     */
    cursor?: TravelBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelBanners.
     */
    distinct?: TravelBannerScalarFieldEnum | TravelBannerScalarFieldEnum[]
  }


  /**
   * TravelBanner findFirstOrThrow
   */
  export type TravelBannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * Filter, which TravelBanner to fetch.
     */
    where?: TravelBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelBanners to fetch.
     */
    orderBy?: TravelBannerOrderByWithRelationAndSearchRelevanceInput | TravelBannerOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelBanners.
     */
    cursor?: TravelBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelBanners.
     */
    distinct?: TravelBannerScalarFieldEnum | TravelBannerScalarFieldEnum[]
  }


  /**
   * TravelBanner findMany
   */
  export type TravelBannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * Filter, which TravelBanners to fetch.
     */
    where?: TravelBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelBanners to fetch.
     */
    orderBy?: TravelBannerOrderByWithRelationAndSearchRelevanceInput | TravelBannerOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelBanners.
     */
    cursor?: TravelBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelBanners.
     */
    skip?: number
    distinct?: TravelBannerScalarFieldEnum | TravelBannerScalarFieldEnum[]
  }


  /**
   * TravelBanner create
   */
  export type TravelBannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * The data needed to create a TravelBanner.
     */
    data: XOR<TravelBannerCreateInput, TravelBannerUncheckedCreateInput>
  }


  /**
   * TravelBanner createMany
   */
  export type TravelBannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelBanners.
     */
    data: TravelBannerCreateManyInput | TravelBannerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TravelBanner update
   */
  export type TravelBannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * The data needed to update a TravelBanner.
     */
    data: XOR<TravelBannerUpdateInput, TravelBannerUncheckedUpdateInput>
    /**
     * Choose, which TravelBanner to update.
     */
    where: TravelBannerWhereUniqueInput
  }


  /**
   * TravelBanner updateMany
   */
  export type TravelBannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelBanners.
     */
    data: XOR<TravelBannerUpdateManyMutationInput, TravelBannerUncheckedUpdateManyInput>
    /**
     * Filter which TravelBanners to update
     */
    where?: TravelBannerWhereInput
  }


  /**
   * TravelBanner upsert
   */
  export type TravelBannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * The filter to search for the TravelBanner to update in case it exists.
     */
    where: TravelBannerWhereUniqueInput
    /**
     * In case the TravelBanner found by the `where` argument doesn't exist, create a new TravelBanner with this data.
     */
    create: XOR<TravelBannerCreateInput, TravelBannerUncheckedCreateInput>
    /**
     * In case the TravelBanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelBannerUpdateInput, TravelBannerUncheckedUpdateInput>
  }


  /**
   * TravelBanner delete
   */
  export type TravelBannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
    /**
     * Filter which TravelBanner to delete.
     */
    where: TravelBannerWhereUniqueInput
  }


  /**
   * TravelBanner deleteMany
   */
  export type TravelBannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelBanners to delete
     */
    where?: TravelBannerWhereInput
  }


  /**
   * TravelBanner without action
   */
  export type TravelBannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBanner
     */
    select?: TravelBannerSelect<ExtArgs> | null
  }



  /**
   * Model TransferOption
   */

  export type AggregateTransferOption = {
    _count: TransferOptionCountAggregateOutputType | null
    _avg: TransferOptionAvgAggregateOutputType | null
    _sum: TransferOptionSumAggregateOutputType | null
    _min: TransferOptionMinAggregateOutputType | null
    _max: TransferOptionMaxAggregateOutputType | null
  }

  export type TransferOptionAvgAggregateOutputType = {
    price: number | null
  }

  export type TransferOptionSumAggregateOutputType = {
    price: number | null
  }

  export type TransferOptionMinAggregateOutputType = {
    uuid: string | null
    price: number | null
    carId: string | null
    transferInfoId: string | null
  }

  export type TransferOptionMaxAggregateOutputType = {
    uuid: string | null
    price: number | null
    carId: string | null
    transferInfoId: string | null
  }

  export type TransferOptionCountAggregateOutputType = {
    uuid: number
    price: number
    carId: number
    transferInfoId: number
    _all: number
  }


  export type TransferOptionAvgAggregateInputType = {
    price?: true
  }

  export type TransferOptionSumAggregateInputType = {
    price?: true
  }

  export type TransferOptionMinAggregateInputType = {
    uuid?: true
    price?: true
    carId?: true
    transferInfoId?: true
  }

  export type TransferOptionMaxAggregateInputType = {
    uuid?: true
    price?: true
    carId?: true
    transferInfoId?: true
  }

  export type TransferOptionCountAggregateInputType = {
    uuid?: true
    price?: true
    carId?: true
    transferInfoId?: true
    _all?: true
  }

  export type TransferOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferOption to aggregate.
     */
    where?: TransferOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferOptions to fetch.
     */
    orderBy?: TransferOptionOrderByWithRelationAndSearchRelevanceInput | TransferOptionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransferOptions
    **/
    _count?: true | TransferOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransferOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransferOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferOptionMaxAggregateInputType
  }

  export type GetTransferOptionAggregateType<T extends TransferOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransferOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransferOption[P]>
      : GetScalarType<T[P], AggregateTransferOption[P]>
  }




  export type TransferOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferOptionWhereInput
    orderBy?: TransferOptionOrderByWithAggregationInput | TransferOptionOrderByWithAggregationInput[]
    by: TransferOptionScalarFieldEnum[] | TransferOptionScalarFieldEnum
    having?: TransferOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferOptionCountAggregateInputType | true
    _avg?: TransferOptionAvgAggregateInputType
    _sum?: TransferOptionSumAggregateInputType
    _min?: TransferOptionMinAggregateInputType
    _max?: TransferOptionMaxAggregateInputType
  }

  export type TransferOptionGroupByOutputType = {
    uuid: string
    price: number
    carId: string | null
    transferInfoId: string | null
    _count: TransferOptionCountAggregateOutputType | null
    _avg: TransferOptionAvgAggregateOutputType | null
    _sum: TransferOptionSumAggregateOutputType | null
    _min: TransferOptionMinAggregateOutputType | null
    _max: TransferOptionMaxAggregateOutputType | null
  }

  type GetTransferOptionGroupByPayload<T extends TransferOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferOptionGroupByOutputType[P]>
            : GetScalarType<T[P], TransferOptionGroupByOutputType[P]>
        }
      >
    >


  export type TransferOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    price?: boolean
    carId?: boolean
    transferInfoId?: boolean
    car?: boolean | TransferOption$carArgs<ExtArgs>
    transferInfo?: boolean | TransferOption$transferInfoArgs<ExtArgs>
  }, ExtArgs["result"]["transferOption"]>

  export type TransferOptionSelectScalar = {
    uuid?: boolean
    price?: boolean
    carId?: boolean
    transferInfoId?: boolean
  }

  export type TransferOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | TransferOption$carArgs<ExtArgs>
    transferInfo?: boolean | TransferOption$transferInfoArgs<ExtArgs>
  }


  export type $TransferOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransferOption"
    objects: {
      car: Prisma.$CarPayload<ExtArgs> | null
      transferInfo: Prisma.$TransferInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      price: number
      carId: string | null
      transferInfoId: string | null
    }, ExtArgs["result"]["transferOption"]>
    composites: {}
  }


  type TransferOptionGetPayload<S extends boolean | null | undefined | TransferOptionDefaultArgs> = $Result.GetResult<Prisma.$TransferOptionPayload, S>

  type TransferOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransferOptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransferOptionCountAggregateInputType | true
    }

  export interface TransferOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransferOption'], meta: { name: 'TransferOption' } }
    /**
     * Find zero or one TransferOption that matches the filter.
     * @param {TransferOptionFindUniqueArgs} args - Arguments to find a TransferOption
     * @example
     * // Get one TransferOption
     * const transferOption = await prisma.transferOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransferOptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransferOptionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransferOptionClient<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TransferOption that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransferOptionFindUniqueOrThrowArgs} args - Arguments to find a TransferOption
     * @example
     * // Get one TransferOption
     * const transferOption = await prisma.transferOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransferOptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferOptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransferOptionClient<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TransferOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferOptionFindFirstArgs} args - Arguments to find a TransferOption
     * @example
     * // Get one TransferOption
     * const transferOption = await prisma.transferOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransferOptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferOptionFindFirstArgs<ExtArgs>>
    ): Prisma__TransferOptionClient<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TransferOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferOptionFindFirstOrThrowArgs} args - Arguments to find a TransferOption
     * @example
     * // Get one TransferOption
     * const transferOption = await prisma.transferOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransferOptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferOptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransferOptionClient<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TransferOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferOptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransferOptions
     * const transferOptions = await prisma.transferOption.findMany()
     * 
     * // Get first 10 TransferOptions
     * const transferOptions = await prisma.transferOption.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const transferOptionWithUuidOnly = await prisma.transferOption.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends TransferOptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferOptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TransferOption.
     * @param {TransferOptionCreateArgs} args - Arguments to create a TransferOption.
     * @example
     * // Create one TransferOption
     * const TransferOption = await prisma.transferOption.create({
     *   data: {
     *     // ... data to create a TransferOption
     *   }
     * })
     * 
    **/
    create<T extends TransferOptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransferOptionCreateArgs<ExtArgs>>
    ): Prisma__TransferOptionClient<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TransferOptions.
     *     @param {TransferOptionCreateManyArgs} args - Arguments to create many TransferOptions.
     *     @example
     *     // Create many TransferOptions
     *     const transferOption = await prisma.transferOption.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransferOptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferOptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransferOption.
     * @param {TransferOptionDeleteArgs} args - Arguments to delete one TransferOption.
     * @example
     * // Delete one TransferOption
     * const TransferOption = await prisma.transferOption.delete({
     *   where: {
     *     // ... filter to delete one TransferOption
     *   }
     * })
     * 
    **/
    delete<T extends TransferOptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransferOptionDeleteArgs<ExtArgs>>
    ): Prisma__TransferOptionClient<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TransferOption.
     * @param {TransferOptionUpdateArgs} args - Arguments to update one TransferOption.
     * @example
     * // Update one TransferOption
     * const transferOption = await prisma.transferOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransferOptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransferOptionUpdateArgs<ExtArgs>>
    ): Prisma__TransferOptionClient<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TransferOptions.
     * @param {TransferOptionDeleteManyArgs} args - Arguments to filter TransferOptions to delete.
     * @example
     * // Delete a few TransferOptions
     * const { count } = await prisma.transferOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransferOptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferOptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransferOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransferOptions
     * const transferOption = await prisma.transferOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransferOptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransferOptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransferOption.
     * @param {TransferOptionUpsertArgs} args - Arguments to update or create a TransferOption.
     * @example
     * // Update or create a TransferOption
     * const transferOption = await prisma.transferOption.upsert({
     *   create: {
     *     // ... data to create a TransferOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransferOption we want to update
     *   }
     * })
    **/
    upsert<T extends TransferOptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransferOptionUpsertArgs<ExtArgs>>
    ): Prisma__TransferOptionClient<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TransferOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferOptionCountArgs} args - Arguments to filter TransferOptions to count.
     * @example
     * // Count the number of TransferOptions
     * const count = await prisma.transferOption.count({
     *   where: {
     *     // ... the filter for the TransferOptions we want to count
     *   }
     * })
    **/
    count<T extends TransferOptionCountArgs>(
      args?: Subset<T, TransferOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransferOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransferOptionAggregateArgs>(args: Subset<T, TransferOptionAggregateArgs>): Prisma.PrismaPromise<GetTransferOptionAggregateType<T>>

    /**
     * Group by TransferOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransferOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferOptionGroupByArgs['orderBy'] }
        : { orderBy?: TransferOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransferOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransferOption model
   */
  readonly fields: TransferOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransferOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends TransferOption$carArgs<ExtArgs> = {}>(args?: Subset<T, TransferOption$carArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    transferInfo<T extends TransferOption$transferInfoArgs<ExtArgs> = {}>(args?: Subset<T, TransferOption$transferInfoArgs<ExtArgs>>): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TransferOption model
   */ 
  interface TransferOptionFieldRefs {
    readonly uuid: FieldRef<"TransferOption", 'String'>
    readonly price: FieldRef<"TransferOption", 'Int'>
    readonly carId: FieldRef<"TransferOption", 'String'>
    readonly transferInfoId: FieldRef<"TransferOption", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TransferOption findUnique
   */
  export type TransferOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * Filter, which TransferOption to fetch.
     */
    where: TransferOptionWhereUniqueInput
  }


  /**
   * TransferOption findUniqueOrThrow
   */
  export type TransferOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * Filter, which TransferOption to fetch.
     */
    where: TransferOptionWhereUniqueInput
  }


  /**
   * TransferOption findFirst
   */
  export type TransferOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * Filter, which TransferOption to fetch.
     */
    where?: TransferOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferOptions to fetch.
     */
    orderBy?: TransferOptionOrderByWithRelationAndSearchRelevanceInput | TransferOptionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferOptions.
     */
    cursor?: TransferOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferOptions.
     */
    distinct?: TransferOptionScalarFieldEnum | TransferOptionScalarFieldEnum[]
  }


  /**
   * TransferOption findFirstOrThrow
   */
  export type TransferOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * Filter, which TransferOption to fetch.
     */
    where?: TransferOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferOptions to fetch.
     */
    orderBy?: TransferOptionOrderByWithRelationAndSearchRelevanceInput | TransferOptionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferOptions.
     */
    cursor?: TransferOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferOptions.
     */
    distinct?: TransferOptionScalarFieldEnum | TransferOptionScalarFieldEnum[]
  }


  /**
   * TransferOption findMany
   */
  export type TransferOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * Filter, which TransferOptions to fetch.
     */
    where?: TransferOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferOptions to fetch.
     */
    orderBy?: TransferOptionOrderByWithRelationAndSearchRelevanceInput | TransferOptionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransferOptions.
     */
    cursor?: TransferOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferOptions.
     */
    skip?: number
    distinct?: TransferOptionScalarFieldEnum | TransferOptionScalarFieldEnum[]
  }


  /**
   * TransferOption create
   */
  export type TransferOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a TransferOption.
     */
    data: XOR<TransferOptionCreateInput, TransferOptionUncheckedCreateInput>
  }


  /**
   * TransferOption createMany
   */
  export type TransferOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransferOptions.
     */
    data: TransferOptionCreateManyInput | TransferOptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TransferOption update
   */
  export type TransferOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a TransferOption.
     */
    data: XOR<TransferOptionUpdateInput, TransferOptionUncheckedUpdateInput>
    /**
     * Choose, which TransferOption to update.
     */
    where: TransferOptionWhereUniqueInput
  }


  /**
   * TransferOption updateMany
   */
  export type TransferOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransferOptions.
     */
    data: XOR<TransferOptionUpdateManyMutationInput, TransferOptionUncheckedUpdateManyInput>
    /**
     * Filter which TransferOptions to update
     */
    where?: TransferOptionWhereInput
  }


  /**
   * TransferOption upsert
   */
  export type TransferOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the TransferOption to update in case it exists.
     */
    where: TransferOptionWhereUniqueInput
    /**
     * In case the TransferOption found by the `where` argument doesn't exist, create a new TransferOption with this data.
     */
    create: XOR<TransferOptionCreateInput, TransferOptionUncheckedCreateInput>
    /**
     * In case the TransferOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferOptionUpdateInput, TransferOptionUncheckedUpdateInput>
  }


  /**
   * TransferOption delete
   */
  export type TransferOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    /**
     * Filter which TransferOption to delete.
     */
    where: TransferOptionWhereUniqueInput
  }


  /**
   * TransferOption deleteMany
   */
  export type TransferOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferOptions to delete
     */
    where?: TransferOptionWhereInput
  }


  /**
   * TransferOption.car
   */
  export type TransferOption$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
  }


  /**
   * TransferOption.transferInfo
   */
  export type TransferOption$transferInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    where?: TransferInfoWhereInput
  }


  /**
   * TransferOption without action
   */
  export type TransferOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
  }



  /**
   * Model TransferInfo
   */

  export type AggregateTransferInfo = {
    _count: TransferInfoCountAggregateOutputType | null
    _min: TransferInfoMinAggregateOutputType | null
    _max: TransferInfoMaxAggregateOutputType | null
  }

  export type TransferInfoMinAggregateOutputType = {
    uuid: string | null
    transfer: string | null
    time: $Enums.Time | null
    drivingTime: string | null
    drivingDistance: string | null
  }

  export type TransferInfoMaxAggregateOutputType = {
    uuid: string | null
    transfer: string | null
    time: $Enums.Time | null
    drivingTime: string | null
    drivingDistance: string | null
  }

  export type TransferInfoCountAggregateOutputType = {
    uuid: number
    transfer: number
    time: number
    drivingTime: number
    drivingDistance: number
    _all: number
  }


  export type TransferInfoMinAggregateInputType = {
    uuid?: true
    transfer?: true
    time?: true
    drivingTime?: true
    drivingDistance?: true
  }

  export type TransferInfoMaxAggregateInputType = {
    uuid?: true
    transfer?: true
    time?: true
    drivingTime?: true
    drivingDistance?: true
  }

  export type TransferInfoCountAggregateInputType = {
    uuid?: true
    transfer?: true
    time?: true
    drivingTime?: true
    drivingDistance?: true
    _all?: true
  }

  export type TransferInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferInfo to aggregate.
     */
    where?: TransferInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferInfos to fetch.
     */
    orderBy?: TransferInfoOrderByWithRelationAndSearchRelevanceInput | TransferInfoOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransferInfos
    **/
    _count?: true | TransferInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferInfoMaxAggregateInputType
  }

  export type GetTransferInfoAggregateType<T extends TransferInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransferInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransferInfo[P]>
      : GetScalarType<T[P], AggregateTransferInfo[P]>
  }




  export type TransferInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferInfoWhereInput
    orderBy?: TransferInfoOrderByWithAggregationInput | TransferInfoOrderByWithAggregationInput[]
    by: TransferInfoScalarFieldEnum[] | TransferInfoScalarFieldEnum
    having?: TransferInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferInfoCountAggregateInputType | true
    _min?: TransferInfoMinAggregateInputType
    _max?: TransferInfoMaxAggregateInputType
  }

  export type TransferInfoGroupByOutputType = {
    uuid: string
    transfer: string
    time: $Enums.Time
    drivingTime: string
    drivingDistance: string
    _count: TransferInfoCountAggregateOutputType | null
    _min: TransferInfoMinAggregateOutputType | null
    _max: TransferInfoMaxAggregateOutputType | null
  }

  type GetTransferInfoGroupByPayload<T extends TransferInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferInfoGroupByOutputType[P]>
            : GetScalarType<T[P], TransferInfoGroupByOutputType[P]>
        }
      >
    >


  export type TransferInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    transfer?: boolean
    time?: boolean
    drivingTime?: boolean
    drivingDistance?: boolean
    transferOptions?: boolean | TransferInfo$transferOptionsArgs<ExtArgs>
    _count?: boolean | TransferInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transferInfo"]>

  export type TransferInfoSelectScalar = {
    uuid?: boolean
    transfer?: boolean
    time?: boolean
    drivingTime?: boolean
    drivingDistance?: boolean
  }

  export type TransferInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transferOptions?: boolean | TransferInfo$transferOptionsArgs<ExtArgs>
    _count?: boolean | TransferInfoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TransferInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransferInfo"
    objects: {
      transferOptions: Prisma.$TransferOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      transfer: string
      time: $Enums.Time
      drivingTime: string
      drivingDistance: string
    }, ExtArgs["result"]["transferInfo"]>
    composites: {}
  }


  type TransferInfoGetPayload<S extends boolean | null | undefined | TransferInfoDefaultArgs> = $Result.GetResult<Prisma.$TransferInfoPayload, S>

  type TransferInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransferInfoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransferInfoCountAggregateInputType | true
    }

  export interface TransferInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransferInfo'], meta: { name: 'TransferInfo' } }
    /**
     * Find zero or one TransferInfo that matches the filter.
     * @param {TransferInfoFindUniqueArgs} args - Arguments to find a TransferInfo
     * @example
     * // Get one TransferInfo
     * const transferInfo = await prisma.transferInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransferInfoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransferInfoFindUniqueArgs<ExtArgs>>
    ): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TransferInfo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransferInfoFindUniqueOrThrowArgs} args - Arguments to find a TransferInfo
     * @example
     * // Get one TransferInfo
     * const transferInfo = await prisma.transferInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransferInfoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferInfoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TransferInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferInfoFindFirstArgs} args - Arguments to find a TransferInfo
     * @example
     * // Get one TransferInfo
     * const transferInfo = await prisma.transferInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransferInfoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferInfoFindFirstArgs<ExtArgs>>
    ): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TransferInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferInfoFindFirstOrThrowArgs} args - Arguments to find a TransferInfo
     * @example
     * // Get one TransferInfo
     * const transferInfo = await prisma.transferInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransferInfoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferInfoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TransferInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransferInfos
     * const transferInfos = await prisma.transferInfo.findMany()
     * 
     * // Get first 10 TransferInfos
     * const transferInfos = await prisma.transferInfo.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const transferInfoWithUuidOnly = await prisma.transferInfo.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends TransferInfoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferInfoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TransferInfo.
     * @param {TransferInfoCreateArgs} args - Arguments to create a TransferInfo.
     * @example
     * // Create one TransferInfo
     * const TransferInfo = await prisma.transferInfo.create({
     *   data: {
     *     // ... data to create a TransferInfo
     *   }
     * })
     * 
    **/
    create<T extends TransferInfoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransferInfoCreateArgs<ExtArgs>>
    ): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TransferInfos.
     *     @param {TransferInfoCreateManyArgs} args - Arguments to create many TransferInfos.
     *     @example
     *     // Create many TransferInfos
     *     const transferInfo = await prisma.transferInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransferInfoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferInfoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransferInfo.
     * @param {TransferInfoDeleteArgs} args - Arguments to delete one TransferInfo.
     * @example
     * // Delete one TransferInfo
     * const TransferInfo = await prisma.transferInfo.delete({
     *   where: {
     *     // ... filter to delete one TransferInfo
     *   }
     * })
     * 
    **/
    delete<T extends TransferInfoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransferInfoDeleteArgs<ExtArgs>>
    ): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TransferInfo.
     * @param {TransferInfoUpdateArgs} args - Arguments to update one TransferInfo.
     * @example
     * // Update one TransferInfo
     * const transferInfo = await prisma.transferInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransferInfoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransferInfoUpdateArgs<ExtArgs>>
    ): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TransferInfos.
     * @param {TransferInfoDeleteManyArgs} args - Arguments to filter TransferInfos to delete.
     * @example
     * // Delete a few TransferInfos
     * const { count } = await prisma.transferInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransferInfoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferInfoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransferInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransferInfos
     * const transferInfo = await prisma.transferInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransferInfoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransferInfoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransferInfo.
     * @param {TransferInfoUpsertArgs} args - Arguments to update or create a TransferInfo.
     * @example
     * // Update or create a TransferInfo
     * const transferInfo = await prisma.transferInfo.upsert({
     *   create: {
     *     // ... data to create a TransferInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransferInfo we want to update
     *   }
     * })
    **/
    upsert<T extends TransferInfoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransferInfoUpsertArgs<ExtArgs>>
    ): Prisma__TransferInfoClient<$Result.GetResult<Prisma.$TransferInfoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TransferInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferInfoCountArgs} args - Arguments to filter TransferInfos to count.
     * @example
     * // Count the number of TransferInfos
     * const count = await prisma.transferInfo.count({
     *   where: {
     *     // ... the filter for the TransferInfos we want to count
     *   }
     * })
    **/
    count<T extends TransferInfoCountArgs>(
      args?: Subset<T, TransferInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransferInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransferInfoAggregateArgs>(args: Subset<T, TransferInfoAggregateArgs>): Prisma.PrismaPromise<GetTransferInfoAggregateType<T>>

    /**
     * Group by TransferInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransferInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferInfoGroupByArgs['orderBy'] }
        : { orderBy?: TransferInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransferInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransferInfo model
   */
  readonly fields: TransferInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransferInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transferOptions<T extends TransferInfo$transferOptionsArgs<ExtArgs> = {}>(args?: Subset<T, TransferInfo$transferOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TransferInfo model
   */ 
  interface TransferInfoFieldRefs {
    readonly uuid: FieldRef<"TransferInfo", 'String'>
    readonly transfer: FieldRef<"TransferInfo", 'String'>
    readonly time: FieldRef<"TransferInfo", 'Time'>
    readonly drivingTime: FieldRef<"TransferInfo", 'String'>
    readonly drivingDistance: FieldRef<"TransferInfo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TransferInfo findUnique
   */
  export type TransferInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * Filter, which TransferInfo to fetch.
     */
    where: TransferInfoWhereUniqueInput
  }


  /**
   * TransferInfo findUniqueOrThrow
   */
  export type TransferInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * Filter, which TransferInfo to fetch.
     */
    where: TransferInfoWhereUniqueInput
  }


  /**
   * TransferInfo findFirst
   */
  export type TransferInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * Filter, which TransferInfo to fetch.
     */
    where?: TransferInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferInfos to fetch.
     */
    orderBy?: TransferInfoOrderByWithRelationAndSearchRelevanceInput | TransferInfoOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferInfos.
     */
    cursor?: TransferInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferInfos.
     */
    distinct?: TransferInfoScalarFieldEnum | TransferInfoScalarFieldEnum[]
  }


  /**
   * TransferInfo findFirstOrThrow
   */
  export type TransferInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * Filter, which TransferInfo to fetch.
     */
    where?: TransferInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferInfos to fetch.
     */
    orderBy?: TransferInfoOrderByWithRelationAndSearchRelevanceInput | TransferInfoOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferInfos.
     */
    cursor?: TransferInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferInfos.
     */
    distinct?: TransferInfoScalarFieldEnum | TransferInfoScalarFieldEnum[]
  }


  /**
   * TransferInfo findMany
   */
  export type TransferInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * Filter, which TransferInfos to fetch.
     */
    where?: TransferInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferInfos to fetch.
     */
    orderBy?: TransferInfoOrderByWithRelationAndSearchRelevanceInput | TransferInfoOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransferInfos.
     */
    cursor?: TransferInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferInfos.
     */
    skip?: number
    distinct?: TransferInfoScalarFieldEnum | TransferInfoScalarFieldEnum[]
  }


  /**
   * TransferInfo create
   */
  export type TransferInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a TransferInfo.
     */
    data: XOR<TransferInfoCreateInput, TransferInfoUncheckedCreateInput>
  }


  /**
   * TransferInfo createMany
   */
  export type TransferInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransferInfos.
     */
    data: TransferInfoCreateManyInput | TransferInfoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TransferInfo update
   */
  export type TransferInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a TransferInfo.
     */
    data: XOR<TransferInfoUpdateInput, TransferInfoUncheckedUpdateInput>
    /**
     * Choose, which TransferInfo to update.
     */
    where: TransferInfoWhereUniqueInput
  }


  /**
   * TransferInfo updateMany
   */
  export type TransferInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransferInfos.
     */
    data: XOR<TransferInfoUpdateManyMutationInput, TransferInfoUncheckedUpdateManyInput>
    /**
     * Filter which TransferInfos to update
     */
    where?: TransferInfoWhereInput
  }


  /**
   * TransferInfo upsert
   */
  export type TransferInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the TransferInfo to update in case it exists.
     */
    where: TransferInfoWhereUniqueInput
    /**
     * In case the TransferInfo found by the `where` argument doesn't exist, create a new TransferInfo with this data.
     */
    create: XOR<TransferInfoCreateInput, TransferInfoUncheckedCreateInput>
    /**
     * In case the TransferInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferInfoUpdateInput, TransferInfoUncheckedUpdateInput>
  }


  /**
   * TransferInfo delete
   */
  export type TransferInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
    /**
     * Filter which TransferInfo to delete.
     */
    where: TransferInfoWhereUniqueInput
  }


  /**
   * TransferInfo deleteMany
   */
  export type TransferInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferInfos to delete
     */
    where?: TransferInfoWhereInput
  }


  /**
   * TransferInfo.transferOptions
   */
  export type TransferInfo$transferOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferOption
     */
    select?: TransferOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferOptionInclude<ExtArgs> | null
    where?: TransferOptionWhereInput
    orderBy?: TransferOptionOrderByWithRelationAndSearchRelevanceInput | TransferOptionOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: TransferOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferOptionScalarFieldEnum | TransferOptionScalarFieldEnum[]
  }


  /**
   * TransferInfo without action
   */
  export type TransferInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferInfo
     */
    select?: TransferInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransferInfoInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BannerScalarFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    createdAt: 'createdAt',
    uuid: 'uuid'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const TravelScalarFieldEnum: {
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

  export type TravelScalarFieldEnum = (typeof TravelScalarFieldEnum)[keyof typeof TravelScalarFieldEnum]


  export const CarScalarFieldEnum: {
    models: 'models',
    included: 'included',
    carType: 'carType',
    uuid: 'uuid',
    capacity: 'capacity'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    createdAt: 'createdAt',
    uuid: 'uuid',
    carId: 'carId'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const PricingTierScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    travelId: 'travelId',
    distance: 'distance',
    price: 'price'
  };

  export type PricingTierScalarFieldEnum = (typeof PricingTierScalarFieldEnum)[keyof typeof PricingTierScalarFieldEnum]


  export const ItineraryScalarFieldEnum: {
    route: 'route',
    description: 'description',
    duration: 'duration',
    time: 'time',
    uuid: 'uuid'
  };

  export type ItineraryScalarFieldEnum = (typeof ItineraryScalarFieldEnum)[keyof typeof ItineraryScalarFieldEnum]


  export const TravelImageScalarFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    createdAt: 'createdAt',
    uuid: 'uuid'
  };

  export type TravelImageScalarFieldEnum = (typeof TravelImageScalarFieldEnum)[keyof typeof TravelImageScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    map: 'map',
    telegram: 'telegram',
    whatsapp: 'whatsapp',
    createdAt: 'createdAt',
    uuid: 'uuid'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    createdAt: 'createdAt',
    uuid: 'uuid'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const TravelBannerScalarFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    createdAt: 'createdAt',
    uuid: 'uuid'
  };

  export type TravelBannerScalarFieldEnum = (typeof TravelBannerScalarFieldEnum)[keyof typeof TravelBannerScalarFieldEnum]


  export const TransferOptionScalarFieldEnum: {
    uuid: 'uuid',
    price: 'price',
    carId: 'carId',
    transferInfoId: 'transferInfoId'
  };

  export type TransferOptionScalarFieldEnum = (typeof TransferOptionScalarFieldEnum)[keyof typeof TransferOptionScalarFieldEnum]


  export const TransferInfoScalarFieldEnum: {
    uuid: 'uuid',
    transfer: 'transfer',
    time: 'time',
    drivingTime: 'drivingTime',
    drivingDistance: 'drivingDistance'
  };

  export type TransferInfoScalarFieldEnum = (typeof TransferInfoScalarFieldEnum)[keyof typeof TransferInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const BannerOrderByRelevanceFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    uuid: 'uuid'
  };

  export type BannerOrderByRelevanceFieldEnum = (typeof BannerOrderByRelevanceFieldEnum)[keyof typeof BannerOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TravelOrderByRelevanceFieldEnum: {
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

  export type TravelOrderByRelevanceFieldEnum = (typeof TravelOrderByRelevanceFieldEnum)[keyof typeof TravelOrderByRelevanceFieldEnum]


  export const CarOrderByRelevanceFieldEnum: {
    models: 'models',
    included: 'included',
    carType: 'carType',
    uuid: 'uuid'
  };

  export type CarOrderByRelevanceFieldEnum = (typeof CarOrderByRelevanceFieldEnum)[keyof typeof CarOrderByRelevanceFieldEnum]


  export const PictureOrderByRelevanceFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    uuid: 'uuid',
    carId: 'carId'
  };

  export type PictureOrderByRelevanceFieldEnum = (typeof PictureOrderByRelevanceFieldEnum)[keyof typeof PictureOrderByRelevanceFieldEnum]


  export const PricingTierOrderByRelevanceFieldEnum: {
    carId: 'carId',
    travelId: 'travelId',
    distance: 'distance'
  };

  export type PricingTierOrderByRelevanceFieldEnum = (typeof PricingTierOrderByRelevanceFieldEnum)[keyof typeof PricingTierOrderByRelevanceFieldEnum]


  export const ItineraryOrderByRelevanceFieldEnum: {
    route: 'route',
    description: 'description',
    duration: 'duration',
    uuid: 'uuid'
  };

  export type ItineraryOrderByRelevanceFieldEnum = (typeof ItineraryOrderByRelevanceFieldEnum)[keyof typeof ItineraryOrderByRelevanceFieldEnum]


  export const TravelImageOrderByRelevanceFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    uuid: 'uuid'
  };

  export type TravelImageOrderByRelevanceFieldEnum = (typeof TravelImageOrderByRelevanceFieldEnum)[keyof typeof TravelImageOrderByRelevanceFieldEnum]


  export const ContactOrderByRelevanceFieldEnum: {
    map: 'map',
    telegram: 'telegram',
    whatsapp: 'whatsapp',
    uuid: 'uuid'
  };

  export type ContactOrderByRelevanceFieldEnum = (typeof ContactOrderByRelevanceFieldEnum)[keyof typeof ContactOrderByRelevanceFieldEnum]


  export const GalleryOrderByRelevanceFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    uuid: 'uuid'
  };

  export type GalleryOrderByRelevanceFieldEnum = (typeof GalleryOrderByRelevanceFieldEnum)[keyof typeof GalleryOrderByRelevanceFieldEnum]


  export const TravelBannerOrderByRelevanceFieldEnum: {
    fileId: 'fileId',
    fileBase64: 'fileBase64',
    uuid: 'uuid'
  };

  export type TravelBannerOrderByRelevanceFieldEnum = (typeof TravelBannerOrderByRelevanceFieldEnum)[keyof typeof TravelBannerOrderByRelevanceFieldEnum]


  export const TransferOptionOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    carId: 'carId',
    transferInfoId: 'transferInfoId'
  };

  export type TransferOptionOrderByRelevanceFieldEnum = (typeof TransferOptionOrderByRelevanceFieldEnum)[keyof typeof TransferOptionOrderByRelevanceFieldEnum]


  export const TransferInfoOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    transfer: 'transfer',
    drivingTime: 'drivingTime',
    drivingDistance: 'drivingDistance'
  };

  export type TransferInfoOrderByRelevanceFieldEnum = (typeof TransferInfoOrderByRelevanceFieldEnum)[keyof typeof TransferInfoOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'travelType'
   */
  export type EnumtravelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'travelType'>
    


  /**
   * Reference to a field of type 'travelType[]'
   */
  export type ListEnumtravelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'travelType[]'>
    


  /**
   * Reference to a field of type 'Time'
   */
  export type EnumTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Time'>
    


  /**
   * Reference to a field of type 'Time[]'
   */
  export type ListEnumTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Time[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    fileId?: StringFilter<"Banner"> | string
    fileBase64?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    uuid?: StringFilter<"Banner"> | string
  }

  export type BannerOrderByWithRelationAndSearchRelevanceInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _relevance?: BannerOrderByRelevanceInput
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    fileId?: StringFilter<"Banner"> | string
    fileBase64?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
  }, "uuid">

  export type BannerOrderByWithAggregationInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    fileId?: StringWithAggregatesFilter<"Banner"> | string
    fileBase64?: StringWithAggregatesFilter<"Banner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    uuid?: StringWithAggregatesFilter<"Banner"> | string
  }

  export type TravelWhereInput = {
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    name?: StringFilter<"Travel"> | string
    route?: StringFilter<"Travel"> | string
    description?: StringFilter<"Travel"> | string
    duration?: StringFilter<"Travel"> | string
    sightseeingTime?: StringFilter<"Travel"> | string
    drivingTime?: StringFilter<"Travel"> | string
    drivingDistance?: StringFilter<"Travel"> | string
    included?: StringNullableFilter<"Travel"> | string | null
    notIncluded?: StringNullableFilter<"Travel"> | string | null
    reservation?: StringNullableFilter<"Travel"> | string | null
    travelType?: EnumtravelTypeFilter<"Travel"> | $Enums.travelType
    time?: EnumTimeFilter<"Travel"> | $Enums.Time
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    travelImageId?: StringFilter<"Travel"> | string
    uuid?: StringFilter<"Travel"> | string
    pricesPerCar?: PricingTierListRelationFilter
    travelImage?: XOR<TravelImageRelationFilter, TravelImageWhereInput>
    itinerary?: ItineraryListRelationFilter
  }

  export type TravelOrderByWithRelationAndSearchRelevanceInput = {
    name?: SortOrder
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    sightseeingTime?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
    included?: SortOrderInput | SortOrder
    notIncluded?: SortOrderInput | SortOrder
    reservation?: SortOrderInput | SortOrder
    travelType?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    travelImageId?: SortOrder
    uuid?: SortOrder
    pricesPerCar?: PricingTierOrderByRelationAggregateInput
    travelImage?: TravelImageOrderByWithRelationAndSearchRelevanceInput
    itinerary?: ItineraryOrderByRelationAggregateInput
    _relevance?: TravelOrderByRelevanceInput
  }

  export type TravelWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    name?: StringFilter<"Travel"> | string
    route?: StringFilter<"Travel"> | string
    description?: StringFilter<"Travel"> | string
    duration?: StringFilter<"Travel"> | string
    sightseeingTime?: StringFilter<"Travel"> | string
    drivingTime?: StringFilter<"Travel"> | string
    drivingDistance?: StringFilter<"Travel"> | string
    included?: StringNullableFilter<"Travel"> | string | null
    notIncluded?: StringNullableFilter<"Travel"> | string | null
    reservation?: StringNullableFilter<"Travel"> | string | null
    travelType?: EnumtravelTypeFilter<"Travel"> | $Enums.travelType
    time?: EnumTimeFilter<"Travel"> | $Enums.Time
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    travelImageId?: StringFilter<"Travel"> | string
    pricesPerCar?: PricingTierListRelationFilter
    travelImage?: XOR<TravelImageRelationFilter, TravelImageWhereInput>
    itinerary?: ItineraryListRelationFilter
  }, "uuid">

  export type TravelOrderByWithAggregationInput = {
    name?: SortOrder
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    sightseeingTime?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
    included?: SortOrderInput | SortOrder
    notIncluded?: SortOrderInput | SortOrder
    reservation?: SortOrderInput | SortOrder
    travelType?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    travelImageId?: SortOrder
    uuid?: SortOrder
    _count?: TravelCountOrderByAggregateInput
    _max?: TravelMaxOrderByAggregateInput
    _min?: TravelMinOrderByAggregateInput
  }

  export type TravelScalarWhereWithAggregatesInput = {
    AND?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    OR?: TravelScalarWhereWithAggregatesInput[]
    NOT?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Travel"> | string
    route?: StringWithAggregatesFilter<"Travel"> | string
    description?: StringWithAggregatesFilter<"Travel"> | string
    duration?: StringWithAggregatesFilter<"Travel"> | string
    sightseeingTime?: StringWithAggregatesFilter<"Travel"> | string
    drivingTime?: StringWithAggregatesFilter<"Travel"> | string
    drivingDistance?: StringWithAggregatesFilter<"Travel"> | string
    included?: StringNullableWithAggregatesFilter<"Travel"> | string | null
    notIncluded?: StringNullableWithAggregatesFilter<"Travel"> | string | null
    reservation?: StringNullableWithAggregatesFilter<"Travel"> | string | null
    travelType?: EnumtravelTypeWithAggregatesFilter<"Travel"> | $Enums.travelType
    time?: EnumTimeWithAggregatesFilter<"Travel"> | $Enums.Time
    createdAt?: DateTimeWithAggregatesFilter<"Travel"> | Date | string
    travelImageId?: StringWithAggregatesFilter<"Travel"> | string
    uuid?: StringWithAggregatesFilter<"Travel"> | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    models?: StringNullableListFilter<"Car">
    included?: StringNullableFilter<"Car"> | string | null
    carType?: StringFilter<"Car"> | string
    uuid?: StringFilter<"Car"> | string
    capacity?: IntFilter<"Car"> | number
    pictures?: PictureListRelationFilter
    prices?: PricingTierListRelationFilter
    transferOption?: TransferOptionListRelationFilter
  }

  export type CarOrderByWithRelationAndSearchRelevanceInput = {
    models?: SortOrder
    included?: SortOrderInput | SortOrder
    carType?: SortOrder
    uuid?: SortOrder
    capacity?: SortOrder
    pictures?: PictureOrderByRelationAggregateInput
    prices?: PricingTierOrderByRelationAggregateInput
    transferOption?: TransferOptionOrderByRelationAggregateInput
    _relevance?: CarOrderByRelevanceInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    models?: StringNullableListFilter<"Car">
    included?: StringNullableFilter<"Car"> | string | null
    carType?: StringFilter<"Car"> | string
    capacity?: IntFilter<"Car"> | number
    pictures?: PictureListRelationFilter
    prices?: PricingTierListRelationFilter
    transferOption?: TransferOptionListRelationFilter
  }, "uuid">

  export type CarOrderByWithAggregationInput = {
    models?: SortOrder
    included?: SortOrderInput | SortOrder
    carType?: SortOrder
    uuid?: SortOrder
    capacity?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    models?: StringNullableListFilter<"Car">
    included?: StringNullableWithAggregatesFilter<"Car"> | string | null
    carType?: StringWithAggregatesFilter<"Car"> | string
    uuid?: StringWithAggregatesFilter<"Car"> | string
    capacity?: IntWithAggregatesFilter<"Car"> | number
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    fileId?: StringFilter<"Picture"> | string
    fileBase64?: StringFilter<"Picture"> | string
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    uuid?: StringFilter<"Picture"> | string
    carId?: StringFilter<"Picture"> | string
    car?: XOR<CarRelationFilter, CarWhereInput>
  }

  export type PictureOrderByWithRelationAndSearchRelevanceInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    carId?: SortOrder
    car?: CarOrderByWithRelationAndSearchRelevanceInput
    _relevance?: PictureOrderByRelevanceInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    fileId?: StringFilter<"Picture"> | string
    fileBase64?: StringFilter<"Picture"> | string
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    carId?: StringFilter<"Picture"> | string
    car?: XOR<CarRelationFilter, CarWhereInput>
  }, "uuid">

  export type PictureOrderByWithAggregationInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    carId?: SortOrder
    _count?: PictureCountOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    fileId?: StringWithAggregatesFilter<"Picture"> | string
    fileBase64?: StringWithAggregatesFilter<"Picture"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Picture"> | Date | string
    uuid?: StringWithAggregatesFilter<"Picture"> | string
    carId?: StringWithAggregatesFilter<"Picture"> | string
  }

  export type PricingTierWhereInput = {
    AND?: PricingTierWhereInput | PricingTierWhereInput[]
    OR?: PricingTierWhereInput[]
    NOT?: PricingTierWhereInput | PricingTierWhereInput[]
    id?: IntFilter<"PricingTier"> | number
    carId?: StringNullableFilter<"PricingTier"> | string | null
    travelId?: StringNullableFilter<"PricingTier"> | string | null
    distance?: StringFilter<"PricingTier"> | string
    price?: IntFilter<"PricingTier"> | number
    car?: XOR<CarNullableRelationFilter, CarWhereInput> | null
    travel?: XOR<TravelNullableRelationFilter, TravelWhereInput> | null
  }

  export type PricingTierOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    carId?: SortOrderInput | SortOrder
    travelId?: SortOrderInput | SortOrder
    distance?: SortOrder
    price?: SortOrder
    car?: CarOrderByWithRelationAndSearchRelevanceInput
    travel?: TravelOrderByWithRelationAndSearchRelevanceInput
    _relevance?: PricingTierOrderByRelevanceInput
  }

  export type PricingTierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PricingTierWhereInput | PricingTierWhereInput[]
    OR?: PricingTierWhereInput[]
    NOT?: PricingTierWhereInput | PricingTierWhereInput[]
    carId?: StringNullableFilter<"PricingTier"> | string | null
    travelId?: StringNullableFilter<"PricingTier"> | string | null
    distance?: StringFilter<"PricingTier"> | string
    price?: IntFilter<"PricingTier"> | number
    car?: XOR<CarNullableRelationFilter, CarWhereInput> | null
    travel?: XOR<TravelNullableRelationFilter, TravelWhereInput> | null
  }, "id">

  export type PricingTierOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrderInput | SortOrder
    travelId?: SortOrderInput | SortOrder
    distance?: SortOrder
    price?: SortOrder
    _count?: PricingTierCountOrderByAggregateInput
    _avg?: PricingTierAvgOrderByAggregateInput
    _max?: PricingTierMaxOrderByAggregateInput
    _min?: PricingTierMinOrderByAggregateInput
    _sum?: PricingTierSumOrderByAggregateInput
  }

  export type PricingTierScalarWhereWithAggregatesInput = {
    AND?: PricingTierScalarWhereWithAggregatesInput | PricingTierScalarWhereWithAggregatesInput[]
    OR?: PricingTierScalarWhereWithAggregatesInput[]
    NOT?: PricingTierScalarWhereWithAggregatesInput | PricingTierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PricingTier"> | number
    carId?: StringNullableWithAggregatesFilter<"PricingTier"> | string | null
    travelId?: StringNullableWithAggregatesFilter<"PricingTier"> | string | null
    distance?: StringWithAggregatesFilter<"PricingTier"> | string
    price?: IntWithAggregatesFilter<"PricingTier"> | number
  }

  export type ItineraryWhereInput = {
    AND?: ItineraryWhereInput | ItineraryWhereInput[]
    OR?: ItineraryWhereInput[]
    NOT?: ItineraryWhereInput | ItineraryWhereInput[]
    route?: StringFilter<"Itinerary"> | string
    description?: StringFilter<"Itinerary"> | string
    duration?: StringFilter<"Itinerary"> | string
    time?: EnumTimeFilter<"Itinerary"> | $Enums.Time
    uuid?: StringFilter<"Itinerary"> | string
    travel?: TravelListRelationFilter
  }

  export type ItineraryOrderByWithRelationAndSearchRelevanceInput = {
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    time?: SortOrder
    uuid?: SortOrder
    travel?: TravelOrderByRelationAggregateInput
    _relevance?: ItineraryOrderByRelevanceInput
  }

  export type ItineraryWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: ItineraryWhereInput | ItineraryWhereInput[]
    OR?: ItineraryWhereInput[]
    NOT?: ItineraryWhereInput | ItineraryWhereInput[]
    route?: StringFilter<"Itinerary"> | string
    description?: StringFilter<"Itinerary"> | string
    duration?: StringFilter<"Itinerary"> | string
    time?: EnumTimeFilter<"Itinerary"> | $Enums.Time
    travel?: TravelListRelationFilter
  }, "uuid">

  export type ItineraryOrderByWithAggregationInput = {
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    time?: SortOrder
    uuid?: SortOrder
    _count?: ItineraryCountOrderByAggregateInput
    _max?: ItineraryMaxOrderByAggregateInput
    _min?: ItineraryMinOrderByAggregateInput
  }

  export type ItineraryScalarWhereWithAggregatesInput = {
    AND?: ItineraryScalarWhereWithAggregatesInput | ItineraryScalarWhereWithAggregatesInput[]
    OR?: ItineraryScalarWhereWithAggregatesInput[]
    NOT?: ItineraryScalarWhereWithAggregatesInput | ItineraryScalarWhereWithAggregatesInput[]
    route?: StringWithAggregatesFilter<"Itinerary"> | string
    description?: StringWithAggregatesFilter<"Itinerary"> | string
    duration?: StringWithAggregatesFilter<"Itinerary"> | string
    time?: EnumTimeWithAggregatesFilter<"Itinerary"> | $Enums.Time
    uuid?: StringWithAggregatesFilter<"Itinerary"> | string
  }

  export type TravelImageWhereInput = {
    AND?: TravelImageWhereInput | TravelImageWhereInput[]
    OR?: TravelImageWhereInput[]
    NOT?: TravelImageWhereInput | TravelImageWhereInput[]
    fileId?: StringFilter<"TravelImage"> | string
    fileBase64?: StringFilter<"TravelImage"> | string
    createdAt?: DateTimeFilter<"TravelImage"> | Date | string
    uuid?: StringFilter<"TravelImage"> | string
    travel?: TravelListRelationFilter
  }

  export type TravelImageOrderByWithRelationAndSearchRelevanceInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    travel?: TravelOrderByRelationAggregateInput
    _relevance?: TravelImageOrderByRelevanceInput
  }

  export type TravelImageWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: TravelImageWhereInput | TravelImageWhereInput[]
    OR?: TravelImageWhereInput[]
    NOT?: TravelImageWhereInput | TravelImageWhereInput[]
    fileId?: StringFilter<"TravelImage"> | string
    fileBase64?: StringFilter<"TravelImage"> | string
    createdAt?: DateTimeFilter<"TravelImage"> | Date | string
    travel?: TravelListRelationFilter
  }, "uuid">

  export type TravelImageOrderByWithAggregationInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _count?: TravelImageCountOrderByAggregateInput
    _max?: TravelImageMaxOrderByAggregateInput
    _min?: TravelImageMinOrderByAggregateInput
  }

  export type TravelImageScalarWhereWithAggregatesInput = {
    AND?: TravelImageScalarWhereWithAggregatesInput | TravelImageScalarWhereWithAggregatesInput[]
    OR?: TravelImageScalarWhereWithAggregatesInput[]
    NOT?: TravelImageScalarWhereWithAggregatesInput | TravelImageScalarWhereWithAggregatesInput[]
    fileId?: StringWithAggregatesFilter<"TravelImage"> | string
    fileBase64?: StringWithAggregatesFilter<"TravelImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TravelImage"> | Date | string
    uuid?: StringWithAggregatesFilter<"TravelImage"> | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    map?: StringFilter<"Contact"> | string
    telegram?: StringFilter<"Contact"> | string
    whatsapp?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    uuid?: StringFilter<"Contact"> | string
  }

  export type ContactOrderByWithRelationAndSearchRelevanceInput = {
    map?: SortOrder
    telegram?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _relevance?: ContactOrderByRelevanceInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    map?: StringFilter<"Contact"> | string
    telegram?: StringFilter<"Contact"> | string
    whatsapp?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }, "uuid">

  export type ContactOrderByWithAggregationInput = {
    map?: SortOrder
    telegram?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    map?: StringWithAggregatesFilter<"Contact"> | string
    telegram?: StringWithAggregatesFilter<"Contact"> | string
    whatsapp?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    uuid?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    fileId?: StringFilter<"Gallery"> | string
    fileBase64?: StringFilter<"Gallery"> | string
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    uuid?: StringFilter<"Gallery"> | string
  }

  export type GalleryOrderByWithRelationAndSearchRelevanceInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _relevance?: GalleryOrderByRelevanceInput
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    fileId?: StringFilter<"Gallery"> | string
    fileBase64?: StringFilter<"Gallery"> | string
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
  }, "uuid">

  export type GalleryOrderByWithAggregationInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _count?: GalleryCountOrderByAggregateInput
    _max?: GalleryMaxOrderByAggregateInput
    _min?: GalleryMinOrderByAggregateInput
  }

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    OR?: GalleryScalarWhereWithAggregatesInput[]
    NOT?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    fileId?: StringWithAggregatesFilter<"Gallery"> | string
    fileBase64?: StringWithAggregatesFilter<"Gallery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Gallery"> | Date | string
    uuid?: StringWithAggregatesFilter<"Gallery"> | string
  }

  export type TravelBannerWhereInput = {
    AND?: TravelBannerWhereInput | TravelBannerWhereInput[]
    OR?: TravelBannerWhereInput[]
    NOT?: TravelBannerWhereInput | TravelBannerWhereInput[]
    fileId?: StringFilter<"TravelBanner"> | string
    fileBase64?: StringFilter<"TravelBanner"> | string
    createdAt?: DateTimeFilter<"TravelBanner"> | Date | string
    uuid?: StringFilter<"TravelBanner"> | string
  }

  export type TravelBannerOrderByWithRelationAndSearchRelevanceInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _relevance?: TravelBannerOrderByRelevanceInput
  }

  export type TravelBannerWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: TravelBannerWhereInput | TravelBannerWhereInput[]
    OR?: TravelBannerWhereInput[]
    NOT?: TravelBannerWhereInput | TravelBannerWhereInput[]
    fileId?: StringFilter<"TravelBanner"> | string
    fileBase64?: StringFilter<"TravelBanner"> | string
    createdAt?: DateTimeFilter<"TravelBanner"> | Date | string
  }, "uuid">

  export type TravelBannerOrderByWithAggregationInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    _count?: TravelBannerCountOrderByAggregateInput
    _max?: TravelBannerMaxOrderByAggregateInput
    _min?: TravelBannerMinOrderByAggregateInput
  }

  export type TravelBannerScalarWhereWithAggregatesInput = {
    AND?: TravelBannerScalarWhereWithAggregatesInput | TravelBannerScalarWhereWithAggregatesInput[]
    OR?: TravelBannerScalarWhereWithAggregatesInput[]
    NOT?: TravelBannerScalarWhereWithAggregatesInput | TravelBannerScalarWhereWithAggregatesInput[]
    fileId?: StringWithAggregatesFilter<"TravelBanner"> | string
    fileBase64?: StringWithAggregatesFilter<"TravelBanner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TravelBanner"> | Date | string
    uuid?: StringWithAggregatesFilter<"TravelBanner"> | string
  }

  export type TransferOptionWhereInput = {
    AND?: TransferOptionWhereInput | TransferOptionWhereInput[]
    OR?: TransferOptionWhereInput[]
    NOT?: TransferOptionWhereInput | TransferOptionWhereInput[]
    uuid?: StringFilter<"TransferOption"> | string
    price?: IntFilter<"TransferOption"> | number
    carId?: StringNullableFilter<"TransferOption"> | string | null
    transferInfoId?: StringNullableFilter<"TransferOption"> | string | null
    car?: XOR<CarNullableRelationFilter, CarWhereInput> | null
    transferInfo?: XOR<TransferInfoNullableRelationFilter, TransferInfoWhereInput> | null
  }

  export type TransferOptionOrderByWithRelationAndSearchRelevanceInput = {
    uuid?: SortOrder
    price?: SortOrder
    carId?: SortOrderInput | SortOrder
    transferInfoId?: SortOrderInput | SortOrder
    car?: CarOrderByWithRelationAndSearchRelevanceInput
    transferInfo?: TransferInfoOrderByWithRelationAndSearchRelevanceInput
    _relevance?: TransferOptionOrderByRelevanceInput
  }

  export type TransferOptionWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: TransferOptionWhereInput | TransferOptionWhereInput[]
    OR?: TransferOptionWhereInput[]
    NOT?: TransferOptionWhereInput | TransferOptionWhereInput[]
    price?: IntFilter<"TransferOption"> | number
    carId?: StringNullableFilter<"TransferOption"> | string | null
    transferInfoId?: StringNullableFilter<"TransferOption"> | string | null
    car?: XOR<CarNullableRelationFilter, CarWhereInput> | null
    transferInfo?: XOR<TransferInfoNullableRelationFilter, TransferInfoWhereInput> | null
  }, "uuid">

  export type TransferOptionOrderByWithAggregationInput = {
    uuid?: SortOrder
    price?: SortOrder
    carId?: SortOrderInput | SortOrder
    transferInfoId?: SortOrderInput | SortOrder
    _count?: TransferOptionCountOrderByAggregateInput
    _avg?: TransferOptionAvgOrderByAggregateInput
    _max?: TransferOptionMaxOrderByAggregateInput
    _min?: TransferOptionMinOrderByAggregateInput
    _sum?: TransferOptionSumOrderByAggregateInput
  }

  export type TransferOptionScalarWhereWithAggregatesInput = {
    AND?: TransferOptionScalarWhereWithAggregatesInput | TransferOptionScalarWhereWithAggregatesInput[]
    OR?: TransferOptionScalarWhereWithAggregatesInput[]
    NOT?: TransferOptionScalarWhereWithAggregatesInput | TransferOptionScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"TransferOption"> | string
    price?: IntWithAggregatesFilter<"TransferOption"> | number
    carId?: StringNullableWithAggregatesFilter<"TransferOption"> | string | null
    transferInfoId?: StringNullableWithAggregatesFilter<"TransferOption"> | string | null
  }

  export type TransferInfoWhereInput = {
    AND?: TransferInfoWhereInput | TransferInfoWhereInput[]
    OR?: TransferInfoWhereInput[]
    NOT?: TransferInfoWhereInput | TransferInfoWhereInput[]
    uuid?: StringFilter<"TransferInfo"> | string
    transfer?: StringFilter<"TransferInfo"> | string
    time?: EnumTimeFilter<"TransferInfo"> | $Enums.Time
    drivingTime?: StringFilter<"TransferInfo"> | string
    drivingDistance?: StringFilter<"TransferInfo"> | string
    transferOptions?: TransferOptionListRelationFilter
  }

  export type TransferInfoOrderByWithRelationAndSearchRelevanceInput = {
    uuid?: SortOrder
    transfer?: SortOrder
    time?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
    transferOptions?: TransferOptionOrderByRelationAggregateInput
    _relevance?: TransferInfoOrderByRelevanceInput
  }

  export type TransferInfoWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: TransferInfoWhereInput | TransferInfoWhereInput[]
    OR?: TransferInfoWhereInput[]
    NOT?: TransferInfoWhereInput | TransferInfoWhereInput[]
    transfer?: StringFilter<"TransferInfo"> | string
    time?: EnumTimeFilter<"TransferInfo"> | $Enums.Time
    drivingTime?: StringFilter<"TransferInfo"> | string
    drivingDistance?: StringFilter<"TransferInfo"> | string
    transferOptions?: TransferOptionListRelationFilter
  }, "uuid">

  export type TransferInfoOrderByWithAggregationInput = {
    uuid?: SortOrder
    transfer?: SortOrder
    time?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
    _count?: TransferInfoCountOrderByAggregateInput
    _max?: TransferInfoMaxOrderByAggregateInput
    _min?: TransferInfoMinOrderByAggregateInput
  }

  export type TransferInfoScalarWhereWithAggregatesInput = {
    AND?: TransferInfoScalarWhereWithAggregatesInput | TransferInfoScalarWhereWithAggregatesInput[]
    OR?: TransferInfoScalarWhereWithAggregatesInput[]
    NOT?: TransferInfoScalarWhereWithAggregatesInput | TransferInfoScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"TransferInfo"> | string
    transfer?: StringWithAggregatesFilter<"TransferInfo"> | string
    time?: EnumTimeWithAggregatesFilter<"TransferInfo"> | $Enums.Time
    drivingTime?: StringWithAggregatesFilter<"TransferInfo"> | string
    drivingDistance?: StringWithAggregatesFilter<"TransferInfo"> | string
  }

  export type BannerCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type BannerUncheckedCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type BannerUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type BannerUncheckedUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type BannerCreateManyInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type BannerUpdateManyMutationInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type BannerUncheckedUpdateManyInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelCreateInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    uuid?: string
    pricesPerCar?: PricingTierCreateNestedManyWithoutTravelInput
    travelImage: TravelImageCreateNestedOneWithoutTravelInput
    itinerary?: ItineraryCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    travelImageId: string
    uuid?: string
    pricesPerCar?: PricingTierUncheckedCreateNestedManyWithoutTravelInput
    itinerary?: ItineraryUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    pricesPerCar?: PricingTierUpdateManyWithoutTravelNestedInput
    travelImage?: TravelImageUpdateOneRequiredWithoutTravelNestedInput
    itinerary?: ItineraryUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelImageId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    pricesPerCar?: PricingTierUncheckedUpdateManyWithoutTravelNestedInput
    itinerary?: ItineraryUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelCreateManyInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    travelImageId: string
    uuid?: string
  }

  export type TravelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelImageId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type CarCreateInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
    pictures?: PictureCreateNestedManyWithoutCarInput
    prices?: PricingTierCreateNestedManyWithoutCarInput
    transferOption?: TransferOptionCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
    pictures?: PictureUncheckedCreateNestedManyWithoutCarInput
    prices?: PricingTierUncheckedCreateNestedManyWithoutCarInput
    transferOption?: TransferOptionUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUpdateManyWithoutCarNestedInput
    prices?: PricingTierUpdateManyWithoutCarNestedInput
    transferOption?: TransferOptionUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUncheckedUpdateManyWithoutCarNestedInput
    prices?: PricingTierUncheckedUpdateManyWithoutCarNestedInput
    transferOption?: TransferOptionUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
  }

  export type CarUpdateManyMutationInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type CarUncheckedUpdateManyInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type PictureCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
    car: CarCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
    carId: string
  }

  export type PictureUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    car?: CarUpdateOneRequiredWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateManyInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
    carId: string
  }

  export type PictureUpdateManyMutationInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
  }

  export type PricingTierCreateInput = {
    distance: string
    price: number
    car?: CarCreateNestedOneWithoutPricesInput
    travel?: TravelCreateNestedOneWithoutPricesPerCarInput
  }

  export type PricingTierUncheckedCreateInput = {
    id?: number
    carId?: string | null
    travelId?: string | null
    distance: string
    price: number
  }

  export type PricingTierUpdateInput = {
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneWithoutPricesNestedInput
    travel?: TravelUpdateOneWithoutPricesPerCarNestedInput
  }

  export type PricingTierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableStringFieldUpdateOperationsInput | string | null
    travelId?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PricingTierCreateManyInput = {
    id?: number
    carId?: string | null
    travelId?: string | null
    distance: string
    price: number
  }

  export type PricingTierUpdateManyMutationInput = {
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PricingTierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableStringFieldUpdateOperationsInput | string | null
    travelId?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ItineraryCreateInput = {
    route: string
    description: string
    duration: string
    time?: $Enums.Time
    uuid?: string
    travel?: TravelCreateNestedManyWithoutItineraryInput
  }

  export type ItineraryUncheckedCreateInput = {
    route: string
    description: string
    duration: string
    time?: $Enums.Time
    uuid?: string
    travel?: TravelUncheckedCreateNestedManyWithoutItineraryInput
  }

  export type ItineraryUpdateInput = {
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    uuid?: StringFieldUpdateOperationsInput | string
    travel?: TravelUpdateManyWithoutItineraryNestedInput
  }

  export type ItineraryUncheckedUpdateInput = {
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    uuid?: StringFieldUpdateOperationsInput | string
    travel?: TravelUncheckedUpdateManyWithoutItineraryNestedInput
  }

  export type ItineraryCreateManyInput = {
    route: string
    description: string
    duration: string
    time?: $Enums.Time
    uuid?: string
  }

  export type ItineraryUpdateManyMutationInput = {
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type ItineraryUncheckedUpdateManyInput = {
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelImageCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
    travel?: TravelCreateNestedManyWithoutTravelImageInput
  }

  export type TravelImageUncheckedCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
    travel?: TravelUncheckedCreateNestedManyWithoutTravelImageInput
  }

  export type TravelImageUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    travel?: TravelUpdateManyWithoutTravelImageNestedInput
  }

  export type TravelImageUncheckedUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    travel?: TravelUncheckedUpdateManyWithoutTravelImageNestedInput
  }

  export type TravelImageCreateManyInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type TravelImageUpdateManyMutationInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelImageUncheckedUpdateManyInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateInput = {
    map: string
    telegram: string
    whatsapp: string
    createdAt?: Date | string
    uuid?: string
  }

  export type ContactUncheckedCreateInput = {
    map: string
    telegram: string
    whatsapp: string
    createdAt?: Date | string
    uuid?: string
  }

  export type ContactUpdateInput = {
    map?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateInput = {
    map?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateManyInput = {
    map: string
    telegram: string
    whatsapp: string
    createdAt?: Date | string
    uuid?: string
  }

  export type ContactUpdateManyMutationInput = {
    map?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateManyInput = {
    map?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type GalleryUncheckedCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type GalleryUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryUncheckedUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryCreateManyInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type GalleryUpdateManyMutationInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryUncheckedUpdateManyInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelBannerCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type TravelBannerUncheckedCreateInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type TravelBannerUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelBannerUncheckedUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelBannerCreateManyInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type TravelBannerUpdateManyMutationInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelBannerUncheckedUpdateManyInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TransferOptionCreateInput = {
    uuid?: string
    price: number
    car?: CarCreateNestedOneWithoutTransferOptionInput
    transferInfo?: TransferInfoCreateNestedOneWithoutTransferOptionsInput
  }

  export type TransferOptionUncheckedCreateInput = {
    uuid?: string
    price: number
    carId?: string | null
    transferInfoId?: string | null
  }

  export type TransferOptionUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneWithoutTransferOptionNestedInput
    transferInfo?: TransferInfoUpdateOneWithoutTransferOptionsNestedInput
  }

  export type TransferOptionUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    carId?: NullableStringFieldUpdateOperationsInput | string | null
    transferInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferOptionCreateManyInput = {
    uuid?: string
    price: number
    carId?: string | null
    transferInfoId?: string | null
  }

  export type TransferOptionUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TransferOptionUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    carId?: NullableStringFieldUpdateOperationsInput | string | null
    transferInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferInfoCreateInput = {
    uuid?: string
    transfer: string
    time: $Enums.Time
    drivingTime: string
    drivingDistance: string
    transferOptions?: TransferOptionCreateNestedManyWithoutTransferInfoInput
  }

  export type TransferInfoUncheckedCreateInput = {
    uuid?: string
    transfer: string
    time: $Enums.Time
    drivingTime: string
    drivingDistance: string
    transferOptions?: TransferOptionUncheckedCreateNestedManyWithoutTransferInfoInput
  }

  export type TransferInfoUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    transfer?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    transferOptions?: TransferOptionUpdateManyWithoutTransferInfoNestedInput
  }

  export type TransferInfoUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    transfer?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    transferOptions?: TransferOptionUncheckedUpdateManyWithoutTransferInfoNestedInput
  }

  export type TransferInfoCreateManyInput = {
    uuid?: string
    transfer: string
    time: $Enums.Time
    drivingTime: string
    drivingDistance: string
  }

  export type TransferInfoUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    transfer?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
  }

  export type TransferInfoUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    transfer?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BannerOrderByRelevanceInput = {
    fields: BannerOrderByRelevanceFieldEnum | BannerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BannerCountOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumtravelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.travelType | EnumtravelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.travelType[] | ListEnumtravelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.travelType[] | ListEnumtravelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtravelTypeFilter<$PrismaModel> | $Enums.travelType
  }

  export type EnumTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.Time | EnumTimeFieldRefInput<$PrismaModel>
    in?: $Enums.Time[] | ListEnumTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Time[] | ListEnumTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeFilter<$PrismaModel> | $Enums.Time
  }

  export type PricingTierListRelationFilter = {
    every?: PricingTierWhereInput
    some?: PricingTierWhereInput
    none?: PricingTierWhereInput
  }

  export type TravelImageRelationFilter = {
    is?: TravelImageWhereInput
    isNot?: TravelImageWhereInput
  }

  export type ItineraryListRelationFilter = {
    every?: ItineraryWhereInput
    some?: ItineraryWhereInput
    none?: ItineraryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PricingTierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItineraryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelOrderByRelevanceInput = {
    fields: TravelOrderByRelevanceFieldEnum | TravelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TravelCountOrderByAggregateInput = {
    name?: SortOrder
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    sightseeingTime?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
    included?: SortOrder
    notIncluded?: SortOrder
    reservation?: SortOrder
    travelType?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    travelImageId?: SortOrder
    uuid?: SortOrder
  }

  export type TravelMaxOrderByAggregateInput = {
    name?: SortOrder
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    sightseeingTime?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
    included?: SortOrder
    notIncluded?: SortOrder
    reservation?: SortOrder
    travelType?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    travelImageId?: SortOrder
    uuid?: SortOrder
  }

  export type TravelMinOrderByAggregateInput = {
    name?: SortOrder
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    sightseeingTime?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
    included?: SortOrder
    notIncluded?: SortOrder
    reservation?: SortOrder
    travelType?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    travelImageId?: SortOrder
    uuid?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumtravelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.travelType | EnumtravelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.travelType[] | ListEnumtravelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.travelType[] | ListEnumtravelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtravelTypeWithAggregatesFilter<$PrismaModel> | $Enums.travelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtravelTypeFilter<$PrismaModel>
    _max?: NestedEnumtravelTypeFilter<$PrismaModel>
  }

  export type EnumTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Time | EnumTimeFieldRefInput<$PrismaModel>
    in?: $Enums.Time[] | ListEnumTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Time[] | ListEnumTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeWithAggregatesFilter<$PrismaModel> | $Enums.Time
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeFilter<$PrismaModel>
    _max?: NestedEnumTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PictureListRelationFilter = {
    every?: PictureWhereInput
    some?: PictureWhereInput
    none?: PictureWhereInput
  }

  export type TransferOptionListRelationFilter = {
    every?: TransferOptionWhereInput
    some?: TransferOptionWhereInput
    none?: TransferOptionWhereInput
  }

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransferOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarOrderByRelevanceInput = {
    fields: CarOrderByRelevanceFieldEnum | CarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CarCountOrderByAggregateInput = {
    models?: SortOrder
    included?: SortOrder
    carType?: SortOrder
    uuid?: SortOrder
    capacity?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    included?: SortOrder
    carType?: SortOrder
    uuid?: SortOrder
    capacity?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    included?: SortOrder
    carType?: SortOrder
    uuid?: SortOrder
    capacity?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type PictureOrderByRelevanceInput = {
    fields: PictureOrderByRelevanceFieldEnum | PictureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PictureCountOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    carId?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    carId?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
    carId?: SortOrder
  }

  export type CarNullableRelationFilter = {
    is?: CarWhereInput | null
    isNot?: CarWhereInput | null
  }

  export type TravelNullableRelationFilter = {
    is?: TravelWhereInput | null
    isNot?: TravelWhereInput | null
  }

  export type PricingTierOrderByRelevanceInput = {
    fields: PricingTierOrderByRelevanceFieldEnum | PricingTierOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PricingTierCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    travelId?: SortOrder
    distance?: SortOrder
    price?: SortOrder
  }

  export type PricingTierAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PricingTierMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    travelId?: SortOrder
    distance?: SortOrder
    price?: SortOrder
  }

  export type PricingTierMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    travelId?: SortOrder
    distance?: SortOrder
    price?: SortOrder
  }

  export type PricingTierSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type TravelListRelationFilter = {
    every?: TravelWhereInput
    some?: TravelWhereInput
    none?: TravelWhereInput
  }

  export type TravelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItineraryOrderByRelevanceInput = {
    fields: ItineraryOrderByRelevanceFieldEnum | ItineraryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ItineraryCountOrderByAggregateInput = {
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    time?: SortOrder
    uuid?: SortOrder
  }

  export type ItineraryMaxOrderByAggregateInput = {
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    time?: SortOrder
    uuid?: SortOrder
  }

  export type ItineraryMinOrderByAggregateInput = {
    route?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    time?: SortOrder
    uuid?: SortOrder
  }

  export type TravelImageOrderByRelevanceInput = {
    fields: TravelImageOrderByRelevanceFieldEnum | TravelImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TravelImageCountOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type TravelImageMaxOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type TravelImageMinOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type ContactOrderByRelevanceInput = {
    fields: ContactOrderByRelevanceFieldEnum | ContactOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactCountOrderByAggregateInput = {
    map?: SortOrder
    telegram?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    map?: SortOrder
    telegram?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    map?: SortOrder
    telegram?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type GalleryOrderByRelevanceInput = {
    fields: GalleryOrderByRelevanceFieldEnum | GalleryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GalleryCountOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type TravelBannerOrderByRelevanceInput = {
    fields: TravelBannerOrderByRelevanceFieldEnum | TravelBannerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TravelBannerCountOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type TravelBannerMaxOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type TravelBannerMinOrderByAggregateInput = {
    fileId?: SortOrder
    fileBase64?: SortOrder
    createdAt?: SortOrder
    uuid?: SortOrder
  }

  export type TransferInfoNullableRelationFilter = {
    is?: TransferInfoWhereInput | null
    isNot?: TransferInfoWhereInput | null
  }

  export type TransferOptionOrderByRelevanceInput = {
    fields: TransferOptionOrderByRelevanceFieldEnum | TransferOptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransferOptionCountOrderByAggregateInput = {
    uuid?: SortOrder
    price?: SortOrder
    carId?: SortOrder
    transferInfoId?: SortOrder
  }

  export type TransferOptionAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TransferOptionMaxOrderByAggregateInput = {
    uuid?: SortOrder
    price?: SortOrder
    carId?: SortOrder
    transferInfoId?: SortOrder
  }

  export type TransferOptionMinOrderByAggregateInput = {
    uuid?: SortOrder
    price?: SortOrder
    carId?: SortOrder
    transferInfoId?: SortOrder
  }

  export type TransferOptionSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TransferInfoOrderByRelevanceInput = {
    fields: TransferInfoOrderByRelevanceFieldEnum | TransferInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransferInfoCountOrderByAggregateInput = {
    uuid?: SortOrder
    transfer?: SortOrder
    time?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
  }

  export type TransferInfoMaxOrderByAggregateInput = {
    uuid?: SortOrder
    transfer?: SortOrder
    time?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
  }

  export type TransferInfoMinOrderByAggregateInput = {
    uuid?: SortOrder
    transfer?: SortOrder
    time?: SortOrder
    drivingTime?: SortOrder
    drivingDistance?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PricingTierCreateNestedManyWithoutTravelInput = {
    create?: XOR<PricingTierCreateWithoutTravelInput, PricingTierUncheckedCreateWithoutTravelInput> | PricingTierCreateWithoutTravelInput[] | PricingTierUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutTravelInput | PricingTierCreateOrConnectWithoutTravelInput[]
    createMany?: PricingTierCreateManyTravelInputEnvelope
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
  }

  export type TravelImageCreateNestedOneWithoutTravelInput = {
    create?: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput>
    connectOrCreate?: TravelImageCreateOrConnectWithoutTravelInput
    connect?: TravelImageWhereUniqueInput
  }

  export type ItineraryCreateNestedManyWithoutTravelInput = {
    create?: XOR<ItineraryCreateWithoutTravelInput, ItineraryUncheckedCreateWithoutTravelInput> | ItineraryCreateWithoutTravelInput[] | ItineraryUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: ItineraryCreateOrConnectWithoutTravelInput | ItineraryCreateOrConnectWithoutTravelInput[]
    connect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
  }

  export type PricingTierUncheckedCreateNestedManyWithoutTravelInput = {
    create?: XOR<PricingTierCreateWithoutTravelInput, PricingTierUncheckedCreateWithoutTravelInput> | PricingTierCreateWithoutTravelInput[] | PricingTierUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutTravelInput | PricingTierCreateOrConnectWithoutTravelInput[]
    createMany?: PricingTierCreateManyTravelInputEnvelope
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
  }

  export type ItineraryUncheckedCreateNestedManyWithoutTravelInput = {
    create?: XOR<ItineraryCreateWithoutTravelInput, ItineraryUncheckedCreateWithoutTravelInput> | ItineraryCreateWithoutTravelInput[] | ItineraryUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: ItineraryCreateOrConnectWithoutTravelInput | ItineraryCreateOrConnectWithoutTravelInput[]
    connect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumtravelTypeFieldUpdateOperationsInput = {
    set?: $Enums.travelType
  }

  export type EnumTimeFieldUpdateOperationsInput = {
    set?: $Enums.Time
  }

  export type PricingTierUpdateManyWithoutTravelNestedInput = {
    create?: XOR<PricingTierCreateWithoutTravelInput, PricingTierUncheckedCreateWithoutTravelInput> | PricingTierCreateWithoutTravelInput[] | PricingTierUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutTravelInput | PricingTierCreateOrConnectWithoutTravelInput[]
    upsert?: PricingTierUpsertWithWhereUniqueWithoutTravelInput | PricingTierUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: PricingTierCreateManyTravelInputEnvelope
    set?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    disconnect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    delete?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    update?: PricingTierUpdateWithWhereUniqueWithoutTravelInput | PricingTierUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: PricingTierUpdateManyWithWhereWithoutTravelInput | PricingTierUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
  }

  export type TravelImageUpdateOneRequiredWithoutTravelNestedInput = {
    create?: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput>
    connectOrCreate?: TravelImageCreateOrConnectWithoutTravelInput
    upsert?: TravelImageUpsertWithoutTravelInput
    connect?: TravelImageWhereUniqueInput
    update?: XOR<XOR<TravelImageUpdateToOneWithWhereWithoutTravelInput, TravelImageUpdateWithoutTravelInput>, TravelImageUncheckedUpdateWithoutTravelInput>
  }

  export type ItineraryUpdateManyWithoutTravelNestedInput = {
    create?: XOR<ItineraryCreateWithoutTravelInput, ItineraryUncheckedCreateWithoutTravelInput> | ItineraryCreateWithoutTravelInput[] | ItineraryUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: ItineraryCreateOrConnectWithoutTravelInput | ItineraryCreateOrConnectWithoutTravelInput[]
    upsert?: ItineraryUpsertWithWhereUniqueWithoutTravelInput | ItineraryUpsertWithWhereUniqueWithoutTravelInput[]
    set?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    disconnect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    delete?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    connect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    update?: ItineraryUpdateWithWhereUniqueWithoutTravelInput | ItineraryUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: ItineraryUpdateManyWithWhereWithoutTravelInput | ItineraryUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: ItineraryScalarWhereInput | ItineraryScalarWhereInput[]
  }

  export type PricingTierUncheckedUpdateManyWithoutTravelNestedInput = {
    create?: XOR<PricingTierCreateWithoutTravelInput, PricingTierUncheckedCreateWithoutTravelInput> | PricingTierCreateWithoutTravelInput[] | PricingTierUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutTravelInput | PricingTierCreateOrConnectWithoutTravelInput[]
    upsert?: PricingTierUpsertWithWhereUniqueWithoutTravelInput | PricingTierUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: PricingTierCreateManyTravelInputEnvelope
    set?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    disconnect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    delete?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    update?: PricingTierUpdateWithWhereUniqueWithoutTravelInput | PricingTierUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: PricingTierUpdateManyWithWhereWithoutTravelInput | PricingTierUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
  }

  export type ItineraryUncheckedUpdateManyWithoutTravelNestedInput = {
    create?: XOR<ItineraryCreateWithoutTravelInput, ItineraryUncheckedCreateWithoutTravelInput> | ItineraryCreateWithoutTravelInput[] | ItineraryUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: ItineraryCreateOrConnectWithoutTravelInput | ItineraryCreateOrConnectWithoutTravelInput[]
    upsert?: ItineraryUpsertWithWhereUniqueWithoutTravelInput | ItineraryUpsertWithWhereUniqueWithoutTravelInput[]
    set?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    disconnect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    delete?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    connect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    update?: ItineraryUpdateWithWhereUniqueWithoutTravelInput | ItineraryUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: ItineraryUpdateManyWithWhereWithoutTravelInput | ItineraryUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: ItineraryScalarWhereInput | ItineraryScalarWhereInput[]
  }

  export type CarCreatemodelsInput = {
    set: string[]
  }

  export type PictureCreateNestedManyWithoutCarInput = {
    create?: XOR<PictureCreateWithoutCarInput, PictureUncheckedCreateWithoutCarInput> | PictureCreateWithoutCarInput[] | PictureUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutCarInput | PictureCreateOrConnectWithoutCarInput[]
    createMany?: PictureCreateManyCarInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type PricingTierCreateNestedManyWithoutCarInput = {
    create?: XOR<PricingTierCreateWithoutCarInput, PricingTierUncheckedCreateWithoutCarInput> | PricingTierCreateWithoutCarInput[] | PricingTierUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutCarInput | PricingTierCreateOrConnectWithoutCarInput[]
    createMany?: PricingTierCreateManyCarInputEnvelope
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
  }

  export type TransferOptionCreateNestedManyWithoutCarInput = {
    create?: XOR<TransferOptionCreateWithoutCarInput, TransferOptionUncheckedCreateWithoutCarInput> | TransferOptionCreateWithoutCarInput[] | TransferOptionUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TransferOptionCreateOrConnectWithoutCarInput | TransferOptionCreateOrConnectWithoutCarInput[]
    createMany?: TransferOptionCreateManyCarInputEnvelope
    connect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
  }

  export type PictureUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<PictureCreateWithoutCarInput, PictureUncheckedCreateWithoutCarInput> | PictureCreateWithoutCarInput[] | PictureUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutCarInput | PictureCreateOrConnectWithoutCarInput[]
    createMany?: PictureCreateManyCarInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type PricingTierUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<PricingTierCreateWithoutCarInput, PricingTierUncheckedCreateWithoutCarInput> | PricingTierCreateWithoutCarInput[] | PricingTierUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutCarInput | PricingTierCreateOrConnectWithoutCarInput[]
    createMany?: PricingTierCreateManyCarInputEnvelope
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
  }

  export type TransferOptionUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<TransferOptionCreateWithoutCarInput, TransferOptionUncheckedCreateWithoutCarInput> | TransferOptionCreateWithoutCarInput[] | TransferOptionUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TransferOptionCreateOrConnectWithoutCarInput | TransferOptionCreateOrConnectWithoutCarInput[]
    createMany?: TransferOptionCreateManyCarInputEnvelope
    connect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
  }

  export type CarUpdatemodelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PictureUpdateManyWithoutCarNestedInput = {
    create?: XOR<PictureCreateWithoutCarInput, PictureUncheckedCreateWithoutCarInput> | PictureCreateWithoutCarInput[] | PictureUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutCarInput | PictureCreateOrConnectWithoutCarInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutCarInput | PictureUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PictureCreateManyCarInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutCarInput | PictureUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutCarInput | PictureUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type PricingTierUpdateManyWithoutCarNestedInput = {
    create?: XOR<PricingTierCreateWithoutCarInput, PricingTierUncheckedCreateWithoutCarInput> | PricingTierCreateWithoutCarInput[] | PricingTierUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutCarInput | PricingTierCreateOrConnectWithoutCarInput[]
    upsert?: PricingTierUpsertWithWhereUniqueWithoutCarInput | PricingTierUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PricingTierCreateManyCarInputEnvelope
    set?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    disconnect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    delete?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    update?: PricingTierUpdateWithWhereUniqueWithoutCarInput | PricingTierUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PricingTierUpdateManyWithWhereWithoutCarInput | PricingTierUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
  }

  export type TransferOptionUpdateManyWithoutCarNestedInput = {
    create?: XOR<TransferOptionCreateWithoutCarInput, TransferOptionUncheckedCreateWithoutCarInput> | TransferOptionCreateWithoutCarInput[] | TransferOptionUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TransferOptionCreateOrConnectWithoutCarInput | TransferOptionCreateOrConnectWithoutCarInput[]
    upsert?: TransferOptionUpsertWithWhereUniqueWithoutCarInput | TransferOptionUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TransferOptionCreateManyCarInputEnvelope
    set?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    disconnect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    delete?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    connect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    update?: TransferOptionUpdateWithWhereUniqueWithoutCarInput | TransferOptionUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TransferOptionUpdateManyWithWhereWithoutCarInput | TransferOptionUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TransferOptionScalarWhereInput | TransferOptionScalarWhereInput[]
  }

  export type PictureUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<PictureCreateWithoutCarInput, PictureUncheckedCreateWithoutCarInput> | PictureCreateWithoutCarInput[] | PictureUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutCarInput | PictureCreateOrConnectWithoutCarInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutCarInput | PictureUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PictureCreateManyCarInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutCarInput | PictureUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutCarInput | PictureUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type PricingTierUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<PricingTierCreateWithoutCarInput, PricingTierUncheckedCreateWithoutCarInput> | PricingTierCreateWithoutCarInput[] | PricingTierUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutCarInput | PricingTierCreateOrConnectWithoutCarInput[]
    upsert?: PricingTierUpsertWithWhereUniqueWithoutCarInput | PricingTierUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PricingTierCreateManyCarInputEnvelope
    set?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    disconnect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    delete?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    update?: PricingTierUpdateWithWhereUniqueWithoutCarInput | PricingTierUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PricingTierUpdateManyWithWhereWithoutCarInput | PricingTierUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
  }

  export type TransferOptionUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<TransferOptionCreateWithoutCarInput, TransferOptionUncheckedCreateWithoutCarInput> | TransferOptionCreateWithoutCarInput[] | TransferOptionUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TransferOptionCreateOrConnectWithoutCarInput | TransferOptionCreateOrConnectWithoutCarInput[]
    upsert?: TransferOptionUpsertWithWhereUniqueWithoutCarInput | TransferOptionUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TransferOptionCreateManyCarInputEnvelope
    set?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    disconnect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    delete?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    connect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    update?: TransferOptionUpdateWithWhereUniqueWithoutCarInput | TransferOptionUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TransferOptionUpdateManyWithWhereWithoutCarInput | TransferOptionUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TransferOptionScalarWhereInput | TransferOptionScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutPicturesInput = {
    create?: XOR<CarCreateWithoutPicturesInput, CarUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: CarCreateOrConnectWithoutPicturesInput
    connect?: CarWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutPicturesNestedInput = {
    create?: XOR<CarCreateWithoutPicturesInput, CarUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: CarCreateOrConnectWithoutPicturesInput
    upsert?: CarUpsertWithoutPicturesInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutPicturesInput, CarUpdateWithoutPicturesInput>, CarUncheckedUpdateWithoutPicturesInput>
  }

  export type CarCreateNestedOneWithoutPricesInput = {
    create?: XOR<CarCreateWithoutPricesInput, CarUncheckedCreateWithoutPricesInput>
    connectOrCreate?: CarCreateOrConnectWithoutPricesInput
    connect?: CarWhereUniqueInput
  }

  export type TravelCreateNestedOneWithoutPricesPerCarInput = {
    create?: XOR<TravelCreateWithoutPricesPerCarInput, TravelUncheckedCreateWithoutPricesPerCarInput>
    connectOrCreate?: TravelCreateOrConnectWithoutPricesPerCarInput
    connect?: TravelWhereUniqueInput
  }

  export type CarUpdateOneWithoutPricesNestedInput = {
    create?: XOR<CarCreateWithoutPricesInput, CarUncheckedCreateWithoutPricesInput>
    connectOrCreate?: CarCreateOrConnectWithoutPricesInput
    upsert?: CarUpsertWithoutPricesInput
    disconnect?: CarWhereInput | boolean
    delete?: CarWhereInput | boolean
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutPricesInput, CarUpdateWithoutPricesInput>, CarUncheckedUpdateWithoutPricesInput>
  }

  export type TravelUpdateOneWithoutPricesPerCarNestedInput = {
    create?: XOR<TravelCreateWithoutPricesPerCarInput, TravelUncheckedCreateWithoutPricesPerCarInput>
    connectOrCreate?: TravelCreateOrConnectWithoutPricesPerCarInput
    upsert?: TravelUpsertWithoutPricesPerCarInput
    disconnect?: TravelWhereInput | boolean
    delete?: TravelWhereInput | boolean
    connect?: TravelWhereUniqueInput
    update?: XOR<XOR<TravelUpdateToOneWithWhereWithoutPricesPerCarInput, TravelUpdateWithoutPricesPerCarInput>, TravelUncheckedUpdateWithoutPricesPerCarInput>
  }

  export type TravelCreateNestedManyWithoutItineraryInput = {
    create?: XOR<TravelCreateWithoutItineraryInput, TravelUncheckedCreateWithoutItineraryInput> | TravelCreateWithoutItineraryInput[] | TravelUncheckedCreateWithoutItineraryInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutItineraryInput | TravelCreateOrConnectWithoutItineraryInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type TravelUncheckedCreateNestedManyWithoutItineraryInput = {
    create?: XOR<TravelCreateWithoutItineraryInput, TravelUncheckedCreateWithoutItineraryInput> | TravelCreateWithoutItineraryInput[] | TravelUncheckedCreateWithoutItineraryInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutItineraryInput | TravelCreateOrConnectWithoutItineraryInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type TravelUpdateManyWithoutItineraryNestedInput = {
    create?: XOR<TravelCreateWithoutItineraryInput, TravelUncheckedCreateWithoutItineraryInput> | TravelCreateWithoutItineraryInput[] | TravelUncheckedCreateWithoutItineraryInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutItineraryInput | TravelCreateOrConnectWithoutItineraryInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutItineraryInput | TravelUpsertWithWhereUniqueWithoutItineraryInput[]
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutItineraryInput | TravelUpdateWithWhereUniqueWithoutItineraryInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutItineraryInput | TravelUpdateManyWithWhereWithoutItineraryInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type TravelUncheckedUpdateManyWithoutItineraryNestedInput = {
    create?: XOR<TravelCreateWithoutItineraryInput, TravelUncheckedCreateWithoutItineraryInput> | TravelCreateWithoutItineraryInput[] | TravelUncheckedCreateWithoutItineraryInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutItineraryInput | TravelCreateOrConnectWithoutItineraryInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutItineraryInput | TravelUpsertWithWhereUniqueWithoutItineraryInput[]
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutItineraryInput | TravelUpdateWithWhereUniqueWithoutItineraryInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutItineraryInput | TravelUpdateManyWithWhereWithoutItineraryInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type TravelCreateNestedManyWithoutTravelImageInput = {
    create?: XOR<TravelCreateWithoutTravelImageInput, TravelUncheckedCreateWithoutTravelImageInput> | TravelCreateWithoutTravelImageInput[] | TravelUncheckedCreateWithoutTravelImageInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutTravelImageInput | TravelCreateOrConnectWithoutTravelImageInput[]
    createMany?: TravelCreateManyTravelImageInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type TravelUncheckedCreateNestedManyWithoutTravelImageInput = {
    create?: XOR<TravelCreateWithoutTravelImageInput, TravelUncheckedCreateWithoutTravelImageInput> | TravelCreateWithoutTravelImageInput[] | TravelUncheckedCreateWithoutTravelImageInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutTravelImageInput | TravelCreateOrConnectWithoutTravelImageInput[]
    createMany?: TravelCreateManyTravelImageInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type TravelUpdateManyWithoutTravelImageNestedInput = {
    create?: XOR<TravelCreateWithoutTravelImageInput, TravelUncheckedCreateWithoutTravelImageInput> | TravelCreateWithoutTravelImageInput[] | TravelUncheckedCreateWithoutTravelImageInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutTravelImageInput | TravelCreateOrConnectWithoutTravelImageInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutTravelImageInput | TravelUpsertWithWhereUniqueWithoutTravelImageInput[]
    createMany?: TravelCreateManyTravelImageInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutTravelImageInput | TravelUpdateWithWhereUniqueWithoutTravelImageInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutTravelImageInput | TravelUpdateManyWithWhereWithoutTravelImageInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type TravelUncheckedUpdateManyWithoutTravelImageNestedInput = {
    create?: XOR<TravelCreateWithoutTravelImageInput, TravelUncheckedCreateWithoutTravelImageInput> | TravelCreateWithoutTravelImageInput[] | TravelUncheckedCreateWithoutTravelImageInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutTravelImageInput | TravelCreateOrConnectWithoutTravelImageInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutTravelImageInput | TravelUpsertWithWhereUniqueWithoutTravelImageInput[]
    createMany?: TravelCreateManyTravelImageInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutTravelImageInput | TravelUpdateWithWhereUniqueWithoutTravelImageInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutTravelImageInput | TravelUpdateManyWithWhereWithoutTravelImageInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutTransferOptionInput = {
    create?: XOR<CarCreateWithoutTransferOptionInput, CarUncheckedCreateWithoutTransferOptionInput>
    connectOrCreate?: CarCreateOrConnectWithoutTransferOptionInput
    connect?: CarWhereUniqueInput
  }

  export type TransferInfoCreateNestedOneWithoutTransferOptionsInput = {
    create?: XOR<TransferInfoCreateWithoutTransferOptionsInput, TransferInfoUncheckedCreateWithoutTransferOptionsInput>
    connectOrCreate?: TransferInfoCreateOrConnectWithoutTransferOptionsInput
    connect?: TransferInfoWhereUniqueInput
  }

  export type CarUpdateOneWithoutTransferOptionNestedInput = {
    create?: XOR<CarCreateWithoutTransferOptionInput, CarUncheckedCreateWithoutTransferOptionInput>
    connectOrCreate?: CarCreateOrConnectWithoutTransferOptionInput
    upsert?: CarUpsertWithoutTransferOptionInput
    disconnect?: CarWhereInput | boolean
    delete?: CarWhereInput | boolean
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutTransferOptionInput, CarUpdateWithoutTransferOptionInput>, CarUncheckedUpdateWithoutTransferOptionInput>
  }

  export type TransferInfoUpdateOneWithoutTransferOptionsNestedInput = {
    create?: XOR<TransferInfoCreateWithoutTransferOptionsInput, TransferInfoUncheckedCreateWithoutTransferOptionsInput>
    connectOrCreate?: TransferInfoCreateOrConnectWithoutTransferOptionsInput
    upsert?: TransferInfoUpsertWithoutTransferOptionsInput
    disconnect?: TransferInfoWhereInput | boolean
    delete?: TransferInfoWhereInput | boolean
    connect?: TransferInfoWhereUniqueInput
    update?: XOR<XOR<TransferInfoUpdateToOneWithWhereWithoutTransferOptionsInput, TransferInfoUpdateWithoutTransferOptionsInput>, TransferInfoUncheckedUpdateWithoutTransferOptionsInput>
  }

  export type TransferOptionCreateNestedManyWithoutTransferInfoInput = {
    create?: XOR<TransferOptionCreateWithoutTransferInfoInput, TransferOptionUncheckedCreateWithoutTransferInfoInput> | TransferOptionCreateWithoutTransferInfoInput[] | TransferOptionUncheckedCreateWithoutTransferInfoInput[]
    connectOrCreate?: TransferOptionCreateOrConnectWithoutTransferInfoInput | TransferOptionCreateOrConnectWithoutTransferInfoInput[]
    createMany?: TransferOptionCreateManyTransferInfoInputEnvelope
    connect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
  }

  export type TransferOptionUncheckedCreateNestedManyWithoutTransferInfoInput = {
    create?: XOR<TransferOptionCreateWithoutTransferInfoInput, TransferOptionUncheckedCreateWithoutTransferInfoInput> | TransferOptionCreateWithoutTransferInfoInput[] | TransferOptionUncheckedCreateWithoutTransferInfoInput[]
    connectOrCreate?: TransferOptionCreateOrConnectWithoutTransferInfoInput | TransferOptionCreateOrConnectWithoutTransferInfoInput[]
    createMany?: TransferOptionCreateManyTransferInfoInputEnvelope
    connect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
  }

  export type TransferOptionUpdateManyWithoutTransferInfoNestedInput = {
    create?: XOR<TransferOptionCreateWithoutTransferInfoInput, TransferOptionUncheckedCreateWithoutTransferInfoInput> | TransferOptionCreateWithoutTransferInfoInput[] | TransferOptionUncheckedCreateWithoutTransferInfoInput[]
    connectOrCreate?: TransferOptionCreateOrConnectWithoutTransferInfoInput | TransferOptionCreateOrConnectWithoutTransferInfoInput[]
    upsert?: TransferOptionUpsertWithWhereUniqueWithoutTransferInfoInput | TransferOptionUpsertWithWhereUniqueWithoutTransferInfoInput[]
    createMany?: TransferOptionCreateManyTransferInfoInputEnvelope
    set?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    disconnect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    delete?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    connect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    update?: TransferOptionUpdateWithWhereUniqueWithoutTransferInfoInput | TransferOptionUpdateWithWhereUniqueWithoutTransferInfoInput[]
    updateMany?: TransferOptionUpdateManyWithWhereWithoutTransferInfoInput | TransferOptionUpdateManyWithWhereWithoutTransferInfoInput[]
    deleteMany?: TransferOptionScalarWhereInput | TransferOptionScalarWhereInput[]
  }

  export type TransferOptionUncheckedUpdateManyWithoutTransferInfoNestedInput = {
    create?: XOR<TransferOptionCreateWithoutTransferInfoInput, TransferOptionUncheckedCreateWithoutTransferInfoInput> | TransferOptionCreateWithoutTransferInfoInput[] | TransferOptionUncheckedCreateWithoutTransferInfoInput[]
    connectOrCreate?: TransferOptionCreateOrConnectWithoutTransferInfoInput | TransferOptionCreateOrConnectWithoutTransferInfoInput[]
    upsert?: TransferOptionUpsertWithWhereUniqueWithoutTransferInfoInput | TransferOptionUpsertWithWhereUniqueWithoutTransferInfoInput[]
    createMany?: TransferOptionCreateManyTransferInfoInputEnvelope
    set?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    disconnect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    delete?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    connect?: TransferOptionWhereUniqueInput | TransferOptionWhereUniqueInput[]
    update?: TransferOptionUpdateWithWhereUniqueWithoutTransferInfoInput | TransferOptionUpdateWithWhereUniqueWithoutTransferInfoInput[]
    updateMany?: TransferOptionUpdateManyWithWhereWithoutTransferInfoInput | TransferOptionUpdateManyWithWhereWithoutTransferInfoInput[]
    deleteMany?: TransferOptionScalarWhereInput | TransferOptionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumtravelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.travelType | EnumtravelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.travelType[] | ListEnumtravelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.travelType[] | ListEnumtravelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtravelTypeFilter<$PrismaModel> | $Enums.travelType
  }

  export type NestedEnumTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.Time | EnumTimeFieldRefInput<$PrismaModel>
    in?: $Enums.Time[] | ListEnumTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Time[] | ListEnumTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeFilter<$PrismaModel> | $Enums.Time
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumtravelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.travelType | EnumtravelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.travelType[] | ListEnumtravelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.travelType[] | ListEnumtravelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtravelTypeWithAggregatesFilter<$PrismaModel> | $Enums.travelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtravelTypeFilter<$PrismaModel>
    _max?: NestedEnumtravelTypeFilter<$PrismaModel>
  }

  export type NestedEnumTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Time | EnumTimeFieldRefInput<$PrismaModel>
    in?: $Enums.Time[] | ListEnumTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Time[] | ListEnumTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeWithAggregatesFilter<$PrismaModel> | $Enums.Time
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeFilter<$PrismaModel>
    _max?: NestedEnumTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PricingTierCreateWithoutTravelInput = {
    distance: string
    price: number
    car?: CarCreateNestedOneWithoutPricesInput
  }

  export type PricingTierUncheckedCreateWithoutTravelInput = {
    id?: number
    carId?: string | null
    distance: string
    price: number
  }

  export type PricingTierCreateOrConnectWithoutTravelInput = {
    where: PricingTierWhereUniqueInput
    create: XOR<PricingTierCreateWithoutTravelInput, PricingTierUncheckedCreateWithoutTravelInput>
  }

  export type PricingTierCreateManyTravelInputEnvelope = {
    data: PricingTierCreateManyTravelInput | PricingTierCreateManyTravelInput[]
    skipDuplicates?: boolean
  }

  export type TravelImageCreateWithoutTravelInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type TravelImageUncheckedCreateWithoutTravelInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type TravelImageCreateOrConnectWithoutTravelInput = {
    where: TravelImageWhereUniqueInput
    create: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput>
  }

  export type ItineraryCreateWithoutTravelInput = {
    route: string
    description: string
    duration: string
    time?: $Enums.Time
    uuid?: string
  }

  export type ItineraryUncheckedCreateWithoutTravelInput = {
    route: string
    description: string
    duration: string
    time?: $Enums.Time
    uuid?: string
  }

  export type ItineraryCreateOrConnectWithoutTravelInput = {
    where: ItineraryWhereUniqueInput
    create: XOR<ItineraryCreateWithoutTravelInput, ItineraryUncheckedCreateWithoutTravelInput>
  }

  export type PricingTierUpsertWithWhereUniqueWithoutTravelInput = {
    where: PricingTierWhereUniqueInput
    update: XOR<PricingTierUpdateWithoutTravelInput, PricingTierUncheckedUpdateWithoutTravelInput>
    create: XOR<PricingTierCreateWithoutTravelInput, PricingTierUncheckedCreateWithoutTravelInput>
  }

  export type PricingTierUpdateWithWhereUniqueWithoutTravelInput = {
    where: PricingTierWhereUniqueInput
    data: XOR<PricingTierUpdateWithoutTravelInput, PricingTierUncheckedUpdateWithoutTravelInput>
  }

  export type PricingTierUpdateManyWithWhereWithoutTravelInput = {
    where: PricingTierScalarWhereInput
    data: XOR<PricingTierUpdateManyMutationInput, PricingTierUncheckedUpdateManyWithoutTravelInput>
  }

  export type PricingTierScalarWhereInput = {
    AND?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
    OR?: PricingTierScalarWhereInput[]
    NOT?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
    id?: IntFilter<"PricingTier"> | number
    carId?: StringNullableFilter<"PricingTier"> | string | null
    travelId?: StringNullableFilter<"PricingTier"> | string | null
    distance?: StringFilter<"PricingTier"> | string
    price?: IntFilter<"PricingTier"> | number
  }

  export type TravelImageUpsertWithoutTravelInput = {
    update: XOR<TravelImageUpdateWithoutTravelInput, TravelImageUncheckedUpdateWithoutTravelInput>
    create: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput>
    where?: TravelImageWhereInput
  }

  export type TravelImageUpdateToOneWithWhereWithoutTravelInput = {
    where?: TravelImageWhereInput
    data: XOR<TravelImageUpdateWithoutTravelInput, TravelImageUncheckedUpdateWithoutTravelInput>
  }

  export type TravelImageUpdateWithoutTravelInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelImageUncheckedUpdateWithoutTravelInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type ItineraryUpsertWithWhereUniqueWithoutTravelInput = {
    where: ItineraryWhereUniqueInput
    update: XOR<ItineraryUpdateWithoutTravelInput, ItineraryUncheckedUpdateWithoutTravelInput>
    create: XOR<ItineraryCreateWithoutTravelInput, ItineraryUncheckedCreateWithoutTravelInput>
  }

  export type ItineraryUpdateWithWhereUniqueWithoutTravelInput = {
    where: ItineraryWhereUniqueInput
    data: XOR<ItineraryUpdateWithoutTravelInput, ItineraryUncheckedUpdateWithoutTravelInput>
  }

  export type ItineraryUpdateManyWithWhereWithoutTravelInput = {
    where: ItineraryScalarWhereInput
    data: XOR<ItineraryUpdateManyMutationInput, ItineraryUncheckedUpdateManyWithoutTravelInput>
  }

  export type ItineraryScalarWhereInput = {
    AND?: ItineraryScalarWhereInput | ItineraryScalarWhereInput[]
    OR?: ItineraryScalarWhereInput[]
    NOT?: ItineraryScalarWhereInput | ItineraryScalarWhereInput[]
    route?: StringFilter<"Itinerary"> | string
    description?: StringFilter<"Itinerary"> | string
    duration?: StringFilter<"Itinerary"> | string
    time?: EnumTimeFilter<"Itinerary"> | $Enums.Time
    uuid?: StringFilter<"Itinerary"> | string
  }

  export type PictureCreateWithoutCarInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type PictureUncheckedCreateWithoutCarInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type PictureCreateOrConnectWithoutCarInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutCarInput, PictureUncheckedCreateWithoutCarInput>
  }

  export type PictureCreateManyCarInputEnvelope = {
    data: PictureCreateManyCarInput | PictureCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type PricingTierCreateWithoutCarInput = {
    distance: string
    price: number
    travel?: TravelCreateNestedOneWithoutPricesPerCarInput
  }

  export type PricingTierUncheckedCreateWithoutCarInput = {
    id?: number
    travelId?: string | null
    distance: string
    price: number
  }

  export type PricingTierCreateOrConnectWithoutCarInput = {
    where: PricingTierWhereUniqueInput
    create: XOR<PricingTierCreateWithoutCarInput, PricingTierUncheckedCreateWithoutCarInput>
  }

  export type PricingTierCreateManyCarInputEnvelope = {
    data: PricingTierCreateManyCarInput | PricingTierCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type TransferOptionCreateWithoutCarInput = {
    uuid?: string
    price: number
    transferInfo?: TransferInfoCreateNestedOneWithoutTransferOptionsInput
  }

  export type TransferOptionUncheckedCreateWithoutCarInput = {
    uuid?: string
    price: number
    transferInfoId?: string | null
  }

  export type TransferOptionCreateOrConnectWithoutCarInput = {
    where: TransferOptionWhereUniqueInput
    create: XOR<TransferOptionCreateWithoutCarInput, TransferOptionUncheckedCreateWithoutCarInput>
  }

  export type TransferOptionCreateManyCarInputEnvelope = {
    data: TransferOptionCreateManyCarInput | TransferOptionCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type PictureUpsertWithWhereUniqueWithoutCarInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutCarInput, PictureUncheckedUpdateWithoutCarInput>
    create: XOR<PictureCreateWithoutCarInput, PictureUncheckedCreateWithoutCarInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutCarInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutCarInput, PictureUncheckedUpdateWithoutCarInput>
  }

  export type PictureUpdateManyWithWhereWithoutCarInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutCarInput>
  }

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    fileId?: StringFilter<"Picture"> | string
    fileBase64?: StringFilter<"Picture"> | string
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    uuid?: StringFilter<"Picture"> | string
    carId?: StringFilter<"Picture"> | string
  }

  export type PricingTierUpsertWithWhereUniqueWithoutCarInput = {
    where: PricingTierWhereUniqueInput
    update: XOR<PricingTierUpdateWithoutCarInput, PricingTierUncheckedUpdateWithoutCarInput>
    create: XOR<PricingTierCreateWithoutCarInput, PricingTierUncheckedCreateWithoutCarInput>
  }

  export type PricingTierUpdateWithWhereUniqueWithoutCarInput = {
    where: PricingTierWhereUniqueInput
    data: XOR<PricingTierUpdateWithoutCarInput, PricingTierUncheckedUpdateWithoutCarInput>
  }

  export type PricingTierUpdateManyWithWhereWithoutCarInput = {
    where: PricingTierScalarWhereInput
    data: XOR<PricingTierUpdateManyMutationInput, PricingTierUncheckedUpdateManyWithoutCarInput>
  }

  export type TransferOptionUpsertWithWhereUniqueWithoutCarInput = {
    where: TransferOptionWhereUniqueInput
    update: XOR<TransferOptionUpdateWithoutCarInput, TransferOptionUncheckedUpdateWithoutCarInput>
    create: XOR<TransferOptionCreateWithoutCarInput, TransferOptionUncheckedCreateWithoutCarInput>
  }

  export type TransferOptionUpdateWithWhereUniqueWithoutCarInput = {
    where: TransferOptionWhereUniqueInput
    data: XOR<TransferOptionUpdateWithoutCarInput, TransferOptionUncheckedUpdateWithoutCarInput>
  }

  export type TransferOptionUpdateManyWithWhereWithoutCarInput = {
    where: TransferOptionScalarWhereInput
    data: XOR<TransferOptionUpdateManyMutationInput, TransferOptionUncheckedUpdateManyWithoutCarInput>
  }

  export type TransferOptionScalarWhereInput = {
    AND?: TransferOptionScalarWhereInput | TransferOptionScalarWhereInput[]
    OR?: TransferOptionScalarWhereInput[]
    NOT?: TransferOptionScalarWhereInput | TransferOptionScalarWhereInput[]
    uuid?: StringFilter<"TransferOption"> | string
    price?: IntFilter<"TransferOption"> | number
    carId?: StringNullableFilter<"TransferOption"> | string | null
    transferInfoId?: StringNullableFilter<"TransferOption"> | string | null
  }

  export type CarCreateWithoutPicturesInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
    prices?: PricingTierCreateNestedManyWithoutCarInput
    transferOption?: TransferOptionCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutPicturesInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
    prices?: PricingTierUncheckedCreateNestedManyWithoutCarInput
    transferOption?: TransferOptionUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutPicturesInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutPicturesInput, CarUncheckedCreateWithoutPicturesInput>
  }

  export type CarUpsertWithoutPicturesInput = {
    update: XOR<CarUpdateWithoutPicturesInput, CarUncheckedUpdateWithoutPicturesInput>
    create: XOR<CarCreateWithoutPicturesInput, CarUncheckedCreateWithoutPicturesInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutPicturesInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutPicturesInput, CarUncheckedUpdateWithoutPicturesInput>
  }

  export type CarUpdateWithoutPicturesInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    prices?: PricingTierUpdateManyWithoutCarNestedInput
    transferOption?: TransferOptionUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutPicturesInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    prices?: PricingTierUncheckedUpdateManyWithoutCarNestedInput
    transferOption?: TransferOptionUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateWithoutPricesInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
    pictures?: PictureCreateNestedManyWithoutCarInput
    transferOption?: TransferOptionCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutPricesInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
    pictures?: PictureUncheckedCreateNestedManyWithoutCarInput
    transferOption?: TransferOptionUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutPricesInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutPricesInput, CarUncheckedCreateWithoutPricesInput>
  }

  export type TravelCreateWithoutPricesPerCarInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    uuid?: string
    travelImage: TravelImageCreateNestedOneWithoutTravelInput
    itinerary?: ItineraryCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutPricesPerCarInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    travelImageId: string
    uuid?: string
    itinerary?: ItineraryUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelCreateOrConnectWithoutPricesPerCarInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutPricesPerCarInput, TravelUncheckedCreateWithoutPricesPerCarInput>
  }

  export type CarUpsertWithoutPricesInput = {
    update: XOR<CarUpdateWithoutPricesInput, CarUncheckedUpdateWithoutPricesInput>
    create: XOR<CarCreateWithoutPricesInput, CarUncheckedCreateWithoutPricesInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutPricesInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutPricesInput, CarUncheckedUpdateWithoutPricesInput>
  }

  export type CarUpdateWithoutPricesInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUpdateManyWithoutCarNestedInput
    transferOption?: TransferOptionUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutPricesInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUncheckedUpdateManyWithoutCarNestedInput
    transferOption?: TransferOptionUncheckedUpdateManyWithoutCarNestedInput
  }

  export type TravelUpsertWithoutPricesPerCarInput = {
    update: XOR<TravelUpdateWithoutPricesPerCarInput, TravelUncheckedUpdateWithoutPricesPerCarInput>
    create: XOR<TravelCreateWithoutPricesPerCarInput, TravelUncheckedCreateWithoutPricesPerCarInput>
    where?: TravelWhereInput
  }

  export type TravelUpdateToOneWithWhereWithoutPricesPerCarInput = {
    where?: TravelWhereInput
    data: XOR<TravelUpdateWithoutPricesPerCarInput, TravelUncheckedUpdateWithoutPricesPerCarInput>
  }

  export type TravelUpdateWithoutPricesPerCarInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    travelImage?: TravelImageUpdateOneRequiredWithoutTravelNestedInput
    itinerary?: ItineraryUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutPricesPerCarInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelImageId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    itinerary?: ItineraryUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelCreateWithoutItineraryInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    uuid?: string
    pricesPerCar?: PricingTierCreateNestedManyWithoutTravelInput
    travelImage: TravelImageCreateNestedOneWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutItineraryInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    travelImageId: string
    uuid?: string
    pricesPerCar?: PricingTierUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelCreateOrConnectWithoutItineraryInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutItineraryInput, TravelUncheckedCreateWithoutItineraryInput>
  }

  export type TravelUpsertWithWhereUniqueWithoutItineraryInput = {
    where: TravelWhereUniqueInput
    update: XOR<TravelUpdateWithoutItineraryInput, TravelUncheckedUpdateWithoutItineraryInput>
    create: XOR<TravelCreateWithoutItineraryInput, TravelUncheckedCreateWithoutItineraryInput>
  }

  export type TravelUpdateWithWhereUniqueWithoutItineraryInput = {
    where: TravelWhereUniqueInput
    data: XOR<TravelUpdateWithoutItineraryInput, TravelUncheckedUpdateWithoutItineraryInput>
  }

  export type TravelUpdateManyWithWhereWithoutItineraryInput = {
    where: TravelScalarWhereInput
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyWithoutItineraryInput>
  }

  export type TravelScalarWhereInput = {
    AND?: TravelScalarWhereInput | TravelScalarWhereInput[]
    OR?: TravelScalarWhereInput[]
    NOT?: TravelScalarWhereInput | TravelScalarWhereInput[]
    name?: StringFilter<"Travel"> | string
    route?: StringFilter<"Travel"> | string
    description?: StringFilter<"Travel"> | string
    duration?: StringFilter<"Travel"> | string
    sightseeingTime?: StringFilter<"Travel"> | string
    drivingTime?: StringFilter<"Travel"> | string
    drivingDistance?: StringFilter<"Travel"> | string
    included?: StringNullableFilter<"Travel"> | string | null
    notIncluded?: StringNullableFilter<"Travel"> | string | null
    reservation?: StringNullableFilter<"Travel"> | string | null
    travelType?: EnumtravelTypeFilter<"Travel"> | $Enums.travelType
    time?: EnumTimeFilter<"Travel"> | $Enums.Time
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    travelImageId?: StringFilter<"Travel"> | string
    uuid?: StringFilter<"Travel"> | string
  }

  export type TravelCreateWithoutTravelImageInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    uuid?: string
    pricesPerCar?: PricingTierCreateNestedManyWithoutTravelInput
    itinerary?: ItineraryCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutTravelImageInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    uuid?: string
    pricesPerCar?: PricingTierUncheckedCreateNestedManyWithoutTravelInput
    itinerary?: ItineraryUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelCreateOrConnectWithoutTravelImageInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutTravelImageInput, TravelUncheckedCreateWithoutTravelImageInput>
  }

  export type TravelCreateManyTravelImageInputEnvelope = {
    data: TravelCreateManyTravelImageInput | TravelCreateManyTravelImageInput[]
    skipDuplicates?: boolean
  }

  export type TravelUpsertWithWhereUniqueWithoutTravelImageInput = {
    where: TravelWhereUniqueInput
    update: XOR<TravelUpdateWithoutTravelImageInput, TravelUncheckedUpdateWithoutTravelImageInput>
    create: XOR<TravelCreateWithoutTravelImageInput, TravelUncheckedCreateWithoutTravelImageInput>
  }

  export type TravelUpdateWithWhereUniqueWithoutTravelImageInput = {
    where: TravelWhereUniqueInput
    data: XOR<TravelUpdateWithoutTravelImageInput, TravelUncheckedUpdateWithoutTravelImageInput>
  }

  export type TravelUpdateManyWithWhereWithoutTravelImageInput = {
    where: TravelScalarWhereInput
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyWithoutTravelImageInput>
  }

  export type CarCreateWithoutTransferOptionInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
    pictures?: PictureCreateNestedManyWithoutCarInput
    prices?: PricingTierCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutTransferOptionInput = {
    models?: CarCreatemodelsInput | string[]
    included?: string | null
    carType: string
    uuid?: string
    capacity: number
    pictures?: PictureUncheckedCreateNestedManyWithoutCarInput
    prices?: PricingTierUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutTransferOptionInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutTransferOptionInput, CarUncheckedCreateWithoutTransferOptionInput>
  }

  export type TransferInfoCreateWithoutTransferOptionsInput = {
    uuid?: string
    transfer: string
    time: $Enums.Time
    drivingTime: string
    drivingDistance: string
  }

  export type TransferInfoUncheckedCreateWithoutTransferOptionsInput = {
    uuid?: string
    transfer: string
    time: $Enums.Time
    drivingTime: string
    drivingDistance: string
  }

  export type TransferInfoCreateOrConnectWithoutTransferOptionsInput = {
    where: TransferInfoWhereUniqueInput
    create: XOR<TransferInfoCreateWithoutTransferOptionsInput, TransferInfoUncheckedCreateWithoutTransferOptionsInput>
  }

  export type CarUpsertWithoutTransferOptionInput = {
    update: XOR<CarUpdateWithoutTransferOptionInput, CarUncheckedUpdateWithoutTransferOptionInput>
    create: XOR<CarCreateWithoutTransferOptionInput, CarUncheckedCreateWithoutTransferOptionInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutTransferOptionInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutTransferOptionInput, CarUncheckedUpdateWithoutTransferOptionInput>
  }

  export type CarUpdateWithoutTransferOptionInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUpdateManyWithoutCarNestedInput
    prices?: PricingTierUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutTransferOptionInput = {
    models?: CarUpdatemodelsInput | string[]
    included?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUncheckedUpdateManyWithoutCarNestedInput
    prices?: PricingTierUncheckedUpdateManyWithoutCarNestedInput
  }

  export type TransferInfoUpsertWithoutTransferOptionsInput = {
    update: XOR<TransferInfoUpdateWithoutTransferOptionsInput, TransferInfoUncheckedUpdateWithoutTransferOptionsInput>
    create: XOR<TransferInfoCreateWithoutTransferOptionsInput, TransferInfoUncheckedCreateWithoutTransferOptionsInput>
    where?: TransferInfoWhereInput
  }

  export type TransferInfoUpdateToOneWithWhereWithoutTransferOptionsInput = {
    where?: TransferInfoWhereInput
    data: XOR<TransferInfoUpdateWithoutTransferOptionsInput, TransferInfoUncheckedUpdateWithoutTransferOptionsInput>
  }

  export type TransferInfoUpdateWithoutTransferOptionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    transfer?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
  }

  export type TransferInfoUncheckedUpdateWithoutTransferOptionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    transfer?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
  }

  export type TransferOptionCreateWithoutTransferInfoInput = {
    uuid?: string
    price: number
    car?: CarCreateNestedOneWithoutTransferOptionInput
  }

  export type TransferOptionUncheckedCreateWithoutTransferInfoInput = {
    uuid?: string
    price: number
    carId?: string | null
  }

  export type TransferOptionCreateOrConnectWithoutTransferInfoInput = {
    where: TransferOptionWhereUniqueInput
    create: XOR<TransferOptionCreateWithoutTransferInfoInput, TransferOptionUncheckedCreateWithoutTransferInfoInput>
  }

  export type TransferOptionCreateManyTransferInfoInputEnvelope = {
    data: TransferOptionCreateManyTransferInfoInput | TransferOptionCreateManyTransferInfoInput[]
    skipDuplicates?: boolean
  }

  export type TransferOptionUpsertWithWhereUniqueWithoutTransferInfoInput = {
    where: TransferOptionWhereUniqueInput
    update: XOR<TransferOptionUpdateWithoutTransferInfoInput, TransferOptionUncheckedUpdateWithoutTransferInfoInput>
    create: XOR<TransferOptionCreateWithoutTransferInfoInput, TransferOptionUncheckedCreateWithoutTransferInfoInput>
  }

  export type TransferOptionUpdateWithWhereUniqueWithoutTransferInfoInput = {
    where: TransferOptionWhereUniqueInput
    data: XOR<TransferOptionUpdateWithoutTransferInfoInput, TransferOptionUncheckedUpdateWithoutTransferInfoInput>
  }

  export type TransferOptionUpdateManyWithWhereWithoutTransferInfoInput = {
    where: TransferOptionScalarWhereInput
    data: XOR<TransferOptionUpdateManyMutationInput, TransferOptionUncheckedUpdateManyWithoutTransferInfoInput>
  }

  export type PricingTierCreateManyTravelInput = {
    id?: number
    carId?: string | null
    distance: string
    price: number
  }

  export type PricingTierUpdateWithoutTravelInput = {
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneWithoutPricesNestedInput
  }

  export type PricingTierUncheckedUpdateWithoutTravelInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PricingTierUncheckedUpdateManyWithoutTravelInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ItineraryUpdateWithoutTravelInput = {
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type ItineraryUncheckedUpdateWithoutTravelInput = {
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type ItineraryUncheckedUpdateManyWithoutTravelInput = {
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateManyCarInput = {
    fileId: string
    fileBase64: string
    createdAt?: Date | string
    uuid?: string
  }

  export type PricingTierCreateManyCarInput = {
    id?: number
    travelId?: string | null
    distance: string
    price: number
  }

  export type TransferOptionCreateManyCarInput = {
    uuid?: string
    price: number
    transferInfoId?: string | null
  }

  export type PictureUpdateWithoutCarInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateWithoutCarInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyWithoutCarInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    fileBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type PricingTierUpdateWithoutCarInput = {
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    travel?: TravelUpdateOneWithoutPricesPerCarNestedInput
  }

  export type PricingTierUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    travelId?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PricingTierUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    travelId?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TransferOptionUpdateWithoutCarInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    transferInfo?: TransferInfoUpdateOneWithoutTransferOptionsNestedInput
  }

  export type TransferOptionUncheckedUpdateWithoutCarInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    transferInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferOptionUncheckedUpdateManyWithoutCarInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    transferInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TravelUpdateWithoutItineraryInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    pricesPerCar?: PricingTierUpdateManyWithoutTravelNestedInput
    travelImage?: TravelImageUpdateOneRequiredWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutItineraryInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelImageId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    pricesPerCar?: PricingTierUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateManyWithoutItineraryInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelImageId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TravelCreateManyTravelImageInput = {
    name: string
    route: string
    description: string
    duration: string
    sightseeingTime: string
    drivingTime: string
    drivingDistance: string
    included?: string | null
    notIncluded?: string | null
    reservation?: string | null
    travelType: $Enums.travelType
    time?: $Enums.Time
    createdAt?: Date | string
    uuid?: string
  }

  export type TravelUpdateWithoutTravelImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    pricesPerCar?: PricingTierUpdateManyWithoutTravelNestedInput
    itinerary?: ItineraryUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutTravelImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    pricesPerCar?: PricingTierUncheckedUpdateManyWithoutTravelNestedInput
    itinerary?: ItineraryUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateManyWithoutTravelImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    sightseeingTime?: StringFieldUpdateOperationsInput | string
    drivingTime?: StringFieldUpdateOperationsInput | string
    drivingDistance?: StringFieldUpdateOperationsInput | string
    included?: NullableStringFieldUpdateOperationsInput | string | null
    notIncluded?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumtravelTypeFieldUpdateOperationsInput | $Enums.travelType
    time?: EnumTimeFieldUpdateOperationsInput | $Enums.Time
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type TransferOptionCreateManyTransferInfoInput = {
    uuid?: string
    price: number
    carId?: string | null
  }

  export type TransferOptionUpdateWithoutTransferInfoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneWithoutTransferOptionNestedInput
  }

  export type TransferOptionUncheckedUpdateWithoutTransferInfoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    carId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferOptionUncheckedUpdateManyWithoutTransferInfoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    carId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TravelCountOutputTypeDefaultArgs instead
     */
    export type TravelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TravelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarCountOutputTypeDefaultArgs instead
     */
    export type CarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItineraryCountOutputTypeDefaultArgs instead
     */
    export type ItineraryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItineraryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TravelImageCountOutputTypeDefaultArgs instead
     */
    export type TravelImageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TravelImageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransferInfoCountOutputTypeDefaultArgs instead
     */
    export type TransferInfoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransferInfoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BannerDefaultArgs instead
     */
    export type BannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BannerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TravelDefaultArgs instead
     */
    export type TravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TravelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarDefaultArgs instead
     */
    export type CarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PictureDefaultArgs instead
     */
    export type PictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PictureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PricingTierDefaultArgs instead
     */
    export type PricingTierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PricingTierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItineraryDefaultArgs instead
     */
    export type ItineraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItineraryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TravelImageDefaultArgs instead
     */
    export type TravelImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TravelImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GalleryDefaultArgs instead
     */
    export type GalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GalleryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TravelBannerDefaultArgs instead
     */
    export type TravelBannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TravelBannerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransferOptionDefaultArgs instead
     */
    export type TransferOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransferOptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransferInfoDefaultArgs instead
     */
    export type TransferInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransferInfoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}