import { HydratedDocument } from 'mongoose';
export type CatDocument = HydratedDocument<Cat>;
export declare class Cat {
    name: string;
    age: number;
    breed: string;
}
export declare const CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<Cat, any, any, any, (import("mongoose").Document<unknown, any, Cat, any, import("mongoose").DefaultSchemaOptions> & Cat & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Cat, any, import("mongoose").DefaultSchemaOptions> & Cat & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Cat>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cat, import("mongoose").Document<unknown, {}, Cat, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Cat & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Cat, import("mongoose").Document<unknown, {}, Cat, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Cat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    age?: import("mongoose").SchemaDefinitionProperty<number, Cat, import("mongoose").Document<unknown, {}, Cat, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Cat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    breed?: import("mongoose").SchemaDefinitionProperty<string, Cat, import("mongoose").Document<unknown, {}, Cat, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Cat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Cat>;
