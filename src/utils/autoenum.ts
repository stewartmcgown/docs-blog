/**
 * Bit of typescript magic to convert a list of strings into an enumerable type.
 *
 * This auto-generated enum can be used as a type, but also behaves as an object with string keys
 * and string values.
 *
 * ```ts
 * const UnderlyingEnum = Enum('A', 'B', 'C');
 * type EnumType = keyof typeof UnderlyingEnum;
 *
 * const myVar: EnumType = 'A' | 'B' | 'C'
 * ```
 *
 * You can also lookup in reverse, so that if you need to use the enum for a non-typed property
 * there will always be a string analogue.
 *
 * ```ts
 * const a = classToPlain(MyClass, { groups: [UnderlyingEnum.A, UnderlyingEnum['B']] })
 * ```
 *
 * This works because the output is just a non-writable const object.
 *
 * @param args a list of members of the enum
 * @returns an immutable enum containing keys that are the same as their values
 */
export const Enum = <K extends string>(...args: K[]): { [P in K]: P } =>
  ({
    ...args.reduce(
      (r, k) =>
        Object.defineProperty(r, k, {
          enumerable: true,
          configurable: true,
          writable: false,
          value: k,
        }),
      {},
    ),
    *[Symbol.iterator]() {
      const properties = Object.keys(this);
      for (const i of properties) {
        yield [i, this[i]];
      }
    },
  } as { [P in K]: P });
