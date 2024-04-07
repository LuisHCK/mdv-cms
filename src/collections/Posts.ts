import { CollectionConfig } from 'payload/types'
import { SlugField } from '@nouance/payload-better-fields-plugin'
import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'

const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title'
    },
    access: {
        create: isAdmin,
        read: publishedOnly,
        readVersions: isAdmin,
        update: isAdmin,
        delete: isAdmin
    },
    fields: [
        {
            name: 'title',
            required: true,
            type: 'text'
        },
        {
            name: 'body',
            required: false,
            type: 'richText'
        },
        ...SlugField(
            {
                name: 'slug',
                admin: {
                    position: 'sidebar'
                }
            },
            {
                useFields: ['title']
            }
        )
    ]
}

export default Posts
