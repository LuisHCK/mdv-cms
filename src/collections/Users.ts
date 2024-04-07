import { CollectionConfig } from 'payload/types'
import { isAdminOrSelfFieldLevel } from '../access/isAdminOrSelf'
import { isAdminFieldLevel } from '../access/isAdmin'

const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email'
    },
    fields: [
        // Email added by default
        {
            name: 'roles',
            type: 'select',
            hasMany: true,
            defaultValue: ['public'],
            required: true,
            access: {
                read: isAdminOrSelfFieldLevel,
                create: isAdminFieldLevel,
                update: isAdminFieldLevel
            },
            options: ['admin', 'public']
        }
    ]
}

export default Users
