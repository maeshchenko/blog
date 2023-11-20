type TMods = Record<string, string | boolean>;

export function classNames(
    cls: string,
    mods: TMods,
    additional: Array<string | undefined>,
): string {
    const modsValues = Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className, _]) => className);
    return [cls, [...additional].filter(Boolean), ...modsValues].join(
        " ",
    );
}
