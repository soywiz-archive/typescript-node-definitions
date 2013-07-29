declare module "swiz" {
    export class Cidr {
        constructor(x:string, y?:string);
        isInCIDR(x:any):bool;
    }

    export class Valve {
        constructor(schema:IValveSchema, baton?:any);
        setSchema(schema:IValveSchema):Valve;
        addFinalValidator(func:(obj:any, callback:(err, cleaned) => void) => void):Valve;
        addChainValidator(name:string, description:string, func:(value:any, callback:(err, cleaned) => void) => void):void;
        check(obj:any, options:ICheckOptions, callback:(err:any, cleaned:any) => void);
        check(obj:any, callback:(err:any, cleaned:any) => void);
        checkUpdate(existing:any, obj:any, callback:(err:any, cleaned:any) => void);
        help(schema:IValveSchema):any;
    }

    export interface ICheckOptions {
        strict? : bool;
    }

    interface IValveSchema  {
        [index: string] : IValveSchemaMember;
    }

    interface IValveSchemaMember {}

    interface IValveSchemaMemberArray extends IValveSchemaMember{
        [index: string] : IValveSchemaMember;
    }

    export function Chain():IChain;

    export function chain():IChain;

    interface IChain extends IValveSchemaMember {
        getValidatorPos(name:string) : number;
        hasValidator(name:string) : number;
        getValidatorAtPos(pos:number) : IValidator;
        isUnique() : IChain;
        toUnique() : IChain;
        notIPBlacklisted() : IChain;
        isCIDR() : IChain;
        isEmail() : IChain;
        isUrl() : IChain;
        isAddressPair() : IChain;
        isIP() : IChain;
        isIPv4() : IChain;
        isIPv6() : IChain;
        isHostnameOrIp() : IChain;
        isAllowedFQDNOrIP(blacklist?:string[]) : IChain;
        isHostname() : IChain;
        isAlpha() : IChain;
        isAlphanumeric() : IChain;
        isNumeric() : IChain;
        isInt() : IChain;
        isLowercase() : IChain;
        isUppercase() : IChain;
        isDecimal() : IChain;
        isFloat() : IChain;
        notNull() : IChain;
        isNull() : IChain;
        notEmpty() : IChain;
        equals(arg:any) : IChain;
        contains(arg:any): IChain;
        notContains(arg): IChain;
        notIn(values:any[], caseSensitive?:bool): IChain;
        regex(pattern:string, modifiers);
        is(pattern:string, modifiers?:string): IChain;
        notRegex(pattern:string, modifiers?:string): IChain;
        not(pattern:string, modifiers:string) : IChain;
        len(min:number, max?:number): IChain;
        numItems(min:number, max:number): IChain;
        toFloat(): IChain;
        toInt(): IChain;
        toBoolean(): IChain;
        toBooleanStrict(): IChain;
        entityDecode(): IChain;
        entityEncode(): IChain;
        trim(chars?:string): IChain;
        ltrim(chars?:string): IChain;
        rtrim(chars:string): IChain;
        ifNull(replace:string): IChain;
        xss(is_image?:bool) : IChain;
        enumerated(map:any) : IChain;
        inArray(array:any[]) : IChain;
        isString() : IChain;
        isBoolean() : IChain;
        range(min:any, max:any) : IChain;
        optional() : IChain;
        isPort() : IChain;
        isV1UUID() : IChain;
        immutable() : IChain;
        updateRequired() : IChain;
        isArray(chain:IChain) : IChain;
        isHash(keyChain:IChain, valueChain:IChain)  : IChain;
        rename(target:string)  : IChain;
        custom(name:string)  : IChain;
    }

    export function defToValve(def:struct.IObj[]):IValveSchema[];

    export class Swiz {
        constructor(defs:struct.IObj[], options?:ISwizOptions);
        buildObject(obj:any, callback:(err:any, result:any) => void):void;
        buildObjectSync(obj:any):any;
        serializeJson(obj:any):string;
        serializeXml(obj:any):string;
        deserializeXml(xml:string):any;
        serialize(mode:SERIALIZATION, version:number, obj: ISerializable, callback:(err:any, result:string) => void);
        serializeForPagination(mode:SERIALIZATION, array:any[], metadata:any, callback:(err:any, result:string) => void);
        deserialize(mode:SERIALIZATION, version:number, raw:string, callback:(err:any, result:any) => void);
        getFieldDefinition(stype:string, name:string):struct.IField;
    }

    export interface ISerializable {
        getSerializerType() : string;
    }

    export interface ISwizOptions {
        stripNulls?: bool;
        stripSerializerType?: bool;
        for? : string;
    }

    interface IValidator {
        name: string;
        func(value, baton, callback)  : void;
        help: string;
    }

    export function stripSerializerTypes(obj:any):any;

    export module struct
    {
        export function Obj(name:string, options?:IObjOptions):IObj;
        export function Field(name:string, options?:IFieldOptions):IField;
        export function coerce(value:any, coerceTo:string):any;

        interface IObj {
            name : string;
            options : IObjOptions;
            singular : string;
            plural : string;
            fields : IField[];
        }

        interface IField {
            name : string;
            options : IFieldOptions;
            src : string;
            singular  : string;
            plural : string;
            desc? : string;
            val? : IChain;
            attribute : bool;
            enumerated : bool;
            ignorePublic : bool;
            filterFrom : string[];
            coerceTo :any;
        }

        export interface IObjOptions {
            singular? : string;
            plural? : string;
            fields? : IField[];
        }

        export interface IFieldOptions {
            src? : string;
            singular? : string;
            plural? : string;
            desc? : string;
            val? : IChain;
            attribute? : bool;
            enumerated? : any;
            ignorePublic? : bool;
            filterFrom? : string[];
            coerceTo? : string;
        }
    }

    export enum SERIALIZATION {
        SERIALIZATION_JSON,
        SERIALIZATION_XML
    }
}
