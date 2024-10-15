export const ADMoveObjectListDto_RequestSchema = {
    type: 'object',
    properties: {
        Objects: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AdObjectGroupMemberDto:Request'
            }
        },
        DestinationOUPath: {
            type: 'string'
        }
    }
} as const;

export const AdObjectMemberofDto_RequestSchema = {
    type: 'object',
    properties: {
        ObjectDn: {
            type: 'string'
        }
    }
} as const;

export const AdObjectsMemberofListDto_RequestSchema = {
    type: 'object',
    properties: {
        Objects: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AdObjectMemberofDto:Request'
            }
        },
        ObjectDn: {
            type: 'string'
        }
    }
} as const;

export const AdObjectMemberofDtoSchema = {
    type: 'object',
    properties: {
        UserDn: {
            type: 'string'
        },
        ObjectName: {
            type: 'string'
        }
    }
} as const;

export const AdObjectsMemberofListDtoSchema = {
    type: 'object',
    properties: {
        Objects: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AdObjectMemberofDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const GroupMangaedByDto_RequestSchema = {
    type: 'object',
    properties: {
        ObjectDn: {
            type: 'string'
        },
        ManagedBy: {
            type: 'string'
        }
    }
} as const;

export const GroupMangaedByDtoSchema = {
    type: 'object',
    properties: {
        ManagedBy: {
            type: 'string'
        },
        ObjectName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AdObjectDetailsDtoSchema = {
    type: 'object',
    properties: {
        ObjectDn: {
            type: 'string'
        },
        Protection: {
            type: 'boolean'
        }
    }
} as const;

export const AdObjectGroupMemberDtoSchema = {
    type: 'object',
    properties: {
        UserDn: {
            type: 'string'
        },
        Protection: {
            type: 'boolean'
        },
        ObjectName: {
            type: 'string'
        }
    }
} as const;

export const AdObjectGroupMemberDto_RequestSchema = {
    type: 'object',
    properties: {
        ObjectDn: {
            type: 'string'
        }
    }
} as const;

export const AdObjectsGroupMemberListDtoSchema = {
    type: 'object',
    properties: {
        Objects: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AdObjectGroupMemberDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AdObjectsGroupMemberListDto_RequestSchema = {
    type: 'object',
    properties: {
        Objects: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AdObjectGroupMemberDto:Request'
            }
        },
        ObjectDn: {
            type: 'string'
        }
    }
} as const;

export const ADUserAccountSettingDto_RequestSchema = {
    type: 'object',
    properties: {
        UserDn: {
            type: 'string'
        },
        SetToNeverExpire: {
            type: 'boolean'
        },
        ExpiryDateTime: {
            type: 'string',
            format: 'date-time'
        }
    }
} as const;

export const ADUserAccountSettingDtoSchema = {
    type: 'object',
    properties: {
        ExpiryDateTime: {
            type: 'string',
            format: 'date-time'
        },
        SetToNeverExpire: {
            type: 'boolean'
        },
        RequirePasswordOnNextLogon: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AdUsersDto_RequestSchema = {
    type: 'object',
    properties: {
        AdUsers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AdUserDto:Request'
            }
        }
    }
} as const;

export const AdUserDto_RequestSchema = {
    type: 'object',
    properties: {
        UserDn: {
            type: 'string'
        }
    }
} as const;

export const AdUserPasswordDtoSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        },
        RequirePasswordOnNextLogon: {
            type: 'boolean'
        },
        UserDn: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryObjectDtoSchema = {
    type: 'object',
    properties: {
        UpnSuffix: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        RequirePasswordOnNextLogon: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        OuPath: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryObjectDto_RequestSchema = {
    required: ['DisplayName', 'OrganizationId', 'SystemName'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        UpnSuffix: {
            type: 'string'
        }
    }
} as const;

export const AdObjectsDtoSchema = {
    type: 'object',
    properties: {
        AdObjects: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AdObjectDto:Request'
            }
        }
    }
} as const;

export const AdObjectDto_RequestSchema = {
    type: 'object',
    properties: {
        ObjectDn: {
            type: 'string'
        },
        ObjectType: {
            type: 'string'
        }
    }
} as const;

export const OrganizationObjectsDtoSchema = {
    type: 'object',
    properties: {
        OrganizationObjects: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/OrganizationObjectDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const OrganizationObjectDto_ListSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        DistinguishedName: {
            type: 'string'
        },
        Enabled: {
            type: 'boolean'
        },
        ObjectType: {
            type: 'string'
        },
        ObjectDetailedType: {
            type: 'string'
        }
    }
} as const;

export const ADUserGeneralProfileDtoSchema = {
    type: 'object',
    properties: {
        ObjectType: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Initials: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        StreetAddress: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        CountryId: {
            type: 'integer',
            format: 'int32'
        },
        CountryAbbreviation: {
            type: 'string'
        },
        JobTitle: {
            type: 'string'
        },
        Company: {
            type: 'string'
        },
        Department: {
            type: 'string'
        },
        BusinessPhone: {
            type: 'string'
        },
        HomePhone: {
            type: 'string'
        },
        MobilePhone: {
            type: 'string'
        },
        Fax: {
            type: 'string'
        },
        WebPage: {
            type: 'string'
        },
        Notes: {
            type: 'string'
        },
        Pager: {
            type: 'string'
        },
        UserManager: {
            '$ref': '#/components/schemas/ManagerDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ManagerDtoSchema = {
    type: 'object',
    properties: {
        Email: {
            type: 'string'
        }
    }
} as const;

export const UserSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int64'
        },
        username: {
            type: 'string'
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        phone: {
            type: 'string'
        },
        userStatus: {
            type: 'integer',
            description: 'User Status',
            format: 'int32'
        }
    },
    xml: {
        name: 'User'
    }
} as const;

export const ApiResponseSchema = {
    type: 'object',
    properties: {
        code: {
            type: 'integer',
            format: 'int32'
        },
        type: {
            type: 'string'
        },
        message: {
            type: 'string'
        }
    }
} as const;

export const AddUserDtoSchema = {
    required: ['EmailAddress', 'Password', 'UserName'],
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            pattern: '^[A-Za-z0-9_-]{1,20}$',
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        Password: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UsersSearchDtoSchema = {
    type: 'object',
    properties: {
        UserName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        IsBilling: {
            type: 'boolean'
        },
        IsDefaultCreditCardEnabled: {
            type: 'boolean'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        Company: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        DirectChild: {
            type: 'boolean'
        },
        ExactNameMatch: {
            type: 'boolean'
        },
        CustomersOnly: {
            type: 'boolean'
        },
        StaffMembersOnly: {
            type: 'boolean'
        },
        CurrentPage: {
            type: 'integer',
            format: 'int32'
        },
        PageSize: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UsersDtoSchema = {
    type: 'object',
    properties: {
        Users: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserDtoSchema = {
    required: ['EmailAddress', 'Password', 'UserName'],
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            pattern: '^[A-Za-z0-9_-]{1,20}$',
            type: 'string'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        RoleName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        IsSubadmin: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        FullName: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        DisabledBy: {
            type: 'integer',
            format: 'int32'
        },
        IsDefaultCreditCardEnabled: {
            type: 'boolean'
        },
        BillingProfileId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserDto_ListSchema = {
    required: ['EmailAddress', 'Password', 'UserName'],
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            pattern: '^[A-Za-z0-9_-]{1,20}$',
            type: 'string'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        RoleName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        IsSubadmin: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        FullName: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UserUpdateDtoSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        Password: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AddUserDto_RequestSchema = {
    required: ['EmailAddress', 'Password', 'RoleId', 'UserName'],
    type: 'object',
    properties: {
        UserName: {
            pattern: '^[A-Za-z0-9_-]{1,20}$',
            type: 'string',
            description: 'User name cannot be more than 20 characters long and white space is not allowed.',
            default: 'tom'
        },
        EmailAddress: {
            type: 'string',
            description: 'Email address should be valid.',
            default: 'tom@example.com'
        },
        RoleId: {
            type: 'integer',
            description: "You can get role id by calling 'GET /user-roles'",
            format: 'int32'
        },
        Password: {
            type: 'string',
            description: 'Password should be complex, if the password complexity is enabled.'
        },
        Description: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            description: 'Set it true if want to disable user.',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UserUpdateDto_RequestSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        Password: {
            type: 'string',
            description: 'Password should be complex, if the password complexity is enabled.'
        },
        Description: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            description: 'Set it true if want to disable user.',
            format: 'int32'
        }
    }
} as const;

export const UserDisableOptionDtoSchema = {
    type: 'object',
    properties: {
        DisableOption: {
            type: 'string',
            description: 'possible values are as follows',
            enum: ['restrictpanelaccess', 'suspenduser', 'restrictpanelaccessandsuspenduser']
        }
    }
} as const;

export const UserChangePasswordDtoSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        Password: {
            type: 'string',
            description: 'New password.'
        }
    }
} as const;

export const UserProfileDto_RequestSchema = {
    required: ['City', 'Country', 'EmailAddress', 'FirstName', 'LastName', 'PhoneNo', 'State', 'StreetAddress'],
    type: 'object',
    properties: {
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        Company: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        Country: {
            type: 'integer',
            format: 'int32'
        },
        State: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        StreetAddress: {
            type: 'string'
        },
        StreetAddress2: {
            type: 'string'
        },
        PostalCode: {
            type: 'string'
        },
        PhoneNo: {
            type: 'string'
        },
        FaxNo: {
            type: 'string'
        },
        SocialSecurityNo: {
            type: 'string'
        },
        CustomFields: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserCustomFieldDto'
            }
        }
    }
} as const;

export const UserProfileDtoSchema = {
    required: ['City', 'EmailAddress', 'FirstName', 'LastName', 'PhoneNo', 'State', 'StreetAddress'],
    type: 'object',
    properties: {
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        Company: {
            type: 'string'
        },
        Country: {
            type: 'integer',
            format: 'int32'
        },
        State: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        StreetAddress: {
            type: 'string'
        },
        StreetAddress2: {
            type: 'string'
        },
        PostalCode: {
            type: 'string'
        },
        PhoneNo: {
            type: 'string'
        },
        FaxNo: {
            type: 'string'
        },
        SocialSecurityNo: {
            type: 'string'
        },
        CustomFieldXml: {
            type: 'string'
        },
        CustomFields: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserCustomFieldDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserCustomFieldDtoSchema = {
    type: 'object',
    properties: {
        CustomFieldId: {
            type: 'integer',
            format: 'int32'
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const BillingProfileDtoSchema = {
    required: ['BillingAddress', 'BillingCity', 'BillingEmail', 'BillingPhone', 'FirstName', 'LastName', 'State', 'ZipCode'],
    type: 'object',
    properties: {
        BillingProfileId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        BillingAddress: {
            type: 'string'
        },
        BillingCity: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        Country: {
            type: 'integer',
            format: 'int32'
        },
        ZipCode: {
            type: 'string'
        },
        BillingPhone: {
            type: 'string'
        },
        BillingFax: {
            type: 'string'
        },
        BillingEmail: {
            type: 'string'
        },
        CreditLimit: {
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        DefaultDiscount: {
            maximum: 100,
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        CreditCardTypeId: {
            maximum: 2147483647,
            minimum: 0,
            type: 'integer',
            format: 'int32'
        },
        CreditCardType: {
            type: 'string'
        },
        CreditCardNo: {
            type: 'string'
        },
        ExpireDate: {
            type: 'string',
            format: 'date-time'
        },
        Cvv2: {
            type: 'string'
        },
        IsEnabled: {
            type: 'boolean'
        },
        IsDefault: {
            type: 'boolean'
        },
        CustomFields: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserCustomFieldDto'
            }
        },
        CustomFieldXml: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const BillingProfileDto_ListSchema = {
    required: ['BillingAddress', 'BillingCity', 'BillingEmail', 'BillingPhone', 'FirstName', 'LastName', 'State', 'ZipCode'],
    type: 'object',
    properties: {
        BillingProfileId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        BillingAddress: {
            type: 'string'
        },
        BillingCity: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        Country: {
            type: 'integer',
            format: 'int32'
        },
        ZipCode: {
            type: 'string'
        },
        BillingPhone: {
            type: 'string'
        },
        BillingFax: {
            type: 'string'
        },
        BillingEmail: {
            type: 'string'
        },
        CreditLimit: {
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        DefaultDiscount: {
            maximum: 100,
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        CreditCardTypeId: {
            maximum: 2147483647,
            minimum: 0,
            type: 'integer',
            format: 'int32'
        },
        CreditCardType: {
            type: 'string'
        },
        CreditCardNo: {
            type: 'string'
        },
        ExpireDate: {
            type: 'string',
            format: 'date-time'
        },
        Cvv2: {
            type: 'string'
        },
        IsEnabled: {
            type: 'boolean'
        },
        IsDefault: {
            type: 'boolean'
        },
        CustomFields: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserCustomFieldDto'
            }
        },
        CustomFieldXml: {
            type: 'string'
        }
    }
} as const;

export const BillingProfileDto_RequestSchema = {
    required: ['BillingAddress', 'BillingCity', 'BillingEmail', 'BillingPhone', 'FirstName', 'LastName', 'State', 'ZipCode'],
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        BillingAddress: {
            type: 'string'
        },
        BillingCity: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        Country: {
            type: 'integer',
            format: 'int32'
        },
        ZipCode: {
            type: 'string'
        },
        BillingPhone: {
            type: 'string'
        },
        BillingFax: {
            type: 'string'
        },
        BillingEmail: {
            type: 'string'
        },
        CreditLimit: {
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        DefaultDiscount: {
            maximum: 100,
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        CreditCardTypeId: {
            maximum: 2147483647,
            minimum: 0,
            type: 'integer',
            format: 'int32'
        },
        CreditCardType: {
            type: 'string'
        },
        CreditCardNo: {
            type: 'string'
        },
        ExpireDate: {
            type: 'string',
            format: 'date-time'
        },
        Cvv2: {
            type: 'string'
        },
        IsEnabled: {
            type: 'boolean'
        },
        IsDefault: {
            type: 'boolean'
        },
        CustomFields: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserCustomFieldDto'
            }
        },
        CustomFieldXml: {
            type: 'string'
        }
    }
} as const;

export const BillingProfileSearchDtoSchema = {
    type: 'object',
    properties: {
        UserName: {
            type: 'string'
        },
        defaultOnly: {
            type: 'string'
        },
        CreditCardTypeId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        IncludeUsersProfile: {
            type: 'boolean'
        },
        CurrentPage: {
            type: 'integer',
            format: 'int32'
        },
        PageSize: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const BillingProfilesDtoSchema = {
    type: 'object',
    properties: {
        BillingProfiles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/BillingProfileDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const StatusDtoSchema = {
    type: 'object',
    properties: {
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const StatsListDtoSchema = {
    type: 'object',
    properties: {
        Stats: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/StatsDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const StatsDtoSchema = {
    type: 'object',
    properties: {
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const StatsDto_ListSchema = {
    type: 'object',
    properties: {
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const TokenDtoSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        AuthToken: {
            type: 'string'
        },
        ExpiresIn: {
            type: 'integer',
            format: 'int32'
        },
        IssuedOn: {
            type: 'string'
        },
        IsExpired: {
            type: 'boolean'
        }
    }
} as const;

export const AuthenticationDto_RequestSchema = {
    required: ['LoginName', 'Password'],
    type: 'object',
    properties: {
        LoginName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        ApplicationName: {
            type: 'string',
            description: 'Client Application Name',
            default: 'hcapiconsole'
        },
        ExpiresIn: {
            type: 'integer',
            description: 'life of token, its value is in hours. Minimum 1 and Maximum 720.',
            format: 'int32',
            default: 1
        }
    }
} as const;

export const AuthenticationDtoSchema = {
    required: ['LoginName', 'Password'],
    type: 'object',
    properties: {
        LoginName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        ExpiresIn: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const QuotaReportDtoSchema = {
    type: 'object',
    properties: {
        ReportResources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/QuotaResourceDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const BillingReportsDtoSchema = {
    type: 'object',
    properties: {
        BillingReports: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/BillingReportDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const BillingReportDtoSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        TotalSoldPlans: {
            type: 'integer',
            format: 'int32'
        },
        TotalInvoices: {
            type: 'integer',
            format: 'int32'
        },
        Balance: {
            type: 'number',
            format: 'double'
        },
        TotalInvoiceAmounts: {
            type: 'number',
            format: 'double'
        },
        TotalPaymentsReceived: {
            type: 'number',
            format: 'double'
        },
        CreditLimit: {
            type: 'number',
            format: 'double'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const IncomeStatsDtoSchema = {
    type: 'object',
    properties: {
        TotalInvoiceAmounts: {
            type: 'integer',
            format: 'int32'
        },
        TotalRevenue: {
            type: 'number',
            format: 'double'
        },
        IncomeDue: {
            type: 'number',
            format: 'double'
        },
        TotalPaymentsReceived: {
            type: 'number',
            format: 'double'
        },
        TotalSubscriptionsCount: {
            type: 'integer',
            format: 'int32'
        },
        TotalSubscriptionsAmount: {
            type: 'number',
            format: 'double'
        },
        TotalTaxes: {
            type: 'number',
            format: 'double'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const InvoiceStatsDtoSchema = {
    type: 'object',
    properties: {
        TotalInvoices: {
            type: 'integer',
            format: 'int32'
        },
        TotalInvoiceAmounts: {
            type: 'number',
            format: 'double'
        },
        TotalDueInvoices: {
            type: 'integer',
            format: 'int32'
        },
        TotalDueInvoicesAmount: {
            type: 'number',
            format: 'double'
        },
        TotalPaidInvoices: {
            type: 'integer',
            format: 'int32'
        },
        TotalPaidInvoicesAmount: {
            type: 'number',
            format: 'double'
        },
        TotalCancelledInvoices: {
            type: 'integer',
            format: 'int32'
        },
        TotalCancelledInvoicesAmount: {
            type: 'number',
            format: 'double'
        },
        TotalChargedBackInvoices: {
            type: 'integer',
            format: 'int32'
        },
        TotalChargedBackInvoicesAmount: {
            type: 'number',
            format: 'double'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const FundsStatsDtoSchema = {
    type: 'object',
    properties: {
        TotalInvoiceAmounts: {
            type: 'number',
            format: 'double'
        },
        ConsumedFunds: {
            type: 'number',
            format: 'double'
        },
        RemainingFunds: {
            type: 'number',
            format: 'double'
        },
        TotalTaxes: {
            type: 'number',
            format: 'double'
        },
        TotalPaymentsDone: {
            type: 'number',
            format: 'double'
        },
        TotalSubscriptionsCount: {
            type: 'integer',
            format: 'int32'
        },
        TotalSubscriptionsAmount: {
            type: 'number',
            format: 'double'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailboxStatsReportDtoSchema = {
    type: 'object',
    properties: {
        TotalMailboxCount: {
            type: 'integer',
            format: 'int32'
        },
        TotalMailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        TotalEnabledMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalDisabledMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalOWAEnabledMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalIMAPEnabledMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalMAPIEnabledMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalPOPEnabldMailbxoes: {
            type: 'integer',
            format: 'int32'
        },
        TotalActiveSyncMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalArchiveMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalArchiveMailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        TotalBBEnabledMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalJournalMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalPFMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalADSyncMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailboxReportDtoSchema = {
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxType: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        IsNewUser: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        MaildomainName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ActiveSync: {
            type: 'boolean'
        },
        ActiveSyncPolicy: {
            type: 'string'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        Flag: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        SAMAccount: {
            type: 'string'
        },
        PrimarySMTPAddress: {
            type: 'string'
        },
        Guid: {
            type: 'string'
        },
        MailboxLitigationHoldEnabled: {
            type: 'boolean'
        },
        ArchiveMailboxId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabase: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailboxReportListDtoSchema = {
    type: 'object',
    properties: {
        Mailboxes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeMailboxReportDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeCustomReportsDtoSchema = {
    type: 'object',
    properties: {
        ExchangeCustomReports: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeCustomReportDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeCustomReportDtoSchema = {
    required: ['ExchangeCommand', 'ReportName'],
    type: 'object',
    properties: {
        ReportId: {
            type: 'integer',
            format: 'int32'
        },
        ReportName: {
            type: 'string'
        },
        ReportDescription: {
            type: 'string'
        },
        ExchangeCommand: {
            type: 'string'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ExchangeCustomReportOutputFields: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeGenericReportArgumentsDto'
            }
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeGenericReportArgumentsDtoSchema = {
    type: 'object',
    properties: {
        FieldName: {
            type: 'string'
        },
        FieldValue: {
            type: 'string'
        }
    }
} as const;

export const ExchangeGenericReportListDtoSchema = {
    type: 'object',
    properties: {
        ReportName: {
            type: 'string'
        },
        ReportDescription: {
            type: 'string'
        },
        ExchangeCommand: {
            type: 'string'
        },
        Records: {
            type: 'array',
            items: {
                type: 'object',
                additionalProperties: {
                    type: 'string'
                }
            }
        },
        RecordCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ConsumedQuotaResourceDtoSchema = {
    type: 'object',
    properties: {
        RoleName: {
            type: 'string'
        },
        ResourceName: {
            type: 'string'
        },
        ResourceDisplayName: {
            type: 'string'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ConsumedQuotaReportDtoSchema = {
    type: 'object',
    properties: {
        ReportResources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ConsumedQuotaResourceDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DailyResUsageDtoSchema = {
    type: 'object',
    properties: {
        ResourceName: {
            type: 'string'
        },
        ResourceDisplayName: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        Usage: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DailyUsageDto'
            }
        }
    }
} as const;

export const DailyUsageDtoSchema = {
    type: 'object',
    properties: {
        Count: {
            type: 'integer',
            format: 'int64'
        },
        DateText: {
            type: 'string'
        }
    }
} as const;

export const DailyResUsageReportDtoSchema = {
    type: 'object',
    properties: {
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DailyResUsageDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const PanelStatsDtoSchema = {
    type: 'object',
    properties: {
        Customers: {
            type: 'integer',
            format: 'int32'
        },
        StaffMembers: {
            type: 'integer',
            format: 'int32'
        },
        ServicePlans: {
            type: 'integer',
            format: 'int32'
        },
        SoldPlans: {
            type: 'integer',
            format: 'int32'
        },
        Messages: {
            type: 'integer',
            format: 'int32'
        },
        ClientTickets: {
            type: 'integer',
            format: 'int32'
        },
        MyTickets: {
            type: 'integer',
            format: 'int32'
        },
        SubscribedPlans: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DetailKeyValuePairDtoSchema = {
    type: 'object',
    properties: {
        Key: {
            type: 'string'
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const QuotaResourceDtoSchema = {
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceName: {
            type: 'string'
        },
        ResourceDisplayName: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        ResourceComponent: {
            type: 'string'
        },
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        },
        IsComposite: {
            type: 'boolean'
        },
        AllocatedQty: {
            type: 'integer',
            format: 'int32'
        },
        SoldQty: {
            type: 'integer',
            format: 'int32'
        },
        UsedQty: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const StatesDtoSchema = {
    type: 'object',
    properties: {
        States: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/StateDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const StateDtoSchema = {
    type: 'object',
    properties: {
        StateId: {
            type: 'integer',
            format: 'int32'
        },
        StateName: {
            type: 'string'
        },
        StateCode: {
            type: 'string'
        },
        CountryId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const CountriesDtoSchema = {
    type: 'object',
    properties: {
        Countries: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CountryDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CountryDto_ListSchema = {
    type: 'object',
    properties: {
        CountryId: {
            type: 'integer',
            format: 'int32'
        },
        CountryName: {
            type: 'string'
        },
        Abbrivation: {
            type: 'string'
        },
        NumericCode: {
            type: 'integer',
            format: 'int32'
        },
        ZipCodeRegex: {
            type: 'string'
        }
    }
} as const;

export const CountryDtoSchema = {
    type: 'object',
    properties: {
        CountryId: {
            type: 'integer',
            format: 'int32'
        },
        CountryName: {
            type: 'string'
        },
        Abbrivation: {
            type: 'string'
        },
        NumericCode: {
            type: 'integer',
            format: 'int32'
        },
        ZipCodeRegex: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const LanguagesDtoSchema = {
    type: 'object',
    properties: {
        Languages: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/LanguageDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const LanguageDtoSchema = {
    type: 'object',
    properties: {
        LanguageId: {
            type: 'integer',
            format: 'int32'
        },
        LanguageName: {
            type: 'string'
        },
        LanguageDisplayName: {
            type: 'string'
        },
        IsRtl: {
            type: 'boolean'
        },
        LanguageStatus: {
            type: 'boolean'
        }
    }
} as const;

export const TypesItemsDtoSchema = {
    type: 'object',
    properties: {
        TypeItems: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/TypeItemsDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const TypeItemsDtoSchema = {
    type: 'object',
    properties: {
        TypeItemId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        DisplayIndex: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ErrorLogsDtoSchema = {
    type: 'object',
    properties: {
        ErrorLogs: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ErrorLogDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ErrorLogDto_ListSchema = {
    type: 'object',
    properties: {
        ErrorLogId: {
            type: 'string'
        },
        SourceName: {
            type: 'string'
        },
        MethodName: {
            type: 'string'
        },
        ExpceptionObj: {
            '$ref': '#/components/schemas/Object'
        },
        InputParam: {
            '$ref': '#/components/schemas/Object'
        },
        ExceptionMsg: {
            type: 'string'
        },
        ExceptionType: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        }
    }
} as const;

export const ErrorLogDtoSchema = {
    type: 'object',
    properties: {
        ErrorLogId: {
            type: 'string'
        },
        SourceName: {
            type: 'string'
        },
        MethodName: {
            type: 'string'
        },
        ExpceptionObj: {
            '$ref': '#/components/schemas/Object'
        },
        InputParam: {
            '$ref': '#/components/schemas/Object'
        },
        ExceptionMsg: {
            type: 'string'
        },
        ExceptionType: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ObjectSchema = {
    type: 'object'
} as const;

export const AuditsDtoSchema = {
    type: 'object',
    properties: {
        AuditList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AuditLogDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AuditLogDto_ListSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        AuditLogId: {
            type: 'integer',
            format: 'int32'
        },
        ActionName: {
            type: 'string'
        },
        RequestUri: {
            type: 'string'
        },
        SourceObjectName: {
            type: 'string'
        },
        SourceObjectId: {
            type: 'integer',
            format: 'int32'
        },
        SourceObjectType: {
            type: 'string'
        },
        HttpMethod: {
            type: 'string'
        },
        HttpResponseCode: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        UserName: {
            type: 'string'
        },
        LastLoginTime: {
            type: 'string',
            format: 'date-time'
        },
        IPAddress: {
            type: 'string'
        }
    }
} as const;

export const AuditLogDtoSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        AuditLogId: {
            type: 'integer',
            format: 'int32'
        },
        ActionName: {
            type: 'string'
        },
        RequestUri: {
            type: 'string'
        },
        SourceObjectName: {
            type: 'string'
        },
        SourceObjectId: {
            type: 'integer',
            format: 'int32'
        },
        SourceObjectType: {
            type: 'string'
        },
        HttpMethod: {
            type: 'string'
        },
        HttpResponseCode: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        UserName: {
            type: 'string'
        },
        LastLoginTime: {
            type: 'string',
            format: 'date-time'
        },
        IPAddress: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CustomFieldsDtoSchema = {
    type: 'object',
    properties: {
        CustomFields: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CustomFieldDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CustomFieldDto_ListSchema = {
    type: 'object',
    properties: {
        CustomFieldId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        FieldName: {
            type: 'string'
        },
        ProfileFlag: {
            type: 'string'
        },
        Optional: {
            type: 'boolean'
        },
        Tag: {
            type: 'string'
        }
    }
} as const;

export const CustomFieldDto_AddUpdateSchema = {
    type: 'object',
    properties: {
        FieldName: {
            type: 'string'
        },
        ProfileFlag: {
            type: 'string'
        },
        Optional: {
            type: 'boolean'
        },
        Tag: {
            type: 'string'
        }
    }
} as const;

export const CustomFieldDtoSchema = {
    type: 'object',
    properties: {
        CustomFieldId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        FieldName: {
            type: 'string'
        },
        ProfileFlag: {
            type: 'string'
        },
        Optional: {
            type: 'boolean'
        },
        Tag: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ConfigurationItemsDtoSchema = {
    type: 'object',
    properties: {
        ConfigurationItems: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ConfigurationItemDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ConfigurationItemDto_ListSchema = {
    type: 'object',
    properties: {
        SystemName: {
            type: 'string'
        },
        ServerRoleConfigured: {
            type: 'boolean'
        },
        ControlValues: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ControlValueDto'
            }
        },
        ItemMetaData: {
            '$ref': '#/components/schemas/ConfigurationItemMetaDataDto'
        }
    }
} as const;

export const ConfigurationItemDtoSchema = {
    type: 'object',
    properties: {
        SystemName: {
            type: 'string'
        },
        ServerRoleConfigured: {
            type: 'boolean'
        },
        ControlValues: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ControlValueDto'
            }
        },
        ItemMetaData: {
            '$ref': '#/components/schemas/ConfigurationItemMetaDataDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ConfigurationItemsInputDtoSchema = {
    type: 'object',
    properties: {
        ConfigurationItems: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ConfigurationItemInputDto'
            }
        }
    }
} as const;

export const ConfigurationItemInputDtoSchema = {
    type: 'object',
    properties: {
        SystemName: {
            type: 'string'
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const ControlValueDtoSchema = {
    type: 'object',
    properties: {
        Value: {
            type: 'string'
        },
        IsEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const ConfigurationItemMetaDataDtoSchema = {
    type: 'object',
    properties: {
        ConfigurationItemId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        ControlLabel: {
            type: 'string'
        },
        DefaultValue: {
            type: 'string'
        },
        DataSource: {
            type: 'string'
        },
        ControlsTypeId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayIndex: {
            type: 'integer',
            format: 'int32'
        },
        GroupId: {
            type: 'integer',
            format: 'int32'
        },
        HelpText: {
            type: 'string'
        },
        ControlTypeName: {
            type: 'string'
        },
        RegexPattern: {
            type: 'string'
        },
        ValidatorType: {
            type: 'string'
        },
        DependentId: {
            type: 'integer',
            format: 'int32'
        },
        IsSuperior: {
            type: 'boolean'
        },
        CssClasses: {
            type: 'string'
        },
        DependentClasses: {
            type: 'string'
        }
    }
} as const;

export const LoggingValuesDto_RequestSchema = {
    type: 'object',
    properties: {
        LoggingKeyvalues: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/LoggingValueDto:Request'
            }
        },
        ServerIp: {
            type: 'string'
        }
    }
} as const;

export const LoggingValuesDto_Request1Schema = {
    type: 'object',
    properties: {
        LoggingKeyvalues: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/LoggingValueDto:Request'
            }
        }
    }
} as const;

export const LoggingValueDto_RequestSchema = {
    type: 'object',
    properties: {
        Key: {
            type: 'string'
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const LoggingValuesDtoSchema = {
    type: 'object',
    properties: {
        LoggingKeyvalues: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/LoggingValueDto:List'
            }
        },
        ServerIp: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const LoggingValueDto_ListSchema = {
    type: 'object',
    properties: {
        Key: {
            type: 'string'
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const LoggingValueDtoSchema = {
    type: 'object',
    properties: {
        Key: {
            type: 'string'
        },
        Value: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const LogFileDtoSchema = {
    type: 'object',
    properties: {
        ServerIp: {
            type: 'string'
        },
        LogFileName: {
            type: 'string'
        },
        LogFilePath: {
            type: 'string'
        },
        LogFileContent: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SiteproDto_requestSchema = {
    type: 'object',
    properties: {
        Url: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        IsEnable: {
            type: 'boolean'
        },
        UseHostSettings: {
            type: 'boolean'
        },
        IsHostEnable: {
            type: 'boolean'
        }
    }
} as const;

export const SiteproDtoSchema = {
    type: 'object',
    properties: {
        Url: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        IsEnable: {
            type: 'boolean'
        },
        UseHostSettings: {
            type: 'boolean'
        },
        IsHostEnable: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SpamExpertsConfigDto_RequestSchema = {
    type: 'object',
    properties: {
        Url: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        MXRecords: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        IsEnable: {
            type: 'boolean'
        },
        UseHostSettings: {
            type: 'boolean'
        },
        IsHostEnable: {
            type: 'boolean'
        }
    }
} as const;

export const SpamExpertsConfigDtoSchema = {
    type: 'object',
    properties: {
        Url: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        MXRecords: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        IsEnable: {
            type: 'boolean'
        },
        UseHostSettings: {
            type: 'boolean'
        },
        IsHostEnable: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UsersUsageReportDtoSchema = {
    type: 'object',
    properties: {
        UsersList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserUsageReportDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserUsageReportDto_ListSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        TotalAllocated: {
            type: 'integer',
            format: 'int32'
        },
        TotalUsed: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UserUsageReportDtoSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        TotalAllocated: {
            type: 'integer',
            format: 'int32'
        },
        TotalUsed: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DedicatedServerSettingsDtoSchema = {
    type: 'object',
    properties: {
        AssignedServers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DedicatedServerSettingDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DedicatedServerSettingDto_ListSchema = {
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        IsShared: {
            type: 'boolean'
        }
    }
} as const;

export const DedicatedServerSettingDtoSchema = {
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        IsShared: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const LoadBalancerSettingDto_RequestSchema = {
    type: 'object',
    properties: {
        UserLBSId: {
            type: 'integer',
            format: 'int32'
        },
        DefaultLBSId: {
            type: 'integer',
            format: 'int32'
        },
        UserLBSName: {
            type: 'string'
        },
        DefaultLBSName: {
            type: 'string'
        }
    }
} as const;

export const DiskUsageReportDtoSchema = {
    type: 'object',
    properties: {
        DiskReport: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DiskUsageDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DiskUsageDtoSchema = {
    type: 'object',
    properties: {
        Label: {
            type: 'string'
        },
        Value: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const BandwidthUsageReportDtoSchema = {
    type: 'object',
    properties: {
        BandwidthReport: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/BandwidthsUsageDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const BandwidthsUsageDtoSchema = {
    type: 'object',
    properties: {
        Label: {
            type: 'string'
        },
        Value: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const LoadBalancerSettingDtoSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserLBSId: {
            type: 'integer',
            format: 'int32'
        },
        DefaultLBSId: {
            type: 'integer',
            format: 'int32'
        },
        UserLBSName: {
            type: 'string'
        },
        DefaultLBSName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CustomMenusDtoSchema = {
    type: 'object',
    properties: {
        CustomMenuItems: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CustomMenuDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CustomMenuDto_ListSchema = {
    type: 'object',
    properties: {
        MenuItemId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Url: {
            type: 'string'
        },
        ParentMenuItemId: {
            type: 'integer',
            format: 'int32'
        },
        ParentMenuItemName: {
            type: 'string'
        },
        IsMain: {
            type: 'boolean'
        },
        VisibleToUsers: {
            type: 'string'
        },
        IconPath: {
            type: 'string'
        },
        PostHCCredentials: {
            type: 'boolean'
        },
        UserNameVar: {
            type: 'string'
        },
        UserPasswordVar: {
            type: 'string'
        },
        MyUsers: {
            type: 'boolean'
        },
        AllUsers: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        }
    }
} as const;

export const CustomMenuDto_RequestSchema = {
    required: ['DisplayName', 'ParentMenuItemName', 'Url'],
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        Url: {
            type: 'string'
        },
        ParentMenuItemId: {
            type: 'integer',
            format: 'int32'
        },
        IsMain: {
            type: 'boolean'
        },
        VisibleToUsers: {
            type: 'string'
        },
        IconPath: {
            type: 'string'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        PostHCCredentials: {
            type: 'boolean'
        },
        UserNameVar: {
            type: 'string'
        },
        UserPasswordVar: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        MyUsers: {
            type: 'boolean'
        },
        AllUsers: {
            type: 'boolean'
        },
        ParentMenuItemName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const CustomMenuDto_UpdateRequestSchema = {
    required: ['DisplayName', 'ParentMenuItemName', 'Url'],
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        Url: {
            type: 'string'
        },
        ParentMenuItemName: {
            type: 'string'
        },
        IsMain: {
            type: 'boolean'
        },
        VisibleToUsers: {
            type: 'string'
        },
        MyUsers: {
            type: 'boolean'
        },
        AllUsers: {
            type: 'boolean'
        },
        PostHCCredentials: {
            type: 'boolean'
        },
        UserNameVar: {
            type: 'string'
        },
        UserPasswordVar: {
            type: 'string'
        },
        IconPath: {
            type: 'string'
        }
    }
} as const;

export const CustomMenuDtoSchema = {
    required: ['DisplayName', 'ParentMenuItemName', 'Url'],
    type: 'object',
    properties: {
        MenuItemId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Url: {
            type: 'string'
        },
        ParentMenuItemId: {
            type: 'integer',
            format: 'int32'
        },
        IsMain: {
            type: 'boolean'
        },
        VisibleToUsers: {
            type: 'string'
        },
        IconPath: {
            type: 'string'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        PostHCCredentials: {
            type: 'boolean'
        },
        UserNameVar: {
            type: 'string'
        },
        UserPasswordVar: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        MyUsers: {
            type: 'boolean'
        },
        AllUsers: {
            type: 'boolean'
        },
        ParentMenuItemName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MessageDto_RequestSchema = {
    required: ['MessageDetails', 'MessageSubject'],
    type: 'object',
    properties: {
        MessageSubject: {
            type: 'string'
        },
        MessageDetails: {
            type: 'string'
        },
        MessagePriorityId: {
            maximum: 2,
            minimum: 0,
            type: 'integer',
            description: "'0' is for low priority,'1' is for normal priority and '2' is for high priority.",
            format: 'int32'
        },
        AllowReply: {
            type: 'boolean'
        },
        SendEmail: {
            type: 'boolean'
        },
        SendToUsers: {
            type: 'string',
            description: "SendToUsers is a flag it has multiple values 'my' is for my direct child users,'all' is for all child users and 'selected' is for the user ids provided in SelectedUsersList property but it will only accept the ids of child users (owner should have right on the specific user)."
        },
        MessageStatus: {
            type: 'boolean'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        SelectedUsersList: {
            type: 'array',
            description: "This is the list of userid of the selected users, you can get userid by calling 'Get /panel-users', method will return you 'Invalid Access' if you give the wrong user id or you do not have rights on that user id.",
            items: {
                type: 'integer',
                format: 'int32'
            }
        }
    }
} as const;

export const MessageDtoSchema = {
    required: ['MessageDetails', 'MessageSubject'],
    type: 'object',
    properties: {
        MessageId: {
            type: 'integer',
            format: 'int32'
        },
        MessageSubject: {
            type: 'string'
        },
        MessageDetails: {
            type: 'string'
        },
        MessagePriorityId: {
            maximum: 2,
            minimum: 0,
            type: 'integer',
            format: 'int32'
        },
        MessagePriorityValue: {
            type: 'string'
        },
        MessageSentDate: {
            type: 'string',
            format: 'date-time'
        },
        AllowReply: {
            type: 'boolean'
        },
        SendEmail: {
            type: 'boolean'
        },
        MessageIdentifier: {
            type: 'integer',
            format: 'int32'
        },
        SendToUsers: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MessageStatus: {
            type: 'boolean'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        SelectedUsersList: {
            type: 'array',
            items: {
                type: 'integer',
                format: 'int32'
            }
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MessageDto_ListSchema = {
    required: ['MessageDetails', 'MessageSubject'],
    type: 'object',
    properties: {
        MessageId: {
            type: 'integer',
            format: 'int32'
        },
        MessageSubject: {
            type: 'string'
        },
        MessageDetails: {
            type: 'string'
        },
        MessagePriorityId: {
            maximum: 2,
            minimum: 0,
            type: 'integer',
            format: 'int32'
        },
        MessagePriorityValue: {
            type: 'string'
        },
        MessageSentDate: {
            type: 'string',
            format: 'date-time'
        },
        AllowReply: {
            type: 'boolean'
        },
        SendEmail: {
            type: 'boolean'
        },
        MessageIdentifier: {
            type: 'integer',
            format: 'int32'
        },
        SendToUsers: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MessageStatus: {
            type: 'boolean'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        SelectedUsersList: {
            type: 'array',
            items: {
                type: 'integer',
                format: 'int32'
            }
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const MessagesDtoSchema = {
    type: 'object',
    properties: {
        Messages: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MessageDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MessageRepliesDtoSchema = {
    type: 'object',
    properties: {
        MessageReplies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MessageReplyDto:List'
            }
        },
        MessageSentToUsers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MessageSentToUsersDto:List'
            }
        },
        MessageId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        AllowReply: {
            type: 'boolean'
        },
        MessageSubject: {
            type: 'string'
        },
        MessageDetails: {
            type: 'string'
        },
        MessagePriorityId: {
            type: 'integer',
            format: 'int32'
        },
        MessageSentDate: {
            type: 'string',
            format: 'date-time'
        },
        MessageStatus: {
            type: 'boolean'
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        SendToUsers: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MessageReplyDto_ListSchema = {
    required: ['ReplyDetails'],
    type: 'object',
    properties: {
        ReplyId: {
            type: 'integer',
            format: 'int32'
        },
        MessageId: {
            type: 'integer',
            format: 'int32'
        },
        FromUserId: {
            type: 'integer',
            format: 'int32'
        },
        FromUserName: {
            type: 'string'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        ReplySubject: {
            type: 'string'
        },
        ReplyDetails: {
            type: 'string'
        },
        ReplySentDate: {
            type: 'string',
            format: 'date-time'
        },
        ParentId: {
            type: 'integer',
            format: 'int32'
        },
        SendToUsers: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const MessageReplyDto_RequestSchema = {
    required: ['ReplyDetails'],
    type: 'object',
    properties: {
        ReplyDetails: {
            type: 'string'
        }
    }
} as const;

export const MessageReplyDtoSchema = {
    required: ['ReplyDetails'],
    type: 'object',
    properties: {
        ReplyId: {
            type: 'integer',
            format: 'int32'
        },
        MessageId: {
            type: 'integer',
            format: 'int32'
        },
        FromUserId: {
            type: 'integer',
            format: 'int32'
        },
        FromUserName: {
            type: 'string'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        ReplySubject: {
            type: 'string'
        },
        ReplyDetails: {
            type: 'string'
        },
        ReplySentDate: {
            type: 'string',
            format: 'date-time'
        },
        ParentId: {
            type: 'integer',
            format: 'int32'
        },
        SendToUsers: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MessageSentToUsersDto_ListSchema = {
    type: 'object',
    properties: {
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        ToUsername: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const MessageSentToUsersDtoSchema = {
    type: 'object',
    properties: {
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        ToUsername: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const TroubleTicketsStatsDtoSchema = {
    type: 'object',
    properties: {
        OpenTickets: {
            type: 'integer',
            format: 'int32'
        },
        ClosedTickets: {
            type: 'integer',
            format: 'int32'
        },
        PendingTickets: {
            type: 'integer',
            format: 'int32'
        },
        TotalTickets: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const TicketsDtoSchema = {
    type: 'object',
    properties: {
        Tickets: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/TicketDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const TicketDtoSchema = {
    required: ['Category', 'Details', 'Subject'],
    type: 'object',
    properties: {
        TicketId: {
            type: 'integer',
            format: 'int32'
        },
        TicketNumber: {
            type: 'string'
        },
        FromUserId: {
            type: 'integer',
            format: 'int32'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        Subject: {
            type: 'string'
        },
        Details: {
            type: 'string'
        },
        TicketStatus: {
            type: 'string'
        },
        Category: {
            type: 'string'
        },
        Priority: {
            type: 'string'
        },
        IssueDate: {
            type: 'string',
            format: 'date-time'
        },
        DateModified: {
            type: 'string',
            format: 'date-time'
        },
        SendEmail: {
            type: 'boolean'
        },
        ModifiedBy: {
            type: 'integer',
            format: 'int32'
        },
        TotalResponses: {
            type: 'integer',
            format: 'int32'
        },
        ClientName: {
            type: 'string'
        },
        TicketAttachments: {
            type: 'integer',
            format: 'int32'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const TicketDto_ListSchema = {
    type: 'object',
    properties: {
        TicketId: {
            type: 'integer',
            format: 'int32'
        },
        TicketNumber: {
            type: 'string'
        },
        FromUserId: {
            type: 'integer',
            format: 'int32'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        Subject: {
            type: 'string'
        },
        Details: {
            type: 'string'
        },
        TicketStatus: {
            type: 'string'
        },
        Category: {
            type: 'string'
        },
        Priority: {
            type: 'string'
        },
        IssueDate: {
            type: 'string',
            format: 'date-time'
        },
        DateModified: {
            type: 'string',
            format: 'date-time'
        },
        SendEmail: {
            type: 'boolean'
        },
        ModifiedBy: {
            type: 'integer',
            format: 'int32'
        },
        TotalResponses: {
            type: 'integer',
            format: 'int32'
        },
        ClientName: {
            type: 'string'
        },
        TicketAttachments: {
            type: 'integer',
            format: 'int32'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const TicketDto_UpdateSchema = {
    type: 'object',
    properties: {
        TicketNumber: {
            type: 'string'
        },
        FromUserId: {
            type: 'integer',
            format: 'int32'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        Subject: {
            type: 'string'
        },
        Details: {
            type: 'string'
        },
        TicketStatus: {
            type: 'string'
        },
        Category: {
            type: 'string'
        },
        Priority: {
            type: 'string'
        },
        IssueDate: {
            type: 'string',
            format: 'date-time'
        },
        DateModified: {
            type: 'string',
            format: 'date-time'
        },
        SendEmail: {
            type: 'boolean'
        },
        ClientName: {
            type: 'string'
        },
        TicketAttachments: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const TicketDto_RequestSchema = {
    type: 'object',
    properties: {
        TicketNumber: {
            type: 'string'
        },
        FromUserId: {
            type: 'integer',
            format: 'int32'
        },
        ToUserId: {
            type: 'integer',
            format: 'int32'
        },
        Subject: {
            type: 'string'
        },
        Details: {
            type: 'string'
        },
        TicketStatus: {
            type: 'string'
        },
        Category: {
            type: 'string'
        },
        Priority: {
            type: 'string'
        },
        IssueDate: {
            type: 'string',
            format: 'date-time'
        },
        DateModified: {
            type: 'string',
            format: 'date-time'
        },
        SendEmail: {
            type: 'boolean'
        },
        ClientName: {
            type: 'string'
        },
        TicketAttachments: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const TicketResponseDto_RequestSchema = {
    required: ['Details'],
    type: 'object',
    properties: {
        Details: {
            type: 'string'
        }
    }
} as const;

export const TicketResponseDtoSchema = {
    required: ['Details'],
    type: 'object',
    properties: {
        TicketResponseId: {
            type: 'integer',
            format: 'int32'
        },
        TicketId: {
            type: 'integer',
            format: 'int32'
        },
        ResponseTitle: {
            type: 'string'
        },
        ResponderName: {
            type: 'string'
        },
        Details: {
            type: 'string'
        },
        ResponderId: {
            type: 'integer',
            format: 'int32'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        IsEscalated: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const TicketResponseDto_ListSchema = {
    type: 'object',
    properties: {
        TicketResponseId: {
            type: 'integer',
            format: 'int32'
        },
        TicketId: {
            type: 'integer',
            format: 'int32'
        },
        ResponseTitle: {
            type: 'string'
        },
        ResponderName: {
            type: 'string'
        },
        Details: {
            type: 'string'
        },
        ResponderId: {
            type: 'integer',
            format: 'int32'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        IsEscalated: {
            type: 'boolean'
        }
    }
} as const;

export const TicketResponsesDtoSchema = {
    type: 'object',
    properties: {
        TicketResponses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/TicketResponseDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CategoryDto_ListSchema = {
    type: 'object',
    properties: {
        CategoryId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        IsInternal: {
            type: 'boolean'
        }
    }
} as const;

export const CategoryDto_RequestSchema = {
    required: ['DisplayName'],
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        }
    }
} as const;

export const CategoryDtoSchema = {
    required: ['DisplayName'],
    type: 'object',
    properties: {
        CategoryId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        IsInternal: {
            type: 'boolean'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        DeletedBy: {
            type: 'integer',
            format: 'int32'
        },
        DateDeleted: {
            type: 'string',
            format: 'date-time'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CategoriesDtoSchema = {
    type: 'object',
    properties: {
        Categories: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CategoryDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AttachmentsDtoSchema = {
    type: 'object',
    properties: {
        TicketId: {
            type: 'integer',
            format: 'int32'
        },
        Attachments: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AttachmentDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AttachmentsDto_RequestSchema = {
    type: 'object',
    properties: {
        Attachments: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AttachmentDto:Request'
            }
        }
    }
} as const;

export const AttachmentDto_RequestSchema = {
    type: 'object',
    properties: {
        FileData: {
            type: 'string'
        },
        FileName: {
            type: 'string'
        },
        FileType: {
            type: 'string'
        },
        ResponseId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const AttachmentDto_ListSchema = {
    type: 'object',
    properties: {
        AttachmentId: {
            type: 'integer',
            format: 'int32'
        },
        FileData: {
            type: 'string'
        },
        FileName: {
            type: 'string'
        },
        FileType: {
            type: 'string'
        },
        ResponseId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const AttachmentDto_DetailsSchema = {
    type: 'object',
    properties: {
        FileData: {
            type: 'string'
        },
        FileName: {
            type: 'string'
        },
        FileType: {
            type: 'string'
        },
        ResponseId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const AttachmentDtoSchema = {
    type: 'object',
    properties: {
        AttachmentId: {
            type: 'integer',
            format: 'int32'
        },
        FileData: {
            type: 'string'
        },
        FileName: {
            type: 'string'
        },
        FileType: {
            type: 'string'
        },
        ResponseId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SellAddonsDtoSchema = {
    type: 'object',
    properties: {
        SoldAddonList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SoldAddOnDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SoldAddOnDto_ListSchema = {
    type: 'object',
    properties: {
        SoldAddOnId: {
            type: 'integer',
            format: 'int32'
        },
        SoldPlanId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Type: {
            type: 'string'
        },
        PlanName: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        UnitSize: {
            type: 'integer',
            format: 'int32'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        BillingMethod: {
            type: 'string'
        },
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        IsComposite: {
            type: 'boolean'
        }
    }
} as const;

export const SoldAddOnDtoSchema = {
    required: ['Quantity'],
    type: 'object',
    properties: {
        SoldAddOnId: {
            type: 'integer',
            format: 'int32'
        },
        SoldPlanId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Type: {
            type: 'string'
        },
        PlanName: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        UnitSize: {
            type: 'integer',
            format: 'int32'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        BillingMethod: {
            type: 'string'
        },
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        IsComposite: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SoldAddOnBillingDetailDto_RequestSchema = {
    type: 'object',
    properties: {
        SellableItemTypeId: {
            type: 'integer',
            format: 'int32'
        },
        AddOnRecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        SetupDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        NextInvoiceDate: {
            type: 'string',
            format: 'date-time'
        },
        PaidTillDate: {
            type: 'string',
            format: 'date-time'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SoldAddOnBillingDetailDto_ListSchema = {
    type: 'object',
    properties: {
        SoldAddOnId: {
            type: 'integer',
            format: 'int32'
        },
        SellableItemTypeId: {
            type: 'integer',
            format: 'int32'
        },
        AddOnRecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        SetupDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        NextInvoiceDate: {
            type: 'string',
            format: 'date-time'
        },
        PaidTillDate: {
            type: 'string',
            format: 'date-time'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SoldAddOnBillingDetailDtoSchema = {
    type: 'object',
    properties: {
        SoldAddOnId: {
            type: 'integer',
            format: 'int32'
        },
        SellableItemTypeId: {
            type: 'integer',
            format: 'int32'
        },
        AddOnRecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        SetupDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        NextInvoiceDate: {
            type: 'string',
            format: 'date-time'
        },
        PaidTillDate: {
            type: 'string',
            format: 'date-time'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SellAddonDto_RequestSchema = {
    type: 'object',
    properties: {
        SoldPlanId: {
            type: 'integer',
            format: 'int32'
        },
        AddOns: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AddOnResourcesDto:SellAddon'
            }
        }
    }
} as const;

export const SellAddonDtoSchema = {
    type: 'object',
    properties: {
        SoldPlanId: {
            type: 'integer',
            format: 'int32'
        },
        AddOns: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AddOnResourcesDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AddOnResourcesDto_SellAddonSchema = {
    required: ['Quantity'],
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            description: "you can get resource id by calling 'GET /resources'.",
            format: 'int32'
        },
        Quantity: {
            type: 'integer',
            description: 'Number of instance you want to sell.',
            format: 'int32'
        },
        IsComposite: {
            type: 'boolean'
        }
    }
} as const;

export const AddOnResourcesDto_ListSchema = {
    required: ['Quantity'],
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        IsComposite: {
            type: 'boolean'
        }
    }
} as const;

export const AddOnResourcesDtoSchema = {
    required: ['Quantity'],
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        IsComposite: {
            type: 'boolean'
        },
        BillingDetails: {
            '$ref': '#/components/schemas/SoldAddOnBillingDetailDto:List'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AddUpdateSoldAddOnDto_RequestSchema = {
    type: 'object',
    properties: {
        BillingDetails: {
            '$ref': '#/components/schemas/SoldAddOnBillingDetailDto:List'
        }
    }
} as const;

export const AddUpdateSoldAddOnDtoSchema = {
    type: 'object',
    properties: {
        SoldAddOnId: {
            type: 'integer',
            format: 'int32'
        },
        BillingDetails: {
            '$ref': '#/components/schemas/SoldAddOnBillingDetailDto:List'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CResourcesDtoSchema = {
    type: 'object',
    properties: {
        CompositeResources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CResourceDto_ListSchema = {
    type: 'object',
    properties: {
        CompositeResourceId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        CategoryName: {
            type: 'string'
        },
        IaasRefId: {
            type: 'string'
        },
        CategoryDisplayName: {
            type: 'string'
        },
        ProviderName: {
            type: 'string'
        },
        SoldInstances: {
            type: 'integer',
            format: 'int32'
        },
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceComponentDto'
            }
        }
    }
} as const;

export const CResourceDto_RequestSchema = {
    required: ['CategoryName', 'DisplayName'],
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        CategoryName: {
            type: 'string'
        },
        CategoryDisplayName: {
            type: 'string'
        },
        ProviderName: {
            type: 'string'
        },
        SoldInstances: {
            type: 'integer',
            format: 'int32'
        },
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceComponentDto'
            }
        }
    }
} as const;

export const UpdateCResourceDto_RequestSchema = {
    required: ['DisplayName'],
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceComponentDto'
            }
        }
    }
} as const;

export const UpdateCResourceDtoSchema = {
    required: ['CategoryName', 'DisplayName'],
    type: 'object',
    properties: {
        CompositeResourceId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        CategoryName: {
            type: 'string'
        },
        IaasRefId: {
            type: 'string'
        },
        CategoryDisplayName: {
            type: 'string'
        },
        ProviderName: {
            type: 'string'
        },
        SoldInstances: {
            type: 'integer',
            format: 'int32'
        },
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceComponentDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CResourceDtoSchema = {
    required: ['CategoryName', 'DisplayName'],
    type: 'object',
    properties: {
        CompositeResourceId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        CategoryName: {
            type: 'string'
        },
        IaasRefId: {
            type: 'string'
        },
        CategoryDisplayName: {
            type: 'string'
        },
        ProviderName: {
            type: 'string'
        },
        SoldInstances: {
            type: 'integer',
            format: 'int32'
        },
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CResourceResourceComponentDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CResourceResourceDtoSchema = {
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const CResourceResourceComponentDtoSchema = {
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ComponentName: {
            type: 'string'
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const HostingServicesDtoSchema = {
    type: 'object',
    properties: {
        HostingServices: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/HostingServiceDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const HostingServiceDto_ListSchema = {
    type: 'object',
    properties: {
        HostingServiceId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        ServerRole: {
            type: 'string'
        }
    }
} as const;

export const HostingServiceDtoSchema = {
    type: 'object',
    properties: {
        HostingServiceId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        ServerRole: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ProvidersDtoSchema = {
    type: 'object',
    properties: {
        ProviderTypes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ProviderDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ProviderDto_ListSchema = {
    type: 'object',
    properties: {
        RoleServerTypeId: {
            type: 'integer',
            format: 'int32'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        PlatformId: {
            type: 'integer',
            format: 'int32'
        },
        Platform: {
            type: 'string'
        },
        ProviderName: {
            type: 'string'
        },
        ConfiguredOnly: {
            type: 'boolean'
        },
        KeyValueVerification: {
            type: 'boolean'
        },
        RefrenceIdRequired: {
            type: 'boolean'
        },
        Url: {
            type: 'string'
        },
        HelpText: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        ProviderType: {
            type: 'string'
        }
    }
} as const;

export const ProviderDtoSchema = {
    type: 'object',
    properties: {
        RoleServerTypeId: {
            type: 'integer',
            format: 'int32'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        PlatformId: {
            type: 'integer',
            format: 'int32'
        },
        Platform: {
            type: 'string'
        },
        ProviderName: {
            type: 'string'
        },
        ConfiguredOnly: {
            type: 'boolean'
        },
        KeyValueVerification: {
            type: 'boolean'
        },
        RefrenceIdRequired: {
            type: 'boolean'
        },
        Url: {
            type: 'string'
        },
        HelpText: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        ProviderType: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourcesDtoSchema = {
    type: 'object',
    properties: {
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourceDto_ListSchema = {
    required: ['DefaultUnit'],
    type: 'object',
    properties: {
        DefaultValue: {
            type: 'integer',
            format: 'int32'
        },
        DependentOn: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceBehaviourType: {
            type: 'string'
        },
        ResourceType: {
            type: 'string'
        },
        ProvisioningTypes: {
            type: 'string'
        },
        ServerRoleTypes: {
            type: 'string'
        },
        SupportedRoleProviders: {
            type: 'string'
        },
        ProviderSelection: {
            type: 'string'
        },
        Role: {
            type: 'string'
        },
        DisplayIndex: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceComponentDto:List'
            }
        },
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        Decription: {
            type: 'string'
        },
        DefaultUnit: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ResourceDto_RequestSchema = {
    required: ['DefaultUnit'],
    type: 'object',
    properties: {
        DefaultValue: {
            type: 'integer',
            format: 'int32'
        },
        DependentOn: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceBehaviourType: {
            type: 'string'
        },
        ResourceType: {
            type: 'string'
        },
        ProvisioningTypes: {
            type: 'string'
        },
        ServerRoleTypes: {
            type: 'string'
        },
        SupportedRoleProviders: {
            type: 'string'
        },
        ProviderSelection: {
            type: 'string'
        },
        Role: {
            type: 'string'
        },
        DisplayIndex: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceComponentDto:List'
            }
        },
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        Decription: {
            type: 'string'
        },
        DefaultUnit: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ResourceDtoSchema = {
    required: ['DefaultUnit'],
    type: 'object',
    properties: {
        DefaultValue: {
            type: 'integer',
            format: 'int32'
        },
        DependentOn: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceBehaviourType: {
            type: 'string'
        },
        ResourceType: {
            type: 'string'
        },
        ProvisioningTypes: {
            type: 'string'
        },
        ServerRoleTypes: {
            type: 'string'
        },
        SupportedRoleProviders: {
            type: 'string'
        },
        ProviderSelection: {
            type: 'string'
        },
        Role: {
            type: 'string'
        },
        DisplayIndex: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceComponentDto:List'
            }
        },
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        Decription: {
            type: 'string'
        },
        DefaultUnit: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourceComponentDto_ListSchema = {
    type: 'object',
    properties: {
        ComponentId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        ComponentProps: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceComponentPropDto'
            }
        }
    }
} as const;

export const ResourceComponentDtoSchema = {
    type: 'object',
    properties: {
        ComponentId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        ComponentProps: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceComponentPropDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourceComponentPropDtoSchema = {
    type: 'object',
    properties: {
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Providers: {
            type: 'string'
        }
    }
} as const;

export const ResourceBillingDetailsDtoSchema = {
    type: 'object',
    properties: {
        ItemRecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        DefaultSetupPrice: {
            type: 'number',
            format: 'double'
        },
        DefaultRecurringPrice: {
            type: 'number',
            format: 'double'
        },
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const AddUpdateResourceDto_RequestSchema = {
    required: ['DefaultUnit', 'DisplayName', 'SystemName'],
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        Decription: {
            type: 'string'
        },
        DefaultUnit: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const AddUpdateResourceDto_UpdateRequestSchema = {
    required: ['DefaultUnit', 'DisplayName'],
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        Decription: {
            type: 'string'
        },
        DefaultUnit: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const AddUpdateResourceDtoSchema = {
    required: ['DefaultUnit'],
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        Decription: {
            type: 'string'
        },
        DefaultUnit: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ItemBillingDetailsDtoSchema = {
    type: 'object',
    properties: {
        ItemBillingDetailId: {
            type: 'integer',
            format: 'int32'
        },
        SetupPrice: {
            type: 'number',
            format: 'double'
        },
        DefaultSetupDiscount: {
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        DefaultRecurringDiscount: {
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        PromotionalPrice: {
            type: 'number',
            format: 'double'
        },
        PromotionalDurationId: {
            type: 'integer',
            format: 'int32'
        },
        PromotionalDuration: {
            type: 'string'
        },
        RecurringDurations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ItemRecurringDurationsDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ItemBillingDetailsDto_ListSchema = {
    type: 'object',
    properties: {
        ItemBillingDetailId: {
            type: 'integer',
            format: 'int32'
        },
        SetupPrice: {
            type: 'number',
            format: 'double'
        },
        DefaultSetupDiscount: {
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        DefaultRecurringDiscount: {
            minimum: 0,
            type: 'number',
            format: 'double'
        },
        PromotionalPrice: {
            type: 'number',
            format: 'double'
        },
        PromotionalDurationId: {
            type: 'integer',
            format: 'int32'
        },
        PromotionalDuration: {
            type: 'string'
        },
        RecurringDurations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ItemRecurringDurationsDto:List'
            }
        }
    }
} as const;

export const ItemRecurringDurationsDto_ListSchema = {
    type: 'object',
    properties: {
        ItemRecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        RecurringMonths: {
            type: 'integer',
            format: 'int32'
        },
        RecurringPrice: {
            type: 'number',
            format: 'double'
        },
        IsDefault: {
            type: 'boolean'
        },
        RecurringDuration: {
            type: 'string'
        }
    }
} as const;

export const ItemRecurringDurationsDtoSchema = {
    type: 'object',
    properties: {
        ItemRecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        RecurringMonths: {
            type: 'integer',
            format: 'int32'
        },
        RecurringPrice: {
            type: 'number',
            format: 'double'
        },
        IsDefault: {
            type: 'boolean'
        },
        RecurringDuration: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const RecurringDurationsDtoSchema = {
    type: 'object',
    properties: {
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        RecurringDurations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/RecurringDurationDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const RecurringDurationDto_ListSchema = {
    type: 'object',
    properties: {
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Months: {
            type: 'integer',
            format: 'int32'
        },
        RecurringType: {
            type: 'string'
        }
    }
} as const;

export const RecurringDurationDtoSchema = {
    type: 'object',
    properties: {
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Months: {
            type: 'integer',
            format: 'int32'
        },
        RecurringType: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SoldPlansDtoSchema = {
    type: 'object',
    properties: {
        SoldPlans: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SoldPlanDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SoldPlanDto_ListSchema = {
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        PlanName: {
            type: 'string'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        SoldDate: {
            type: 'string',
            format: 'date-time'
        },
        SoldPlanId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        BillingDetails: {
            '$ref': '#/components/schemas/SoldPlanBillingDetailDto:Request'
        }
    }
} as const;

export const SoldPlanDtoSchema = {
    required: ['UserName'],
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        PlanName: {
            type: 'string'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        SoldDate: {
            type: 'string',
            format: 'date-time'
        },
        SoldPlanId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        BillingDetails: {
            '$ref': '#/components/schemas/SoldPlanBillingDetailDto:Request'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SoldPlanBillingDetailDtoSchema = {
    type: 'object',
    properties: {
        SoldPlanId: {
            type: 'integer',
            format: 'int32'
        },
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        SetupDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringPrice: {
            type: 'number',
            format: 'double'
        },
        RecurringDiscount: {
            type: 'number',
            format: 'double'
        },
        NextInvoiceDate: {
            type: 'string',
            format: 'date-time'
        },
        PaidTillDate: {
            type: 'string',
            format: 'date-time'
        },
        DueSince: {
            type: 'string'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        PaidStatus: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SoldPlanBillingDetailDto_RequestSchema = {
    type: 'object',
    properties: {
        SoldPlanId: {
            type: 'integer',
            format: 'int32'
        },
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        SetupDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringPrice: {
            type: 'number',
            format: 'double'
        },
        RecurringDiscount: {
            type: 'number',
            format: 'double'
        },
        NextInvoiceDate: {
            type: 'string',
            format: 'date-time'
        },
        PaidTillDate: {
            type: 'string',
            format: 'date-time'
        },
        DueSince: {
            type: 'string'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        PaidStatus: {
            type: 'string'
        }
    }
} as const;

export const SoldPlanBillingDetailDto_UpdateSchema = {
    type: 'object',
    properties: {
        RecurringDurationId: {
            type: 'integer',
            format: 'int32'
        },
        SetupDiscount: {
            type: 'number',
            format: 'double'
        },
        RecurringPrice: {
            type: 'number',
            format: 'double'
        },
        RecurringDiscount: {
            type: 'number',
            format: 'double'
        },
        NextInvoiceDate: {
            type: 'string',
            format: 'date-time'
        },
        PaidTillDate: {
            type: 'string',
            format: 'date-time'
        },
        DueSince: {
            type: 'string'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        PaidStatus: {
            type: 'string'
        }
    }
} as const;

export const SellPlanDto_RequestSchema = {
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        Quantity: {
            maximum: 999,
            minimum: 1,
            type: 'integer',
            format: 'int32'
        },
        BillingDetails: {
            '$ref': '#/components/schemas/SoldPlanBillingDetailDto:Request'
        }
    }
} as const;

export const SellPlanDtoSchema = {
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        Quantity: {
            maximum: 999,
            minimum: 1,
            type: 'integer',
            format: 'int32'
        },
        BillingDetails: {
            '$ref': '#/components/schemas/SoldPlanBillingDetailDto'
        }
    }
} as const;

export const SoldPlansIsDisabledSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SoldPlansIsDisabled_RequestSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'boolean'
        }
    }
} as const;

export const PurchasePlanDto_RequestSchema = {
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        Quantity: {
            maximum: 999,
            minimum: 1,
            type: 'integer',
            format: 'int32'
        },
        ItemRecurringDurations: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const PurchasePlanDtoSchema = {
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        Quantity: {
            maximum: 999,
            minimum: 1,
            type: 'integer',
            format: 'int32'
        },
        ItemRecurringDurations: {
            type: 'integer',
            format: 'int32'
        },
        CurrentPage: {
            type: 'integer',
            format: 'int32'
        },
        PageSize: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const OperationsDtoSchema = {
    type: 'object',
    properties: {
        DateRequested: {
            type: 'string',
            format: 'date-time'
        },
        DateCompleted: {
            type: 'string',
            format: 'date-time'
        },
        ErrorDetail: {
            type: 'string'
        },
        Flag: {
            type: 'string'
        },
        QueuedOperationId: {
            type: 'integer',
            format: 'int32'
        },
        QueuedBy: {
            type: 'integer',
            format: 'int32'
        },
        SourceId: {
            type: 'integer',
            format: 'int32'
        },
        SourceName: {
            type: 'string'
        },
        OperationName: {
            type: 'string'
        },
        OperationStatus: {
            type: 'string'
        },
        ConfirmationHash: {
            type: 'string'
        },
        IsConfirmed: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const OperationsDto_RequestSchema = {
    type: 'object',
    properties: {
        DateRequested: {
            type: 'string',
            format: 'date-time'
        },
        DateCompleted: {
            type: 'string',
            format: 'date-time'
        },
        ErrorDetail: {
            type: 'string'
        },
        Flag: {
            type: 'string'
        },
        QueuedOperationId: {
            type: 'integer',
            format: 'int32'
        },
        QueuedBy: {
            type: 'integer',
            format: 'int32'
        },
        SourceId: {
            type: 'integer',
            format: 'int32'
        },
        SourceName: {
            type: 'string'
        },
        OperationName: {
            type: 'string'
        },
        OperationStatus: {
            type: 'string'
        },
        ConfirmationHash: {
            type: 'string'
        },
        IsConfirmed: {
            type: 'boolean'
        }
    }
} as const;

export const OperationsDto_ListSchema = {
    type: 'object',
    properties: {
        DateRequested: {
            type: 'string',
            format: 'date-time'
        },
        DateCompleted: {
            type: 'string',
            format: 'date-time'
        },
        ErrorDetail: {
            type: 'string'
        },
        Flag: {
            type: 'string'
        },
        QueuedOperationId: {
            type: 'integer',
            format: 'int32'
        },
        QueuedBy: {
            type: 'integer',
            format: 'int32'
        },
        SourceId: {
            type: 'integer',
            format: 'int32'
        },
        SourceName: {
            type: 'string'
        },
        OperationName: {
            type: 'string'
        },
        OperationStatus: {
            type: 'string'
        },
        ConfirmationHash: {
            type: 'string'
        },
        IsConfirmed: {
            type: 'boolean'
        }
    }
} as const;

export const QueuedOperationsDtoSchema = {
    type: 'object',
    properties: {
        QueuedOperations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/OperationsDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ServerInfoDtoSchema = {
    type: 'object',
    properties: {
        Key: {
            type: 'string'
        },
        Head: {
            type: 'string'
        },
        Value: {
            type: 'string'
        },
        MachineName: {
            type: 'string'
        },
        PrimaryServer: {
            type: 'boolean'
        },
        ServerIp: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        UserPassword: {
            type: 'string'
        },
        ReleaseDate: {
            type: 'string',
            format: 'date-time'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SystemInfoDtoSchema = {
    type: 'object',
    properties: {
        BuildNumber: {
            type: 'string'
        },
        InstallPath: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SystemServicesDtoSchema = {
    type: 'object',
    properties: {
        SystemServices: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SystemServiceDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SystemServiceDtoSchema = {
    type: 'object',
    properties: {
        ServiceName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        ServiceType: {
            type: 'string'
        },
        ServiceStatus: {
            type: 'string'
        },
        ServiceDescription: {
            type: 'string'
        },
        StartupStatus: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SystemServiceDto_ListSchema = {
    type: 'object',
    properties: {
        ServiceName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        ServiceType: {
            type: 'string'
        },
        ServiceStatus: {
            type: 'string'
        },
        ServiceDescription: {
            type: 'string'
        },
        StartupStatus: {
            type: 'string'
        }
    }
} as const;

export const SystemServiceDto_RequestSchema = {
    type: 'object',
    properties: {
        ServiceName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        ServiceType: {
            type: 'string'
        },
        ServiceStatus: {
            type: 'string'
        },
        ServiceDescription: {
            type: 'string'
        },
        StartupStatus: {
            type: 'string'
        }
    }
} as const;

export const UpdateSystemServiceDtoSchema = {
    required: ['ServiceName'],
    type: 'object',
    properties: {
        ServiceName: {
            type: 'string'
        }
    }
} as const;

export const EmailsDtoSchema = {
    type: 'object',
    properties: {
        Emails: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EmailDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const EmailDto_ListSchema = {
    type: 'object',
    properties: {
        EmailId: {
            type: 'integer',
            format: 'int32'
        },
        ToAddress: {
            type: 'string'
        },
        FromEmailAddress: {
            type: 'string'
        },
        EMailSubject: {
            type: 'string'
        },
        EmailType: {
            type: 'string'
        },
        EmailTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        EmailStatus: {
            type: 'boolean'
        },
        RetryCount: {
            type: 'integer',
            format: 'int32'
        },
        SentDate: {
            type: 'string',
            format: 'date-time'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CcAddress: {
            type: 'string'
        },
        BccAddress: {
            type: 'string'
        },
        EmailBody: {
            type: 'string'
        },
        EmailErrorDescription: {
            type: 'string'
        },
        IsRetryReset: {
            type: 'boolean'
        },
        MailDeliverySettingsId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        SmtpPort: {
            type: 'integer',
            format: 'int32'
        },
        SmtpAuthentication: {
            type: 'boolean'
        },
        EnableSsl: {
            type: 'boolean'
        },
        MailDeliveryType: {
            type: 'string'
        },
        DnsServer: {
            type: 'string'
        },
        SmtpServer: {
            type: 'string'
        },
        AuthUser: {
            type: 'string'
        },
        AuthPassword: {
            type: 'string'
        },
        FromAddress: {
            type: 'string'
        }
    }
} as const;

export const EmailDtoSchema = {
    type: 'object',
    properties: {
        EmailId: {
            type: 'integer',
            format: 'int32'
        },
        ToAddress: {
            type: 'string'
        },
        FromEmailAddress: {
            type: 'string'
        },
        EMailSubject: {
            type: 'string'
        },
        EmailType: {
            type: 'string'
        },
        EmailTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        EmailStatus: {
            type: 'boolean'
        },
        RetryCount: {
            type: 'integer',
            format: 'int32'
        },
        SentDate: {
            type: 'string',
            format: 'date-time'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CcAddress: {
            type: 'string'
        },
        BccAddress: {
            type: 'string'
        },
        EmailBody: {
            type: 'string'
        },
        EmailErrorDescription: {
            type: 'string'
        },
        IsRetryReset: {
            type: 'boolean'
        },
        MailDeliverySettingsId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        SmtpPort: {
            type: 'integer',
            format: 'int32'
        },
        SmtpAuthentication: {
            type: 'boolean'
        },
        EnableSsl: {
            type: 'boolean'
        },
        MailDeliveryType: {
            type: 'string'
        },
        DnsServer: {
            type: 'string'
        },
        SmtpServer: {
            type: 'string'
        },
        AuthUser: {
            type: 'string'
        },
        AuthPassword: {
            type: 'string'
        },
        FromAddress: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const EmailTemplatesDtoSchema = {
    type: 'object',
    properties: {
        EmailTemplateList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EmailTemplateDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const EmailTemplateDtoSchema = {
    required: ['DisplayName'],
    type: 'object',
    properties: {
        EmailTags: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EmailTagsDto'
            }
        },
        EmailTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        Body: {
            type: 'string'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const EmailTemplateDto_ListSchema = {
    type: 'object',
    properties: {
        EmailTags: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/EmailTagsDto'
            }
        },
        EmailTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        Body: {
            type: 'string'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const EmailTagsDtoSchema = {
    type: 'object',
    properties: {
        EmailTagId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        ParentName: {
            type: 'string'
        },
        TypeItemId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const MailSettingsListDtoSchema = {
    type: 'object',
    properties: {
        MailSettings: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MailSettingsDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailSettingsDto_ListSchema = {
    type: 'object',
    properties: {
        TemplateId: {
            type: 'integer',
            format: 'int32'
        },
        TemplateSystemName: {
            type: 'string'
        },
        TemplateName: {
            type: 'string'
        },
        SendMailToAllUsers: {
            type: 'boolean'
        },
        SendMailToMe: {
            type: 'boolean'
        },
        CCTo: {
            pattern: '^\\S+@\\S+\\.\\S+$',
            type: 'string'
        },
        ToThisUser: {
            type: 'integer',
            format: 'int32'
        },
        DefaultOn: {
            type: 'boolean'
        }
    }
} as const;

export const MailSettingsDtoSchema = {
    type: 'object',
    properties: {
        TemplateId: {
            type: 'integer',
            format: 'int32'
        },
        TemplateSystemName: {
            type: 'string'
        },
        TemplateName: {
            type: 'string'
        },
        SendMailToAllUsers: {
            type: 'boolean'
        },
        SendMailToMe: {
            type: 'boolean'
        },
        CCTo: {
            pattern: '^\\S+@\\S+\\.\\S+$',
            type: 'string'
        },
        ToThisUser: {
            type: 'integer',
            format: 'int32'
        },
        DefaultOn: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AdvanceMailSettingsDtoSchema = {
    type: 'object',
    properties: {
        TemplateName: {
            type: 'string'
        },
        TemplateSystemName: {
            type: 'string'
        },
        TemplateId: {
            type: 'integer',
            format: 'int32'
        },
        UsersList: {
            type: 'array',
            items: {
                type: 'integer',
                format: 'int32'
            }
        },
        SendMailsToAllUsers: {
            type: 'boolean'
        },
        DefaultOn: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailDeliverySettingsDtoSchema = {
    type: 'object',
    properties: {
        MailDeliverySettingsId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        SmtpPort: {
            type: 'integer',
            format: 'int32'
        },
        SmtpAuthentication: {
            type: 'boolean'
        },
        EnableSsl: {
            type: 'boolean'
        },
        MailDeliveryType: {
            type: 'string'
        },
        DnsServer: {
            type: 'string'
        },
        SmtpServer: {
            type: 'string'
        },
        AuthUser: {
            type: 'string'
        },
        AuthPassword: {
            type: 'string'
        },
        FromAddress: {
            type: 'string'
        },
        ToEmailAddress: {
            type: 'string'
        },
        FromEmailAddress: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailDeliverySettingsDto_RequestSchema = {
    type: 'object',
    properties: {
        MailDeliverySettingsId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        SmtpPort: {
            type: 'integer',
            format: 'int32'
        },
        SmtpAuthentication: {
            type: 'boolean'
        },
        EnableSsl: {
            type: 'boolean'
        },
        MailDeliveryType: {
            type: 'string'
        },
        DnsServer: {
            type: 'string'
        },
        SmtpServer: {
            type: 'string'
        },
        AuthUser: {
            type: 'string'
        },
        AuthPassword: {
            type: 'string'
        },
        FromAddress: {
            type: 'string'
        },
        ToEmailAddress: {
            type: 'string'
        },
        FromEmailAddress: {
            type: 'string'
        }
    }
} as const;

export const MailDeliverySettingsDto_RequestTestmailSchema = {
    type: 'object',
    properties: {
        MailDeliverySettingsId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        SmtpPort: {
            type: 'integer',
            format: 'int32'
        },
        SmtpAuthentication: {
            type: 'boolean'
        },
        EnableSsl: {
            type: 'boolean'
        },
        MailDeliveryType: {
            type: 'string'
        },
        DnsServer: {
            type: 'string'
        },
        SmtpServer: {
            type: 'string'
        },
        AuthUser: {
            type: 'string'
        },
        AuthPassword: {
            type: 'string'
        },
        FromAddress: {
            type: 'string'
        },
        ToEmailAddress: {
            type: 'string'
        },
        FromEmailAddress: {
            type: 'string'
        },
        SendTestEmail: {
            type: 'boolean'
        }
    }
} as const;

export const NatIpAddressesDtoSchema = {
    type: 'object',
    properties: {
        NatIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NatIpAddressDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const NatIpAddressDto_ListSchema = {
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerName: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        NatId: {
            type: 'integer',
            format: 'int32'
        },
        ExternalIpAddress: {
            type: 'string'
        },
        InternalIpAddress: {
            type: 'string'
        },
        IpType: {
            type: 'string'
        },
        Limit: {
            type: 'integer',
            format: 'int32'
        },
        IsIPv6: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const NatIpAddressDto_RequestSchema = {
    required: ['ExternalIpAddress', 'InternalIpAddress'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerName: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        ExternalIpAddress: {
            type: 'string'
        },
        InternalIpAddress: {
            type: 'string'
        },
        IpType: {
            type: 'string'
        },
        Limit: {
            type: 'integer',
            format: 'int32'
        },
        IsIPv6: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const NatIpAddressDtoSchema = {
    required: ['ExternalIpAddress', 'InternalIpAddress'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerName: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        NatId: {
            type: 'integer',
            format: 'int32'
        },
        ExternalIpAddress: {
            type: 'string'
        },
        InternalIpAddress: {
            type: 'string'
        },
        IpType: {
            type: 'string'
        },
        Limit: {
            type: 'integer',
            format: 'int32'
        },
        IsIPv6: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResellerDnsDto_RequestSchema = {
    type: 'object',
    properties: {
        PNameServer: {
            type: 'string',
            description: 'Primary Server Name'
        },
        SNameServer: {
            type: 'string',
            description: 'Secondary Server Name'
        },
        NameServer3: {
            type: 'string'
        },
        NameServer4: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        }
    }
} as const;

export const ResellerDnsDtoSchema = {
    type: 'object',
    properties: {
        ResellerDnsId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        PNameServer: {
            type: 'string'
        },
        SNameServer: {
            type: 'string'
        },
        NameServer3: {
            type: 'string'
        },
        NameServer4: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DnsZonesDtoSchema = {
    type: 'object',
    properties: {
        DnsZones: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DnsZoneDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DnsZoneDto_ListSchema = {
    type: 'object',
    properties: {
        DnsZoneId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        DnsZoneName: {
            type: 'string'
        },
        IsNameBased: {
            type: 'boolean'
        },
        ProviderName: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        WebServerIp: {
            type: 'string'
        },
        MailServerIp: {
            type: 'string'
        },
        WebsiteType: {
            type: 'string'
        },
        ZoneSettings: {
            type: 'string'
        },
        TimeDifference: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const DnsZoneDto_RequestSchema = {
    required: ['DnsZoneName', 'ServerRoleId'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            description: 'Give ownerId if want to create DNS zone for your child.',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            description: "server role id is required to create dns zone, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.",
            format: 'int32'
        },
        DnsZoneName: {
            type: 'string'
        },
        ProviderName: {
            type: 'string',
            description: 'provider name is required to create dns zone.'
        },
        WebServerIp: {
            type: 'string'
        },
        MailServerIp: {
            type: 'string'
        },
        WebsiteType: {
            type: 'string',
            description: "WebsiteType have two possible values '0' for ip base and '1' for name base, it is required only in DNSOnly case."
        }
    }
} as const;

export const DnsZoneDtoSchema = {
    required: ['DnsZoneName'],
    type: 'object',
    properties: {
        DnsZoneId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        DnsZoneName: {
            type: 'string'
        },
        IsNameBased: {
            type: 'boolean'
        },
        ProviderName: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        WebServerIp: {
            type: 'string'
        },
        MailServerIp: {
            type: 'string'
        },
        ZoneSettings: {
            type: 'string'
        },
        TimeDifference: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateDnsZoneDto_RequestSchema = {
    required: ['ZoneSettings'],
    type: 'object',
    properties: {
        ZoneSettings: {
            type: 'string'
        },
        SaveReload: {
            type: 'boolean',
            description: 'Set it true if want to reload zone settings after save.'
        }
    }
} as const;

export const UpdateDnsZoneDtoSchema = {
    type: 'object',
    properties: {
        DnsZoneId: {
            type: 'integer',
            format: 'int32'
        },
        ZoneSettings: {
            type: 'string'
        },
        SaveReload: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DatabasesDtoSchema = {
    type: 'object',
    properties: {
        Databases: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DatabaseDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DatabaseDto_ListSchema = {
    type: 'object',
    properties: {
        DatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        DatabaseName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        DatabasePath: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        },
        InstanceName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        DataFileSize: {
            type: 'integer',
            format: 'int32'
        },
        LogFileSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseUserList: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const DatabaseDto_RequestSchema = {
    required: ['DatabaseName', 'Provider', 'WebsiteId'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            description: 'Give ownerId if want to create database for your child.',
            format: 'int32'
        },
        DatabaseName: {
            type: 'string'
        },
        Provider: {
            type: 'string',
            description: 'Database provider is required to create database.'
        },
        WebsiteId: {
            type: 'integer',
            description: 'Website id is required to create database.',
            format: 'int32'
        },
        InstanceName: {
            type: 'string',
            description: 'Give complete instance name with colon(:) separated port number.'
        },
        ServerRoleId: {
            type: 'integer',
            description: 'Server role id is required to create database.',
            format: 'int32'
        },
        DataFileSize: {
            type: 'integer',
            format: 'int32'
        },
        LogFileSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            description: "Give composite resource id to add database, you can get composite resource id by calling '/composite-resources'.",
            format: 'int32'
        },
        DatabaseUserList: {
            type: 'array',
            description: 'Give the list of database user if want to give permission on this database.',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const DatabaseDtoSchema = {
    required: ['DatabaseName', 'Provider', 'WebsiteName'],
    type: 'object',
    properties: {
        DatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        DatabaseName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        DatabasePath: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        },
        InstanceName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        DataFileSize: {
            type: 'integer',
            format: 'int32'
        },
        LogFileSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseUserList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateDatabaseDto_RequestSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DataFileSize: {
            type: 'integer',
            format: 'int32'
        },
        LogFileSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UpdateDatabaseDtoSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DataFileSize: {
            type: 'integer',
            format: 'int32'
        },
        LogFileSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignUserstoDatabaseDto_RequestSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseName: {
            type: 'string'
        },
        DatabaseUserList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        InstanceName: {
            type: 'string',
            description: 'Give complete instance name with colon(:) separated port number.'
        },
        Provider: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const AssignUserstoDatabaseDtoSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseName: {
            type: 'string'
        },
        DatabaseUserList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        InstanceName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DatabaseConnectivityDtoSchema = {
    required: ['DatabaseUserName', 'DatabaseUserPassword'],
    type: 'object',
    properties: {
        DatabaseUserName: {
            type: 'string'
        },
        DatabaseUserPassword: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DatabaseConnectivityDto_RequestSchema = {
    required: ['DatabaseUserName', 'DatabaseUserPassword'],
    type: 'object',
    properties: {
        DatabaseUserName: {
            type: 'string'
        },
        DatabaseUserPassword: {
            type: 'string'
        }
    }
} as const;

export const ImportDatabaseDto_RequestSchema = {
    required: ['DatabaseName', 'InstanceName', 'Provider', 'WebsiteName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        DatabaseUserName: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        },
        InstanceName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        CreateForMe: {
            type: 'boolean'
        },
        UserName: {
            type: 'string'
        }
    }
} as const;

export const ImportDatabaseDtoSchema = {
    required: ['DatabaseName', 'InstanceName', 'Provider', 'WebsiteName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        DatabaseUserName: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        },
        InstanceName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        CreateForMe: {
            type: 'boolean'
        },
        UserName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DatabaseUsersDtoSchema = {
    type: 'object',
    properties: {
        DatabaseUsers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DatabaseUserDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DatabaseUserDtoSchema = {
    required: ['DatabaseUserName', 'InstanceName', 'Password', 'Provider'],
    type: 'object',
    properties: {
        DatabaseUserId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseUserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        Provider: {
            type: 'string'
        },
        DatabaseList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        InstanceName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        DatabaseName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DatabaseUserDto_ListSchema = {
    type: 'object',
    properties: {
        DatabaseUserId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseUserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        Provider: {
            type: 'string'
        },
        DatabaseList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        InstanceName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        DatabaseName: {
            type: 'string'
        }
    }
} as const;

export const DatabaseUserDto_RequestSchema = {
    required: ['DatabaseUserName', 'InstanceName', 'Password', 'Provider', 'ServerRoleId'],
    type: 'object',
    properties: {
        DatabaseUserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            description: 'Give ownerId if want to create database user for your child.',
            format: 'int32'
        },
        Provider: {
            type: 'string'
        },
        DatabaseList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        InstanceName: {
            type: 'string',
            description: 'Give complete instance name with colon(:) separated port number.'
        },
        ServerRoleId: {
            type: 'integer',
            description: 'server role id is required to create database user.',
            format: 'int32'
        }
    }
} as const;

export const UpdateDatabaseUserDtoSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        DatabaseUserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateDatabaseUserDto_RequestSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        DatabaseUserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        }
    }
} as const;

export const AssignDatabasestoUserDtoSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        InstanceName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        DatabaseUserName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignDatabasestoUserDto_RequestSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        InstanceName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        DatabaseUserName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const DatabaseTasksDtoSchema = {
    type: 'object',
    properties: {
        DatabaseTasks: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DatabaseTaskDto:List'
            }
        },
        DatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DatabaseTaskDto_ListSchema = {
    required: ['TaskName'],
    type: 'object',
    properties: {
        DatabaseTaskId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        TaskName: {
            type: 'string'
        },
        DatabaseFilePath: {
            type: 'string'
        },
        SourceServerId: {
            type: 'integer',
            format: 'int32'
        },
        TargetServerId: {
            type: 'integer',
            format: 'int32'
        },
        TaskStatus: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        DateModified: {
            type: 'string',
            format: 'date-time'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        ModifiedBy: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const DatabaseTaskDtoSchema = {
    required: ['TaskName'],
    type: 'object',
    properties: {
        DatabaseTaskId: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        TaskName: {
            type: 'string'
        },
        DatabaseFilePath: {
            type: 'string'
        },
        SourceServerId: {
            type: 'integer',
            format: 'int32'
        },
        TargetServerId: {
            type: 'integer',
            format: 'int32'
        },
        TaskStatus: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        DateModified: {
            type: 'string',
            format: 'date-time'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        ModifiedBy: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const RestoreDatabaseDtoSchema = {
    type: 'object',
    properties: {
        BrowsePath: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        CurrentPage: {
            type: 'integer',
            format: 'int32'
        },
        PageSize: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const RestoreDatabaseDto_RequestSchema = {
    type: 'object',
    properties: {
        BrowsePath: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const LogRotationDto_RequestSchema = {
    type: 'object',
    properties: {
        ConditionType: {
            type: 'string'
        },
        ActionType: {
            type: 'string'
        },
        SizeLimit: {
            type: 'integer',
            format: 'int32'
        },
        DaysLimit: {
            type: 'integer',
            format: 'int32'
        },
        FileCountLimit: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const LogRotationDtoSchema = {
    type: 'object',
    properties: {
        LogRotationId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ConditionType: {
            type: 'string'
        },
        ActionType: {
            type: 'string'
        },
        SizeLimit: {
            type: 'integer',
            format: 'int32'
        },
        DaysLimit: {
            type: 'integer',
            format: 'int32'
        },
        FileCountLimit: {
            type: 'integer',
            format: 'int32'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        ModifiedBy: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailDomainDtoSchema = {
    required: ['MailDomainName'],
    type: 'object',
    properties: {
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainName: {
            type: 'string'
        },
        MailServerIp: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        MailOnly: {
            type: 'boolean'
        },
        ProviderName: {
            type: 'string'
        },
        DnsServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        },
        AddDns: {
            type: 'boolean'
        },
        OwnerName: {
            type: 'string'
        },
        TotalMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        DnsProviderName: {
            type: 'string'
        },
        MailAccessUrl: {
            type: 'string'
        },
        MailAdminUrl: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailDomainDto_ListSchema = {
    required: ['MailDomainName'],
    type: 'object',
    properties: {
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainName: {
            type: 'string'
        },
        MailServerIp: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        MailOnly: {
            type: 'boolean'
        },
        ProviderName: {
            type: 'string'
        },
        DnsServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        },
        AddDns: {
            type: 'boolean'
        },
        OwnerName: {
            type: 'string'
        },
        TotalMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        DnsProviderName: {
            type: 'string'
        },
        MailAccessUrl: {
            type: 'string'
        },
        MailAdminUrl: {
            type: 'string'
        }
    }
} as const;

export const MailDomainDto_RequestSchema = {
    required: ['MailDomainName'],
    type: 'object',
    properties: {
        MailDomainName: {
            type: 'string'
        },
        MailServerIp: {
            type: 'string',
            description: 'Mail server ip is required if want to add DNS zone with mail domain.'
        },
        OwnerId: {
            type: 'integer',
            description: 'Give ownerId if want to create mail domain for your child.',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            description: "server role id is required to create mail domain, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.",
            format: 'int32'
        },
        ProviderName: {
            type: 'string',
            description: 'provider name is required to create mail domain.'
        },
        AddDns: {
            type: 'boolean',
            description: 'Set it true if want to create DNS zone with mail domain.'
        },
        DnsServerRoleId: {
            type: 'integer',
            description: "DNS server role id is required to create DNS zone if 'AddDns' flag is true, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.",
            format: 'int32'
        },
        DnsProviderName: {
            type: 'string',
            description: "If the 'AddDns' flag is true, it will be mandatory to provide the 'DnsProviderName' string."
        }
    }
} as const;

export const ImportMailDomainDtoSchema = {
    required: ['MailDomainName'],
    type: 'object',
    properties: {
        MailDomainName: {
            type: 'string'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ImportMailDomainDto_RequestSchema = {
    required: ['MailDomainName'],
    type: 'object',
    properties: {
        MailDomainName: {
            type: 'string'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const MailBoxDtoSchema = {
    required: ['MailBoxName', 'MailDomainId', 'Password'],
    type: 'object',
    properties: {
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        ForwardAddress: {
            type: 'string'
        },
        IsDomainAdmin: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailBoxDto_ListSchema = {
    required: ['MailBoxName', 'MailDomainId', 'Password'],
    type: 'object',
    properties: {
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        ForwardAddress: {
            type: 'string'
        },
        IsDomainAdmin: {
            type: 'boolean'
        }
    }
} as const;

export const MailBoxDto_RequestSchema = {
    required: ['MailBoxName', 'Password'],
    type: 'object',
    properties: {
        MailBoxName: {
            type: 'string',
            description: 'Mailbox name is required to add mailbox.'
        },
        MailBoxSize: {
            type: 'integer',
            description: 'Mailbox size is required if composite rsource id is less than 1.',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            description: 'Composite resource id is optional.',
            format: 'int32'
        },
        Password: {
            type: 'string',
            description: 'It is good to set complex password, but simple password is also acceptable.'
        },
        ForwardAddress: {
            type: 'string',
            description: 'Email address should be valid.'
        },
        IsDomainAdmin: {
            type: 'boolean',
            description: 'Set it true if want to create admin type mailbox.'
        }
    }
} as const;

export const UpdateMailBoxDtoSchema = {
    required: ['MailBoxId'],
    type: 'object',
    properties: {
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        ChangePassword: {
            type: 'boolean'
        },
        Password: {
            type: 'string'
        },
        ForwardAddress: {
            type: 'string'
        },
        IsDomainAdmin: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateMailBoxDto_RequestSchema = {
    type: 'object',
    properties: {
        MailBoxName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        ChangePassword: {
            type: 'boolean'
        },
        Password: {
            type: 'string'
        },
        ForwardAddress: {
            type: 'string'
        },
        IsDomainAdmin: {
            type: 'boolean'
        }
    }
} as const;

export const MailboxAliasDtoSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        EmailAddress: {
            type: 'string'
        },
        MailBoxName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailboxAliasDto_ListSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        EmailAddress: {
            type: 'string'
        },
        MailBoxName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        }
    }
} as const;

export const MailboxAliasDto_RequestSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        EmailAddress: {
            type: 'string'
        },
        MailBoxName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        }
    }
} as const;

export const DistributionListDtoSchema = {
    required: ['DistributionListName'],
    type: 'object',
    properties: {
        DistributionListId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxName: {
            type: 'string'
        },
        DistributionListName: {
            type: 'string'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainName: {
            type: 'string'
        },
        MembersList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Members: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DistributionListDto_UpdateSchema = {
    required: ['DistributionListName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxName: {
            type: 'string'
        },
        DistributionListName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        },
        MembersList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Members: {
            type: 'string'
        }
    }
} as const;

export const DistributionListDto_ListSchema = {
    required: ['DistributionListName'],
    type: 'object',
    properties: {
        DistributionListId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxName: {
            type: 'string'
        },
        DistributionListName: {
            type: 'string'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainName: {
            type: 'string'
        },
        MembersList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Members: {
            type: 'string'
        }
    }
} as const;

export const DistributionListDto_RequestSchema = {
    required: ['DistributionListName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        MailBoxName: {
            type: 'string'
        },
        DistributionListName: {
            type: 'string'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainName: {
            type: 'string'
        },
        MembersList: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Members: {
            type: 'string'
        }
    }
} as const;

export const WebsiteFileUploadDtoSchema = {
    required: ['BinaryData', 'FileName'],
    type: 'object',
    properties: {
        FileName: {
            type: 'string'
        },
        BasePath: {
            type: 'string'
        },
        BinaryData: {
            type: 'string'
        }
    }
} as const;

export const WebsiteIoDtoSchema = {
    required: ['ObjectName'],
    type: 'object',
    properties: {
        ObjectName: {
            type: 'string'
        },
        BasePath: {
            type: 'string'
        }
    }
} as const;

export const WebsiteFileContentDtoSchema = {
    required: ['FileName'],
    type: 'object',
    properties: {
        FileName: {
            type: 'string'
        },
        BasePath: {
            type: 'string'
        },
        TextData: {
            type: 'string'
        }
    }
} as const;

export const WebsiteObjectRenameDtoSchema = {
    required: ['ObjectName', 'ObjectNewName'],
    type: 'object',
    properties: {
        ObjectName: {
            type: 'string'
        },
        ObjectNewName: {
            type: 'string'
        },
        BasePath: {
            type: 'string'
        }
    }
} as const;

export const WebsiteFilesZipDtoSchema = {
    required: ['ArchieveName', 'FilesName'],
    type: 'object',
    properties: {
        BasePath: {
            type: 'string'
        },
        FilesName: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ArchieveName: {
            type: 'string'
        }
    }
} as const;

export const PermissionsDtoSchema = {
    required: ['FolderPath', 'Inheritence', 'Operation', 'Trustee', 'WebsiteId'],
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        FolderPath: {
            type: 'string'
        },
        Trustee: {
            type: 'string'
        },
        Inheritence: {
            type: 'string'
        },
        FinalPermission: {
            type: 'string'
        },
        Operation: {
            type: 'string'
        },
        Users: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        PermissionsToSet: {
            '$ref': '#/components/schemas/PermissionDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const PermissionsDto_RequestSchema = {
    required: ['FolderPath', 'Inheritence', 'Operation', 'Trustee', 'WebsiteId'],
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        FolderPath: {
            type: 'string'
        },
        Trustee: {
            type: 'string'
        },
        Inheritence: {
            type: 'string'
        },
        FinalPermission: {
            type: 'string'
        },
        Operation: {
            type: 'string'
        },
        Users: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        PermissionsToSet: {
            '$ref': '#/components/schemas/PermissionDto'
        }
    }
} as const;

export const PermissionDtoSchema = {
    type: 'object',
    properties: {
        FullControl: {
            type: 'boolean'
        },
        Modify: {
            type: 'boolean'
        },
        Read: {
            type: 'boolean'
        },
        Write: {
            type: 'boolean'
        },
        Execute: {
            type: 'boolean'
        },
        Delete: {
            type: 'boolean'
        }
    }
} as const;

export const MailDomainsDtoSchema = {
    type: 'object',
    properties: {
        MailDomains: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MailDomainDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SystemMailDomainListDtoSchema = {
    type: 'object',
    properties: {
        MailDomains: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SystemMailDomainDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SystemMailDomainDtoSchema = {
    type: 'object',
    properties: {
        MailDomainName: {
            type: 'string'
        }
    }
} as const;

export const MailBoxesDtoSchema = {
    type: 'object',
    properties: {
        MailBoxes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MailBoxDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const MailboxAliasesDtoSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MailboxAliasDto:List'
            }
        },
        MailBoxId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DistributionListsDtoSchema = {
    type: 'object',
    properties: {
        DistributionLists: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DistributionListDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const DistributionListMembersDtoSchema = {
    type: 'object',
    properties: {
        DistributionListName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        },
        ListMembers: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const FileFoldersDtoSchema = {
    type: 'object',
    properties: {
        SubFolderStructure: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/FileFolderDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const FileFolderDtoSchema = {
    type: 'object',
    properties: {
        ObjectType: {
            type: 'string'
        },
        Name: {
            type: 'string'
        },
        FullPath: {
            type: 'string'
        },
        CreationTime: {
            type: 'string',
            format: 'date-time'
        },
        LastAccessTime: {
            type: 'string',
            format: 'date-time'
        },
        ModifiedTime: {
            type: 'string',
            format: 'date-time'
        },
        Size: {
            type: 'number',
            format: 'double'
        },
        FileData: {
            type: 'string'
        },
        NewPath: {
            type: 'string'
        },
        BinaryData: {
            type: 'string'
        },
        BinaryDataLength: {
            type: 'integer',
            format: 'int64'
        }
    }
} as const;

export const FileContentOutDtoSchema = {
    type: 'object',
    properties: {
        BinaryData: {
            type: 'string'
        },
        TextData: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserPermissionsDtoSchema = {
    type: 'object',
    properties: {
        UserPermissions: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserPermissionDto'
            }
        },
        ModifiedPath: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserPermissionDtoSchema = {
    type: 'object',
    properties: {
        UserName: {
            type: 'string'
        },
        Permission: {
            type: 'string'
        },
        ApplyTo: {
            type: 'string'
        }
    }
} as const;

export const ReturnPermissionsStatusDtoSchema = {
    type: 'object',
    properties: {
        UserName: {
            type: 'string'
        },
        Permission: {
            type: 'string'
        },
        ApplyTo: {
            type: 'string'
        },
        FolderPath: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const WebsitesDtoSchema = {
    type: 'object',
    properties: {
        Websites: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/WebsiteDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const WebsiteDtoSchema = {
    required: ['OwnerId', 'ProviderName', 'WebsiteName'],
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        RootFolderPath: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        DotnetVersion: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        WebsiteState: {
            type: 'string'
        },
        ExecutePermissions: {
            type: 'boolean'
        },
        IsNameBased: {
            type: 'boolean'
        },
        DotNetEnabled: {
            type: 'boolean'
        },
        PhpEnabled: {
            type: 'boolean'
        },
        PHPVersion: {
            type: 'string'
        },
        PerlEnabled: {
            type: 'boolean'
        },
        ColdFusionEnabled: {
            type: 'boolean'
        },
        StatsEnabled: {
            type: 'boolean'
        },
        IsSubDomain: {
            type: 'boolean'
        },
        Status: {
            type: 'string'
        },
        ReadPermission: {
            type: 'boolean'
        },
        WritePermission: {
            type: 'boolean'
        },
        EnableLogging: {
            type: 'boolean'
        },
        SubDomain: {
            type: 'boolean'
        },
        IsDedicated: {
            type: 'boolean'
        },
        LoggingUpdate: {
            type: 'boolean'
        },
        ExpiryDate: {
            type: 'string',
            format: 'date-time'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        SendMailToUser: {
            type: 'boolean'
        },
        DiskUsage: {
            type: 'number',
            format: 'double'
        },
        BandwidthUsage: {
            type: 'number',
            format: 'double'
        },
        SoftaculousPath: {
            type: 'string'
        },
        WebsiteName: {
            type: 'string'
        },
        ServerType: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        AnonymousUser: {
            type: 'string'
        },
        AnonymousUserPass: {
            type: 'string'
        },
        VirtualDirectoryName: {
            type: 'string'
        },
        DefaultDocuments: {
            type: 'string'
        },
        ApplicationPoolUpdate: {
            type: 'boolean'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        VirDirectoryRootPath: {
            type: 'string'
        },
        HttpRedirect: {
            type: 'string'
        },
        DirectoryBrowsingUpdate: {
            type: 'boolean'
        },
        IpAddressUpdate: {
            type: 'boolean'
        },
        DirectoryBrowsing: {
            type: 'boolean'
        },
        RedirectExactUrl: {
            type: 'boolean'
        },
        RedirectChildOnly: {
            type: 'boolean'
        },
        RedirectPermanent: {
            type: 'boolean'
        },
        DefaultDocUpdate: {
            type: 'boolean'
        },
        DefaultDocEnabled: {
            type: 'boolean'
        },
        AnonymousUpdate: {
            type: 'boolean'
        },
        IntegratedAuthenticationUpdate: {
            type: 'boolean'
        },
        AllowAnonymous: {
            type: 'boolean'
        },
        IntegratedAuthentication: {
            type: 'boolean'
        },
        HttpRedirectUpdate: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const WebsiteDto_RequestSchema = {
    required: ['OwnerId', 'ProviderName', 'WebsiteName'],
    type: 'object',
    properties: {
        WebsiteName: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            description: 'Owner id is required if want to add a website for your child reseller or client.',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            description: "Server role id is required to create website, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.",
            format: 'int32'
        },
        ProviderName: {
            type: 'string',
            description: 'Provider name is required.'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        IsNameBased: {
            type: 'boolean',
            description: 'Set it true to create name base website.'
        },
        DotNetEnabled: {
            type: 'boolean',
            description: 'Set it true to enable dot net in website.'
        },
        PhpEnabled: {
            type: 'boolean',
            description: 'Set it true to enable php in website.'
        },
        PerlEnabled: {
            type: 'boolean',
            description: 'Set it true to enable perl in website.'
        },
        ColdFusionEnabled: {
            type: 'boolean',
            description: 'Set it true to enable cold fusion in website.'
        },
        StatsEnabled: {
            type: 'boolean',
            description: 'Set it true to enable stats in website.'
        },
        VirtualDirectoryName: {
            type: 'string',
            description: "Virtual directory name is required if 'IsNameBased' is set true."
        },
        IsSubDomain: {
            type: 'boolean',
            description: 'Set this flag true to create subdomain.'
        },
        DefaultDocUpdate: {
            type: 'boolean',
            description: 'set this flag true to update default document.'
        },
        DefaultDocuments: {
            type: 'string',
            description: "Default documents is the comma separated list of file extentions it is required if 'DefaultDocUpdate' is set true."
        },
        DirectoryBrowsing: {
            type: 'boolean',
            description: 'Set this flag true to enable directory browsing when you want client browsers to display a Web page that lists the contents of a directory when a request does not specify a document name and IIS cannot return a default document.'
        },
        AllowAnonymous: {
            type: 'boolean',
            description: 'Set this flag true to allow anonymous to a website.'
        },
        IntegratedAuthentication: {
            type: 'boolean',
            description: 'Set this flag true to enable integrated windows authentication.'
        },
        CreateFtpUser: {
            type: 'boolean',
            description: "Set this flag true to create FTP user with website, it is mandatory when provider is 'apache' and PHP handler DSO is not configured."
        },
        FtpUserName: {
            type: 'string',
            description: "FTP user name to create with website, it is mandatory when provider is 'apache' and PHP handler DSO is not configured."
        },
        FtpUserPassword: {
            type: 'string',
            description: "FTP user password to create with password, it is mandatory when provider is 'apache' and PHP handler DSO is not configured."
        }
    }
} as const;

export const WebsiteDto_ListSchema = {
    required: ['OwnerId', 'ProviderName', 'WebsiteName'],
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        RootFolderPath: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        DotnetVersion: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        WebsiteState: {
            type: 'string'
        },
        ExecutePermissions: {
            type: 'boolean'
        },
        IsNameBased: {
            type: 'boolean'
        },
        DotNetEnabled: {
            type: 'boolean'
        },
        PhpEnabled: {
            type: 'boolean'
        },
        PHPVersion: {
            type: 'string'
        },
        PerlEnabled: {
            type: 'boolean'
        },
        ColdFusionEnabled: {
            type: 'boolean'
        },
        StatsEnabled: {
            type: 'boolean'
        },
        IsSubDomain: {
            type: 'boolean'
        },
        Status: {
            type: 'string'
        },
        ReadPermission: {
            type: 'boolean'
        },
        WritePermission: {
            type: 'boolean'
        },
        EnableLogging: {
            type: 'boolean'
        },
        SubDomain: {
            type: 'boolean'
        },
        IsDedicated: {
            type: 'boolean'
        },
        LoggingUpdate: {
            type: 'boolean'
        },
        ExpiryDate: {
            type: 'string',
            format: 'date-time'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        SendMailToUser: {
            type: 'boolean'
        },
        DiskUsage: {
            type: 'number',
            format: 'double'
        },
        BandwidthUsage: {
            type: 'number',
            format: 'double'
        },
        SoftaculousPath: {
            type: 'string'
        },
        WebsiteName: {
            type: 'string'
        },
        ServerType: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        AnonymousUser: {
            type: 'string'
        },
        AnonymousUserPass: {
            type: 'string'
        },
        VirtualDirectoryName: {
            type: 'string'
        },
        DefaultDocuments: {
            type: 'string'
        },
        ApplicationPoolUpdate: {
            type: 'boolean'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        VirDirectoryRootPath: {
            type: 'string'
        },
        HttpRedirect: {
            type: 'string'
        },
        DirectoryBrowsingUpdate: {
            type: 'boolean'
        },
        IpAddressUpdate: {
            type: 'boolean'
        },
        DirectoryBrowsing: {
            type: 'boolean'
        },
        RedirectExactUrl: {
            type: 'boolean'
        },
        RedirectChildOnly: {
            type: 'boolean'
        },
        RedirectPermanent: {
            type: 'boolean'
        },
        DefaultDocUpdate: {
            type: 'boolean'
        },
        DefaultDocEnabled: {
            type: 'boolean'
        },
        AnonymousUpdate: {
            type: 'boolean'
        },
        IntegratedAuthenticationUpdate: {
            type: 'boolean'
        },
        AllowAnonymous: {
            type: 'boolean'
        },
        IntegratedAuthentication: {
            type: 'boolean'
        },
        HttpRedirectUpdate: {
            type: 'boolean'
        }
    }
} as const;

export const WebsiteUpdateDtoSchema = {
    type: 'object',
    properties: {
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        IsNameBased: {
            type: 'boolean'
        },
        PhpEnabled: {
            type: 'boolean'
        },
        DotNetEnabled: {
            type: 'boolean'
        },
        PHPVersion: {
            type: 'string'
        },
        PerlEnabled: {
            type: 'boolean'
        },
        ColdFusionEnabled: {
            type: 'boolean'
        },
        StatsEnabled: {
            type: 'boolean'
        },
        IpAddress: {
            type: 'string'
        }
    }
} as const;

export const ServerWebsitesDtoSchema = {
    type: 'object',
    properties: {
        ServerWebsitesList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ServerWebsiteDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ServerWebsiteDtoSchema = {
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        }
    }
} as const;

export const ImportWebsiteDtoSchema = {
    required: ['ProviderName', 'WebsiteName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        WebsiteName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        CreateForMe: {
            type: 'boolean'
        },
        UserName: {
            type: 'string'
        },
        IPLessDomain: {
            type: 'boolean'
        },
        SubDomain: {
            type: 'boolean'
        },
        MailDomain: {
            type: 'boolean'
        },
        DNS: {
            type: 'boolean'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        RootFolderPath: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ImportWebsiteDto_RequestSchema = {
    required: ['ProviderName', 'WebsiteName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        WebsiteName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        CreateForMe: {
            type: 'boolean'
        },
        UserName: {
            type: 'string'
        },
        IPLessDomain: {
            type: 'boolean'
        },
        SubDomain: {
            type: 'boolean'
        },
        MailDomain: {
            type: 'boolean'
        },
        DNS: {
            type: 'boolean'
        },
        RootFolderPath: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ViewStatsDtoSchema = {
    type: 'object',
    properties: {
        URL: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SslsDtoSchema = {
    type: 'object',
    properties: {
        Ssls: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SslDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SslDtoSchema = {
    required: ['SslName', 'SslPath', 'WebsiteId'],
    type: 'object',
    properties: {
        SslId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        SslName: {
            type: 'string'
        },
        SslPath: {
            type: 'string'
        },
        AllowAnonymous: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SslDto_ListSchema = {
    type: 'object',
    properties: {
        SslId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        SslName: {
            type: 'string'
        },
        SslPath: {
            type: 'string'
        },
        AllowAnonymous: {
            type: 'boolean'
        }
    }
} as const;

export const SslDto_RequestSchema = {
    required: ['SslName', 'SslPath'],
    type: 'object',
    properties: {
        SslName: {
            type: 'string'
        },
        SslPath: {
            type: 'string'
        },
        AllowAnonymous: {
            type: 'boolean'
        }
    }
} as const;

export const IPAddressDtoSchema = {
    type: 'object',
    properties: {
        IPAddress: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const IPAddressDto_RequestSchema = {
    type: 'object',
    properties: {
        IPAddress: {
            type: 'string'
        }
    }
} as const;

export const ParkedDomainsDtoSchema = {
    type: 'object',
    properties: {
        ParkedDomains: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ParkedDomainDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ParkedDomainDtoSchema = {
    required: ['ParkedDomainName'],
    type: 'object',
    properties: {
        ParkedDomainId: {
            type: 'integer',
            format: 'int32'
        },
        ParkedDomainName: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ParkedDomainDto_ListSchema = {
    required: ['ParkedDomainName'],
    type: 'object',
    properties: {
        ParkedDomainId: {
            type: 'integer',
            format: 'int32'
        },
        ParkedDomainName: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ParkedDomainDto_RequestSchema = {
    required: ['ParkedDomainName'],
    type: 'object',
    properties: {
        ParkedDomainName: {
            type: 'string'
        }
    }
} as const;

export const HostHeadersDtoSchema = {
    type: 'object',
    properties: {
        HostHeaders: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/HostHeaderDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const HostHeaderDtoSchema = {
    required: ['HostHeaderName'],
    type: 'object',
    properties: {
        WebsiteName: {
            type: 'string'
        },
        HostHeaderName: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        Port: {
            type: 'integer',
            format: 'int32'
        },
        Prefix: {
            type: 'string'
        },
        Postfix: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const HostHeaderDto_RequestSchema = {
    required: ['HostHeaderName'],
    type: 'object',
    properties: {
        WebsiteName: {
            type: 'string'
        },
        HostHeaderName: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        Port: {
            type: 'integer',
            format: 'int32'
        },
        Prefix: {
            type: 'string'
        },
        Postfix: {
            type: 'string'
        }
    }
} as const;

export const HostHeaderDto_ListSchema = {
    required: ['HostHeaderName'],
    type: 'object',
    properties: {
        WebsiteName: {
            type: 'string'
        },
        HostHeaderName: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        Port: {
            type: 'integer',
            format: 'int32'
        },
        Prefix: {
            type: 'string'
        },
        Postfix: {
            type: 'string'
        }
    }
} as const;

export const VirtualDirectoriesDtoSchema = {
    type: 'object',
    properties: {
        VirtualDirectories: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VirtualDirectoryDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const VirtualDirectoryDtoSchema = {
    required: ['VirtualDirectoryName', 'WebsiteName'],
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualDirectoryName: {
            type: 'string'
        },
        Exists: {
            type: 'boolean'
        },
        ManagedRuntimeVersion: {
            type: 'string'
        },
        IsAppPoolDedicated: {
            type: 'boolean'
        },
        AllowBasicAuthentication: {
            type: 'boolean'
        },
        SystemUser: {
            pattern: '^[A-Za-z0-9_-]{1,10}$',
            type: 'string'
        },
        SystemUserPass: {
            type: 'string'
        },
        WebsiteName: {
            type: 'string'
        },
        ServerType: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        AnonymousUser: {
            type: 'string'
        },
        AnonymousUserPass: {
            type: 'string'
        },
        DefaultDocuments: {
            type: 'string'
        },
        ApplicationPoolUpdate: {
            type: 'boolean'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        VirDirectoryRootPath: {
            type: 'string'
        },
        HttpRedirect: {
            type: 'string'
        },
        DirectoryBrowsingUpdate: {
            type: 'boolean'
        },
        IpAddressUpdate: {
            type: 'boolean'
        },
        DirectoryBrowsing: {
            type: 'boolean'
        },
        RedirectExactUrl: {
            type: 'boolean'
        },
        RedirectChildOnly: {
            type: 'boolean'
        },
        RedirectPermanent: {
            type: 'boolean'
        },
        DefaultDocUpdate: {
            type: 'boolean'
        },
        DefaultDocEnabled: {
            type: 'boolean'
        },
        AnonymousUpdate: {
            type: 'boolean'
        },
        IntegratedAuthenticationUpdate: {
            type: 'boolean'
        },
        AllowAnonymous: {
            type: 'boolean'
        },
        IntegratedAuthentication: {
            type: 'boolean'
        },
        HttpRedirectUpdate: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const VirtualDirectoryDto_RequestSchema = {
    required: ['VirtualDirectoryName', 'WebsiteName'],
    type: 'object',
    properties: {
        VirtualDirectoryName: {
            type: 'string'
        },
        Exists: {
            type: 'boolean'
        },
        ManagedRuntimeVersion: {
            type: 'string'
        },
        IsAppPoolDedicated: {
            type: 'boolean'
        },
        AllowBasicAuthentication: {
            type: 'boolean'
        },
        SystemUser: {
            pattern: '^[A-Za-z0-9_-]{1,10}$',
            type: 'string'
        },
        SystemUserPass: {
            type: 'string'
        },
        WebsiteName: {
            type: 'string'
        },
        ServerType: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        AnonymousUser: {
            type: 'string'
        },
        AnonymousUserPass: {
            type: 'string'
        },
        DefaultDocuments: {
            type: 'string'
        },
        ApplicationPoolUpdate: {
            type: 'boolean'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        VirDirectoryRootPath: {
            type: 'string'
        },
        HttpRedirect: {
            type: 'string'
        },
        DirectoryBrowsingUpdate: {
            type: 'boolean'
        },
        IpAddressUpdate: {
            type: 'boolean'
        },
        DirectoryBrowsing: {
            type: 'boolean'
        },
        RedirectExactUrl: {
            type: 'boolean'
        },
        RedirectChildOnly: {
            type: 'boolean'
        },
        RedirectPermanent: {
            type: 'boolean'
        },
        DefaultDocUpdate: {
            type: 'boolean'
        },
        DefaultDocEnabled: {
            type: 'boolean'
        },
        AnonymousUpdate: {
            type: 'boolean'
        },
        IntegratedAuthenticationUpdate: {
            type: 'boolean'
        },
        AllowAnonymous: {
            type: 'boolean'
        },
        IntegratedAuthentication: {
            type: 'boolean'
        },
        HttpRedirectUpdate: {
            type: 'boolean'
        }
    }
} as const;

export const VirtualDirectoryDto_ListSchema = {
    required: ['VirtualDirectoryName', 'WebsiteName'],
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualDirectoryName: {
            type: 'string'
        },
        Exists: {
            type: 'boolean'
        },
        ManagedRuntimeVersion: {
            type: 'string'
        },
        IsAppPoolDedicated: {
            type: 'boolean'
        },
        AllowBasicAuthentication: {
            type: 'boolean'
        },
        SystemUser: {
            pattern: '^[A-Za-z0-9_-]{1,10}$',
            type: 'string'
        },
        SystemUserPass: {
            type: 'string'
        },
        WebsiteName: {
            type: 'string'
        },
        ServerType: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        AnonymousUser: {
            type: 'string'
        },
        AnonymousUserPass: {
            type: 'string'
        },
        DefaultDocuments: {
            type: 'string'
        },
        ApplicationPoolUpdate: {
            type: 'boolean'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        VirDirectoryRootPath: {
            type: 'string'
        },
        HttpRedirect: {
            type: 'string'
        },
        DirectoryBrowsingUpdate: {
            type: 'boolean'
        },
        IpAddressUpdate: {
            type: 'boolean'
        },
        DirectoryBrowsing: {
            type: 'boolean'
        },
        RedirectExactUrl: {
            type: 'boolean'
        },
        RedirectChildOnly: {
            type: 'boolean'
        },
        RedirectPermanent: {
            type: 'boolean'
        },
        DefaultDocUpdate: {
            type: 'boolean'
        },
        DefaultDocEnabled: {
            type: 'boolean'
        },
        AnonymousUpdate: {
            type: 'boolean'
        },
        IntegratedAuthenticationUpdate: {
            type: 'boolean'
        },
        AllowAnonymous: {
            type: 'boolean'
        },
        IntegratedAuthentication: {
            type: 'boolean'
        },
        HttpRedirectUpdate: {
            type: 'boolean'
        }
    }
} as const;

export const SysUserChangePasswordDtoSchema = {
    required: ['Password', 'SysUser'],
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        },
        SysUser: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SysUserChangePasswordDto_RequestSchema = {
    required: ['Password', 'SysUser'],
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        },
        SysUser: {
            type: 'string'
        }
    }
} as const;

export const ApplicationPoolsWithVDDtoSchema = {
    type: 'object',
    properties: {
        ApplicationPools: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ApplicationPoolWithVDDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ApplicationPoolWithVDDto_ListSchema = {
    type: 'object',
    properties: {
        WebsiteName: {
            type: 'string'
        },
        VirtualDirectoryName: {
            type: 'string'
        },
        VirDirectoryRootPath: {
            type: 'string'
        },
        AppPoolCPUUsage: {
            type: 'integer',
            format: 'int32'
        },
        AppPoolMemoryUsage: {
            type: 'number',
            format: 'double'
        },
        ApplicationPoolIdentity: {
            type: 'integer',
            format: 'int32'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        ManagedRuntimeVersionUpdate: {
            type: 'boolean'
        },
        ManagedRuntimeVersion: {
            type: 'string'
        },
        ManagedPipeLineModeUpdate: {
            type: 'boolean'
        },
        ManagedPipeLineMode: {
            type: 'string'
        },
        MaxVirtualMemory: {
            type: 'integer',
            format: 'int64'
        },
        MaxUsedMemory: {
            type: 'integer',
            format: 'int64'
        },
        MaxCpuUsage: {
            type: 'integer',
            format: 'int64'
        },
        CpuUsageRefreshTime: {
            type: 'integer',
            format: 'int32'
        },
        CpuUsageExceedAction: {
            type: 'integer',
            format: 'int32'
        },
        CpuUsageRefreshTimeUpdate: {
            type: 'boolean'
        },
        MaxVirtualMemoryUpdate: {
            type: 'boolean'
        },
        MaxUsedMemoryUpdate: {
            type: 'boolean'
        },
        MaxCpuUsageUpdate: {
            type: 'boolean'
        },
        CpuUsageExceedActionUpdate: {
            type: 'boolean'
        }
    }
} as const;

export const ApplicationPoolWithVDDtoSchema = {
    type: 'object',
    properties: {
        WebsiteName: {
            type: 'string'
        },
        VirtualDirectoryName: {
            type: 'string'
        },
        VirDirectoryRootPath: {
            type: 'string'
        },
        AppPoolCPUUsage: {
            type: 'integer',
            format: 'int32'
        },
        AppPoolMemoryUsage: {
            type: 'number',
            format: 'double'
        },
        ApplicationPoolIdentity: {
            type: 'integer',
            format: 'int32'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        ManagedRuntimeVersionUpdate: {
            type: 'boolean'
        },
        ManagedRuntimeVersion: {
            type: 'string'
        },
        ManagedPipeLineModeUpdate: {
            type: 'boolean'
        },
        ManagedPipeLineMode: {
            type: 'string'
        },
        MaxVirtualMemory: {
            type: 'integer',
            format: 'int64'
        },
        MaxUsedMemory: {
            type: 'integer',
            format: 'int64'
        },
        MaxCpuUsage: {
            type: 'integer',
            format: 'int64'
        },
        CpuUsageRefreshTime: {
            type: 'integer',
            format: 'int32'
        },
        CpuUsageExceedAction: {
            type: 'integer',
            format: 'int32'
        },
        CpuUsageRefreshTimeUpdate: {
            type: 'boolean'
        },
        MaxVirtualMemoryUpdate: {
            type: 'boolean'
        },
        MaxUsedMemoryUpdate: {
            type: 'boolean'
        },
        MaxCpuUsageUpdate: {
            type: 'boolean'
        },
        CpuUsageExceedActionUpdate: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ApplicationPoolDtoSchema = {
    type: 'object',
    properties: {
        ApplicationPoolIdentity: {
            type: 'integer',
            format: 'int32'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        ManagedRuntimeVersionUpdate: {
            type: 'boolean'
        },
        ManagedRuntimeVersion: {
            type: 'string'
        },
        ManagedPipeLineModeUpdate: {
            type: 'boolean'
        },
        ManagedPipeLineMode: {
            type: 'string'
        },
        MaxVirtualMemory: {
            type: 'integer',
            format: 'int64'
        },
        MaxUsedMemory: {
            type: 'integer',
            format: 'int64'
        },
        MaxCpuUsage: {
            type: 'integer',
            format: 'int64'
        },
        CpuUsageRefreshTime: {
            type: 'integer',
            format: 'int32'
        },
        CpuUsageExceedAction: {
            type: 'integer',
            format: 'int32'
        },
        CpuUsageRefreshTimeUpdate: {
            type: 'boolean'
        },
        MaxVirtualMemoryUpdate: {
            type: 'boolean'
        },
        MaxUsedMemoryUpdate: {
            type: 'boolean'
        },
        MaxCpuUsageUpdate: {
            type: 'boolean'
        },
        CpuUsageExceedActionUpdate: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ApplicationPoolDto_RequestSchema = {
    type: 'object',
    properties: {
        ApplicationPoolIdentity: {
            type: 'integer',
            format: 'int32'
        },
        ApplicationPoolName: {
            type: 'string'
        },
        ManagedRuntimeVersionUpdate: {
            type: 'boolean'
        },
        ManagedRuntimeVersion: {
            type: 'string'
        },
        ManagedPipeLineModeUpdate: {
            type: 'boolean'
        },
        ManagedPipeLineMode: {
            type: 'string'
        },
        MaxVirtualMemory: {
            type: 'integer',
            format: 'int64'
        },
        MaxUsedMemory: {
            type: 'integer',
            format: 'int64'
        },
        MaxCpuUsage: {
            type: 'integer',
            format: 'int64'
        },
        CpuUsageRefreshTime: {
            type: 'integer',
            format: 'int32'
        },
        CpuUsageExceedAction: {
            type: 'integer',
            format: 'int32'
        },
        CpuUsageRefreshTimeUpdate: {
            type: 'boolean'
        },
        MaxVirtualMemoryUpdate: {
            type: 'boolean'
        },
        MaxUsedMemoryUpdate: {
            type: 'boolean'
        },
        MaxCpuUsageUpdate: {
            type: 'boolean'
        },
        CpuUsageExceedActionUpdate: {
            type: 'boolean'
        }
    }
} as const;

export const ApplicationPoolProcessInfoDtoSchema = {
    required: ['ApplicationPoolName'],
    type: 'object',
    properties: {
        ApplicationPoolName: {
            type: 'string'
        },
        AppPoolCPUUsage: {
            type: 'integer',
            format: 'int32'
        },
        AppPoolMemoryUsage: {
            type: 'number',
            format: 'double'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UrlRedirectionDtoSchema = {
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        EnableRedirectUrl: {
            type: 'boolean'
        },
        RedirectUrl: {
            type: 'string'
        },
        RedirectClientExact: {
            type: 'boolean'
        },
        RedirectClientBelow: {
            type: 'boolean'
        },
        RedirectClientPermanent: {
            type: 'boolean'
        },
        EnableDefaultDoc: {
            type: 'boolean'
        },
        DefaultDoc: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UrlRedirectionDto_RequestSchema = {
    type: 'object',
    properties: {
        EnableRedirectUrl: {
            type: 'boolean'
        },
        RedirectUrl: {
            type: 'string'
        },
        RedirectClientExact: {
            type: 'boolean'
        },
        RedirectClientBelow: {
            type: 'boolean'
        },
        RedirectClientPermanent: {
            type: 'boolean'
        },
        EnableDefaultDoc: {
            type: 'boolean'
        },
        DefaultDoc: {
            type: 'string'
        }
    }
} as const;

export const AccessPermissionDtoSchema = {
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        AllowAnonymous: {
            type: 'boolean'
        },
        IntegratedWindowsAuthentication: {
            type: 'boolean'
        },
        AccessPermissions: {
            type: 'boolean'
        },
        EnableLogging: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AccessPermissionDto_RequestSchema = {
    type: 'object',
    properties: {
        AllowAnonymous: {
            type: 'boolean'
        },
        IntegratedWindowsAuthentication: {
            type: 'boolean'
        },
        AccessPermissions: {
            type: 'boolean'
        },
        EnableLogging: {
            type: 'boolean'
        }
    }
} as const;

export const CustomErrorsDtoSchema = {
    type: 'object',
    properties: {
        CustomErrors: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/CustomErrorDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CustomErrorDtoSchema = {
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        },
        HttpError: {
            type: 'string'
        },
        Type: {
            type: 'string'
        },
        Contents: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CustomErrorDto_RequestSchema = {
    type: 'object',
    properties: {
        WebsiteName: {
            type: 'string'
        },
        HttpError: {
            type: 'string'
        },
        Type: {
            type: 'string'
        },
        Contents: {
            type: 'string'
        }
    }
} as const;

export const CustomErrorDto_ListSchema = {
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteName: {
            type: 'string'
        },
        HttpError: {
            type: 'string'
        },
        Type: {
            type: 'string'
        },
        Contents: {
            type: 'string'
        }
    }
} as const;

export const FtpUsersDtoSchema = {
    type: 'object',
    properties: {
        FtpUsers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/FtpUserDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const FtpUserDtoSchema = {
    required: ['Password', 'PermittedPath', 'UserName'],
    type: 'object',
    properties: {
        FtpUserId: {
            type: 'integer',
            format: 'int32'
        },
        FtpUserName: {
            type: 'string'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        PermittedPath: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        Read: {
            type: 'boolean'
        },
        Write: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const FtpUserDto_ListSchema = {
    required: ['Password', 'PermittedPath', 'UserName'],
    type: 'object',
    properties: {
        FtpUserId: {
            type: 'integer',
            format: 'int32'
        },
        FtpUserName: {
            type: 'string'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        PermittedPath: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        Read: {
            type: 'boolean'
        },
        Write: {
            type: 'boolean'
        }
    }
} as const;

export const FtpUserDto_RequestSchema = {
    required: ['Password', 'PermittedPath', 'UserName'],
    type: 'object',
    properties: {
        FtpUserName: {
            type: 'string'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        PermittedPath: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        Read: {
            type: 'boolean'
        },
        Write: {
            type: 'boolean'
        }
    }
} as const;

export const UpdateFtpUserPasswordDtoSchema = {
    required: ['Password', 'UserName'],
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateFtpUserPasswordDto_RequestSchema = {
    required: ['Password', 'UserName'],
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        }
    }
} as const;

export const UpdateFtpUserStatusDtoSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        Flag: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateFtpUserStatusDto_RequestSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'integer',
            format: 'int32'
        },
        Flag: {
            type: 'string'
        }
    }
} as const;

export const UpdateFtpUserPermissionDtoSchema = {
    type: 'object',
    properties: {
        WebsiteId: {
            type: 'integer',
            format: 'int32'
        },
        Read: {
            type: 'boolean'
        },
        Write: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateFtpUserPermissionDto_RequestSchema = {
    type: 'object',
    properties: {
        Read: {
            type: 'boolean'
        },
        Write: {
            type: 'boolean'
        }
    }
} as const;

export const DotNetInstalledVersionsDtoSchema = {
    type: 'object',
    properties: {
        DotNetInstalledVersions: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ScriptingDtoSchema = {
    type: 'object',
    properties: {
        VirtualDirectoryName: {
            type: 'string'
        },
        ManagedRuntimeVersion: {
            type: 'string'
        },
        PHPVersion: {
            type: 'string'
        },
        IsEnabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ScriptingInputModelSchema = {
    type: 'object',
    properties: {
        VirtualDirectoryName: {
            type: 'string'
        },
        DotNetVersion: {
            type: 'string'
        },
        PHPVersion: {
            type: 'string'
        },
        IsEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const SystemUsersDtoSchema = {
    type: 'object',
    properties: {
        SystemUsers: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeSettingsDtoSchema = {
    type: 'object',
    properties: {
        ExchangeServerType: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        User: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        Host: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADPassword: {
            type: 'string'
        },
        ParentOU: {
            type: 'string'
        },
        WebRole: {
            type: 'boolean'
        }
    }
} as const;

export const OrganizationalUnitListDtoSchema = {
    type: 'object',
    properties: {
        OrganizationalUnits: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/OrganizationalUnitDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const OrganizationalUnitDtoSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        Path: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectorySettingsDtoSchema = {
    required: ['ADAdmin', 'ADAdminPassword', 'ServerIp'],
    type: 'object',
    properties: {
        ServerIp: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADAdminPassword: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        RootOrganizationalUnitPath: {
            type: 'string'
        }
    }
} as const;

export const DomainControllerListDtoSchema = {
    type: 'object',
    properties: {
        DomainControllers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExgDomainControllerDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExgDomainControllerDtoSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        Fqdn: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryListDtoSchema = {
    type: 'object',
    properties: {
        ActiveDirectoryList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ActiveDirectoryDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryDtoSchema = {
    required: ['ADAdmin', 'ADAdminPassword', 'DomainController', 'RootOU', 'ServerRoleId'],
    type: 'object',
    properties: {
        ActiveDirectoryTrustId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADAdminPassword: {
            type: 'string'
        },
        RootOU: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        OrganizationCount: {
            type: 'integer',
            format: 'int32'
        },
        IsDeleted: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryDto_RequestSchema = {
    required: ['ADAdmin', 'ADAdminPassword', 'DomainController', 'RootOU', 'ServerRoleId'],
    type: 'object',
    properties: {
        ActiveDirectoryTrustId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADAdminPassword: {
            type: 'string'
        },
        RootOU: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        OrganizationCount: {
            type: 'integer',
            format: 'int32'
        },
        IsDeleted: {
            type: 'boolean'
        }
    }
} as const;

export const ActiveDirectoryDto_AddSchema = {
    required: ['ADAdmin', 'ADAdminPassword', 'DomainController', 'RootOU', 'ServerRoleId'],
    type: 'object',
    properties: {
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADAdminPassword: {
            type: 'string'
        },
        RootOU: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        OrganizationCount: {
            type: 'integer',
            format: 'int32'
        },
        IsDeleted: {
            type: 'boolean'
        }
    }
} as const;

export const ActiveDirectoryDto_ListSchema = {
    required: ['ADAdmin', 'ADAdminPassword', 'DomainController', 'RootOU', 'ServerRoleId'],
    type: 'object',
    properties: {
        ActiveDirectoryTrustId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADAdminPassword: {
            type: 'string'
        },
        RootOU: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        OrganizationCount: {
            type: 'integer',
            format: 'int32'
        },
        IsDeleted: {
            type: 'boolean'
        }
    }
} as const;

export const ActiveDirectoryTrustOrganizationListDtoSchema = {
    required: ['ActiveDirectoryTrustId'],
    type: 'object',
    properties: {
        Organizations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ActiveDirectoryTrustOrganizationDto:List'
            }
        },
        ActiveDirectoryTrustId: {
            type: 'integer',
            format: 'int32'
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryTrustOrganizationListDto_RequestSchema = {
    required: ['ActiveDirectoryTrustId'],
    type: 'object',
    properties: {
        Organizations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ActiveDirectoryTrustOrganizationDto:List'
            }
        },
        ActiveDirectoryTrustId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ActiveDirectoryTrustOrganizationDtoSchema = {
    required: ['OrganizationId'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryTrustOrganizationDto_ListSchema = {
    required: ['OrganizationId'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        }
    }
} as const;

export const OrganizationsDtoSchema = {
    type: 'object',
    properties: {
        Organizations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/OrganizationDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ADOrganizationsDtoSchema = {
    type: 'object',
    properties: {
        Organizations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ADOrganizationDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const OrganizationDtoSchema = {
    required: ['MailServerType', 'SystemName'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MailServerType: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        OWAAccess: {
            type: 'string'
        },
        TotalMailDomains: {
            type: 'integer',
            format: 'int32'
        },
        TotalMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalSharePointSites: {
            type: 'integer',
            format: 'int32'
        },
        TotalSIPDomains: {
            type: 'integer',
            format: 'int32'
        },
        TotalSkypeUsers: {
            type: 'integer',
            format: 'int32'
        },
        IsADSync: {
            type: 'boolean'
        },
        IsDatabaseSync: {
            type: 'boolean'
        },
        IsResourceSync: {
            type: 'boolean'
        },
        Regions: {
            type: 'string'
        },
        DefaultDomain: {
            type: 'string'
        },
        AddressLine1: {
            type: 'string'
        },
        AddressLine2: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        PhoneNumber: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ADOrganizationDto_ListSchema = {
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MailServerType: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        TotalAdUsers: {
            type: 'integer',
            format: 'int32'
        },
        TotalAdGroups: {
            type: 'integer',
            format: 'int32'
        },
        TotalAdContacts: {
            type: 'integer',
            format: 'int32'
        },
        SyncLastRunTime: {
            type: 'string',
            format: 'date-time'
        },
        IsADSync: {
            type: 'boolean'
        },
        IsDatabaseSync: {
            type: 'boolean'
        },
        IsResourceSync: {
            type: 'boolean'
        },
        OUPath: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        ProfileDefaults: {
            type: 'string'
        }
    }
} as const;

export const OrganizationDto_ListSchema = {
    required: ['MailServerType', 'SystemName'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MailServerType: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        OWAAccess: {
            type: 'string'
        },
        TotalMailDomains: {
            type: 'integer',
            format: 'int32'
        },
        TotalMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalSharePointSites: {
            type: 'integer',
            format: 'int32'
        },
        TotalSIPDomains: {
            type: 'integer',
            format: 'int32'
        },
        TotalSkypeUsers: {
            type: 'integer',
            format: 'int32'
        },
        IsADSync: {
            type: 'boolean'
        },
        IsDatabaseSync: {
            type: 'boolean'
        },
        IsResourceSync: {
            type: 'boolean'
        },
        Regions: {
            type: 'string'
        },
        DefaultDomain: {
            type: 'string'
        },
        AddressLine1: {
            type: 'string'
        },
        AddressLine2: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        PhoneNumber: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        }
    }
} as const;

export const OrganizationDto_RequestSchema = {
    required: ['MailServerType', 'SystemName'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MailServerType: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        OWAAccess: {
            type: 'string'
        },
        TotalMailDomains: {
            type: 'integer',
            format: 'int32'
        },
        TotalMailboxes: {
            type: 'integer',
            format: 'int32'
        },
        TotalSharePointSites: {
            type: 'integer',
            format: 'int32'
        },
        TotalSIPDomains: {
            type: 'integer',
            format: 'int32'
        },
        TotalSkypeUsers: {
            type: 'integer',
            format: 'int32'
        },
        IsADSync: {
            type: 'boolean'
        },
        IsDatabaseSync: {
            type: 'boolean'
        },
        IsResourceSync: {
            type: 'boolean'
        },
        Regions: {
            type: 'string'
        },
        DefaultDomain: {
            type: 'string'
        },
        AddressLine1: {
            type: 'string'
        },
        AddressLine2: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        PhoneNumber: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        }
    }
} as const;

export const OrganizationDto_AddSchema = {
    required: ['MailServerType', 'SystemName'],
    type: 'object',
    properties: {
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MailServerType: {
            type: 'string'
        },
        SystemName: {
            type: 'string',
            description: 'Name of the new orgranization.'
        },
        OwnerId: {
            type: 'integer',
            description: 'Give owner ID in case of creating exchange organization for any descendent user.',
            format: 'int32'
        },
        MailboxDatabaseName: {
            type: 'string',
            description: 'Mailbox database name will be used later in the creation of mailbox. This parameter is optional in case of automatic mailbox database selection in the server settings.'
        }
    }
} as const;

export const SharePointOrganizationDtoSchema = {
    required: ['SystemName'],
    type: 'object',
    properties: {
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DomainName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryOrganizationDtoSchema = {
    required: ['ServerRoleId', 'SystemName'],
    type: 'object',
    properties: {
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationSuffix: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryOrganizationDto_RequestSchema = {
    required: ['OrganizationSuffix', 'OwnerId', 'ServerRoleId', 'SystemName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        OrganizationSuffix: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectorySubOrganizationDtoSchema = {
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OuName: {
            type: 'string'
        },
        ParentOuPath: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectorySubOrganizationDto_RequestSchema = {
    required: ['OrganizationId', 'OuName', 'ParentOuPath'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OuName: {
            type: 'string'
        },
        ParentOuPath: {
            type: 'string'
        }
    }
} as const;

export const SharePointOrganizationDto_AddSchema = {
    required: ['SystemName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            description: 'Give owner id in case of creating sharePoint organization for any descendent user.',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string',
            description: 'Name of the new sharePoint organization.'
        },
        DomainName: {
            type: 'string',
            description: "Domain name parameter here is used to add UPNSuffix in Organization's OU."
        },
        Provider: {
            type: 'string'
        }
    }
} as const;

export const SkypeOrganizationDtoSchema = {
    required: ['ServerRoleId', 'SystemName'],
    type: 'object',
    properties: {
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DomainName: {
            type: 'string'
        },
        Provider: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeOrganizationDto_AddSchema = {
    required: ['ServerRoleId', 'SystemName'],
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            description: 'Give owner id in case of creating skype organization for any descendent user.',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string',
            description: 'Name of the new skype organization.'
        },
        Provider: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryUsersListDtoSchema = {
    type: 'object',
    properties: {
        Users: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ActiveDirectoryUserDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveDirectoryUserDtoSchema = {
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        UserLogin: {
            type: 'string'
        },
        UserPrincipalName: {
            type: 'string'
        }
    }
} as const;

export const ExchangeRecipientListDtoSchema = {
    type: 'object',
    properties: {
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto'
            }
        },
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        IsAllSender: {
            type: 'boolean'
        },
        RecipientId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeRecipientListDto_RequestSchema = {
    type: 'object',
    properties: {
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto'
            }
        },
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        IsAllSender: {
            type: 'boolean'
        },
        RecipientId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExchangeRecipientDtoSchema = {
    required: ['EmailAddress'],
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        AutoMapping: {
            type: 'string'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExchangeBlockedDomainRuleDtoSchema = {
    type: 'object',
    properties: {
        BlockedDomainId: {
            type: 'integer',
            format: 'int32'
        },
        RuleName: {
            type: 'string'
        },
        SentToScope: {
            type: 'string'
        },
        FromAddressMatchesPatterns: {
            type: 'string'
        },
        RejectMessageReasonText: {
            type: 'string'
        },
        Enabled: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeBlockedDomainRuleDto_ListSchema = {
    type: 'object',
    properties: {
        BlockedDomainId: {
            type: 'integer',
            format: 'int32'
        },
        RuleName: {
            type: 'string'
        },
        SentToScope: {
            type: 'string'
        },
        FromAddressMatchesPatterns: {
            type: 'string'
        },
        RejectMessageReasonText: {
            type: 'string'
        },
        Enabled: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExchangeBlockedDomainRuleDto_RequestSchema = {
    type: 'object',
    properties: {
        SentToScope: {
            type: 'string',
            description: "You can get possible values of sent to scope by calling 'GET /system-entities/exchange/recipient-locations'.",
            enum: ['NotInOrganization', 'InOrganization', 'ExternalPartner', 'ExternalNonPartner']
        },
        FromAddressMatchesPatterns: {
            type: 'string'
        },
        RejectMessageReasonText: {
            type: 'string'
        }
    }
} as const;

export const ExchangeBlockedDomainRulesDtoSchema = {
    type: 'object',
    properties: {
        BlockedDomainRules: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeBlockedDomainRuleDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeBlockedDomainEnableDisableDtoSchema = {
    type: 'object',
    properties: {
        Enabled: {
            type: 'boolean'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeBlockedDomainEnableDisableDto_RequestSchema = {
    type: 'object',
    properties: {
        Enabled: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangeJournalRuleDtoSchema = {
    required: ['JournalingMailbox', 'JournalingMailboxPassword', 'MailboxSize'],
    type: 'object',
    properties: {
        JournalMailboxId: {
            type: 'integer',
            format: 'int32'
        },
        JournalingMailbox: {
            type: 'string'
        },
        JournalingMailboxPassword: {
            type: 'string'
        },
        MailboxDatabase: {
            type: 'string'
        },
        EnableJournalRule: {
            type: 'boolean'
        },
        IsEnabled: {
            type: 'boolean'
        },
        JournalRuleName: {
            type: 'string'
        },
        MailboxSize: {
            type: 'string'
        },
        MailboxQuota: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeJournalRuleDto_RequestSchema = {
    required: ['JournalingMailbox', 'JournalingMailboxPassword', 'MailboxSize'],
    type: 'object',
    properties: {
        JournalingMailbox: {
            type: 'string'
        },
        JournalingMailboxPassword: {
            type: 'string'
        },
        MailboxSize: {
            type: 'string'
        }
    }
} as const;

export const ExchangeJournalRuleDto_ListSchema = {
    required: ['JournalingMailbox', 'JournalingMailboxPassword', 'MailboxSize'],
    type: 'object',
    properties: {
        JournalMailboxId: {
            type: 'integer',
            format: 'int32'
        },
        JournalingMailbox: {
            type: 'string'
        },
        JournalingMailboxPassword: {
            type: 'string'
        },
        MailboxDatabase: {
            type: 'string'
        },
        EnableJournalRule: {
            type: 'boolean'
        },
        IsEnabled: {
            type: 'boolean'
        },
        JournalRuleName: {
            type: 'string'
        },
        MailboxSize: {
            type: 'string'
        },
        MailboxQuota: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExchangeJournalRulesDtoSchema = {
    type: 'object',
    properties: {
        JournalRules: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeJournalRuleDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeJournalRuleEnableDisableDtoSchema = {
    type: 'object',
    properties: {
        EnableJournalRule: {
            type: 'boolean'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeJournalRuleEnableDisableDto_UpdateSchema = {
    type: 'object',
    properties: {
        EnableJournalRule: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangeMailDisclaimersDtoSchema = {
    type: 'object',
    properties: {
        MailDisclaimers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeMailDisclaimerDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailDisclaimerDtoSchema = {
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        RecipientLocation: {
            type: 'string'
        },
        DisclaimerText: {
            type: 'string'
        },
        Location: {
            type: 'string'
        },
        FallbackAction: {
            type: 'string'
        },
        IsDisabled: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailDisclaimerDto_RequestSchema = {
    type: 'object',
    properties: {
        DisclaimerText: {
            type: 'string'
        },
        Location: {
            type: 'string',
            enum: ['Append', 'Prepend']
        },
        FallbackAction: {
            type: 'string',
            enum: ['Ignore', 'Wrap', 'Reject']
        },
        RecipientLocation: {
            type: 'string',
            description: "You can get possible values of recipient location by calling 'GET /system-entities/exchange/recipient-locations'.",
            enum: ['NotInOrganization', 'InOrganization', 'ExternalPartner', 'ExternalNonPartner']
        }
    }
} as const;

export const ExchangeMailDisclaimerDto_ListSchema = {
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        RecipientLocation: {
            type: 'string'
        },
        DisclaimerText: {
            type: 'string'
        },
        Location: {
            type: 'string'
        },
        FallbackAction: {
            type: 'string'
        },
        IsDisabled: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExchangeMailDisclaimerEnableDisableDtoSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'boolean'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailDisclaimerEnableDisableDto_RequestSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangeServerListDtoSchema = {
    type: 'object',
    properties: {
        ExchangeServers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeServerDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeServerDtoSchema = {
    type: 'object',
    properties: {
        Domain: {
            type: 'string'
        },
        IsClientAccessServer: {
            type: 'string'
        },
        IsMailboxServer: {
            type: 'string'
        },
        AdminDisplayVersion: {
            type: 'string'
        },
        Edition: {
            type: 'string'
        },
        HostName: {
            type: 'string'
        },
        OutLookAnywhereEnabled: {
            type: 'boolean'
        },
        ExchangeVersion: {
            type: 'string'
        },
        DataPath: {
            type: 'string'
        },
        DataPathEx: {
            type: 'string'
        },
        Name: {
            type: 'string'
        },
        Fqdn: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        }
    }
} as const;

export const ServerRoleDtoSchema = {
    type: 'object',
    properties: {
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ServerIp: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        PlatformName: {
            type: 'string'
        },
        WebRoleSettings: {
            '$ref': '#/components/schemas/WebServerRole'
        },
        FtpRoleSettings: {
            '$ref': '#/components/schemas/FtpServerRole'
        },
        DnsRoleSettings: {
            '$ref': '#/components/schemas/DnsServerRole'
        },
        DatabaseRoleSettings: {
            '$ref': '#/components/schemas/DatabaseServerRole'
        },
        MailRoleSettings: {
            '$ref': '#/components/schemas/MailServerRole'
        },
        SharePointRoleSettings: {
            '$ref': '#/components/schemas/SharePointServerRole'
        },
        SkypeRoleSettings: {
            '$ref': '#/components/schemas/SkypeServerRole'
        },
        CrmRoleSettings: {
            '$ref': '#/components/schemas/CrmServerRole'
        },
        VirtualizationRoleSettings: {
            '$ref': '#/components/schemas/VirtualizationServerRole'
        },
        ExchangeRoleSettings: {
            '$ref': '#/components/schemas/ExchangeServerRole'
        },
        BlackBerryRoleSettings: {
            '$ref': '#/components/schemas/BlackBerryServerRole'
        },
        IaasRoleSettings: {
            '$ref': '#/components/schemas/IaasServerRole'
        },
        Office365ServerSettings: {
            '$ref': '#/components/schemas/Office365ServerRole'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ServerRoleDto_ListSchema = {
    type: 'object',
    properties: {
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ServerIp: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        PlatformName: {
            type: 'string'
        }
    }
} as const;

export const WebServerRoleSchema = {
    required: ['Webspace'],
    type: 'object',
    properties: {
        SelectedWebServerType: {
            type: 'string'
        },
        Webspace: {
            type: 'string'
        },
        SelectedFtpServerType: {
            type: 'string'
        },
        VirtualDirectoryName: {
            type: 'string'
        },
        IpLessDomainIp: {
            type: 'string'
        },
        IpLessFtpSite: {
            type: 'string'
        },
        FtpVersion: {
            type: 'string'
        },
        ApplicationPoolEnabled: {
            type: 'boolean'
        },
        SoftaculousEnabled: {
            type: 'boolean'
        },
        SoftaculousPath: {
            type: 'string'
        },
        DomainControllerEnabled: {
            type: 'boolean'
        },
        DomainControllerName: {
            type: 'string'
        },
        DefaultOrganizationalUnit: {
            type: 'string'
        },
        SslWebsite: {
            type: 'string'
        },
        WebServerPort: {
            type: 'string'
        },
        ConfFilePath: {
            type: 'string'
        },
        PidFilePath: {
            type: 'string'
        },
        ServiceFilePath: {
            type: 'string'
        },
        SslEnabledWebsite: {
            type: 'string'
        },
        StatServerType: {
            type: 'string'
        },
        PhpAvailableVersions: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        IndexServerCatalogs: {
            '$ref': '#/components/schemas/IndexServerCatalog'
        },
        PhpVersions: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Php'
            }
        },
        Perl: {
            '$ref': '#/components/schemas/PerlObject'
        },
        DotNet: {
            '$ref': '#/components/schemas/DotNetObject'
        },
        ColdFusion: {
            '$ref': '#/components/schemas/ColdFusionObject'
        },
        AwStats: {
            '$ref': '#/components/schemas/AwStat'
        },
        DeepMetrix: {
            '$ref': '#/components/schemas/DeepMetrixStat'
        },
        SmarterStats: {
            '$ref': '#/components/schemas/SmarterStat'
        },
        Webalizer: {
            '$ref': '#/components/schemas/WebalizerStat'
        },
        WebTrend: {
            '$ref': '#/components/schemas/WebTrendStat'
        }
    }
} as const;

export const IndexServerCatalogSchema = {
    type: 'object',
    properties: {
        IsEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const PhpSchema = {
    type: 'object',
    properties: {
        Version: {
            type: 'string'
        },
        FastCgiEnabled: {
            type: 'boolean'
        },
        Handler: {
            type: 'string'
        },
        InstallPath: {
            type: 'string'
        }
    }
} as const;

export const PerlObjectSchema = {
    type: 'object',
    properties: {
        InstallPath: {
            type: 'string'
        }
    }
} as const;

export const DotNetObjectSchema = {
    type: 'object',
    properties: {
        InstallPath: {
            type: 'string'
        }
    }
} as const;

export const ColdFusionObjectSchema = {
    type: 'object',
    properties: {
        ColdfusionPassword: {
            type: 'string'
        },
        InstallPath: {
            type: 'string'
        }
    }
} as const;

export const AwStatSchema = {
    type: 'object',
    properties: {
        IsEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const DeepMetrixStatSchema = {
    type: 'object',
    properties: {
        RemoteConfigured: {
            type: 'boolean'
        },
        XspVersion: {
            type: 'boolean'
        },
        ServerIp: {
            type: 'string'
        },
        Port: {
            type: 'string'
        },
        AdminName: {
            pattern: '^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$',
            type: 'string'
        },
        AdminPassword: {
            type: 'string'
        }
    }
} as const;

export const SmarterStatSchema = {
    type: 'object',
    properties: {
        IsEnterpriseVersion: {
            type: 'boolean'
        },
        AdminName: {
            type: 'string'
        },
        AdminPassword: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        Port: {
            type: 'string'
        },
        AccessUrl: {
            type: 'string'
        },
        LogsPath: {
            type: 'string'
        }
    }
} as const;

export const WebalizerStatSchema = {
    type: 'object',
    properties: {
        IsEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const WebTrendStatSchema = {
    type: 'object',
    properties: {
        WebTrendVersion: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        Port: {
            type: 'string'
        }
    }
} as const;

export const FtpServerRoleSchema = {
    required: ['Proftpd', 'ServuIniFilePath', 'VsFtpd', 'WuFtpd'],
    type: 'object',
    properties: {
        SelectedFtpServerType: {
            type: 'string'
        },
        IpLessFtpSite: {
            type: 'string'
        },
        VirtualDirectoryName: {
            type: 'string'
        },
        ServuIniFilePath: {
            type: 'string'
        },
        DefaultDomain: {
            type: 'string'
        },
        WuFtpd: {
            type: 'string'
        },
        VsFtpd: {
            type: 'string'
        },
        Proftpd: {
            type: 'string'
        }
    }
} as const;

export const DnsServerRoleSchema = {
    required: ['DnsPath', 'EmailAddress', 'ExpireTime', 'NameServer1', 'NameServer2', 'NumberOfRetries', 'RefreshTime', 'Ttl'],
    type: 'object',
    properties: {
        SelectedDnsServerType: {
            type: 'string'
        },
        DnsPath: {
            type: 'string'
        },
        NameServer1: {
            type: 'string'
        },
        NameServer2: {
            type: 'string'
        },
        NameServer3: {
            type: 'string'
        },
        NameServer4: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        SpfRecord: {
            type: 'string'
        },
        DnsEnabled: {
            type: 'boolean'
        },
        IsSecondaryOnly: {
            type: 'boolean'
        },
        SecondaryEnabled: {
            type: 'boolean'
        },
        SpfEnabled: {
            type: 'boolean'
        },
        Ns3Enabled: {
            type: 'boolean'
        },
        Ns4Enabled: {
            type: 'boolean'
        },
        Ns2ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        Ns3ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        Ns4ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        RefreshTime: {
            type: 'integer',
            format: 'int32'
        },
        NumberOfRetries: {
            type: 'integer',
            format: 'int32'
        },
        ExpireTime: {
            type: 'integer',
            format: 'int32'
        },
        Ttl: {
            type: 'integer',
            format: 'int32'
        },
        ConfFilePath: {
            type: 'string'
        },
        DnsPidFilePath: {
            type: 'string'
        },
        DnsServiceFilePath: {
            type: 'string'
        },
        ChrootEnvironment: {
            type: 'boolean'
        },
        ChrootDirectoryPath: {
            type: 'string'
        },
        DnsRecords: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/DnsRecord'
            }
        }
    }
} as const;

export const DnsRecordSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        Data: {
            type: 'string'
        },
        Preference: {
            type: 'string'
        },
        Type: {
            type: 'string'
        }
    }
} as const;

export const DatabaseServerRoleSchema = {
    type: 'object',
    properties: {
        SqlInstances: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SqlInstance'
            }
        },
        MySqlInstances: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MySqlInstance'
            }
        }
    }
} as const;

export const SqlInstanceSchema = {
    required: ['AdminName', 'AdminPassword', 'DatabasePath', 'IpAddress', 'Port', 'ServerName'],
    type: 'object',
    properties: {
        ServerName: {
            type: 'string'
        },
        DatabasePath: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        Port: {
            type: 'string'
        },
        AdminName: {
            type: 'string'
        },
        AdminPassword: {
            type: 'string'
        }
    }
} as const;

export const MySqlInstanceSchema = {
    required: ['AdminName', 'AdminPassword', 'InstallPath', 'IpAddress', 'Port', 'ServerName'],
    type: 'object',
    properties: {
        ServerName: {
            type: 'string'
        },
        InstallPath: {
            type: 'string'
        },
        IpAddress: {
            type: 'string'
        },
        Port: {
            type: 'string'
        },
        AdminName: {
            type: 'string'
        },
        AdminPassword: {
            type: 'string'
        }
    }
} as const;

export const MailServerRoleSchema = {
    required: ['ServerIp'],
    type: 'object',
    properties: {
        SelectedMailServerType: {
            type: 'string'
        },
        Port: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        MailAccessUrl: {
            type: 'string'
        },
        MailAdminUrl: {
            type: 'string'
        },
        MerakIpBinding: {
            type: 'string'
        },
        Enabled: {
            type: 'string'
        },
        Name: {
            type: 'string'
        },
        MDaemonPort: {
            type: 'string'
        },
        DsnName: {
            type: 'string'
        },
        Database: {
            type: 'string'
        },
        AdminUser: {
            type: 'string'
        },
        AdminPassword: {
            type: 'string'
        },
        VirtualDirPath: {
            type: 'string'
        },
        InstallPath: {
            type: 'string'
        },
        RootAddress: {
            type: 'string'
        },
        ListAdministrator: {
            type: 'string'
        },
        ConfFilePath: {
            type: 'string'
        },
        MailPidFile: {
            type: 'string'
        },
        MailServiceFile: {
            type: 'string'
        },
        SmtpAuthentication: {
            type: 'string'
        },
        VpopHomeDirectory: {
            type: 'string'
        },
        QmailHomeDirectory: {
            type: 'string'
        },
        DovecotConfFile: {
            type: 'string'
        },
        DovecotServiceFile: {
            type: 'string'
        },
        ExternalDllPath: {
            type: 'string'
        },
        SystemDsn: {
            type: 'string'
        },
        DsnUsername: {
            type: 'string'
        },
        DsnPassword: {
            type: 'string'
        }
    }
} as const;

export const SharePointServerRoleSchema = {
    required: ['ADAdmin', 'ADAdminPassword', 'AdminUserName', 'AdminUserPassword', 'HostName', 'RootOu', 'WebApplicationName'],
    type: 'object',
    properties: {
        SelectedSharePointServerType: {
            type: 'string'
        },
        HostName: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        AdminUserName: {
            type: 'string'
        },
        AdminUserPassword: {
            type: 'string'
        },
        DbMaxsize: {
            type: 'string'
        },
        DbWarningsize: {
            type: 'string'
        },
        DefaultWebApp: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        RootOu: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADAdminPassword: {
            type: 'string'
        },
        WebApplicationName: {
            type: 'string'
        }
    }
} as const;

export const SkypeServerRoleSchema = {
    required: ['DomainController', 'RootOu'],
    type: 'object',
    properties: {
        SelectedSkypeServerType: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        Version: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        HostHeader: {
            type: 'string'
        },
        RootOu: {
            type: 'string'
        },
        SimpleUrlType: {
            type: 'string'
        },
        SimpleUrlHostHeader: {
            type: 'string'
        },
        SimpleUrlDefaultDomain: {
            type: 'string'
        },
        HostName: {
            type: 'string'
        },
        AdministratorLogin: {
            type: 'string'
        },
        AdministratorPassword: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADAdminPassword: {
            type: 'string'
        },
        ServerPool: {
            type: 'string'
        },
        ApplicationService: {
            type: 'string'
        }
    }
} as const;

export const CrmServerRoleSchema = {
    required: ['DomainController', 'DomainName', 'InternetFacingDomain', 'RootOu', 'Serverport', 'SqlReportServerUrl', 'UserName', 'UserPassword'],
    type: 'object',
    properties: {
        SelectedCrmServerType: {
            type: 'string'
        },
        DefaultAuthentication: {
            type: 'boolean'
        },
        UserName: {
            type: 'string'
        },
        UserPassword: {
            type: 'string'
        },
        DomainName: {
            type: 'string'
        },
        Serverport: {
            type: 'string'
        },
        BindingType: {
            type: 'string'
        },
        InternetFacingDomain: {
            type: 'string'
        },
        SqlReportServerUrl: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        RootOu: {
            type: 'string'
        }
    }
} as const;

export const VirtualizationServerRoleSchema = {
    required: ['AdministratorLogin', 'AdministratorPassword', 'ExternalNetworkName', 'PreferredDns'],
    type: 'object',
    properties: {
        SelectedVirtualizationServerType: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        ServerApiUrl: {
            type: 'string'
        },
        AdministratorLogin: {
            type: 'string'
        },
        AdministratorPassword: {
            type: 'string'
        },
        ConfirmPassword: {
            type: 'string'
        },
        VirtualMachineRootPath: {
            type: 'string'
        },
        ExternalNetworkName: {
            type: 'string'
        },
        PreferredDns: {
            type: 'string'
        },
        AlternateDns: {
            type: 'string'
        },
        InternalNetworkName: {
            type: 'string'
        },
        BandwidthManagement: {
            type: 'boolean'
        },
        BandwidthTools: {
            type: 'string'
        },
        BandwidthParserPath: {
            type: 'string'
        },
        BandwidthLogFolder: {
            type: 'string'
        },
        BandwidthReportFolder: {
            type: 'string'
        },
        Version: {
            type: 'integer',
            format: 'int32'
        },
        DataStoreName: {
            type: 'string'
        },
        ProviderEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangeServerRoleSchema = {
    type: 'object',
    properties: {
        SelectedExchangeServerType: {
            type: 'string'
        },
        SelectedBlackBerryServer: {
            type: 'string'
        },
        ActAsBackupServerOnly: {
            type: 'boolean'
        },
        SrvRecordEnabled: {
            type: 'boolean'
        },
        SrvHostName: {
            type: 'string'
        },
        MailMxIpAddress: {
            type: 'string'
        },
        ClientAccessServer: {
            type: 'string'
        },
        OwaAccessUrl: {
            type: 'string'
        },
        PublicFolderServer: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        RootOu: {
            type: 'string'
        },
        HostName: {
            type: 'string'
        },
        AdministratorLogin: {
            type: 'string'
        },
        AdministratorPassword: {
            type: 'string'
        },
        DatabaseSelectionMode: {
            type: 'string'
        },
        ActiveDirectoryMode: {
            type: 'string'
        },
        DomainAdministrator: {
            type: 'string'
        },
        DomainPassword: {
            type: 'string'
        }
    }
} as const;

export const BlackBerryServerRoleSchema = {
    required: ['AdminClientPassword', 'AdminClientPath', 'BlackBerryEnterpriseServerName', 'UserName', 'UserPassword'],
    type: 'object',
    properties: {
        SelectedBlackBerryServerType: {
            type: 'string'
        },
        SelectedExchangeServers: {
            type: 'string'
        },
        AdminClientServerName: {
            type: 'string'
        },
        AdminClientPath: {
            type: 'string'
        },
        AdminClientPassword: {
            type: 'string'
        },
        ConfirmPassword: {
            type: 'string'
        },
        AdminServiceServerName: {
            type: 'string'
        },
        BlackBerryEnterpriseServerName: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        UserPassword: {
            type: 'string'
        },
        ConfirmUserPassword: {
            type: 'string'
        },
        AccountType: {
            type: 'string'
        }
    }
} as const;

export const IaasServerRoleSchema = {
    type: 'object',
    properties: {
        IaasConfig: {
            '$ref': '#/components/schemas/IaasConfigsDto'
        },
        SelectedVirtualizationServerType: {
            type: 'string'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const IaasConfigsDtoSchema = {
    type: 'object',
    properties: {
        StepName: {
            type: 'string'
        },
        Data: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IaasKeyValuePair'
            }
        }
    }
} as const;

export const IaasKeyValuePairSchema = {
    type: 'object',
    properties: {
        SystemName: {
            type: 'string'
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const Office365ServerRoleSchema = {
    required: ['ApplicationDomain', 'ApplicationId', 'ApplicationSecret', 'Authority', 'CSPUserName', 'CSPUserPassword', 'DomainSuffix', 'PartnerServiceApiRoot', 'SelectedOffice365ServerType', 'UserApplicationId'],
    type: 'object',
    properties: {
        SelectedOffice365ServerType: {
            type: 'string'
        },
        CSPUserName: {
            type: 'string'
        },
        CSPUserPassword: {
            type: 'string'
        },
        ApplicationSecret: {
            type: 'string'
        },
        PartnerServiceApiRoot: {
            type: 'string'
        },
        ApplicationDomain: {
            type: 'string'
        },
        Regions: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ApplicationId: {
            type: 'string'
        },
        Authority: {
            type: 'string'
        },
        UserApplicationId: {
            type: 'string'
        },
        DomainSuffix: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailDomainsDtoSchema = {
    type: 'object',
    properties: {
        ExchangeMailDomains: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeMailDomainDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailDomainDtoSchema = {
    required: ['MailDomain', 'OrganizationId'],
    type: 'object',
    properties: {
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomain: {
            type: 'string'
        },
        MailDomainType: {
            type: 'string'
        },
        MailServerIp: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        Provider: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        DnsTxtRecord: {
            type: 'string'
        },
        IsVerified: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailDomainDto_RequestSchema = {
    required: ['MailDomain', 'OrganizationId'],
    type: 'object',
    properties: {
        MailDomain: {
            type: 'string'
        },
        MailDomainType: {
            type: 'string',
            enum: ['authoritative', 'internalRelay', 'externalRelay']
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        Provider: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            description: 'Give owner id in case of creating mail domain for any descendent user.',
            format: 'int32'
        }
    }
} as const;

export const ExchangeMailDomainDto_ListSchema = {
    required: ['MailDomain', 'OrganizationId'],
    type: 'object',
    properties: {
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomain: {
            type: 'string'
        },
        MailDomainType: {
            type: 'string'
        },
        MailServerIp: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        Provider: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        DnsTxtRecord: {
            type: 'string'
        },
        IsVerified: {
            type: 'boolean'
        }
    }
} as const;

export const UpdateMailDomainDtoSchema = {
    required: ['MailDomainId', 'MailDomainType'],
    type: 'object',
    properties: {
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainType: {
            type: 'string'
        },
        IsDisabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateMailDomainDto_RequestSchema = {
    required: ['MailDomainType'],
    type: 'object',
    properties: {
        MailDomainType: {
            type: 'string'
        },
        IsDisabled: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangeDistributionListsDtoSchema = {
    type: 'object',
    properties: {
        DistributionList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeDistributionListDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeDistributionListDtoSchema = {
    required: ['DisplayName', 'EmailAddress', 'OrganizationId'],
    type: 'object',
    properties: {
        ExchangeDistributionListId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        EmailAddress: {
            type: 'string'
        },
        IsDistribution: {
            type: 'boolean'
        },
        IsAllSenderAuthenticated: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        InComingMessageSizeLimit: {
            type: 'integer',
            format: 'int32'
        },
        ListAdmin: {
            type: 'string'
        },
        ListType: {
            type: 'string'
        },
        SubOU: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        },
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeDistributionListDto_ListSchema = {
    required: ['DisplayName', 'EmailAddress', 'OrganizationId'],
    type: 'object',
    properties: {
        ExchangeDistributionListId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        EmailAddress: {
            type: 'string'
        },
        IsDistribution: {
            type: 'boolean'
        },
        IsAllSenderAuthenticated: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        InComingMessageSizeLimit: {
            type: 'integer',
            format: 'int32'
        },
        ListAdmin: {
            type: 'string'
        },
        ListType: {
            type: 'string'
        },
        SubOU: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        },
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto'
            }
        }
    }
} as const;

export const ExchangeDistributionListDto_RequestSchema = {
    required: ['DisplayName', 'EmailAddress', 'OrganizationId'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        EmailAddress: {
            type: 'string'
        },
        IsDistribution: {
            type: 'boolean',
            description: "Set it true to create 'distribution' type of list otherwise it will create 'security' type of list."
        },
        IsAllSenderAuthenticated: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        InComingMessageSizeLimit: {
            type: 'integer',
            format: 'int32'
        },
        ListAdmin: {
            type: 'string'
        },
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto:exgRequest'
            }
        }
    }
} as const;

export const ExchangeRecipientDto_exgRequestSchema = {
    required: ['EmailAddress'],
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        }
    }
} as const;

export const UpdateExchangeDLAdminDtoSchema = {
    required: ['ListAdmin'],
    type: 'object',
    properties: {
        ExchangeDistributionListId: {
            type: 'integer',
            format: 'int32'
        },
        ListAdmin: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateExchangeDLAdminDto_RequestSchema = {
    required: ['ListAdmin'],
    type: 'object',
    properties: {
        ListAdmin: {
            type: 'string'
        }
    }
} as const;

export const ExchangeDistributionListMembersDtoSchema = {
    type: 'object',
    properties: {
        ExchangeDistributionListId: {
            type: 'integer',
            format: 'int32'
        },
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeDistributionListMembersDto_RequestSchema = {
    type: 'object',
    properties: {
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto'
            }
        }
    }
} as const;

export const RecipientEmailAddressesDtoSchema = {
    type: 'object',
    properties: {
        EmailAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/RecipientEmailAddressDto:List'
            }
        },
        RecipientId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const RecipientEmailAddressDtoSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        },
        IsPrimary: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const RecipientEmailAddressDto_ListSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        },
        IsPrimary: {
            type: 'boolean'
        }
    }
} as const;

export const SetRecipientPrimaryEmailAddressDtoSchema = {
    type: 'object',
    properties: {
        RecipientId: {
            type: 'integer',
            format: 'int32'
        },
        EmailAddress: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SetRecipientPrimaryEmailAddressDto_RequestSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        }
    }
} as const;

export const AddRecipientEmailAddressDtoSchema = {
    type: 'object',
    properties: {
        RecipientId: {
            type: 'integer',
            format: 'int32'
        },
        EmailAddress: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AddRecipientEmailAddressDto_RequestSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        }
    }
} as const;

export const ExchangeDistributionListAdvancePropertiesDtoSchema = {
    type: 'object',
    properties: {
        ExchangeDistributionListId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxServerType: {
            type: 'string'
        },
        InComingMessageSizeLimit: {
            type: 'integer',
            format: 'int32'
        },
        IsAllSenderAuthenticated: {
            type: 'boolean'
        },
        IsSendOutToOriginator: {
            type: 'boolean'
        },
        IsHideFromList: {
            type: 'boolean'
        },
        ReportToManagerEnabled: {
            type: 'boolean'
        },
        ReportToOriginatorEnabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeDistributionListAdvancePropertiesDto_RequestSchema = {
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxServerType: {
            type: 'string'
        },
        InComingMessageSizeLimit: {
            type: 'integer',
            format: 'int32'
        },
        IsAllSenderAuthenticated: {
            type: 'boolean'
        },
        IsSendOutToOriginator: {
            type: 'boolean'
        },
        IsHideFromList: {
            type: 'boolean'
        },
        ReportToManagerEnabled: {
            type: 'boolean'
        },
        ReportToOriginatorEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangeMailContactsDtoSchema = {
    type: 'object',
    properties: {
        ContactsList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeMailContactDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailContactDto_ListSchema = {
    required: ['ContactName', 'ExternalEmailAddress', 'FirstName', 'LastName', 'OrganizationId'],
    type: 'object',
    properties: {
        ExchangeMailContactId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        PrimaryEmailAddress: {
            type: 'string'
        },
        DistinguishedName: {
            type: 'string'
        },
        ContactName: {
            type: 'string'
        },
        ExternalEmailAddress: {
            type: 'string'
        },
        InternalEmailAddress: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        HiddenFromAddressLists: {
            type: 'boolean'
        },
        IsDisabled: {
            type: 'boolean'
        },
        MaximumRecipients: {
            type: 'integer',
            format: 'int32'
        },
        MaxReceiveSize: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        SubOU: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailContactDto_RequestSchema = {
    required: ['ContactName', 'ExternalEmailAddress', 'FirstName', 'LastName', 'OrganizationId'],
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        ContactName: {
            type: 'string'
        },
        ExternalEmailAddress: {
            type: 'string'
        },
        InternalEmailAddress: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        HiddenFromAddressLists: {
            type: 'boolean'
        },
        MaximumRecipients: {
            type: 'integer',
            format: 'int32'
        },
        MaxReceiveSize: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        }
    }
} as const;

export const ExchangeMailContactDtoSchema = {
    required: ['ContactName', 'ExternalEmailAddress', 'FirstName', 'LastName', 'OrganizationId'],
    type: 'object',
    properties: {
        ExchangeMailContactId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        PrimaryEmailAddress: {
            type: 'string'
        },
        DistinguishedName: {
            type: 'string'
        },
        ContactName: {
            type: 'string'
        },
        ExternalEmailAddress: {
            type: 'string'
        },
        InternalEmailAddress: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        HiddenFromAddressLists: {
            type: 'boolean'
        },
        IsDisabled: {
            type: 'boolean'
        },
        MaximumRecipients: {
            type: 'integer',
            format: 'int32'
        },
        MaxReceiveSize: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        SubOU: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ManagerDto_ResquestSchema = {
    type: 'object',
    properties: {
        Id: {
            type: 'integer',
            format: 'int32'
        },
        Email: {
            type: 'string'
        },
        ManagerType: {
            type: 'string'
        }
    }
} as const;

export const UserGeneralProfileDto_RequestSchema = {
    type: 'object',
    properties: {
        UserDn: {
            type: 'string'
        },
        ObjectType: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Initials: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        StreetAddress: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        CountryId: {
            type: 'integer',
            format: 'int32'
        },
        CountryAbbreviation: {
            type: 'string'
        },
        JobTitle: {
            type: 'string'
        },
        Company: {
            type: 'string'
        },
        Department: {
            type: 'string'
        },
        BusinessPhone: {
            type: 'string'
        },
        HomePhone: {
            type: 'string'
        },
        MobilePhone: {
            type: 'string'
        },
        Fax: {
            type: 'string'
        },
        WebPage: {
            type: 'string'
        },
        Notes: {
            type: 'string'
        },
        Pager: {
            type: 'string'
        },
        UserManager: {
            '$ref': '#/components/schemas/ManagerDto:Resquest'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserGeneralProfileDtoSchema = {
    required: ['State'],
    type: 'object',
    properties: {
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Initials: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        StreetAddress: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        CountryId: {
            type: 'integer',
            format: 'int32'
        },
        JobTitle: {
            type: 'string'
        },
        Company: {
            type: 'string'
        },
        Department: {
            type: 'string'
        },
        BusinessPhone: {
            type: 'string'
        },
        HomePhone: {
            type: 'string'
        },
        MobilePhone: {
            type: 'string'
        },
        Fax: {
            type: 'string'
        },
        WebPage: {
            type: 'string'
        },
        Notes: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailContactGeneralPropertiesDtoSchema = {
    type: 'object',
    properties: {
        ExchangeMailContactId: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailContactGeneralPropertiesDto_RequestSchema = {
    type: 'object',
    properties: {
        ExchangeMailContactId: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        }
    }
} as const;

export const ExchangeMailContactAdvancedPropertiesDtoSchema = {
    type: 'object',
    properties: {
        ExchangeMailContactId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        ExternalEmailAddress: {
            type: 'string'
        },
        HiddenFromAddressLists: {
            type: 'boolean'
        },
        MaximumRecipients: {
            type: 'integer',
            format: 'int32'
        },
        MaxReceiveSize: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailContactAdvancedPropertiesDto_RequestSchema = {
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        ExternalEmailAddress: {
            type: 'string'
        },
        HiddenFromAddressLists: {
            type: 'boolean'
        },
        MaximumRecipients: {
            type: 'integer',
            format: 'int32'
        },
        MaxReceiveSize: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExgMailboxDatabasesDtoSchema = {
    type: 'object',
    properties: {
        MailboxDatabases: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExgMailboxDatabaseDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExgMailboxDatabaseDtoSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        DatabasePath: {
            type: 'string'
        },
        LogFolderPath: {
            type: 'string'
        },
        Mounted: {
            type: 'boolean'
        },
        MountAtStartup: {
            type: 'boolean'
        },
        MailboxDatabaseName: {
            type: 'string'
        },
        IsForMailBoxDB: {
            type: 'boolean'
        },
        IsForArchiveMailboxDB: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const AssignExgMailboxDatabasesDtoSchema = {
    type: 'object',
    properties: {
        MailboxDatabases: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AssignExchangeDatabaseDto'
            }
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignExgMailboxDatabasesDto_RequestSchema = {
    type: 'object',
    properties: {
        MailboxDatabases: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AssignExchangeDatabaseDto'
            }
        }
    }
} as const;

export const AssignExchangeDatabaseDtoSchema = {
    type: 'object',
    properties: {
        MailboxDatabaseName: {
            type: 'string'
        },
        IsForMailBoxDB: {
            type: 'boolean'
        },
        IsForArchiveMailboxDB: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExgUpdateMailboxDatabaseDtoSchema = {
    required: ['MailboxDatabaseName'],
    type: 'object',
    properties: {
        MailboxDatabaseName: {
            type: 'string'
        },
        Mount: {
            type: 'boolean'
        }
    }
} as const;

export const ExgAddMailboxDatabaseDtoSchema = {
    required: ['DatabasePath', 'LogFolderPath', 'MailboxDatabaseName', 'MailboxSever'],
    type: 'object',
    properties: {
        MailboxDatabaseName: {
            type: 'string'
        },
        DatabasePath: {
            type: 'string'
        },
        LogFolderPath: {
            type: 'string'
        },
        MailboxSever: {
            type: 'string'
        },
        Mount: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangePfMailboxesDtoSchema = {
    type: 'object',
    properties: {
        PfMailboxes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangePfMailboxDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePfMailboxDtoSchema = {
    required: ['MailboxDatabase', 'PfMailboxName'],
    type: 'object',
    properties: {
        PfMailboxName: {
            type: 'string'
        },
        MailboxDatabase: {
            type: 'string'
        },
        ExcludeFromServingHierarchy: {
            type: 'boolean'
        }
    }
} as const;

export const UpdateExchangePfMailboxDtoSchema = {
    required: ['PfMailboxName'],
    type: 'object',
    properties: {
        PfMailboxName: {
            type: 'string'
        },
        ExcludeFromServingHierarchy: {
            type: 'boolean'
        }
    }
} as const;

export const AssignExchangePfMailboxDtoSchema = {
    required: ['PfMailboxes', 'UserId'],
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        PfMailboxes: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const ActiveSyncPoliciesDtoSchema = {
    type: 'object',
    properties: {
        ActiveSyncPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ActiveSyncPolicyDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveSyncPolicyDtoSchema = {
    required: ['Name'],
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        DevicePolicyRefreshInterval: {
            type: 'string'
        },
        AllowNonProvisionableDevices: {
            type: 'boolean'
        },
        DevicePasswordEnabled: {
            type: 'boolean'
        },
        AlphanumericDevicePasswordRequired: {
            type: 'boolean'
        },
        MaxInactivityTimeDeviceLock: {
            type: 'string'
        },
        MinDevicePasswordLength: {
            type: 'string'
        },
        PasswordRecoveryEnabled: {
            type: 'boolean'
        },
        RequireDeviceEncryption: {
            type: 'boolean'
        },
        AttachmentsEnabled: {
            type: 'boolean'
        },
        AllowSimpleDevicePassword: {
            type: 'boolean'
        },
        DevicePasswordExpiration: {
            type: 'string'
        },
        DevicePasswordHistory: {
            type: 'string'
        },
        IsDefault: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ActiveSyncPolicyDto_RequestSchema = {
    required: ['Name'],
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        DevicePolicyRefreshInterval: {
            type: 'string'
        },
        AllowNonProvisionableDevices: {
            type: 'boolean'
        },
        DevicePasswordEnabled: {
            type: 'boolean'
        },
        AlphanumericDevicePasswordRequired: {
            type: 'boolean'
        },
        MaxInactivityTimeDeviceLock: {
            type: 'string'
        },
        MinDevicePasswordLength: {
            type: 'string'
        },
        PasswordRecoveryEnabled: {
            type: 'boolean'
        },
        RequireDeviceEncryption: {
            type: 'boolean'
        },
        AttachmentsEnabled: {
            type: 'boolean'
        },
        AllowSimpleDevicePassword: {
            type: 'boolean'
        },
        DevicePasswordExpiration: {
            type: 'string'
        },
        DevicePasswordHistory: {
            type: 'string'
        },
        IsDefault: {
            type: 'boolean'
        }
    }
} as const;

export const ActiveSyncPolicyDto_ListSchema = {
    required: ['Name'],
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        DevicePolicyRefreshInterval: {
            type: 'string'
        },
        AllowNonProvisionableDevices: {
            type: 'boolean'
        },
        DevicePasswordEnabled: {
            type: 'boolean'
        },
        AlphanumericDevicePasswordRequired: {
            type: 'boolean'
        },
        MaxInactivityTimeDeviceLock: {
            type: 'string'
        },
        MinDevicePasswordLength: {
            type: 'string'
        },
        PasswordRecoveryEnabled: {
            type: 'boolean'
        },
        RequireDeviceEncryption: {
            type: 'boolean'
        },
        AttachmentsEnabled: {
            type: 'boolean'
        },
        AllowSimpleDevicePassword: {
            type: 'boolean'
        },
        DevicePasswordExpiration: {
            type: 'string'
        },
        DevicePasswordHistory: {
            type: 'string'
        },
        IsDefault: {
            type: 'boolean'
        }
    }
} as const;

export const DefaultASyncPolicyDtoSchema = {
    required: ['Name'],
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        }
    }
} as const;

export const OutlookAnywhrListDtoSchema = {
    type: 'object',
    properties: {
        OutlookAnywhrList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/OutlookAnywhrDto:List'
            }
        },
        ServerCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const OutlookAnywhrDtoSchema = {
    required: ['AuthenticationMode', 'CasServer', 'HostName'],
    type: 'object',
    properties: {
        HostName: {
            type: 'string'
        },
        CasServer: {
            type: 'string'
        },
        AuthenticationMode: {
            type: 'string'
        },
        SslOffloading: {
            type: 'boolean'
        },
        IpAddress: {
            type: 'string'
        },
        RPCPath: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const OutlookAnywhrDto_ListSchema = {
    required: ['AuthenticationMode', 'CasServer', 'HostName'],
    type: 'object',
    properties: {
        HostName: {
            type: 'string'
        },
        CasServer: {
            type: 'string'
        },
        AuthenticationMode: {
            type: 'string'
        },
        SslOffloading: {
            type: 'boolean'
        },
        IpAddress: {
            type: 'string'
        },
        RPCPath: {
            type: 'string'
        }
    }
} as const;

export const OutlookAnywhrDto_RequestSchema = {
    required: ['AuthenticationMode', 'CasServer', 'HostName'],
    type: 'object',
    properties: {
        HostName: {
            type: 'string'
        },
        CasServer: {
            type: 'string'
        },
        AuthenticationMode: {
            type: 'string'
        },
        SslOffloading: {
            type: 'boolean'
        },
        IpAddress: {
            type: 'string'
        },
        RPCPath: {
            type: 'string'
        }
    }
} as const;

export const OrganizationSyncDtoSchema = {
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        IsResourceSync: {
            type: 'boolean'
        },
        IsADSync: {
            type: 'boolean'
        },
        IsDatabaseSync: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const OrganizationSyncDto_ListSchema = {
    type: 'object',
    properties: {
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        IsResourceSync: {
            type: 'boolean'
        },
        IsADSync: {
            type: 'boolean'
        },
        IsDatabaseSync: {
            type: 'boolean'
        }
    }
} as const;

export const ExgUpdateOrganizationADSyncDtoSchema = {
    type: 'object',
    properties: {
        IsADSync: {
            type: 'boolean'
        },
        IsResourceSync: {
            type: 'boolean'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseName: {
            type: 'string'
        }
    }
} as const;

export const ExgUpdateOrganizationADSyncDto_RequestSchema = {
    type: 'object',
    properties: {
        IsADSync: {
            type: 'boolean'
        },
        IsResourceSync: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabaseName: {
            type: 'string'
        }
    }
} as const;

export const OrganizationsSyncDtoSchema = {
    type: 'object',
    properties: {
        Organizations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/OrganizationSyncDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFoldersDtoSchema = {
    type: 'object',
    properties: {
        PFList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangePublicFolderDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFolderDtoSchema = {
    required: ['OrganizationId', 'PFMailbox', 'PFName'],
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        PFName: {
            type: 'string'
        },
        PFMailbox: {
            type: 'string'
        },
        EmailID: {
            type: 'string'
        },
        OUPath: {
            type: 'string'
        },
        TargetOU: {
            type: 'string'
        },
        AccessRight: {
            type: 'string'
        },
        NewAccessRight: {
            type: 'string'
        },
        OldAccessRight: {
            type: 'string'
        },
        DoForAllUsers: {
            type: 'boolean'
        },
        IsMailEnabled: {
            type: 'boolean'
        },
        PublicFolderType: {
            type: 'string'
        },
        Identity: {
            type: 'string'
        },
        Quota: {
            type: 'string'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        Flag: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFolderDto_ListSchema = {
    required: ['OrganizationId', 'PFMailbox', 'PFName'],
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        PFName: {
            type: 'string'
        },
        PFMailbox: {
            type: 'string'
        },
        EmailID: {
            type: 'string'
        },
        OUPath: {
            type: 'string'
        },
        TargetOU: {
            type: 'string'
        },
        AccessRight: {
            type: 'string'
        },
        NewAccessRight: {
            type: 'string'
        },
        OldAccessRight: {
            type: 'string'
        },
        DoForAllUsers: {
            type: 'boolean'
        },
        IsMailEnabled: {
            type: 'boolean'
        },
        PublicFolderType: {
            type: 'string'
        },
        Identity: {
            type: 'string'
        },
        Quota: {
            type: 'string'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        Flag: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFolderDto_RequestSchema = {
    required: ['OrganizationId', 'PFMailbox', 'PFName'],
    type: 'object',
    properties: {
        PFName: {
            type: 'string'
        },
        PFMailbox: {
            type: 'string'
        },
        EmailID: {
            type: 'string',
            description: "Email Id value depends on 'IsMailEnabled'. If 'IsMailEnabled' is set to true emailId should be provided."
        },
        IsMailEnabled: {
            type: 'boolean'
        },
        PublicFolderType: {
            type: 'string',
            description: "You can get public folder type by calling 'GET /system-entities/exchange/public-folder-types'.",
            enum: ['mail', 'contact', 'calendar', 'task']
        },
        Quota: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExchangePublicFolderGeneralPropertiesDtoSchema = {
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        MaxItemSize: {
            type: 'integer',
            format: 'int32'
        },
        RetentionDays: {
            type: 'integer',
            format: 'int32'
        },
        AgeLimitsDays: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFolderGeneralPropertiesDto_RequestSchema = {
    type: 'object',
    properties: {
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        MaxItemSize: {
            type: 'integer',
            format: 'int32'
        },
        RetentionDays: {
            type: 'integer',
            format: 'int32'
        },
        AgeLimitsDays: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFolderAdvancedPropertiesDtoSchema = {
    required: ['DisplayName', 'MaxIncomingMsgSize', 'MaxOutgoingMsgSize'],
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFolderAdvancedPropertiesDto_RequestSchema = {
    required: ['DisplayName', 'MaxIncomingMsgSize', 'MaxOutgoingMsgSize'],
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        HideFromAddressBook: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangePFUsersListDtoSchema = {
    type: 'object',
    properties: {
        TotalCount: {
            type: 'string'
        },
        PFUsersList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangePFUserDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePFUserDtoSchema = {
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Permission: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePFUserDto_ListSchema = {
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Permission: {
            type: 'string'
        }
    }
} as const;

export const UpdatePFClientPermissionSchema = {
    required: ['NewAccessRight', 'OldAccessRight'],
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        NewAccessRight: {
            type: 'string'
        },
        OldAccessRight: {
            type: 'string'
        },
        ClientEmailAddress: {
            type: 'string'
        },
        DoForAllUsers: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdatePFClientPermission_RequestSchema = {
    required: ['NewAccessRight', 'OldAccessRight'],
    type: 'object',
    properties: {
        NewAccessRight: {
            type: 'string'
        },
        OldAccessRight: {
            type: 'string'
        },
        ClientEmailAddress: {
            type: 'string'
        },
        DoForAllUsers: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangePublicFolderForwardingDtoSchema = {
    required: ['MailboxForwardAddress'],
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        ForwardingUserOrgName: {
            type: 'string'
        },
        UserIdentity: {
            type: 'string'
        },
        ForwardType: {
            type: 'string'
        },
        MailboxForwardAddress: {
            type: 'string'
        },
        DeliverToMailboxAndForward: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFolderForwardingDto_RequestSchema = {
    required: ['MailboxForwardAddress'],
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        ForwardingUserOrgName: {
            type: 'string'
        },
        UserIdentity: {
            type: 'string'
        },
        ForwardType: {
            type: 'string'
        },
        MailboxForwardAddress: {
            type: 'string'
        },
        DeliverToMailboxAndForward: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangePublicFolderEnableDisableDtoSchema = {
    type: 'object',
    properties: {
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        IsMailEnabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangePublicFolderEnableDisableDto_RequestSchema = {
    type: 'object',
    properties: {
        IsMailEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const RolesDtoSchema = {
    type: 'object',
    properties: {
        Roles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/RoleDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const RoleDtoSchema = {
    type: 'object',
    properties: {
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        ServerType: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        RemoteOnly: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const RoleDto_ListSchema = {
    type: 'object',
    properties: {
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        ServerType: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        RemoteOnly: {
            type: 'boolean'
        }
    }
} as const;

export const ServerRolesDtoSchema = {
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ServerRoleDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ServersDtoSchema = {
    type: 'object',
    properties: {
        Servers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ServerDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ServerDtoSchema = {
    required: ['DisplayName', 'SystemName'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        Providers: {
            type: 'string'
        },
        Status: {
            type: 'string'
        },
        BuildNumber: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        UserPassword: {
            type: 'string'
        },
        IsPrimary: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        ReleaseDate: {
            type: 'string',
            format: 'date-time'
        },
        Guid: {
            type: 'string'
        },
        LicenseStatus: {
            type: 'string'
        },
        UsedQuantity: {
            type: 'integer',
            format: 'int32'
        },
        OnPremises: {
            type: 'boolean'
        },
        RbxBackupFrequency: {
            type: 'string'
        },
        RbxLastBackupTime: {
            type: 'string',
            format: 'date-time'
        },
        RbxLastBackupStatus: {
            type: 'string'
        },
        RbxRestoreStatus: {
            type: 'string'
        },
        RbxOperationPercentage: {
            type: 'integer',
            format: 'int32'
        },
        RbxRestoreTime: {
            type: 'string',
            format: 'date-time'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ServerDto_ListSchema = {
    required: ['DisplayName', 'SystemName'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Platform: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        Providers: {
            type: 'string'
        },
        Status: {
            type: 'string'
        },
        BuildNumber: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        UserPassword: {
            type: 'string'
        },
        IsPrimary: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        RoleId: {
            type: 'integer',
            format: 'int32'
        },
        ReleaseDate: {
            type: 'string',
            format: 'date-time'
        },
        Guid: {
            type: 'string'
        },
        LicenseStatus: {
            type: 'string'
        },
        UsedQuantity: {
            type: 'integer',
            format: 'int32'
        },
        OnPremises: {
            type: 'boolean'
        },
        RbxBackupFrequency: {
            type: 'string'
        },
        RbxLastBackupTime: {
            type: 'string',
            format: 'date-time'
        },
        RbxLastBackupStatus: {
            type: 'string'
        },
        RbxRestoreStatus: {
            type: 'string'
        },
        RbxOperationPercentage: {
            type: 'integer',
            format: 'int32'
        },
        RbxRestoreTime: {
            type: 'string',
            format: 'date-time'
        }
    }
} as const;

export const PlansDtoSchema = {
    type: 'object',
    properties: {
        Plans: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/PlanDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const PlanDto_ListSchema = {
    required: ['DisplayName'],
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        Description: {
            type: 'string'
        },
        CancelationPolicy: {
            type: 'string'
        },
        IsAvailable: {
            type: 'boolean'
        },
        VisibleToUsers: {
            type: 'boolean'
        },
        SystemName: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/PlanResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/PlanResourceComponentDto'
            }
        },
        SoldInstances: {
            type: 'integer',
            format: 'int32'
        },
        VisibleToUserIds: {
            type: 'array',
            items: {
                type: 'integer',
                format: 'int32'
            }
        }
    }
} as const;

export const PlanDto_RequestSchema = {
    required: ['DisplayName'],
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string',
            description: 'Name of the new plan.'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        Description: {
            type: 'string'
        },
        CancelationPolicy: {
            type: 'string'
        },
        IsAvailable: {
            type: 'boolean'
        },
        VisibleToUsers: {
            type: 'boolean'
        },
        Resources: {
            type: 'array',
            description: "You can get plan resources by calling 'GET /addons' and composite resources by calling 'GET /composite-resources'.",
            items: {
                '$ref': '#/components/schemas/PlanResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            description: "You can get plan resource component by calling 'GET /virtualization/base-os-types'.",
            items: {
                '$ref': '#/components/schemas/PlanResourceComponentDto'
            }
        },
        SoldInstances: {
            type: 'integer',
            format: 'int32'
        },
        VisibleToUserIds: {
            type: 'array',
            items: {
                type: 'integer',
                format: 'int32'
            }
        }
    }
} as const;

export const PlanDtoSchema = {
    required: ['DisplayName'],
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        Description: {
            type: 'string'
        },
        CancelationPolicy: {
            type: 'string'
        },
        IsAvailable: {
            type: 'boolean'
        },
        VisibleToUsers: {
            type: 'boolean'
        },
        SystemName: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/PlanResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/PlanResourceComponentDto'
            }
        },
        SoldInstances: {
            type: 'integer',
            format: 'int32'
        },
        VisibleToUserIds: {
            type: 'array',
            items: {
                type: 'integer',
                format: 'int32'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const PlanDto_CopySchema = {
    required: ['DisplayName'],
    type: 'object',
    properties: {
        PlanId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        Description: {
            type: 'string'
        },
        CancelationPolicy: {
            type: 'string'
        },
        IsAvailable: {
            type: 'boolean'
        },
        VisibleToUsers: {
            type: 'boolean'
        },
        SystemName: {
            type: 'string'
        },
        DateAdded: {
            type: 'string',
            format: 'date-time'
        },
        Resources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/PlanResourceDto'
            }
        },
        ResourceComponents: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/PlanResourceComponentDto'
            }
        },
        BillingDetails: {
            '$ref': '#/components/schemas/ItemBillingDetailsDto:List'
        },
        SoldInstances: {
            type: 'integer',
            format: 'int32'
        },
        VisibleToUserIds: {
            type: 'array',
            items: {
                type: 'integer',
                format: 'int32'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const PlanResourceDtoSchema = {
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        ProviderName: {
            type: 'string'
        },
        Quantity: {
            type: 'integer',
            format: 'int32'
        },
        IsComposite: {
            type: 'boolean'
        }
    }
} as const;

export const PlanResourceComponentDtoSchema = {
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ComponentName: {
            type: 'string'
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const ExgMailboxesDtoSchema = {
    type: 'object',
    properties: {
        Mailboxes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExgMailboxDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExgMailboxDto_ListSchema = {
    required: ['DisplayName', 'MailboxType', 'MaildomainName'],
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxType: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        IsNewUser: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        MaildomainName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ActiveSync: {
            type: 'boolean'
        },
        ActiveSyncPolicy: {
            type: 'string'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        Flag: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        SAMAccount: {
            type: 'string'
        },
        PrimarySMTPAddress: {
            type: 'string'
        },
        Guid: {
            type: 'string'
        },
        MailboxLitigationHoldEnabled: {
            type: 'boolean'
        },
        ArchiveMailboxId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabase: {
            type: 'string'
        },
        IsResourceMailbox: {
            type: 'boolean'
        },
        SubOU: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        },
        LinkedMasterAccount: {
            type: 'string'
        },
        IsNewLinkedMasterAccount: {
            type: 'boolean'
        },
        ActiveDirectoryTrustId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExgAddMailboxDto_RequestSchema = {
    required: ['DisplayName', 'MailboxType', 'MaildomainName'],
    type: 'object',
    properties: {
        CreateNewUser: {
            type: 'boolean',
            description: 'Set it true to create new user.'
        },
        MailboxType: {
            type: 'string',
            enum: ['usermailbox', 'sharedmailbox', 'linkedmailbox']
        },
        DisplayName: {
            type: 'string'
        },
        Password: {
            type: 'string',
            description: "Password required when 'CreateNewUser' is set true."
        },
        MaildomainName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ActiveSync: {
            type: 'boolean'
        },
        ActiveSyncPolicy: {
            type: 'string'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        LinkedMasterAccount: {
            type: 'string',
            description: "LinkedMasterAccount required when 'MailboxType' is set  as 'linkedmailbox'."
        },
        IsNewLinkedMasterAccount: {
            type: 'boolean',
            description: "IsNewLinkedMasterAccount required when 'MailboxType' is set  as 'linkedmailbox'. Set 'IsNewLinkedMasterAccount' true to create new user. "
        },
        ActiveDirectoryTrustId: {
            type: 'integer',
            description: "ActiveDirectoryTrustId required when 'MailboxType' is set  as 'linkedmailbox'.",
            format: 'int32'
        }
    }
} as const;

export const ExgAddMailboxDto_AddSchema = {
    required: ['DisplayName', 'MailboxType', 'MaildomainName'],
    type: 'object',
    properties: {
        CreateNewUser: {
            type: 'boolean'
        },
        ExistingMailboxUserName: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxType: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        IsNewUser: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        MaildomainName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        Flag: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        SAMAccount: {
            type: 'string'
        },
        PrimarySMTPAddress: {
            type: 'string'
        },
        Guid: {
            type: 'string'
        },
        MailboxLitigationHoldEnabled: {
            type: 'boolean'
        },
        ArchiveMailboxId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabase: {
            type: 'string'
        },
        IsResourceMailbox: {
            type: 'boolean'
        },
        SubOU: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        },
        LinkedMasterAccount: {
            type: 'string'
        },
        IsNewLinkedMasterAccount: {
            type: 'boolean'
        },
        ActiveDirectoryTrustId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExgMailboxDtoSchema = {
    required: ['DisplayName', 'MailboxType', 'MaildomainName'],
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxType: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        IsNewUser: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        MaildomainName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ActiveSync: {
            type: 'boolean'
        },
        ActiveSyncPolicy: {
            type: 'string'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        Flag: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        SAMAccount: {
            type: 'string'
        },
        PrimarySMTPAddress: {
            type: 'string'
        },
        Guid: {
            type: 'string'
        },
        MailboxLitigationHoldEnabled: {
            type: 'boolean'
        },
        ArchiveMailboxId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabase: {
            type: 'string'
        },
        IsResourceMailbox: {
            type: 'boolean'
        },
        SubOU: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        },
        LinkedMasterAccount: {
            type: 'string'
        },
        IsNewLinkedMasterAccount: {
            type: 'boolean'
        },
        ActiveDirectoryTrustId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExgMailboxEnableDisableDto_RequestSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'boolean'
        }
    }
} as const;

export const MailboxActiveSyncSettingsDtoSchema = {
    type: 'object',
    properties: {
        IsActivated: {
            type: 'boolean'
        },
        ActiveSyncMailboxPolicy: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        ActivesyncEnabled: {
            type: 'string'
        },
        IsDefault: {
            type: 'string'
        },
        Identity: {
            type: 'string'
        },
        Name: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateMailboxASyncDto_RequestSchema = {
    type: 'object',
    properties: {
        IsActivated: {
            type: 'boolean'
        },
        ActiveSyncMailboxPolicy: {
            type: 'string'
        }
    }
} as const;

export const ExchangeArchiveMailboxListDtoSchema = {
    type: 'object',
    properties: {
        ArchiveMailboxes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeArchiveMailboxDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeArchiveMailboxDto_ListSchema = {
    required: ['ArchiveDatabase', 'ArchiveQuota', 'ArchiveWarningQuota'],
    type: 'object',
    properties: {
        ArchiveDatabase: {
            type: 'string'
        },
        ArchiveName: {
            type: 'string'
        },
        ArchiveQuota: {
            type: 'string'
        },
        ArchiveWarningQuota: {
            type: 'string'
        },
        ArchiveMailboxSize: {
            type: 'string'
        },
        IsDisabledArchiveMailbox: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UpdateArchiveMailboxDto_RequestSchema = {
    type: 'object',
    properties: {
        ArchiveQuota: {
            type: 'string'
        },
        ArchiveWarningQuota: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxServerType: {
            type: 'string'
        }
    }
} as const;

export const ExchangeArchiveMailboxDtoSchema = {
    required: ['ArchiveDatabase', 'ArchiveQuota', 'ArchiveWarningQuota'],
    type: 'object',
    properties: {
        ArchiveDatabase: {
            type: 'string'
        },
        ArchiveName: {
            type: 'string'
        },
        ArchiveQuota: {
            type: 'string'
        },
        ArchiveWarningQuota: {
            type: 'string'
        },
        ArchiveMailboxSize: {
            type: 'string'
        },
        IsDisabledArchiveMailbox: {
            type: 'string'
        },
        RoleName: {
            type: 'string'
        },
        Count: {
            type: 'integer',
            format: 'int32'
        },
        TotalCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const CreateArchiveMailboxDto_RequestSchema = {
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        ArchiveMailboxDatabase: {
            type: 'string'
        },
        ArchiveQuota: {
            type: 'string'
        },
        ArchiveWarningQuota: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxServerType: {
            type: 'string'
        }
    }
} as const;

export const UpdateArchiveMailboxStatusDto_RequestSchema = {
    type: 'object',
    properties: {
        IsDisabledArchiveMailbox: {
            type: 'boolean'
        }
    }
} as const;

export const UpdateUserGeneralPropertiesDtoSchema = {
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateUserGeneralPropertiesDto_RequestSchema = {
    type: 'object',
    properties: {
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        }
    }
} as const;

export const UserMailboxPasswordDto_RequestSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        }
    }
} as const;

export const UserMailboxEmailAddressesDtoSchema = {
    type: 'object',
    properties: {
        EmailAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserMailboxEmailAddressDto:List'
            }
        },
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserMailboxEmailAddressDto_ListSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        },
        IsPrimary: {
            type: 'boolean'
        }
    }
} as const;

export const SetPrimaryEmailAddressDto_RequestSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        }
    }
} as const;

export const AddUserMailboxEmailAddressDto_RequestSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        }
    }
} as const;

export const ExchangeRecipientListDto_MailboxRequestSchema = {
    type: 'object',
    properties: {
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto'
            }
        },
        PublicFolderId: {
            type: 'integer',
            format: 'int32'
        },
        IsAllSender: {
            type: 'boolean'
        },
        RecipientId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UserMailboxAdvancedPropertiesDtoSchema = {
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        RetentionDays: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        IsRetentionDefault: {
            type: 'boolean'
        },
        IsPermanentDelete: {
            type: 'boolean'
        },
        MailboxDatabase: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UserMailboxAdvancedPropertiesDto_RequestSchema = {
    type: 'object',
    properties: {
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        RetentionDays: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        IsRetentionDefault: {
            type: 'boolean'
        },
        IsPermanentDelete: {
            type: 'boolean'
        },
        MailboxDatabase: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailboxForwardingDtoSchema = {
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        ForwardingUserOrgName: {
            type: 'string'
        },
        UserIdentity: {
            type: 'string'
        },
        ForwardType: {
            type: 'string'
        },
        MailboxForwardAddress: {
            type: 'string',
            description: `Forwarding would be enabled if MailboxForwardAddress has some valid email address is passed.
            Forwarding would be disabled if this property is empty or null.`
        },
        DeliverToMailboxAndForward: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailboxForwardingDto_RequestSchema = {
    type: 'object',
    properties: {
        ForwardingUserOrgName: {
            type: 'string'
        },
        UserIdentity: {
            type: 'string'
        },
        ForwardType: {
            type: 'string'
        },
        MailboxForwardAddress: {
            type: 'string',
            description: `Forwarding would be enabled if MailboxForwardAddress has some valid email address is passed.
            Forwarding would be disabled if this property is empty or null.`
        },
        DeliverToMailboxAndForward: {
            type: 'boolean'
        }
    }
} as const;

export const ExchangeMailboxStatsDtoSchema = {
    type: 'object',
    properties: {
        ItemCount: {
            type: 'string'
        },
        TotalItemSize: {
            type: 'string'
        },
        DeletedItemCount: {
            type: 'string'
        },
        TotalDeletedItemSize: {
            type: 'string'
        },
        LastLogonTime: {
            type: 'string'
        },
        LastLogoffTime: {
            type: 'string'
        },
        Database: {
            type: 'string'
        },
        StorageLimitStatus: {
            type: 'string'
        },
        LastLoggedOnUserAccount: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const LitigationHoldSettingsDtoSchema = {
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ApiUserId: {
            type: 'integer',
            format: 'int32'
        },
        LitigationHoldEnabled: {
            type: 'boolean'
        },
        RetentionUrl: {
            type: 'string'
        },
        RetentionComment: {
            type: 'string'
        },
        LitigationHoldDuration: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const LitigationHoldSettingsDto_RequestSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        LitigationHoldEnabled: {
            type: 'boolean'
        },
        RetentionUrl: {
            type: 'string'
        },
        RetentionComment: {
            type: 'string'
        },
        LitigationHoldDuration: {
            type: 'string'
        }
    }
} as const;

export const ExchangeBulkUserListDtoSchema = {
    type: 'object',
    properties: {
        UsersNotCreated: {
            type: 'integer',
            format: 'int32'
        },
        ExchangeBulkUsers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeBulkUserDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeBulkUserDto_ListSchema = {
    type: 'object',
    properties: {
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        UserName: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        Feasibility: {
            type: 'string'
        },
        StatusMessage: {
            type: 'string'
        },
        PlanId: {
            type: 'string'
        },
        Feasible: {
            type: 'boolean'
        },
        IsCreated: {
            type: 'boolean'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExgBulkMailboxesDto_RequestSchema = {
    type: 'object',
    properties: {
        Mailboxes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExgBulkMailboxDto:List'
            }
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        Country: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        ActiveSync: {
            type: 'boolean'
        },
        ActiveSyncPolicy: {
            type: 'string'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsActivated: {
            type: 'boolean'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        Flag: {
            type: 'string'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        SAMAccount: {
            type: 'string'
        },
        MailboxLitigationHoldEnabled: {
            type: 'boolean'
        },
        MailboxDatabase: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        FileName: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        CountryId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExgBulkMailboxDto_ListSchema = {
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        OfficeLocation: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        Country: {
            type: 'string'
        },
        Feasible: {
            type: 'boolean'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        ActiveSync: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExgBulkMailboxDtoSchema = {
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        },
        EmailAddress: {
            type: 'string'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        OfficeLocation: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        Country: {
            type: 'string'
        },
        Feasible: {
            type: 'boolean'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        ActiveSync: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExgEditBulkMailboxDto_RequestSchema = {
    type: 'object',
    properties: {
        Property: {
            type: 'string'
        },
        IsAllUsers: {
            type: 'boolean'
        },
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeRecipientDto'
            }
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        ActiveSync: {
            type: 'boolean'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        IsRetentionDefault: {
            type: 'boolean'
        },
        IsPermanentDelete: {
            type: 'boolean'
        },
        RetentionDays: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailboxOutOfOfficeDtoSchema = {
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        EnableAutoReply: {
            type: 'boolean'
        },
        SetLimit: {
            type: 'boolean'
        },
        SendExternalMessage: {
            type: 'boolean'
        },
        AutoReplyState: {
            type: 'string'
        },
        InternalMessage: {
            type: 'string'
        },
        ExternalMessage: {
            type: 'string'
        },
        ExternalAudience: {
            type: 'string'
        },
        StartDateTime: {
            type: 'string',
            format: 'date-time'
        },
        EndDateTime: {
            type: 'string',
            format: 'date-time'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeMailboxOutOfOfficeDto_RequestSchema = {
    type: 'object',
    properties: {
        EnableAutoReply: {
            type: 'boolean'
        },
        SetLimit: {
            type: 'boolean'
        },
        SendExternalMessage: {
            type: 'boolean'
        },
        AutoReplyState: {
            type: 'string'
        },
        InternalMessage: {
            type: 'string'
        },
        ExternalMessage: {
            type: 'string'
        },
        ExternalAudience: {
            type: 'string'
        },
        StartDateTime: {
            type: 'string',
            format: 'date-time'
        },
        EndDateTime: {
            type: 'string',
            format: 'date-time'
        }
    }
} as const;

export const ExchangeResourceMailboxesDtoSchema = {
    type: 'object',
    properties: {
        Mailboxes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ExchangeResourceMailboxDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ExchangeResourceMailboxDto_ListSchema = {
    required: ['DisplayName', 'MailDomainName', 'MailboxType'],
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxType: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        Country: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsActivated: {
            type: 'boolean'
        },
        Password: {
            type: 'string'
        },
        ActiveSync: {
            type: 'boolean'
        },
        ActiveSyncPolicy: {
            type: 'string'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        Flag: {
            type: 'string'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        SAMAccount: {
            type: 'string'
        },
        MailboxLitigationHoldEnabled: {
            type: 'boolean'
        },
        ArchiveMailboxId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabase: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        }
    }
} as const;

export const ExchangeResourceMailboxDto_RequestSchema = {
    required: ['DisplayName', 'MailDomainName', 'MailboxType'],
    type: 'object',
    properties: {
        MailboxType: {
            type: 'string',
            description: "you can get mailbox types by calling 'GET /system-entities/exchange/resource-mailbox-types'.",
            enum: ['room', 'equipment']
        },
        DisplayName: {
            type: 'string',
            description: 'Give display of resource mailbox.'
        },
        MailDomainName: {
            type: 'string',
            description: 'Give maildomain name to attach with resource mailbox display name.'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ExchangeResourceMailboxDtoSchema = {
    required: ['DisplayName', 'MailDomainName', 'MailboxType'],
    type: 'object',
    properties: {
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        MailDomainId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxType: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        SystemName: {
            type: 'string'
        },
        MailDomainName: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        Country: {
            type: 'integer',
            format: 'int32'
        },
        IMAP: {
            type: 'boolean'
        },
        POP: {
            type: 'boolean'
        },
        MAPI: {
            type: 'boolean'
        },
        OWA: {
            type: 'boolean'
        },
        MailboxSize: {
            type: 'integer',
            format: 'int32'
        },
        HideFromAddressBook: {
            type: 'boolean'
        },
        MaxIncomingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        MaxOutgoingMsgSize: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsActivated: {
            type: 'boolean'
        },
        Password: {
            type: 'string'
        },
        ActiveSync: {
            type: 'boolean'
        },
        ActiveSyncPolicy: {
            type: 'string'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        Flag: {
            type: 'string'
        },
        ProhibitSend: {
            type: 'integer',
            format: 'int32'
        },
        WarnAt: {
            type: 'integer',
            format: 'int32'
        },
        SAMAccount: {
            type: 'string'
        },
        MailboxLitigationHoldEnabled: {
            type: 'boolean'
        },
        ArchiveMailboxId: {
            type: 'integer',
            format: 'int32'
        },
        MailboxDatabase: {
            type: 'string'
        },
        OfficeLocation: {
            type: 'string'
        },
        OrganizationMSOLId: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourceDelegateListDtoSchema = {
    type: 'object',
    properties: {
        Username: {
            type: 'string'
        },
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceDelegateDto:List'
            }
        },
        RecordCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourceDelegateDto_ListSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        }
    }
} as const;

export const PolicyUserListDtoSchema = {
    type: 'object',
    properties: {
        Username: {
            type: 'string'
        },
        ExchangeRecipients: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/PolicyUserDto:List'
            }
        },
        RecordCount: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const PolicyUserDto_ListSchema = {
    type: 'object',
    properties: {
        EmailAddress: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        }
    }
} as const;

export const ResourceMailboxPropertiesDtoSchema = {
    type: 'object',
    properties: {
        bIsAllRequestOutOfPolicyUpdated: {
            type: 'boolean'
        },
        bIsAllBookInPolicyUpdated: {
            type: 'boolean'
        },
        bIsAllRequestInPolicyUpdated: {
            type: 'boolean'
        },
        bIsAllowConflictsUpdated: {
            type: 'boolean'
        },
        bIsAutomateProcessingUpdated: {
            type: 'boolean'
        },
        bIsAllowRecurringMeetingsUpdated: {
            type: 'boolean'
        },
        bIsScheduleOnlyDuringWorkHoursUpdated: {
            type: 'boolean'
        },
        bIsEnforceSchedulingHorizonUpdated: {
            type: 'boolean'
        },
        bIsBookingWindowInDaysUpdated: {
            type: 'boolean'
        },
        bIsMaximumDurationInMinutesUpdated: {
            type: 'boolean'
        },
        bIsMaximumConflictInstancesUpdated: {
            type: 'boolean'
        },
        bIsConflictPercentageAllowedUpdated: {
            type: 'boolean'
        },
        bIsForwardRequestsToDelegatesUpdated: {
            type: 'boolean'
        },
        bIsDeleteAttachmentsUpdated: {
            type: 'boolean'
        },
        bIsDeleteCommentsUpdated: {
            type: 'boolean'
        },
        bIsDeleteSubjectUpdated: {
            type: 'boolean'
        },
        bIsDeleteNonCalendarItemsUpdated: {
            type: 'boolean'
        },
        bIsAddOrganizerToSubjectUpdated: {
            type: 'boolean'
        },
        bIsRemovePrivatePropertyUpdated: {
            type: 'boolean'
        },
        bIsOrganizerInfoUpdated: {
            type: 'boolean'
        },
        bIsAddAdditionalResponseUpdated: {
            type: 'boolean'
        },
        bIsTentativePendingApprovalUpdated: {
            type: 'boolean'
        },
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        AllowConflicts: {
            type: 'boolean'
        },
        AutomateProcessing: {
            type: 'string'
        },
        AllowRecurringMeetings: {
            type: 'boolean'
        },
        ScheduleOnlyDuringWorkHours: {
            type: 'boolean'
        },
        EnforceSchedulingHorizon: {
            type: 'boolean'
        },
        BookingWindowInDays: {
            type: 'integer',
            format: 'int32'
        },
        MaximumDurationInMinutes: {
            type: 'integer',
            format: 'int32'
        },
        MaximumConflictInstances: {
            type: 'integer',
            format: 'int32'
        },
        ConflictPercentageAllowed: {
            type: 'integer',
            format: 'int32'
        },
        ForwardRequestsToDelegates: {
            type: 'boolean'
        },
        DeleteAttachments: {
            type: 'boolean'
        },
        DeleteComments: {
            type: 'boolean'
        },
        DeleteSubject: {
            type: 'boolean'
        },
        DeleteNonCalendarItems: {
            type: 'boolean'
        },
        AddOrganizerToSubject: {
            type: 'boolean'
        },
        RemovePrivateProperty: {
            type: 'boolean'
        },
        OrganizerInfo: {
            type: 'boolean'
        },
        AddAdditionalResponse: {
            type: 'boolean'
        },
        AdditionalResponse: {
            type: 'string'
        },
        TentativePendingApproval: {
            type: 'boolean'
        },
        AllRequestOutOfPolicy: {
            type: 'boolean'
        },
        AllBookInPolicy: {
            type: 'boolean'
        },
        AllRequestInPolicy: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourceMailboxPropertiesDto_RequestSchema = {
    type: 'object',
    properties: {
        bIsAllRequestOutOfPolicyUpdated: {
            type: 'boolean'
        },
        bIsAllBookInPolicyUpdated: {
            type: 'boolean'
        },
        bIsAllRequestInPolicyUpdated: {
            type: 'boolean'
        },
        bIsAllowConflictsUpdated: {
            type: 'boolean'
        },
        bIsAutomateProcessingUpdated: {
            type: 'boolean'
        },
        bIsAllowRecurringMeetingsUpdated: {
            type: 'boolean'
        },
        bIsScheduleOnlyDuringWorkHoursUpdated: {
            type: 'boolean'
        },
        bIsEnforceSchedulingHorizonUpdated: {
            type: 'boolean'
        },
        bIsBookingWindowInDaysUpdated: {
            type: 'boolean'
        },
        bIsMaximumDurationInMinutesUpdated: {
            type: 'boolean'
        },
        bIsMaximumConflictInstancesUpdated: {
            type: 'boolean'
        },
        bIsConflictPercentageAllowedUpdated: {
            type: 'boolean'
        },
        bIsForwardRequestsToDelegatesUpdated: {
            type: 'boolean'
        },
        bIsDeleteAttachmentsUpdated: {
            type: 'boolean'
        },
        bIsDeleteCommentsUpdated: {
            type: 'boolean'
        },
        bIsDeleteSubjectUpdated: {
            type: 'boolean'
        },
        bIsDeleteNonCalendarItemsUpdated: {
            type: 'boolean'
        },
        bIsAddOrganizerToSubjectUpdated: {
            type: 'boolean'
        },
        bIsRemovePrivatePropertyUpdated: {
            type: 'boolean'
        },
        bIsOrganizerInfoUpdated: {
            type: 'boolean'
        },
        bIsAddAdditionalResponseUpdated: {
            type: 'boolean'
        },
        bIsTentativePendingApprovalUpdated: {
            type: 'boolean'
        },
        MailboxId: {
            type: 'integer',
            format: 'int32'
        },
        AllowConflicts: {
            type: 'boolean'
        },
        AutomateProcessing: {
            type: 'string'
        },
        AllowRecurringMeetings: {
            type: 'boolean'
        },
        ScheduleOnlyDuringWorkHours: {
            type: 'boolean'
        },
        EnforceSchedulingHorizon: {
            type: 'boolean'
        },
        BookingWindowInDays: {
            type: 'integer',
            format: 'int32'
        },
        MaximumDurationInMinutes: {
            type: 'integer',
            format: 'int32'
        },
        MaximumConflictInstances: {
            type: 'integer',
            format: 'int32'
        },
        ConflictPercentageAllowed: {
            type: 'integer',
            format: 'int32'
        },
        ForwardRequestsToDelegates: {
            type: 'boolean'
        },
        DeleteAttachments: {
            type: 'boolean'
        },
        DeleteComments: {
            type: 'boolean'
        },
        DeleteSubject: {
            type: 'boolean'
        },
        DeleteNonCalendarItems: {
            type: 'boolean'
        },
        AddOrganizerToSubject: {
            type: 'boolean'
        },
        RemovePrivateProperty: {
            type: 'boolean'
        },
        OrganizerInfo: {
            type: 'boolean'
        },
        AddAdditionalResponse: {
            type: 'boolean'
        },
        AdditionalResponse: {
            type: 'string'
        },
        TentativePendingApproval: {
            type: 'boolean'
        },
        AllRequestOutOfPolicy: {
            type: 'boolean'
        },
        AllBookInPolicy: {
            type: 'boolean'
        },
        AllRequestInPolicy: {
            type: 'boolean'
        }
    }
} as const;

export const SharePointUserWebApplicationListDtoSchema = {
    type: 'object',
    properties: {
        SharePointUserWebApplications: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointUserWebApplicationDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointUserWebApplicationDto_RequestSchema = {
    required: ['ServerRoleId', 'SharePointWebApplicationName'],
    type: 'object',
    properties: {
        SharePointWebApplicationId: {
            type: 'integer',
            format: 'int32'
        },
        SharePointWebApplicationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        }
    }
} as const;

export const SharePointUserWebApplicationDtoSchema = {
    required: ['ServerRoleId', 'SharePointWebApplicationName'],
    type: 'object',
    properties: {
        SharePointWebApplicationId: {
            type: 'integer',
            format: 'int32'
        },
        SharePointWebApplicationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        }
    }
} as const;

export const AssignSharePointWebApplicationDtoSchema = {
    type: 'object',
    properties: {
        SharePointWebApplications: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointUserWebApplicationDto'
            }
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignSharePointWebApplicationDto_RequestSchema = {
    type: 'object',
    properties: {
        SharePointWebApplications: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointUserWebApplicationDto:Request'
            }
        }
    }
} as const;

export const SharePointGroupListDtoSchema = {
    type: 'object',
    properties: {
        SharePointGroups: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointGroupDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointGroupDtoSchema = {
    required: ['Description', 'GroupName'],
    type: 'object',
    properties: {
        GroupName: {
            type: 'string'
        },
        GroupLogin: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        Dn: {
            type: 'string'
        },
        SiteId: {
            type: 'string'
        },
        SiteUrl: {
            type: 'string'
        },
        GroupAdministrator: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        SharePointRoles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointRoleDto'
            }
        },
        SharePointUsersLogin: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointGroupDto_RequestSchema = {
    required: ['Description', 'GroupName'],
    type: 'object',
    properties: {
        GroupName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        GroupAdministrator: {
            type: 'string',
            description: "you can get group administrator by calling 'GET /sharepoint/sites/{siteId}/users'."
        },
        SharePointRoles: {
            type: 'array',
            description: "you can get SharePoint roles by calling 'GET /sharepoint/sites/{sharePointSiteId}/roles'.",
            items: {
                '$ref': '#/components/schemas/SharePointRoleDto'
            }
        },
        SharePointUsersLogin: {
            type: 'array',
            description: "you can get SharePoint users login by calling 'GET /sharepoint/sites/{siteId}/users'.",
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const SharePointGroupDto_ListSchema = {
    required: ['Description', 'GroupName'],
    type: 'object',
    properties: {
        GroupName: {
            type: 'string'
        },
        GroupLogin: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        Dn: {
            type: 'string'
        },
        SiteId: {
            type: 'string'
        },
        SiteUrl: {
            type: 'string'
        },
        GroupAdministrator: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        SharePointRoles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointRoleDto'
            }
        },
        SharePointUsersLogin: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const SharePointRoleDtoSchema = {
    type: 'object',
    properties: {
        RoleName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        }
    }
} as const;

export const SharePointRoleListDtoSchema = {
    type: 'object',
    properties: {
        SharePointRoles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointRoleDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointRoleListDto_RequestSchema = {
    type: 'object',
    properties: {
        SharePointRoles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointRoleDto'
            }
        }
    }
} as const;

export const SharePointUserListDtoSchema = {
    type: 'object',
    properties: {
        SPUsers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointUserDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointUserDto_ListSchema = {
    required: ['UserName'],
    type: 'object',
    properties: {
        CreateNewUser: {
            type: 'boolean'
        },
        SPUserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        UserEmailAddress: {
            type: 'string'
        },
        UserPassword: {
            type: 'string'
        },
        UserLogin: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        SiteId: {
            type: 'integer',
            format: 'int32'
        },
        SiteUrl: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        SharePointRoles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointRoleDto'
            }
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        }
    }
} as const;

export const SharePointUserDto_RequestSchema = {
    required: ['UserName'],
    type: 'object',
    properties: {
        CreateNewUser: {
            type: 'boolean',
            description: 'Set it true to create new user.'
        },
        UserName: {
            type: 'string'
        },
        UserEmailAddress: {
            type: 'string',
            description: "User email address is required when 'CreateNewUser' is true."
        },
        UserPassword: {
            type: 'string',
            description: "User password is required when 'CreateNewUser' is true."
        },
        SharePointRoles: {
            type: 'array',
            description: "you can get SharePoint roles by calling 'GET /sharepoint/sites/{sharePointSiteId}/roles",
            items: {
                '$ref': '#/components/schemas/SharePointRoleDto'
            }
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        }
    }
} as const;

export const SharePointUserDtoSchema = {
    required: ['UserName'],
    type: 'object',
    properties: {
        CreateNewUser: {
            type: 'boolean'
        },
        SPUserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        UserEmailAddress: {
            type: 'string'
        },
        UserPassword: {
            type: 'string'
        },
        UserLogin: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        SiteId: {
            type: 'integer',
            format: 'int32'
        },
        SiteUrl: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        SharePointRoles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointRoleDto'
            }
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointGroupMemberListDtoSchema = {
    type: 'object',
    properties: {
        SharePointGroupMembers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointGroupMemberDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointGroupMemberListDto_RequestSchema = {
    type: 'object',
    properties: {
        SharePointGroupMembers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointGroupMemberDto:List'
            }
        }
    }
} as const;

export const SharePointGroupMemberDtoSchema = {
    type: 'object',
    properties: {
        UserLogin: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointGroupMemberDto_ListSchema = {
    type: 'object',
    properties: {
        UserLogin: {
            type: 'string'
        }
    }
} as const;

export const SharePointSettingsDtoSchema = {
    required: ['AdminUserName', 'AdminUserPassword', 'HostName', 'SharePointServerType'],
    type: 'object',
    properties: {
        SharePointServerType: {
            type: 'string'
        },
        HostName: {
            type: 'string'
        },
        AdminUserName: {
            type: 'string'
        },
        AdminUserPassword: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADAdminPassword: {
            type: 'string'
        },
        ParentOU: {
            type: 'string'
        },
        WebRole: {
            type: 'boolean'
        },
        WebApplication: {
            type: 'string'
        }
    }
} as const;

export const SharePointWebApplicationListDtoSchema = {
    type: 'object',
    properties: {
        SharePointWebApplications: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointWebApplicationDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointWebApplicationDtoSchema = {
    type: 'object',
    properties: {
        Url: {
            type: 'string'
        },
        Name: {
            type: 'string'
        }
    }
} as const;

export const SharePointLocaleListDtoSchema = {
    type: 'object',
    properties: {
        SharePointLocales: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointLocaleDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointLocaleDtoSchema = {
    type: 'object',
    properties: {
        DisplayName: {
            type: 'string'
        },
        Tag: {
            type: 'string'
        },
        Lcid: {
            type: 'string'
        }
    }
} as const;

export const SharePointWebTemplateListDtoSchema = {
    type: 'object',
    properties: {
        SharePointWebTemplates: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointWebTemplateDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointWebTemplateDtoSchema = {
    required: ['Lcid'],
    type: 'object',
    properties: {
        TemplateId: {
            type: 'string'
        },
        Name: {
            type: 'string'
        },
        Lcid: {
            type: 'string'
        }
    }
} as const;

export const SharePointSiteListDtoSchema = {
    type: 'object',
    properties: {
        SPSites: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SharePointSiteDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointSiteDtoSchema = {
    required: ['LanguageId', 'OrganizationId', 'SPDomain', 'SPHostHeader', 'ServerRoleId', 'SharePointUserName', 'SharePointUserPassword', 'SiteTemplateId', 'SiteTitle'],
    type: 'object',
    properties: {
        SPSiteId: {
            type: 'integer',
            format: 'int32'
        },
        SPHostHeader: {
            type: 'string'
        },
        SPDomain: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MaxDatabaseSize: {
            type: 'integer',
            format: 'int32'
        },
        SPUserUsage: {
            type: 'integer',
            format: 'int32'
        },
        SPGroupUsage: {
            type: 'integer',
            format: 'int32'
        },
        IsSubSite: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DBStorageUsage: {
            type: 'number',
            format: 'double'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ParentSiteId: {
            type: 'integer',
            format: 'int32'
        },
        SitePath: {
            type: 'string'
        },
        SiteUrl: {
            type: 'string'
        },
        IsDeleted: {
            type: 'boolean'
        },
        WebApplication: {
            type: 'string'
        },
        LanguageId: {
            type: 'integer',
            format: 'int32'
        },
        SiteTemplateId: {
            type: 'string'
        },
        SiteTitle: {
            type: 'string'
        },
        DatabaseStorageSize: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseWarningEmailPercentage: {
            minimum: 0,
            type: 'integer',
            format: 'int32'
        },
        SharePointUserName: {
            type: 'string'
        },
        SharePointUserPassword: {
            type: 'string'
        },
        OrganizationName: {
            type: 'string'
        },
        OwnerName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointSiteDto_RequestSchema = {
    required: ['LanguageId', 'OrganizationId', 'SPDomain', 'SPHostHeader', 'ServerRoleId', 'SharePointUserName', 'SharePointUserPassword', 'SiteTemplateId', 'SiteTitle'],
    type: 'object',
    properties: {
        SPHostHeader: {
            type: 'string'
        },
        SPDomain: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        WebApplication: {
            type: 'string'
        },
        LanguageId: {
            type: 'integer',
            description: "You can get language id by calling 'GET /sharepoint-server/{serverRoleId}/locales'.",
            format: 'int32'
        },
        SiteTemplateId: {
            type: 'string',
            description: "You can get site template id by calling 'GET /sharepoint-server/{serverRoleId}/locales/{localeId}/web-templates'."
        },
        SiteTitle: {
            type: 'string'
        },
        DatabaseStorageSize: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseWarningEmailPercentage: {
            minimum: 0,
            type: 'integer',
            format: 'int32'
        },
        SharePointUserName: {
            type: 'string'
        },
        SharePointUserPassword: {
            type: 'string'
        },
        Description: {
            type: 'string'
        }
    }
} as const;

export const SharePointSiteDto_ListSchema = {
    type: 'object',
    properties: {
        SPSiteId: {
            type: 'integer',
            format: 'int32'
        },
        SPHostHeader: {
            type: 'string'
        },
        SPDomain: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        MaxDatabaseSize: {
            type: 'integer',
            format: 'int32'
        },
        SPUserUsage: {
            type: 'integer',
            format: 'int32'
        },
        SPGroupUsage: {
            type: 'integer',
            format: 'int32'
        },
        IsSubSite: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DBStorageUsage: {
            type: 'number',
            format: 'double'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ParentSiteId: {
            type: 'integer',
            format: 'int32'
        },
        SitePath: {
            type: 'string'
        },
        SiteUrl: {
            type: 'string'
        },
        IsDeleted: {
            type: 'boolean'
        },
        WebApplication: {
            type: 'string'
        },
        LanguageId: {
            type: 'integer',
            format: 'int32'
        },
        SiteTemplateId: {
            type: 'string'
        },
        SiteTitle: {
            type: 'string'
        },
        DatabaseStorageSize: {
            type: 'integer',
            format: 'int32'
        },
        DatabaseWarningEmailPercentage: {
            minimum: 0,
            type: 'integer',
            format: 'int32'
        },
        SharePointUserName: {
            type: 'string'
        },
        SharePointUserPassword: {
            type: 'string'
        },
        OrganizationName: {
            type: 'string'
        },
        OwnerName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        }
    }
} as const;

export const SharePointSubSiteDtoSchema = {
    required: ['LanguageId', 'OrganizationId', 'SPHostHeader', 'ServerRoleId', 'SiteTemplateId'],
    type: 'object',
    properties: {
        SPSiteId: {
            type: 'integer',
            format: 'int32'
        },
        SPHostHeader: {
            type: 'string'
        },
        SitePath: {
            type: 'string'
        },
        SPDomain: {
            type: 'string'
        },
        SiteUrl: {
            type: 'string'
        },
        SiteTitle: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        UseUniquePermissions: {
            type: 'boolean'
        },
        LanguageId: {
            type: 'integer',
            format: 'int32'
        },
        SiteTemplateId: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ApiUserId: {
            type: 'integer',
            format: 'int32'
        },
        ParentSiteId: {
            type: 'integer',
            format: 'int32'
        },
        IsSubSite: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointSubSiteDto_RequestSchema = {
    required: ['LanguageId', 'OrganizationId', 'SPHostHeader', 'ServerRoleId', 'SiteTemplateId'],
    type: 'object',
    properties: {
        SPHostHeader: {
            type: 'string'
        },
        SiteTitle: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        UseUniquePermissions: {
            type: 'boolean',
            description: 'Set this true to use your own user permissions setting, otherwise it use parent site permissions.'
        },
        LanguageId: {
            type: 'integer',
            description: "You can get language id by calling 'GET /sharepoint-server/{serverRoleId}/locales'.",
            format: 'int32'
        },
        SiteTemplateId: {
            type: 'string',
            description: "You can get site template id by calling 'GET /sharepoint-server/{serverRoleId}/locales/{localeId}/web-templates'."
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SharePointSiteDetailDtoSchema = {
    type: 'object',
    properties: {
        DatabaseStorageUsage: {
            type: 'integer',
            format: 'int32'
        },
        StorageMaximumLevel: {
            type: 'integer',
            format: 'int32'
        },
        StorageWarningLevel: {
            type: 'integer',
            format: 'int32'
        },
        Bandwidth: {
            type: 'number',
            format: 'double'
        },
        Hits: {
            type: 'integer',
            format: 'int32'
        },
        UsagePercentage: {
            type: 'number',
            format: 'double'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointUserChangePasswordDtoSchema = {
    required: ['Password', 'SPUserId'],
    type: 'object',
    properties: {
        SPUserId: {
            type: 'integer',
            format: 'int32'
        },
        SiteId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointUserChangePasswordDto_RequestSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        UserName: {
            type: 'string'
        },
        Password: {
            type: 'string'
        }
    }
} as const;

export const SharePointGeneralProfileDtoSchema = {
    type: 'object',
    properties: {
        SPUserId: {
            type: 'integer',
            format: 'int32'
        },
        SiteId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SharePointGeneralProfileDto_RequestSchema = {
    type: 'object',
    properties: {
        SPUserId: {
            type: 'integer',
            format: 'int32'
        },
        SiteId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        }
    }
} as const;

export const SkypeGroupListDtoSchema = {
    type: 'object',
    properties: {
        SkypeGroups: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeGroupDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeGroupDto_ListSchema = {
    required: ['Description', 'OrganizationId', 'ResponseGroupName'],
    type: 'object',
    properties: {
        ResponseGroupId: {
            type: 'integer',
            format: 'int32'
        },
        ResponseGroupName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsDeleted: {
            type: 'boolean'
        },
        GroupIdentity: {
            type: 'string'
        },
        ApplicationServiceName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        AgentAlertTime: {
            type: 'integer',
            format: 'int32'
        },
        ParticipationPolicy: {
            type: 'string'
        },
        RoutingMethod: {
            type: 'string'
        },
        DistributionGroupAddress: {
            type: 'string'
        },
        EnterpriseVoiceUsers: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const SkypeGroupDtoSchema = {
    required: ['Description', 'OrganizationId', 'ResponseGroupName'],
    type: 'object',
    properties: {
        ResponseGroupId: {
            type: 'integer',
            format: 'int32'
        },
        ResponseGroupName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsDeleted: {
            type: 'boolean'
        },
        GroupIdentity: {
            type: 'string'
        },
        ApplicationServiceName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        AgentAlertTime: {
            type: 'integer',
            format: 'int32'
        },
        ParticipationPolicy: {
            type: 'string'
        },
        RoutingMethod: {
            type: 'string'
        },
        DistributionGroupAddress: {
            type: 'string'
        },
        EnterpriseVoiceUsers: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeGroupDto_RequestSchema = {
    required: ['Description', 'OrganizationId', 'ResponseGroupName'],
    type: 'object',
    properties: {
        ResponseGroupName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ApplicationServiceName: {
            type: 'string',
            description: "Application service name should be in the format, 'ApplicationServer:application server name'."
        },
        Description: {
            type: 'string'
        },
        AgentAlertTime: {
            type: 'integer',
            format: 'int32'
        },
        ParticipationPolicy: {
            type: 'string',
            enum: ['Informal', 'Formal']
        },
        RoutingMethod: {
            type: 'string',
            enum: ['LongestIdle', 'Serial', 'Parallel', 'RoundRobin', 'Attendant']
        },
        EnterpriseVoiceUsers: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const SkypeQueueListDtoSchema = {
    type: 'object',
    properties: {
        SkypeQueues: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeQueueDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeQueueDto_ListSchema = {
    required: ['Description', 'OrganizationId', 'ResponseQueueName'],
    type: 'object',
    properties: {
        ResponseQueueId: {
            type: 'integer',
            format: 'int32'
        },
        ResponseQueueName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsDeleted: {
            type: 'boolean'
        },
        QueueIdentity: {
            type: 'string'
        },
        ApplicationServiceName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        EnableQueueTimeout: {
            type: 'boolean'
        },
        TimeoutAction: {
            type: 'string'
        },
        TimeoutPeriod: {
            type: 'integer',
            format: 'int32'
        },
        TimeoutQueueIdentity: {
            type: 'string'
        },
        TimeoutQueueName: {
            type: 'string'
        },
        TimeoutAddress: {
            type: 'string'
        },
        EnableQueueOverflow: {
            type: 'boolean'
        },
        OverflowAction: {
            type: 'string'
        },
        OverflowCandidate: {
            type: 'string'
        },
        OverflowQueueIdentity: {
            type: 'string'
        },
        OverflowQueueName: {
            type: 'string'
        },
        MaximumCalls: {
            type: 'integer',
            format: 'int32'
        },
        AgentAlertTime: {
            type: 'integer',
            format: 'int32'
        },
        ParticipationPolicy: {
            type: 'string'
        },
        RoutingMethod: {
            type: 'string'
        },
        OverflowAddress: {
            type: 'string'
        },
        DistributionGroupAddress: {
            type: 'string'
        },
        Groups: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        GroupIdentities: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const SkypeQueueDtoSchema = {
    required: ['Description', 'OrganizationId', 'ResponseQueueName'],
    type: 'object',
    properties: {
        ResponseQueueId: {
            type: 'integer',
            format: 'int32'
        },
        ResponseQueueName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsDeleted: {
            type: 'boolean'
        },
        QueueIdentity: {
            type: 'string'
        },
        ApplicationServiceName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        EnableQueueTimeout: {
            type: 'boolean'
        },
        TimeoutAction: {
            type: 'string'
        },
        TimeoutPeriod: {
            type: 'integer',
            format: 'int32'
        },
        TimeoutQueueIdentity: {
            type: 'string'
        },
        TimeoutQueueName: {
            type: 'string'
        },
        TimeoutAddress: {
            type: 'string'
        },
        EnableQueueOverflow: {
            type: 'boolean'
        },
        OverflowAction: {
            type: 'string'
        },
        OverflowCandidate: {
            type: 'string'
        },
        OverflowQueueIdentity: {
            type: 'string'
        },
        OverflowQueueName: {
            type: 'string'
        },
        MaximumCalls: {
            type: 'integer',
            format: 'int32'
        },
        AgentAlertTime: {
            type: 'integer',
            format: 'int32'
        },
        ParticipationPolicy: {
            type: 'string'
        },
        RoutingMethod: {
            type: 'string'
        },
        OverflowAddress: {
            type: 'string'
        },
        DistributionGroupAddress: {
            type: 'string'
        },
        Groups: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        GroupIdentities: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeQueueDto_RequestSchema = {
    required: ['Description', 'OrganizationId', 'ResponseQueueName'],
    type: 'object',
    properties: {
        ResponseQueueName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ApplicationServiceName: {
            type: 'string',
            description: "Application service name should be in the format, 'ApplicationServer:application server name'."
        },
        Description: {
            type: 'string'
        },
        EnableQueueTimeout: {
            type: 'boolean'
        },
        TimeoutAction: {
            type: 'string',
            description: "Timeout action is required when 'EnableQueueTimeout' is true.",
            enum: ['TransferToQueue', 'TransferToUri', 'TransferToVoicemailUri', 'TransferToPstn', 'Terminate']
        },
        TimeoutPeriod: {
            type: 'integer',
            description: "Timeout period is required when 'EnableQueueTimeout' is true.",
            format: 'int32'
        },
        TimeoutQueueName: {
            type: 'string',
            description: "Timeout queue name is required when 'TimeoutAction' is set as 'TransferToQueue'."
        },
        TimeoutAddress: {
            type: 'string',
            description: "Timeout queue name is required when 'TimeoutAction' is set as 'TransferToUri' or 'TransferToVoicemailUri' or 'TransferToPstn'."
        },
        EnableQueueOverflow: {
            type: 'boolean'
        },
        OverflowAction: {
            type: 'string',
            description: "Overflow action is required when 'EnableQueueOverflow' is true.",
            enum: ['TransferToQueue', 'TransferToUri', 'TransferToVoicemailUri', 'TransferToPstn', 'Terminate']
        },
        OverflowQueueName: {
            type: 'string',
            description: "Overflow queue name is required when 'OverflowAction' is set as 'TransferToQueue'."
        },
        MaximumCalls: {
            type: 'integer',
            description: "Maximum calls is required when 'EnableQueueOverflow' is true.",
            format: 'int32'
        },
        OverflowAddress: {
            type: 'string',
            description: "Overflow address is required when 'OverflowAction' is set as 'TransferToUri' or 'TransferToVoicemailUri' or 'TransferToPstn'."
        },
        Groups: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const SkypeSettingsDtoSchema = {
    type: 'object',
    properties: {
        ServerIp: {
            type: 'string'
        },
        DomainController: {
            type: 'string'
        },
        ADAdmin: {
            type: 'string'
        },
        ADPassword: {
            type: 'string'
        },
        ParentOU: {
            type: 'string'
        },
        HostName: {
            type: 'string'
        },
        AdminUserName: {
            type: 'string'
        },
        AdminUserPassword: {
            type: 'string'
        },
        UserRegistrarPool: {
            type: 'string'
        },
        SkypeServerType: {
            type: 'string'
        }
    }
} as const;

export const SkypeRegistrarPoolListDtoSchema = {
    type: 'object',
    properties: {
        Pools: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeRegistrarPoolDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeRegistrarPoolDtoSchema = {
    type: 'object',
    properties: {
        PoolName: {
            type: 'string'
        }
    }
} as const;

export const AssignSkypeServerPoolListDtoSchema = {
    required: ['UserId'],
    type: 'object',
    properties: {
        Pools: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AssignSkypeServerPoolDto'
            }
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignSkypeServerPoolDtoSchema = {
    required: ['PoolName', 'ServerRoleId'],
    type: 'object',
    properties: {
        PoolName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SkypeTimeZoneListDtoSchema = {
    type: 'object',
    properties: {
        TimeZones: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeTimeZoneDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeTimeZoneDtoSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Id: {
            type: 'string'
        }
    }
} as const;

export const LineUriListDtoSchema = {
    type: 'object',
    properties: {
        LineUris: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/LineUriDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const LineUriDto_ListSchema = {
    required: ['LineURI', 'ServerRoleId'],
    type: 'object',
    properties: {
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        LineURI: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        AssignedTo: {
            type: 'integer',
            format: 'int32'
        },
        IsUsed: {
            type: 'boolean'
        },
        AssignedToUserName: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        }
    }
} as const;

export const LineUriDtoSchema = {
    required: ['LineURI', 'ServerRoleId'],
    type: 'object',
    properties: {
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        LineURI: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        AssignedTo: {
            type: 'integer',
            format: 'int32'
        },
        IsUsed: {
            type: 'boolean'
        },
        IsDeleted: {
            type: 'boolean'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        ModifiedBy: {
            type: 'integer',
            format: 'int32'
        },
        DeletedBy: {
            type: 'integer',
            format: 'int32'
        },
        AssignedToUserName: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignLineUriListDtoSchema = {
    required: ['UserId'],
    type: 'object',
    properties: {
        LineUris: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AssignLineUriDto'
            }
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignLineUriDtoSchema = {
    required: ['LineURIId'],
    type: 'object',
    properties: {
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeFederatedDomainListDtoSchema = {
    type: 'object',
    properties: {
        FederatedDomains: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeFederatedDomainDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeFederatedDomainDto_ListSchema = {
    required: ['Comment', 'DomainName', 'DomainType'],
    type: 'object',
    properties: {
        Comment: {
            type: 'string'
        },
        DomainType: {
            type: 'string'
        },
        ProxyFqdn: {
            type: 'string'
        },
        DomainName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SkypeFederatedDomainDtoSchema = {
    required: ['Comment', 'DomainName', 'DomainType'],
    type: 'object',
    properties: {
        Comment: {
            type: 'string'
        },
        DomainType: {
            type: 'string'
        },
        ProxyFqdn: {
            type: 'string'
        },
        DomainName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserPoliciesListDtoSchema = {
    type: 'object',
    properties: {
        ConferencingPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        ClientVersionPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        PinPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        ExternalAccessPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        ArchivingPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        LocationPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        MobilityPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        PersistentChatPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        ClientPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        VoicePolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        DialInPolicies: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserPolicyDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserPolicyDtoSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        }
    }
} as const;

export const SkypeApplicationServicesListDtoSchema = {
    type: 'object',
    properties: {
        ApplicationServices: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeApplicationServiceDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeApplicationServiceDtoSchema = {
    type: 'object',
    properties: {
        ApplicationServiceName: {
            type: 'string'
        }
    }
} as const;

export const AssignSkypeApplicationServiceListDtoSchema = {
    required: ['UserId'],
    type: 'object',
    properties: {
        ApplicationServices: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/AssignSkypeApplicationServiceDto'
            }
        },
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignSkypeApplicationServiceDtoSchema = {
    required: ['ApplicationServiceName', 'ServerRoleId'],
    type: 'object',
    properties: {
        ApplicationServiceName: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SkypeSipDomainListDtoSchema = {
    type: 'object',
    properties: {
        SipDomains: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeSipDomainDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeSipDomainDto_ListSchema = {
    required: ['OrganizationId', 'SIPDomainName', 'ServerRoleId'],
    type: 'object',
    properties: {
        SIPDomainId: {
            type: 'integer',
            format: 'int32'
        },
        SIPDomainName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        UserCount: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        MeetSimpleURL: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SkypeSipDomainDtoSchema = {
    required: ['OrganizationId', 'SIPDomainName', 'ServerRoleId'],
    type: 'object',
    properties: {
        SIPDomainId: {
            type: 'integer',
            format: 'int32'
        },
        SIPDomainName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        UserCount: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        IsDeleted: {
            type: 'boolean'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        ModifiedBy: {
            type: 'integer',
            format: 'int32'
        },
        DeletedBy: {
            type: 'integer',
            format: 'int32'
        },
        MeetSimpleURL: {
            type: 'string'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeSipDomainDto_RequestSchema = {
    required: ['OrganizationId', 'SIPDomainName', 'ServerRoleId'],
    type: 'object',
    properties: {
        SIPDomainName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            description: 'Give owner id in case of creating sip domain for any descendent user.',
            format: 'int32'
        }
    }
} as const;

export const SkypeUserListDtoSchema = {
    type: 'object',
    properties: {
        SkypeUsers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeUserDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserDto_ListSchema = {
    required: ['SIPDomainId', 'SkypeUserName', 'TelephonyOption'],
    type: 'object',
    properties: {
        SkypeUserId: {
            type: 'integer',
            format: 'int32'
        },
        SkypeUserName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        SIPAddress: {
            type: 'string'
        },
        SIPDomainId: {
            type: 'integer',
            format: 'int32'
        },
        SIPDomainName: {
            type: 'string'
        },
        UserServerPool: {
            type: 'string'
        },
        IsDisabled: {
            type: 'boolean'
        },
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        GUID: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        SipAddressType: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        EnterpriseVoiceEnabled: {
            type: 'boolean'
        },
        RemoteCallControlEnabled: {
            type: 'boolean'
        },
        RemoteCallControlOnly: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        OrganizationName: {
            type: 'string'
        },
        TelephonyOption: {
            type: 'string'
        },
        LineServerUri: {
            type: 'string'
        },
        LineUri: {
            type: 'string'
        },
        VoicePolicy: {
            type: 'string'
        },
        DialPlan: {
            type: 'string'
        },
        MeetingPolicy: {
            type: 'string'
        },
        MeetingPolicyDetails: {
            type: 'string'
        },
        ConferencingPolicy: {
            type: 'string'
        },
        ClientVersionPolicy: {
            type: 'string'
        },
        PinPolicy: {
            type: 'string'
        },
        ExternalAccessPolicy: {
            type: 'string'
        },
        ArchivingPolicy: {
            type: 'string'
        },
        LocationPolicy: {
            type: 'string'
        },
        MobilityPolicy: {
            type: 'string'
        },
        ClientPolicy: {
            type: 'string'
        },
        PersistentChatPolicy: {
            type: 'string'
        },
        FederationEnabled: {
            type: 'boolean'
        },
        RemoteUserAccess: {
            type: 'boolean'
        },
        PublicImConnectivity: {
            type: 'boolean'
        },
        EnhancedPresence: {
            type: 'boolean'
        },
        ArchiveInternalMessages: {
            type: 'boolean'
        },
        ArchiveFederatedMessages: {
            type: 'boolean'
        },
        AnonymousRecipients: {
            type: 'boolean'
        },
        PbxIntegrationEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const SkypeUserDto_RequestSchema = {
    required: ['SIPDomainId', 'SkypeUserName', 'TelephonyOption'],
    type: 'object',
    properties: {
        SkypeUserName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        SIPDomainId: {
            type: 'integer',
            format: 'int32'
        },
        UserServerPool: {
            type: 'string'
        },
        DisplayName: {
            type: 'string',
            description: 'Display name should be given if not provided in general profile, it will be ignored if passed in general profile.'
        },
        Password: {
            type: 'string'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        TelephonyOption: {
            type: 'string',
            enum: ['pctopc', 'enterprisevoice', 'audiovideodisabled', 'remotecallcontrol', 'remotecallcontrolonly']
        },
        LineServerUri: {
            type: 'string',
            description: "It depends on 'TelephonyOption', Its value is required when telephony option is 'remotecallcontrol' and 'remotecallcontrolonly'."
        },
        LineUri: {
            type: 'string',
            description: "It depends on 'TelephonyOption', It is not required when telephony option is 'audiovideodisabled'."
        },
        VoicePolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        MeetingPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        ConferencingPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        ClientVersionPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        PinPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        ExternalAccessPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        ArchivingPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        LocationPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        MobilityPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        ClientPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        },
        PersistentChatPolicy: {
            type: 'string',
            description: "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'."
        }
    }
} as const;

export const SkypeUserDtoSchema = {
    required: ['SIPDomainId', 'SkypeUserName', 'TelephonyOption'],
    type: 'object',
    properties: {
        SkypeUserId: {
            type: 'integer',
            format: 'int32'
        },
        SkypeUserName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        SIPAddress: {
            type: 'string'
        },
        SIPDomainId: {
            type: 'integer',
            format: 'int32'
        },
        SIPDomainName: {
            type: 'string'
        },
        UserServerPool: {
            type: 'string'
        },
        IsDisabled: {
            type: 'boolean'
        },
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        GUID: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        SipAddressType: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        EnterpriseVoiceEnabled: {
            type: 'boolean'
        },
        RemoteCallControlEnabled: {
            type: 'boolean'
        },
        RemoteCallControlOnly: {
            type: 'boolean'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        IsDeleted: {
            type: 'boolean'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        ModifiedBy: {
            type: 'integer',
            format: 'int32'
        },
        DeletedBy: {
            type: 'integer',
            format: 'int32'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        OrganizationName: {
            type: 'string'
        },
        TelephonyOption: {
            type: 'string'
        },
        LineServerUri: {
            type: 'string'
        },
        LineUri: {
            type: 'string'
        },
        VoicePolicy: {
            type: 'string'
        },
        DialPlan: {
            type: 'string'
        },
        MeetingPolicy: {
            type: 'string'
        },
        MeetingPolicyDetails: {
            type: 'string'
        },
        ConferencingPolicy: {
            type: 'string'
        },
        ClientVersionPolicy: {
            type: 'string'
        },
        PinPolicy: {
            type: 'string'
        },
        ExternalAccessPolicy: {
            type: 'string'
        },
        ArchivingPolicy: {
            type: 'string'
        },
        LocationPolicy: {
            type: 'string'
        },
        MobilityPolicy: {
            type: 'string'
        },
        ClientPolicy: {
            type: 'string'
        },
        PersistentChatPolicy: {
            type: 'string'
        },
        FederationEnabled: {
            type: 'boolean'
        },
        RemoteUserAccess: {
            type: 'boolean'
        },
        PublicImConnectivity: {
            type: 'boolean'
        },
        EnhancedPresence: {
            type: 'boolean'
        },
        ArchiveInternalMessages: {
            type: 'boolean'
        },
        ArchiveFederatedMessages: {
            type: 'boolean'
        },
        AnonymousRecipients: {
            type: 'boolean'
        },
        PbxIntegrationEnabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserChangePasswordDtoSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        SkypeUserId: {
            type: 'integer',
            format: 'int32'
        },
        Password: {
            type: 'string'
        },
        SkypeUserName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserChangePasswordDto_RequestSchema = {
    required: ['Password'],
    type: 'object',
    properties: {
        Password: {
            type: 'string'
        },
        SkypeUserName: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserGeneralProfileDtoSchema = {
    type: 'object',
    properties: {
        SkypeUserId: {
            type: 'integer',
            format: 'int32'
        },
        SkypeUserName: {
            type: 'string'
        },
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserGeneralProfileDto_RequestSchema = {
    type: 'object',
    properties: {
        GeneralProfile: {
            '$ref': '#/components/schemas/UserGeneralProfileDto'
        }
    }
} as const;

export const SkypeUserAdvancedPropertiesDtoSchema = {
    type: 'object',
    properties: {
        SkypeUserId: {
            type: 'integer',
            format: 'int32'
        },
        SkypeUserName: {
            type: 'string'
        },
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        TelephonyOption: {
            type: 'string'
        },
        LineServerUri: {
            type: 'string'
        },
        LineUri: {
            type: 'string'
        },
        VoicePolicy: {
            type: 'string'
        },
        DialPlan: {
            type: 'string'
        },
        MeetingPolicy: {
            type: 'string'
        },
        MeetingPolicyDetails: {
            type: 'string'
        },
        ConferencingPolicy: {
            type: 'string'
        },
        ClientVersionPolicy: {
            type: 'string'
        },
        PinPolicy: {
            type: 'string'
        },
        ExternalAccessPolicy: {
            type: 'string'
        },
        ArchivingPolicy: {
            type: 'string'
        },
        LocationPolicy: {
            type: 'string'
        },
        MobilityPolicy: {
            type: 'string'
        },
        ClientPolicy: {
            type: 'string'
        },
        PersistentChatPolicy: {
            type: 'string'
        },
        FederationEnabled: {
            type: 'boolean'
        },
        RemoteUserAccess: {
            type: 'boolean'
        },
        PublicImConnectivity: {
            type: 'boolean'
        },
        EnhancedPresence: {
            type: 'boolean'
        },
        ArchiveInternalMessages: {
            type: 'boolean'
        },
        ArchiveFederatedMessages: {
            type: 'boolean'
        },
        AnonymousRecipients: {
            type: 'boolean'
        },
        PbxIntegrationEnabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserAdvancedPropertiesDto_RequestSchema = {
    type: 'object',
    properties: {
        SkypeUserName: {
            type: 'string'
        },
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        TelephonyOption: {
            type: 'string'
        },
        LineServerUri: {
            type: 'string'
        },
        LineUri: {
            type: 'string'
        },
        VoicePolicy: {
            type: 'string'
        },
        DialPlan: {
            type: 'string'
        },
        MeetingPolicy: {
            type: 'string'
        },
        MeetingPolicyDetails: {
            type: 'string'
        },
        ConferencingPolicy: {
            type: 'string'
        },
        ClientVersionPolicy: {
            type: 'string'
        },
        PinPolicy: {
            type: 'string'
        },
        ExternalAccessPolicy: {
            type: 'string'
        },
        ArchivingPolicy: {
            type: 'string'
        },
        LocationPolicy: {
            type: 'string'
        },
        MobilityPolicy: {
            type: 'string'
        },
        ClientPolicy: {
            type: 'string'
        },
        PersistentChatPolicy: {
            type: 'string'
        },
        FederationEnabled: {
            type: 'boolean'
        },
        RemoteUserAccess: {
            type: 'boolean'
        },
        PublicImConnectivity: {
            type: 'boolean'
        },
        EnhancedPresence: {
            type: 'boolean'
        },
        ArchiveInternalMessages: {
            type: 'boolean'
        },
        ArchiveFederatedMessages: {
            type: 'boolean'
        },
        AnonymousRecipients: {
            type: 'boolean'
        },
        PbxIntegrationEnabled: {
            type: 'boolean'
        }
    }
} as const;

export const SkypeUserStatusDtoSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserStatusDto_RequestSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'boolean'
        }
    }
} as const;

export const SkypeUserForwardingSettingsDtoSchema = {
    required: ['ForwardTo'],
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        ForwardTo: {
            type: 'string'
        },
        ForwardImmidiately: {
            type: 'boolean'
        },
        ForwardAfter: {
            type: 'string'
        },
        EnableCallForwarding: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserForwardingSettingsDto_RequestSchema = {
    required: ['ForwardTo'],
    type: 'object',
    properties: {
        ForwardTo: {
            type: 'string'
        },
        ForwardImmidiately: {
            type: 'boolean'
        },
        ForwardAfter: {
            type: 'string'
        },
        EnableCallForwarding: {
            type: 'boolean'
        }
    }
} as const;

export const SkypeBulkUsersFeasibilityDtoSchema = {
    required: ['OrganizationId'],
    type: 'object',
    properties: {
        Users: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeBulkUserDto'
            }
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeBulkUsersFeasibilityDto_RequestSchema = {
    required: ['OrganizationId'],
    type: 'object',
    properties: {
        Users: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeBulkUserDto'
            }
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SkypeBulkUserDtoSchema = {
    required: ['UserName'],
    type: 'object',
    properties: {
        UserName: {
            type: 'string'
        },
        SipAddress: {
            type: 'string'
        },
        SipAddressType: {
            type: 'string'
        },
        Password: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        IsFeasible: {
            type: 'boolean'
        },
        OfficeLocation: {
            type: 'string'
        },
        FileName: {
            type: 'string'
        },
        City: {
            type: 'string'
        },
        ZipCode: {
            type: 'string'
        },
        State: {
            type: 'string'
        },
        CountryId: {
            type: 'integer',
            format: 'int32'
        },
        FirstName: {
            type: 'string'
        },
        LastName: {
            type: 'string'
        },
        Country: {
            type: 'string'
        },
        Company: {
            type: 'string'
        },
        Feasibility: {
            type: 'string'
        },
        Notes: {
            type: 'string'
        }
    }
} as const;

export const SkypeBulkUsersListDtoSchema = {
    required: ['OrganizationId', 'UserServerPool'],
    type: 'object',
    properties: {
        Users: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeBulkUserDto'
            }
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        UserServerPool: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeBulkUsersListDto_RequestSchema = {
    required: ['OrganizationId', 'UserServerPool'],
    type: 'object',
    properties: {
        Users: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeBulkUserDto'
            }
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        UserServerPool: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SkypeUserTelephonySettingsDtoSchema = {
    required: ['TelephonyOption'],
    type: 'object',
    properties: {
        SkypeUserId: {
            type: 'integer',
            format: 'int32'
        },
        TelephonyOption: {
            type: 'string'
        },
        LineServerUri: {
            type: 'string'
        },
        LineUri: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserTelephonySettingsDto_RequestSchema = {
    required: ['TelephonyOption'],
    type: 'object',
    properties: {
        TelephonyOption: {
            type: 'string'
        },
        LineServerUri: {
            type: 'string'
        },
        LineUri: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserPolicySettingsDtoSchema = {
    type: 'object',
    properties: {
        SkypeUserId: {
            type: 'integer',
            format: 'int32'
        },
        VoicePolicy: {
            type: 'string'
        },
        DialPlan: {
            type: 'string'
        },
        MeetingPolicy: {
            type: 'string'
        },
        MeetingPolicyDetails: {
            type: 'string'
        },
        ConferencingPolicy: {
            type: 'string'
        },
        ClientVersionPolicy: {
            type: 'string'
        },
        PinPolicy: {
            type: 'string'
        },
        ExternalAccessPolicy: {
            type: 'string'
        },
        ArchivingPolicy: {
            type: 'string'
        },
        LocationPolicy: {
            type: 'string'
        },
        MobilityPolicy: {
            type: 'string'
        },
        ClientPolicy: {
            type: 'string'
        },
        PersistentChatPolicy: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeUserPolicySettingsDto_RequestSchema = {
    type: 'object',
    properties: {
        VoicePolicy: {
            type: 'string'
        },
        DialPlan: {
            type: 'string'
        },
        MeetingPolicy: {
            type: 'string'
        },
        MeetingPolicyDetails: {
            type: 'string'
        },
        ConferencingPolicy: {
            type: 'string'
        },
        ClientVersionPolicy: {
            type: 'string'
        },
        PinPolicy: {
            type: 'string'
        },
        ExternalAccessPolicy: {
            type: 'string'
        },
        ArchivingPolicy: {
            type: 'string'
        },
        LocationPolicy: {
            type: 'string'
        },
        MobilityPolicy: {
            type: 'string'
        },
        ClientPolicy: {
            type: 'string'
        },
        PersistentChatPolicy: {
            type: 'string'
        }
    }
} as const;

export const SkypeWorkflowListDtoSchema = {
    type: 'object',
    properties: {
        SkypeWorkflows: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeWorkflowDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeWorkflowDto_ListSchema = {
    required: ['ApplicationServiceName', 'LanguageName', 'OrganizationId', 'SIPAddress', 'WorkflowName'],
    type: 'object',
    properties: {
        WorkflowId: {
            type: 'integer',
            format: 'int32'
        },
        WorkflowName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        SIPAddress: {
            type: 'string'
        },
        DisplayNumber: {
            type: 'string'
        },
        Type: {
            type: 'string'
        },
        GUID: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        LineURI: {
            type: 'string'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsDeleted: {
            type: 'boolean'
        },
        WorkflowIdentity: {
            type: 'string'
        },
        LanguageName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        IsActivated: {
            type: 'boolean'
        },
        IsFederationEnabled: {
            type: 'boolean'
        },
        IsAnonymityEnabled: {
            type: 'boolean'
        },
        IsManaged: {
            type: 'boolean'
        },
        TimeZone: {
            type: 'string'
        },
        UseDefaultBusinessHours: {
            type: 'boolean'
        },
        CustomMusicOnHoldFile: {
            type: 'string'
        },
        ApplicationServiceName: {
            type: 'string'
        },
        Managers: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const SkypeWorkflowDtoSchema = {
    required: ['ApplicationServiceName', 'LanguageName', 'OrganizationId', 'SIPAddress', 'WorkflowName'],
    type: 'object',
    properties: {
        WorkflowId: {
            type: 'integer',
            format: 'int32'
        },
        WorkflowName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        OrganizationName: {
            type: 'string'
        },
        SIPAddress: {
            type: 'string'
        },
        DisplayNumber: {
            type: 'string'
        },
        Type: {
            type: 'string'
        },
        GUID: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        LineURIId: {
            type: 'integer',
            format: 'int32'
        },
        LineURI: {
            type: 'string'
        },
        IsDisabled: {
            type: 'boolean'
        },
        IsDeleted: {
            type: 'boolean'
        },
        WorkflowIdentity: {
            type: 'string'
        },
        LanguageName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        IsActivated: {
            type: 'boolean'
        },
        IsFederationEnabled: {
            type: 'boolean'
        },
        IsAnonymityEnabled: {
            type: 'boolean'
        },
        IsManaged: {
            type: 'boolean'
        },
        TimeZone: {
            type: 'string'
        },
        UseDefaultBusinessHours: {
            type: 'boolean'
        },
        CustomMusicOnHoldFile: {
            type: 'string'
        },
        ApplicationServiceName: {
            type: 'string'
        },
        Managers: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeWorkflowDto_RequestSchema = {
    required: ['ApplicationServiceName', 'Description', 'LanguageName', 'OrganizationId', 'SIPAddress', 'WorkflowName'],
    type: 'object',
    properties: {
        WorkflowName: {
            type: 'string'
        },
        OrganizationId: {
            type: 'integer',
            format: 'int32'
        },
        SIPAddress: {
            type: 'string',
            description: "SIP adress should be in given format, 'sip:displayName@sipDomainName' "
        },
        DisplayNumber: {
            type: 'string'
        },
        Type: {
            type: 'string',
            enum: ['Managed', 'Unmanaged']
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        LineURIId: {
            type: 'integer',
            description: "You can get line URI id by calling 'GET /skype-server/line-uris'.",
            format: 'int32'
        },
        LanguageName: {
            type: 'string',
            description: "You can get languages by calling 'GET /system-entities/skype/workflow-languages'."
        },
        Description: {
            type: 'string'
        },
        IsFederationEnabled: {
            type: 'boolean'
        },
        IsAnonymityEnabled: {
            type: 'boolean'
        },
        TimeZone: {
            type: 'string',
            description: "You can get time zones by calling 'GET /skype-server/{serverRoleId}/time-zones'."
        },
        ApplicationServiceName: {
            type: 'string',
            description: "Application service name should be in the format, 'ApplicationServer:application server name'."
        },
        Managers: {
            type: 'array',
            description: "Managers required when 'type' is 'Managed'.",
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const SkypeWorkflowGeneralSettingsDtoSchema = {
    type: 'object',
    properties: {
        WorkflowName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        LineUri: {
            type: 'string'
        },
        DisplayNumber: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        TimeZone: {
            type: 'string'
        }
    }
} as const;

export const SkypeWorkflowStatusDtoSchema = {
    type: 'object',
    properties: {
        WorkflowId: {
            type: 'integer',
            format: 'int32'
        },
        IsDisabled: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeWorkflowStatusDto_RequestSchema = {
    type: 'object',
    properties: {
        IsDisabled: {
            type: 'boolean'
        }
    }
} as const;

export const SkypeWorkflowIvrSettingsDtoSchema = {
    type: 'object',
    properties: {
        WorkflowId: {
            type: 'integer',
            format: 'int32'
        },
        Name: {
            type: 'string'
        },
        DefaultAction: {
            '$ref': '#/components/schemas/SkypeResponseGroupCallActionDto'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SkypeWorkflowIvrSettingsDto_RequestSchema = {
    type: 'object',
    properties: {
        WorkflowId: {
            type: 'integer',
            format: 'int32'
        },
        Name: {
            type: 'string'
        },
        DefaultAction: {
            '$ref': '#/components/schemas/SkypeResponseGroupCallActionDto'
        }
    }
} as const;

export const SkypeResponseGroupCallActionDtoSchema = {
    type: 'object',
    properties: {
        CallActionType: {
            type: 'string'
        },
        Prompt: {
            '$ref': '#/components/schemas/SkypeResponseGroupPromptDto'
        },
        Question: {
            '$ref': '#/components/schemas/SkypeResponseGroupQuestionDto'
        },
        QueueName: {
            type: 'string'
        },
        QueueIdentity: {
            type: 'string'
        },
        SipUri: {
            type: 'string'
        }
    }
} as const;

export const SkypeResponseGroupPromptDtoSchema = {
    type: 'object',
    properties: {
        TextToSpeechPrompt: {
            type: 'string'
        },
        AudioFilePath: {
            type: 'string'
        }
    }
} as const;

export const SkypeResponseGroupQuestionDtoSchema = {
    type: 'object',
    properties: {
        Prompt: {
            '$ref': '#/components/schemas/SkypeResponseGroupPromptDto'
        },
        AnswerList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SkypeResponseGroupAnswerDto'
            }
        },
        InvalidAnswerPrompt: {
            '$ref': '#/components/schemas/SkypeResponseGroupPromptDto'
        },
        NoAnswerPrompt: {
            '$ref': '#/components/schemas/SkypeResponseGroupPromptDto'
        },
        Name: {
            type: 'string'
        }
    }
} as const;

export const SkypeResponseGroupAnswerDtoSchema = {
    type: 'object',
    properties: {
        Action: {
            '$ref': '#/components/schemas/SkypeResponseGroupCallActionDto'
        },
        DigitResponse: {
            type: 'string'
        },
        VoiceResponseList: {
            type: 'string'
        },
        Name: {
            type: 'string'
        }
    }
} as const;

export const VirtualMachinesDtoSchema = {
    type: 'object',
    properties: {
        VirtualMachines: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VirtualMachineDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const VirtualMachineDto_ListSchema = {
    required: ['DisplayName', 'OsAdminPassword'],
    type: 'object',
    properties: {
        IpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VMIPAddressDto'
            }
        },
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        OsTemplate: {
            type: 'string'
        },
        OsAdminName: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualMachineGuid: {
            type: 'string'
        },
        NumberOfSnapshots: {
            type: 'integer',
            format: 'int32'
        },
        PublicVLanId: {
            type: 'integer',
            format: 'int32'
        },
        PrivateVLanId: {
            type: 'integer',
            format: 'int32'
        },
        VmStatus: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        PublicNetwork: {
            '$ref': '#/components/schemas/VirtualNetworkDto'
        },
        PrivateNetwork: {
            '$ref': '#/components/schemas/VirtualNetworkDto'
        },
        ManagementNetwork: {
            '$ref': '#/components/schemas/VirtualNetworkDto'
        },
        AdminPassword: {
            type: 'string'
        },
        VHDSize: {
            type: 'integer',
            format: 'int32'
        },
        Platform: {
            type: 'string'
        },
        ErrorReason: {
            type: 'string'
        },
        ExternalSwitchId: {
            type: 'string'
        },
        InternalSwithcId: {
            type: 'string'
        },
        PublicIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        PrivateIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        State: {
            type: 'integer',
            format: 'int32',
            enum: [0, 2, 3, 6, 10, 32768, 32769, 32770, 32771, 32772, 32773, 32774, 32775, 32776]
        },
        ProviderName: {
            type: 'string'
        },
        IsWindows: {
            type: 'boolean'
        },
        PlatformName: {
            type: 'string'
        },
        OnPremises: {
            type: 'boolean'
        }
    }
} as const;

export const VirtualMachineDtoSchema = {
    required: ['DisplayName', 'OsAdminPassword'],
    type: 'object',
    properties: {
        IpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VMIPAddressDto'
            }
        },
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        OsTemplate: {
            type: 'string'
        },
        OsAdminName: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualizationServer: {
            '$ref': '#/components/schemas/VirtualizationServerDto'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualMachineGuid: {
            type: 'string'
        },
        VirtualizationServerName: {
            type: 'string'
        },
        ServerIp: {
            type: 'string'
        },
        NumberOfSnapshots: {
            type: 'integer',
            format: 'int32'
        },
        PublicVLanId: {
            type: 'integer',
            format: 'int32'
        },
        PrivateVLanId: {
            type: 'integer',
            format: 'int32'
        },
        VmStatus: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerName: {
            type: 'string'
        },
        PublicNetwork: {
            '$ref': '#/components/schemas/VirtualNetworkDto'
        },
        PrivateNetwork: {
            '$ref': '#/components/schemas/VirtualNetworkDto'
        },
        ManagementNetwork: {
            '$ref': '#/components/schemas/VirtualNetworkDto'
        },
        AdminPassword: {
            type: 'string'
        },
        VHDSize: {
            type: 'integer',
            format: 'int32'
        },
        Platform: {
            type: 'string'
        },
        ErrorReason: {
            type: 'string'
        },
        ExternalSwitchId: {
            type: 'string'
        },
        InternalSwithcId: {
            type: 'string'
        },
        PublicIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        PrivateIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        State: {
            type: 'integer',
            format: 'int32',
            enum: [0, 2, 3, 6, 10, 32768, 32769, 32770, 32771, 32772, 32773, 32774, 32775, 32776]
        },
        ProviderName: {
            type: 'string'
        },
        IsWindows: {
            type: 'boolean'
        },
        PlatformName: {
            type: 'string'
        },
        ExpandRequired: {
            type: 'boolean'
        },
        OnPremises: {
            type: 'boolean'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const VMIPAddressDtoSchema = {
    type: 'object',
    properties: {
        IsPublicIP: {
            type: 'boolean'
        },
        IpAddress: {
            type: 'string'
        },
        Subnet: {
            type: 'string'
        },
        GateWay: {
            type: 'string'
        },
        PreferredDnsServer: {
            type: 'string'
        },
        AlternatedDnsServer: {
            type: 'string'
        },
        Family: {
            type: 'string'
        }
    }
} as const;

export const VirtualizationServerDtoSchema = {
    type: 'object',
    properties: {
        ServerIp: {
            type: 'string'
        },
        Type: {
            type: 'string'
        },
        ServerAddress: {
            type: 'string'
        },
        Domain: {
            type: 'string'
        },
        AuthUser: {
            type: 'string'
        },
        AuthPass: {
            type: 'string'
        },
        Version: {
            type: 'integer',
            format: 'int32'
        },
        APIUrl: {
            type: 'string'
        },
        HostName: {
            type: 'string'
        },
        DataCenter: {
            type: 'string'
        }
    }
} as const;

export const VirtualNetworkDtoSchema = {
    type: 'object',
    properties: {
        IPAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VMIPAddressDto'
            }
        },
        DNSServers: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Enabled: {
            type: 'boolean'
        },
        IsLegacyNetwork: {
            type: 'boolean'
        },
        SwitchID: {
            type: 'string'
        }
    }
} as const;

export const IpAddressDto_ListSchema = {
    required: ['Gateway', 'IpAddress', 'SubnetMask'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerName: {
            type: 'string'
        },
        ServerIP: {
            type: 'string'
        },
        IpAddressId: {
            type: 'integer',
            format: 'int32'
        },
        IpAddress: {
            type: 'string'
        },
        IpType: {
            type: 'string'
        },
        IpTypeId: {
            type: 'integer',
            format: 'int32'
        },
        SubnetMask: {
            type: 'string'
        },
        Gateway: {
            type: 'string'
        },
        PreferredDns: {
            type: 'string'
        },
        AlternateDns: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        Pool: {
            type: 'string'
        },
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        Limit: {
            type: 'integer',
            format: 'int32'
        },
        VirtualMachineName: {
            type: 'string'
        }
    }
} as const;

export const IpAddressDtoSchema = {
    required: ['Gateway', 'IpAddress', 'SubnetMask'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerName: {
            type: 'string'
        },
        ServerIP: {
            type: 'string'
        },
        IpAddressId: {
            type: 'integer',
            format: 'int32'
        },
        IpAddress: {
            type: 'string'
        },
        IpType: {
            type: 'string'
        },
        IpTypeId: {
            type: 'integer',
            format: 'int32'
        },
        SubnetMask: {
            type: 'string'
        },
        Gateway: {
            type: 'string'
        },
        PreferredDns: {
            type: 'string'
        },
        AlternateDns: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        Pool: {
            type: 'string'
        },
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        Limit: {
            type: 'integer',
            format: 'int32'
        },
        VirtualMachineName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AddVmDtoSchema = {
    required: ['DisplayName', 'OsAdminPassword', 'ProviderId', 'ResourceComponentPropId'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        KeyPairName: {
            type: 'string'
        },
        PublicNetworkEnabled: {
            type: 'boolean'
        },
        PrivateNetworkEnabled: {
            type: 'boolean'
        },
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        OsAdminName: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AddVmDto_RequestSchema = {
    required: ['DisplayName', 'OsAdminPassword', 'ProviderId', 'ResourceComponentPropId'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        KeyPairName: {
            type: 'string'
        },
        PublicNetworkEnabled: {
            type: 'boolean'
        },
        PrivateNetworkEnabled: {
            type: 'boolean'
        },
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        OsAdminName: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UpdateVmDtoSchema = {
    required: ['DisplayName', 'OsAdminPassword', 'ProviderId', 'ResourceComponentPropId'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        KeyPairName: {
            type: 'string'
        },
        PublicNetworkEnabled: {
            type: 'boolean'
        },
        PrivateNetworkEnabled: {
            type: 'boolean'
        },
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        OsAdminName: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const UpdateVmDto_RequestSchema = {
    required: ['DisplayName', 'OsAdminPassword', 'ProviderId', 'ResourceComponentPropId'],
    type: 'object',
    properties: {
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        KeyPairName: {
            type: 'string'
        },
        PublicNetworkEnabled: {
            type: 'boolean'
        },
        PrivateNetworkEnabled: {
            type: 'boolean'
        },
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        OsAdminName: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const VmAddUpdateResultDtoSchema = {
    type: 'object',
    properties: {
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        ViolationResourcesReport: {
            '$ref': '#/components/schemas/ResourceQtyViolationReportDto:List'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourceQtyViolationReportDto_ListSchema = {
    type: 'object',
    properties: {
        ViolatedResources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceQtyViolationDto'
            }
        }
    }
} as const;

export const ResourceQtyViolationReportDtoSchema = {
    type: 'object',
    properties: {
        ViolatedResources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceQtyViolationDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ResourceQtyViolationDtoSchema = {
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceDisplayName: {
            type: 'string'
        },
        DesiredQty: {
            type: 'integer',
            format: 'int32'
        },
        AllocatedQty: {
            type: 'integer',
            format: 'int32'
        },
        SoldQty: {
            type: 'integer',
            format: 'int32'
        },
        UsedQty: {
            type: 'integer',
            format: 'int32'
        },
        RemainingQty: {
            type: 'integer',
            format: 'int32'
        },
        SubResources: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SubResourceQtyViolationDto'
            }
        },
        AffactedUsers: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ResourceQtyViolationAffacteesDto'
            }
        }
    }
} as const;

export const SubResourceQtyViolationDtoSchema = {
    type: 'object',
    properties: {
        ResourceId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceDisplayName: {
            type: 'string'
        },
        DesiredQty: {
            type: 'integer',
            format: 'int32'
        },
        AllocatedQty: {
            type: 'integer',
            format: 'int32'
        },
        SoldQty: {
            type: 'integer',
            format: 'int32'
        },
        UsedQty: {
            type: 'integer',
            format: 'int32'
        },
        RemainingQty: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const ResourceQtyViolationAffacteesDtoSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        DesiredQty: {
            type: 'integer',
            format: 'int32'
        },
        AllocatedQty: {
            type: 'integer',
            format: 'int32'
        },
        SoldQty: {
            type: 'integer',
            format: 'int32'
        },
        UsedQty: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UpdateVLanDtoSchema = {
    type: 'object',
    properties: {
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        PublicVLanId: {
            type: 'integer',
            format: 'int32'
        },
        PrivateVLanId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const UpdateVLanDto_RequestSchema = {
    type: 'object',
    properties: {
        PublicVLanId: {
            type: 'integer',
            format: 'int32'
        },
        PrivateVLanId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SystemVirtualMachinesDtoSchema = {
    type: 'object',
    properties: {
        VirtualMachines: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VirtualMachineSettingsDto'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const VirtualMachineSettingsDtoSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        ID: {
            type: 'string'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        VHDPath: {
            type: 'string'
        },
        VHDSize: {
            type: 'integer',
            format: 'int32'
        },
        UpTime: {
            type: 'integer',
            format: 'int64'
        },
        State: {
            type: 'integer',
            format: 'int32',
            enum: [0, 2, 3, 6, 10, 32768, 32769, 32770, 32771, 32772, 32773, 32774, 32775, 32776]
        }
    }
} as const;

export const VmIpAddressesDtoSchema = {
    type: 'object',
    properties: {
        PublicIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        PrivateIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const AssignVmIpAddressesDtoSchema = {
    type: 'object',
    properties: {
        NoOfPublicIpAddresses: {
            type: 'integer',
            format: 'int32'
        },
        NoOfPrivateIpAddresses: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const SnapShotsDtoSchema = {
    type: 'object',
    properties: {
        SnapShotList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SnapShotDetailDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const SnapShotDetailDto_ListSchema = {
    type: 'object',
    properties: {
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        SnapShotGUId: {
            type: 'string'
        },
        SnapShotId: {
            type: 'integer',
            format: 'int32'
        },
        SnapShotName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        VirtualMachineName: {
            type: 'string'
        },
        Dated: {
            type: 'string',
            format: 'date-time'
        }
    }
} as const;

export const SnapShotDetailDto_RequestSchema = {
    type: 'object',
    properties: {
        SnapShotName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        }
    }
} as const;

export const SnapShotDetailDto_ApplyRequestSchema = {
    type: 'object',
    properties: {
        SnapShotGUId: {
            type: 'string'
        },
        SnapShotId: {
            type: 'integer',
            format: 'int32'
        },
        SnapShotName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        Dated: {
            type: 'string',
            format: 'date-time'
        }
    }
} as const;

export const SnapShotDetailDtoSchema = {
    type: 'object',
    properties: {
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        SnapShotGUId: {
            type: 'string'
        },
        SnapShotId: {
            type: 'integer',
            format: 'int32'
        },
        SnapShotName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        VirtualMachineName: {
            type: 'string'
        },
        Dated: {
            type: 'string',
            format: 'date-time'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ChangeVmPasswordDtoSchema = {
    type: 'object',
    properties: {
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        OsAdminPassword: {
            type: 'string'
        },
        OsAdminName: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ChangeVmPasswordDto_RequestSchema = {
    type: 'object',
    properties: {
        OsAdminPassword: {
            type: 'string'
        },
        OsAdminName: {
            type: 'string'
        }
    }
} as const;

export const ImportVmDtoSchema = {
    required: ['DisplayName', 'OsAdminPassword', 'ProviderId', 'ResourceComponentPropId'],
    type: 'object',
    properties: {
        VirtualMachineGuid: {
            type: 'string'
        },
        VmStatus: {
            type: 'string'
        },
        PublicIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        PrivateIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        KeyPairName: {
            type: 'string'
        },
        PublicNetworkEnabled: {
            type: 'boolean'
        },
        PrivateNetworkEnabled: {
            type: 'boolean'
        },
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        OsAdminName: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const ImportVmDto_RequestSchema = {
    required: ['DisplayName', 'OsAdminPassword', 'ProviderId', 'ResourceComponentPropId'],
    type: 'object',
    properties: {
        VirtualMachineGuid: {
            type: 'string'
        },
        VmStatus: {
            type: 'string'
        },
        PublicIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        PrivateIpAddresses: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/IpAddressDto:List'
            }
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        CResourceId: {
            type: 'integer',
            format: 'int32'
        },
        VirtualMachineId: {
            type: 'integer',
            format: 'int32'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        Description: {
            type: 'string'
        },
        KeyPairName: {
            type: 'string'
        },
        PublicNetworkEnabled: {
            type: 'boolean'
        },
        PrivateNetworkEnabled: {
            type: 'boolean'
        },
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        OsAdminName: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const TransferVmDtoSchema = {
    type: 'object',
    properties: {
        OwnerId: {
            type: 'integer',
            format: 'int32'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        UserName: {
            type: 'string'
        },
        DisplayName: {
            type: 'string'
        },
        OwnerName: {
            type: 'string'
        },
        OsTemplate: {
            type: 'string'
        },
        Status: {
            type: 'string'
        },
        CpuCores: {
            type: 'integer',
            format: 'int32'
        },
        RamSize: {
            type: 'integer',
            format: 'int32'
        },
        HardDriveSize: {
            type: 'integer',
            format: 'int32'
        }
    }
} as const;

export const VirtualMachineStatusDtoSchema = {
    type: 'object',
    properties: {
        VirtualMachineStatus: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const FetchMachinePasswordDtoSchema = {
    type: 'object',
    properties: {
        MachineId: {
            type: 'integer',
            format: 'int32'
        },
        Password: {
            type: 'string'
        },
        FileContents: {
            type: 'string'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const FetchMachinePasswordDto_RequestSchema = {
    type: 'object',
    properties: {
        MachineId: {
            type: 'integer',
            format: 'int32'
        },
        Password: {
            type: 'string'
        },
        FileContents: {
            type: 'string'
        }
    }
} as const;

export const VmOsTemplatesDtoSchema = {
    type: 'object',
    properties: {
        OsTemplates: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VmOsTemplateDto:List'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const VmOsTemplateDto_ListSchema = {
    required: ['AdminName', 'DisplayName'],
    type: 'object',
    properties: {
        OsTemplateId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        BaseOsType: {
            type: 'string'
        },
        BaseOsSystemName: {
            type: 'string'
        },
        ServerName: {
            type: 'string'
        },
        VhdPath: {
            type: 'string'
        },
        OsAdminPassword: {
            type: 'string'
        },
        ServerRoleId: {
            type: 'integer',
            format: 'int32'
        },
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        },
        IaasRefId: {
            type: 'string'
        },
        TemplateProperties: {
            '$ref': '#/components/schemas/Object'
        },
        ServerId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderName: {
            type: 'string'
        },
        UsageCount: {
            type: 'string'
        },
        IsWindows: {
            type: 'boolean'
        },
        TemplateSize: {
            type: 'integer',
            format: 'int32'
        },
        GenerationType: {
            type: 'integer',
            format: 'int32'
        },
        IaasOSTempConfig: {
            '$ref': '#/components/schemas/IaasConfigsDto'
        },
        AdminName: {
            type: 'string'
        },
        PublicNetworkName: {
            type: 'string'
        },
        PrivateNetworkName: {
            type: 'string'
        },
        RepositoryId: {
            type: 'integer',
            format: 'int32'
        },
        ProviderId: {
            type: 'integer',
            format: 'int32'
        },
        Cache: {
            type: 'boolean'
        },
        RepositoryDisplayName: {
            type: 'string'
        }
    }
} as const;

export const BaseOsTypesDtoSchema = {
    type: 'object',
    properties: {
        BaseOsTypes: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/BaseOsTypeDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;

export const BaseOsTypeDtoSchema = {
    type: 'object',
    properties: {
        ResourceComponentPropId: {
            type: 'integer',
            format: 'int32'
        },
        DisplayName: {
            type: 'string'
        },
        IsWindows: {
            type: 'boolean'
        },
        IsActive: {
            type: 'boolean'
        },
        DetailValue: {
            type: 'string'
        }
    }
} as const;

export const VLANDtoSchema = {
    type: 'object',
    properties: {
        VLANId: {
            type: 'integer',
            format: 'int32'
        },
        NetworkId: {
            type: 'string'
        },
        AddedBy: {
            type: 'integer',
            format: 'int32'
        },
        VLANName: {
            type: 'string'
        },
        VLANType: {
            type: 'string'
        }
    }
} as const;

export const VLANsDtoSchema = {
    type: 'object',
    properties: {
        VLANList: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/VLANDto'
            }
        },
        TotalRecords: {
            type: 'integer',
            format: 'int32'
        },
        ErrorCode: {
            type: 'string'
        },
        ErrorDesc: {
            type: 'string'
        }
    }
} as const;