type TMods = Record<string, string | boolean>;

export function classNames(
    cls: string,
    mods: TMods,
    additional: Array<string | undefined>,
): string {
    const modsValues = Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className, _]) => className);
    const filteredAdditional = [...additional].filter(Boolean);

    if(filteredAdditional.length === 0){
        if(modsValues.length === 0){
            return cls;
        }

        return [cls, ...modsValues].join(" ");
    }

    return [cls, [...additional].filter(Boolean), ...modsValues].join(" ");
}
