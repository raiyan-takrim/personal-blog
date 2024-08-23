import { Pool } from 'pg';
// const { Pool } = require('pg')
import dotenv from 'dotenv'
// const dotenv = require('dotenv');
// import { dummyPosts } from '../data/data'
import { dummyPosts } from '../../../data/data';


dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const seed = async () => {
    try {
        await pool.connect()
        // Drop existing tables
        await pool.query(`DROP TABLE IF EXISTS posts;`);

        // Create tables
        await pool.query(`
        CREATE TABLE posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        body VARCHAR(255),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
        );
    `);

        // Insert seed data
        for (const post of dummyPosts) {
            // let index = 0
            await pool.query(`
                INSERT INTO posts (title, body)
                VALUES ('${post.title}', '${post.body}');`
            );
            console.log("quering...");
            // index++;
        }
        //     await pool.query(`
        //   INSERT INTO todos (title, body)
        //   VALUES 
        //     ('Buy groceries', 'Milk, Bread, Eggs, and Fruits', false),
        //     ('Complete Next.js project', 'Finish implementing the authentication module', false),
        //     ('Read a book', 'Read "Atomic Habits" by James Clear', true);
        // `);

        console.log('🌱 Database has been seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await pool.end();
        return Response
    }
};

export async function GET() {

    try {
        await seed();
        return Response.json({ message: 'Database seeded successfully' });
    } catch (err) {
        return Response.json({ err }, { status: 500 });
    }
}
