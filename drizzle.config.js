/** @type { import('drizzle-kit').Config} */
export default{
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials:{
        url : 'postgresql://neondb_owner:npg_EeUisW87dZuP@ep-empty-night-a8ztq9cp-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
    }
};