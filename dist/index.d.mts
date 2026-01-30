import { MaybeRefOrGetter, ComputedRef } from 'vue';

interface UseToNumberOptions {
    /**
     * Method to use to convert the value to a number.
     *
     * Or a custom function for the conversion.
     *
     * @default 'parseFloat'
     */
    method?: 'parseFloat' | 'parseInt' | ((value: string | number) => number);
    /**
     * The base in mathematical numeral systems passed to `parseInt`.
     * Only works with `method: 'parseInt'`
     */
    radix?: number;
    /**
     * Replace NaN with zero
     *
     * @default false
     */
    nanToZero?: boolean;
}
/**
 * Reactively convert a string ref to number.
 *
 * @__NO_SIDE_EFFECTS__
 */
declare function useToNumber(value: MaybeRefOrGetter<number | string>, options?: UseToNumberOptions): ComputedRef<number>;

export { useToNumber };
export type { UseToNumberOptions };
