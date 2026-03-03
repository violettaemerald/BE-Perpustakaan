
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model WaliKelas
 * 
 */
export type WaliKelas = $Result.DefaultSelection<Prisma.$WaliKelasPayload>
/**
 * Model Buku
 * 
 */
export type Buku = $Result.DefaultSelection<Prisma.$BukuPayload>
/**
 * Model Peminjaman
 * 
 */
export type Peminjaman = $Result.DefaultSelection<Prisma.$PeminjamanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusPeminjaman: {
  dipinjam: 'dipinjam',
  dikembalikan: 'dikembalikan',
  terlambat: 'terlambat'
};

export type StatusPeminjaman = (typeof StatusPeminjaman)[keyof typeof StatusPeminjaman]

}

export type StatusPeminjaman = $Enums.StatusPeminjaman

export const StatusPeminjaman: typeof $Enums.StatusPeminjaman

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waliKelas`: Exposes CRUD operations for the **WaliKelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaliKelas
    * const waliKelas = await prisma.waliKelas.findMany()
    * ```
    */
  get waliKelas(): Prisma.WaliKelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buku`: Exposes CRUD operations for the **Buku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bukus
    * const bukus = await prisma.buku.findMany()
    * ```
    */
  get buku(): Prisma.BukuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjaman`: Exposes CRUD operations for the **Peminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peminjamen
    * const peminjamen = await prisma.peminjaman.findMany()
    * ```
    */
  get peminjaman(): Prisma.PeminjamanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Student: 'Student',
    WaliKelas: 'WaliKelas',
    Buku: 'Buku',
    Peminjaman: 'Peminjaman'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "waliKelas" | "buku" | "peminjaman"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      WaliKelas: {
        payload: Prisma.$WaliKelasPayload<ExtArgs>
        fields: Prisma.WaliKelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaliKelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaliKelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload>
          }
          findFirst: {
            args: Prisma.WaliKelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaliKelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload>
          }
          findMany: {
            args: Prisma.WaliKelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload>[]
          }
          create: {
            args: Prisma.WaliKelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload>
          }
          createMany: {
            args: Prisma.WaliKelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WaliKelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload>
          }
          update: {
            args: Prisma.WaliKelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload>
          }
          deleteMany: {
            args: Prisma.WaliKelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaliKelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WaliKelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliKelasPayload>
          }
          aggregate: {
            args: Prisma.WaliKelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaliKelas>
          }
          groupBy: {
            args: Prisma.WaliKelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaliKelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaliKelasCountArgs<ExtArgs>
            result: $Utils.Optional<WaliKelasCountAggregateOutputType> | number
          }
        }
      }
      Buku: {
        payload: Prisma.$BukuPayload<ExtArgs>
        fields: Prisma.BukuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BukuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BukuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          findFirst: {
            args: Prisma.BukuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BukuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          findMany: {
            args: Prisma.BukuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>[]
          }
          create: {
            args: Prisma.BukuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          createMany: {
            args: Prisma.BukuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BukuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          update: {
            args: Prisma.BukuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          deleteMany: {
            args: Prisma.BukuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BukuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BukuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          aggregate: {
            args: Prisma.BukuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuku>
          }
          groupBy: {
            args: Prisma.BukuGroupByArgs<ExtArgs>
            result: $Utils.Optional<BukuGroupByOutputType>[]
          }
          count: {
            args: Prisma.BukuCountArgs<ExtArgs>
            result: $Utils.Optional<BukuCountAggregateOutputType> | number
          }
        }
      }
      Peminjaman: {
        payload: Prisma.$PeminjamanPayload<ExtArgs>
        fields: Prisma.PeminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          findFirst: {
            args: Prisma.PeminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          findMany: {
            args: Prisma.PeminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          create: {
            args: Prisma.PeminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          createMany: {
            args: Prisma.PeminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PeminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          update: {
            args: Prisma.PeminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          deleteMany: {
            args: Prisma.PeminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjaman>
          }
          groupBy: {
            args: Prisma.PeminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    waliKelas?: WaliKelasOmit
    buku?: BukuOmit
    peminjaman?: PeminjamanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    peminjaman: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | StudentCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
  }


  /**
   * Count Type BukuCountOutputType
   */

  export type BukuCountOutputType = {
    peminjaman: number
  }

  export type BukuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | BukuCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * BukuCountOutputType without action
   */
  export type BukuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuCountOutputType
     */
    select?: BukuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BukuCountOutputType without action
   */
  export type BukuCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    nis: string | null
    name: string | null
    email: string | null
    kelas: string | null
    jurusan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    nis: string | null
    name: string | null
    email: string | null
    kelas: string | null
    jurusan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    nis: number
    name: number
    email: number
    kelas: number
    jurusan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    nis?: true
    name?: true
    email?: true
    kelas?: true
    jurusan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    nis?: true
    name?: true
    email?: true
    kelas?: true
    jurusan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    nis?: true
    name?: true
    email?: true
    kelas?: true
    jurusan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    nis: string
    name: string
    email: string | null
    kelas: string
    jurusan: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    name?: boolean
    email?: boolean
    kelas?: boolean
    jurusan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peminjaman?: boolean | Student$peminjamanArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    nis?: boolean
    name?: boolean
    email?: boolean
    kelas?: boolean
    jurusan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nis" | "name" | "email" | "kelas" | "jurusan" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | Student$peminjamanArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      peminjaman: Prisma.$PeminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nis: string
      name: string
      email: string | null
      kelas: string
      jurusan: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjaman<T extends Student$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, Student$peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly nis: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly kelas: FieldRef<"Student", 'String'>
    readonly jurusan: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.peminjaman
   */
  export type Student$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    cursor?: PeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model WaliKelas
   */

  export type AggregateWaliKelas = {
    _count: WaliKelasCountAggregateOutputType | null
    _avg: WaliKelasAvgAggregateOutputType | null
    _sum: WaliKelasSumAggregateOutputType | null
    _min: WaliKelasMinAggregateOutputType | null
    _max: WaliKelasMaxAggregateOutputType | null
  }

  export type WaliKelasAvgAggregateOutputType = {
    id_WaliKelas: number | null
  }

  export type WaliKelasSumAggregateOutputType = {
    id_WaliKelas: number | null
  }

  export type WaliKelasMinAggregateOutputType = {
    id_WaliKelas: number | null
    name_WaliKelas: string | null
    no_telp: string | null
    mapel: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaliKelasMaxAggregateOutputType = {
    id_WaliKelas: number | null
    name_WaliKelas: string | null
    no_telp: string | null
    mapel: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaliKelasCountAggregateOutputType = {
    id_WaliKelas: number
    name_WaliKelas: number
    no_telp: number
    mapel: number
    alamat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WaliKelasAvgAggregateInputType = {
    id_WaliKelas?: true
  }

  export type WaliKelasSumAggregateInputType = {
    id_WaliKelas?: true
  }

  export type WaliKelasMinAggregateInputType = {
    id_WaliKelas?: true
    name_WaliKelas?: true
    no_telp?: true
    mapel?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaliKelasMaxAggregateInputType = {
    id_WaliKelas?: true
    name_WaliKelas?: true
    no_telp?: true
    mapel?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaliKelasCountAggregateInputType = {
    id_WaliKelas?: true
    name_WaliKelas?: true
    no_telp?: true
    mapel?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WaliKelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliKelas to aggregate.
     */
    where?: WaliKelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliKelas to fetch.
     */
    orderBy?: WaliKelasOrderByWithRelationInput | WaliKelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaliKelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliKelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliKelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaliKelas
    **/
    _count?: true | WaliKelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaliKelasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaliKelasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaliKelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaliKelasMaxAggregateInputType
  }

  export type GetWaliKelasAggregateType<T extends WaliKelasAggregateArgs> = {
        [P in keyof T & keyof AggregateWaliKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaliKelas[P]>
      : GetScalarType<T[P], AggregateWaliKelas[P]>
  }




  export type WaliKelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliKelasWhereInput
    orderBy?: WaliKelasOrderByWithAggregationInput | WaliKelasOrderByWithAggregationInput[]
    by: WaliKelasScalarFieldEnum[] | WaliKelasScalarFieldEnum
    having?: WaliKelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaliKelasCountAggregateInputType | true
    _avg?: WaliKelasAvgAggregateInputType
    _sum?: WaliKelasSumAggregateInputType
    _min?: WaliKelasMinAggregateInputType
    _max?: WaliKelasMaxAggregateInputType
  }

  export type WaliKelasGroupByOutputType = {
    id_WaliKelas: number
    name_WaliKelas: string
    no_telp: string | null
    mapel: string
    alamat: string
    createdAt: Date
    updatedAt: Date
    _count: WaliKelasCountAggregateOutputType | null
    _avg: WaliKelasAvgAggregateOutputType | null
    _sum: WaliKelasSumAggregateOutputType | null
    _min: WaliKelasMinAggregateOutputType | null
    _max: WaliKelasMaxAggregateOutputType | null
  }

  type GetWaliKelasGroupByPayload<T extends WaliKelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaliKelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaliKelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaliKelasGroupByOutputType[P]>
            : GetScalarType<T[P], WaliKelasGroupByOutputType[P]>
        }
      >
    >


  export type WaliKelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_WaliKelas?: boolean
    name_WaliKelas?: boolean
    no_telp?: boolean
    mapel?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["waliKelas"]>



  export type WaliKelasSelectScalar = {
    id_WaliKelas?: boolean
    name_WaliKelas?: boolean
    no_telp?: boolean
    mapel?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WaliKelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_WaliKelas" | "name_WaliKelas" | "no_telp" | "mapel" | "alamat" | "createdAt" | "updatedAt", ExtArgs["result"]["waliKelas"]>

  export type $WaliKelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaliKelas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_WaliKelas: number
      name_WaliKelas: string
      no_telp: string | null
      mapel: string
      alamat: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["waliKelas"]>
    composites: {}
  }

  type WaliKelasGetPayload<S extends boolean | null | undefined | WaliKelasDefaultArgs> = $Result.GetResult<Prisma.$WaliKelasPayload, S>

  type WaliKelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaliKelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaliKelasCountAggregateInputType | true
    }

  export interface WaliKelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaliKelas'], meta: { name: 'WaliKelas' } }
    /**
     * Find zero or one WaliKelas that matches the filter.
     * @param {WaliKelasFindUniqueArgs} args - Arguments to find a WaliKelas
     * @example
     * // Get one WaliKelas
     * const waliKelas = await prisma.waliKelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaliKelasFindUniqueArgs>(args: SelectSubset<T, WaliKelasFindUniqueArgs<ExtArgs>>): Prisma__WaliKelasClient<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaliKelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaliKelasFindUniqueOrThrowArgs} args - Arguments to find a WaliKelas
     * @example
     * // Get one WaliKelas
     * const waliKelas = await prisma.waliKelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaliKelasFindUniqueOrThrowArgs>(args: SelectSubset<T, WaliKelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaliKelasClient<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliKelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliKelasFindFirstArgs} args - Arguments to find a WaliKelas
     * @example
     * // Get one WaliKelas
     * const waliKelas = await prisma.waliKelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaliKelasFindFirstArgs>(args?: SelectSubset<T, WaliKelasFindFirstArgs<ExtArgs>>): Prisma__WaliKelasClient<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliKelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliKelasFindFirstOrThrowArgs} args - Arguments to find a WaliKelas
     * @example
     * // Get one WaliKelas
     * const waliKelas = await prisma.waliKelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaliKelasFindFirstOrThrowArgs>(args?: SelectSubset<T, WaliKelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaliKelasClient<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaliKelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliKelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaliKelas
     * const waliKelas = await prisma.waliKelas.findMany()
     * 
     * // Get first 10 WaliKelas
     * const waliKelas = await prisma.waliKelas.findMany({ take: 10 })
     * 
     * // Only select the `id_WaliKelas`
     * const waliKelasWithId_WaliKelasOnly = await prisma.waliKelas.findMany({ select: { id_WaliKelas: true } })
     * 
     */
    findMany<T extends WaliKelasFindManyArgs>(args?: SelectSubset<T, WaliKelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaliKelas.
     * @param {WaliKelasCreateArgs} args - Arguments to create a WaliKelas.
     * @example
     * // Create one WaliKelas
     * const WaliKelas = await prisma.waliKelas.create({
     *   data: {
     *     // ... data to create a WaliKelas
     *   }
     * })
     * 
     */
    create<T extends WaliKelasCreateArgs>(args: SelectSubset<T, WaliKelasCreateArgs<ExtArgs>>): Prisma__WaliKelasClient<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaliKelas.
     * @param {WaliKelasCreateManyArgs} args - Arguments to create many WaliKelas.
     * @example
     * // Create many WaliKelas
     * const waliKelas = await prisma.waliKelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaliKelasCreateManyArgs>(args?: SelectSubset<T, WaliKelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WaliKelas.
     * @param {WaliKelasDeleteArgs} args - Arguments to delete one WaliKelas.
     * @example
     * // Delete one WaliKelas
     * const WaliKelas = await prisma.waliKelas.delete({
     *   where: {
     *     // ... filter to delete one WaliKelas
     *   }
     * })
     * 
     */
    delete<T extends WaliKelasDeleteArgs>(args: SelectSubset<T, WaliKelasDeleteArgs<ExtArgs>>): Prisma__WaliKelasClient<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaliKelas.
     * @param {WaliKelasUpdateArgs} args - Arguments to update one WaliKelas.
     * @example
     * // Update one WaliKelas
     * const waliKelas = await prisma.waliKelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaliKelasUpdateArgs>(args: SelectSubset<T, WaliKelasUpdateArgs<ExtArgs>>): Prisma__WaliKelasClient<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaliKelas.
     * @param {WaliKelasDeleteManyArgs} args - Arguments to filter WaliKelas to delete.
     * @example
     * // Delete a few WaliKelas
     * const { count } = await prisma.waliKelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaliKelasDeleteManyArgs>(args?: SelectSubset<T, WaliKelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliKelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliKelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaliKelas
     * const waliKelas = await prisma.waliKelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaliKelasUpdateManyArgs>(args: SelectSubset<T, WaliKelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WaliKelas.
     * @param {WaliKelasUpsertArgs} args - Arguments to update or create a WaliKelas.
     * @example
     * // Update or create a WaliKelas
     * const waliKelas = await prisma.waliKelas.upsert({
     *   create: {
     *     // ... data to create a WaliKelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaliKelas we want to update
     *   }
     * })
     */
    upsert<T extends WaliKelasUpsertArgs>(args: SelectSubset<T, WaliKelasUpsertArgs<ExtArgs>>): Prisma__WaliKelasClient<$Result.GetResult<Prisma.$WaliKelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaliKelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliKelasCountArgs} args - Arguments to filter WaliKelas to count.
     * @example
     * // Count the number of WaliKelas
     * const count = await prisma.waliKelas.count({
     *   where: {
     *     // ... the filter for the WaliKelas we want to count
     *   }
     * })
    **/
    count<T extends WaliKelasCountArgs>(
      args?: Subset<T, WaliKelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaliKelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaliKelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliKelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaliKelasAggregateArgs>(args: Subset<T, WaliKelasAggregateArgs>): Prisma.PrismaPromise<GetWaliKelasAggregateType<T>>

    /**
     * Group by WaliKelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliKelasGroupByArgs} args - Group by arguments.
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
      T extends WaliKelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaliKelasGroupByArgs['orderBy'] }
        : { orderBy?: WaliKelasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaliKelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaliKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaliKelas model
   */
  readonly fields: WaliKelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaliKelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaliKelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaliKelas model
   */
  interface WaliKelasFieldRefs {
    readonly id_WaliKelas: FieldRef<"WaliKelas", 'Int'>
    readonly name_WaliKelas: FieldRef<"WaliKelas", 'String'>
    readonly no_telp: FieldRef<"WaliKelas", 'String'>
    readonly mapel: FieldRef<"WaliKelas", 'String'>
    readonly alamat: FieldRef<"WaliKelas", 'String'>
    readonly createdAt: FieldRef<"WaliKelas", 'DateTime'>
    readonly updatedAt: FieldRef<"WaliKelas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaliKelas findUnique
   */
  export type WaliKelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * Filter, which WaliKelas to fetch.
     */
    where: WaliKelasWhereUniqueInput
  }

  /**
   * WaliKelas findUniqueOrThrow
   */
  export type WaliKelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * Filter, which WaliKelas to fetch.
     */
    where: WaliKelasWhereUniqueInput
  }

  /**
   * WaliKelas findFirst
   */
  export type WaliKelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * Filter, which WaliKelas to fetch.
     */
    where?: WaliKelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliKelas to fetch.
     */
    orderBy?: WaliKelasOrderByWithRelationInput | WaliKelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliKelas.
     */
    cursor?: WaliKelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliKelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliKelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliKelas.
     */
    distinct?: WaliKelasScalarFieldEnum | WaliKelasScalarFieldEnum[]
  }

  /**
   * WaliKelas findFirstOrThrow
   */
  export type WaliKelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * Filter, which WaliKelas to fetch.
     */
    where?: WaliKelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliKelas to fetch.
     */
    orderBy?: WaliKelasOrderByWithRelationInput | WaliKelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliKelas.
     */
    cursor?: WaliKelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliKelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliKelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliKelas.
     */
    distinct?: WaliKelasScalarFieldEnum | WaliKelasScalarFieldEnum[]
  }

  /**
   * WaliKelas findMany
   */
  export type WaliKelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * Filter, which WaliKelas to fetch.
     */
    where?: WaliKelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliKelas to fetch.
     */
    orderBy?: WaliKelasOrderByWithRelationInput | WaliKelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaliKelas.
     */
    cursor?: WaliKelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliKelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliKelas.
     */
    skip?: number
    distinct?: WaliKelasScalarFieldEnum | WaliKelasScalarFieldEnum[]
  }

  /**
   * WaliKelas create
   */
  export type WaliKelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * The data needed to create a WaliKelas.
     */
    data: XOR<WaliKelasCreateInput, WaliKelasUncheckedCreateInput>
  }

  /**
   * WaliKelas createMany
   */
  export type WaliKelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaliKelas.
     */
    data: WaliKelasCreateManyInput | WaliKelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaliKelas update
   */
  export type WaliKelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * The data needed to update a WaliKelas.
     */
    data: XOR<WaliKelasUpdateInput, WaliKelasUncheckedUpdateInput>
    /**
     * Choose, which WaliKelas to update.
     */
    where: WaliKelasWhereUniqueInput
  }

  /**
   * WaliKelas updateMany
   */
  export type WaliKelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaliKelas.
     */
    data: XOR<WaliKelasUpdateManyMutationInput, WaliKelasUncheckedUpdateManyInput>
    /**
     * Filter which WaliKelas to update
     */
    where?: WaliKelasWhereInput
    /**
     * Limit how many WaliKelas to update.
     */
    limit?: number
  }

  /**
   * WaliKelas upsert
   */
  export type WaliKelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * The filter to search for the WaliKelas to update in case it exists.
     */
    where: WaliKelasWhereUniqueInput
    /**
     * In case the WaliKelas found by the `where` argument doesn't exist, create a new WaliKelas with this data.
     */
    create: XOR<WaliKelasCreateInput, WaliKelasUncheckedCreateInput>
    /**
     * In case the WaliKelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaliKelasUpdateInput, WaliKelasUncheckedUpdateInput>
  }

  /**
   * WaliKelas delete
   */
  export type WaliKelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
    /**
     * Filter which WaliKelas to delete.
     */
    where: WaliKelasWhereUniqueInput
  }

  /**
   * WaliKelas deleteMany
   */
  export type WaliKelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliKelas to delete
     */
    where?: WaliKelasWhereInput
    /**
     * Limit how many WaliKelas to delete.
     */
    limit?: number
  }

  /**
   * WaliKelas without action
   */
  export type WaliKelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliKelas
     */
    select?: WaliKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliKelas
     */
    omit?: WaliKelasOmit<ExtArgs> | null
  }


  /**
   * Model Buku
   */

  export type AggregateBuku = {
    _count: BukuCountAggregateOutputType | null
    _avg: BukuAvgAggregateOutputType | null
    _sum: BukuSumAggregateOutputType | null
    _min: BukuMinAggregateOutputType | null
    _max: BukuMaxAggregateOutputType | null
  }

  export type BukuAvgAggregateOutputType = {
    id_buku: number | null
  }

  export type BukuSumAggregateOutputType = {
    id_buku: number | null
  }

  export type BukuMinAggregateOutputType = {
    id_buku: number | null
    judul: string | null
    penulis: string | null
    tahun: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BukuMaxAggregateOutputType = {
    id_buku: number | null
    judul: string | null
    penulis: string | null
    tahun: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BukuCountAggregateOutputType = {
    id_buku: number
    judul: number
    penulis: number
    tahun: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BukuAvgAggregateInputType = {
    id_buku?: true
  }

  export type BukuSumAggregateInputType = {
    id_buku?: true
  }

  export type BukuMinAggregateInputType = {
    id_buku?: true
    judul?: true
    penulis?: true
    tahun?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BukuMaxAggregateInputType = {
    id_buku?: true
    judul?: true
    penulis?: true
    tahun?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BukuCountAggregateInputType = {
    id_buku?: true
    judul?: true
    penulis?: true
    tahun?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BukuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buku to aggregate.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bukus
    **/
    _count?: true | BukuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BukuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BukuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BukuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BukuMaxAggregateInputType
  }

  export type GetBukuAggregateType<T extends BukuAggregateArgs> = {
        [P in keyof T & keyof AggregateBuku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuku[P]>
      : GetScalarType<T[P], AggregateBuku[P]>
  }




  export type BukuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BukuWhereInput
    orderBy?: BukuOrderByWithAggregationInput | BukuOrderByWithAggregationInput[]
    by: BukuScalarFieldEnum[] | BukuScalarFieldEnum
    having?: BukuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BukuCountAggregateInputType | true
    _avg?: BukuAvgAggregateInputType
    _sum?: BukuSumAggregateInputType
    _min?: BukuMinAggregateInputType
    _max?: BukuMaxAggregateInputType
  }

  export type BukuGroupByOutputType = {
    id_buku: number
    judul: string
    penulis: string
    tahun: string
    createdAt: Date
    updatedAt: Date
    _count: BukuCountAggregateOutputType | null
    _avg: BukuAvgAggregateOutputType | null
    _sum: BukuSumAggregateOutputType | null
    _min: BukuMinAggregateOutputType | null
    _max: BukuMaxAggregateOutputType | null
  }

  type GetBukuGroupByPayload<T extends BukuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BukuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BukuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BukuGroupByOutputType[P]>
            : GetScalarType<T[P], BukuGroupByOutputType[P]>
        }
      >
    >


  export type BukuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_buku?: boolean
    judul?: boolean
    penulis?: boolean
    tahun?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peminjaman?: boolean | Buku$peminjamanArgs<ExtArgs>
    _count?: boolean | BukuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buku"]>



  export type BukuSelectScalar = {
    id_buku?: boolean
    judul?: boolean
    penulis?: boolean
    tahun?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BukuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_buku" | "judul" | "penulis" | "tahun" | "createdAt" | "updatedAt", ExtArgs["result"]["buku"]>
  export type BukuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | Buku$peminjamanArgs<ExtArgs>
    _count?: boolean | BukuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BukuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Buku"
    objects: {
      peminjaman: Prisma.$PeminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_buku: number
      judul: string
      penulis: string
      tahun: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["buku"]>
    composites: {}
  }

  type BukuGetPayload<S extends boolean | null | undefined | BukuDefaultArgs> = $Result.GetResult<Prisma.$BukuPayload, S>

  type BukuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BukuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BukuCountAggregateInputType | true
    }

  export interface BukuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Buku'], meta: { name: 'Buku' } }
    /**
     * Find zero or one Buku that matches the filter.
     * @param {BukuFindUniqueArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BukuFindUniqueArgs>(args: SelectSubset<T, BukuFindUniqueArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BukuFindUniqueOrThrowArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BukuFindUniqueOrThrowArgs>(args: SelectSubset<T, BukuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindFirstArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BukuFindFirstArgs>(args?: SelectSubset<T, BukuFindFirstArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindFirstOrThrowArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BukuFindFirstOrThrowArgs>(args?: SelectSubset<T, BukuFindFirstOrThrowArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bukus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bukus
     * const bukus = await prisma.buku.findMany()
     * 
     * // Get first 10 Bukus
     * const bukus = await prisma.buku.findMany({ take: 10 })
     * 
     * // Only select the `id_buku`
     * const bukuWithId_bukuOnly = await prisma.buku.findMany({ select: { id_buku: true } })
     * 
     */
    findMany<T extends BukuFindManyArgs>(args?: SelectSubset<T, BukuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buku.
     * @param {BukuCreateArgs} args - Arguments to create a Buku.
     * @example
     * // Create one Buku
     * const Buku = await prisma.buku.create({
     *   data: {
     *     // ... data to create a Buku
     *   }
     * })
     * 
     */
    create<T extends BukuCreateArgs>(args: SelectSubset<T, BukuCreateArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bukus.
     * @param {BukuCreateManyArgs} args - Arguments to create many Bukus.
     * @example
     * // Create many Bukus
     * const buku = await prisma.buku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BukuCreateManyArgs>(args?: SelectSubset<T, BukuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Buku.
     * @param {BukuDeleteArgs} args - Arguments to delete one Buku.
     * @example
     * // Delete one Buku
     * const Buku = await prisma.buku.delete({
     *   where: {
     *     // ... filter to delete one Buku
     *   }
     * })
     * 
     */
    delete<T extends BukuDeleteArgs>(args: SelectSubset<T, BukuDeleteArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buku.
     * @param {BukuUpdateArgs} args - Arguments to update one Buku.
     * @example
     * // Update one Buku
     * const buku = await prisma.buku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BukuUpdateArgs>(args: SelectSubset<T, BukuUpdateArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bukus.
     * @param {BukuDeleteManyArgs} args - Arguments to filter Bukus to delete.
     * @example
     * // Delete a few Bukus
     * const { count } = await prisma.buku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BukuDeleteManyArgs>(args?: SelectSubset<T, BukuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bukus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bukus
     * const buku = await prisma.buku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BukuUpdateManyArgs>(args: SelectSubset<T, BukuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Buku.
     * @param {BukuUpsertArgs} args - Arguments to update or create a Buku.
     * @example
     * // Update or create a Buku
     * const buku = await prisma.buku.upsert({
     *   create: {
     *     // ... data to create a Buku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buku we want to update
     *   }
     * })
     */
    upsert<T extends BukuUpsertArgs>(args: SelectSubset<T, BukuUpsertArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bukus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuCountArgs} args - Arguments to filter Bukus to count.
     * @example
     * // Count the number of Bukus
     * const count = await prisma.buku.count({
     *   where: {
     *     // ... the filter for the Bukus we want to count
     *   }
     * })
    **/
    count<T extends BukuCountArgs>(
      args?: Subset<T, BukuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BukuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BukuAggregateArgs>(args: Subset<T, BukuAggregateArgs>): Prisma.PrismaPromise<GetBukuAggregateType<T>>

    /**
     * Group by Buku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuGroupByArgs} args - Group by arguments.
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
      T extends BukuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BukuGroupByArgs['orderBy'] }
        : { orderBy?: BukuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BukuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBukuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Buku model
   */
  readonly fields: BukuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Buku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BukuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjaman<T extends Buku$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, Buku$peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Buku model
   */
  interface BukuFieldRefs {
    readonly id_buku: FieldRef<"Buku", 'Int'>
    readonly judul: FieldRef<"Buku", 'String'>
    readonly penulis: FieldRef<"Buku", 'String'>
    readonly tahun: FieldRef<"Buku", 'String'>
    readonly createdAt: FieldRef<"Buku", 'DateTime'>
    readonly updatedAt: FieldRef<"Buku", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Buku findUnique
   */
  export type BukuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku findUniqueOrThrow
   */
  export type BukuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku findFirst
   */
  export type BukuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bukus.
     */
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku findFirstOrThrow
   */
  export type BukuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bukus.
     */
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku findMany
   */
  export type BukuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Bukus to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku create
   */
  export type BukuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The data needed to create a Buku.
     */
    data: XOR<BukuCreateInput, BukuUncheckedCreateInput>
  }

  /**
   * Buku createMany
   */
  export type BukuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bukus.
     */
    data: BukuCreateManyInput | BukuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Buku update
   */
  export type BukuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The data needed to update a Buku.
     */
    data: XOR<BukuUpdateInput, BukuUncheckedUpdateInput>
    /**
     * Choose, which Buku to update.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku updateMany
   */
  export type BukuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bukus.
     */
    data: XOR<BukuUpdateManyMutationInput, BukuUncheckedUpdateManyInput>
    /**
     * Filter which Bukus to update
     */
    where?: BukuWhereInput
    /**
     * Limit how many Bukus to update.
     */
    limit?: number
  }

  /**
   * Buku upsert
   */
  export type BukuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The filter to search for the Buku to update in case it exists.
     */
    where: BukuWhereUniqueInput
    /**
     * In case the Buku found by the `where` argument doesn't exist, create a new Buku with this data.
     */
    create: XOR<BukuCreateInput, BukuUncheckedCreateInput>
    /**
     * In case the Buku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BukuUpdateInput, BukuUncheckedUpdateInput>
  }

  /**
   * Buku delete
   */
  export type BukuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter which Buku to delete.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku deleteMany
   */
  export type BukuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bukus to delete
     */
    where?: BukuWhereInput
    /**
     * Limit how many Bukus to delete.
     */
    limit?: number
  }

  /**
   * Buku.peminjaman
   */
  export type Buku$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    cursor?: PeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Buku without action
   */
  export type BukuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
  }


  /**
   * Model Peminjaman
   */

  export type AggregatePeminjaman = {
    _count: PeminjamanCountAggregateOutputType | null
    _avg: PeminjamanAvgAggregateOutputType | null
    _sum: PeminjamanSumAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  export type PeminjamanAvgAggregateOutputType = {
    id_peminjaman: number | null
    student_id: number | null
    buku_id: number | null
  }

  export type PeminjamanSumAggregateOutputType = {
    id_peminjaman: number | null
    student_id: number | null
    buku_id: number | null
  }

  export type PeminjamanMinAggregateOutputType = {
    id_peminjaman: number | null
    student_id: number | null
    buku_id: number | null
    tanggalPeminjaman: Date | null
    batasKembali: Date | null
    status: $Enums.StatusPeminjaman | null
  }

  export type PeminjamanMaxAggregateOutputType = {
    id_peminjaman: number | null
    student_id: number | null
    buku_id: number | null
    tanggalPeminjaman: Date | null
    batasKembali: Date | null
    status: $Enums.StatusPeminjaman | null
  }

  export type PeminjamanCountAggregateOutputType = {
    id_peminjaman: number
    student_id: number
    buku_id: number
    tanggalPeminjaman: number
    batasKembali: number
    status: number
    _all: number
  }


  export type PeminjamanAvgAggregateInputType = {
    id_peminjaman?: true
    student_id?: true
    buku_id?: true
  }

  export type PeminjamanSumAggregateInputType = {
    id_peminjaman?: true
    student_id?: true
    buku_id?: true
  }

  export type PeminjamanMinAggregateInputType = {
    id_peminjaman?: true
    student_id?: true
    buku_id?: true
    tanggalPeminjaman?: true
    batasKembali?: true
    status?: true
  }

  export type PeminjamanMaxAggregateInputType = {
    id_peminjaman?: true
    student_id?: true
    buku_id?: true
    tanggalPeminjaman?: true
    batasKembali?: true
    status?: true
  }

  export type PeminjamanCountAggregateInputType = {
    id_peminjaman?: true
    student_id?: true
    buku_id?: true
    tanggalPeminjaman?: true
    batasKembali?: true
    status?: true
    _all?: true
  }

  export type PeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjaman to aggregate.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peminjamen
    **/
    _count?: true | PeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeminjamanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeminjamanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanMaxAggregateInputType
  }

  export type GetPeminjamanAggregateType<T extends PeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjaman[P]>
      : GetScalarType<T[P], AggregatePeminjaman[P]>
  }




  export type PeminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithAggregationInput | PeminjamanOrderByWithAggregationInput[]
    by: PeminjamanScalarFieldEnum[] | PeminjamanScalarFieldEnum
    having?: PeminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanCountAggregateInputType | true
    _avg?: PeminjamanAvgAggregateInputType
    _sum?: PeminjamanSumAggregateInputType
    _min?: PeminjamanMinAggregateInputType
    _max?: PeminjamanMaxAggregateInputType
  }

  export type PeminjamanGroupByOutputType = {
    id_peminjaman: number
    student_id: number
    buku_id: number
    tanggalPeminjaman: Date
    batasKembali: Date
    status: $Enums.StatusPeminjaman
    _count: PeminjamanCountAggregateOutputType | null
    _avg: PeminjamanAvgAggregateOutputType | null
    _sum: PeminjamanSumAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  type GetPeminjamanGroupByPayload<T extends PeminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type PeminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peminjaman?: boolean
    student_id?: boolean
    buku_id?: boolean
    tanggalPeminjaman?: boolean
    batasKembali?: boolean
    status?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    buku?: boolean | BukuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>



  export type PeminjamanSelectScalar = {
    id_peminjaman?: boolean
    student_id?: boolean
    buku_id?: boolean
    tanggalPeminjaman?: boolean
    batasKembali?: boolean
    status?: boolean
  }

  export type PeminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_peminjaman" | "student_id" | "buku_id" | "tanggalPeminjaman" | "batasKembali" | "status", ExtArgs["result"]["peminjaman"]>
  export type PeminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    buku?: boolean | BukuDefaultArgs<ExtArgs>
  }

  export type $PeminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peminjaman"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      buku: Prisma.$BukuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_peminjaman: number
      student_id: number
      buku_id: number
      tanggalPeminjaman: Date
      batasKembali: Date
      status: $Enums.StatusPeminjaman
    }, ExtArgs["result"]["peminjaman"]>
    composites: {}
  }

  type PeminjamanGetPayload<S extends boolean | null | undefined | PeminjamanDefaultArgs> = $Result.GetResult<Prisma.$PeminjamanPayload, S>

  type PeminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanCountAggregateInputType | true
    }

  export interface PeminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peminjaman'], meta: { name: 'Peminjaman' } }
    /**
     * Find zero or one Peminjaman that matches the filter.
     * @param {PeminjamanFindUniqueArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeminjamanFindUniqueArgs>(args: SelectSubset<T, PeminjamanFindUniqueArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeminjamanFindUniqueOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, PeminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindFirstArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeminjamanFindFirstArgs>(args?: SelectSubset<T, PeminjamanFindFirstArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindFirstOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, PeminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany()
     * 
     * // Get first 10 Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany({ take: 10 })
     * 
     * // Only select the `id_peminjaman`
     * const peminjamanWithId_peminjamanOnly = await prisma.peminjaman.findMany({ select: { id_peminjaman: true } })
     * 
     */
    findMany<T extends PeminjamanFindManyArgs>(args?: SelectSubset<T, PeminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peminjaman.
     * @param {PeminjamanCreateArgs} args - Arguments to create a Peminjaman.
     * @example
     * // Create one Peminjaman
     * const Peminjaman = await prisma.peminjaman.create({
     *   data: {
     *     // ... data to create a Peminjaman
     *   }
     * })
     * 
     */
    create<T extends PeminjamanCreateArgs>(args: SelectSubset<T, PeminjamanCreateArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peminjamen.
     * @param {PeminjamanCreateManyArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeminjamanCreateManyArgs>(args?: SelectSubset<T, PeminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peminjaman.
     * @param {PeminjamanDeleteArgs} args - Arguments to delete one Peminjaman.
     * @example
     * // Delete one Peminjaman
     * const Peminjaman = await prisma.peminjaman.delete({
     *   where: {
     *     // ... filter to delete one Peminjaman
     *   }
     * })
     * 
     */
    delete<T extends PeminjamanDeleteArgs>(args: SelectSubset<T, PeminjamanDeleteArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peminjaman.
     * @param {PeminjamanUpdateArgs} args - Arguments to update one Peminjaman.
     * @example
     * // Update one Peminjaman
     * const peminjaman = await prisma.peminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeminjamanUpdateArgs>(args: SelectSubset<T, PeminjamanUpdateArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peminjamen.
     * @param {PeminjamanDeleteManyArgs} args - Arguments to filter Peminjamen to delete.
     * @example
     * // Delete a few Peminjamen
     * const { count } = await prisma.peminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeminjamanDeleteManyArgs>(args?: SelectSubset<T, PeminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeminjamanUpdateManyArgs>(args: SelectSubset<T, PeminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peminjaman.
     * @param {PeminjamanUpsertArgs} args - Arguments to update or create a Peminjaman.
     * @example
     * // Update or create a Peminjaman
     * const peminjaman = await prisma.peminjaman.upsert({
     *   create: {
     *     // ... data to create a Peminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peminjaman we want to update
     *   }
     * })
     */
    upsert<T extends PeminjamanUpsertArgs>(args: SelectSubset<T, PeminjamanUpsertArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanCountArgs} args - Arguments to filter Peminjamen to count.
     * @example
     * // Count the number of Peminjamen
     * const count = await prisma.peminjaman.count({
     *   where: {
     *     // ... the filter for the Peminjamen we want to count
     *   }
     * })
    **/
    count<T extends PeminjamanCountArgs>(
      args?: Subset<T, PeminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeminjamanAggregateArgs>(args: Subset<T, PeminjamanAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanAggregateType<T>>

    /**
     * Group by Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanGroupByArgs} args - Group by arguments.
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
      T extends PeminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeminjamanGroupByArgs['orderBy'] }
        : { orderBy?: PeminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peminjaman model
   */
  readonly fields: PeminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buku<T extends BukuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BukuDefaultArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Peminjaman model
   */
  interface PeminjamanFieldRefs {
    readonly id_peminjaman: FieldRef<"Peminjaman", 'Int'>
    readonly student_id: FieldRef<"Peminjaman", 'Int'>
    readonly buku_id: FieldRef<"Peminjaman", 'Int'>
    readonly tanggalPeminjaman: FieldRef<"Peminjaman", 'DateTime'>
    readonly batasKembali: FieldRef<"Peminjaman", 'DateTime'>
    readonly status: FieldRef<"Peminjaman", 'StatusPeminjaman'>
  }
    

  // Custom InputTypes
  /**
   * Peminjaman findUnique
   */
  export type PeminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman findUniqueOrThrow
   */
  export type PeminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman findFirst
   */
  export type PeminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman findFirstOrThrow
   */
  export type PeminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman findMany
   */
  export type PeminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjamen to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman create
   */
  export type PeminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a Peminjaman.
     */
    data: XOR<PeminjamanCreateInput, PeminjamanUncheckedCreateInput>
  }

  /**
   * Peminjaman createMany
   */
  export type PeminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peminjamen.
     */
    data: PeminjamanCreateManyInput | PeminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peminjaman update
   */
  export type PeminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a Peminjaman.
     */
    data: XOR<PeminjamanUpdateInput, PeminjamanUncheckedUpdateInput>
    /**
     * Choose, which Peminjaman to update.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman updateMany
   */
  export type PeminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peminjamen.
     */
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which Peminjamen to update
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to update.
     */
    limit?: number
  }

  /**
   * Peminjaman upsert
   */
  export type PeminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the Peminjaman to update in case it exists.
     */
    where: PeminjamanWhereUniqueInput
    /**
     * In case the Peminjaman found by the `where` argument doesn't exist, create a new Peminjaman with this data.
     */
    create: XOR<PeminjamanCreateInput, PeminjamanUncheckedCreateInput>
    /**
     * In case the Peminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeminjamanUpdateInput, PeminjamanUncheckedUpdateInput>
  }

  /**
   * Peminjaman delete
   */
  export type PeminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter which Peminjaman to delete.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman deleteMany
   */
  export type PeminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjamen to delete
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to delete.
     */
    limit?: number
  }

  /**
   * Peminjaman without action
   */
  export type PeminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    nis: 'nis',
    name: 'name',
    email: 'email',
    kelas: 'kelas',
    jurusan: 'jurusan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const WaliKelasScalarFieldEnum: {
    id_WaliKelas: 'id_WaliKelas',
    name_WaliKelas: 'name_WaliKelas',
    no_telp: 'no_telp',
    mapel: 'mapel',
    alamat: 'alamat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WaliKelasScalarFieldEnum = (typeof WaliKelasScalarFieldEnum)[keyof typeof WaliKelasScalarFieldEnum]


  export const BukuScalarFieldEnum: {
    id_buku: 'id_buku',
    judul: 'judul',
    penulis: 'penulis',
    tahun: 'tahun',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BukuScalarFieldEnum = (typeof BukuScalarFieldEnum)[keyof typeof BukuScalarFieldEnum]


  export const PeminjamanScalarFieldEnum: {
    id_peminjaman: 'id_peminjaman',
    student_id: 'student_id',
    buku_id: 'buku_id',
    tanggalPeminjaman: 'tanggalPeminjaman',
    batasKembali: 'batasKembali',
    status: 'status'
  };

  export type PeminjamanScalarFieldEnum = (typeof PeminjamanScalarFieldEnum)[keyof typeof PeminjamanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const StudentOrderByRelevanceFieldEnum: {
    nis: 'nis',
    name: 'name',
    email: 'email',
    kelas: 'kelas',
    jurusan: 'jurusan'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const WaliKelasOrderByRelevanceFieldEnum: {
    name_WaliKelas: 'name_WaliKelas',
    no_telp: 'no_telp',
    mapel: 'mapel',
    alamat: 'alamat'
  };

  export type WaliKelasOrderByRelevanceFieldEnum = (typeof WaliKelasOrderByRelevanceFieldEnum)[keyof typeof WaliKelasOrderByRelevanceFieldEnum]


  export const BukuOrderByRelevanceFieldEnum: {
    judul: 'judul',
    penulis: 'penulis',
    tahun: 'tahun'
  };

  export type BukuOrderByRelevanceFieldEnum = (typeof BukuOrderByRelevanceFieldEnum)[keyof typeof BukuOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StatusPeminjaman'
   */
  export type EnumStatusPeminjamanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPeminjaman'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    nis?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    kelas?: StringFilter<"Student"> | string
    jurusan?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    peminjaman?: PeminjamanListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    peminjaman?: PeminjamanOrderByRelationAggregateInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nis?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    kelas?: StringFilter<"Student"> | string
    jurusan?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    peminjaman?: PeminjamanListRelationFilter
  }, "id" | "nis" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    nis?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
    kelas?: StringWithAggregatesFilter<"Student"> | string
    jurusan?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type WaliKelasWhereInput = {
    AND?: WaliKelasWhereInput | WaliKelasWhereInput[]
    OR?: WaliKelasWhereInput[]
    NOT?: WaliKelasWhereInput | WaliKelasWhereInput[]
    id_WaliKelas?: IntFilter<"WaliKelas"> | number
    name_WaliKelas?: StringFilter<"WaliKelas"> | string
    no_telp?: StringNullableFilter<"WaliKelas"> | string | null
    mapel?: StringFilter<"WaliKelas"> | string
    alamat?: StringFilter<"WaliKelas"> | string
    createdAt?: DateTimeFilter<"WaliKelas"> | Date | string
    updatedAt?: DateTimeFilter<"WaliKelas"> | Date | string
  }

  export type WaliKelasOrderByWithRelationInput = {
    id_WaliKelas?: SortOrder
    name_WaliKelas?: SortOrder
    no_telp?: SortOrderInput | SortOrder
    mapel?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: WaliKelasOrderByRelevanceInput
  }

  export type WaliKelasWhereUniqueInput = Prisma.AtLeast<{
    id_WaliKelas?: number
    no_telp?: string
    AND?: WaliKelasWhereInput | WaliKelasWhereInput[]
    OR?: WaliKelasWhereInput[]
    NOT?: WaliKelasWhereInput | WaliKelasWhereInput[]
    name_WaliKelas?: StringFilter<"WaliKelas"> | string
    mapel?: StringFilter<"WaliKelas"> | string
    alamat?: StringFilter<"WaliKelas"> | string
    createdAt?: DateTimeFilter<"WaliKelas"> | Date | string
    updatedAt?: DateTimeFilter<"WaliKelas"> | Date | string
  }, "id_WaliKelas" | "no_telp">

  export type WaliKelasOrderByWithAggregationInput = {
    id_WaliKelas?: SortOrder
    name_WaliKelas?: SortOrder
    no_telp?: SortOrderInput | SortOrder
    mapel?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WaliKelasCountOrderByAggregateInput
    _avg?: WaliKelasAvgOrderByAggregateInput
    _max?: WaliKelasMaxOrderByAggregateInput
    _min?: WaliKelasMinOrderByAggregateInput
    _sum?: WaliKelasSumOrderByAggregateInput
  }

  export type WaliKelasScalarWhereWithAggregatesInput = {
    AND?: WaliKelasScalarWhereWithAggregatesInput | WaliKelasScalarWhereWithAggregatesInput[]
    OR?: WaliKelasScalarWhereWithAggregatesInput[]
    NOT?: WaliKelasScalarWhereWithAggregatesInput | WaliKelasScalarWhereWithAggregatesInput[]
    id_WaliKelas?: IntWithAggregatesFilter<"WaliKelas"> | number
    name_WaliKelas?: StringWithAggregatesFilter<"WaliKelas"> | string
    no_telp?: StringNullableWithAggregatesFilter<"WaliKelas"> | string | null
    mapel?: StringWithAggregatesFilter<"WaliKelas"> | string
    alamat?: StringWithAggregatesFilter<"WaliKelas"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WaliKelas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WaliKelas"> | Date | string
  }

  export type BukuWhereInput = {
    AND?: BukuWhereInput | BukuWhereInput[]
    OR?: BukuWhereInput[]
    NOT?: BukuWhereInput | BukuWhereInput[]
    id_buku?: IntFilter<"Buku"> | number
    judul?: StringFilter<"Buku"> | string
    penulis?: StringFilter<"Buku"> | string
    tahun?: StringFilter<"Buku"> | string
    createdAt?: DateTimeFilter<"Buku"> | Date | string
    updatedAt?: DateTimeFilter<"Buku"> | Date | string
    peminjaman?: PeminjamanListRelationFilter
  }

  export type BukuOrderByWithRelationInput = {
    id_buku?: SortOrder
    judul?: SortOrder
    penulis?: SortOrder
    tahun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    peminjaman?: PeminjamanOrderByRelationAggregateInput
    _relevance?: BukuOrderByRelevanceInput
  }

  export type BukuWhereUniqueInput = Prisma.AtLeast<{
    id_buku?: number
    judul?: string
    AND?: BukuWhereInput | BukuWhereInput[]
    OR?: BukuWhereInput[]
    NOT?: BukuWhereInput | BukuWhereInput[]
    penulis?: StringFilter<"Buku"> | string
    tahun?: StringFilter<"Buku"> | string
    createdAt?: DateTimeFilter<"Buku"> | Date | string
    updatedAt?: DateTimeFilter<"Buku"> | Date | string
    peminjaman?: PeminjamanListRelationFilter
  }, "id_buku" | "judul">

  export type BukuOrderByWithAggregationInput = {
    id_buku?: SortOrder
    judul?: SortOrder
    penulis?: SortOrder
    tahun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BukuCountOrderByAggregateInput
    _avg?: BukuAvgOrderByAggregateInput
    _max?: BukuMaxOrderByAggregateInput
    _min?: BukuMinOrderByAggregateInput
    _sum?: BukuSumOrderByAggregateInput
  }

  export type BukuScalarWhereWithAggregatesInput = {
    AND?: BukuScalarWhereWithAggregatesInput | BukuScalarWhereWithAggregatesInput[]
    OR?: BukuScalarWhereWithAggregatesInput[]
    NOT?: BukuScalarWhereWithAggregatesInput | BukuScalarWhereWithAggregatesInput[]
    id_buku?: IntWithAggregatesFilter<"Buku"> | number
    judul?: StringWithAggregatesFilter<"Buku"> | string
    penulis?: StringWithAggregatesFilter<"Buku"> | string
    tahun?: StringWithAggregatesFilter<"Buku"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Buku"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Buku"> | Date | string
  }

  export type PeminjamanWhereInput = {
    AND?: PeminjamanWhereInput | PeminjamanWhereInput[]
    OR?: PeminjamanWhereInput[]
    NOT?: PeminjamanWhereInput | PeminjamanWhereInput[]
    id_peminjaman?: IntFilter<"Peminjaman"> | number
    student_id?: IntFilter<"Peminjaman"> | number
    buku_id?: IntFilter<"Peminjaman"> | number
    tanggalPeminjaman?: DateTimeFilter<"Peminjaman"> | Date | string
    batasKembali?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusPeminjamanFilter<"Peminjaman"> | $Enums.StatusPeminjaman
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    buku?: XOR<BukuScalarRelationFilter, BukuWhereInput>
  }

  export type PeminjamanOrderByWithRelationInput = {
    id_peminjaman?: SortOrder
    student_id?: SortOrder
    buku_id?: SortOrder
    tanggalPeminjaman?: SortOrder
    batasKembali?: SortOrder
    status?: SortOrder
    student?: StudentOrderByWithRelationInput
    buku?: BukuOrderByWithRelationInput
  }

  export type PeminjamanWhereUniqueInput = Prisma.AtLeast<{
    id_peminjaman?: number
    AND?: PeminjamanWhereInput | PeminjamanWhereInput[]
    OR?: PeminjamanWhereInput[]
    NOT?: PeminjamanWhereInput | PeminjamanWhereInput[]
    student_id?: IntFilter<"Peminjaman"> | number
    buku_id?: IntFilter<"Peminjaman"> | number
    tanggalPeminjaman?: DateTimeFilter<"Peminjaman"> | Date | string
    batasKembali?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusPeminjamanFilter<"Peminjaman"> | $Enums.StatusPeminjaman
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    buku?: XOR<BukuScalarRelationFilter, BukuWhereInput>
  }, "id_peminjaman">

  export type PeminjamanOrderByWithAggregationInput = {
    id_peminjaman?: SortOrder
    student_id?: SortOrder
    buku_id?: SortOrder
    tanggalPeminjaman?: SortOrder
    batasKembali?: SortOrder
    status?: SortOrder
    _count?: PeminjamanCountOrderByAggregateInput
    _avg?: PeminjamanAvgOrderByAggregateInput
    _max?: PeminjamanMaxOrderByAggregateInput
    _min?: PeminjamanMinOrderByAggregateInput
    _sum?: PeminjamanSumOrderByAggregateInput
  }

  export type PeminjamanScalarWhereWithAggregatesInput = {
    AND?: PeminjamanScalarWhereWithAggregatesInput | PeminjamanScalarWhereWithAggregatesInput[]
    OR?: PeminjamanScalarWhereWithAggregatesInput[]
    NOT?: PeminjamanScalarWhereWithAggregatesInput | PeminjamanScalarWhereWithAggregatesInput[]
    id_peminjaman?: IntWithAggregatesFilter<"Peminjaman"> | number
    student_id?: IntWithAggregatesFilter<"Peminjaman"> | number
    buku_id?: IntWithAggregatesFilter<"Peminjaman"> | number
    tanggalPeminjaman?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    batasKembali?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    status?: EnumStatusPeminjamanWithAggregatesFilter<"Peminjaman"> | $Enums.StatusPeminjaman
  }

  export type StudentCreateInput = {
    nis: string
    name: string
    email?: string | null
    kelas: string
    jurusan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    nis: string
    name: string
    email?: string | null
    kelas: string
    jurusan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    nis?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    nis: string
    name: string
    email?: string | null
    kelas: string
    jurusan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    nis?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliKelasCreateInput = {
    name_WaliKelas: string
    no_telp?: string | null
    mapel: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaliKelasUncheckedCreateInput = {
    id_WaliKelas?: number
    name_WaliKelas: string
    no_telp?: string | null
    mapel: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaliKelasUpdateInput = {
    name_WaliKelas?: StringFieldUpdateOperationsInput | string
    no_telp?: NullableStringFieldUpdateOperationsInput | string | null
    mapel?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliKelasUncheckedUpdateInput = {
    id_WaliKelas?: IntFieldUpdateOperationsInput | number
    name_WaliKelas?: StringFieldUpdateOperationsInput | string
    no_telp?: NullableStringFieldUpdateOperationsInput | string | null
    mapel?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliKelasCreateManyInput = {
    id_WaliKelas?: number
    name_WaliKelas: string
    no_telp?: string | null
    mapel: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaliKelasUpdateManyMutationInput = {
    name_WaliKelas?: StringFieldUpdateOperationsInput | string
    no_telp?: NullableStringFieldUpdateOperationsInput | string | null
    mapel?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliKelasUncheckedUpdateManyInput = {
    id_WaliKelas?: IntFieldUpdateOperationsInput | number
    name_WaliKelas?: StringFieldUpdateOperationsInput | string
    no_telp?: NullableStringFieldUpdateOperationsInput | string | null
    mapel?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuCreateInput = {
    judul: string
    penulis: string
    tahun: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanCreateNestedManyWithoutBukuInput
  }

  export type BukuUncheckedCreateInput = {
    id_buku?: number
    judul: string
    penulis: string
    tahun: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutBukuInput
  }

  export type BukuUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUpdateManyWithoutBukuNestedInput
  }

  export type BukuUncheckedUpdateInput = {
    id_buku?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUncheckedUpdateManyWithoutBukuNestedInput
  }

  export type BukuCreateManyInput = {
    id_buku?: number
    judul: string
    penulis: string
    tahun: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuUncheckedUpdateManyInput = {
    id_buku?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateInput = {
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
    student: StudentCreateNestedOneWithoutPeminjamanInput
    buku: BukuCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateInput = {
    id_peminjaman?: number
    student_id: number
    buku_id: number
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
  }

  export type PeminjamanUpdateInput = {
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
    student?: StudentUpdateOneRequiredWithoutPeminjamanNestedInput
    buku?: BukuUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    buku_id?: IntFieldUpdateOperationsInput | number
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
  }

  export type PeminjamanCreateManyInput = {
    id_peminjaman?: number
    student_id: number
    buku_id: number
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
  }

  export type PeminjamanUpdateManyMutationInput = {
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
  }

  export type PeminjamanUncheckedUpdateManyInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    buku_id?: IntFieldUpdateOperationsInput | number
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PeminjamanListRelationFilter = {
    every?: PeminjamanWhereInput
    some?: PeminjamanWhereInput
    none?: PeminjamanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PeminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    email?: SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    email?: SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    email?: SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WaliKelasOrderByRelevanceInput = {
    fields: WaliKelasOrderByRelevanceFieldEnum | WaliKelasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WaliKelasCountOrderByAggregateInput = {
    id_WaliKelas?: SortOrder
    name_WaliKelas?: SortOrder
    no_telp?: SortOrder
    mapel?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaliKelasAvgOrderByAggregateInput = {
    id_WaliKelas?: SortOrder
  }

  export type WaliKelasMaxOrderByAggregateInput = {
    id_WaliKelas?: SortOrder
    name_WaliKelas?: SortOrder
    no_telp?: SortOrder
    mapel?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaliKelasMinOrderByAggregateInput = {
    id_WaliKelas?: SortOrder
    name_WaliKelas?: SortOrder
    no_telp?: SortOrder
    mapel?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaliKelasSumOrderByAggregateInput = {
    id_WaliKelas?: SortOrder
  }

  export type BukuOrderByRelevanceInput = {
    fields: BukuOrderByRelevanceFieldEnum | BukuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BukuCountOrderByAggregateInput = {
    id_buku?: SortOrder
    judul?: SortOrder
    penulis?: SortOrder
    tahun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuAvgOrderByAggregateInput = {
    id_buku?: SortOrder
  }

  export type BukuMaxOrderByAggregateInput = {
    id_buku?: SortOrder
    judul?: SortOrder
    penulis?: SortOrder
    tahun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuMinOrderByAggregateInput = {
    id_buku?: SortOrder
    judul?: SortOrder
    penulis?: SortOrder
    tahun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuSumOrderByAggregateInput = {
    id_buku?: SortOrder
  }

  export type EnumStatusPeminjamanFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPeminjaman | EnumStatusPeminjamanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPeminjaman[]
    notIn?: $Enums.StatusPeminjaman[]
    not?: NestedEnumStatusPeminjamanFilter<$PrismaModel> | $Enums.StatusPeminjaman
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type BukuScalarRelationFilter = {
    is?: BukuWhereInput
    isNot?: BukuWhereInput
  }

  export type PeminjamanCountOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    student_id?: SortOrder
    buku_id?: SortOrder
    tanggalPeminjaman?: SortOrder
    batasKembali?: SortOrder
    status?: SortOrder
  }

  export type PeminjamanAvgOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    student_id?: SortOrder
    buku_id?: SortOrder
  }

  export type PeminjamanMaxOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    student_id?: SortOrder
    buku_id?: SortOrder
    tanggalPeminjaman?: SortOrder
    batasKembali?: SortOrder
    status?: SortOrder
  }

  export type PeminjamanMinOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    student_id?: SortOrder
    buku_id?: SortOrder
    tanggalPeminjaman?: SortOrder
    batasKembali?: SortOrder
    status?: SortOrder
  }

  export type PeminjamanSumOrderByAggregateInput = {
    id_peminjaman?: SortOrder
    student_id?: SortOrder
    buku_id?: SortOrder
  }

  export type EnumStatusPeminjamanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPeminjaman | EnumStatusPeminjamanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPeminjaman[]
    notIn?: $Enums.StatusPeminjaman[]
    not?: NestedEnumStatusPeminjamanWithAggregatesFilter<$PrismaModel> | $Enums.StatusPeminjaman
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPeminjamanFilter<$PrismaModel>
    _max?: NestedEnumStatusPeminjamanFilter<$PrismaModel>
  }

  export type PeminjamanCreateNestedManyWithoutStudentInput = {
    create?: XOR<PeminjamanCreateWithoutStudentInput, PeminjamanUncheckedCreateWithoutStudentInput> | PeminjamanCreateWithoutStudentInput[] | PeminjamanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutStudentInput | PeminjamanCreateOrConnectWithoutStudentInput[]
    createMany?: PeminjamanCreateManyStudentInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type PeminjamanUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PeminjamanCreateWithoutStudentInput, PeminjamanUncheckedCreateWithoutStudentInput> | PeminjamanCreateWithoutStudentInput[] | PeminjamanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutStudentInput | PeminjamanCreateOrConnectWithoutStudentInput[]
    createMany?: PeminjamanCreateManyStudentInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PeminjamanUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PeminjamanCreateWithoutStudentInput, PeminjamanUncheckedCreateWithoutStudentInput> | PeminjamanCreateWithoutStudentInput[] | PeminjamanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutStudentInput | PeminjamanCreateOrConnectWithoutStudentInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutStudentInput | PeminjamanUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PeminjamanCreateManyStudentInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutStudentInput | PeminjamanUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutStudentInput | PeminjamanUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PeminjamanUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PeminjamanCreateWithoutStudentInput, PeminjamanUncheckedCreateWithoutStudentInput> | PeminjamanCreateWithoutStudentInput[] | PeminjamanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutStudentInput | PeminjamanCreateOrConnectWithoutStudentInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutStudentInput | PeminjamanUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PeminjamanCreateManyStudentInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutStudentInput | PeminjamanUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutStudentInput | PeminjamanUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type PeminjamanCreateNestedManyWithoutBukuInput = {
    create?: XOR<PeminjamanCreateWithoutBukuInput, PeminjamanUncheckedCreateWithoutBukuInput> | PeminjamanCreateWithoutBukuInput[] | PeminjamanUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutBukuInput | PeminjamanCreateOrConnectWithoutBukuInput[]
    createMany?: PeminjamanCreateManyBukuInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type PeminjamanUncheckedCreateNestedManyWithoutBukuInput = {
    create?: XOR<PeminjamanCreateWithoutBukuInput, PeminjamanUncheckedCreateWithoutBukuInput> | PeminjamanCreateWithoutBukuInput[] | PeminjamanUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutBukuInput | PeminjamanCreateOrConnectWithoutBukuInput[]
    createMany?: PeminjamanCreateManyBukuInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type PeminjamanUpdateManyWithoutBukuNestedInput = {
    create?: XOR<PeminjamanCreateWithoutBukuInput, PeminjamanUncheckedCreateWithoutBukuInput> | PeminjamanCreateWithoutBukuInput[] | PeminjamanUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutBukuInput | PeminjamanCreateOrConnectWithoutBukuInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutBukuInput | PeminjamanUpsertWithWhereUniqueWithoutBukuInput[]
    createMany?: PeminjamanCreateManyBukuInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutBukuInput | PeminjamanUpdateWithWhereUniqueWithoutBukuInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutBukuInput | PeminjamanUpdateManyWithWhereWithoutBukuInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type PeminjamanUncheckedUpdateManyWithoutBukuNestedInput = {
    create?: XOR<PeminjamanCreateWithoutBukuInput, PeminjamanUncheckedCreateWithoutBukuInput> | PeminjamanCreateWithoutBukuInput[] | PeminjamanUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutBukuInput | PeminjamanCreateOrConnectWithoutBukuInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutBukuInput | PeminjamanUpsertWithWhereUniqueWithoutBukuInput[]
    createMany?: PeminjamanCreateManyBukuInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutBukuInput | PeminjamanUpdateWithWhereUniqueWithoutBukuInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutBukuInput | PeminjamanUpdateManyWithWhereWithoutBukuInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<StudentCreateWithoutPeminjamanInput, StudentUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPeminjamanInput
    connect?: StudentWhereUniqueInput
  }

  export type BukuCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<BukuCreateWithoutPeminjamanInput, BukuUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: BukuCreateOrConnectWithoutPeminjamanInput
    connect?: BukuWhereUniqueInput
  }

  export type EnumStatusPeminjamanFieldUpdateOperationsInput = {
    set?: $Enums.StatusPeminjaman
  }

  export type StudentUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<StudentCreateWithoutPeminjamanInput, StudentUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPeminjamanInput
    upsert?: StudentUpsertWithoutPeminjamanInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPeminjamanInput, StudentUpdateWithoutPeminjamanInput>, StudentUncheckedUpdateWithoutPeminjamanInput>
  }

  export type BukuUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<BukuCreateWithoutPeminjamanInput, BukuUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: BukuCreateOrConnectWithoutPeminjamanInput
    upsert?: BukuUpsertWithoutPeminjamanInput
    connect?: BukuWhereUniqueInput
    update?: XOR<XOR<BukuUpdateToOneWithWhereWithoutPeminjamanInput, BukuUpdateWithoutPeminjamanInput>, BukuUncheckedUpdateWithoutPeminjamanInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusPeminjamanFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPeminjaman | EnumStatusPeminjamanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPeminjaman[]
    notIn?: $Enums.StatusPeminjaman[]
    not?: NestedEnumStatusPeminjamanFilter<$PrismaModel> | $Enums.StatusPeminjaman
  }

  export type NestedEnumStatusPeminjamanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPeminjaman | EnumStatusPeminjamanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPeminjaman[]
    notIn?: $Enums.StatusPeminjaman[]
    not?: NestedEnumStatusPeminjamanWithAggregatesFilter<$PrismaModel> | $Enums.StatusPeminjaman
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPeminjamanFilter<$PrismaModel>
    _max?: NestedEnumStatusPeminjamanFilter<$PrismaModel>
  }

  export type PeminjamanCreateWithoutStudentInput = {
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
    buku: BukuCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateWithoutStudentInput = {
    id_peminjaman?: number
    buku_id: number
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
  }

  export type PeminjamanCreateOrConnectWithoutStudentInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutStudentInput, PeminjamanUncheckedCreateWithoutStudentInput>
  }

  export type PeminjamanCreateManyStudentInputEnvelope = {
    data: PeminjamanCreateManyStudentInput | PeminjamanCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanUpsertWithWhereUniqueWithoutStudentInput = {
    where: PeminjamanWhereUniqueInput
    update: XOR<PeminjamanUpdateWithoutStudentInput, PeminjamanUncheckedUpdateWithoutStudentInput>
    create: XOR<PeminjamanCreateWithoutStudentInput, PeminjamanUncheckedCreateWithoutStudentInput>
  }

  export type PeminjamanUpdateWithWhereUniqueWithoutStudentInput = {
    where: PeminjamanWhereUniqueInput
    data: XOR<PeminjamanUpdateWithoutStudentInput, PeminjamanUncheckedUpdateWithoutStudentInput>
  }

  export type PeminjamanUpdateManyWithWhereWithoutStudentInput = {
    where: PeminjamanScalarWhereInput
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyWithoutStudentInput>
  }

  export type PeminjamanScalarWhereInput = {
    AND?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
    OR?: PeminjamanScalarWhereInput[]
    NOT?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
    id_peminjaman?: IntFilter<"Peminjaman"> | number
    student_id?: IntFilter<"Peminjaman"> | number
    buku_id?: IntFilter<"Peminjaman"> | number
    tanggalPeminjaman?: DateTimeFilter<"Peminjaman"> | Date | string
    batasKembali?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusPeminjamanFilter<"Peminjaman"> | $Enums.StatusPeminjaman
  }

  export type PeminjamanCreateWithoutBukuInput = {
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
    student: StudentCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateWithoutBukuInput = {
    id_peminjaman?: number
    student_id: number
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
  }

  export type PeminjamanCreateOrConnectWithoutBukuInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutBukuInput, PeminjamanUncheckedCreateWithoutBukuInput>
  }

  export type PeminjamanCreateManyBukuInputEnvelope = {
    data: PeminjamanCreateManyBukuInput | PeminjamanCreateManyBukuInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanUpsertWithWhereUniqueWithoutBukuInput = {
    where: PeminjamanWhereUniqueInput
    update: XOR<PeminjamanUpdateWithoutBukuInput, PeminjamanUncheckedUpdateWithoutBukuInput>
    create: XOR<PeminjamanCreateWithoutBukuInput, PeminjamanUncheckedCreateWithoutBukuInput>
  }

  export type PeminjamanUpdateWithWhereUniqueWithoutBukuInput = {
    where: PeminjamanWhereUniqueInput
    data: XOR<PeminjamanUpdateWithoutBukuInput, PeminjamanUncheckedUpdateWithoutBukuInput>
  }

  export type PeminjamanUpdateManyWithWhereWithoutBukuInput = {
    where: PeminjamanScalarWhereInput
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyWithoutBukuInput>
  }

  export type StudentCreateWithoutPeminjamanInput = {
    nis: string
    name: string
    email?: string | null
    kelas: string
    jurusan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUncheckedCreateWithoutPeminjamanInput = {
    id?: number
    nis: string
    name: string
    email?: string | null
    kelas: string
    jurusan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutPeminjamanInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPeminjamanInput, StudentUncheckedCreateWithoutPeminjamanInput>
  }

  export type BukuCreateWithoutPeminjamanInput = {
    judul: string
    penulis: string
    tahun: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuUncheckedCreateWithoutPeminjamanInput = {
    id_buku?: number
    judul: string
    penulis: string
    tahun: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuCreateOrConnectWithoutPeminjamanInput = {
    where: BukuWhereUniqueInput
    create: XOR<BukuCreateWithoutPeminjamanInput, BukuUncheckedCreateWithoutPeminjamanInput>
  }

  export type StudentUpsertWithoutPeminjamanInput = {
    update: XOR<StudentUpdateWithoutPeminjamanInput, StudentUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<StudentCreateWithoutPeminjamanInput, StudentUncheckedCreateWithoutPeminjamanInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPeminjamanInput, StudentUncheckedUpdateWithoutPeminjamanInput>
  }

  export type StudentUpdateWithoutPeminjamanInput = {
    nis?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateWithoutPeminjamanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuUpsertWithoutPeminjamanInput = {
    update: XOR<BukuUpdateWithoutPeminjamanInput, BukuUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<BukuCreateWithoutPeminjamanInput, BukuUncheckedCreateWithoutPeminjamanInput>
    where?: BukuWhereInput
  }

  export type BukuUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: BukuWhereInput
    data: XOR<BukuUpdateWithoutPeminjamanInput, BukuUncheckedUpdateWithoutPeminjamanInput>
  }

  export type BukuUpdateWithoutPeminjamanInput = {
    judul?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuUncheckedUpdateWithoutPeminjamanInput = {
    id_buku?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateManyStudentInput = {
    id_peminjaman?: number
    buku_id: number
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
  }

  export type PeminjamanUpdateWithoutStudentInput = {
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
    buku?: BukuUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutStudentInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    buku_id?: IntFieldUpdateOperationsInput | number
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
  }

  export type PeminjamanUncheckedUpdateManyWithoutStudentInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    buku_id?: IntFieldUpdateOperationsInput | number
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
  }

  export type PeminjamanCreateManyBukuInput = {
    id_peminjaman?: number
    student_id: number
    tanggalPeminjaman?: Date | string
    batasKembali: Date | string
    status: $Enums.StatusPeminjaman
  }

  export type PeminjamanUpdateWithoutBukuInput = {
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
    student?: StudentUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutBukuInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
  }

  export type PeminjamanUncheckedUpdateManyWithoutBukuInput = {
    id_peminjaman?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    tanggalPeminjaman?: DateTimeFieldUpdateOperationsInput | Date | string
    batasKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPeminjamanFieldUpdateOperationsInput | $Enums.StatusPeminjaman
  }



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