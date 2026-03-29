import { HydratedDocument } from 'mongoose';
import { Organization } from './user-organization.schema';
export type ItemDocument = HydratedDocument<Item>;
export declare class Item {
    itemNo: string;
    itemName: string;
    itemUnit: string;
    itemStock: number;
    description: string;
    unitPrice: number;
    isActive: boolean;
    itemImage: string;
    organization: Organization[];
}
export declare const ItemSchema: import("mongoose").Schema<Item, import("mongoose").Model<Item, any, any, any, (import("mongoose").Document<unknown, any, Item, any, import("mongoose").DefaultSchemaOptions> & Item & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Item, any, import("mongoose").DefaultSchemaOptions> & Item & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Item>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Item, import("mongoose").Document<unknown, {}, Item, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    itemNo?: import("mongoose").SchemaDefinitionProperty<string, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    itemName?: import("mongoose").SchemaDefinitionProperty<string, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    itemUnit?: import("mongoose").SchemaDefinitionProperty<string, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    itemStock?: import("mongoose").SchemaDefinitionProperty<number, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    unitPrice?: import("mongoose").SchemaDefinitionProperty<number, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    itemImage?: import("mongoose").SchemaDefinitionProperty<string, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    organization?: import("mongoose").SchemaDefinitionProperty<Organization[], Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Item>;
